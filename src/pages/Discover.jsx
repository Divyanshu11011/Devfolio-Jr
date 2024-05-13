import React, { useState, useEffect } from "react";
import meetup1 from "../Spring.jpg"
import SearchBox from "../SearchBar/SearchBox";
import './pages.css';
export default function Discover() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [hover, setHover] = useState(false);

    const handleSearchClick = () => {
        setIsSearchOpen(true); // Open the search box
    };

    const handleCloseSearch = () => {
        setIsSearchOpen(false); // Close the search box
    };
    const handleKeyDown = (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault(); // Prevent default browser behavior only for Ctrl + K
            setIsSearchOpen(true); // Open the search box when Ctrl + K is pressed
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);



    return (
        <>
            <div style={{ backgroundColor: '#f5f7f7', padding: '20px 0px' }} >
                <div style={{
                    padding: '0px 132px',

                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    marginTop: '32px',
                    width: '100%',
                    gap: '40px 24px',
                    justifyContent: 'center',
                    marginBottom: '32px',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        gridColumn: '1 / -1',
                        boxSizing: 'border-box'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            boxSizing: 'border-box'
                        }}>
                            <div style={{
                                padding: '16px',
                                width: '100%',
                                position: 'relative',
                                height: '89.6px',
                                borderRadius: '16px',
                                backgroundColor: 'rgb(255, 255, 255)',

                                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 4px 0px',
                                boxSizing: 'border-box',
                                
                            }}>
                                <div style={{
                                    display: 'flex',
                                    gap: '600px',
                                    alignItems: 'center',
                                    boxSizing: 'border-box'
                                    
                                }}>
                                    <div style={{ position: "relative" }}>
                                        <button onClick={handleSearchClick}  onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} style={{
                cursor: "pointer",
                textAlign: "left",
                display: "flex",
                borderRadius: "6px",
                padding: "16px",
                width: "230%",
                border: `0.8px solid ${hover ? '#3770ff' : 'rgb(208, 217, 218)'}`,
                backgroundColor: "rgb(245, 247, 247)",
                color: "rgb(142, 152, 156)",
                fontFamily: '"Nunito Sans", sans-serif',
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "24px",
                outline: "none",
                transition: "all 0.16s ease-in 0s",
                textTransform: "none",
                overflow: "visible",
                margin: "0px",
                position: "relative",
                zIndex: 1,
            }}
        >
            Type to begin search, or use the global shortcut
        </button>
                                        {isSearchOpen && (
                                            <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
                                                <SearchBox onClose={handleCloseSearch} />
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ borderRadius: '8px', display: 'flex', gap: '4px', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', padding: '4px', boxSizing: 'border-box' }}><kbd data-testid="kbd" color="grey-8" style={{ backgroundColor: 'rgb(228, 234, 235)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(39, 51, 57)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>Ctrl</kbd>
                                        <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(180, 190, 192)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+</p><kbd data-testid="kbd" color="grey-8" style={{ backgroundColor: 'rgb(228, 234, 235)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(39, 51, 57)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>k</kbd>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ gridColumn: '1 / -1', boxSizing: 'border-box' }}>
                        <div height="100%" style={{ padding: '0px 132px', gridTemplateColumns: '76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px', display: 'grid', width: '100%', gap: '40px 24px', WebkitBoxPack: 'center', justifyContent: 'center', height: '540px', boxSizing: 'border-box' }}>
                            <div style={{ gridColumn: '1 / 9', boxSizing: 'border-box' }}>
                                <div height="100%" width="100%" direction="column" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'rgb(133, 217, 120)', display: 'flex', WebkitBoxPack: 'justify', justifyContent: 'space-between', flexDirection: 'column', height: '540px', width: '100%', borderRadius: '16px', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px', boxSizing: 'border-box' }}>
                                    <div style={{ minHeight: 'auto', display: 'flex', WebkitBoxFlex: 2, flexGrow: 2, maxHeight: '100%', position: 'relative', boxSizing: 'border-box' }}><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '308px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}><img sizes="100vw" srcSet="https://devfolio.co/_next/image?url=%2Fgrants-art.png&w=1440&q=100" src="https://devfolio.co/_next/image?url=%2Fgrants-art.png&w=1440&q=100" decoding="async" data-nimg="fill" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '308px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: '50% 100%', borderStyle: 'none' }} /></span></div>
                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '0px 56px 48px', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '4px', boxSizing: 'border-box' }}>
                                            <p style={{  color: 'rgb(17, 74, 8)', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box', textAlign: 'left' }}>Introducing</p>
                                            <div display="[object Object]" style={{ display: 'block', boxSizing: 'border-box' }}>
                                                <h2 style={{ color: 'rgb(17, 74, 8)', marginLeft: '-4px', fontSize: '48px', lineHeight: '64px', letterSpacing: '-0.48px', fontWeight: 900, fontFamily: '"Nunito Sans", sans-serif', margin: '0px 0px 0px -4px', boxSizing: 'border-box', textAlign: 'left' }}>Grants!</h2>
                                            </div>
                                            <div display="[object Object]" style={{ display: 'none', boxSizing: 'border-box' }}>
                                                <h2 style={{ color: 'rgb(17, 74, 8)', marginLeft: '-4px', fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, fontFamily: '"Nunito Sans", sans-serif', margin: '0px 0px 0px -4px', boxSizing: 'border-box' }}>Grants!</h2>
                                            </div>
                                        </div>
                                        <p style={{ textAlign: 'left', color: 'rgb(17, 74, 8)', fontSize: '18px', lineHeight: '28px', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 400, margin: '0px', boxSizing: 'border-box' }}>As a builder, it's important that you think beyond conventions and create something extraordinary. And while you're at it, let us fund your project, provide expert guidance, and tell the world about it.</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ gridColumn: '9 / 13', boxSizing: 'border-box' }}>
                                <div direction="column" width="100%" style={{ display: 'flex', flexDirection: 'column', padding: '32px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '16px', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px', width: '100%', boxSizing: 'border-box' }}>
                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', boxSizing: 'border-box' }}><a href="https://ethindiagrants2023.devfolio.co/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                            <h2 style={{ fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>ETHIndia Grants 2.0</h2>
                                        </a>
                                            <h3 style={{ fontSize: '18px', lineHeight: '28px', color: 'rgb(92, 104, 109)', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>Build a thriving Ethereum ecosystem, one project at a time 🌱</h3>
                                        </div>
                                        <ul style={{ padding: '0px', margin: '0px 0px 16px', listStyleType: 'none', display: 'flex', boxSizing: 'border-box' }}>
                                            <li style={{ boxSizing: 'border-box' }}><a  className="ptu" href="https://twitter.com/ETHIndiaco" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="twitter" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <g clipPath="url(#prefix__clip0_9809_761)" style={{ boxSizing: 'border-box' }}>
                                                        <path d="M.059 1l9.266 12.39L0 23.463h2.099l8.163-8.82 6.596 8.82H24l-9.787-13.087L22.892 1h-2.099l-7.518 8.122L7.2 1H.06zm3.086 1.546h3.28l14.488 19.371h-3.28L3.145 2.546z" fill="currentColor" style={{ boxSizing: 'border-box' }} />
                                                    </g>
                                                    <defs style={{ boxSizing: 'border-box' }}>
                                                        <clipPath style={{ boxSizing: 'border-box' }}>
                                                            <path fill="#fff" d="M0 0h24v24H0z" style={{ boxSizing: 'border-box' }} />
                                                        </clipPath>
                                                    </defs>
                                                </svg></div>
                                            </a></li>
                                            <li style={{ marginLeft: '8px', boxSizing: 'border-box' }}><a  className="huy" href="https://t.me/ethindiaco" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="telegram" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M17.5 8.5L10 14v6l3-3 6 4 3-18-20 8 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></li>
                                        </ul>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', WebkitBoxPack: 'end', justifyContent: 'flex-end', flex: '1 1 0%', boxSizing: 'border-box' }}>
                                        <div style={{ marginBottom: '32px', boxSizing: 'border-box' }}>
                                            <ul style={{ position: 'relative', margin: '0px', padding: '8px 0px 8px 16px', listStyleType: 'none', boxSizing: 'border-box' }}>
                                                <li style={{ boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(180, 190, 192)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box', textAlign: 'left' }}>Happening</p>
                                                    <p style={{  fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '4px 0px 0px', boxSizing: 'border-box', textAlign: 'left' }}>Online</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', padding: '16px', borderRadius: '8px', backgroundColor: 'rgb(240, 244, 255)', boxSizing: 'border-box' }}>
                                                <p style={{ textAlign: 'left', fontSize: '18px', lineHeight: '24px', color: 'rgb(20, 59, 226)', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Applications are reviewed on a rolling basis fortnightly</p>
                                            </div><button className="btnu" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: '100%', height: '60px', padding: '0px 39px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '20px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '23px' }}>
                                                <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ gridColumn: '1 / -1', boxSizing: 'border-box' }}>
                        <div style={{ padding: '0px 132px', gridTemplateColumns: '76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px', display: 'grid', width: '100%', gap: '40px 24px', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                            <div style={{ gridColumn: '1 / 5', boxSizing: 'border-box' }}>
                                <div height="100%" overflow="hidden" style={{ display: 'flex', position: 'relative', minHeight: '480px', height: '625.6px', borderRadius: '16px', boxShadow: 'rgba(0, 0, 0, 0.09) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 4px 8px 0px', overflow: 'hidden', boxSizing: 'border-box' }}><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '625.6px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}><img alt="An illustration of a computer monitor and keyboard" src="https://devfolio.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent-illustration.aa8023da.jpg&w=1440&q=75" /></span>
                                    <div style={{ display: 'flex', alignItems: 'flex-end', position: 'absolute', right: '0px', bottom: '0px', left: '0px', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ backgroundImage: 'linear-gradient(0deg, rgba(39, 51, 57, 0.8) 0%, rgba(39, 51, 57, 0) 100%)', display: 'flex', flexDirection: 'column', flex: '1 1 0%', padding: '32px', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', paddingTop: '64px', boxSizing: 'border-box' }}>
                                                <p style={{ textAlign: 'left', fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Need a break from building?</p>
                                            </div>
                                            <p style={{ textAlign: 'left', fontSize: '18px', lineHeight: '28px', color: 'rgb(255, 255, 255)', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Indulge in the hottest events happening around the globe and mellow out.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ gridColumn: '5 / 13', boxSizing: 'border-box' }}>
                                <div elevation="blue-2" style={{ boxSizing: 'border-box', position: 'relative', height: '625.6px', padding: '32px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px' }}>
                                    <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px 0px 24px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Hottest events</p>
                                    <ul direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: '0px', padding: '0px', boxSizing: 'border-box' }}>
                                        <li style={{ listStyleType: 'none', boxSizing: 'border-box' }}><a href="https://www.meetup.com/bangalorejug/events/300546981/?recId=697b8687-a177-4a93-a9ea-3ea95072199a&recSource=keyword_search&searchId=f1ce024a-0660-487c-a6a3-e8cfa801fe7b" target="_blank" rel="noreferrer noopener" style={{ cursor: 'pointer', textDecoration: 'none solid rgb(0, 0, 238)', outline: 'rgb(0, 0, 238) none 0px', imageWidth: '196px', imageHeight: '196px', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                            <div direction="[object Object]" style={{ flexDirection: 'row', padding: '24px', boxSizing: 'border-box', alignItems: 'flex-start', borderRadius: '8px', border: '0.8px solid rgb(208, 217, 218)', display: 'flex', gap: '24px' }}className="yi">
                                                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', minWidth: '196px', width: '196px', height: '196px', boxSizing: 'border-box' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '196px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 238)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '196px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 238)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="https://assets.devfolio.co/content/c4720882f13b439699eddbb48ce83b61/014dd15b-b737-474e-be1e-1d2f477caf12.png" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '196px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 238)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span><img alt="Poster for the event named Advanced Spring Boot" src={meetup1} /></span></div>
                                                <div direction="column" width="100%" style={{ minHeight: 'var(image-height)', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', gap: '24px', width: '100%', minWidth: '0px', boxSizing: 'border-box' }}>
                                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '12px', boxSizing: 'border-box' }}>
                                                        <div width="100%" direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%', boxSizing: 'border-box' }}>
                                                            <h4 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '30px', lineHeight: '40px', letterSpacing: '-0.15px', color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 800, margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>Advanced Spring Boot</h4>
                                                            <div color="grey-6" style={{ display: 'flex', gap: '8px', color: 'rgb(142, 152, 156)', boxSizing: 'border-box' }}>
                                                                <div name="map-pin-fill" style={{ display: 'block', height: '16px', width: '16px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', width: '16px', boxSizing: 'border-box' }}>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.5 5c0 3.5-4.5 6.5-4.5 6.5S.5 8.5.5 5a4.5 4.5 0 019 0zM7 5a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor" style={{ boxSizing: 'border-box' }} />
                                                                </svg></div>
                                                                <p style={{ textAlign: 'left', fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Bengaluru, India</p>
                                                            </div>
                                                        </div>
                                                        <p style={{ textAlign: 'left', fontSize: '18px', lineHeight: '28px', color: 'rgb(142, 152, 156)', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Join in person to dive into Spring Boot observability and JET speed application development. </p>
                                                    </div>
                                                    <div wrap="wrap" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', boxSizing: 'border-box' }}>
                                                        <div style={{ display: 'flex', gap: '10px', WebkitBoxAlign: 'center', alignItems: 'center', maxHeight: '48px', padding: '10px 16px', borderWidth: '1.6px', borderStyle: 'solid', borderColor: 'rgb(245, 247, 247)', borderRadius: '16px', backgroundColor: 'rgb(245, 247, 247)', boxSizing: 'border-box' }}>
                                                            <div name="clock" color="grey-7B" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(56, 71, 78)', boxSizing: 'border-box' }}>
                                                                <circle cx={12} cy={12} r={10} style={{ boxSizing: 'border-box' }} />
                                                                <path d="M12 6v6l4 2" style={{ boxSizing: 'border-box' }} />
                                                            </svg></div>
                                                            <p style={{ textAlign: 'left', lineHeight: '24px', userSelect: 'none', fontSize: '12px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>10AM - 12PM</p>
                                                        </div>
                                                        <div style={{ display: 'flex', gap: '10px', WebkitBoxAlign: 'center', alignItems: 'center', maxHeight: '48px', padding: '10px 16px', borderWidth: '1.6px', borderStyle: 'solid', borderColor: 'rgb(245, 247, 247)', borderRadius: '16px', backgroundColor: 'rgb(245, 247, 247)', boxSizing: 'border-box' }}>
                                                            <div name="calendar" color="grey-7B" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(56, 71, 78)', boxSizing: 'border-box' }}>
                                                                <rect x={3} y={4} width={18} height={18} rx={2} ry={2} style={{ boxSizing: 'border-box' }} />
                                                                <path d="M16 2v4M8 2v4M3 10h18" style={{ boxSizing: 'border-box' }} />
                                                            </svg></div>
                                                            <p style={{ textAlign: 'left', lineHeight: '24px', userSelect: 'none', fontSize: '12px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>May 11, 2024</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></li>
                                        <li style={{ listStyleType: 'none', boxSizing: 'border-box' }}><a href="https://www.meetup.com/reactjs-bangalore/events/300466072/?recId=79090bb8-7aff-4c84-ab51-c7f10f5f7b45&recSource=keyword_search&searchId=bd7153c1-4078-4c10-b5b0-817d60098240" target="_blank" rel="noreferrer noopener" style={{ cursor: 'pointer', textDecoration: 'none solid rgb(0, 0, 238)', outline: 'rgb(0, 0, 238) none 0px', imageWidth: '196px', imageHeight: '196px', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                            <div direction="[object Object]" style={{ flexDirection: 'row', padding: '24px', boxSizing: 'border-box', alignItems: 'flex-start', borderRadius: '8px', border: '0.8px solid rgb(208, 217, 218)', display: 'flex', gap: '24px' }}className="yi">
                                                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', minWidth: '196px', width: '196px', height: '196px', boxSizing: 'border-box' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '196px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 238)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '196px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 238)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="https://assets.devfolio.co/content/c4720882f13b439699eddbb48ce83b61/570c5abc-00b3-4a05-bbd0-60ba412485c7.png
" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '196px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 238)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span><img alt="Poster for the event named React Bangalore" src="https://assets.devfolio.co/content/c4720882f13b439699eddbb48ce83b61/570c5abc-00b3-4a05-bbd0-60ba412485c7.png
" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 238)', margin: 'auto', display: 'block', width: '0px', height: '196px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', borderStyle: 'none' }} srcSet="https://assets.devfolio.co/content/c4720882f13b439699eddbb48ce83b61/570c5abc-00b3-4a05-bbd0-60ba412485c7.png
" /></span></div>
                                                <div direction="column" width="100%" style={{ minHeight: 'var(image-height)', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', gap: '24px', width: '100%', minWidth: '0px', boxSizing: 'border-box' }}>
                                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '12px', boxSizing: 'border-box' }}>
                                                        <div width="100%" direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%', boxSizing: 'border-box' }}>
                                                            <h4 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '30px', lineHeight: '40px', letterSpacing: '-0.15px', color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 800, margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>React Bangalore</h4>
                                                            <div color="grey-6" style={{ display: 'flex', gap: '8px', color: 'rgb(142, 152, 156)', boxSizing: 'border-box' }}>
                                                                <div name="map-pin-fill" style={{ display: 'block', height: '16px', width: '16px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', width: '16px', boxSizing: 'border-box' }}>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.5 5c0 3.5-4.5 6.5-4.5 6.5S.5 8.5.5 5a4.5 4.5 0 019 0zM7 5a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor" style={{ boxSizing: 'border-box' }} />
                                                                </svg></div>
                                                                <p style={{ textAlign: 'left', fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Bengaluru, India</p>
                                                            </div>
                                                        </div>
                                                        <p style={{ textAlign: 'left', fontSize: '18px', lineHeight: '28px', color: 'rgb(142, 152, 156)', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Learn about ReactJS, one of the best libraries to build modern web applications. </p>
                                                    </div>
                                                    <div wrap="wrap" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', boxSizing: 'border-box' }}>
                                                        <div style={{ display: 'flex', gap: '10px', WebkitBoxAlign: 'center', alignItems: 'center', maxHeight: '48px', padding: '10px 16px', borderWidth: '1.6px', borderStyle: 'solid', borderColor: 'rgb(245, 247, 247)', borderRadius: '16px', backgroundColor: 'rgb(245, 247, 247)', boxSizing: 'border-box' }}>
                                                            <div name="clock" color="grey-7B" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(56, 71, 78)', boxSizing: 'border-box' }}>
                                                                <circle cx={12} cy={12} r={10} style={{ boxSizing: 'border-box' }} />
                                                                <path d="M12 6v6l4 2" style={{ boxSizing: 'border-box' }} />
                                                            </svg></div>
                                                            <p style={{ textAlign: 'left', lineHeight: '24px', userSelect: 'none', fontSize: '12px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>2 - 6PM</p>
                                                        </div>
                                                        <div style={{ display: 'flex', gap: '10px', WebkitBoxAlign: 'center', alignItems: 'center', maxHeight: '48px', padding: '10px 16px', borderWidth: '1.6px', borderStyle: 'solid', borderColor: 'rgb(245, 247, 247)', borderRadius: '16px', backgroundColor: 'rgb(245, 247, 247)', boxSizing: 'border-box' }}>
                                                            <div name="calendar" color="grey-7B" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(56, 71, 78)', boxSizing: 'border-box' }}>
                                                                <rect x={3} y={4} width={18} height={18} rx={2} ry={2} style={{ boxSizing: 'border-box' }} />
                                                                <path d="M16 2v4M8 2v4M3 10h18" style={{ boxSizing: 'border-box' }} />
                                                            </svg></div>
                                                            <p style={{ textAlign: 'left', lineHeight: '24px', userSelect: 'none', fontSize: '12px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>May 18, 2024</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ gridColumn: '1 / 9', boxSizing: 'border-box' }}>
                        <div elevation="blue-2" style={{ boxSizing: 'border-box', position: 'relative', height: '588.8px', padding: '32px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px' }}>
                            <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px 0px 24px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Projects Spotlight</p>
                            <div direction="column" spacing={8} style={{ gap: '8px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                                    <div style={{ position: 'relative', boxSizing: 'border-box' }}><a href="https://devfolio.co/projects/teleport" style={{ boxSizing: 'border-box', margin: '0px', padding: '0px', textDecoration: 'none solid rgb(0, 0, 238)', display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 238)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', userSelect: 'none', flex: '1 1 0%' }}>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ imageHeight: '112px', imageWidth: '112px', position: 'relative', boxSizing: 'border-box', height: '112px', width: '112px', minWidth: '112px', minHeight: '112px', borderRadius: '16px', backgroundColor: 'rgb(245, 247, 247)', border: '0.8px solid rgb(240, 245, 245)', fontFamily: 'Montserrat, sans-serif', overflow: 'hidden' }}>
                                                <div style={{ height: '110.4px', width: '100%', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', borderRadius: '6px', backgroundImage: 'url("https://devfolio.co/pattern-1.svg")', backgroundColor: 'rgb(34, 197, 168)', boxSizing: 'border-box' }}>
                                                    <p style={{ textAlign: 'left', opacity: '0.64', fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: 700, color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>T</p>
                                                </div>
                                            </div>
                                            <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, boxSizing: 'border-box' }}>
                                                <div className="ptu"style={{ avatarHeight: '46px', avatarWidth: '46px', display: 'grid', padding: '8px', gap: '4px', borderRadius: '16px', gridTemplate: 'repeat(2, 46px) / repeat(2, 46px)', backgroundColor: 'rgb(245, 247, 247)', border: '1.6px solid rgb(208, 217, 218)', boxSizing: 'border-box' }}><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button></div>
                                                <div className="ptu"style={{ boxSizing: 'border-box', display: 'flex', flex: '1 1 0%', borderRadius: '16px', border: '1.6px solid rgb(208, 217, 218)', backgroundColor: 'rgb(255, 255, 255)', cursor: 'pointer', userSelect: 'none', padding: '16px 96px 16px 16px' }}>
                                                    <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxPack: 'justify', justifyContent: 'space-between', WebkitBoxFlex: 1, flexGrow: 1, boxSizing: 'border-box' }}>
                                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '0px', WebkitBoxPack: 'center', justifyContent: 'center', alignItems: 'flex-start', boxSizing: 'border-box' }}>
                                                            <h6 style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflowWrap: 'anywhere', overflow: 'hidden', boxSizing: 'border-box' }}>Teleport</h6>
                                                            <p style={{ textAlign: 'left', lineHeight: '24px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflowWrap: 'anywhere', overflow: 'hidden', boxSizing: 'border-box' }}>A Google meet for files with the convenience of airdrop</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                        <div style={{ position: 'absolute', display: 'block', right: '16px', top: '57.6px', transform: 'matrix(1, 0, 0, 1, 0, -39.8)', boxSizing: 'border-box' }}>
                                            <button className="ptu"style={{ boxSizing: 'border-box', width: '76px', padding: '13px 16px', border: '0.8px solid rgb(228, 234, 235)', borderRadius: '8px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', cursor: 'pointer', outline: 'rgb(0, 0, 0) none 0px', display: 'flex', flexDirection: 'column', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px' }}>
                                            <div style={{ marginBottom: '4px', boxSizing: 'border-box' }}>
                                                <div name="heart" color="grey-8" style={{ display: 'inline-block', height: '16px', width: '16px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '16px', width: '16px', color: 'rgb(39, 51, 57)', boxSizing: 'border-box' }}>
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </div><span style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}><span style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', WebkitBoxPack: 'center', justifyContent: 'center', alignItems: 'flex-end', overflow: 'hidden', fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', boxSizing: 'border-box' }}><span style={{ transform: 'translateY(0%) translateZ(0px)', boxSizing: 'border-box' }}>123</span></span></span>
                                        </button></div>
                                    </div>
                                </div>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                                    <div style={{ position: 'relative', boxSizing: 'border-box' }}><a href="https://devfolio.co/projects/criclive" style={{ boxSizing: 'border-box', margin: '0px', padding: '0px', textDecoration: 'none solid rgb(0, 0, 238)', display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 238)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', userSelect: 'none', flex: '1 1 0%' }}>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ imageHeight: '112px', imageWidth: '112px', position: 'relative', boxSizing: 'border-box', height: '112px', width: '112px', minWidth: '112px', minHeight: '112px', borderRadius: '16px', backgroundColor: 'rgb(245, 247, 247)', border: '0.8px solid rgb(240, 245, 245)', fontFamily: 'Montserrat, sans-serif', overflow: 'hidden' }}>
                                                <div style={{ height: '110.4px', width: '100%', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', borderRadius: '6px', backgroundImage: 'url("https://devfolio.co/pattern-4.svg")', backgroundColor: 'rgb(232, 199, 84)', boxSizing: 'border-box' }}>
                                                    <p style={{ textAlign: 'left', opacity: '0.64', fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: 700, color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>C</p>
                                                </div>
                                            </div>
                                            <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, boxSizing: 'border-box' }}>
                                                <div className="ptu"style={{ avatarHeight: '46px', avatarWidth: '46px', display: 'grid', padding: '8px', gap: '4px', borderRadius: '16px', gridTemplate: 'repeat(2, 46px) / repeat(2, 46px)', backgroundColor: 'rgb(245, 247, 247)', border: '1.6px solid rgb(208, 217, 218)', boxSizing: 'border-box' }}><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}></span></span></button></div>
                                                <div className="ptu" style={{ boxSizing: 'border-box', display: 'flex', flex: '1 1 0%', borderRadius: '16px', border: '1.6px solid rgb(208, 217, 218)', backgroundColor: 'rgb(255, 255, 255)', cursor: 'pointer', userSelect: 'none', padding: '16px 96px 16px 16px' }}>
                                                    <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxPack: 'justify', justifyContent: 'space-between', WebkitBoxFlex: 1, flexGrow: 1, boxSizing: 'border-box' }}>
                                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '0px', WebkitBoxPack: 'center', justifyContent: 'center', alignItems: 'flex-start', boxSizing: 'border-box' }}>
                                                            <h6 style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflowWrap: 'anywhere', overflow: 'hidden', boxSizing: 'border-box' }}>CricLive</h6>
                                                            <p style={{ textAlign: 'left', lineHeight: '24px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflowWrap: 'anywhere', overflow: 'hidden', boxSizing: 'border-box' }}>Live Cricket Anytime Anywhere</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                        <div style={{ position: 'absolute', display: 'block', right: '16px', top: '57.6px', transform: 'matrix(1, 0, 0, 1, 0, -39.8)', boxSizing: 'border-box' }}><button className="ptu"style={{ boxSizing: 'border-box', width: '76px', padding: '13px 16px', border: '0.8px solid rgb(228, 234, 235)', borderRadius: '8px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', cursor: 'pointer', outline: 'rgb(0, 0, 0) none 0px', display: 'flex', flexDirection: 'column', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px' }}>
                                            <div style={{ marginBottom: '4px', boxSizing: 'border-box' }}>
                                                <div name="heart" color="grey-8" style={{ display: 'inline-block', height: '16px', width: '16px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '16px', width: '16px', color: 'rgb(39, 51, 57)', boxSizing: 'border-box' }}>
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </div><span style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}><span style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', WebkitBoxPack: 'center', justifyContent: 'center', alignItems: 'flex-end', overflow: 'hidden', fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', boxSizing: 'border-box' }}><span style={{ transform: 'translateY(0%) translateZ(0px)', boxSizing: 'border-box' }}>39</span></span></span>
                                        </button></div>
                                    </div>
                                </div>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                                    <div style={{ position: 'relative', boxSizing: 'border-box' }}><a href="https://devfolio.co/projects/hermes" style={{ boxSizing: 'border-box', margin: '0px', padding: '0px', textDecoration: 'none solid rgb(0, 0, 238)', display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 238)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', userSelect: 'none', flex: '1 1 0%' }}>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ imageHeight: '112px', imageWidth: '112px', position: 'relative', boxSizing: 'border-box', height: '112px', width: '112px', minWidth: '112px', minHeight: '112px', borderRadius: '16px', backgroundColor: 'rgb(245, 247, 247)', border: '0.8px solid rgb(240, 245, 245)', fontFamily: 'Montserrat, sans-serif', overflow: 'hidden' }}>
                                                <div style={{ height: '110.4px', width: '100%', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', borderRadius: '6px', backgroundImage: 'url("https://devfolio.co/pattern-1.svg")', backgroundColor: 'rgb(167, 170, 13)', boxSizing: 'border-box' }}>
                                                    <p style={{ textAlign: 'left', opacity: '0.64', fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: 700, color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>H</p>
                                                </div>
                                            </div>
                                            <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, boxSizing: 'border-box' }}>
                                                <div className="ptu"style={{ avatarHeight: '46px', avatarWidth: '46px', display: 'grid', padding: '8px', gap: '4px', borderRadius: '16px', gridTemplate: 'repeat(2, 46px) / repeat(2, 46px)', backgroundColor: 'rgb(245, 247, 247)', border: '1.6px solid rgb(208, 217, 218)', boxSizing: 'border-box' }}><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                                                    <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box' }}></div>
                                                </button></div>
                                                <div className="ptu" style={{ boxSizing: 'border-box', display: 'flex', flex: '1 1 0%', borderRadius: '16px', border: '1.6px solid rgb(208, 217, 218)', backgroundColor: 'rgb(255, 255, 255)', cursor: 'pointer', userSelect: 'none', padding: '16px 96px 16px 16px' }}>
                                                    <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxPack: 'justify', justifyContent: 'space-between', WebkitBoxFlex: 1, flexGrow: 1, boxSizing: 'border-box' }}>
                                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '0px', WebkitBoxPack: 'center', justifyContent: 'center', alignItems: 'flex-start', boxSizing: 'border-box' }}>
                                                            <h6 style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflowWrap: 'anywhere', overflow: 'hidden', boxSizing: 'border-box' }}>Hermes</h6>
                                                            <p style={{ textAlign: 'left', lineHeight: '24px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflowWrap: 'anywhere', overflow: 'hidden', boxSizing: 'border-box' }}>An Inclusive and Global Gateway to decentralized content creation and exploration using SMS.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                        <div style={{ position: 'absolute', display: 'block', right: '16px', top: '57.6px', transform: 'matrix(1, 0, 0, 1, 0, -39.8)', boxSizing: 'border-box' }}><button className="ptu" style={{ boxSizing: 'border-box', width: '76px', padding: '13px 16px', border: '0.8px solid rgb(228, 234, 235)', borderRadius: '8px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', cursor: 'pointer', outline: 'rgb(0, 0, 0) none 0px', display: 'flex', flexDirection: 'column', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px' }}>
                                            <div style={{ marginBottom: '4px', boxSizing: 'border-box' }}>
                                                <div name="heart" color="grey-8" style={{ display: 'inline-block', height: '16px', width: '16px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '16px', width: '16px', color: 'rgb(39, 51, 57)', boxSizing: 'border-box' }}>
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </div><span style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}><span style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', WebkitBoxPack: 'center', justifyContent: 'center', alignItems: 'flex-end', overflow: 'hidden', fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', boxSizing: 'border-box' }}><span style={{ transform: 'translateY(0%) translateZ(0px)', boxSizing: 'border-box' }}>14</span></span></span>
                                        </button></div>
                                    </div>
                                </div>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                                    <div style={{ position: 'relative', boxSizing: 'border-box' }}><a href="https://devfolio.co/projects/standnote-1" style={{ boxSizing: 'border-box', margin: '0px', padding: '0px', textDecoration: 'none solid rgb(0, 0, 238)', display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(0, 0, 238)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', userSelect: 'none', flex: '1 1 0%' }}>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ imageHeight: '112px', imageWidth: '112px', position: 'relative', boxSizing: 'border-box', height: '112px', width: '112px', minWidth: '112px', minHeight: '112px', borderRadius: '16px', backgroundColor: 'rgb(245, 247, 247)', border: '0.8px solid rgb(240, 245, 245)', fontFamily: 'Montserrat, sans-serif', overflow: 'hidden' }}>
                                                <div style={{ height: '110.4px', width: '100%', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', borderRadius: '6px', backgroundImage: 'url("https://devfolio.co/pattern-4.svg")', backgroundColor: 'rgb(185, 204, 245)', boxSizing: 'border-box' }}>
                                                    <p style={{ textAlign: 'left', opacity: '0.64', fontFamily: 'Montserrat, sans-serif', fontSize: '36px', fontWeight: 700, color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>S</p>
                                                </div>
                                            </div>
                                            <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, boxSizing: 'border-box' }}>
                                                <div className="ptu" style={{ avatarHeight: '46px', avatarWidth: '46px', display: 'grid', padding: '8px', gap: '4px', borderRadius: '16px', gridTemplate: 'repeat(2, 46px) / repeat(2, 46px)', backgroundColor: 'rgb(245, 247, 247)', border: '1.6px solid rgb(208, 217, 218)', boxSizing: 'border-box' }}><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span><noscript style={{ boxSizing: 'border-box' }} /></span></button><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button><button type="button" data-state="closed" style={{ appearance: 'none', boxSizing: 'border-box', margin: '0px', padding: '0px', outline: 'rgb(0, 0, 0) none 0px', border: '0px none rgb(0, 0, 0)', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}><span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}><span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', maxWidth: '100%' }}><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: '46px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', boxSizing: 'border-box', borderStyle: 'none' }} /></span></span></button></div>
                                                <div className="ptu" style={{ boxSizing: 'border-box', display: 'flex', flex: '1 1 0%', borderRadius: '16px', border: '1.6px solid rgb(208, 217, 218)', backgroundColor: 'rgb(255, 255, 255)', cursor: 'pointer', userSelect: 'none', padding: '16px 96px 16px 16px' }}>
                                                    <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxPack: 'justify', justifyContent: 'space-between', WebkitBoxFlex: 1, flexGrow: 1, boxSizing: 'border-box' }}>
                                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '0px', WebkitBoxPack: 'center', justifyContent: 'center', alignItems: 'flex-start', boxSizing: 'border-box' }}>
                                                            <h6 style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflowWrap: 'anywhere', overflow: 'hidden', boxSizing: 'border-box' }}>StandNote</h6>
                                                            <p style={{ textAlign: 'left', lineHeight: '24px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflowWrap: 'anywhere', overflow: 'hidden', boxSizing: 'border-box' }}>Turning Conversations Into Actions</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                        <div style={{ position: 'absolute', display: 'block', right: '16px', top: '57.6px', transform: 'matrix(1, 0, 0, 1, 0, -39.8)', boxSizing: 'border-box' }}><button className="ptu" style={{ boxSizing: 'border-box', width: '76px', padding: '13px 16px', border: '0.8px solid rgb(228, 234, 235)', borderRadius: '8px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', cursor: 'pointer', outline: 'rgb(0, 0, 0) none 0px', display: 'flex', flexDirection: 'column', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px' }}>
                                            <div style={{ marginBottom: '4px', boxSizing: 'border-box' }}>
                                                <div name="heart" color="grey-8" style={{ display: 'inline-block', height: '16px', width: '16px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '16px', width: '16px', color: 'rgb(39, 51, 57)', boxSizing: 'border-box' }}>
                                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </div><span style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}><span style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', WebkitBoxPack: 'center', justifyContent: 'center', alignItems: 'flex-end', overflow: 'hidden', fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', boxSizing: 'border-box' }}><span style={{ transform: 'translateY(0%) translateZ(0px)', boxSizing: 'border-box' }}>56</span></span></span>
                                        </button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ gridColumn: '9 / 13', boxSizing: 'border-box' }} className="btnu">
                        <div elevation="blue-2" style={{ boxSizing: 'border-box', position: 'relative', height: '588.8px', padding: '32px', borderRadius: '16px', backgroundColor: 'rgb(55, 112, 255)', backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px' }}>
                            <div direction="column" spacing={64} style={{ height: '100%', gap: '64px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                <div style={{ boxSizing: 'border-box' }}>
                                    <p style={{ textAlign: 'left', display: 'block', marginTop: '64px', marginLeft: '-8px', fontSize: '172px', letterSpacing: '-0.86px', opacity: '0.32', lineHeight: '16px', userSelect: 'none', fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(255, 255, 255)', fontWeight: 800, margin: '64px 0px 0px -8px', boxSizing: 'border-box' }}>“</p>
                                    <h3 style={{ fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 900, margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>Get better at what you're doing.</h3>
                                    <div style={{ marginTop: '8px', boxSizing: 'border-box' }}>
                                        <p style={{  fontSize: '18px', lineHeight: '28px', fontWeight: 600, color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>- @devfolio</p>
                                    </div>
                                </div><a className="btnu" href="https://twitter.com/intent/tweet?&text=Get%20better%20at%20what%20you're%20doing. - @devfolio" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: '100%', height: '60px', padding: '0px 39px', border: '0.8px solid rgb(2, 128, 208)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px', backgroundColor: 'rgb(29, 156, 236)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '20px', fontWeight: 600, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                                    <div name="twitter" strokeWidth={1} style={{ marginRight: '8px', display: 'block', height: '20px', width: '20px', boxSizing: 'border-box' }} ><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', width: '20px', strokeWidth: '1px', boxSizing: 'border-box' }}>
                                        <g clipPath="url(#prefix__clip0_9809_761)" style={{ boxSizing: 'border-box' }}>
                                            <path d="M.059 1l9.266 12.39L0 23.463h2.099l8.163-8.82 6.596 8.82H24l-9.787-13.087L22.892 1h-2.099l-7.518 8.122L7.2 1H.06zm3.086 1.546h3.28l14.488 19.371h-3.28L3.145 2.546z" fill="currentColor" style={{ boxSizing: 'border-box' }} />
                                        </g>
                                        <defs style={{ boxSizing: 'border-box' }}>
                                            <clipPath style={{ boxSizing: 'border-box' }}>
                                                <path fill="#fff" d="M0 0h24v24H0z" style={{ boxSizing: 'border-box' }} />
                                            </clipPath>
                                        </defs>
                                    </svg></div>Post
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ gridColumn: '1 / -1', boxSizing: 'border-box' }}>
                        <div direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', gap: '20px', boxSizing: 'border-box' }}>
                            <div direction="column" width="100%" style={{ display: 'flex', flexDirection: 'column', padding: '32px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '16px', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px', width: '100%', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', boxSizing: 'border-box' }}><a href="https://ethbratislava2024.devfolio.co/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                        <h2 style={{ fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>ETHBratislava</h2>
                                    </a>
                                        <h3 style={{ fontSize: '18px', lineHeight: '28px', color: 'rgb(92, 104, 109)', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>First Ethereum hackathon &amp; conference in Slovakia 🇸🇰</h3>
                                    </div>
                                    <ul style={{ padding: '0px', margin: '0px 0px 16px', listStyleType: 'none', display: 'flex', boxSizing: 'border-box' }}>
                                        <li style={{ boxSizing: 'border-box' }}><a href="https://www.ethbratislava.com/"className="ptu" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a></li>
                                        <li style={{ marginLeft: '8px', boxSizing: 'border-box' }}><a className="ptu"href="https://twitter.com/ETH_Bratislava" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="twitter" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <g clipPath="url(#prefix__clip0_9809_761)" style={{ boxSizing: 'border-box' }}>
                                                    <path d="M.059 1l9.266 12.39L0 23.463h2.099l8.163-8.82 6.596 8.82H24l-9.787-13.087L22.892 1h-2.099l-7.518 8.122L7.2 1H.06zm3.086 1.546h3.28l14.488 19.371h-3.28L3.145 2.546z" fill="currentColor" style={{ boxSizing: 'border-box' }} />
                                                </g>
                                                <defs style={{ boxSizing: 'border-box' }}>
                                                    <clipPath style={{ boxSizing: 'border-box' }}>
                                                        <path fill="#fff" d="M0 0h24v24H0z" style={{ boxSizing: 'border-box' }} />
                                                    </clipPath>
                                                </defs>
                                            </svg></div>
                                        </a></li>
                                    </ul>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', WebkitBoxPack: 'end', justifyContent: 'flex-end', flex: '1 1 0%', boxSizing: 'border-box' }}>
                                    <div style={{ marginBottom: '32px', boxSizing: 'border-box' }}>
                                        <ul style={{ position: 'relative', margin: '0px', padding: '8px 0px 8px 16px', listStyleType: 'none', boxSizing: 'border-box' }}>
                                            <li style={{ boxSizing: 'border-box' }}>
                                                <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(180, 190, 192)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Runs from</p>
                                                <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '4px 0px 0px', boxSizing: 'border-box' }}>May 10 - 11, 2024</p>
                                            </li>
                                            <li style={{ marginTop: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(180, 190, 192)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Happening</p>
                                                <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '4px 0px 0px', boxSizing: 'border-box' }}>Bratislava, Slovakia</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', borderRadius: '8px', backgroundColor: 'rgb(240, 244, 255)', boxSizing: 'border-box' }}>
                                            <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(128, 151, 242)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Applications close in</p>
                                            <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(20, 59, 226)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>0d:16h:47m</p>
                                        </div><button className="btnu" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: '100%', height: '60px', padding: '0px 39px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '20px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '23px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div direction="column" width="100%" style={{ display: 'flex', flexDirection: 'column', padding: '32px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '16px', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px', width: '100%', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', boxSizing: 'border-box' }}><a href="https://ethprague2024.devfolio.co/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                        <h2 style={{ fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>ETHPrague 2024</h2>
                                    </a>
                                        <h3 style={{ fontSize: '18px', lineHeight: '28px', color: 'rgb(92, 104, 109)', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>where cypherpunks meet solarpunk</h3>
                                    </div>
                                    <ul style={{ padding: '0px', margin: '0px 0px 16px', listStyleType: 'none', display: 'flex', boxSizing: 'border-box' }}>
                                        <li style={{ boxSizing: 'border-box' }}><a href="https://ethprague.com" className="ptu"style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a></li>
                                        <li style={{ marginLeft: '8px', boxSizing: 'border-box' }}><a className="ptu" href="https://x.com/ethprague" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="twitter" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <g clipPath="url(#prefix__clip0_9809_761)" style={{ boxSizing: 'border-box' }}>
                                                    <path d="M.059 1l9.266 12.39L0 23.463h2.099l8.163-8.82 6.596 8.82H24l-9.787-13.087L22.892 1h-2.099l-7.518 8.122L7.2 1H.06zm3.086 1.546h3.28l14.488 19.371h-3.28L3.145 2.546z" fill="currentColor" style={{ boxSizing: 'border-box' }} />
                                                </g>
                                                <defs style={{ boxSizing: 'border-box' }}>
                                                    <clipPath style={{ boxSizing: 'border-box' }}>
                                                        <path fill="#fff" d="M0 0h24v24H0z" style={{ boxSizing: 'border-box' }} />
                                                    </clipPath>
                                                </defs>
                                            </svg></div>
                                        </a></li>
                                    </ul>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', WebkitBoxPack: 'end', justifyContent: 'flex-end', flex: '1 1 0%', boxSizing: 'border-box' }}>
                                    <div style={{ marginBottom: '32px', boxSizing: 'border-box' }}>
                                        <ul style={{ position: 'relative', margin: '0px', padding: '8px 0px 8px 16px', listStyleType: 'none', boxSizing: 'border-box' }}>
                                            <li style={{ boxSizing: 'border-box' }}>
                                                <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(180, 190, 192)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Runs from</p>
                                                <p style={{ textAlign: 'left',  fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '4px 0px 0px', boxSizing: 'border-box' }}>May 31 - Jun 2, 2024</p>
                                            </li>
                                            <li style={{ marginTop: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(180, 190, 192)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Happening</p>
                                                <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '4px 0px 0px', boxSizing: 'border-box' }}>Prague, Czechia</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', borderRadius: '8px', backgroundColor: 'rgb(240, 244, 255)', boxSizing: 'border-box' }}>
                                            <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(128, 151, 242)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Applications close in</p>
                                            <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(20, 59, 226)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>8d:23h:17m</p>
                                        </div><button className="btnu" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: '100%', height: '60px', padding: '0px 39px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '20px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '23px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div direction="column" width="100%" style={{ display: 'flex', flexDirection: 'column', padding: '32px', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '16px', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px', width: '100%', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', boxSizing: 'border-box' }}><a href="https://sui-overflow.devfolio.co/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                        <h2 style={{ fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>Sui Overflow</h2>
                                    </a>
                                        <h3 style={{ fontSize: '18px', lineHeight: '28px', color: 'rgb(92, 104, 109)', fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>Sui’s first global virtual hackathon</h3>
                                    </div>
                                    <ul style={{ padding: '0px', margin: '0px 0px 16px', listStyleType: 'none', display: 'flex', boxSizing: 'border-box' }}>
                                        <li style={{ boxSizing: 'border-box' }}><a href="https://sui.io/overflow" className="ptu"style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a></li>
                                        <li style={{ marginLeft: '8px', boxSizing: 'border-box' }}><a className="ptu" href="https://twitter.com/SuiNetwork" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="twitter" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <g clipPath="url(#prefix__clip0_9809_761)" style={{ boxSizing: 'border-box' }}>
                                                    <path d="M.059 1l9.266 12.39L0 23.463h2.099l8.163-8.82 6.596 8.82H24l-9.787-13.087L22.892 1h-2.099l-7.518 8.122L7.2 1H.06zm3.086 1.546h3.28l14.488 19.371h-3.28L3.145 2.546z" fill="currentColor" style={{ boxSizing: 'border-box' }} />
                                                </g>
                                                <defs style={{ boxSizing: 'border-box' }}>
                                                    <clipPath style={{ boxSizing: 'border-box' }}>
                                                        <path fill="#fff" d="M0 0h24v24H0z" style={{ boxSizing: 'border-box' }} />
                                                    </clipPath>
                                                </defs>
                                            </svg></div>
                                        </a></li>
                                    </ul>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', WebkitBoxPack: 'end', justifyContent: 'flex-end', flex: '1 1 0%', boxSizing: 'border-box' }}>
                                    <div style={{ marginBottom: '32px', boxSizing: 'border-box' }}>
                                        <ul style={{ position: 'relative', margin: '0px', padding: '8px 0px 8px 16px', listStyleType: 'none', boxSizing: 'border-box' }}>
                                            <li style={{ boxSizing: 'border-box' }}>
                                                <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(180, 190, 192)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Runs from</p>
                                                <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '4px 0px 0px', boxSizing: 'border-box' }}>Apr 21 - May 31, 2024</p>
                                            </li>
                                            <li style={{ marginTop: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(180, 190, 192)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Happening</p>
                                                <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '4px 0px 0px', boxSizing: 'border-box' }}>Online</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '16px', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', borderRadius: '8px', backgroundColor: 'rgb(240, 244, 255)', boxSizing: 'border-box' }}>
                                            <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(128, 151, 242)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Applications close in</p>
                                            <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(20, 59, 226)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>21d:1h:47m</p>
                                        </div><button className="btnu" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: '100%', height: '60px', padding: '0px 39px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '20px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '23px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ gridColumn: '1 / 5', boxSizing: 'border-box' }}>
                        <div className="zoomimg" height="100%" style={{ minHeight: '400px', height: '400px', boxSizing: 'border-box' }}><button elevation="blue-4" style={{ width: '100%', height: '400px', display: 'flex', WebkitBoxPack: 'justify', justifyContent: 'space-between', flexDirection: 'column', overflow: 'hidden', border: '0px none rgb(0, 0, 0)', zIndex: 1, cursor: 'pointer', textAlign: 'left', boxSizing: 'border-box', position: 'relative', padding: '32px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.1) 0px 9px 18px 0px, rgba(3, 0, 92, 0.03) 0px 1px 7px 0px', appearance: 'button', textTransform: 'none', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px' }}>
                            <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat, sans-serif', margin: '0px 0px 24px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Builder Spotlight</p><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '400px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}><img sizes="100vw" srcSet="https://assets.devfolio.co/content/a1f504bee74b4f19be305d409aa4fc16/b849d76b-547e-467a-9ddb-8c8ea077c07c.png
" src="/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fcontent%2Fa1f504bee74b4f19be305d409aa4fc16%2Fb849d76b-547e-467a-9ddb-8c8ea077c07c.png&w=1440&q=75" decoding="async" data-nimg="fill" style={{ zIndex: -1, position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '400px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: '50% 0%', borderStyle: 'none' }} /></span>
                            <p style={{ textAlign: 'left', fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Hire Divyanshu🙇🏻‍♂️ ! </p>
                        </button></div>
                    </div>
                    <div style={{ gridColumn: '5 / 13', boxSizing: 'border-box' }}>
                        <div elevation="blue-2" style={{ boxSizing: 'border-box', position: 'relative', height: '400px', padding: '32px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px' }}>
                            <p style={{ textAlign: 'left', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px 0px 24px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Thought-Provoking Curated Articles</p>
                            <ul direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '0px', padding: '0px', boxSizing: 'border-box' }}>
                                <li style={{ listStyleType: 'none', boxSizing: 'border-box' }}><a href="https://a16z.com/ai-will-save-the-world/" target="_blank" rel="noreferrer noopener" style={{ cursor: 'pointer', textDecoration: 'none solid rgb(0, 0, 238)', outline: 'rgb(0, 0, 238) none 0px', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                    <div className="ptu"style={{ padding: '15px', display: 'flex', alignItems: 'flex-start', borderRadius: '8px', backgroundColor: 'rgb(255, 255, 255)', border: '0.8px solid rgb(208, 217, 218)', boxSizing: 'border-box' }}>
                                        <div style={{ imageWidth: '192px', imageHeight: '108px', display: 'flex', marginRight: '16px', height: '108px', width: '192px', boxSizing: 'border-box' }}><img src="https://a16z.com/wp-content/uploads/2023/06/AI-Saves-The-World_Yoast-FB.jpg" alt="" role="presentation" style={{ height: '108px', width: '192px', minWidth: '192px', maxWidth: '100%', objectFit: 'cover', borderRadius: '8px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                        <div direction="column" width="100%" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', boxSizing: 'border-box' }}>
                                            <div style={{ boxSizing: 'border-box' }}>
                                                <h2 style={{ wordBreak: 'break-word', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>Why AI Will Save the World</h2>
                                                <h3 style={{ wordBreak: 'break-all', lineHeight: '24px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 600, margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>a16z.com</h3>
                                            </div>
                                            <h4 style={{ lineHeight: '24px', color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>There's a full-blown moral panic about AI right now. But the real risk is losing the race to global AI technological superiority.</h4>
                                        </div>
                                    </div>
                                </a></li>
                                <li style={{ listStyleType: 'none', boxSizing: 'border-box' }}><a href="https://review.firstround.com/the-not-so-cookie-cutter-approach-to-company-building-8-lessons-from-zapier/" target="_blank" rel="noreferrer noopener" style={{ cursor: 'pointer', textDecoration: 'none solid rgb(0, 0, 238)', outline: 'rgb(0, 0, 238) none 0px', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                    <div className="ptu" style={{ padding: '15px', display: 'flex', alignItems: 'flex-start', borderRadius: '8px', backgroundColor: 'rgb(255, 255, 255)', border: '0.8px solid rgb(208, 217, 218)', boxSizing: 'border-box' }}>
                                        <div style={{ imageWidth: '192px', imageHeight: '108px', display: 'flex', marginRight: '16px', height: '108px', width: '192px', boxSizing: 'border-box' }}><img src="https://review.firstround.com/content/images/2024/04/GettyImages-155133090-2.jpg" alt="" role="presentation" style={{ height: '108px', width: '192px', minWidth: '192px', maxWidth: '100%', objectFit: 'cover', borderRadius: '8px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                        <div direction="column" width="100%" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', boxSizing: 'border-box' }}>
                                            <div style={{ boxSizing: 'border-box' }}>
                                                <h2 style={{ wordBreak: 'break-word', fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>The Not So Cookie-Cutter Approach to Building</h2>
                                                <h3 style={{ wordBreak: 'break-all', lineHeight: '24px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 600, margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>review.firstround.com</h3>
                                            </div>
                                            <h4 style={{ lineHeight: '24px', color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box', }}>Wade Foster, founder and CEO of Zapier, shares his contrarian takes on building a billion-dollar company.</h4>
                                        </div>
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}