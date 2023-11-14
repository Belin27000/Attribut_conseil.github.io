import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'
import { Link } from 'react-router-dom';
// import Button from '@/components/Buttons/Button/Button.js';
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";


const Contact = () => {

    const [formValid, setFormValid] = useState(false)
    const [firstNameValid, setFirstNameValid] = useState('')
    const [lastNameValid, setLastNameValid] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [phoneValid, setPhoneValid] = useState('')
    const stringRegex = /^[a-zA-Z-]+$/; //Regex champs nom & prénom
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //Regex email
    const phoneRegex = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/; //Regex phone number

    const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        emailjs.sendForm(emailjsServiceId, emailjsTemplateId, form.current, emailjsPublicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const validate = async (formData) => {
        let isValid = true;
        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const phone = formData.get("phone")
        const email = formData.get("email")
        if (!firstName.match(stringRegex)) {
            setFirstNameValid("Merci de préciser votre prénom sans chiffre ou caractère spéciaux")
            isValid = false;
        }
        if (!lastName.match(stringRegex)) {
            setLastNameValid("Merci de préciser votre nom sans chiffre ou caractère spéciaux")
            isValid = false;
        }
        if (!email.match(emailRegex)) {
            setEmailValid("Merci de préciser un email valide")
            isValid = false;
        }
        if (!phone.match(phoneRegex)) {
            setPhoneValid("Merci de préciser un numero de téléphone valide")
            isValid = false;
        }
        return isValid

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFirstNameValid('')
        setLastNameValid('')
        setEmailValid('')
        setPhoneValid('')
        const form = e.target
        const formData = new FormData(form)
        const isValid = await validate(formData)


        console.log(isValid);
        if (isValid) {
            sendEmail(e)
            setFormValid(true)
        }
        // form.reset()
    }

    return (
        <div className='contact'>
            {/* <h1 className='sr-only' tabIndex={0}>Attribut conseils bilans de compétences en Ile de France, Seine et marne et Essonne - contact</h1> */}

            <h2 className='contact-title'>Nous contacter</h2>
            <p>Contactez nous ! Attribut conseils vous proposera un premier rendez-vous d’information gratuit. </p>
            <div className='mail'>
                <div className='mail-Logo'>
                    <FaRegEnvelope />
                </div>
                <div className='mail-List'>
                    <a href='mailto:contact@attribut-conseils.com'>contact@attribut-conseils.com</a>
                </div>
            </div>
            <div className='phone'>
                <div className='phone-Logo'>
                    <FaPhone />
                </div>
                <div className='phone-List'>
                    <a href='tel:09.84.36.12.37'>09.84.36.12.37</a>
                    <a href='tel:06.98.88.15.55'>06.98.88.15.55</a>
                </div>
            </div>
            <div className='form-container'>
                {!formValid ? (
                    <form ref={form} className='contact-form' onSubmit={(e) => handleSubmit(e)}>
                        <div>

                            <div className='contact-form-contact'>
                                <div className='check'>
                                    Je suis*
                                    <div className="check-wrapper">
                                        <input name="individual" type="checkbox" id="individual" />
                                        <label htmlFor="individual">un particulier</label>
                                        {lastNameValid && <div id="lastNameErrorMSg" className="error">{lastNameValid}</div>}
                                    </div>
                                    <div className="check-wrapper">
                                        <input name="company" type="checkbox" id="company" />
                                        <label htmlFor="company">une entreprise</label>
                                        {lastNameValid && <div id="lastNameErrorMSg" className="error">{lastNameValid}</div>}
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="lastName">Nom*</label>
                                    <input name="lastName" type="text" id="lastName" />
                                    {lastNameValid && <div id="lastNameErrorMSg" className="error">{lastNameValid}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="firstName">Prénom*</label>
                                    <input name="firstName" type="text" id="firstName" />
                                    {firstNameValid && <div id="firstNameErrorMSg" className="error">{firstNameValid}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="email">Adresse mail*</label>
                                    <input name="email" type="email" id="email" ></input>
                                    {emailValid && <div id="emailErrorMSg" className="error">{emailValid}</div>}
                                </div>
                            </div>
                            <div className='contact-form-contact'>
                                <div className="input-wrapper">
                                    <label htmlFor="phone">Téléphone*</label>
                                    <input name="phone" type="tel" id="phone" />
                                    {phoneValid && <div id="emailErrorMSg" className="error">{phoneValid}</div>}
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="Message">Message</label>
                                    <textarea type="text" id="Message" name="Message" />
                                </div>
                            </div>

                        </div>
                        <button className="contact-send">Envoyer</button>
                    </form>
                ) : (<div className='contact-form-sent'>
                    <p>Le formulaire a bien été envoyé</p>
                    {/* <Button name={'Retour à l\'accueil'} path={'/home'} /> */}
                </div>
                )}
            </div>
        </div >
    );
};

export default Contact;