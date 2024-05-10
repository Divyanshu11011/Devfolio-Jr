import React from "react";

const SearchBox = ({ onClose }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();  // Close the search box if the click is outside
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <>
         
            <div ref={ref} role="dialog" aria-describedby="radix-95" aria-labelledby="radix-94" data-state="open" aria-label="Search Devfolio..." tabIndex={-1} style={{ pointerEvents: 'auto', animation: '0.16s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s 1 normal none running ieNTYn', transformOrigin: '576px 0px', willChange: 'transform, opacity', perspective: '2400px',  transitionOpen: '160ms cubic-bezier(0.25,0.46,0.45,0.94)', transitionClosed: '80ms cubic-bezier(0.55,0.055,0.675,0.19)', transformOpen: 'translate(-50%,0) scale(1) rotateX(0)', transformClosed: 'translate(-50%,4px) scale(0.99) rotateX(-4deg)', position: 'relative', left: '760px', width: '100%', maxWidth: '1152px', margin: '64px 0px', padding: '24px', borderRadius: '16px', boxShadow: 'rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.2) 0px 10px 25px 0px', backgroundColor: 'rgb(39, 51, 57)', transform: 'matrix(1, 0, 0, 1, -576, 0)', outline: 'rgb(0, 0, 0) none 0px', overflowX: 'hidden', boxSizing: 'border-box'}}>
            <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '12px', boxSizing: 'border-box' }}><label htmlFor="global-search-input" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0px', margin: '-1px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', whiteSpace: 'nowrap', borderWidth: '0px', boxSizing: 'border-box' }}>Global Search</label>
                <div role="combobox" aria-haspopup="listbox" aria-owns="global-search-menu" aria-expanded="false" style={{ marginTop: '0px', boxSizing: 'border-box' }}>
                    <div direction="column" width="100%" style={{ display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box' }}>
                        <div width="100%" style={{ position: 'relative', width: '100%', boxSizing: 'border-box' }}>
                            <div name="search" color="grey-5" style={{ position: 'absolute', top: '14px', left: '16px', display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(180, 190, 192)', boxSizing: 'border-box' }}>
                                <circle cx={11} cy={11} r={8} style={{ boxSizing: 'border-box' }} />
                                <path d="M21 21l-4.35-4.35" style={{ boxSizing: 'border-box' }} />
                            </svg></div>
                            <div direction="row" style={{ display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}><input data-test="search" name="search" placeholder="Try typing &quot;My hackathons&quot;..." type="text" aria-autocomplete="list" aria-controls="global-search-menu" aria-labelledby="global-search-label" autoComplete="off" defaultValue data-listener-added_5ac2c215="" style={{ boxSizing: 'border-box', borderRadius: '6px', padding: '16px 16px 16px 48px', width: '100%', border: '0.8px solid rgb(228, 234, 235)', backgroundColor: 'rgb(245, 247, 247)', color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: '24px', outline: 'rgb(39, 51, 57) none 0px', transitionProperty: 'background, outline, border', transitionDuration: '0.16s', transitionTimingFunction: 'ease-in', overflow: 'visible', margin: '0px' }} /></div>
                        </div>
                    </div>
                </div>
                <div role="listbox" aria-labelledby="global-search-label" style={{ marginTop: '0px', boxSizing: 'border-box' }} />
                <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '24px', boxSizing: 'border-box' }}>
                    <div style={{ display: 'grid', columnGap: '16px', gridTemplateColumns: '362.663px 725.338px', boxSizing: 'border-box' }}>
                        <div direction="column" spacing={8} style={{ gap: '8px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}><button width="100%" color="white" data-pressed="false" spacing={24} style={{ boxSizing: 'border-box', appearance: 'none', cursor: 'pointer', outline: 'rgb(255, 255, 255) none 0px', textDecoration: 'none solid rgb(255, 255, 255)', userSelect: 'none', border: '1.6px solid rgba(0, 0, 0, 0)', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', width: '100%', margin: '0px', color: 'rgb(255, 255, 255)', borderRadius: '8px', backgroundColor: 'rgb(56, 71, 78)', padding: '12px 16px', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                            <div style={{ display: 'flex', gap: '16px', flex: '1 1 0%', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                <div height={48} width={48} style={{ background: 'rgb(207, 207, 207)', display: 'flex', flexShrink: 0, WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', height: '48px', width: '48px', borderRadius: '9999px', boxSizing: 'border-box' }}><img alt="" src="/hackathon.svg" height={24} width={24} style={{ boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                <p style={{ fontSize: '18px', lineHeight: '24px', color: 'rgb(255, 255, 255)', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Hackathons</p>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                <div name="chevron-right" color="white" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box' }}>
                                    <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                                </svg></div>
                            </div>
                        </button><button width="100%" color="white" data-pressed="false" spacing={24} style={{ boxSizing: 'border-box', appearance: 'none', cursor: 'pointer', outline: 'rgb(255, 255, 255) none 0px', textDecoration: 'none solid rgb(255, 255, 255)', userSelect: 'none', border: '1.6px solid rgba(0, 0, 0, 0)', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', width: '100%', margin: '0px', color: 'rgb(255, 255, 255)', borderRadius: '8px', backgroundColor: 'rgb(56, 71, 78)', padding: '12px 16px', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                                <div style={{ display: 'flex', gap: '16px', flex: '1 1 0%', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                    <div height={48} width={48} style={{ background: 'rgb(255, 233, 196)', display: 'flex', flexShrink: 0, WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', height: '48px', width: '48px', borderRadius: '9999px', boxSizing: 'border-box' }}><img alt="" src="/project.svg" height={24} width={24} style={{ boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                    <p style={{ fontSize: '18px', lineHeight: '24px', color: 'rgb(255, 255, 255)', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Projects</p>
                                </div>
                                <div style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                    <div name="chevron-right" color="white" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box' }}>
                                        <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                                    </svg></div>
                                </div>
                            </button><button width="100%" color="white" data-pressed="false" spacing={24} style={{ boxSizing: 'border-box', appearance: 'none', cursor: 'pointer', outline: 'rgb(255, 255, 255) none 0px', textDecoration: 'none solid rgb(255, 255, 255)', userSelect: 'none', border: '1.6px solid rgba(0, 0, 0, 0)', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', width: '100%', margin: '0px', color: 'rgb(255, 255, 255)', borderRadius: '8px', backgroundColor: 'rgb(56, 71, 78)', padding: '12px 16px', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                                <div style={{ display: 'flex', gap: '16px', flex: '1 1 0%', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                    <div height={48} width={48} style={{ background: 'rgb(191, 214, 194)', display: 'flex', flexShrink: 0, WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', height: '48px', width: '48px', borderRadius: '9999px', boxSizing: 'border-box' }}><img alt="" src="/builder.svg" height={24} width={24} style={{ boxSizing: 'border-box', borderStyle: 'none' }} /></div>
                                    <p style={{ fontSize: '18px', lineHeight: '24px', color: 'rgb(255, 255, 255)', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Builders</p>
                                </div>
                                <div style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                    <div name="chevron-right" color="white" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box' }}>
                                        <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                                    </svg></div>
                                </div>
                            </button></div>
                        <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                            <div width={460} style={{ position: 'absolute', top: '0px', right: '0px', bottom: '0px', width: '460px', zIndex: -1, boxSizing: 'border-box' }}><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '372px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}><img alt="" sizes="100vw" srcSet="/command-search-bg.svg 360w, /command-search-bg.svg 768w, /command-search-bg.svg 1024w, /command-search-bg.svg 1440w" src="/command-search-bg.svg" decoding="async" data-nimg="fill" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '372px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', borderStyle: 'none' }} /></span></div>
                            <div direction="column" style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '16px', marginLeft: '32px', boxSizing: 'border-box' }}>
                                <div style={{ display: 'flex', gap: '16px', WebkitBoxAlign: 'center', alignItems: 'center', padding: '16px', borderRadius: '8px', backgroundColor: 'rgb(39, 51, 57)', borderWidth: '1.6px', borderStyle: 'solid', borderColor: 'rgb(56, 71, 78)', boxShadow: 'rgba(0, 0, 0, 0.09) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 4px 8px 0px', boxSizing: 'border-box' }}>
                                    <div width={44} height={44} style={{ display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', flexShrink: 0, width: '44px', height: '44px', borderRadius: '9999px', backgroundColor: 'rgb(32, 40, 45)', boxSizing: 'border-box' }}>
                                        <div name="bulb" color="grey-0" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(252, 252, 252)', boxSizing: 'border-box' }}>
                                            <path d="M15 16c1.224-2.398 2.465-1.9 3.467-4.321a7 7 0 10-12.934 0C6.535 14.099 7.776 13.602 9 16m0 3h6m-5 3h4" style={{ boxSizing: 'border-box' }} />
                                        </svg></div>
                                    </div>
                                    <p style={{ fontSize: '18px', lineHeight: '28px', color: 'rgb(228, 234, 235)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 400, margin: '0px', boxSizing: 'border-box' }}>Search throughout Devfolio using the search field above, or choose a specific filter from the left.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '16px', WebkitBoxAlign: 'center', alignItems: 'center', padding: '16px', borderRadius: '8px', backgroundColor: 'rgb(39, 51, 57)', borderWidth: '1.6px', borderStyle: 'solid', borderColor: 'rgb(56, 71, 78)', boxShadow: 'rgba(0, 0, 0, 0.09) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 4px 8px 0px', boxSizing: 'border-box' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', boxSizing: 'border-box' }}><kbd data-testid="kbd" style={{ backgroundColor: 'rgb(32, 40, 45)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(252, 252, 252)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>
                                        <div name="chevron-left" style={{ display: 'block', height: '20px', width: '20px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', boxSizing: 'border-box' }}>
                                            <path d="M15 18l-6-6 6-6" style={{ boxSizing: 'border-box' }} />
                                        </svg></div>
                                    </kbd>
                                        <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '4px', boxSizing: 'border-box' }}><kbd data-testid="kbd" style={{ backgroundColor: 'rgb(32, 40, 45)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(252, 252, 252)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>
                                            <div name="chevron-up" style={{ display: 'block', height: '20px', width: '20px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', boxSizing: 'border-box' }}>
                                                <path d="M18 15l-6-6-6 6" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </kbd><kbd data-testid="kbd" style={{ backgroundColor: 'rgb(32, 40, 45)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(252, 252, 252)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>
                                                <div name="chevron-down" style={{ display: 'block', height: '20px', width: '20px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', boxSizing: 'border-box' }}>
                                                    <path d="M6 9l6 6 6-6" style={{ boxSizing: 'border-box' }} />
                                                </svg></div>
                                            </kbd></div><kbd data-testid="kbd" style={{ backgroundColor: 'rgb(32, 40, 45)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(252, 252, 252)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>
                                            <div name="chevron-right" style={{ display: 'block', height: '20px', width: '20px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', boxSizing: 'border-box' }}>
                                                <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                                            </svg></div>
                                        </kbd>
                                    </div>
                                    <p style={{ fontSize: '18px', lineHeight: '28px', color: 'rgb(228, 234, 235)', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 400, margin: '0px', boxSizing: 'border-box' }}>Navigate the options using the arrow keys, or press enter to select an option.</p>
                                </div>
                            </div>
                            <div height={270} width={256} style={{ position: 'absolute', bottom: '0px', right: '0px', height: '270px', width: '256px', zIndex: 1, boxSizing: 'border-box' }}><span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '270px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}><img alt="" src="/command-search-type.svg" decoding="async" data-nimg="fill" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '270px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', borderStyle: 'none' }} sizes="100vw" srcSet="/command-search-type.svg 360w, /command-search-type.svg 768w, /command-search-type.svg 1024w, /command-search-type.svg 1440w" /><noscript style={{ boxSizing: 'border-box' }} /></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

            
        </>



    );
};
export default SearchBox;