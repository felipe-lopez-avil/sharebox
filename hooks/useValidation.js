import React, {useState, useEffect} from 'react'


const useValidation = (initialState, validate, fn) => {
    
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrors = Object.keys(error).length === 0;

            if(noErrors) {
                fn();
            }

            setSubmitForm(false);
        }
    }, [error]);

    // Función que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    // Función que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validate(values);
        setError(validationErrors);
        setSubmitForm(true);
    }

    return {
        values,
        error,
        submitForm,
        handleSubmit,
        handleChange
    }
}

export default useValidation
