import CountUp from 'react-countup';


const Stats = () => {


    return (
        <div className='flex flex-wrap lg:flex-nowrap lg:h-[calc(10vh)] h-[calc(20vh)] lg:gap-10'>
            <div className='flex items-center gap-3 w-1/2'>
                <CountUp className='lg:text-6xl text-4xl text-orange-500 font-bold' end='1' duration={5} delay={1}/>
                <p className='lg:w-[calc(90px)] text-sm lg:text-lg m-0 font-semibold text-black'>Anni di esperienza</p>
            </div>
            <div className='flex items-center gap-3 w-1/2'>
                <CountUp className='lg:text-6xl text-4xl text-orange-500 font-bold' end='6' duration={5} delay={1}/>
                <p className='lg:w-[calc(90px)] text-sm lg:text-lg m-0 font-semibold text-black'>Progetti finiti</p>
            </div>
            <div className='flex items-center gap-3 w-1/2'>
                <CountUp className='lg:text-6xl text-4xl text-orange-500 font-bold' end='64' duration={5} delay={1}/>
                <p className='lg:w-[calc(90px)] text-sm lg:text-lg m-0 font-semibold text-black'>Repository su GitHub</p>
            </div>
            <div className='flex items-center gap-3 w-1/2'>
                <CountUp className='lg:text-6xl text-4xl text-orange-500 font-bold' end='5' duration={5} delay={1}/>
                <p className='lg:w-[calc(90px)] text-sm lg:text-lg m-0 font-semibold text-black'>Tecnologie padroneggiate</p>
            </div>
        </div>
    );
}

export default Stats;