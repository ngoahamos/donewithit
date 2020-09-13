import React from 'react';
import { useFormikContext } from 'formik';
import ImageInputList from '../ImageInputList';
import AppErrorMessage from './AppErrorMessage';


const AppFormImagePicker = ({name}) => {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    }

    const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(u => u !== uri));
    }

    return (
        <>
            <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}


export default AppFormImagePicker;