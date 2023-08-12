
import useForm from '../../hooks/useForm';
import './your-info.css'


const initialState = {
    name: "",
    email: "",
    phoneNumber: ""
}
function validate(form) {
    const error = {}
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    if (!form.email.trim()) error.email = "Email field required"
    else if (!regexEmail.test(form.email.trim())) error.email = "Valid email required"
    if (!form.name.trim()) error.name = "Name field required"
    if (!form.phoneNumber.trim()) error.phoneNumber = "Phone number field required"
    return error;
}
export default function YourInfo({ addPersonalInfo }) {
    const {
        handleOnChange,
        handleOnBlur,
        handleOnSubmit,
        form,
        error
    } = useForm(initialState, validate, addPersonalInfo);

    return (
        <section className="your-info">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form className='your-info-form' onSubmit={handleOnSubmit}>
                <div className='input-div'>
                    <div className='input-text'>
                        <label htmlFor="name">Name</label>
                        {
                            error.name &&
                            <span>{error.name}</span>
                        }

                    </div>
                    <input className={error.name && "input-error"} onChange={handleOnChange} onBlur={handleOnBlur} value={form.name} type="text" name="name" placeholder='e.g.Sthepen King' />
                </div>
                <div className='input-div'>
                    <div className='input-text'>
                        <label htmlFor="email">Email Address</label>
                        {
                            error.email &&
                            <span>{error.email}</span>
                        }

                    </div>
                    <input className={error.email && "input-error"} onChange={handleOnChange} onBlur={handleOnBlur} value={form.email} type="email" name="email" placeholder='e.g. stephenking@lorem.com' />
                </div>
                <div className='input-div'>
                    <div className='input-text'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        {
                            error.phoneNumber &&
                            <span>{error.phoneNumber}</span>
                        }
                    </div>
                    <input className={error.phoneNumber && "input-error"} onChange={handleOnChange} onBlur={handleOnBlur} value={form.phoneNumber} type="number" name="phoneNumber" placeholder='e.g. +1 234 567 890' />
                </div>
                <button disabled={form.name == "" || form.email == "" || form.phoneNumber == ""} className='btn'>Next Step</button>

            </form>
        </section>
    );
}