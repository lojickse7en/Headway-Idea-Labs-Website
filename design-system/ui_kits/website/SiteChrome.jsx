// Sticky header + dark-brown footer. Shared by every screen.
const NAV = [
  { label:'About' },
  { label:'Programs', items:['Pre-Accelerator Program','Accelerator Program','Post-Accelerator Program'] },
  { label:'Services', items:['Market Research','Software Development'] },
  { label:'Startup Funding', items:['Investor Readiness Check (FREE)','Business & Deck Analyzer','Investment Application'] },
  { label:'Resources', items:['Webinars','Blogs','Podcast'] }
];

const Caret = () => (
  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4l4 4 4-4"/></svg>
);

function SiteHeader({ current, onNavigate }) {
  const [open, setOpen] = React.useState(null);
  return (
    <header style={{ position:'sticky', top:0, zIndex:50, background:'#fff', borderBottom:'1px solid var(--hw-line)' }}>
      <div className="hw-container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:'var(--hw-header-h)' }}>
        <a href="#" onClick={(e)=>{e.preventDefault();onNavigate('home');}}>
          <img src={window.HW_ASSETS.logo} alt="Headway Idea Labs" style={{ height:46 }} />
        </a>
        <nav style={{ display:'flex', gap:30 }}>
          {NAV.map((n) => (
            <div key={n.label} style={{ position:'relative' }}
              onMouseEnter={() => setOpen(n.label)} onMouseLeave={() => setOpen(null)}>
              <a href="#" onClick={(e)=>e.preventDefault()} style={{
                display:'flex', alignItems:'center', gap:5, padding:'28px 0',
                fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-medium)', fontSize:15,
                color:open === n.label ? 'var(--hw-orange)' : '#33414F',
                transition:'color var(--hw-dur-fast) var(--hw-ease)'
              }}>{n.label}{n.items ? <Caret /> : null}</a>
              {n.items && open === n.label ? (
                <div style={{
                  position:'absolute', top:72, left:-14, minWidth:250, background:'#fff',
                  border:'1px solid var(--hw-line)', borderRadius:10, padding:8,
                  boxShadow:'var(--hw-shadow-dropdown)'
                }}>
                  {n.items.map((it) => (
                    <a key={it} href="#" onClick={(e)=>{e.preventDefault(); if(it.indexOf('Post-Accelerator')===0) onNavigate('program');}}
                      style={{
                        display:'block', padding:'10px 14px', borderRadius:7, fontSize:14.5,
                        color: it === current ? 'var(--hw-orange)' : '#3A4654'
                      }}>{it}</a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <Button size="sm" href="#">Login</Button>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer style={{ background:'var(--hw-footer)', color:'rgba(255,255,255,.72)', position:'relative', overflow:'hidden' }}>
      <div className="hw-container" style={{
        display:'grid', gridTemplateColumns:'1.1fr 1.7fr 1.4fr', gap:40,
        padding:'70px 0 54px', alignItems:'start', position:'relative'
      }}>
        <div>
          <img src={window.HW_ASSETS.logoWhite} alt="Headway Idea Labs"
            style={{ height:44, marginBottom:22 }} />
          <div style={{ display:'flex', gap:12 }}>
            {['M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H7.5v3H10v8h3Z',
              'M17.5 3h3l-6.6 7.5L21.7 21h-5.9l-4.3-5.6L6.5 21H3.5l7-8L2.7 3h6l3.9 5.2L17.5 3Z',
              'M6.9 8.5v11H3.6v-11h3.3ZM5.2 3.6a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM20.4 19.5h-3.3v-5.7c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2v6.8h-3.3s.1-9.7 0-10.7h3.3v1.5c.4-.7 1.2-1.7 3-1.7 2.2 0 3.8 1.4 3.8 4.5v6.4Z'
            ].map((d, i) => (
              <a key={i} href="#" style={{
                width:38, height:38, borderRadius:'50%', background:'rgba(255,255,255,.08)',
                display:'flex', alignItems:'center', justifyContent:'center', color:'#fff'
              }}><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg></a>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'14px 30px', paddingTop:6 }}>
          {['About','Programs','Services','Startup Funding','Contact Us'].map((l) => (
            <a key={l} href="#" style={{
              fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-medium)', fontSize:14.5, color:'#EDE7E1'
            }}>{l}</a>
          ))}
        </div>
        <NewsletterForm blurb="Stay ahead with expert insights, success stories, and monthly strategies on running top-tier accelerators." />
      </div>
      <div style={{ borderTop:'1px solid rgba(255,255,255,.1)' }}>
        <div className="hw-container" style={{
          display:'flex', justifyContent:'center', gap:26, padding:'20px var(--hw-container-pad)', flexWrap:'wrap'
        }}>
          <span style={{ fontSize:13, color:'rgba(255,255,255,.5)' }}>&copy; 2026 Headway Idea Labs. All rights reserved.</span>
          <a href="#" style={{ fontSize:13, color:'rgba(255,255,255,.5)' }}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
