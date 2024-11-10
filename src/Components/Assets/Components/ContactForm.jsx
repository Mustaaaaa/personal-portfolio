import React, { useState } from "react";
import Swal from 'sweetalert2';

import ContactMe from './ContactMe'

const ContactForm = () => {
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const newErrors = {};

        if (!formData.get("name")) newErrors.name = "Il nome è obbligatorio.";
        if (!formData.get("lastname")) newErrors.lastname = "Il cognome è obbligatorio.";

        const email = formData.get("email");
        if (!email) {
            newErrors.email = "L'email è obbligatoria.";
        } else if (!/^[^@]+@[^@]+\.[a-z]{2,}$/i.test(email)) {
            newErrors.email = "Inserisci un'email valida.";
        }

        const number = formData.get("number");
        if (!number) {
            newErrors.number = "Il numero di telefono è obbligatorio.";
        } else if (!/^\d{10}$/.test(number)) {
            newErrors.number = "Inserisci un numero di telefono valido (10 cifre).";
        }

        if (!formData.get("message")) newErrors.message = "Il messaggio è obbligatorio.";

        return newErrors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        formData.append("access_key", "80394403-01ba-42d5-891d-67cf8f56faf9");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: "Inviato con successo!",
                    icon: "success",
                    confirmButtonText: 'Chiudi',
                    confirmButtonColor: '#F97316',
                    customClass: {
                        confirmButton: 'rounded-full'
                    }
                });
                event.target.reset();
                setErrors({});
            } else {
                Swal.fire({
                    title: 'Errore!',
                    text: 'Riprova a compilare il form e rinviarlo!',
                    icon: 'error',
                    confirmButtonText: 'Chiudi',
                    confirmButtonColor: '#F97316',
                    customClass: {
                        confirmButton: 'rounded-full'
                    }
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Errore di rete!',
                text: 'Si è verificato un problema con la connessione. Riprova più tardi.',
                icon: 'error',
                confirmButtonText: 'Chiudi',
                confirmButtonColor: '#F97316',
                customClass: {
                    confirmButton: 'rounded-full'
                }
            });
        }
    };

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center lg:h-full '>
            <div className="flex flex-col h-[calc(80vh)] lg:h-auto justify-center items-center w-full mt-20 lg:mt-0 lg:items-end p-5 lg:w-1/2">
                <form onSubmit={onSubmit} noValidate className=" bg-gray-50 shadow-2xl p-10 rounded-xl">
                    <h1 className="text-orange-500 text-2xl pb-10">Contattami!</h1>
                    <div className="mb-4 flex justify-between">
                        <div className="w-5/12">
                            <input name="name" type="text" placeholder=" Nome" className="pl-5 h-14 w-full border-2 rounded-md border-orange-500" />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div className="w-5/12">
                            <input name="lastname" type="text" placeholder=" Cognome" className="pl-5 h-14 w-full border-2 rounded-md border-orange-500" />
                            {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
                        </div>
                    </div>
                    <div className="mb-4">
                        <input name="email" type="email" placeholder=" Email" className="pl-5 h-14 w-full border-2 rounded-md border-orange-500" />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <input name="number" type="tel" maxLength="10" placeholder=" Numero di telefono" className="pl-5 h-14 w-full border-2 rounded-md border-orange-500" />
                        {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
                    </div>
                    <div className="mb-4">
                        <textarea name="message" placeholder=" Scrivi il tuo messaggio" className="pl-5 pt-2 h-40 w-full border-2 rounded-md border-orange-500 resize-none"></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="flex justify-center items-center w-28 h-10 bg-white border-2 border-orange-500 text-orange rounded-full hover:bg-orange-500 hover:text-white duration-500 ">Invia</button>
                </form>
            </div>

            <div className="flex h-[calc(50vh)] justify-center items-center lg:h-auto p-10 lg:justify-start w-full lg:pl-40 lg:w-1/2">
                <ContactMe />

            </div>
        </div>
    );
};

export default ContactForm;
