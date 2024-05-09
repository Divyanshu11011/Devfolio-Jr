import React, { useState } from 'react';
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
