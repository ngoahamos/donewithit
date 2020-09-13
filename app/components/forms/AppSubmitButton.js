import React from 'react';
import { useFormikContext } from 'formik'

import AppButton from "../AppButton";

const AppSubmitButton = ({title}) => {
    const {handleSubmit} = useFormikContext();
    return (
        <AppButton title = {title} onPressed={handleSubmit} />
    );
}

export default AppSubmitButton;