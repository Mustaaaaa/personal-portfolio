import logo from '../Assets/MoustafaLogo.png'
function Navbar() {
    return (
        <nav>
            <div className='flex flex-row justify-between group'>
                <a href="https://moustafa-dev.com/"><img className='w-40 mt-3 ml-20' src={ logo } alt='logo'/></a>
                <a href="" className='bg-orange-500 rounded-md w-40 flex justify-center items-center mr-20 mt-3 hover:bg-gray-950 group-hover:text-white ease-in duration-300'>
                    Contattami
                </a>
            </div>
        </nav>
    );
    }
    
    export default Navbar;