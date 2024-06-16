import avatar from '../assets/images/avatar.png'

export default function About() {
    return (
        <section id="about" className="px-10">
            <h2 className="font-bold text-[35px] text-pink-500 mb-2">Sobre mim</h2>
            <div className='flex sm:flex-row flex-col justify-between items-center gap-10'>
                <img src={avatar} className='w-[250px] h-[250px]'/>
                <div className='bg-white shadow-lg px-10 py-5 rounded-lg w-full text-slate-700'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum massa id eros pharetra porta. In malesuada ante sit amet nibh viverra, luctus ornare ligula porta. 
                </div>
            </div>
        </section>
    )
}