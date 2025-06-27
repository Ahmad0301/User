import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Components/SignupPage";
import ForgotPasswordPage from "./Components/ForgotPasswordPage";
import HomePage  from "./Pages/HomePage";
import ContactPage from "./Pages/ContactusPages";
import Feature from "./Pages/Feature";
import MicrophoneAccessPrompt from "./Pages/EnableMicrophone";
import voice from "./Pages/Voice";
import error from "./Pages/error";
import Navbar from "./Components/Navbar";
import FeedbackPage from "./Pages/Feedback";





function App() {
  return (
        <div>
          <Navbar />
    <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/forgot" element={<ForgotPasswordPage/>} />
       <Route path="/home" element={<HomePage/>} />
        <Route path="/contactus" element={<ContactPage/>} />
        <Route path="/feature" element={<Feature/>} />
        <Route path="/microphone" element={<MicrophoneAccessPrompt/>} />
        <Route path="/voice" element={<voice/>} />
        <Route path="/error" element={<error/>} />
        <Route path="/feedback" element={<FeedbackPage/>} />








      </Routes>
        </div>
  
  );
}

export default App;
