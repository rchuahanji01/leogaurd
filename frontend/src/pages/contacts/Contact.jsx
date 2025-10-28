// import React, { useState } from "react";
// import "./Contact.css";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", form);
//     alert("Thank you for contacting us!");
//   };

//   return (
//     <div className="contact-page">
//       {/* Hero */}
//       <section className="contact-hero">
//         <h1>Contact Us</h1>
//         <p>
//           Have questions about our products or partnership opportunities?
//           We’d love to hear from you.
//         </p>
//       </section>

//       {/* Contact Info + Form */}
//       <section className="contact-grid">
//         {/* Info block */}
//         <div className="contact-info">
//           <h2>Get in Touch</h2>
//           <p>
//             Reach out to us via the form or through the details below.
//             Our team will respond as quickly as possible.
//           </p>

//           <div className="info-card">
//             <h3>Head Office</h3>
//             <p>LeoGuard Pharmaceuticals, Mumbai, India</p>
//           </div>
//           <div className="info-card">
//             <h3>Email</h3>
//             <p>info@leoguardpharma.com</p>
//           </div>
//           <div className="info-card">
//             <h3>Phone</h3>
//             <p>+91 98765 43210</p>
//           </div>
//           <div className="info-card">
//             <h3>Working Hours</h3>
//             <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
//           </div>
//         </div>

//         {/* Contact form */}
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <h2>Send us a message</h2>
//           <label>
//             Full Name *
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             Email *
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             Phone
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Subject
//             <input
//               type="text"
//               name="subject"
//               value={form.subject}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Message *
//             <textarea
//               name="message"
//               rows="5"
//               value={form.message}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <button type="submit" className="btn-primary">
//             Send Message
//           </button>
//         </form>
//       </section>

//       {/* Map */}
//       <section className="contact-map">
//         <iframe
//           title="LeoGuard Pharma Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.836994!2d72.877655!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import axios from "axios";
import envvar from "../../index"; // make sure this exports baseurl
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return alert("Please fill Name, Email and Message.");
    }

    try {
      setLoading(true);
      const res = await axios.post(`${envvar.baseurl}/sendemail`, form);
      if (res.data && res.data.success) {
        alert("Thank you — your message has been sent!");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert(res.data.message || "Failed to send message");
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      alert("Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions about our products or partnership opportunities? We’d love to hear from you.</p>
      </section>

      {/* Contact Info + Form */}
      <section className="contact-grid">
        {/* Info block */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Reach out to us via the form or through the details below. Our team will respond as quickly as possible.</p>

          <div className="info-card">
            <h3>Head Office</h3>
            <p>LeoGuard Pharmaceuticals, Mumbai, India</p>
          </div>
          <div className="info-card">
            <h3>Email</h3>
            <p>info@leoguardpharma.com</p>
          </div>
          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <h3>Working Hours</h3>
            <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
          </div>
        </div>

        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>
          <label>
            Full Name *
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email *
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
          </label>
          <label>
            Subject
            <input type="text" name="subject" value={form.subject} onChange={handleChange} />
          </label>
          <label>
            Message *
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* Map */}
      <section className="contact-map">
        <iframe
          title="LeoGuard Pharma Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.836994!2d72.877655!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
