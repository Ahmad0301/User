import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Feedback:", formData);
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111418] text-white px-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">Feedback</h1>
        <p className="text-center text-[#9daab8]">We value your feedback. Please share your thoughts below.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-[#1c2126] border border-[#3c4753] placeholder-[#9daab8] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-[#1c2126] border border-[#3c4753] placeholder-[#9daab8] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Enter your feedback"
              className="w-full px-4 py-2 rounded-lg bg-[#1c2126] border border-[#3c4753] placeholder-[#9daab8] min-h-[120px] resize-none focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#197ce5] rounded-full text-white font-bold hover:bg-[#1268c3] transition"
          >
            Submit Feedback
          </button>
        </form>

        <div className="text-center pt-4">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-[#9daab8] hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
