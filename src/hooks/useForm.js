import { useContext, useState } from "react";
import { StepContext } from "../context/stepContext";

export default function useForm(initialState, validate,addPersonalInfo) {
    const [form, setForm] = useState(initialState);
    const [error, setError] = useState({});
    const { nextStep, step } = useContext(StepContext);

    function handleOnChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    function handleOnBlur(e) {
        handleOnChange(e);
        setError(validate(form));
    }
    function handleOnSubmit(e) {
        e.preventDefault();
        setError(validate(form));
        if (Object.keys(error).length === 0 && step < 4) {
            addPersonalInfo(form.name,form.email,form.phoneNumber)
            nextStep();
        }

    }
    return {
        handleOnChange,
        handleOnBlur,
        handleOnSubmit,
        form,
        error
    }
}