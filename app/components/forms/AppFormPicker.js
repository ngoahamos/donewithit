import React from 'react';

import AppPicker from "../AppPicker";
import { useFormikContext } from 'formik';
import AppErrorMessage from './AppErrorMessage';

const AppFormPicker = ({items, name, numColumns, PickerItemComponent, placeholder}) => {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
            <AppPicker
                items={items} 
                onSelectedItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                numColumns={numColumns}
                selectedItem={values[name]} 
                />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;