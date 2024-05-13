import React, { useState } from 'react';
import Hackathon from '../../pages/Hackathons';
import Builders from '../../pages/Builders';
import Discover from '../../pages/Discover';

const NavBar = () => {
    const [selectedOption, setSelectedOption] = useState('discover');
    const [hoveredOption, setHoveredOption] = useState(null);

    // Function to handle option change
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    // Dynamic style based on state
    const getButtonStyle = (option) => {
        let style = { ...styles.button };
        if (selectedOption === option) {
            style = { ...style, background: '#3770ff' }; // Selected state background
        } else if (hoveredOption === option) {
            style = { ...style, background: 'rgba(55, 112, 255, 0.2)' }; // Hover state background only if not selected
        }
        return style;
    };
    

    const getParagraphStyle = (option) => {
        let style = { ...styles.p };
       
        if (selectedOption === option) {
            style = { ...style, color: 'white' }; // Change text color on hover
        }
        return style;
    };

    // Function to render selected component based on option
    const renderComponent = () => {
        switch (selectedOption) {
            case 'discover':
                return <Discover />;
            case 'hackathons':
                return <Hackathon />;
            case 'builders':
                return <Builders />;
            default:
                return null;
        }
    };

    return (
        <div style={{ paddingTop: '2px' , backgroundColor: '#f5f7f7' }}>
            <div direction="column" style={styles.container}>
                <nav style={styles.nav}>
                    <ul style={styles.ul}>
                        {['discover', 'hackathons', 'builders'].map(option => (
                            <li key={option} style={styles.li}>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={selectedOption === option}
                                    onClick={() => handleOptionChange(option)}
                                    onMouseEnter={() => setHoveredOption(option)}
                                    onMouseLeave={() => setHoveredOption(null)}
                                    style={getButtonStyle(option)}
                                >
                                    <p style={getParagraphStyle(option)}>{option.charAt(0).toUpperCase() + option.slice(1)}</p>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {renderComponent()}
        </div>
    );
};

const styles = {
    container: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        paddingTop: '12px',
        paddingBottom: '12px'
    },
    nav: {
        boxSizing: 'border-box',
        display: 'flex'
    },
    ul: {
        padding: '0px',
        margin: '0px',
        display: 'flex',
        flexWrap: 'nowrap',
        width: '100%',
        background: 'rgb(240, 244, 255)',
        borderRadius: '8px',
        listStyleType: 'none',
        boxSizing: 'border-box'
    },
    li: {
        padding: '4px',
        flex: '1 1 0%',
        boxSizing: 'border-box'
    },
    button: {
        color: 'rgb(55, 112, 255)',
        position: 'relative',
        margin: '0px',
        padding: '12px 16px',
        width: '100%',
        background: 'rgba(0, 0, 0, 0)',
        borderRadius: '4px',
        border: '0px',
        cursor: 'pointer',
        transition: 'background 0.3s ease-in 0s',
        fontFamily: '"Nunito Sans", sans-serif',
        fontSize: '16px',
        lineHeight: '18.4px',
        overflow: 'visible'
    },
    p: {
        zIndex: 2,
        whiteSpace: 'nowrap',
        color: 'rgb(55, 112, 255)',
        boxSizing: 'border-box',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '1.44px',
        fontWeight: 700,
        fontFamily: 'Montserrat, sans-serif',
        margin: '0px',
        textTransform: 'uppercase'
    }
};

export default NavBar;
