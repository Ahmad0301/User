import { useNavigate } from 'react-router-dom';

export default function VoiceWebLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white overflow-x-hidden font-sans">
      

      <main className="flex flex-col items-center justify-center px-10 py-12 text-center bg-cover bg-center" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDo_LWWWiXHlo0G9bZUTXG3eWgyE8eq5HZUJhP2331nzmXMPIntI_6FmTxmN358L8BV2asfjeSGO6jTofC9czfaTfDnqq-CxErmeOL0VCJxgrhjLg43oG5cpSO5OiQsFDxQQjA6338SG29o5PSMavFMB5z2esKLGqk9APGrdWJmIagY4oZJ5fugIwTXR6TtHsveSyf4-YMpDRwuplFKKJ5Ozan1Oc-vrrnX-k1PtUqpYyPDGbj3mzUutXvC1qKBmiHu36qV2z3HkoM3)' }}>
        <h1 className="text-4xl md:text-5xl font-black mb-2">Control Your Web with Your Voice</h1>
        <p className="text-base md:text-lg max-w-xl mb-6">Experience hands-free web browsing with our voice-activated commands. Navigate, interact, and control any website effortlessly.</p>
        <button className="h-10 md:h-12 px-5 rounded-full bg-blue-200 text-gray-900 font-bold text-sm md:text-base">
          Get Started
        </button>
      </main>

      <section className="px-10 py-10">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <p className="mb-6 max-w-2xl">Explore the capabilities that make VoiceWeb a revolutionary tool for web interaction.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FeatureCard title="Auto Voice Activation" description="Voice recognition starts automatically upon page load, allowing immediate voice commands." />
          <FeatureCard title="Interactive Element Control" description="Control all interactive elements, including headings, links, and buttons, with simple voice commands." />
          <FeatureCard title="Universal Website Compatibility" description="Works seamlessly with any website, providing a consistent voice control experience." />
        </div>
      </section>

      <section className="text-center px-10 py-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Web Browsing?</h2>
        <p className="mb-6 max-w-2xl mx-auto">Start using VoiceWeb today and transform how you interact with the web.</p>
        <button className="h-10 md:h-12 px-5 rounded-full bg-blue-200 text-gray-900 font-bold text-sm md:text-base">
          Get Started
        </button>
      </section>

      <footer className="text-center py-10 border-t border-gray-700">
        <div className="flex justify-center flex-wrap gap-6 mb-4">
          <button onClick={() => navigate('/privacy')} className="text-sm text-gray-400">Privacy Policy</button>
          <button onClick={() => navigate('/terms')} className="text-sm text-gray-400">Terms of Service</button>
          <button onClick={() => navigate('/contact')} className="text-sm text-gray-400">Contact Us</button>
        </div>
        <p className="text-sm text-gray-500">© 2024 VoiceWeb. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
      <h3 className="font-bold text-base mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
