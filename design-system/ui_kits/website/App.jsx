function App() {
  const [screen, setScreen] = React.useState('program');
  React.useEffect(() => { window.scrollTo(0, 0); }, [screen]);
  return (
    <React.Fragment>
      <SiteHeader current={screen === 'program' ? 'Post-Accelerator Program' : null} onNavigate={setScreen} />
      {screen === 'home' ? <HomeScreen onNavigate={setScreen} /> : <ProgramScreen />}
      <SiteFooter />
      <div style={{
        position:'fixed', bottom:18, left:'50%', transform:'translateX(-50%)', zIndex:99,
        display:'flex', gap:6, background:'#fff', border:'1px solid var(--hw-line)',
        borderRadius:'var(--hw-radius-pill)', padding:6, boxShadow:'var(--hw-shadow-float)'
      }}>
        {[['home','Homepage'],['program','Post-Accelerator']].map(([k, l]) => (
          <button key={k} onClick={() => setScreen(k)} style={{
            border:'none', cursor:'pointer', borderRadius:'var(--hw-radius-pill)', padding:'8px 18px',
            fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)', fontSize:13,
            background:screen === k ? 'var(--hw-navy)' : 'transparent',
            color:screen === k ? '#fff' : 'var(--hw-muted)'
          }}>{l}</button>
        ))}
      </div>
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
