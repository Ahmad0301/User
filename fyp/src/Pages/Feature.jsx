import React from "react";

export default function Feature() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden font-sans text-gray-800">
      <div className="layout-container flex h-full grow flex-col">

        <main className="px-10 md:px-40 py-10 flex-1 flex flex-col items-center">
          <div className="layout-content-container max-w-[960px] w-full">
            
            {/* Header */}
            <section className="flex flex-wrap justify-between gap-3 p-4">
              <div className="min-w-72 flex flex-col gap-3">
                <p className="text-gray-900 text-3xl font-bold">VoiceWeb Features</p>
                <p className="text-gray-600 text-sm">
                  Explore the capabilities of VoiceWeb, designed to make web interaction seamless and hands-free.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <h2 className="text-gray-800 text-xl font-bold px-4 pb-3 pt-8">Key Features</h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 p-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-3 p-4 bg-gray-100 border border-gray-300 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-500">{feature.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-gray-900 text-base font-semibold leading-tight">{feature.title}</h2>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why VoiceWeb Section */}
            <div className="p-4 pt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Why Choose VoiceWeb?</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Accessibility-first: Perfect for visually impaired users.</li>
                <li>Productivity boost: Perform tasks without lifting a finger.</li>
                <li>Modern technology: Built using the latest Web Speech API.</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="p-4 pt-10 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to Explore?</h2>
              <p className="text-gray-600 mb-4">Try VoiceWeb now and revolutionize your web experience.</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-[960px] w-full mx-auto flex flex-col items-center py-8 px-5">
            <div className="flex flex-wrap justify-center gap-6 text-gray-500 mb-4">
              <a href="#" className="hover:text-blue-600">Terms of Service</a>
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            </div>
            <p className="text-sm text-gray-500">© 2024 VoiceWeb. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

const features = [
  {
    title: "Voice-Controlled Navigation",
    description:
      "Navigate websites effortlessly using voice commands. Say 'Go to Home' or 'Click on Contact Us' to move around the site without manual input.",
    icon: <svg width="24" height="24" fill="currentColor"><path d="M12 2L2 12h3v8h14v-8h3z" /></svg>,
  },
  {
    title: "Form Filling with Voice",
    description:
      "Fill out forms using voice commands. Speak the input, and fields will populate automatically.",
    icon: <svg width="24" height="24" fill="currentColor"><path d="M4 4h16v2H4V4zm0 6h16v2H4v-2zm0 6h10v2H4v-2z" /></svg>,
  },
  {
    title: "Voice Feedback",
    description:
      "Get instant voice feedback to confirm actions, improving usability and interaction.",
    icon: <svg width="24" height="24" fill="currentColor"><path d="M12 3v18m6-6H6" /></svg>,
  },
  {
    title: "Multilingual Support",
    description:
      "Supports multiple languages to interact globally and inclusively.",
    icon: <svg width="24" height="24" fill="currentColor"><path d="M2 5h20v2H2V5zm0 6h20v2H2v-2zm0 6h14v2H2v-2z" /></svg>,
  },
];
