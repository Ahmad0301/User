import React from "react";

export default function VoiceWebLanding() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#121416] overflow-x-hidden font-sans">
      <div className="layout-container flex h-full grow flex-col">
        

        <main className="px-40 py-5 flex-1 flex justify-center">
          <div className="layout-content-container max-w-[960px] w-full">
            <section className="flex flex-wrap justify-between gap-3 p-4">
              <div className="min-w-72 flex flex-col gap-3">
                <p className="text-white text-[32px] font-bold">VoiceWeb Features</p>
                <p className="text-[#a2abb3] text-sm">Explore the capabilities of VoiceWeb, designed to make web interaction seamless and hands-free.</p>
              </div>
            </section>

            <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Key Features</h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3 p-4 bg-[#1e2124] border border-[#40474f] rounded-lg">
                  <div className="text-white">{feature.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">{feature.title}</h2>
                    <p className="text-[#a2abb3] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="flex justify-center">
          <div className="max-w-[960px] w-full flex flex-col">
            <div className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap justify-center gap-6 sm:flex-row sm:justify-around">
                <a className="text-[#a2abb3] text-base" href="#">Terms of Service</a>
                <a className="text-[#a2abb3] text-base" href="#">Privacy Policy</a>
              </div>
              <p className="text-[#a2abb3] text-base">©2024 VoiceWeb. All rights reserved.</p>
            </div>
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
    icon: <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="..." /></svg>,
  },
  {
    title: "Form Filling with Voice",
    description:
      "Fill out forms using voice commands. Simply speak the information you want to enter, and VoiceWeb will automatically populate the fields.",
    icon: <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="..." /></svg>,
  },
  // Add other features here similarly...
];
