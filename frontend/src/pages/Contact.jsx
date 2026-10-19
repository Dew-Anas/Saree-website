import { useState } from "react";
import { FiArrowUpRight, FiMail, FiMessageCircle } from "react-icons/fi";

const emptyForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.message || "Something went wrong.");
        return;
      }

      setStatus("success");
      setFeedback("Thank you. Your message has been sent.");
      setForm(emptyForm);
    } catch {
      setStatus("error");
      setFeedback("Unable to connect. Please try again.");
    }
  };

  const labelClass = "text-[10px] uppercase tracking-[0.18em] text-muted";

  const inputClass =
    "mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition-colors duration-300 focus:border-burgundy";

  return (
    <main className="bg-ivory text-ink">
      {/* Editorial hero */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-16">
        <div className="mb-8 flex items-center justify-between border-b border-line pb-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold-text">
            RSK SAREES
          </p>

          <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
            A PERSONAL NOTE
          </p>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[1fr_0.9fr] md:gap-16">
          {/* Hero copy */}
          <div className="order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.28em] text-gold-text">
              We are here for you
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1.08] text-burgundy sm:text-6xl lg:text-7xl">
              Every beautiful
              <span className="block italic">choice begins</span>
              <span className="block">with a conversation.</span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-muted md:text-base">
              Whether you are choosing a saree for a special occasion or need a
              little help with your order, we would love to hear from you.
            </p>

            <a
              href="#contact-form"
              className="group mt-8 inline-flex items-center gap-4 border-b border-gold-text pb-2 text-[10px] uppercase tracking-[0.2em] text-burgundy transition-colors hover:text-gold-text"
            >
              Start a conversation
              <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <p className="mt-12 font-serif text-xl italic text-burgundy/70">
              With care, RSK.
            </p>
          </div>

          {/* Existing website hero image */}
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] overflow-hidden bg-[#E8DED0]">
              <img
                src="/images/saree-12.png"
                alt="Discover the Alapicca Sarees collection"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>

            <div className="absolute -bottom-4 -left-3 border border-line bg-ivory px-5 py-4 sm:-left-5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-gold-text">
                Thoughtfully chosen
              </p>
              <p className="mt-1 font-serif text-lg text-burgundy">
                Made for your moments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section id="contact-form" className="border-t border-line bg-[#F3EBDD]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-24 md:py-24">
          {/* Contact information */}
          <aside>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold-text">
              The boutique concierge
            </p>

            <h2 className="mt-5 max-w-sm font-serif text-4xl leading-tight text-burgundy md:text-5xl">
              A little help goes a long way.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              Tell us what you are looking for. From product questions to order
              assistance, we will do our best to make your experience a lovely
              one.
            </p>

            <div className="mt-10 space-y-7 border-t border-line pt-7">
              <div className="flex gap-4">
                <FiMail className="mt-1 shrink-0 text-lg text-gold-text" />

                <div>
                  <p className={labelClass}>Email enquiries</p>
                  <p className="mt-2 text-sm leading-6 text-ink">
                    Send us your question through the form.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiMessageCircle className="mt-1 shrink-0 text-lg text-gold-text" />

                <div>
                  <p className={labelClass}>Personal assistance</p>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                    Every enquiry matters. Let us know how we can help you.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Functional contact form */}
          <div className="border-t border-burgundy/30 pt-7 md:pt-9">
            <div className="mb-9 flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-text">
                  We are listening
                </p>

                <h2 className="mt-3 font-serif text-3xl text-burgundy md:text-4xl">
                  Write to us.
                </h2>
              </div>

              <span className="font-serif text-3xl italic text-gold-text/70">
                01
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="How should we address you?"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={100}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Where can we reach you?"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>
                  Subject *
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  minLength={3}
                  maxLength={150}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Your message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a little more..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={2000}
                  className={`${inputClass} resize-y`}
                />

                <p className="mt-2 text-right text-[10px] tracking-wide text-muted">
                  {form.message.length} / 2000
                </p>
              </div>

              {/* Honeypot spam field */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-between bg-burgundy px-6 py-4 text-ivory transition-colors duration-300 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-64"
              >
                <span className="text-[10px] uppercase tracking-[0.2em]">
                  {status === "sending"
                    ? "Sending your message..."
                    : "Send your message"}
                </span>

                <FiArrowUpRight className="ml-6 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              {feedback && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`border-l-2 px-4 py-3 text-sm leading-6 ${
                    status === "success"
                      ? "border-gold-text text-gold-text"
                      : "border-burgundy text-burgundy"
                  }`}
                >
                  {feedback}
                </p>
              )}

              <p className="text-xs leading-6 text-muted">
                Your details will be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
