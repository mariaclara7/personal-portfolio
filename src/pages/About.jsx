import avatar from '../assets/images/avatar.png'

export default function About() {
    return (
        <section id="about" className="px-10">
            <h2 className="font-bold text-[35px] text-pink-500 mb-10">Sobre mim</h2>
            <div className='flex sm:flex-row flex-col justify-between items-center gap-10'>
                <img src={avatar} className='w-[180px] h-[180px]' />
                <div className='bg-white shadow-lg px-10 py-5 rounded-lg w-full text-slate-600'>
                    Me chamo Maria Clara e sou atuante na área de TI, com foco em desenvolvimento web.
                    <br/>
                    Com formação acadêmica em Engenharia da Computação e experiência prática em empresas, estou comprometida em impulsionar o sucesso dos projetos em que me envolvo.
                </div>
            </div>
        </section>
    )
}