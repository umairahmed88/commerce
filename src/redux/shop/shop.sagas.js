import { takeLatest, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from './shops.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess, 
    fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsAsync() {
    yield console.log('I am triggered');

    try {

        const collectionRef = firestore.collection('collection');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap, 
            snapshot
        );
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield (fetchCollectionsFailure(error.message))
    }


    // collectionRef
    // .get()
    // .then(snapShot => {
    //     const CollectionsMap = convertCollectionsSnapshotToMap(snapShot);
    //     dispatch(fetchCollectionsSuccess(CollectionsMap));
    // })
    // .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync 
    ); 
}

export function* rootSagas() {
    yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}