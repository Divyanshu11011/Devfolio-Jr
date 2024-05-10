import React, {useState ,useEffect} from "react";
import SearchBox from "../SearchBar/SearchBox";

export default function Builders () {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setIsSearchOpen(true); // Open the search box
    };

    const handleCloseSearch = () => {
        setIsSearchOpen(false); // Close the search box
    };

    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'k') {
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
                        boxSizing: 'border-box'
                    }}>
                       <div style={{
                            display: 'flex',
                            gap: '600px',
                            alignItems: 'center',
                            boxSizing: 'border-box'
                        }}>
              <div style={{ position: "relative" }}>
                                <button onClick={handleSearchClick} style={{
                                    cursor: "pointer",
                                    textAlign: "left",
                                    display: "flex",
                                    borderRadius: "6px",
                                    padding: "16px",
                                    width: "230%",
                                    border: "0.8px solid rgb(208, 217, 218)",
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
                            



                <div style={{borderRadius: '8px', display: 'flex', gap: '4px', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', padding: '4px', boxSizing: 'border-box'}}><kbd data-testid="kbd" color="grey-8" style={{backgroundColor: 'rgb(228, 234, 235)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(39, 51, 57)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700}}>Ctrl</kbd>
                  <p style={{fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(180, 190, 192)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>+</p><kbd data-testid="kbd" color="grey-8" style={{backgroundColor: 'rgb(228, 234, 235)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(39, 51, 57)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700}}>k</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{gridColumn: '1 / -1', boxSizing: 'border-box'}}>
          <div direction="row" height="276px" style={{display: 'flex', flexDirection: 'row', gap: '24px', height: '276px', boxSizing: 'border-box'}}>
            <div style={{flex: '1 1 0%', boxSizing: 'border-box'}}><button elevation="blue-4" style={{width: '100%', height: '276px', display: 'flex', WebkitBoxPack: 'justify', justifyContent: 'space-between', flexDirection: 'column', overflow: 'hidden', border: '0px none rgb(0, 0, 0)', zIndex: 1, cursor: 'pointer', textAlign: 'left', boxSizing: 'border-box', position: 'relative', padding: '32px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.1) 0px 9px 18px 0px, rgba(3, 0, 92, 0.03) 0px 1px 7px 0px', appearance: 'button', textTransform: 'none', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}>
                <p style={{fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat, sans-serif', margin: '0px 0px 24px', textTransform: 'uppercase', boxSizing: 'border-box'}}></p><span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '276px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px'}}><img sizes="100vw" srcSet="https://assets.devfolio.co/content/a1f504bee74b4f19be305d409aa4fc16/b849d76b-547e-467a-9ddb-8c8ea077c07c.png" src="/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fcontent%2Fa1f504bee74b4f19be305d409aa4fc16%2F0d09868b-0b6d-4032-a4cd-dd3b078ef8fd.png&w=1440&q=75" decoding="async" data-nimg="fill" style={{zIndex: -1, position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '276px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: '50% 0%', borderStyle: 'none'}} /></span>
                <p style={{fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Hey,</p>
              </button></div>
            <div style={{flex: '1 1 0%', boxSizing: 'border-box'}}><button elevation="blue-4" style={{transform: 'none', width: '100%', height: '276px', display: 'flex', WebkitBoxPack: 'justify', justifyContent: 'space-between', flexDirection: 'column', overflow: 'hidden', border: '0px none rgb(0, 0, 0)', zIndex: 1, cursor: 'pointer', textAlign: 'left', boxSizing: 'border-box', position: 'relative', padding: '32px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.1) 0px 9px 18px 0px, rgba(3, 0, 92, 0.03) 0px 1px 7px 0px', appearance: 'button', textTransform: 'none', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}>
                <p style={{fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat, sans-serif', margin: '0px 0px 24px', textTransform: 'uppercase', boxSizing: 'border-box'}}></p><span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '276px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px'}}><img sizes="100vw" srcSet="https://assets.devfolio.co/content/a1f504bee74b4f19be305d409aa4fc16/b849d76b-547e-467a-9ddb-8c8ea077c07c.png" src="/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fcontent%2Fa1f504bee74b4f19be305d409aa4fc16%2F62cdc7c4-881c-456d-a079-c6677f3d6ada.png&w=1440&q=75" decoding="async" data-nimg="fill" style={{zIndex: -1, position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '276px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: '50% 0%', borderStyle: 'none'}} /></span>
                <p style={{fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Let's Spice Things Up And</p>
              </button></div>
            <div style={{flex: '1 1 0%', boxSizing: 'border-box'}}><button elevation="blue-4" style={{transform: 'none', width: '100%', height: '276px', display: 'flex', WebkitBoxPack: 'justify', justifyContent: 'space-between', flexDirection: 'column', overflow: 'hidden', border: '0px none rgb(0, 0, 0)', zIndex: 1, cursor: 'pointer', textAlign: 'left', boxSizing: 'border-box', position: 'relative', padding: '32px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.1) 0px 9px 18px 0px, rgba(3, 0, 92, 0.03) 0px 1px 7px 0px', appearance: 'button', textTransform: 'none', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}>
                <p style={{fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat, sans-serif', margin: '0px 0px 24px', textTransform: 'uppercase', boxSizing: 'border-box'}}></p><span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '276px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px'}}><img sizes="100vw" srcSet="https://assets.devfolio.co/content/a1f504bee74b4f19be305d409aa4fc16/b849d76b-547e-467a-9ddb-8c8ea077c07c.png" src="/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fcontent%2Fa1f504bee74b4f19be305d409aa4fc16%2Fb849d76b-547e-467a-9ddb-8c8ea077c07c.png&w=1440&q=75" decoding="async" data-nimg="fill" style={{zIndex: -1, position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '276px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: '50% 0%', borderStyle: 'none'}} /></span>
                <p style={{fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Give Divyanshu A Chance</p>
              </button></div>
            <div style={{flex: '1 1 0%', boxSizing: 'border-box'}}><button elevation="blue-4" style={{transform: 'none', width: '100%', height: '276px', display: 'flex', WebkitBoxPack: 'justify', justifyContent: 'space-between', flexDirection: 'column', overflow: 'hidden', border: '0px none rgb(0, 0, 0)', zIndex: 1, cursor: 'pointer', textAlign: 'left', boxSizing: 'border-box', position: 'relative', padding: '32px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', backgroundImage: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.1) 0px 9px 18px 0px, rgba(3, 0, 92, 0.03) 0px 1px 7px 0px', appearance: 'button', textTransform: 'none', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}>
                <p style={{fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat, sans-serif', margin: '0px 0px 24px', textTransform: 'uppercase', boxSizing: 'border-box'}}> </p><span style={{boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: '276px', background: 'none', opacity: 1, border: '0px none rgb(0, 0, 0)', margin: '0px', padding: '0px', position: 'absolute', inset: '0px'}}><img sizes="100vw" srcSet="https://assets.devfolio.co/content/a1f504bee74b4f19be305d409aa4fc16/b849d76b-547e-467a-9ddb-8c8ea077c07c.png" src="/_next/image?url=%2Fnominate-builder.jpg&w=1440&q=75" decoding="async" data-nimg="fill" style={{zIndex: -1, position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: '0px none rgb(0, 0, 0)', margin: 'auto', display: 'block', width: '0px', height: '276px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: '50% 0%', borderStyle: 'none'}} /></span>
                <p style={{fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>For Building DevFolio Jr👶🏻</p>
              </button></div>
          </div>
        </div>
        <div style={{gridColumn: '1 / -1', boxSizing: 'border-box'}}>
          <div direction="column" style={{display: 'flex', flexDirection: 'column', gap: '24px', boxSizing: 'border-box'}}>
            <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
              <div wrap="wrap" style={{gap: '16px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '32px', borderStyle: 'solid', borderWidth: '1.6px', backgroundColor: 'rgb(245, 247, 247)', borderColor: 'rgb(228, 234, 235)', borderRadius: '16px', boxSizing: 'border-box'}}>
                <p style={{fontSize: '20px', lineHeight: '32px', fontWeight: 400, fontFamily: '"Nunito Sans", sans-serif', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>Sort builders by</p>
                <div style={{boxSizing: 'border-box'}}>
                  <div wrap="wrap" style={{display: 'flex', gap: '16px', flexWrap: 'wrap', boxSizing: 'border-box'}}><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-id-1675749741-46" data-state="closed" style={{padding: '10px 16px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', border: '1.6px solid rgba(0, 0, 0, 0)', fontSize: '20px', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600, borderRadius: '6px', cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px', color: 'rgb(55, 112, 255)', appearance: 'none', boxSizing: 'border-box', textDecoration: 'none solid rgb(55, 112, 255)', userSelect: 'none', textTransform: 'none', overflow: 'visible', lineHeight: '23px', margin: '0px'}}>Most hackathons attended</button></div>
                </div>
              </div>
            </div>
            <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
              <div style={{display: 'flex', WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', gap: '24px', boxSizing: 'border-box'}}>
                <div style={{boxSizing: 'border-box'}}><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-id-1675749741-47" data-state="closed" style={{appearance: 'none', boxSizing: 'border-box', textDecoration: 'none solid rgb(0, 0, 0)', userSelect: 'none', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '4px', border: '0px none rgb(0, 0, 0)', backgroundColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}><span style={{fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', color: 'rgb(55, 112, 255)', fontWeight: 600, margin: '0px', boxSizing: 'border-box'}}>Sort by</span>
                    <div name="chevron-down" color="blue-4" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{height: '20px', width: '20px', color: 'rgb(55, 112, 255)', boxSizing: 'border-box'}}>
                        <path d="M6 9l6 6 6-6" style={{boxSizing: 'border-box'}} />
                      </svg></div>
                  </button></div>
              </div>
            </div>
            <div direction="column" style={{gap: '16px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
              <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', position: 'relative', boxSizing: 'border-box'}}>
                <div display="[object Object]" style={{display: 'flex', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', transform: 'matrix(1, 0, 0, 1, -56, -30)', backgroundColor: 'rgb(228, 234, 235)', left: '0px', padding: '16px', position: 'absolute', top: '56px', boxSizing: 'border-box'}}><span style={{lineHeight: '24px', color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, margin: '0px', boxSizing: 'border-box'}}>#</span><span style={{fontSize: '24px', lineHeight: '28px', fontWeight: 800, color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>1</span></div><a width="100%" href="@Kushsah12" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                  <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                    <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                          <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/275e29f590544b5d8083a54737dc03f9/avatar-dbff4e3f-c2ba-47b3-9bce-df22fd041769.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                            <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>kush</p>
                            <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>sah</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>128</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>128</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>6</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>6</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                    <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/275e29f590544b5d8083a54737dc03f9/avatar-dbff4e3f-c2ba-47b3-9bce-df22fd041769.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                            <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>kush</p>
                            <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>sah</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>128</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>128</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>6</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>6</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', position: 'relative', boxSizing: 'border-box'}}>
                <div display="[object Object]" style={{display: 'flex', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', transform: 'matrix(1, 0, 0, 1, -56, -30)', backgroundColor: 'rgb(228, 234, 235)', left: '0px', padding: '16px', position: 'absolute', top: '56px', boxSizing: 'border-box'}}><span style={{lineHeight: '24px', color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, margin: '0px', boxSizing: 'border-box'}}>#</span><span style={{fontSize: '24px', lineHeight: '28px', fontWeight: 800, color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>2</span></div><a width="100%" href="@holy_script" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                  <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                    <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                          <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/1f493d8653fa4b5e816a13b4a582485e/avatar-3acb2d36-42f0-4cac-8422-4e8c3113e394.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                            <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Palash</p>
                            <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Johri</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>79</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>79</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>2</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>2</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                    <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/1f493d8653fa4b5e816a13b4a582485e/avatar-3acb2d36-42f0-4cac-8422-4e8c3113e394.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                            <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Palash</p>
                            <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Johri</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>79</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>79</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>2</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>2</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', position: 'relative', boxSizing: 'border-box'}}>
                <div display="[object Object]" style={{display: 'flex', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', transform: 'matrix(1, 0, 0, 1, -56, -30)', backgroundColor: 'rgb(228, 234, 235)', left: '0px', padding: '16px', position: 'absolute', top: '56px', boxSizing: 'border-box'}}><span style={{lineHeight: '24px', color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, margin: '0px', boxSizing: 'border-box'}}>#</span><span style={{fontSize: '24px', lineHeight: '28px', fontWeight: 800, color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>3</span></div><a width="100%" href="@coderjaskirat" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                  <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                    <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                          <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/648e3e28b6fa4886bdbfb836fd46bbb9/avatar-f6badcb5-5382-4d22-a96e-1ea01fd20ea4.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                            <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Jaskirat</p>
                            <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Singh</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>78</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>78</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>1</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prize</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                    <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/648e3e28b6fa4886bdbfb836fd46bbb9/avatar-f6badcb5-5382-4d22-a96e-1ea01fd20ea4.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                            <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Jaskirat</p>
                            <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Singh</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>78</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>78</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>1</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prize</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', position: 'relative', boxSizing: 'border-box'}}>
                <div display="[object Object]" style={{display: 'flex', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', transform: 'matrix(1, 0, 0, 1, -56, -30)', backgroundColor: 'rgb(228, 234, 235)', left: '0px', padding: '16px', position: 'absolute', top: '56px', boxSizing: 'border-box'}}><span style={{lineHeight: '24px', color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, margin: '0px', boxSizing: 'border-box'}}>#</span><span style={{fontSize: '24px', lineHeight: '28px', fontWeight: 800, color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>4</span></div><a width="100%" href="@anuj_goyal0809" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                  <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                    <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                          <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@3x.png" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                            <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>ANUJ</p>
                            <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>GOYAL</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>74</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>74</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>11</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>11</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                    <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@2x.png" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                            <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>ANUJ</p>
                            <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>GOYAL</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>74</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>74</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>11</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>11</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>0</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxAlign: 'center', alignItems: 'center', position: 'relative', boxSizing: 'border-box'}}>
                <div display="[object Object]" style={{display: 'flex', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', transform: 'matrix(1, 0, 0, 1, -56, -30)', backgroundColor: 'rgb(228, 234, 235)', left: '0px', padding: '16px', position: 'absolute', top: '56px', boxSizing: 'border-box'}}><span style={{lineHeight: '24px', color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, margin: '0px', boxSizing: 'border-box'}}>#</span><span style={{fontSize: '24px', lineHeight: '28px', fontWeight: 800, color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>5</span></div><a width="100%" href="@amanraj95vs" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                  <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                    <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                          <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/22aa370d599d4a0e90b93ab6d02e0138/avatar-79158510-6bd3-4ed7-a1b6-c7f9f9617f78.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                            <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>AMAN</p>
                            <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>RAJ</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>72</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>72</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>12</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>12</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>1</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prize</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                    <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/22aa370d599d4a0e90b93ab6d02e0138/avatar-79158510-6bd3-4ed7-a1b6-c7f9f9617f78.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                          <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                            <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>AMAN</p>
                            <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>RAJ</p>
                          </div>
                        </div>
                        <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(206, 206, 206)', boxSizing: 'border-box'}}>
                                <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                    <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>72</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>hackathons</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="hackathon-fill" color="splash-mobster" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(127, 119, 137)', boxSizing: 'border-box'}}>
                                  <path d="M4 3.523C4 2.682 4.682 2 5.523 2h12.954C19.318 2 20 2.682 20 3.523V7A8 8 0 114 7V3.523zM4 20.429A3.429 3.429 0 017.429 17h9.142A3.429 3.429 0 0120 20.429C20 21.849 18.849 22 17.429 22H6.57C5.151 22 4 21.849 4 20.429z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>72</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                                <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                    <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>12</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>12</p>
                            </div>
                          </div>
                          <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                            <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                              <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                                <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                    <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  </svg></div>
                              </div>
                              <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                                <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>1</p>
                                <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prize</p>
                              </div>
                            </div>
                          </div>
                          <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                            <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div style={{display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', marginTop: '4px', boxSizing: 'border-box'}}>
              <div spacing={8} style={{padding: '8px', borderRadius: '26px', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px', gap: '8px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}><button aria-label="Previous" disabled style={{cursor: 'default', backgroundColor: 'rgb(128, 151, 242)', borderColor: 'rgba(0, 0, 0, 0)', display: 'flex', padding: '8px 12px', borderRadius: '18px', border: '1.6px solid rgba(0, 0, 0, 0)', userSelect: 'none', outline: 'rgba(16, 16, 16, 0.3) none 0px', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}>
                  <div name="chevron-left" color="white" style={{display: 'block', height: '16px', width: '16px', boxSizing: 'border-box'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{height: '16px', width: '16px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                      <path d="M15 18l-6-6 6-6" style={{boxSizing: 'border-box'}} />
                    </svg></div>
                </button><button aria-label="Page 1" aria-current="true" data-current="true" style={{backgroundColor: 'rgb(20, 59, 226)', display: 'flex', padding: '8px 12px', borderRadius: '18px', border: '1.6px solid rgba(0, 0, 0, 0)', userSelect: 'none', cursor: 'pointer', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}><span style={{whiteSpace: 'nowrap', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>1 - 5</span></button><button aria-label="Next" style={{display: 'flex', padding: '8px 12px', backgroundColor: 'rgb(55, 112, 255)', borderRadius: '18px', border: '1.6px solid rgba(0, 0, 0, 0)', userSelect: 'none', cursor: 'pointer', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}><span style={{whiteSpace: 'nowrap', fontSize: '14px', lineHeight: '16px', letterSpacing: '1.68px', fontWeight: 800, color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>6 - 10</span>
                  <div name="chevron-right" color="white" style={{marginLeft: '8px', display: 'block', height: '16px', width: '16px', boxSizing: 'border-box'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{height: '16px', width: '16px', color: 'rgb(255, 255, 255)', boxSizing: 'border-box'}}>
                      <path d="M9 18l6-6-6-6" style={{boxSizing: 'border-box'}} />
                    </svg></div>
                </button></div>
            </div>
          </div>
        </div>
        <div style={{gridColumn: '1 / 7', boxSizing: 'border-box'}}>
          <div elevation="blue-3" style={{paddingTop: '80px', boxSizing: 'border-box', position: 'relative', height: '944px', borderRadius: '16px', backgroundColor: 'rgb(179, 206, 255)', backgroundImage: 'url("https://devfolio.co/most-hackathons-art.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.09) 0px 1px 5px 0px, rgba(3, 0, 92, 0.12) 0px 6px 16px 0px'}}>
            <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
              <p style={{fontSize: '48px', lineHeight: '64px', letterSpacing: '-0.48px', fontWeight: 900, color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Most hackathons won</p>
              <p style={{color: 'rgb(255, 255, 255)', fontSize: '20px', lineHeight: '32px', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Builders who have won most number of hackathons on Devfolio</p>
            </div>
            <div display="[object Object]" style={{display: 'flex', marginTop: '80px', gap: '16px', flexDirection: 'column', boxSizing: 'border-box'}}><a width="100%" href="@anuditnagar" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/87070f0e99474678bd57217fd4a4e456/avatar.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Anudit</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Nagar</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/87070f0e99474678bd57217fd4a4e456/avatar.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Anudit</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Nagar</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@Arch0125" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/dc6ce3ef04c441d887ec665dda2e0a75/avatar-29e08c23-e847-43d7-94fe-9bc9ab591360.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Archisman</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Das</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/dc6ce3ef04c441d887ec665dda2e0a75/avatar-29e08c23-e847-43d7-94fe-9bc9ab591360.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Archisman</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Das</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@karanpargal" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@3x.png" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Karan</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Pargal</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@2x.png" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Karan</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Pargal</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@nishtha08_01" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/2e30a11f3bf9495eb99be57e001722cb/avatar-39b289ef-9fc9-49eb-819d-18f81d831ebb.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Nishtha</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Goyal</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/2e30a11f3bf9495eb99be57e001722cb/avatar-39b289ef-9fc9-49eb-819d-18f81d831ebb.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Nishtha</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Goyal</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@shlokm289" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/9fdc1a2381f04554b94f7e3401d5f066/avatar-2bb6e2d1-344c-461e-a081-ce68b91501a4.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Shlok</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Mange</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/9fdc1a2381f04554b94f7e3401d5f066/avatar-2bb6e2d1-344c-461e-a081-ce68b91501a4.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Shlok</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Mange</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
            <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
              <p style={{fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(255, 255, 255)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Most hackathons won</p>
              <p style={{marginTop: '8px', color: 'rgb(255, 255, 255)', fontSize: '18px', lineHeight: '28px', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 400, boxSizing: 'border-box'}}>Builders who have won most number of hackathons on Devfolio</p>
            </div>
            <div display="[object Object]" style={{gap: '8px', flexDirection: 'column', display: 'none', marginTop: '30px', boxSizing: 'border-box'}}><a width="100%" href="@anuditnagar" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/87070f0e99474678bd57217fd4a4e456/avatar.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Anudit</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Nagar</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/87070f0e99474678bd57217fd4a4e456/avatar.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Anudit</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Nagar</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@Arch0125" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/dc6ce3ef04c441d887ec665dda2e0a75/avatar-29e08c23-e847-43d7-94fe-9bc9ab591360.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Archisman</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Das</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/dc6ce3ef04c441d887ec665dda2e0a75/avatar-29e08c23-e847-43d7-94fe-9bc9ab591360.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Archisman</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Das</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@karanpargal" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@3x.png" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Karan</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Pargal</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@2x.png" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Karan</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Pargal</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@nishtha08_01" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/2e30a11f3bf9495eb99be57e001722cb/avatar-39b289ef-9fc9-49eb-819d-18f81d831ebb.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Nishtha</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Goyal</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/2e30a11f3bf9495eb99be57e001722cb/avatar-39b289ef-9fc9-49eb-819d-18f81d831ebb.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Nishtha</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Goyal</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@shlokm289" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/9fdc1a2381f04554b94f7e3401d5f066/avatar-2bb6e2d1-344c-461e-a081-ce68b91501a4.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Shlok</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Mange</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/9fdc1a2381f04554b94f7e3401d5f066/avatar-2bb6e2d1-344c-461e-a081-ce68b91501a4.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Shlok</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Mange</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(233, 219, 185)', boxSizing: 'border-box'}}>
                              <div name="prize-fill" color="gold-3" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                  <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>prizes</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="prize-fill" color="gold-3" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(201, 158, 84)', boxSizing: 'border-box'}}>
                                <path d="M17.528 1H6.472c-1.515 0-2.9 1.856-3.578 3.211l-1.17 2.34a2 2 0 00.543 2.459l2.337 1.86C5.636 9.386 7.28 8.15 9 7.5L6.686 4.581A1 1 0 118.314 3.42L9.444 5h5.113l1.13-1.581a1 1 0 111.627 1.162L15 7.5c1.72.649 3.364 1.885 4.396 3.37l2.337-1.86a2 2 0 00.542-2.46l-1.17-2.339C20.429 2.856 19.044 1 17.529 1z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 16a7 7 0 11-14 0 7 7 0 0114 0z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>8</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
          </div>
        </div>
        <div style={{gridColumn: '7 / 13', boxSizing: 'border-box'}}>
          <div elevation="blue-3" style={{paddingTop: '80px', boxSizing: 'border-box', position: 'relative', height: '944px', borderRadius: '16px', backgroundColor: 'rgb(179, 206, 255)', backgroundImage: 'url("https://devfolio.co/most-projects-art.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'rgba(3, 0, 92, 0.09) 0px 1px 5px 0px, rgba(3, 0, 92, 0.12) 0px 6px 16px 0px'}}>
            <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
              <p style={{fontSize: '48px', lineHeight: '64px', letterSpacing: '-0.48px', fontWeight: 900, color: 'rgb(80, 64, 9)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Most projects built</p>
              <p style={{color: 'rgb(80, 64, 9)', fontSize: '20px', lineHeight: '32px', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Builders who have built and submitted most number of projects on Devfolio</p>
            </div>
            <div display="[object Object]" style={{display: 'flex', marginTop: '80px', gap: '16px', flexDirection: 'column', boxSizing: 'border-box'}}><a width="100%" href="@Kushsah12" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/275e29f590544b5d8083a54737dc03f9/avatar-dbff4e3f-c2ba-47b3-9bce-df22fd041769.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>kush</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>sah</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/275e29f590544b5d8083a54737dc03f9/avatar-dbff4e3f-c2ba-47b3-9bce-df22fd041769.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>kush</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>sah</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@SusieCronin1" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@3x.png" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Susie</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Cronin1</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>26</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>26</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@2x.png" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Susie</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Cronin1</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>26</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>26</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@datavare" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@3x.png" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Datavare</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Software</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@2x.png" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Datavare</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Software</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@WayneBennettes" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@3x.png" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Wayne</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Bennettes</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@2x.png" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Wayne</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Bennettes</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@HackDharmendra" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '112px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/bc7b3b972943434e9c3cf2a2f92a7816/avatar-d80c62f5-19e0-4dd4-a1ec-be74c6ebbedb.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Dharmendra</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Solanki</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>23</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/bc7b3b972943434e9c3cf2a2f92a7816/avatar-d80c62f5-19e0-4dd4-a1ec-be74c6ebbedb.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Dharmendra</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Solanki</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>23</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
            <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
              <p style={{fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.18px', fontWeight: 900, color: 'rgb(80, 64, 9)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Most projects built</p>
              <p style={{marginTop: '8px', color: 'rgb(80, 64, 9)', fontSize: '18px', lineHeight: '28px', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 400, boxSizing: 'border-box'}}>Builders who have built and submitted most number of projects on Devfolio</p>
            </div>
            <div display="[object Object]" style={{gap: '8px', flexDirection: 'column', display: 'none', marginTop: '30px', boxSizing: 'border-box'}}><a width="100%" href="@Kushsah12" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/275e29f590544b5d8083a54737dc03f9/avatar-dbff4e3f-c2ba-47b3-9bce-df22fd041769.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>kush</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>sah</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/275e29f590544b5d8083a54737dc03f9/avatar-dbff4e3f-c2ba-47b3-9bce-df22fd041769.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>kush</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>sah</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>32</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@SusieCronin1" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@3x.png" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Susie</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Cronin1</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>26</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>26</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@2x.png" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Susie</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Cronin1</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>26</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>26</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@datavare" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@3x.png" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Datavare</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Software</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@2x.png" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Datavare</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Software</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@WayneBennettes" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@3x.png" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Wayne</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Bennettes</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@2x.png" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Wayne</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Bennettes</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a><a width="100%" href="@HackDharmendra" direction="column" style={{display: 'flex', flexDirection: 'column', width: '100%', textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <div display="[object Object]" style={{display: 'block', boxSizing: 'border-box'}}>
                  <div style={{padding: '16px 24px', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(3, 0, 92, 0.12) 0px 1px 3px 0px, rgba(3, 0, 92, 0.07) 0px 4px 11px 0px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div width="250px" direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', width: '250px', boxSizing: 'border-box'}}>
                        <div style={{minWidth: '64px', outline: 'rgb(0, 0, 238) none 0px', width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/bc7b3b972943434e9c3cf2a2f92a7816/avatar-d80c62f5-19e0-4dd4-a1ec-be74c6ebbedb.jpeg" alt="" style={{width: '64px', height: '64px', maxWidth: '64px', maxHeight: '64px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div direction="column" overflow="hidden" style={{display: 'flex', flexDirection: 'column', overflow: 'hidden', boxSizing: 'border-box'}}>
                          <p style={{maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Dharmendra</p>
                          <p style={{lineHeight: '26px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Solanki</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', minWidth: '50%', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>23</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="[object Object]" style={{display: 'none', flex: '1 1 0%', maxWidth: '320px', padding: '12px 0px', boxSizing: 'border-box'}}>
                  <div style={{width: '100%', padding: '0px', boxShadow: 'none', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '100%', borderRadius: '16px'}}>
                    <div direction="row" style={{display: 'flex', flexDirection: 'row', WebkitBoxPack: 'justify', justifyContent: 'space-between', boxSizing: 'border-box'}}>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '8px', WebkitBoxFlex: 1, flexGrow: 1, WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div style={{outline: 'rgb(0, 0, 238) none 0px', width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/users/bc7b3b972943434e9c3cf2a2f92a7816/avatar-d80c62f5-19e0-4dd4-a1ec-be74c6ebbedb.jpeg" alt="" style={{width: '48px', height: '48px', maxWidth: '48px', maxHeight: '48px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                        <div width="80px" direction="column" style={{display: 'flex', flexDirection: 'column', width: '80px', boxSizing: 'border-box'}}>
                          <p style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: '18px', lineHeight: '24px', fontWeight: 700, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}}>Dharmendra</p>
                          <p style={{lineHeight: '22px', color: 'rgb(92, 104, 109)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '14px', fontWeight: 400, margin: '0px', boxSizing: 'border-box'}}>Solanki</p>
                        </div>
                      </div>
                      <div direction="row" style={{display: 'flex', flexDirection: 'row', gap: '16px', WebkitBoxFlex: 7, flexGrow: 7, WebkitBoxPack: 'end', justifyContent: 'flex-end', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box'}}>
                        <div width="100%" display="[object Object]" style={{display: 'flex', width: '100%', boxSizing: 'border-box'}}>
                          <div spacing={24} style={{width: '100%', padding: '8px', gap: '24px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', borderRadius: '16px', paddingRight: '8px', boxSizing: 'border-box'}}>
                            <div style={{padding: '20px', borderRadius: '12px', display: 'flex', flexShrink: 0, backgroundColor: 'rgb(255, 232, 196)', boxSizing: 'border-box'}}>
                              <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                  <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                                </svg></div>
                            </div>
                            <div direction="column" style={{display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
                              <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '24px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.12px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>23</p>
                              <p style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '1.44px', fontWeight: 700, color: 'rgb(142, 152, 156)', fontFamily: 'Montserrat, sans-serif', margin: '0px', textTransform: 'uppercase', boxSizing: 'border-box'}}>projects</p>
                            </div>
                          </div>
                        </div>
                        <div display="[object Object]" style={{display: 'none', boxSizing: 'border-box'}}>
                          <div style={{display: 'flex', gap: '12px', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', borderRadius: '8px', borderWidth: '0.8px', padding: '12px 16px', borderColor: 'rgb(228, 234, 235)', borderStyle: 'solid', boxSizing: 'border-box'}}>
                            <div name="project-fill" color="splash-di-sierra" style={{display: 'block', height: '20px', width: '20px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '20px', width: '20px', color: 'rgb(224, 165, 107)', boxSizing: 'border-box'}}>
                                <path d="M2 9a2 2 0 012-2h6a2 2 0 002-2 2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V9z" fill="currentColor" style={{boxSizing: 'border-box'}} />
                              </svg></div>
                            <p style={{whiteSpace: 'nowrap', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '28px', fontWeight: 700, letterSpacing: '-0.1px', color: 'rgb(39, 51, 57)', margin: '0px', boxSizing: 'border-box'}}>23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a></div>
          </div>
        </div>
      </div>
    
    );
    
}