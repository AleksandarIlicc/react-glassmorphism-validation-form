import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import SuccessMessage from './SuccessMessage';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <section className='form'>
            <div className='form__container'>
                <h2 className='title'>Contact Us</h2>
                {!isSubmitted && <RegistrationForm setIsSubmitted={setIsSubmitted} />}
                {isSubmitted && <SuccessMessage />}
                <div className='circle--1'></div>
                <div className='circle--2'></div>
                <div className='square--1'></div>
                <div className='square--2'></div>
                <div className='square--3'></div>
            </div>
        </section>
    )
}

export default Form;