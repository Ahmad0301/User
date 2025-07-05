import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HelpPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const faqs = [
    { question: "How do I log in using voice?", answer: "Say 'Log in' or 'Open login page' on the homepage." },
    { question: "How to enable microphone access?", answer: "Allow mic access in your browser permissions settings." },
    { question: "Can I use VoiceWeb on mobile?", answer: "Yes, VoiceWeb works on mobile devices with modern browsers." },
    { question: "Is my voice data safe?", answer: "Yes, we follow strict GDPR-compliant data handling practices." },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Support Request:", formData);
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-10 bg-white p-8 rounded-xl shadow-lg">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Help & Support</h1>
          <p className="text-sm text-gray-500 mt-1">Need assistance? You’re in the right place.</p>
        </div>

        {/* FAQ Search */}
        <div>
          <label className="block mb-2 text-sm font-medium">Search FAQs</label>
          <input
            type="text"
            placeholder="e.g. voice login"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* FAQ List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <p className="font-medium">{faq.question}</p>
                  <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No matching FAQs found.</p>
            )}
          </div>
        </div>

        {/* Voice-Controlled Help */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Voice-Controlled Help</h2>
          <p className="text-gray-600 text-sm mb-2">
            Try saying: <span className="italic">“Help me with login”</span> or <span className="italic">“How to submit feedback?”</span>
          </p>
          <div className="text-sm text-gray-500">
            (Voice help is powered by Web Speech API if supported by your browser.)
          </div>
        </div>

        {/* Chatbot Placeholder */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-2">Chatbot Assistant</h2>
          <p className="text-sm text-gray-600 mb-1">
            Our chatbot feature is under development. For now, please use the FAQ or contact form below.
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleContactChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleContactChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleContactChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg min-h-[100px] resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Back to Home */}
        <div className="text-center pt-4">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
