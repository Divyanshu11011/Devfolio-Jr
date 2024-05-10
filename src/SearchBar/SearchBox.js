import React , {useState} from "react";

const SearchBox = ({ onClose }) => {
    const ref = React.useRef(null);
    const [inputValue, setInputValue] = useState('');


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
                            <div name="search" color="grey-5" style={{ position: 'absolute', top: '14px', left: '16px', display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(180, 190, 192)', boxSizing: 'border-box' }}>
                                <circle cx={11} cy={11} r={8} style={{ boxSizing: 'border-box' }} />
                                <path d="M21 21l-4.35-4.35" style={{ boxSizing: 'border-box' }} />
                            </svg></div>
                            <div direction="row" style={{ display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
    <input
        data-test="search"
        name="search"
        placeholder="Try typing &quot;My hackathons&quot;..."
        type="text"
        aria-autocomplete="list"
        aria-controls="global-search-menu"
        aria-labelledby="global-search-label"
         autoComplete="off"
        
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
            boxSizing: 'border-box',
            borderRadius: '6px',
            padding: '16px 16px 16px 48px',
            width: '100%',
            border: '0.8px solid rgb(228, 234, 235)',
            backgroundColor: 'rgb(245, 247, 247)',
            color: 'rgb(39, 51, 57)',
            fontFamily: '"Nunito Sans", sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '24px',
            outline: 'rgb(39, 51, 57) none 0px',
            transitionProperty: 'background, outline, border',
            transitionDuration: '0.16s',
            transitionTimingFunction: 'ease-in',
            overflow: 'visible',
            margin: '0px'
        }}
    />
</div>
    </div>
                    </div>
                </div>
                <div role="listbox" aria-labelledby="global-search-label" style={{ marginTop: '0px', boxSizing: 'border-box' }} />
                <div direction="column" style={{ display: 'flex', flexDirection: 'column', gap: '24px', boxSizing: 'border-box' }}>
                    <div style={{ display: 'grid', columnGap: '16px', gridTemplateColumns: '362.663px 725.338px', boxSizing: 'border-box' }}>
                        <div direction="column" spacing={8} style={{ gap: '8px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}><button width="100%" color="white" data-pressed="false" spacing={24} style={{ boxSizing: 'border-box', appearance: 'none', cursor: 'pointer', outline: 'rgb(255, 255, 255) none 0px', textDecoration: 'none solid rgb(255, 255, 255)', userSelect: 'none', border: '1.6px solid rgba(0, 0, 0, 0)', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', width: '100%', margin: '0px', color: 'rgb(255, 255, 255)', borderRadius: '8px', backgroundColor: 'rgb(56, 71, 78)', padding: '12px 16px', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                        <div style={{ display: 'flex', gap: '16px', flex: '1 1 0%', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3.52316C4 2.68194 4.68194 2 5.52316 2H18.4768C19.3181 2 20 2.68194 20 3.52316V7C20 11.4183 16.4183 15 12 15C7.58172 15 4 11.4183 4 7V3.52316Z" fill="#7F7789"/>
        <path d="M4 20.4286C4 18.535 5.53502 17 7.42857 17H16.5714C18.465 17 20 18.535 20 20.4286C20 21.8487 18.8487 22 17.4286 22H6.57143C5.15127 22 4 21.8487 4 20.4286Z" fill="#7F7789"/>
    </svg>
    <p style={{ fontSize: '18px', lineHeight: '24px', color: 'rgb(255, 255, 255)', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Hackathons</p>
</div>

                            <div style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                <div name="chevron-right" color="white" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box' }}>
                                    <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                                </svg></div>
                            </div>
                        </button><button width="100%" color="white" data-pressed="false" spacing={24} style={{ boxSizing: 'border-box', appearance: 'none', cursor: 'pointer', outline: 'rgb(255, 255, 255) none 0px', textDecoration: 'none solid rgb(255, 255, 255)', userSelect: 'none', border: '1.6px solid rgba(0, 0, 0, 0)', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', width: '100%', margin: '0px', color: 'rgb(255, 255, 255)', borderRadius: '8px', backgroundColor: 'rgb(56, 71, 78)', padding: '12px 16px', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                        <div style={{ display: 'flex', gap: '16px', flex: '1 1 0%', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 9C2 7.89543 2.89543 7 4 7H10C11.1046 7 12 6.10457 12 5C12 3.89543 12.8954 3 14 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9Z" fill="#E0A56B"/>
    </svg>
    <p style={{ fontSize: '18px', lineHeight: '24px', color: 'rgb(255, 255, 255)', fontWeight: 700, fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>Projects</p>
</div>

                                <div style={{ display: 'flex', gap: '8px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                    <div name="chevron-right" color="white" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box' }}>
                                        <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                                    </svg></div>
                                </div>
                            </button><button width="100%" color="white" data-pressed="false" spacing={24} style={{ boxSizing: 'border-box', appearance: 'none', cursor: 'pointer', outline: 'rgb(255, 255, 255) none 0px', textDecoration: 'none solid rgb(255, 255, 255)', userSelect: 'none', border: '1.6px solid rgba(0, 0, 0, 0)', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', width: '100%', margin: '0px', color: 'rgb(255, 255, 255)', borderRadius: '8px', backgroundColor: 'rgb(56, 71, 78)', padding: '12px 16px', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px' }}>
                            <div style={{ display: 'flex', gap: '16px', flex: '1 1 0%', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.06138 3.21518L2.62157 11.3283C2.2645 11.9808 2.43952 12.7964 3.03285 13.2449L7.48396 16.6099C7.80898 16.8556 8 17.2395 8 17.6469V20.5C8 21.3284 8.67157 22 9.5 22H13.5C14.3284 22 15 21.3284 15 20.5V17.6469C15 17.2395 15.191 16.8556 15.516 16.6099L19.9671 13.2449C20.5605 12.7964 20.7355 11.9808 20.3784 11.3283L15.9386 3.21519C15.6901 2.7611 15 2.93758 15 3.45522V9C15 10.1046 14.1046 11 13 11H10C8.89543 11 8 10.1046 8 9V3.45521C8 2.93758 7.30988 2.7611 7.06138 3.21518Z" fill="#688A6F"/>
    </svg>
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
                            <div height={270} width={256} style={{ position: 'absolute', bottom: '0px', right: '0px', height: '270px', width: '256px', zIndex: 1, boxSizing: 'border-box' }}>
  <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '270px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}>
  <svg width="100%" height="100%" viewBox="0 0 444 440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M338.589 0c2.297 39.473-6.489 108.6-6.489 108.6l-78.2 22.6-34-7.7S221.947 68.012 200.234 0h138.355z" fill="#7B9CDE"/>
        <path d="M219.9 123.5c-.4 18.3-2.2 36.3-5.2 53.9 43.3-12.2 89.1-18.8 136.3-18.8h4.1c-16.6-18.5-31.4-38.7-43.9-60.4-32 4.5-62.6 13.1-91.3 25.3z" fill="#ACB1B3"/>
        <path d="M378.8 95.3c-5.9-.3-11.8-.4-17.7-.4-16.9 0-33.6 1.2-49.9 3.4 12.6 21.6 27.3 41.9 43.9 60.4h1.6c1-23.7 9.1-45.5 22.1-63.4z" fill="#7B9CDE"/>
        <path d="M444 276.993V440H17.99C119.91 389.779 194.762 292.965 214.7 177.4c43.3-12.2 89-18.8 136.3-18.8h4.1c.25.3.5.575.75.85s.5.55.75.85c-.1 1.2-.1 2.399-.1 3.599v.001c0 54.381 37.178 100.09 87.5 113.093z" fill="#FFDAA3"/>
        <path d="M275.1 11.7c36.3 12.2 75.2 18.9 115.7 18.9a364.03 364.03 0 0 0 53.2-3.892v24.208c-26.579 6.88-49.525 22.894-65.2 44.484-5.9-.3-11.8-.4-17.7-.4-16.9 0-33.6 1.1-49.9 3.4-15.6-26.9-27.8-56-36.1-86.7z" fill="#ACB1B3"/>
        <path d="M66.1 247.6c44.8-31.1 94.9-55 148.6-70.2 3-17.6 4.8-35.6 5.2-53.9-62.1 26.4-115.3 69.7-153.8 124.1z" fill="#CA6F30"/>
        <path d="M17.275 440H.255c3.083-71.67 27.07-137.911 65.945-192.8 44.8-31.1 94.8-55 148.6-70.2-19.991 115.873-95.188 212.895-197.525 263z" fill="#7B9CDE"/>
        <path d="M444 230.614v46.38c-50.322-13.003-87.5-58.712-87.5-113.094 0-.6.025-1.2.05-1.8.025-.6.05-1.2.05-1.8 25.23 27.709 54.709 51.504 87.4 70.314zm0-179.81v53.662a361.952 361.952 0 0 0-65.2-9.166c15.683-21.602 38.591-37.621 65.2-44.495z" fill="#CA6F30"/>
        <path d="M444 104.396v62.884c-28.361-5.316-57.568-8.245-87.4-8.58 1.1-23.7 9.1-45.5 22.2-63.4a360.658 360.658 0 0 1 65.2 9.096z" fill="#ACB1B3"/>
        <path d="M444 167.275v63.388a362.782 362.782 0 0 1-87.4-70.263c.1-.6.1-1.1.1-1.7 29.786.335 58.961 3.262 87.3 8.575z" fill="#0A723B"/>
        <path d="M444 26.71V0H272.128a349.47 349.47 0 0 0 2.972 11.7c36.3 12.3 75.3 18.9 115.7 18.9a364.24 364.24 0 0 0 53.2-3.89z" fill="#FFDAA3"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H444V440H0z"/>
        </clipPath>
      </defs>
    </svg>
  </span>
</div>
<div height={295} width={307} style={{ position: 'absolute', bottom: '0px', right: '0px', height: '295px', width: '307px', zIndex: 1, boxSizing: 'border-box' }}>
  <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '295px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px' }}>
    <svg width="100%" height="100%" viewBox="0 0 295 307" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M391.981 282.923L406 261.534l-22.174-137.698c-5.223.184-44.347 93.268-44.347 93.268l2.107-24.327c.55-6.518-3.115-12.852-9.163-15.33-.091 0-.091 0-.183-.092-4.581-2.02-9.163-2.479-13.652-1.285l-1.1.275c-6.689 2.02-11.637 7.803-13.011 14.688L297.33 226.1c-1.741 2.846-8.155 12.484-36.009 25.244-27.855 12.76-25.564 31.487-25.564 31.487v9.456h150.451l5.773-9.364zm-357.896 3.121s-23.09-28.641-21.99-51.774c.275-6.151 4.306-11.658 10.17-13.403 7.514-2.295 18.6 1.194 28.588 30.661v-61.872c0-3.672.733-7.252 2.29-10.557 3.116-6.426 8.43-10.006 15.394-11.199 2.2-.368 4.49-.459 6.689 0 10.262 1.927 13.927 11.842 14.569 25.336a55.984 55.984 0 0 1 4.58-5.508c3.94-3.947 9.622-5.967 15.119-5.049 6.323 1.01 9.988 5.141 12.737 10.649 3.573 7.16 7.055 14.412 11.086 21.389-.274-1.377-.549-2.846-.824-4.223-.733-3.764-1.558-7.436-2.291-11.199-1.099-5.325-2.107-10.557-3.207-15.881-1.191-6.059-2.474-12.026-3.665-18.085-1.191-5.967-2.474-12.025-3.665-17.992-1.1-5.233-2.107-10.374-3.207-15.606-.733-3.58-1.466-7.252-2.199-10.832a33.919 33.919 0 0 0-.641-2.938c-1.192-5.141-.825-10.648.733-15.697.183-.643.366-1.194.641-1.836.733-1.928 1.741-3.856 3.024-5.416 2.107-2.57 5.406-4.04 8.796-4.223 5.772-.276 12.461 2.937 14.477 8.72l42.24 125.306s7.239-5.508 12.92-44.431c0 0 1.924-22.582 20.616-20.471 18.692 2.111 18.783 77.478 6.23 101.713-4.581 8.904-8.979 17.625-13.011 23.225v7.803H34.544l-.459-6.61z" fill="#FF5C5C"/><path d="M386.209 292.47H0v26.622h386.209V292.47z" fill="#4EB2FE"/><path d="M386.209 292.47H0v2.203h386.209v-2.203z" fill="#54CBFE"/><path d="M13.286 292.47v-5.967l74.95-1.56v7.527" fill="#8931FA"/><path d="M13.286 292.47v-2.203l74.95-.551v2.754" fill="#5A20A3"/><path d="M97.583 292.47v-6.793l75.318-1.744.733 8.537" fill="#8931FA"/><path d="M97.583 292.47l.092-2.387 75.684-.367.275 2.754" fill="#5A20A3"/><path d="M180.872 292.47v-8.537h73.485l1.008 8.537" fill="#8931FA"/><path d="M180.872 292.47v-2.662l74.035-.092.458 2.754" fill="#5A20A3"/><path d="M260.496 292.47v-8.537h74.401l1.283 8.537" fill="#8931FA"/><path d="M260.496 292.47v-2.754l75.043-1.469.641 4.223" fill="#5A20A3"/><path d="M231.542 196.357l-1.741-1.193c-4.032-2.662-6.414-7.069-6.506-11.934l-.366-20.012s7.147 7.619 8.613 33.139z" fill="#fff" stroke="#2E2E2E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M224.303 188.279h6.506m-77.242 59.394s7.239-19.186 29.962-23.134m-61.573-93.175s8.43-7.803 17.134-6.61m-5.589 61.781s8.155-11.383 24.464-9.088" stroke="#2E2E2E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.085 286.044c-.366-4.314-1.19-11.199 2.29-14.228 2.475-2.112 5.498-2.479 8.614-2.295 5.04.275 10.537 2.019 14.202 5.507 3.024 2.938 5.131 6.794 7.147 10.466" fill="#fff"/><path d="M34.085 286.044c-.366-4.314-1.19-11.199 2.29-14.228 2.475-2.112 5.498-2.479 8.614-2.295 5.04.275 10.537 2.019 14.202 5.507 3.024 2.938 5.131 6.794 7.147 10.466" stroke="#2E2E2E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M72.202 273.56h-1.1c-7.788-.459-13.927-7.069-14.385-14.872l-.916-16.891c-.367-6.425 4.765-11.75 11.087-11.75h10.354c6.414 0 11.453 5.416 11.087 11.75l-.825 14.596c-.55 10.465-7.147 17.167-15.302 17.167zm40.225 1.468c-1.833-5.232-1.558-12.117 1.649-16.431 3.39-4.59 9.621-6.426 15.027-7.161 5.772-.826 11.087 1.194 14.477 5.967 2.84 3.947 4.581 9.272 5.314 14.045.367 2.204.367 4.682-.091 6.885-.275 1.01-1.741 5.967-3.116 5.967l-25.839.826c-2.29 0-5.497-6.15-6.414-7.711a18.522 18.522 0 0 1-1.007-2.387z" fill="#fff" stroke="#2E2E2E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.801 241.614s16.035 3.396 32.436 0m23.09 25.061s19.333-1.561 29.87-11.842m-7.971-40.208s21.807 47.735 15.943 58.935m-59.466-80.324s9.53 72.337-9.621 77.937m12.003-53.06s15.21 50.49 19.242 54.253m163.188-17.717s12.461-2.111 21.257 7.069" stroke="#2E2E2E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M278.821 283.933c-6.688-24.235 15.76-22.215 15.76-22.215s1.558 0 1.65 1.468c.183 2.02 1.007 8.171 3.848 10.374 0 0-.092 6.701-2.199 10.465h-19.059v-.092z" fill="#fff" stroke="#2E2E2E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M285.235 263.278s2.474 12.485-1.649 20.747" stroke="#2E2E2E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M118.84 78.212l-9.346-26.346m15.852 25.061l.825-10.924m5.681 12.393l12.919-24.786m-35.46 35.985l-26.755-7.894m29.596 1.836l-9.713-8.17" stroke="#fff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0H406V319H0z"/></clipPath></defs></svg>
  </span>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div >

            
        </>



    );
};
export default SearchBox;