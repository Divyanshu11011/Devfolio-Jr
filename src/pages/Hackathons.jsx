/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState , useEffect } from "react";
import SearchBox from '../SearchBar/SearchBox';
import './pages.css';

export default function Hackathon() {
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
         <div style ={{backgroundColor: '#f5f7f7' ,  padding: '20px 0px'} } >
            <div style={{ padding: '0px 132px', gridTemplateColumns: '76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px', display: 'grid', width: '100%', gap: '40px 24px', WebkitBoxPack: 'center', justifyContent: 'center', marginTop: '32px', marginBottom: '32px', boxSizing: 'border-box' }}>
                <div style={{ gridColumn: '1 / -1', boxSizing: 'border-box' }}>
                    <div style={{ display: 'flex', gap: '16px', boxSizing: 'border-box' }}>
                        <div style={{ padding: '16px', width: '100%', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '89.6px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 4px 0px' }}>
                            <div style={{ display: 'flex', gap: '16px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                            <div style={{ position: "relative" }}>
                                <button onClick={handleSearchClick}
                                 onMouseEnter={() => setHover(true)}
                                 onMouseLeave={() => setHover(false)}
                                  style={{
                                    cursor: "pointer",
                                    textAlign: "left",
                                    display: "flex",
                                    borderRadius: "6px",
                                    padding: "16px",
                                    width: "100%",
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
                                    zIndex: 1
                                }}>
                                    Type to begin search, or use the global shortcut
                                </button>
                                {isSearchOpen && (
                                    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
                                        <SearchBox onClose={handleCloseSearch} />
                                    </div>
                                )}
                            </div>
                                <div style={{ borderRadius: '8px', display: 'flex', gap: '4px', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', padding: '4px', boxSizing: 'border-box' }}><kbd data-testid="kbd" color="grey-8" style={{ backgroundColor: 'rgb(228, 234, 235)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(39, 51, 57)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>Ctrl</kbd>
                                    <p style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(180, 190, 192)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+</p><kbd data-testid="kbd" color="grey-8" style={{ backgroundColor: 'rgb(228, 234, 235)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(39, 51, 57)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>k</kbd>
                                </div>
                            </div>
                        </div>
                        <div className="your-hackathon"
     style={{ 
         display: 'flex', 
         minWidth: '278px', 
         maxWidth: '278px', 
         boxSizing: 'border-box' 
     }}
>
    <a href="https://devfolio.co/hackathons/applied" 
       style={{ 
           maxHeight: '88px', 
           width: '100%', 
           display: 'flex', 
           alignItems: 'center', 
           justifyContent: 'center', 
           gap: '10px', 
           cursor: 'pointer', 
           boxShadow: 'none', 
           padding: '28px 24px', 
           borderRadius: '16px', 
           fontFamily: '"Nunito Sans", sans-serif', 
           fontWeight: 700, 
           fontSize: '20px', 
           lineHeight: '28px', 
           background: 'rgb(210, 224, 255) none repeat scroll 0% 0% / auto padding-box border-box', 
           color: 'rgb(55, 112, 255)', 
           backgroundColor: 'rgb(210, 224, 255)', 
           textDecoration: 'none' 
       }}
    >
        Your hackathons
        <div name="chevron-right" style={{ display: 'block', height: '24px', width: '24px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
            </svg>
        </div>
    </a>
</div>

                    </div>
                </div>
                <div style={{ marginTop: '32px', gridColumn: '1 / -1', boxSizing: 'border-box' }}>
                    <div style={{ padding: '0px 132px', gridTemplateColumns: '76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px', display: 'grid', width: '100%', gap: '24px', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                        <div style={{ gridColumn: '1 / 7', boxSizing: 'border-box' }}>
                            <div width="100%" height="100%" display="[object Object]" overflow="hidden" style={{ minHeight: '256px', display: 'block', borderRadius: '16px', height: '271.2px', overflow: 'hidden', position: 'relative', width: '100%', boxSizing: 'border-box' }}>
                                <div width="100%" height="100%" style={{ position: 'relative', width: '100%', height: '271.2px', boxSizing: 'border-box' }}>
                                    <div style={{ display: 'flex', backgroundColor: 'rgb(195, 147, 65)', padding: '8px 12px', position: 'absolute', borderRadius: '6px', top: '16px', left: '16px', zIndex: 2, boxSizing: 'border-box' }}>
                                        <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Featured</p>
                                 
                                    </div>
                                    
                                    <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '271.2px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}><img alt="Featured Hackathon Cover Image" sizes="100vw"  src="https://assets.devfolio.co/content/c7839676bfcc4363b7a42fcacb52eaf3/9561c667-d961-4534-9719-781350cd2f65.png
" decoding="async" data-nimg="fill" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '271.2px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', borderStyle: 'none' }} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div style={{ gridColumn: '7 / -1', boxSizing: 'border-box' }}>
                            <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '271.2px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                                <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '271.2px', boxSizing: 'border-box' }}>
                                    <div display="[object Object]" width="100%" style={{ display: 'none', width: '100%', flex: '1 1 0%', boxSizing: 'border-box' }}>
                                        <div width="100%" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', boxSizing: 'border-box' }}>
                                            <div width="100%" style={{ width: '100%', position: 'absolute', inset: '0px', boxSizing: 'border-box' }}><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'auto', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}><img alt="Featured Hackathon Cover Image" sizes="100vw" srcSet="https://assets.devfolio.co/content/c7839676bfcc4363b7a42fcacb52eaf3/9561c667-d961-4534-9719-781350cd2f65.png
" src="https://assets.devfolio.co/content/c7839676bfcc4363b7a42fcacb52eaf3/9561c667-d961-4534-9719-781350cd2f65.png
" decoding="async" data-nimg="fill" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', borderStyle: 'none' }} /></span></div>
                                        </div>
                                    </div>
                                    <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                        <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://sui-overflow.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                    <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Sui Overflow</h3>
                                                </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box', textAlign: 'left' }}>Hackathon</p>

                                                </div>
                                            </div>
                                            <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://sui.io/overflow" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a><a href="https://twitter.com/SuiNetwork" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                                </a></div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'none', boxSizing: 'border-box' }}>
                                            <div width="100%" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', boxSizing: 'border-box' }}>
                                                <div overflow="hidden" style={{ overflow: 'hidden', position: 'absolute', inset: '0px', boxSizing: 'border-box' }}><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'auto', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}><img alt="Featured Hackathon Cover Image" sizes="100vw" src="https://assets.devfolio.co/content/c7839676bfcc4363b7a42fcacb52eaf3/9561c667-d961-4534-9719-781350cd2f65.png
"decoding="async" data-nimg="fill" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', borderStyle: 'none' }} /></span></div>
                                            </div>
                                        </div>
                                        <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                                <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                    <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                        <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box', textAlign:'left' }}>No Restrictions</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                            <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Online</p>
                                                </div>
                                                <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                                </div>
                                                <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Live</p>
                                                </div>
                                            </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                                <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section style={{ marginTop: '64px', gridColumn: '1 / -1', boxSizing: 'border-box' }}>
                    <div direction="[object Object]" style={{ flexDirection: 'row', gap: '24px', marginBottom: '48px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                        <h2 style={{ fontSize: '30px', lineHeight: '40px', letterSpacing: '-0.15px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Open</h2>
                        <div height={1} style={{ display: 'flex', WebkitBoxFlex: 1, flexGrow: 1, height: '1px', backgroundColor: 'rgb(208, 217, 218)', boxSizing: 'border-box' }} /><a href="/hackathons/open" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 16px', border: '0px none rgb(55, 112, 255)', borderRadius: '8px', margin: '0px', boxShadow: 'none', backgroundColor: 'rgb(210, 224, 255)', color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(55, 112, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(55, 112, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>All open hackathons</div>
                            <div name="chevron-right" style={{ marginLeft: '8px', display: 'block', height: '20px', width: '20px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', boxSizing: 'border-box' }}>
                                <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                            </svg></div>
                        </a>
                    </div>
                    <div style={{ display: 'grid', gap: '24px', gridAutoRows: '1fr', gridTemplateColumns: '576px 576px', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://hackwithdelhi.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>HackwithDelhi</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://hackwithindia.live" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://discord.gg/g5TFSVjr" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="discord" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M15.306 3.5s2.658.443 4.541 1.758c.12.084.215.197.278.33 1.344 2.829 2.658 8.51 2.733 11.793a.784.784 0 01-.166.515c-1.018 1.26-3.435 2.457-5.579 2.592a.68.68 0 01-.628-.297C16.104 19.588 16 19 16 19M8.695 3.5s-2.659.443-4.542 1.758a.839.839 0 00-.278.33c-1.343 2.829-2.658 8.51-2.733 11.793a.784.784 0 00.166.515c1.018 1.26 3.435 2.457 5.58 2.592a.68.68 0 00.627-.297C7.896 19.588 8 19 8 19M6 7c2.212-1.078 3.54-1.5 6-1.5s3.789.422 6 1.5M6 17c2.212 1.078 3.54 1.5 6 1.5s3.789-.422 6-1.5m-4.5-4c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2zm-6 0c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' ,textAlign:'left' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/bfe7591fe25342fd95566a90cf847f45/avatar-1d7dcf5b-633b-4ecf-b272-13abeae5f3cb.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/3d5f23afb10a4dc5888f513194523bd7/avatar-0d29c137-10f3-4622-add8-d7fd2ffb287f.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/25372a4ade2e488086b15aed11c2052f/avatar-1da2341d-1519-48cb-907d-0b6f840aa701.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+1000 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 20/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://hackblocks-2.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>HackBlocks 1.0</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://twitter.com/HackBlocks" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                        </a><a href="https://www.instagram.com/hackblocks/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="instagram" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} style={{ boxSizing: 'border-box' }} />
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h0" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '134.4px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>FinTech</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>AI/ML</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>HealthTech</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/3d5f23afb10a4dc5888f513194523bd7/avatar-0d29c137-10f3-4622-add8-d7fd2ffb287f.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/810572a73bdc404fa1eb81ad6f1aa2f1/avatar-8777aa56-de40-4ed0-8c67-af4f0b0e2d33.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/cf61f5cfeb2d47e6843941eace9e6581/avatar-b49a5829-c5e3-43f2-a108-3a46d39ffb56.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+1000 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 10/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://ethbratislava2024.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>ETHBratislava</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://www.ethbratislava.com/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://twitter.com/ETH_Bratislava" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '134.4px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Blockchain</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Design</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>FinTech</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/1578534d430942af8926e29f75e459a1/avatar.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/e1a81a51ce794f5abbcd7931ceb6cf0b/avatar-e68dd624-1ef0-4074-b13d-1592d92f78bd.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/ff7f7d2b7a7140779e54aa91c4ba1800/avatar-6dc7b59c-d5cd-4918-b739-2bcbfd831275.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+100 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 10/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://aventus-2-0.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Aventus 2.0</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://www.hackaventus.com/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://discord.gg/qH2nW7u4ZW" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="discord" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M15.306 3.5s2.658.443 4.541 1.758c.12.084.215.197.278.33 1.344 2.829 2.658 8.51 2.733 11.793a.784.784 0 01-.166.515c-1.018 1.26-3.435 2.457-5.579 2.592a.68.68 0 01-.628-.297C16.104 19.588 16 19 16 19M8.695 3.5s-2.659.443-4.542 1.758a.839.839 0 00-.278.33c-1.343 2.829-2.658 8.51-2.733 11.793a.784.784 0 00.166.515c1.018 1.26 3.435 2.457 5.58 2.592a.68.68 0 00.627-.297C7.896 19.588 8 19 8 19M6 7c2.212-1.078 3.54-1.5 6-1.5s3.789.422 6 1.5M6 17c2.212 1.078 3.54 1.5 6 1.5s3.789-.422 6-1.5m-4.5-4c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2zm-6 0c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '134.4px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Blockchain</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>AI/ML</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>VR/AR</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/4c6aee6cf03945e9a15c12d2eb9e6bde/avatar-3bb25dea-40ac-4570-9163-507be6f36f7f.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/648e3e28b6fa4886bdbfb836fd46bbb9/avatar-f6badcb5-5382-4d22-a96e-1ea01fd20ea4.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/779a93e86de946f49a00e96c68c37117/avatar-711d42dd-60a1-4888-b527-aaa1ab094972.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+250 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 18/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://story-buildathon.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Story Protocol v1.0 Buildathon</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://storyprotocol.notion.site/Story-Protocol-v1-0-Buildathon-22331636231745d0aea0c5407c76d2b2?pvs=4" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://twitter.com/storyprotocol" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '134.4px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Blockchain</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>FinTech</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>AI/ML</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/814133739c6a434891f1dee8946bb8f1/avatar-e5b8a24a-23eb-46db-9f02-331bc5707e3e.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/5745f2b91bc94e56a3a417fd3be1af75/avatar-ca0c51a6-bc19-4ed5-82e1-2ddacc4d4c82.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/1c3e3fe4304f4eaabc0882835c24caf7/avatar-b5c31bcf-e5af-4960-82d0-fe819c9504d8.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+250 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Online</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Live</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://code-cubicle.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Code Cubicle</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }} />
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/79c110351d4a4514b0c7a52f1301f473/avatar-db426937-9c70-49c8-addd-8ae2142f3dca.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/275d6e538e2b4d7bb5614a574c806440/avatar-d0a240a4-1e8a-4241-bd17-d5d4e177379a.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/82571d61c2c145d593cebf3d8bc21621/avatar-1c9e5de6-29f9-4cb4-8d7f-23d07253c41e.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+1000 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 15/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://azurefest-hackathon.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>AzureFest Hackathon</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://www.facebook.com/MLSCDSU" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="facebook" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://www.instagram.com/azure_fest/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="instagram" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} style={{ boxSizing: 'border-box' }} />
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h0" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/648e3e28b6fa4886bdbfb836fd46bbb9/avatar-f6badcb5-5382-4d22-a96e-1ea01fd20ea4.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/0d9ec1d02b6f4e67952b0ba9581746ae/avatar-051f64c4-b6f3-4aec-82f3-57989aa5a4c1.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+100 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Live</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://hackfest-24.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>HackFest'24</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://www.instagram.com/hackfest_mmmut/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="instagram" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} style={{ boxSizing: 'border-box' }} />
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h0" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/77e77d0138ff4987a1631c54b3931fa4/avatar-9e3459fd-d09e-4791-95f2-aff2913edcad.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/1a2f10b836bb49d8bde782fe970ea879/avatar-47da526d-a967-4426-9f8f-73e5b3c2ff13.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/1aedaca2c7fa4356a867f19255f49fa7/avatar-f22e7b64-3bc1-472b-b0ca-e8894c25c606.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+500 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 30/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://zk-hack-krakow.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>ZK Hack Kraków</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://www.zkkrakow.com/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://twitter.com/__zkhack__" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Blockchain</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/8a34022c182f46d2a2850eb3e931e169/avatar-69b35381-088f-4b54-bd6e-60c84e6c3a16.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/20162f6dcca14aa58066eba66cc99b5d/avatar-9223747b-bbdc-41e6-b773-0671890b85c4.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/c292b5d2d8b14966b1f79a3a3b53171b/avatar-0baadb46-af68-4ac5-994d-f02d043385bf.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+250 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 17/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://ethprague2024.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>ETHPrague 2024</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://ethprague.com" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://x.com/ethprague" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Blockchain</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/fc740a47e45546e2bac2c8eb426272ba/avatar-31ff65c2-06d4-4f73-a6a0-5f0793782ac0.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/28f12b84cd3248c486f84ab5e01c2acd/avatar-bc884dbb-b96a-4197-a715-487e9cefac1a.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/9d00b73cfe134da08d62cd42f9c3d035/avatar-cf082f70-60dc-442b-bc0f-d48dff67f484.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+500 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 31/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://internal-technoxian.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>INTERNAL TECHNOXIAN</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://technoxian.netlify.app/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://www.instagram.com/cac.cuchd/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="instagram" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} style={{ boxSizing: 'border-box' }} />
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h0" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>IoT/Hardware</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 23/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://codeclash24.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>CodeClash'24</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://www.codeclash.tech/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://twitter.com/CodeClashGLB" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/bb9e6847fdfb481b8a5b95bda29489ba/avatar-63e356fc-5eac-4e3f-ae29-14899b0a91a4.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/0c22e9207650459aa7b808e4be7a6500/avatar-1dafe511-9900-4beb-9fb3-6104089fdc26.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/bfe7591fe25342fd95566a90cf847f45/avatar-1d7dcf5b-633b-4ecf-b272-13abeae5f3cb.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+250 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 24/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://quantamaze-2.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Quant-A-Maze 2.0</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://www.quantamaze.dev/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://discord.com/invite/pJB5zKGPZt" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="discord" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M15.306 3.5s2.658.443 4.541 1.758c.12.084.215.197.278.33 1.344 2.829 2.658 8.51 2.733 11.793a.784.784 0 01-.166.515c-1.018 1.26-3.435 2.457-5.579 2.592a.68.68 0 01-.628-.297C16.104 19.588 16 19 16 19M8.695 3.5s-2.659.443-4.542 1.758a.839.839 0 00-.278.33c-1.343 2.829-2.658 8.51-2.733 11.793a.784.784 0 00.166.515c1.018 1.26 3.435 2.457 5.58 2.592a.68.68 0 00.627-.297C7.896 19.588 8 19 8 19M6 7c2.212-1.078 3.54-1.5 6-1.5s3.789.422 6 1.5M6 17c2.212 1.078 3.54 1.5 6 1.5s3.789-.422 6-1.5m-4.5-4c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2zm-6 0c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/648e3e28b6fa4886bdbfb836fd46bbb9/avatar-f6badcb5-5382-4d22-a96e-1ea01fd20ea4.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+100 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 03/07/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://rns-hackoverflow-2.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>RNS Hack_Overflow 2.0</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://twitter.com/Hack_0verflow" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                        </a><a href="https://discord.gg/WX5a6qdYPH" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="discord" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M15.306 3.5s2.658.443 4.541 1.758c.12.084.215.197.278.33 1.344 2.829 2.658 8.51 2.733 11.793a.784.784 0 01-.166.515c-1.018 1.26-3.435 2.457-5.579 2.592a.68.68 0 01-.628-.297C16.104 19.588 16 19 16 19M8.695 3.5s-2.659.443-4.542 1.758a.839.839 0 00-.278.33c-1.343 2.829-2.658 8.51-2.733 11.793a.784.784 0 00.166.515c1.018 1.26 3.435 2.457 5.58 2.592a.68.68 0 00.627-.297C7.896 19.588 8 19 8 19M6 7c2.212-1.078 3.54-1.5 6-1.5s3.789.422 6 1.5M6 17c2.212 1.078 3.54 1.5 6 1.5s3.789-.422 6-1.5m-4.5-4c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2zm-6 0c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '134.4px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Blockchain</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Design</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>AI/ML</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/648e3e28b6fa4886bdbfb836fd46bbb9/avatar-f6badcb5-5382-4d22-a96e-1ea01fd20ea4.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/3657a66ec45a49f89ed02114ed09a56d/avatar-61d0ad0c-7a4f-4281-89ba-8831b231aa43.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/845c4f3dd0b24dc0b8050799c568735a/avatar-357b9aae-8b94-4e1d-a012-1d25827d7aa6.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+100 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 25/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://hackbioheritage.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Hack4bioheritage.</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://discord.com/channels/1229137722384580699/1229137722384580701" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="discord" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M15.306 3.5s2.658.443 4.541 1.758c.12.084.215.197.278.33 1.344 2.829 2.658 8.51 2.733 11.793a.784.784 0 01-.166.515c-1.018 1.26-3.435 2.457-5.579 2.592a.68.68 0 01-.628-.297C16.104 19.588 16 19 16 19M8.695 3.5s-2.659.443-4.542 1.758a.839.839 0 00-.278.33c-1.343 2.829-2.658 8.51-2.733 11.793a.784.784 0 00.166.515c1.018 1.26 3.435 2.457 5.58 2.592a.68.68 0 00.627-.297C7.896 19.588 8 19 8 19M6 7c2.212-1.078 3.54-1.5 6-1.5s3.789.422 6 1.5M6 17c2.212 1.078 3.54 1.5 6 1.5s3.789-.422 6-1.5m-4.5-4c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2zm-6 0c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://www.instagram.com/projectecho.igdtuw/?hl=en" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="instagram" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} style={{ boxSizing: 'border-box' }} />
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h0" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Online</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 24/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://ssocseason3.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Social Summer Of Code Season 3</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }} />
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/34a3d0346d904352b51b40d4f0e84c18/avatar-f358664a-141d-43fb-a11e-64f5c1f35c3b.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/7a24d999018449c08d6532e57e967471/avatar-e6072446-40d3-4ee9-84d8-d1af1bc7f346.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/03fefc4a5fb84c6eb88cb69d6add20a9/avatar-1342eb5f-2f26-4f87-96cb-fc9951f29fe3.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+1000 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Online</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 01/06/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://kleos-s2.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>KLEOS 2.0</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://kleos-production.netlify.app/home" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://twitter.com/RaitACM" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/1a2f10b836bb49d8bde782fe970ea879/avatar-47da526d-a967-4426-9f8f-73e5b3c2ff13.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/8bda04bd4bb64004973ef93f3fb6b819/avatar-cd81929a-973e-46a3-b17e-3da5ad8365f5.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/9f499b8ab76243acaf1a3a9853360878/avatar-36abc136-33da-4ecc-8f83-171411af10ae.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+100 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 21/06/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://hackprix.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>HackPrix</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://hackprix.tech" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://twitter.com/codewavehub" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Blockchain</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>AI/ML</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>HealthTech</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 08/06/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div className="hover-div" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://sui-overflow.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Sui Overflow</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://sui.io/overflow" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://twitter.com/SuiNetwork" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Online</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Live</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '314.4px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '314.4px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://vinyasa-summer-of-code-vsoc.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Vinyasa Summer of Code (VSOC)</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://www.twitter.com/vinyasaCSD" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                        </a><a href="https://www.instagram.com/vsoc_csd" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="instagram" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} style={{ boxSizing: 'border-box' }} />
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h0" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/5274adec4500415aad9142841d326e8f/avatar-c5934bb2-d6a1-4bba-a8c3-7275a28ef27f.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/c3a6886c9be548c9b581907d7965afad/avatar-6eac3a8c-4295-497c-a8c9-243628014e2b.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/62e1fce9e8f64a8d8b49c1f59ac9dab5/avatar-71080c82-4952-4ee0-b1a7-8d53eda49ff4.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+100 participating</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Online</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Open</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Starts 10/06/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Apply now</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ marginTop: '64px', gridColumn: '1 / -1', boxSizing: 'border-box' }}>
                    <div direction="[object Object]" style={{ flexDirection: 'row', gap: '24px', marginBottom: '48px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                        <h2 style={{ fontSize: '30px', lineHeight: '40px', letterSpacing: '-0.15px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Upcoming</h2>
                        <div height={1} style={{ display: 'flex', WebkitBoxFlex: 1, flexGrow: 1, height: '1px', backgroundColor: 'rgb(208, 217, 218)', boxSizing: 'border-box' }} /><a href="/hackathons/upcoming" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 16px', border: '0px none rgb(55, 112, 255)', borderRadius: '8px', margin: '0px', boxShadow: 'none', backgroundColor: 'rgb(210, 224, 255)', color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(55, 112, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(55, 112, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>All upcoming hackathons</div>
                            <div name="chevron-right" style={{ marginLeft: '8px', display: 'block', height: '20px', width: '20px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', boxSizing: 'border-box' }}>
                                <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                            </svg></div>
                        </a>
                    </div>
                    <div style={{ display: 'grid', gap: '24px', gridAutoRows: '1fr', gridTemplateColumns: '576px 576px', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '271.2px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '271.2px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://sparkthesummer.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>SparkTheSummer</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://sparkthesummer.tech/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://x.com/SparkTheSummer" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Upcoming</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Opens 15/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Remind me</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '271.2px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '271.2px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://hacker-house-goa.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>HACKER HOUSE GOA</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://twitter.com/Dimo_Hack" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                        </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Blockchain</p>
                                                </div>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>AI/ML</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Upcoming</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Opens 16/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Remind me</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '271.2px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '271.2px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://innofusionhackathon.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>InnoFusion-1.0</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://www.facebook.com/InnoFusionHackathon" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="facebook" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://discord.gg/wRRqeN23a5" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="discord" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M15.306 3.5s2.658.443 4.541 1.758c.12.084.215.197.278.33 1.344 2.829 2.658 8.51 2.733 11.793a.784.784 0 01-.166.515c-1.018 1.26-3.435 2.457-5.579 2.592a.68.68 0 01-.628-.297C16.104 19.588 16 19 16 19M8.695 3.5s-2.659.443-4.542 1.758a.839.839 0 00-.278.33c-1.343 2.829-2.658 8.51-2.733 11.793a.784.784 0 00.166.515c1.018 1.26 3.435 2.457 5.58 2.592a.68.68 0 00.627-.297C7.896 19.588 8 19 8 19M6 7c2.212-1.078 3.54-1.5 6-1.5s3.789.422 6 1.5M6 17c2.212 1.078 3.54 1.5 6 1.5s3.789-.422 6-1.5m-4.5-4c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2zm-6 0c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Upcoming</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Opens 15/05/24</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>Remind me</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ marginTop: '64px', gridColumn: '1 / -1', boxSizing: 'border-box' }}>
                    <div direction="[object Object]" style={{ flexDirection: 'row', gap: '24px', marginBottom: '48px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                        <h2 style={{ fontSize: '30px', lineHeight: '40px', letterSpacing: '-0.15px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Past</h2>
                        <div height={1} style={{ display: 'flex', WebkitBoxFlex: 1, flexGrow: 1, height: '1px', backgroundColor: 'rgb(208, 217, 218)', boxSizing: 'border-box' }} /><a href="/hackathons/past" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 16px', border: '0px none rgb(55, 112, 255)', borderRadius: '8px', margin: '0px', boxShadow: 'none', backgroundColor: 'rgb(210, 224, 255)', color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(55, 112, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(55, 112, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>All past hackathons</div>
                            <div name="chevron-right" style={{ marginLeft: '8px', display: 'block', height: '20px', width: '20px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', boxSizing: 'border-box' }}>
                                <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                            </svg></div>
                        </a>
                    </div>
                    <div style={{ display: 'grid', gap: '24px', gridAutoRows: '1fr', gridTemplateColumns: '576px 576px', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '271.2px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '271.2px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://eduhackedu.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>EduHack 2.0</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><button style={{ padding: '10px 16px', backgroundColor: 'rgb(240, 245, 245)', cursor: 'default', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 0)', borderRadius: '24px', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                                            <p aria-label="Rated 4 out of five stars" style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px 6px 0px 0px', boxSizing: 'border-box' }}>4</p>
                                            <div name="star-fill" color="gold" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(215, 190, 130)', boxSizing: 'border-box' }}>
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </button><a href="https://www.eduminerva.live/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a><a href="https://discord.com/invite/nPJUMbEw8S" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="discord" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M15.306 3.5s2.658.443 4.541 1.758c.12.084.215.197.278.33 1.344 2.829 2.658 8.51 2.733 11.793a.784.784 0 01-.166.515c-1.018 1.26-3.435 2.457-5.579 2.592a.68.68 0 01-.628-.297C16.104 19.588 16 19 16 19M8.695 3.5s-2.659.443-4.542 1.758a.839.839 0 00-.278.33c-1.343 2.829-2.658 8.51-2.733 11.793a.784.784 0 00.166.515c1.018 1.26 3.435 2.457 5.58 2.592a.68.68 0 00.627-.297C7.896 19.588 8 19 8 19M6 7c2.212-1.078 3.54-1.5 6-1.5s3.789.422 6 1.5M6 17c2.212 1.078 3.54 1.5 6 1.5s3.789-.422 6-1.5m-4.5-4c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2zm-6 0c0 1 .5 2 1.5 2s1.5-1 1.5-2-.5-2-1.5-2-1.5 1-1.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/d70296df3b724a0ebd5b3de447c5f2d8/avatar-d5f368cb-5c20-46f5-8846-116f4e075913.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/7b67d6f24b514155899c501e3da8768d/avatar-ef87563c-183d-4d29-9375-cc2d82c2c2c0.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/af77d993417e4505bf53c83a6a67c9f6/avatar-adad4fa3-dc36-4c8a-bd6e-44c6d7b32305.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+1000 participated</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Ended</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>See projects</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '271.2px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '271.2px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://sprinthacks2.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Sprinthacks2.0</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><button style={{ padding: '10px 16px', backgroundColor: 'rgb(240, 245, 245)', cursor: 'default', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 0)', borderRadius: '24px', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                                            <p aria-label="Rated 3.4 out of five stars" style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px 6px 0px 0px', boxSizing: 'border-box' }}>3.4</p>
                                            <div name="star-fill" color="gold" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(215, 190, 130)', boxSizing: 'border-box' }}>
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </button><a href="https://www.sprinthacks.in/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a><a href="https://twitter.com/dsckiet" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
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
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/c87a449d0e324e298d0e57ce0879efb3/avatar-16429036-520a-4ffe-9a54-eade79325e5d.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/d974f0be8aa24dcbbdc2c2738503371b/avatar-40746504-24a5-4709-8b0f-d580b8dba6f5.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/1ce200bca33d43afa66bd8001ca1c279/avatar-f26d2975-02b6-4eee-b042-bddf6b7c6092.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+1000 participated</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Ended</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>See projects</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '271.2px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '271.2px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://hacikfy.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>Hackify</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><button style={{ padding: '10px 16px', backgroundColor: 'rgb(240, 245, 245)', cursor: 'default', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 0)', borderRadius: '24px', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                                            <p aria-label="Rated 4.1 out of five stars" style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 800, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px 6px 0px 0px', boxSizing: 'border-box' }}>4.1</p>
                                            <div name="star-fill" color="gold" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px', color: 'rgb(215, 190, 130)', boxSizing: 'border-box' }}>
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </button><a href="https://hackify.iedcmace.in/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a><a href="https://www.instagram.com/hackify.mace" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="instagram" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} style={{ boxSizing: 'border-box' }} />
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h0" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>HealthTech</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/52ff563a703641998dcf9205f07395e6/avatar-b9db2bf3-a9e9-4927-a020-bab24f5b5f6b.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/a5c8548defbb45298ae806cda5520880/avatar-5a1665b4-c7c4-4e7c-b17e-898d05317119.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/a1fceb2c3ab24280a3208c7c0dc72e07/avatar-d634eb75-22fe-47ab-921a-296342224dde.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+500 participated</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Ended</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>See projects</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingx: 0, paddingy: 0, overflow: 'hidden', boxSizing: 'border-box', position: 'relative', padding: '0px', height: '271.2px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', display: 'flex', flexDirection: 'column', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', cursor: 'pointer' }}>
                            <div height="100%" direction="[object Object]" style={{ flexDirection: 'row', display: 'flex', height: '271.2px', boxSizing: 'border-box' }}>
                                <div direction="column" style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0%', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                                    <div wrap="[object Object]" height="max-content" style={{ flexWrap: 'nowrap', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '100px', padding: '24px', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}><a href="https://glb-hackathon-o.devfolio.co/" style={{ color: 'rgb(55, 112, 255)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, textDecoration: 'none solid rgb(55, 112, 255)', cursor: 'pointer', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                <h3 style={{ wordBreak: 'break-word', fontSize: '24px', lineHeight: '28px', fontWeight: 800, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box' }}>GLB HACKATHON 3.O</h3>
                                            </a>
                                                <p style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgb(142, 152, 156)', lineHeight: '16px', letterSpacing: '0.42px', margin: '0px', boxSizing: 'border-box' }}>Hackathon</p>
                                            </div>
                                        </div>
                                        <div direction="row" style={{ display: 'flex', flexDirection: 'row', gap: '8px', boxSizing: 'border-box' }}><a href="https://glbhackathon.netlify.app/" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                            <div name="link" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" style={{ boxSizing: 'border-box' }} />
                                                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </a><a href="https://www.instagram.com/techvisor_glbajaj/?hl=en" style={{ padding: '12px', margin: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '0px none rgb(0, 0, 238)', borderRadius: '24px', backgroundColor: 'rgb(240, 244, 255)', cursor: 'pointer', outline: 'rgb(0, 0, 238) none 0px', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box' }}>
                                                <div name="instagram" color="blue-4" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box' }}>
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} style={{ boxSizing: 'border-box' }} />
                                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h0" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </a></div>
                                    </div>
                                    <div height="max-content" style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '91.2px', padding: '16px 24px', backgroundColor: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                                            <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Theme</p>
                                            <div wrap="wrap" direction="row" style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                                <div style={{ padding: '8px 16px', borderRadius: '20px', borderStyle: 'solid', borderColor: 'rgb(228, 234, 235)', borderWidth: '1.6px', boxSizing: 'border-box' }}>
                                                    <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>No Restrictions</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div display="[object Object]" style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/fd27bc0e6f3845a2b847eac7adac20b8/avatar-6dd895a3-1fb9-4871-a730-f1c2681c217c.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/4d71672dcbb54e728c521fa9ccb77561/avatar-e9c72591-24c5-4dbc-aa30-06b3eecf562e.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                                <div style={{ outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2.4px solid rgb(255, 255, 255)', marginLeft: '-16px', boxSizing: 'border-box' }}><img src="https://assets.devfolio.co/users/81f1cabf12094552a21027a3f4dfb66b/avatar-0077f599-d679-4372-b8c4-51f45f962998.jpeg" alt="" style={{ width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                            </div>
                                            <p style={{ fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(15, 163, 141)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+1000 participated</p>
                                        </div>
                                    </div>
                                    <div direction="[object Object]" height="max-content" style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', gap: '16px', WebkitBoxPack: 'justify', justifyContent: 'space-between', height: '80px', padding: '16px 24px', boxSizing: 'border-box' }}>
                                        <div direction="row" wrap="wrap" style={{ alignSelf: 'flex-start', display: 'flex', flexFlow: 'row wrap', gap: '8px', boxSizing: 'border-box' }}>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Offline</p>
                                            </div>
                                            <div style={{ whiteSpace: 'normal', backgroundColor: 'rgb(245, 247, 247)', padding: '16px', borderRadius: '16px', boxSizing: 'border-box' }}>
                                                <p style={{ fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(56, 71, 78)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box' }}>Ended</p>
                                            </div>
                                        </div><button style={{ alignSelf: 'flex-end', marginTop: '0px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box', width: 'auto', height: '44px', padding: '0px 23px', border: '0.8px solid rgb(35, 104, 251)', borderRadius: '8px', margin: '0px', boxShadow: 'rgba(3, 0, 92, 0.05) 0px 1px 4px 0px', backgroundColor: 'rgb(55, 112, 255)', color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, whiteSpace: 'nowrap', outline: 'rgb(255, 255, 255) none 0px', userSelect: 'none', textDecoration: 'none solid rgb(255, 255, 255)', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', appearance: 'button', textTransform: 'none', overflow: 'visible', lineHeight: '18.4px' }}>
                                            <div style={{ display: 'flex', flex: '1 1 0%', WebkitBoxPack: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>See projects</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </>
    );
}
