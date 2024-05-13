import React from 'react';
import './header.css';
const Header = () => {
    

    
  return (
<header style={{boxSizing: 'border-box', position: 'relative', zIndex: 100, display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', padding: '16px 0px', width: '100%', margin: '0px auto', backgroundColor: 'rgb(255, 255, 255)'}}>
    <nav aria-label="navigation" style={{boxSizing: 'border-box', width: '100%'}}>
        <div style={{padding: '0px 132px', gridTemplateColumns: '76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px 76px', boxSizing: 'border-box', display: 'grid', width: '100%', columnGap: '24px', WebkitBoxPack: 'center', justifyContent: 'center'}}>
            <div style={{gridColumn: '1 / -1', boxSizing: 'border-box'}}>
                <div style={{boxSizing: 'border-box', width: '100%', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'justify', justifyContent: 'space-between'}}>
                    <div style={{boxSizing: 'border-box', display: 'flex', flex: '1 1 0px', WebkitBoxAlign: 'center', alignItems: 'center', width: '100%'}}>
                        <div style={{boxSizing: 'border-box', display: 'none', WebkitBoxFlex: 1, flexGrow: 1, flexBasis: '0px'}}><button type="button" aria-label="Open menu" style={{boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px', border: '0px none rgb(0, 0, 0)', outline: 'rgb(0, 0, 0) none 0px', padding: '0px', backgroundColor: 'rgb(255, 255, 255)', height: '32px', width: '32px', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', borderRadius: '50%', cursor: 'pointer'}}>
                                <div name="menu" color="grey-6" style={{boxSizing: 'border-box', display: 'block', height: '20px', width: '20px'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{boxSizing: 'border-box', height: '20px', width: '20px', color: 'rgb(142, 152, 156)'}}>
                                        <path d="M3 12h18M3 6h18M3 18h18" style={{boxSizing: 'border-box'}}></path>
                                    </svg></div>
                            </button></div>
                        <div style={{boxSizing: 'border-box', height: '24px'}}><a href="https://devfolio.co/discover" aria-label="Devfolio Home" style={{textDecoration: 'none solid rgb(0, 0, 238)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)', display: 'block'}}><span style={{boxSizing: 'border-box'}}><svg viewBox="0 0 619.1 129" xmlns="http://www.w3.org/2000/svg" height="24" style={{boxSizing: 'border-box', display: 'inline'}}>
                                        <g fill="#273339" style={{boxSizing: 'border-box'}}>
                                            <path d="m156 24h33.8a52.81 52.81 0 0 1 23.75 4.93 34.94 34.94 0 0 1 15.26 14.3 44.35 44.35 0 0 1 5.3 22.2 45 45 0 0 1 -5.25 22.34 34.63 34.63 0 0 1 -15.21 14.3 53.13 53.13 0 0 1 -23.84 4.93h-33.81zm31.67 65a24.59 24.59 0 0 0 18.08-6 24.41 24.41 0 0 0 6-18.08 24.18 24.18 0 0 0 -6-18.08 24.72 24.72 0 0 0 -18.08-5.84h-10.67v48z" style={{boxSizing: 'border-box'}}></path>
                                            <path d="m298 82h-36a12.66 12.66 0 0 0 4.34 8.09 14.45 14.45 0 0 0 9.09 2.45 28.89 28.89 0 0 0 16.26-5.27l5.31 13.63a34 34 0 0 1 -10.45 5 42.52 42.52 0 0 1 -12.17 1.82 38.07 38.07 0 0 1 -17.22-3.63 26 26 0 0 1 -11.18-10.45 31.3 31.3 0 0 1 -3.98-15.96 32.21 32.21 0 0 1 3.68-15.54 26.58 26.58 0 0 1 10.32-10.67 29.39 29.39 0 0 1 15-3.81 25.44 25.44 0 0 1 19.53 8 32.07 32.07 0 0 1 7.47 21.34zm-36-10h18.2q-.68-10.31-9.09-10.31t-9.11 10.31z" style={{boxSizing: 'border-box'}}></path>
                                            <path d="m345.58 49h20.55l-25.91 58h-17.34l-25.5-58h22l12.77 32.69z" style={{boxSizing: 'border-box'}}></path>
                                            <path d="m403 50h13v15h-14v42h-21v-42h-10v-15h10.71a23.35 23.35 0 0 1 8-17.86 38.06 38.06 0 0 1 22.29-6.83l7.22-.45 1.2 14.87-5.56.22a19.37 19.37 0 0 0 -9.2 2 6.74 6.74 0 0 0 -2.66 6.05z" style={{boxSizing: 'border-box'}}></path>
                                            <path d="m434.43 104a26.48 26.48 0 0 1 -11.13-10.49 31.3 31.3 0 0 1 -3.91-15.95 31 31 0 0 1 3.91-15.9 26.3 26.3 0 0 1 11.08-10.36 40.48 40.48 0 0 1 33.53 0 26.3 26.3 0 0 1 11.09 10.36 31 31 0 0 1 3.91 15.9 31.3 31.3 0 0 1 -3.91 15.95 26.58 26.58 0 0 1 -11.32 10.49 39.75 39.75 0 0 1 -33.43 0zm27.85-26.26q0-14.54-11.13-14.54t-11.15 14.54q0 14.54 11.13 14.54t11.14-14.54z" style={{boxSizing: 'border-box'}}></path>
                                            <path d="m492 107v-83h21v83z" style={{boxSizing: 'border-box'}}></path>
                                            <path d="m525 20h22v19h-22zm0 86.86v-57.86h21v58z" style={{boxSizing: 'border-box'}}></path>
                                            <path d="m570.62 104a26.48 26.48 0 0 1 -11.13-10.49 31.3 31.3 0 0 1 -3.91-15.95 31 31 0 0 1 3.91-15.9 26.3 26.3 0 0 1 11.08-10.36 40.48 40.48 0 0 1 33.53 0 26.3 26.3 0 0 1 11.08 10.36 31 31 0 0 1 3.91 15.9 31.3 31.3 0 0 1 -3.91 15.95 26.58 26.58 0 0 1 -11.18 10.49 39.75 39.75 0 0 1 -33.43 0zm27.85-26q0-14.54-11.13-14.54t-11.13 14.54q0 14.54 11.13 14.54t11.08-14.54z" style={{boxSizing: 'border-box'}}></path>
                                        </g>
                                        <g fill="#3770ff" style={{boxSizing: 'border-box'}}>
                                            <path d="m118 70.7c.26 29.53-21.71 54.87-50.95 58.2a16.34 16.34 0 0 1 -1.86.1c-5.82 0-37.28 0-48.9-.47a12.9 12.9 0 0 1 -10.36-7.81 15.81 15.81 0 0 0 5.5 1.32c4 .36 11.06 0 20.69 0 10.25 0 21.33.09 26.64.14a46.78 46.78 0 0 0 8.46-.65 60.65 60.65 0 0 0 34.78-19.3 63.6 63.6 0 0 0 16-35.07z" style={{boxSizing: 'border-box'}}></path>
                                            <path d="m113.34 58a58 58 0 0 1 -52.34 58h-49a14 14 0 0 1 -12-14v-88c0-7 5-14 12-14h50a57 57 0 0 1 51.34 58z" style={{boxSizing: 'border-box'}}></path>
                                        </g>
                                    </svg></span>
                                <div name="devfolio-fill" style={{boxSizing: 'border-box', display: 'none', height: '24px', width: '24px'}}><svg width="1em" height="1em" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{boxSizing: 'border-box', height: '32px', width: '32px'}}>
                                        <path d="M29.702 17.62a14.219 14.219 0 01-12.84 14.275s-9.218.236-12.268 0a3.186 3.186 0 01-2.557-1.928c.43.189.889.299 1.357.325.998.09 2.703.134 5.08.134 3.487 0 7.29-.1 7.323-.1h.067a14.97 14.97 0 009.88-4.924 15.7 15.7 0 003.958-8.657v.875z" fill="currentColor" style={{boxSizing: 'border-box'}}></path>
                                        <path d="M28.58 14.491a14.22 14.22 0 01-12.862 14.264s-9.218.236-12.268 0A3.432 3.432 0 01.545 25.28V3.557A3.432 3.432 0 013.517.115c3.062-.258 12.268 0 12.268 0A14.22 14.22 0 0128.581 14.49z" fill="currentColor" style={{boxSizing: 'border-box'}}></path>
                                    </svg></div>
                            </a></div>
                        <div style={{boxSizing: 'border-box', display: 'flex', padding: '0px 0px 0px 32px', width: '100%'}}>
                            <ul style={{boxSizing: 'border-box', padding: '0px', margin: '0px', listStyleType: 'none', display: 'flex'}}>
                                <li style={{boxSizing: 'border-box'}}><a href="https://portfolio-neon-zeta-31.vercel.app/" target="_blank" style={{textDecoration: 'none solid rgb(142, 152, 156)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(142, 152, 156)', cursor: 'pointer', padding: '5px', color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, lineHeight: '24px'}}className="one">Portefeuille</a></li>
                                <li style={{boxSizing: 'border-box'}}><a href="https://auth.geeksforgeeks.org/user/divyanshu1072be21/articles/" target="_blank" style={{textDecoration: 'none solid rgb(142, 152, 156)', boxSizing: 'border-box', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0px none rgb(142, 152, 156)', cursor: 'pointer', padding: '5px', color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', fontWeight: 700, lineHeight: '24px'}} className="one">Articles</a></li>
                               
                                 </ul>
                        </div>
                        <div style={{display: 'none', WebkitBoxFlex: 1, flexGrow: 1, flexBasis: '0px', WebkitBoxPack: 'end', justifyContent: 'flex-end', boxSizing: 'border-box'}}>
                            <div style={{position: 'relative', boxSizing: 'border-box'}}>
                                <button type="button" aria-haspopup="menu" data-state="closed" style={{padding: '0px', borderRadius: '50%', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box', border: '0px none rgb(0, 0, 0)', height: '40px', width: '40px', overflow: 'hidden', cursor: 'pointer', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', marginTop: '4px', appearance: 'button', textTransform: 'none', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '4px 0px 0px'}}>
                                    <div name="bell" color="grey-6" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(142, 152, 156)', boxSizing: 'border-box'}}>
                                            <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a1.999 1.999 0 01-3.46 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{boxSizing: 'border-box'}}></path>
                                        </svg></div>
                                </button></div>
                            <div style={{position: 'relative', boxSizing: 'border-box'}}><button type="button" aria-haspopup="menu" data-state="closed" style={{position: 'relative', padding: '0px', borderRadius: '50%', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box', border: '1.6px solid rgb(255, 255, 255)', height: '40px', width: '40px', overflow: 'hidden', cursor: 'pointer', appearance: 'button', textTransform: 'none', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}>
                                    <div style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgb(7, 19, 26)', opacity: 0, boxSizing: 'border-box'}}></div>
                                    <div style={{outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@1x.png" alt="Divyanshu011's avatar" style={{width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                                </button></div>
                        </div>
                    </div>
                    <div style={{boxSizing: 'border-box', display: 'flex'}}>
                        <div style={{boxSizing: 'border-box', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center'}}>
                            <div style={{display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', gap: '16px', boxSizing: 'border-box'}}>
                                <div style={{position: 'relative', boxSizing: 'border-box'}}><button type="button" aria-haspopup="menu" data-state="closed" style={{padding: '0px', borderRadius: '50%', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box', border: '0px none rgb(0, 0, 0)', height: '40px', width: '40px', overflow: 'hidden', cursor: 'pointer', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', WebkitBoxPack: 'center', justifyContent: 'center', marginTop: '4px', appearance: 'button', textTransform: 'none', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '4px 0px 0px'}}>
                                        <div name="bell" color="grey-6" style={{display: 'block', height: '24px', width: '24px', boxSizing: 'border-box'}}><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{height: '24px', width: '24px', color: 'rgb(142, 152, 156)', boxSizing: 'border-box'}}>
                                                <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a1.999 1.999 0 01-3.46 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{boxSizing: 'border-box'}}></path>
                                            </svg></div>
                                    </button></div>
                                <div style={{position: 'relative', boxSizing: 'border-box'}}><button type="button" aria-haspopup="menu" data-state="closed" style={{position: 'relative', outline: 'rgb(0, 0, 0) none 0px', boxSizing: 'border-box', overflow: 'hidden', cursor: 'pointer', display: 'flex', borderRadius: '40px', gap: '10px', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', border: '0.8px solid rgba(0, 0, 0, 0)', padding: '4px 12px 4px 4px', height: '48px', width: 'max-content', appearance: 'button', textTransform: 'none', fontFamily: '"Nunito Sans", sans-serif', fontSize: '16px', lineHeight: '18.4px', margin: '0px'}}>
                                        <div style={{position: 'absolute', width: '100%', height: '46.4px', backgroundColor: 'rgb(7, 19, 26)', opacity: 0, boxSizing: 'border-box'}}></div>
                                        <div style={{outline: 'rgb(0, 0, 0) none 0px', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', boxSizing: 'border-box'}}><img src="https://assets.devfolio.co/assets/avatar@1x.png" alt="Divyanshu011's avatar" style={{width: '36px', height: '36px', maxWidth: '36px', maxHeight: '36px', boxSizing: 'border-box', borderStyle: 'none'}} /></div>
                                        <p style={{zIndex: 2, userSelect: 'none', fontSize: '18px', lineHeight: '24px', fontWeight: 600, color: 'rgb(39, 51, 57)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box'}} className='nae'>Divyanshu011</p>
                                    </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
);
}

export default Header;
