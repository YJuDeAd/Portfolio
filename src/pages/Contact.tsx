import React, { useState } from "react";

const EMAIL = "robinrashi@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Wire this up to your own backend/API endpoint, or swap
      // this block for a service like Formspree/EmailJS.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  // TODO: Connect https://api.web3forms.com/submit
  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl text-bold font-[500]">
        Contact Me
      </h1>
      <p className="text-neutral-400 text-sm mb-10">
        Have a role, project, or question in mind? Send a message, or reach
        me directly at{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-neutral-200 underline underline-offset-4 hover:text-neutral-100"
        >
          {EMAIL}
        </a>
        .
      </p>

      <br/>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-neutral-400 mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border border-neutral-700 rounded-md px-4 py-2.5 text-neutral-100 text-sm focus:outline-none focus:border-neutral-500 transition-colors shadow-md/90"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm text-neutral-400 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-neutral-700 rounded-md px-4 py-2.5 text-neutral-100 text-sm focus:outline-none focus:border-neutral-500 transition-colors shadow-md/90"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm text-neutral-400 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border border-neutral-700 rounded-xl px-4 py-2.5 text-neutral-100 text-sm focus:outline-none focus:border-neutral-500 transition-colors resize-none shadow-md/90"
            placeholder="What's on your mind?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-2.5 rounded-md border border-neutral-700 text-neutral-100 text-sm hover:border-neutral-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md/90"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-400">
            Thanks — your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Try emailing directly instead.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;