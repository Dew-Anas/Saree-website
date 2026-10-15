import { Link } from 'react-router-dom'

function Footer(){
    return(

        // Footer start
        <footer className="border-t border-line bg-burgundy px-8 py-10 text-ivory">
            
            {/*mai div */}
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">

                {/* 2nd div start */}
                <div className="max-w-sm">

                    <h2 className="text-2xl font-bold"> RSK  Ssrees</h2>

                    <p className="mt-2 text-sm opacity-80">Elegant sarees, woven with tradition and sty
                        led for today.</p>
                </div>
                {/* 2nd div end */}


                {/* lef dive */}
                <div className="flex flex-col gap-2 text-sm">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                </div>
            </div>

            {/*end div */}

            <p className="mt-8 border-t border-gold pt-4 text-xs opacity-70">
            © {new Date().getFullYear()} RSK Sarees. All rights reserved.
            </p>

        </footer>
    )
}

export default Footer