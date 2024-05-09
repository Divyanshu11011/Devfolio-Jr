import React from "react";

export default function SearchBox() {
    return (
        <>
            <div style={{ display: 'flex', gap: '16px', boxSizing: 'border-box' }}>
                <div style={{ padding: '16px', width: '100%', paddingy: '24px', paddingx: '40px', boxSizing: 'border-box', position: 'relative', height: '89.6px', borderRadius: '16px', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 4px 0px' }}>
                    <div style={{ display: 'flex', gap: '16px', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box' }}><button style={{ cursor: 'pointer', textAlign: 'left', WebkitBoxAlign: 'center', alignItems: 'center', display: 'flex', borderRadius: '6px', padding: '16px', width: '100%', border: '0.8px solid rgb(208, 217, 218)', backgroundColor: 'rgb(245, 247, 247)', color: 'rgb(142, 152, 156)', fontFamily: '"Nunito Sans", sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: '24px', outline: 'rgb(142, 152, 156) none 0px', transition: 'all 0.16s ease-in 0s', boxSizing: 'border-box', appearance: 'button', textTransform: 'none', overflow: 'visible', margin: '0px' }}>
                        <div name="search" color="grey-5" style={{ display: 'block', height: '24px', width: '24px', marginRight: '8px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', color: 'rgb(180, 190, 192)', boxSizing: 'border-box' }}>
                            <circle cx={11} cy={11} r={8} style={{ boxSizing: 'border-box' }} />
                            <path d="M21 21l-4.35-4.35" style={{ boxSizing: 'border-box' }} />
                        </svg></div>Type to begin search, or use the global shortcut
                    </button>
                        <div style={{ borderRadius: '8px', display: 'flex', gap: '4px', WebkitBoxAlign: 'center', alignItems: 'center', backgroundColor: 'rgb(245, 247, 247)', padding: '4px', boxSizing: 'border-box' }}><kbd data-testid="kbd" color="grey-8" style={{ backgroundColor: 'rgb(228, 234, 235)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(39, 51, 57)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>Ctrl</kbd>
                            <p style={{ fontSize: '20px', lineHeight: '28px', fontWeight: 700, color: 'rgb(180, 190, 192)', fontFamily: '"Nunito Sans", sans-serif', margin: '0px', boxSizing: 'border-box' }}>+</p><kbd data-testid="kbd" color="grey-8" style={{ backgroundColor: 'rgb(228, 234, 235)', border: '0.8px solid rgb(142, 152, 156)', borderRadius: '8px', height: '48px', minWidth: '48px', padding: '16px', display: 'flex', WebkitBoxPack: 'center', justifyContent: 'center', WebkitBoxAlign: 'center', alignItems: 'center', boxSizing: 'border-box', color: 'rgb(39, 51, 57)', textTransform: 'capitalize', fontFamily: '"Space Mono", monospace', fontSize: '20px', lineHeight: '20px', fontWeight: 700 }}>k</kbd>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', minWidth: '278px', maxWidth: '278px', boxSizing: 'border-box' }}><a href="https://devfolio.co/hackathons/applied" style={{ maxHeight: '88px', width: '100%', display: 'flex', WebkitBoxAlign: 'center', alignItems: 'center', textDecoration: 'none solid rgb(55, 112, 255)', WebkitBoxPack: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', boxShadow: 'none', padding: '28px 24px', border: '1.6px solid rgb(179, 206, 255)', borderRadius: '16px', fontFamily: '"Nunito Sans", sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '28px', background: 'rgb(210, 224, 255) none repeat scroll 0% 0% / auto padding-box border-box', color: 'rgb(55, 112, 255)', boxSizing: 'border-box', backgroundColor: 'rgb(210, 224, 255)' }}>Your hackathons<div name="chevron-right" style={{ display: 'block', height: '24px', width: '24px', boxSizing: 'border-box' }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ height: '24px', width: '24px', boxSizing: 'border-box' }}>
                    <path d="M9 18l6-6-6-6" style={{ boxSizing: 'border-box' }} />
                </svg></div></a></div>
            </div>




        </>



    );
}
