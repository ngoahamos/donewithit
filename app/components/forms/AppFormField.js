import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

const AppFormField = ({name, ...otherProps}) => {
    const {setFieldTouched, handleChange, touched, errors} = useFormikContext();
    return (
        <>
            <AppTextInput 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <AppErrorMessage style={styles.text} visible={touched[name]} error={errors[name]} />
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        alignSelf: "flex-start"
    }
})

export default AppFormField;