import React from 'react';

import {
    GroupConatiner,
    FormInputContainer,
    FormInputLabel

} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupConatiner>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {label ? (
            <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
                 {label}
            </FormInputLabel>
           ) : null}
    </GroupConatiner>
);

export default FormInput;