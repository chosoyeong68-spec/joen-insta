// realistic brow renderers
const SK='<rect width="400" height="200" fill="url(#skinG)" filter="url(#skin)"/>';
const shape='M50 140 C120 80 240 64 350 92 C310 98 240 94 170 110 C120 122 80 134 50 140Z';
function strokes(n,len,w,col,op,jitter){let s='';for(let i=0;i<n;i++){const t=i/(n-1);const x=60+t*280;const y=136-Math.sin(t*Math.PI*0.9)*42-t*8;const a=-60+t*62+(jitter?((i*37)%11-5):0);const r=a*Math.PI/180;s+=`<line x1="${x}" y1="${y}" x2="${(x+Math.cos(r)*len).toFixed(1)}" y2="${(y+Math.sin(r)*len).toFixed(1)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round" opacity="${op}"/>`;}return s;}
function browSVG(kind){
 let b='';
 if(kind==='embo') b=`<g filter="url(#hair)">${strokes(16,34,2.6,'#4a3126',.85,false)}</g>`;
 if(kind==='suji') b=`<path d="${shape}" fill="#5a3b2c" opacity=".55" filter="url(#inkblur2)"/>`;
 if(kind==='combo') b=`<path d="${shape}" fill="#5a3b2c" opacity=".35" filter="url(#inkblur2)"/><g filter="url(#hair)">${strokes(9,30,2.6,'#3f2a20',.8,false)}</g>`;
 if(kind==='powder') b=`<path d="${shape}" fill="#6a4a3a" opacity=".5" filter="url(#inkblur)"/><path d="${shape}" fill="#6a4a3a" opacity=".2" filter="url(#inkblur2)" transform="translate(30 -4) scale(.88)"/>`;
 if(kind==='real') b=`<path d="${shape}" fill="#5a3b2c" opacity=".12" filter="url(#inkblur2)"/><g filter="url(#hair)">${strokes(24,36,2.2,'#3f2a20',.9,true)}${strokes(18,26,1.5,'#6b4a38',.7,true)}</g>`;
 return `<svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">${SK}${b}<path d="M90 190 C170 165 260 165 340 190" stroke="#6d4a3a" stroke-width="5" fill="none" opacity=".4" filter="url(#inkblur2)"/></svg>`;
}
function browX(kind){
 if(kind==='bad') return `<svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">${SK}<path d="M50 150 C110 70 220 50 330 70" stroke="#2f2420" stroke-width="30" fill="none" opacity=".72" filter="url(#inkblur2)" stroke-linecap="round"/><path d="M70 160 C150 120 240 110 330 112" stroke="#3a2a24" stroke-width="12" fill="none" opacity=".3" filter="url(#inkblur)"/><path d="M90 190 C170 165 260 165 340 190" stroke="#6d4a3a" stroke-width="5" fill="none" opacity=".4" filter="url(#inkblur2)"/></svg>`;
 if(kind==='res') return `<svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">${SK}<path d="M40 140 C110 80 230 64 340 92 C300 98 230 94 160 110 C110 122 70 134 40 140Z" fill="#56708c" opacity=".6" filter="url(#inkblur)"/><path d="M90 190 C170 165 260 165 340 190" stroke="#6d4a3a" stroke-width="5" fill="none" opacity=".4" filter="url(#inkblur2)"/></svg>`;
 if(kind==='bare') return `<svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">${SK}<g filter="url(#hair)">${strokes(7,22,1.6,'#6b4a38',.5,true)}</g><path d="M90 190 C170 165 260 165 340 190" stroke="#6d4a3a" stroke-width="5" fill="none" opacity=".4" filter="url(#inkblur2)"/></svg>`;
 return browSVG(kind);
}
