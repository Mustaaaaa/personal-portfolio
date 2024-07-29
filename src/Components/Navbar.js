import logo from '../Assets/MoustafaLogo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center justify-center space-x-8'>
                    <a href="https://moustafa-dev.com/"><img className='w-40 mt-3 ml-20' src={logo} alt='logo' /></a>
                    <Link className='mt-3' to="/">Home</Link>
                    <Link className='mt-3' to="AboutMe">Biografia</Link>
                    <Link className='mt-3' to="MyProjects">Progetti</Link>
                </div>
                <div className='group mt-3 transition'>
                    <a href="https://moustafa-dev.com/contact-us"
                        className='h-8 bg-orange-500 rounded-2xl w-40 flex justify-center items-center 
                    mr-20 mt-3 hover:bg-gray-950 group-hover:text-white duration-300  animate-pulse'>
                        Contattami
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;