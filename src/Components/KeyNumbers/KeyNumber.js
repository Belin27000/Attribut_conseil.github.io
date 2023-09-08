import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '@/Components/KeyNumbers/keyNumber.css'

const KeyNumber = () => {

    const [countYear, setCountYear] = useState(1)
    const [countPeople, setCountPeople] = useState(1000)
    const [countExpert, setCountExpert] = useState(1)
    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    useEffect(() => {
        let intervalYear;

        if (inView) {
            intervalYear = setInterval(() => {
                if (countYear < 15) {
                    setCountYear((prevCount) => prevCount + 1);
                } else {
                    clearInterval(intervalYear); // Arrête l'incrémentation lorsque le compteur atteint 15
                }
            }, 400);
        }

        return () => {
            clearInterval(intervalYear); // Assurez-vous d'arrêter l'intervalle lors du démontage du composant
        };
    }, [inView, countYear]);

    useEffect(() => {
        let intervalPeople;

        if (inView) {
            intervalPeople = setInterval(() => {
                if (countPeople < 2100) {
                    setCountPeople((prevCount) => prevCount + 1);
                } else {
                    clearInterval(intervalPeople); // Arrête l'incrémentation lorsque le compteur atteint 2100
                }
            }, 4);
        }

        return () => {
            clearInterval(intervalPeople);
        };
    }, [inView, countPeople]);

    useEffect(() => {
        let intervalExpert;

        if (inView && countExpert < 6) {
            intervalExpert = setInterval(() => {
                setCountExpert((prevCount) => prevCount + 1);
            }, 1200);
        }

        return () => {
            clearInterval(intervalExpert);
        };
    }, [inView, countExpert]);

    return (

        <ul className='KeyNumber' ref={ref}>
            {inView && countYear <= 15 && (
                <li>
                    <span className='AcNumber'>+{countYear}</span>
                    <span className='AcText'>années d'expérience</span>
                </li>
            )}
            {inView && countPeople <= 2100 && (
                <li>
                    <span className='AcNumber'>+{countPeople}</span>
                    <span className='AcText'>personnes accompagnées</span>
                </li>
            )}
            {inView && countExpert <= 6 && (
                <li>
                    <span className='AcNumber'>{countExpert}</span>
                    <span className='AcText'>formateurs, consultants experts, coachs</span>
                </li>
            )}
        </ul>



    );
};

export default KeyNumber;