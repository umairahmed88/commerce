import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { fetchCollectionStart } from '../../../redux/shop/shop.actions';

import { 
    firestore, 
    convertCollectionsSnapshotToMap 
} from '../../../firebase/firebase.utils';
// import { updateCollections } from '../../../redux/shop/shop.actions';
import WithSpinner from '../../with-spinner/with-spinner.component';
import { CollectionOverviewContainer } from '../../collections-overview/collections-overview.styles';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionStart, match }) => {
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart]);
    // unsubscribeFromSnapshot = null;

    // componentDidMount() {
    //     const { updateCollections } = this.props;
    //     const collectionRef = firestore.collection('collections');

    //     this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
    //        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    //        updateCollections(collectionsMap);
    //        this.setState({ loading: false });
    //     });
    // }
 
    return (
        <div>
            <Route 
                exact 
                path={`${match.path}`}
                component = {CollectionOverviewContainer} 
            />

            {/* <Route 
                exact 
                path={`${match.path}`} 
                render={(props) => (
                    <CollectionOverviewWithSpinner isLoading={loading} {...props} />
                )}
            /> */}
            <Route 
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
                // render={(props) => (
                //     <CollectionPageWithSpinner isLoading={loading} {...props} />
                //     )}
                />
        </div>
    );
    }

const mapDispatchToProps = dispatch => ({
        fetchCollectionsStart: dispatch(updateCollections(fetchCollectionsStart))
});

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);