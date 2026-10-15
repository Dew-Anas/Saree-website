import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
const heroImages =[
    '/images/hero-1.png',
    '/images/hero-2.png',
    '/images/hero-3.png',
    '/images/hero-4.jpg',
    '/images/hero-5.jpg',

]

const categories=[
    {
        name:"Silk" ,
        images:"/images/saree-4.png",
        featured:true,
        caption: "A legacy woven in silk."
    },

    {
        name:"Cotton", 
        images:"/images/saree-11.png",
        caption: "Comfort, dressed beautifully.",
    },

    {
        name:"Georgette",
         images:"/images/hero-1.png",
         caption: "Made for moments that matter.",
    },

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
        <main>
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
        </section>



             {/*next section Featured Products section */}
            <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className=" mb-10 flex items-end justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-gold-text">
                            Handpicked For You
                        </p>

                        <h2 className="mt-2 font-serif text-3xl text-burgundy md:text-5xl">
                            Featured Sarees
                        </h2>

                        <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                            Timless drapes,thoughtfully chosen for your  most beautiful moments
                        </p>
                    </div>

                    <Link to="/shop" className="hidden items-center gap-2 border-b border-gold pb-2 text-sm text-burgundy transition-colors duration-300 hover:text-gold-text sm:flex">
                        Explore collection
                    </Link>
                </div>

                {/*product show using Asymetric product cards  */}

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8">
                    {products[0] && (
                        <div className="md:row-span-2">
                            <ProductCard
                                product={products[5]}
                                
                            />
                        </div>
                    )}

                    {/*supporting products */}
                    <div className="grid grid-cols-2 gap-4 self-start sm:gap-6">
                        {products.slice(1,3).map((product)=>(
                            <ProductCard
                                key={product.id}
                                product={product}
                                
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile View All Link */}
                <div className="mt-10 flex justify-center sm:hidden">
                    <Link
                         to="/shop"
                        className="border-b border-gold pb-2 text-sm text-burgundy"
                    >
                       Explore All Sarees 
                    </Link>
                    </div>

                
            </section>

            {/*catagory Section */}

            <section className="bg-surface py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-text">
                        Explore
                    </p>
                    <h2 className="mt-2 font-serif text-3xl text-burgundy">
                        Shop by Caregory
                    </h2>

                        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-12">
                                {categories.map((category, index) => (
                     <Link  
                         key={category.name}
                        to={`/shop?category=${encodeURIComponent(category.name)}`}
                        className={`group relative block min-w-0 overflow-hidden bg-ivory ${
                        index === 0
                        ? "md:col-span-7"
                        : index === 1
                        ? "md:col-span-5 md:mt-16"
                        : "md:col-span-8 md:col-start-3"
                            }`}
                    >


                    <div
                        className={`relative overflow-hidden ${
                        index === 0
                        ? "aspect-[5/4] md:aspect-[5/4]"
                        : index === 1
                        ? "aspect-[4/5]"
                        : "aspect-[16/9]"
                            }`}
                    >


                    <img
                        src={category.images}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-ground/75 via-dark-ground/10 to-transparent transition-opacity duration-500 group-hover:from-dark-ground/85" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">

                    <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">

                    <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-ivory/80">
                         {category.featured ? "The Signature Collection" : "Discover the Collection"}
                    </p>

                    <h3 className="font-serif text-3xl text-ivory sm:text-4xl">
                        {category.name}
                    </h3>

                    <p className="mt-2 max-w-xs text-sm text-ivory/90">
                        {category.caption}
                    </p>
                    </div>


                    <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/60 text-ivory transition-all duration-300 group-hover:border-ivory group-hover:bg-ivory group-hover:text-burgundy">
                    <span aria-hidden="true"><VscFileSymlinkDirectory /></span>
                     </span>
                        </div>
                    </div>
             </Link>
             ))}
            </div>
            </div>
            </section>

        </main>

         
        
    );
}

export default Home