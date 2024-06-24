import avatar from '../assets/images/avatar.png'

export default function About() {
    return (
        <section id="about" className="lg:px-10 px-2 py-10">
            <h2 className="font-bold text-[35px] text-pink-500 mb-10">Sobre mim</h2>
            <div className='flex sm:flex-row flex-col justify-between items-center gap-10'>
                <img src={avatar} className='w-[180px] h-[180px]' />
                <div className='bg-white shadow-lg lg:px-10 px-5 py-5 rounded-lg w-full lg:flex-row flex-col flex gap-10'>
                    <p className='text-slate-700 lg:w-[50%] w-[100%]'>
                        Me chamo Maria Clara e sou atuante na área de TI, com foco em desenvolvimento web.
                        <br />
                        Com formação acadêmica em Engenharia da Computação e experiência prática em empresas, estou comprometida em impulsionar o sucesso dos projetos em que me envolvo.
                    </p>
                    <div className='lg:w-[50%] w-[100%]'>
                        <div className='flex flex-col mb-5'>
                            <h3 className='font-semibold text-slate-700 leading-3'>HTML5 e CSS3</h3>
                            <span className='self-end'>95%</span>
                            <div className='w-[95%] h-[5px] rounded-full bg-emerald-400 mt-2'>
                            </div>
                        </div>
                        <div className='flex flex-col my-5'>
                            <h3 className='font-semibold text-slate-700 leading-3'>JavaScript</h3>
                            <span className='self-end'>90%</span>
                            <div className='w-[90%] h-[5px] rounded-full bg-orange-400 mt-2'>
                            </div>
                        </div>
                        <div className='flex flex-col mt-5'>
                            <h3 className='font-semibold text-slate-700 leading-3'>React.js</h3>
                            <span className='self-end'>85%</span>
                            <div className='w-[85%] h-[5px] rounded-full bg-purple-500 mt-2'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}