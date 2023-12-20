import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Contact = () => {
    const form = useRef();

    const [formValid, setFormValid] = useState(false)
    const [firstNameValid, setFirstNameValid] = useState('')
    const [lastNameValid, setLastNameValid] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [phoneValid, setPhoneValid] = useState('')
    const [whom, setWhom] = useState('')
    const [whomValid, setWhomValid] = useState('')
    const stringRegex = /^[a-zA-Z-]+$/; //Regex champs nom & prénom
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //Regex email
    const phoneRegex = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/; //Regex phone number

    // const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const emailjsServiceId = 'service_b5eblol';
    // const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const emailjsTemplateId = 'template_v4zfbmw';
    // const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const emailjsPublicKey = 'co2IW4LcdoDCQpEws'

    const sendEmail = (e) => {

        e.preventDefault();
        // console.log('serviceId', emailjsServiceId);
        // console.log('Template', emailjsTemplateId);
        // console.log('form', form.current);
        // console.log('publicKey', emailjsPublicKey);
        emailjs.sendForm(emailjsServiceId, emailjsTemplateId, form.current, emailjsPublicKey)
            // emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsPublicKey)
            .then((result) => {
                // console.log(result.text);
            }, (error) => {
                // console.log(error.text);
            });
    };

    const validate = async (formData) => {
        let isValid = true;
        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const whomAmI = !whom
        if (whomAmI) {
            setWhomValid("Merci de choisir une des options ci-dessus")
            isValid = false;
        } else {
            setWhomValid(false)
        }
        if (!firstName.match(stringRegex)) {
            setFirstNameValid("Merci de préciser votre prénom sans chiffre ou caractère spéciaux")
            isValid = false;
        } else {
            setFirstNameValid(false)
        }
        if (!lastName.match(stringRegex)) {
            setLastNameValid("Merci de préciser votre nom sans chiffre ou caractère spéciaux")
            isValid = false;
        } else {
            setLastNameValid(false)
        }
        if (!email.match(emailRegex)) {
            setEmailValid("Merci de préciser un email valide")
            isValid = false;
        } else {
            setEmailValid(false)
        }
        if (!phone.match(phoneRegex)) {
            setPhoneValid("Merci de préciser un numero de téléphone valide")
            isValid = false;
        } else {
            setPhoneValid(false)
        }
        return isValid

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        console.log(form);
        const formData = new FormData(form)
        console.log(form);
        const isValid = await validate(formData)
        setFirstNameValid('')
        setLastNameValid('')
        setEmailValid('')
        setPhoneValid('')


        console.log(isValid);
        if (isValid) {
            sendEmail(e)
            setFormValid(true)
        }
    }

    return (
        <div className='contact'>
            {/* <h1 className='sr-only' tabIndex={0}>Attribut conseils bilans de compétences en Ile de France, Seine et marne et Essonne - contact</h1> */}

            <h2 className='contact-title'>Nous contacter</h2>
            <p className='yellow'>Vous êtes intéressé par un de nos services ?</p>
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
                    <a href='tel:06.98.88.15.55'>06.98.88.15.55</a>
                </div>
            </div>
            <div className='form-container'>
                {!formValid ? (
                    <form ref={form} className='contact-form' onSubmit={(e) => handleSubmit(e)}>
                        <div className='contact-form-all'>
                            <div className='contact-form-contact'>
                                <div className='check'>
                                    Je suis*
                                    <div>
                                        <div>
                                            <input name="whom" type="radio" id="particulier" value="particulier" onChange={e => setWhom(e.target.value)} />
                                            <label htmlFor="particulier">un particulier</label>
                                        </div>
                                        <div>
                                            <input name="whom" type="radio" id="entreprise" value="entreprise" onChange={e => setWhom(e.target.value)} />
                                            <label htmlFor="entreprise">une entreprise</label>
                                        </div>
                                    </div>
                                    {whomValid && <div id="whomErrorMSg" className="error">{whomValid}</div>}
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
                                    <label htmlFor="interestSelect">Je suis intéressé(e) par*</label>
                                    <select id="interestSelect" name="interest">
                                        <option value="bilan-de-compétences">bilan de compétences</option>
                                        <option value="accompagnement-VAE">accompagnement VAE</option>
                                        <option value="bilan-d’orientation-jeune">bilan d’orientation jeune</option>
                                        <option value="Accompagnement-à-la-recherche-d’emploi">Accompagnement à la recherche d’emploi</option>
                                        <option value="Coaching">Coaching</option>
                                        <option value="Psychologie-du-travail">Psychologie du travail</option>
                                        <option value="Accompagnement-à-la-création-d’entreprise">Accompagnement à la création d’entreprise</option>
                                        <option value="Formation de formateurs">Formation de formateurs</option>
                                        <option value="Formation de consultant en bilan / Conseiller emploi">Formation de consultant en bilan / Conseiller emploi</option>
                                        <option value="Ingénierie et administration de la formation">Ingénierie et administration de la formation</option>
                                        <option value="Je souhaite être recontacté(e) pour échanger">Je souhaite être recontacté(e) pour échanger</option>
                                    </select>

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
                    <Link to={'/home'}>Retour à l'acceuil</Link>
                    {/* <Button name={'Retour à l\'accueil'} path={'/home'} /> */}
                </div>
                )}

            </div>
            <p className='yellow'>Siège social :</p>
            <p className='adresse'>161 rue Saint Merry </p>
            <p className='adresse'>77300 Fontainebleau</p>
            <ul>
                <li>Nos bureaux sont accessibles aux personnes en situation de handicap</li>
                <li>Nous disposons de bureaux secondaires sur les villes de Melun, Varennes Jarcy et Milly la Forêt </li>
            </ul>
        </div >
    );
};

export default Contact;