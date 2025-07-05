import { useNavigate } from 'react-router-dom';

export default function VoiceWebLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans overflow-x-hidden">

      <main className="flex flex-col items-center justify-center px-10 py-16 text-center bg-gradient-to-br from-blue-100 to-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-800">Control the Web with Your Voice</h1>
        <p className="text-base md:text-lg max-w-2xl mb-8 text-gray-700">
          VoiceWeb empowers you to navigate and interact with websites using intuitive voice commands. 
          Hands-free browsing has never been easier.
        </p>
        <button 
          onClick={() => navigate('/home')}
          className="h-12 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-md transition-all"
        >
          Get Started
        </button>
      </main>

      <section className="px-10 py-14 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">Key Features</h2>
        <p className="mb-8 max-w-3xl text-center mx-auto text-gray-600">
          Discover the powerful features that make VoiceWeb your go-to accessibility solution for voice-driven web interaction.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard title="Smart Voice Activation" description="Auto-detects when you're ready to speak, for seamless control without manual toggling." />
          <FeatureCard title="Interactive Control" description="Easily open links, click buttons, and navigate between sections—all with your voice." />
          <FeatureCard title="Universal Compatibility" description="Works on virtually any modern website—no extensions or special setup required." />
        </div>
      </section>

      <section className="bg-blue-50 px-10 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Revolutionize How You Browse</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-700">
          Whether you're multitasking, visually impaired, or just want a futuristic way to surf, VoiceWeb is your perfect companion.
        </p>
        <button 
          onClick={() => navigate('/home')}
          className="h-12 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-md transition-all"
        >
          Get Started
        </button>
      </section>

      <footer className="bg-white border-t border-gray-200 py-8 px-6 text-sm text-gray-600">
        <div className="flex justify-center flex-wrap gap-12 mb-6">
          <div className="max-w-xs">
            <h4 className="font-semibold text-gray-800 mb-2">Privacy Policy</h4>
            <p>We do not store your voice data. All processing is done locally in your browser for complete security and privacy.</p>
          </div>
          <div className="max-w-xs">
            <h4 className="font-semibold text-gray-800 mb-2">Terms & Conditions</h4>
            <p>VoiceWeb is provided as-is without warranties. Use responsibly and at your own risk. No data is sold or shared.</p>
          </div>
          <div className="max-w-xs">
            <h4 className="font-semibold text-gray-800 mb-2">Contact Us</h4>
            <p>For support, partnerships, or questions, email <a href="mailto:support@voiceweb.com" className="text-blue-600 underline">support@voiceweb.com</a>.</p>
          </div>
        </div>
        <p className="text-center text-gray-500">© 2025 VoiceWeb. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="font-semibold text-lg text-blue-700 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
