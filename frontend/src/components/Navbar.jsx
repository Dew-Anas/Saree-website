import { Link } from "react-router-dom"

function Navbar(){
    return(

        //main nav bar design//
        <nav className="flex items-center justify-between border-b border-line bg-surface px-8 py-4">
        
            {/* this  brand name and logo */}
            <Link to="/" className="text-2xl font-bold text-burgundy">
                    Saree Boutique
            </Link>

            <div>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>
        </nav>

    )
}

export default Navbar