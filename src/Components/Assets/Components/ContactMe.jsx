import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const ContactMe = () => {


    return (
        <div className=''>
            <div className='flex'>
                <span className='flex justify-center items-center rounded-full h-16 w-16 bg-orange-500 text-3xl text-white'>
                    <FontAwesomeIcon icon={faPhone} />
                </span>
                <div>
                    <p className='pl-7 text-lg'>Numero di telefono</p>
                    <p className='pl-7 text-xl font-semibold'>(+39) 329 364 2148</p>
                </div>
            </div>
            <div className='flex pt-5'>
                <span className='flex justify-center items-center rounded-full h-16 w-16 bg-orange-500 text-3xl text-white'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div>
                    <p className='pl-7 text-lg'>Email</p>
                    <p className='pl-7 text-xl font-semibold'>moustafaibrahim1512@gmail.com</p>
                </div>
            </div>
            <div className='flex pt-5'>
                <span className='flex justify-center items-center rounded-full h-16 w-16 bg-orange-500 text-3xl text-white'>
                    <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <div>
                    <p className='pl-7 text-lg'>Indirizzo</p>
                    <p className='pl-7 text-xl font-semibold'>24047, Bergamo, Italia</p>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;