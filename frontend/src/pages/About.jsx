import { Gem, Truck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
    {
    icon: Gem,
    title: "Premium Quality",
    text: "Carefully chosen fabrics and fine craftsmanship in every saree.",
  },
  
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Safely packed and delivered to your doorstep on time.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Payment",
    text: "Pay with confidence using Stripe's secure checkout.",
  },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <section className="text-center">
        <p className="text-sm uppercase tracking-widest text-gold-text">Our Story</p>
        <h1 className="mt-3 text-4xl font-semibold text-burgundy italic "> Timeless Sarees, Woven with Love</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted"> RSK Sarees brings you handpicked        sarees that blend traditional
          craftsmanship with modern elegance, made for every special moment.</p>
      </section>

    
    <section className="relative mt-24 overflow-hidden bg-ivory py-10 md:py-16">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:gap-20 lg:px-12">

    {/* Editorial Image */}
    <div className="relative mx-auto w-full max-w-lg md:mx-0">
      <div className="absolute -bottom-4 -left-4 h-full w-full border border-/50 md:-bottom-5 md:-left-5" />

      <div className="relative overflow-hidden bg-line">
        <img
          src="/images/about.png"
          alt="Discover the elegance and craftsmanship of Alapicca Sarees"
          className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[500px] md:h-[560px]"
          loading="lazy"
        />
      </div>

      <div className="absolute -bottom-3 right-4 bg-burgundy px-5 py-3 text-ivory sm:right-6">
        <p className="font-serif text-lg italic">
          Woven with grace
        </p>
      </div>
    </div>

    {/* Brand Story */}
    <div className="relative pt-5 md:pt-0">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold-text">
        The heart of RSK
      </p>

      <h2 className="max-w-xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-burgundy sm:text-5xl lg:text-6xl">
        More than a saree.
        <span className="mt-1 block italic text-gold-text">
          A feeling to cherish.
        </span>
      </h2>

      <div className="my-7 h-px w-16 bg-gold-text" />

      <p className="max-w-lg text-base leading-8 text-muted">
        Every saree tells a story of beauty, tradition and individuality.
        At Alapicca, we bring together thoughtfully chosen fabrics,
        captivating colours and timeless designs to make every moment
        feel a little more special.
      </p>

      <p className="mt-5 max-w-lg text-base leading-8 text-muted">
        From everyday elegance to unforgettable celebrations, discover
        sarees that feel as beautiful as the memories you create in them.
      </p>

      <a
        href="/shop"
        className="group mt-8 inline-flex items-center gap-4 border-b border-gold pb-2 text-sm font-medium uppercase tracking-[0.16em] text-burgundy transition-colors duration-300 hover:text-gold-text"
      >
        Discover our collection
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </a>

      <p className="mt-10 font-serif text-2xl italic text-gold-text/80">
        Elegance, in every thread.
      </p>
    </div>

  </div>
</section>

<section className="mt-16">
  <h2 className="text-center text-2xl font-semibold text-burgundy">
    Why Choose Us
  </h2>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
      {reasons.map((reason) => (
        <div
        key={reason.title}
        className="rounded-lg border border-line bg-surface p-6 text-center">
          <reason.icon className="mx-auto h-8 w-8 text-gold-text" />
          <h3 className="mt-4 text-lg font-semibold text-ink">{reason.title}</h3>
           <p className="mt-2 text-sm text-muted">{reason.text}</p>
      </div>
      ))}
  </div>
</section>

<section className="mt-16 text-center">
  <Link
    to="/shop"
    className="inline-block rounded-md bg-burgundy px-8 py-3 font-medium text-white transition hover:opacity-90"
  >
    Shop Now
  </Link>
</section>
</div>
  );
}

export default About;