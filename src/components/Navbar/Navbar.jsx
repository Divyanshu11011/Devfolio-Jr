import React, { useState } from 'react';
import Hackathon from '../../pages/Hackathons';
import Builders from '../../pages/Builders';
import Discover from '../../pages/Discover';

const NavBar = () => {
    const [selectedOption, setSelectedOption] = useState('discover');

    // Function to handle option change
    const handleOptionChange = (option) => {
        setSelectedOption(option);
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
        <div>
            <div direction="column" style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(255, 255, 255)', paddingTop: '12px', paddingBottom: '12px' }}>
                <nav style={{ boxSizing: 'border-box', display: 'flex' }}>
                    <ul role="tablist" style={{ zLabel: 2, zHighlight: 1, padding: '0px', margin: '0px', display: 'flex', flexWrap: 'nowrap', width: '100%', background: 'rgb(240, 244, 255) none repeat scroll 0% 0% / auto padding-box border-box', borderRadius: '8px', listStyleType: 'none', boxSizing: 'border-box' }}>
                        <li style={{ transform: 'none', padding: '4px', flex: '1 1 0%', boxSizing: 'border-box' }}><button type="button" role="tab" aria-selected={selectedOption === 'discover'} data-selected={selectedOption === 'discover'} onClick={() => handleOptionChange('discover')} style={{ color: selectedOption === 'discover' ? 'rgb(255, 255, 255)' : 'rgb(55, 112, 255)', position: 'relative', margin: '0px', padding: '12px 16px', width: '100%', background: selectedOption === 'discover' ? 'rgb(55, 112, 255) none repeat scroll 0% 0% / auto padding-box border-box' : 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', borderRadius: '4px', border: '0px none rgb(55, 112, 255)', cursor: 'pointer', willChange: 'color', transition: 'color 0.3s ease-in 0s', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                            <p style={{ position: 'relative', zIndex: 2, whiteSpace: 'nowrap', color: selectedOption === 'discover' ? 'rgb(255, 255, 255)' : 'rgb(55, 112, 255)', boxSizing: 'border-box', fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase' }}>Discover</p>
                        </button></li>
                        <li style={{ transform: 'none', padding: '4px', flex: '1 1 0%', boxSizing: 'border-box' }}><button type="button" role="tab" aria-selected={selectedOption === 'hackathons'} data-selected={selectedOption === 'hackathons'} onClick={() => handleOptionChange('hackathons')} style={{ color: selectedOption === 'hackathons' ? 'rgb(255, 255, 255)' : 'rgb(55, 112, 255)', position: 'relative', margin: '0px', padding: '12px 16px', width: '100%', background: selectedOption === 'hackathons' ? 'rgb(55, 112, 255) none repeat scroll 0% 0% / auto padding-box border-box' : 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', borderRadius: '4px', border: '0px none rgb(55, 112, 255)', cursor: 'pointer', willChange: 'color', transition: 'color 0.3s ease-in 0s', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                            <p style={{ position: 'relative', zIndex: 2, whiteSpace: 'nowrap', color: selectedOption === 'hackathons' ? 'rgb(255, 255, 255)' : 'rgb(55, 112, 255)', boxSizing: 'border-box', fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase' }}>Hackathons</p>
                        </button></li>
                        <li style={{ transform: 'none', padding: '4px', flex: '1 1 0%', boxSizing: 'border-box' }}><button type="button" role="tab" aria-selected={selectedOption === 'builders'} data-selected={selectedOption === 'builders'} onClick={() => handleOptionChange('builders')} style={{ color: selectedOption === 'builders' ? 'rgb(255, 255, 255)' : 'rgb(55, 112, 255)', position: 'relative', margin: '0px', padding: '12px 16px', width: '100%', background: selectedOption === 'builders' ? 'rgb(55, 112, 255) none repeat scroll 0% 0% / auto padding-box border-box' : 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', borderRadius: '4px', border: '0px none rgb(55, 112, 255)', cursor: 'pointer', willChange: 'color', transition: 'color 0.3s ease-in 0s', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                            <p style={{ position: 'relative', zIndex: 2, whiteSpace: 'nowrap', color: selectedOption === 'builders' ? 'rgb(255, 255, 255)' : 'rgb(55, 112, 255)', boxSizing: 'border-box', fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase' }}>Builders</p>
                        </button></li>
                    </ul>
                </nav>
            </div>
            {renderComponent()}
        </div>
    );
}

export default NavBar;
