
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowUp,
  FiMail,
} from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: FaFacebookF,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/",
      icon: FaWhatsapp,
    },
    {
      name: "X",
      href: "https://x.com/",
      icon: FaXTwitter,
    },
  ];

  return (
    <footer className="bg-burgundy text-ivory">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 md:py-10">

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 md:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">

            <Link to="/" className="inline-flex items-baseline gap-2">
              <span className="font-serif text-3xl tracking-wide">
                RSK
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-text">
                Sarees
              </span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-ivory/70">
              Timeless drapes. Thoughtfully chosen.
              A celebration of tradition and modern elegance.
            </p>

            <Link
              to="/shop"
              className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gold-text transition-colors hover:text-ivory"
            >
              Discover the collection
              <FiArrowUpRight size={15} />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-text">
              Explore
            </h3>

            <nav className="flex flex-col items-start gap-3 text-sm text-ivory/75">
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>

              <Link to="/shop" className="transition-colors hover:text-white">
                Shop Sarees
              </Link>

              <Link to="/about" className="transition-colors hover:text-white">
                Our Story
              </Link>

              <Link to="/favourites" className="transition-colors hover:text-white">
                Wishlist
              </Link>
            </nav>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-text">
              Customer Care
            </h3>

            <nav className="flex flex-col items-start gap-3 text-sm text-ivory/75">
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact Us
              </Link>

              <Link to="/cart" className="transition-colors hover:text-white">
                Shopping Bag
              </Link>

              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <FiMail size={14} />
                Email Us
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-text">
              Follow Along
            </h3>

            <p className="mb-4 text-sm leading-6 text-ivory/70">
              New arrivals, timeless styles and a little inspiration.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-all duration-200 hover:border-gold hover:bg-gold hover:text-burgundy"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-ivory/15 pt-4 text-[11px] text-ivory/55 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} RSK Sarees. All rights reserved.
          </p>

          <p className="tracking-wide">
            Elegance in every drape.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex w-fit items-center gap-1.5 transition-colors hover:text-gold-text"
          >
            Back to top
            <FiArrowUp size={13} />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
