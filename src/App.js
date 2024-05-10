import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Hackathon from './pages/Hackathons';
import Builders from './pages/Builders';
import Discover from './pages/Discover';
import Footer from './components/Footer/Footer';

function App() {
    const [selectedOption, setSelectedOption] = useState();

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
            import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
            Chatbot.init({
                chatflowid: "a0aa74ec-6496-4767-ac64-557356bbc110",
                apiHost: "https://flowiseai-railway-production-c064.up.railway.app",
                chatflowConfig: {
                    // topK: 2
                },
                theme: {
                    button: {
                        backgroundColor: "#3B81F6",
                        right: 20,
                        bottom: 20,
                        size: "medium",
                        iconColor: "white",
                        customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                        iconSize: 40, // Increase the size of the icon
                    },
                    chatWindow: {
                        welcomeMessage: "Ask Anything About Divyanshu !",
                        backgroundColor: "#ffffff",
                        height: 600,
                        width: 400,
                        fontSize: 16,
                        poweredByTextColor: "#303235",
                        botMessage: {
                            backgroundColor: "#f7f8ff",
                            textColor: "#303235",
                            showAvatar: true,
                            avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                        },
                        userMessage: {
                            backgroundColor: "#3B81F6",
                            textColor: "#ffffff",
                            showAvatar: true,
                            avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                        },
                        textInput: {
                            placeholder: "Technical Skills of Divyanshu ?",
                            backgroundColor: "#ffffff",
                            textColor: "#303235",
                            sendButtonColor: "#3B81F6",
                        }
                    }
                }
            });
        `;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="App">
            <Header />
            <NavBar selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
            {selectedOption === 'discover' && <Discover />}
            {selectedOption === 'hackathons' && <Hackathon />}
            {selectedOption === 'builders' && <Builders />}
           
            <Footer />
        </div>
    );
}

export default App;
