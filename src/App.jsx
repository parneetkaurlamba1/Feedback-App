
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedBackList';
import feedbackData from './data/feedbackdata';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './page/AboutPage';
import AboutIconlink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'
function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <FeedbackProvider>
    <Router
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }} basename="/Feedback-App"
>
      <Header />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats/>
                <FeedbackList
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />
        </Routes>
        <AboutIconlink/>

      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
