import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const languageData = {
    en: {
      popupTitle: 'Choose Your Language',
      welcome: 'Hello! How can I assist you today?',
      footer1: 'National Legal Services Authority',
      footer2: 'Empowering Citizens through Technology',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      help: 'Help',
    },
    hi: {
      popupTitle: 'अपनी भाषा चुनें',
      welcome: 'नमस्ते! मैं आपकी कैसे सहायता कर सकता हूँ?',
      footer1: 'राष्ट्रीय विधिक सेवा प्राधिकरण',
      footer2: 'तकनीक के माध्यम से नागरिकों को सशक्त बनाना',
      privacy: 'गोपनीयता नीति',
      terms: 'सेवा की शर्तें',
      help: 'मदद',
    },
    ta: {
      popupTitle: 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்',
      welcome: 'வணக்கம்! நான் எவ்வாறு உதவலாம்?',
      footer1: 'தேசிய சட்ட சேவைகள் ஆணையம்',
      footer2: 'தொழில்நுட்பத்தின் மூலம் குடிமக்களை அதிகாரப்படுத்துதல்',
      privacy: 'தனியுரிமைக் கொள்கை',
      terms: 'சேவை விதிமுறைகள்',
      help: 'உதவி',
    },
    te: {
      popupTitle: 'మీ భాషను ఎంచుకోండి',
      welcome: 'హలో! నేను మీకు ఎలా సహాయపడగలను?',
      footer1: 'జాతీయ చట్ట సేవల సంస్థ',
      footer2: 'సాంకేతికత ద్వారా పౌరులను శక్తివంతం చేయడం',
      privacy: 'గోప్యతా విధానం',
      terms: 'సేవా నిబంధనలు',
      help: 'సహాయం',
    },
    bn: {
      popupTitle: 'আপনার ভাষা নির্বাচন করুন',
      welcome: 'হ্যালো! আমি কিভাবে সাহায্য করতে পারি?',
      footer1: 'জাতীয় আইনি পরিষেবা কর্তৃপক্ষ',
      footer2: 'প্রযুক্তির মাধ্যমে নাগরিকদের ক্ষমতায়ন',
      privacy: 'গোপনীয়তা নীতি',
      terms: 'পরিষেবার শর্তাবলী',
      help: 'সাহায্য',
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setMessages((prev) => [
      ...prev,
      { text: languageData[language].welcome, sender: 'bot' },
    ]);
  };

  const handleUserInput = (input) => {
    setMessages((prev) => [
      ...prev,
      { text: input, sender: 'user' },
      { text: 'Please provide more details about your complaint.', sender: 'bot' },
    ]);
  };

  return (
    <main className="chatbot-container">
      <header className="chatbot-header">
        <div className="logo-container">
          <img src="/prathinidhi.svg" alt="Emblem" className="logo" />
          <div>
            <h1>Prathinidhi</h1>
            <p>National Legal Form Portal</p>
          </div>
        </div>
      </header>

      <section className="chat-section">
        <div className="messages-container">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === 'user' ? 'user-message' : 'bot-message'}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Language Selection */}
        {messages.length === 0 && (
          <div className="language-selection">
            <div>{languageData[selectedLanguage].popupTitle}</div>
            {['en', 'hi', 'ta', 'te', 'bn'].map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className="language-btn"
              >
                {lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : lang === 'ta' ? 'தமிழ்' : lang === 'te' ? 'తెలుగు' : 'বাংলা'}
              </button>
            ))}
          </div>
        )}

        {/* User Input Area */}
        {messages.length > 0 && (
          <div className="user-input">
            <input
              type="text"
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === 'Enter' && handleUserInput(e.target.value)}
            />
          </div>
        )}

        {/* Display Buttons After Language Selection */}
        {messages.length > 0 && (
          <div className="action-buttons">
            <button className="action-btn">{languageData[selectedLanguage].privacy}</button>
            <button className="action-btn">{languageData[selectedLanguage].terms}</button>
            <button className="action-btn">{languageData[selectedLanguage].help}</button>
          </div>
        )}
      </section>

      <footer className="chatbot-footer">
        <div>{languageData[selectedLanguage].footer1}</div>
        <div>{languageData[selectedLanguage].footer2}</div>
      </footer>

      <style jsx>{`
        .chatbot-container {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          padding: 20px;
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
        }

        .chatbot-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #003366;
          color: white;
          padding: 20px;
          border-radius: 8px;
        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .logo {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }

        h1 {
          font-size: 26px;
          margin: 0;
        }

        .chat-section {
          margin-top: 20px;
          background-color: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          flex-grow: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .messages-container {
          max-height: 350px;
          overflow-y: auto;
          margin-bottom: 20px;
        }

        .user-message, .bot-message {
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .user-message {
          background-color: #e3f2fd;
          text-align: right;
        }

        .bot-message {
          background-color: #f5f5f5;
        }

        .language-selection {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 15px;
          padding: 20px 0;
        }

        .language-selection button {
          padding: 12px 18px;
          background-color: #0066cc;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .language-selection button:hover {
          background-color: #005bb5;
        }

        .user-input {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .user-input input {
          padding: 10px 15px;
          width: 80%;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .action-buttons {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .action-btn {
          background-color: #008cba;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .action-btn:hover {
          background-color: #00799c;
        }

        .chatbot-footer {
          text-align: center;
          margin-top: 20px;
          color: #888;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .chatbot-container {
            padding: 10px;
          }

          .logo-container {
            flex-direction: column;
            text-align: center;
          }

          .language-selection {
            flex-direction: column;
            align-items: center;
          }

          .action-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </main>
  );
};

export default Chatbot;
