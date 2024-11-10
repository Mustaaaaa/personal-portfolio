import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const ContactMe = () => {


    return (
        <div className=''>
            <div className='flex'>
                <span className='flex justify-center items-center rounded-full h-12 w-12 lg:h-16 lg:w-16 bg-orange-500 lg:text-3xl text-white'>
                    <FontAwesomeIcon icon={faPhone} />
                </span>
                <div>
                    <p className='lg:pl-7 pl-3 lg:text-lg text-sm'>Numero di telefono</p>
                    <p className='lg:pl-7 pl-3 lg:text-xl font-semibold text-lg'>(+39) 329 364 2148</p>
                </div>
            </div>
            <div className='flex pt-5'>
                <span className='flex justify-center items-center rounded-full h-12 w-12 lg:h-16 lg:w-16 bg-orange-500 lg:text-3xl text-white'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div>
                    <p className='lg:pl-7 pl-3 lg:text-lg text-sm'>Email</p>
                    <p className='lg:pl-7 pl-3 lg:text-xl font-semibold text-lg'>moustafaibrahim1512@gmail.com</p>
                </div>
            </div>
            <div className='flex pt-5'>
                <span className='flex justify-center items-center rounded-full h-12 w-12 lg:h-16 lg:w-16 bg-orange-500 lg:text-3xl text-white'>
                    <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <div>
                    <p className='lg:pl-7 pl-3 lg:text-lg text-sm'>Indirizzo</p>
                    <p className='lg:pl-7 pl-3 lg:text-xl font-semibold text-lg'>24047, Bergamo, Italia</p>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;