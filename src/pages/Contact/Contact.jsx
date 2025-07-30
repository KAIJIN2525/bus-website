import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+234 800 123 4567', '+234 803 987 6543'],
      description: '24/7 Customer Support'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['support@bustickets.ng', 'info@bustickets.ng'],
      description: 'We reply within 24 hours'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: ['123 Ikeja Way, Lagos', 'Plot 456 Wuse II, Abuja'],
      description: 'Mon - Fri: 8AM - 6PM'
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: ['Mon - Fri: 6AM - 10PM', 'Sat - Sun: 7AM - 9PM'],
      description: 'Customer service hours'
    }
  ];

  return (
    <div className="w-full mt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 text-white py-20">
        <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-violet-100 leading-relaxed">
              We're here to help you with any questions or concerns about your journey
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 -mt-16 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 p-6 text-center hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <info.icon className="text-4xl text-violet-600 dark:text-violet-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
                {info.title}
              </h3>
              <div className="space-y-1 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-neutral-600 dark:text-neutral-400 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-8">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
                    placeholder="+234 803 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100 appearance-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="refund">Refund Request</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Contact & Social */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-8">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+2348001234567"
                  className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200 group"
                >
                  <div className="bg-green-600 text-white p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 dark:text-neutral-100">
                      WhatsApp Support
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      +234 800 123 4567
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+2348001234567"
                  className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 group"
                >
                  <div className="bg-blue-600 text-white p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 dark:text-neutral-100">
                      Call Center
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      24/7 Available
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:support@bustickets.ng"
                  className="flex items-center gap-4 p-4 bg-violet-50 dark:bg-violet-900/20 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors duration-200 group"
                >
                  <div className="bg-violet-600 text-white p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800 dark:text-neutral-100">
                      Email Support
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      support@bustickets.ng
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-8">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 group"
                >
                  <FaFacebook className="text-2xl text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-neutral-800 dark:text-neutral-100">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-sky-50 dark:bg-sky-900/20 rounded-xl hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors duration-200 group"
                >
                  <FaTwitter className="text-2xl text-sky-600 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-neutral-800 dark:text-neutral-100">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors duration-200 group"
                >
                  <FaInstagram className="text-2xl text-pink-600 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-neutral-800 dark:text-neutral-100">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200 group"
                >
                  <FaWhatsapp className="text-2xl text-green-600 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-neutral-800 dark:text-neutral-100">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                Need Quick Answers?
              </h3>
              <p className="text-violet-100 mb-6">
                Check our frequently asked questions for instant help
              </p>
              <button className="bg-white text-violet-600 font-semibold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors duration-300">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;