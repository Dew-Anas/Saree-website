import { Link, NavLink} from "react-router-dom"
import { useState } from "react"
import { FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png"
import { useFavourites } from "../context/FavouritesContext";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const links =[
    {to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
]

function Navbar(){
    const [open, setOpen] =useState(false);

    {/* nav bar heart icon cod details  */}
    const { favourites } = useFavourites();

    {/* nav bart cart icon number increase */}
    const { cartCount } = useCart();

    const {user, logout} = useAuth();

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

                    <Link to="/favourites" className=" relative text-ink hover:text-burgundy">
                    <FiHeart size={22} />
                    {favourites.length > 0 &&(
                        <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-burgundy px-1 text-[10px] text-ivory">
                        {favourites.length}
                        </span>
                        )}
                    </Link>

                    <Link to="/cart" className="relative text-ink hover:text-burgundy gap-3">
                     <FiShoppingCart size={22} />

                     {/* cart icon number increase after add to crd buttun click */}
                     {cartCount > 0 &&(
                        <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-burgundy px-1 text-[10px] text-ivory">
                            {cartCount}
                        </span>
                     )}
                    </Link>

                    

                    {user ? (
                        <div div className="flex items-center gap-4">
                            <img
                             src={user.picture}
                             alt={user.name}
                             referrerPolicy="no-referrer"
                             className="h-8 w-8 rounded-full object-cover gap-3" />
                             <span className="hidden text-sm text-ink md:inline gap-2">
                                {user.name}
                             </span>
                             <button
                              onClick={logout}
                              className="rounded-md border border-burgundy px-3 py-1 text-sm text-burgundy transition hover:bg-burgundy hover:text-white"
                              >
                                Logout

                             </button>

                             </div>
                    ):(
                        <NavLink
                         to="/login"
                          className="rounded-md bg-burgundy px-4 py-1.5 text-sm text-white transition hover:opacity-90">

                            Login

                        </NavLink>

                    )}
                   



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