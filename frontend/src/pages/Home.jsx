import { useState ,useEffect} from "react"
import { Link } from "react-router-dom"
const heroImages =[
    '/images/hero-1.png',
    '/images/hero-2.png',
    '/images/hero-3.png',
    '/images/hero-4.jpg',
]


function Home(){
    {/* staus change */}
    const[current, setCurent]=useState(0)

    {/* photo change after 3 second  */}
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurent((prev)=>(prev+1)% heroImages.length)
        },4000)
        return ()=>clearInterval(timer)
    },[])
    
    return(
        //home page full controlle
        <section className=" relative flex min-h-[80vh] items-center bg-dark-ground px-8 text-ivory" >

            {/* image smooth animat */}

            {heroImages.map((src,index) =>(
                <div

                    key={src}
                    className={`absolute inset-0 bg-cover bg-[center_20%] md:bg-[center_top] transition-opacity duration-1000 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                    }`}
                
                     style={{ backgroundImage: `url('${src}')` }}
                    
                    />


                    
                
            ))}

            {/*dark over lay */}

            <div className="absolute inset-0 bg-dark-ground/70">

            </div>


            {/* main dive left sile */}
            <div className=" relative z-10 max-w-xl animate-fade-up motion-reduce:animate-none">
                

                 <p className="font-elegant uppercase tracking-[0.3em] text-sm">
                Timeless Elegance — In Every Drape
                 </p>

                  <h1 className="mt-8 font-elegant text-5xl md:text-7xl">
                 More Than a Saree,
                </h1>
                
                <p className="mt-2 font-script text-7xl md:text-9xl text-[#D9B56E]">
                It's a Feeling
                </p>

                <p className="mt-6 max-w-md leading-7 text-white/80">
                Discover exquisite sarees that celebrate tradition,
                elegance, and your unique story.
                </p>

                
                <p className="mt-4 text-ivory/80">
                    Discover handpicked silk sarees crafted for every celebration.
                </p>

                <button className="mt-8 rounded-xl bg-[#D9B56E] px-8 py-4
                font-semibold text-[#191613] transition hover:scale-105">
                <Link to="/shop">
                    Explore Collection
                </Link>
                </button>
                  
            </div>
            {/* left side dive end */}


          
        </section>
    )
}

export default Home