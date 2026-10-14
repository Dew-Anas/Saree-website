import { Link, NavLink} from "react-router-dom"
import { useState } from "react"
import { FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png"


const links =[
    {to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
]

function Navbar(){
    const [open, setOpen] =useState(false);
    return(
            //maincontent
        <header className="sticky top-0 z-50 border-b border-line bg-ivory">

            {/* nav bar design */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between  py-2">

                {/* Logo and Brrand name design*/}
                <Link to="/" className="text-xl font-semibold text-burgundy">
                <img
                    src={logo}
                    alt="aravika sarees"
                    className="h-16 w-auto object-contain"
                />
                </Link>

                {/*Nav bar linkgs Destop */}
                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((link) =>(
                        <li key={link.to}>
                            <NavLink to={link.to}
                            end
                            className={({isActive})=>
                            isActive
                            ? "text-gold-text font-medium"
                            : "text-ink hover:text-burgundy"
                            }>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">

                    <Link to="/favourites" className="text-ink hover:text-burgundy">
                    <FiHeart size={22} />
                    </Link>

                    <Link to="/cart" className="text-ink hover:text-burgundy">
                     <FiShoppingCart size={22} />
                    </Link>



                    {/*mobile menu is open and clos function */}
                    <button
                    onClick={() => setOpen(!open)}
                    className="text-ink md:hidden"
                    aria-label="Toggle menu"
                    >
                    {open ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>

                </div>
            </nav>

            {/*mobile menu bar links */}

            {
                open &&(
                    <ul className="border-t border-line bg-ivory px-4 pb-4 md:hidden">
                        {links.map((link)=>(
                            <li key={link.to}>
                                <NavLink
                                to={link.to}
                                end
                                onClick={()=> setOpen(false)}
                                className={({isActive})=>
                                isActive
                                 ? "block py-3 text-gold-text font-medium"
                                : "block py-3 text-ink hover:text-burgundy"}>

                                    {link.label}

                                </NavLink>
                            </li>
                        ))}
                    </ul>

                )

            }



        </header>

    )
}

export default Navbar