import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoTestView from "./features/audioTest/component/testerView";
import Signup from './features/auth/component/signup';
import Signin from './features/auth/component/signin';
import RapidTest from './features/rapidTest/component/rapidTest';
import AudioTest from './features/audioTest/component/audioTest';
import Header from './features/shared/component/header';
import Footer from './features/shared/component/footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-container mt-5 mb-5">
        <Routes>

          <Route path="/" element={<RapidTest />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/video-test" element={<VideoTestView />} />
          <Route path="/audio-test" element={<AudioTest />} />
          <Route path="*" element={<div>404 Not Found</div>} />

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
