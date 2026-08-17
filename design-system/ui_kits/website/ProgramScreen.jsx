// Post-Accelerator Programme page — the signed-off page, rebuilt from kit primitives.
const PIco = ({ children }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

function ReadinessCard() {
  const rows = [['Strategy clarity','100%',true],['Traction validated','90%',true],['Capital roadmap','60%',false]];
  return (
    <div style={{ position:'relative', width:'100%', maxWidth:454, marginLeft:'auto' }}>
      <div style={{
        position:'relative', zIndex:1, background:'#fff', border:'1px solid #EEF1F5',
        borderRadius:'var(--hw-radius-xl)', padding:'28px 28px 24px', boxShadow:'0 34px 64px -30px rgba(14,42,77,.45)'
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
          <div>
            <div style={{ fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-bold)', fontSize:18, color:'var(--hw-navy)' }}>Founder Readiness</div>
            <div style={{ fontSize:13, color:'var(--hw-muted)' }}>Post-accelerator cohort</div>
          </div>
          <Badge tone="success" dot>Live</Badge>
        </div>
        <div style={{ textAlign:'center', padding:'6px 0 2px' }}>
          <svg viewBox="0 0 200 112" style={{ width:230, maxWidth:'100%' }}>
            <path d="M14 104 A86 86 0 0 1 186 104" fill="none" stroke="#EEF2F6" strokeWidth="15" strokeLinecap="round" />
            <path d="M14 104 A86 86 0 0 1 186 104" fill="none" stroke="url(#kitg)" strokeWidth="15"
              strokeLinecap="round" strokeDasharray="270" strokeDashoffset="49" />
            <defs><linearGradient id="kitg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#FD7900" /><stop offset="1" stopColor="#F8B170" />
            </linearGradient></defs>
          </svg>
          <div style={{ fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-extrabold)', fontSize:44, color:'var(--hw-navy)', marginTop:-62, lineHeight:1 }}>
            82<span style={{ fontSize:22, color:'var(--hw-orange)' }}>%</span>
          </div>
          <div style={{
            fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-semibold)', fontSize:13,
            letterSpacing:'.04em', textTransform:'uppercase', color:'var(--hw-muted)', margin:'8px 0 16px'
          }}>Investor ready</div>
        </div>
        <div style={{ display:'grid', gap:11 }}>
          {rows.map(([label, pct, done]) => (
            <div key={label} style={{
              display:'flex', alignItems:'center', gap:12, background:'var(--hw-surface-tint)',
              borderRadius:12, padding:'13px 15px', fontFamily:'var(--hw-font-head)',
              fontWeight:'var(--hw-w-semibold)', fontSize:14, color:'var(--hw-navy)'
            }}>
              <span style={{
                width:25, height:25, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:13, background:done ? 'var(--hw-success-bg)' : 'var(--hw-orange-bg)',
                color:done ? 'var(--hw-success)' : 'var(--hw-orange)'
              }}>{done ? '\u2713' : '3'}</span>
              {label}
              <span style={{ marginLeft:'auto', color:'var(--hw-muted)', fontSize:13 }}>{pct}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        position:'absolute', right:-22, bottom:30, zIndex:2, display:'flex', alignItems:'center', gap:11,
        background:'#fff', border:'1px solid #EEF1F5', borderRadius:14, padding:'13px 16px',
        boxShadow:'var(--hw-shadow-float)'
      }}>
        <span style={{
          width:36, height:36, borderRadius:10, backgroundImage:'var(--hw-gradient-button)', color:'#fff',
          fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-bold)', display:'flex',
          alignItems:'center', justifyContent:'center', fontSize:17
        }}>$</span>
        <div>
          <b style={{ display:'block', fontFamily:'var(--hw-font-head)', fontSize:13.5, color:'var(--hw-navy)' }}>Capital matched</b>
          <i style={{ fontStyle:'normal', fontSize:12.5, color:'var(--hw-muted)' }}>$4.2M committed</i>
        </div>
      </div>
    </div>
  );
}

function ProgramScreen() {
  const chips = ['Investor narrative','Capital roadmap','Milestone tracking','Financial clarity','Accountability rhythm','Pitch proficiency'];
  return (
    <React.Fragment>
      <section style={{
        background:'var(--hw-surface-peach) url(' + window.HW_ASSETS.banner + ') center/cover no-repeat'
      }}>
        <div className="hw-container" style={{
          display:'grid', gridTemplateColumns:'1.02fr 1fr', gap:30, alignItems:'center', minHeight:560
        }}>
          <div style={{ padding:'64px 0', maxWidth:560 }}>
            <span style={{
              display:'inline-block', fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-bold)',
              fontSize:'var(--hw-text-eyebrow)', letterSpacing:'var(--hw-track-eyebrow)',
              textTransform:'uppercase', color:'var(--hw-orange)', marginBottom:20
            }}>Post-Accelerator Program</span>
            <h1 style={{ fontSize:'var(--hw-text-h1)', fontWeight:'var(--hw-w-extrabold)', marginBottom:22 }}>
              Keep founders connected after the cohort ends &mdash; and move them closer to <span style={{ color:'var(--hw-orange)' }}>investor worthiness.</span>
            </h1>
            <p style={{ fontSize:'var(--hw-text-lead)', color:'var(--hw-muted)', maxWidth:500, marginBottom:30 }}>
              A structured founder development track for accelerators, innovation hubs, and ecosystem partners
              who want stronger founders in, better outcomes out, and a credible path from programming to capital readiness.
            </p>
            <Button size="lg" href="#">Schedule Your Free Consultation</Button>
          </div>
          <ReadinessCard />
        </div>
      </section>

      <section className="hw-section">
        <div className="hw-container">
          <SectionHeading eyebrow="Mentor gap solved"
            title={<>60+ operating worksheets turn advice into <span style={{ color:'var(--hw-orange)' }}>execution.</span></>}
            intro="Mentors and speakers get practical speaking guides. Founders get the actual operating steps behind investor-ready tasks, not vague direction."
            style={{ marginBottom:'var(--hw-space-8)' }} />
          <div style={{ display:'flex', flexWrap:'wrap', gap:14, justifyContent:'center', maxWidth:840, margin:'0 auto' }}>
            {chips.map((c) => <Pill key={c}>{c}</Pill>)}
          </div>
        </div>
      </section>

      <section className="hw-section" style={{ background:'var(--hw-surface-warm)' }}>
        <div className="hw-container" style={{ display:'grid', gridTemplateColumns:'.92fr 1.08fr', gap:40, alignItems:'start' }}>
          <div style={{ background:'var(--hw-gradient-navy)', borderRadius:'var(--hw-radius-panel)', padding:'46px 42px' }}>
            <span style={{
              display:'inline-block', fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-bold)',
              fontSize:'var(--hw-text-eyebrow)', letterSpacing:'var(--hw-track-eyebrow)',
              textTransform:'uppercase', color:'#7FB0E6', marginBottom:16
            }}>How it all connects</span>
            <h2 style={{ color:'#fff', fontSize:29, marginBottom:18 }}>Where the post-accelerator step fits in the founder journey.</h2>
            <p style={{ color:'var(--text-on-dark)', fontSize:15.3 }}>
              The model layers into your current programs rather than replacing what already works &mdash; guiding local
              founders, outside founders, and alumni through one clear path from pre-accelerator to post-program.
            </p>
          </div>
          <div style={{ display:'grid', gap:18 }}>
            <StepCard number="01" title="Pre-Accelerator Foundation">Founder vision, strategic clarity, market logic, and readiness diagnostics.</StepCard>
            <StepCard number="02" title="Accelerator Embedded Curriculum">Mentorship, structured worksheets, milestone tracking, and execution accountability.</StepCard>
            <StepCard number="03" title="Post-Accelerator Investor Readiness" featured>Investor narrative construction, capital sequencing, and disciplined follow-through after the cohort finishes.</StepCard>
            <StepCard number="04" title="Ecosystem Investor Connection">Founders enter aligned investor conversations with clearer evidence and a credible capital roadmap.</StepCard>
          </div>
        </div>
      </section>

      <section className="hw-section">
        <div className="hw-container">
          <SectionHeading eyebrow="Who it's built for"
            title="Designed for accelerators, not one-off consulting."
            intro="Headway works through innovation hubs, incubators, university programs, economic development agencies, and mission-aligned startup ecosystems."
            style={{ marginBottom:'var(--hw-space-8)' }} />
          <div className="hw-grid-2" style={{ maxWidth:940, margin:'0 auto' }}>
            <FeatureCard chip="soft" hoverFill title="Structured founder development"
              icon={<PIco><path d="M5 13l4 4L19 7" /></PIco>}>
              Repeatable curriculum creates consistency across cohorts and makes it easier for mentors to stay aligned.
            </FeatureCard>
            <FeatureCard chip="soft" hoverFill title="Lower program burden"
              icon={<PIco><path d="M5 13l4 4L19 7" /></PIco>}>
              Standardized tools reduce the amount of founder management that falls back on program teams.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section className="hw-section" style={{ background:'var(--hw-surface-warm)' }}>
        <div className="hw-container">
          <SectionHeading eyebrow="Why this exists" align="split"
            title={<>The missing layer after <span style={{ color:'var(--hw-orange)' }}>demo day.</span></>}
            intro="Accelerators often tell founders what to do. Headway helps founders learn how to do the work with the strategic clarity, maturity, and proficiency that investors expect."
            style={{ marginBottom:'var(--hw-space-9)' }} />
          <div className="hw-grid-3">
            <FeatureCard chip="navy" title="Programming continuity"
              icon={<PIco><path d="M7 17 17 7M9 7h8v8" /></PIco>}>
              Support does not end when a cohort ends. The series keeps founders, mentors, and partners on one readiness path.
            </FeatureCard>
            <FeatureCard chip="teal" title="Founder transformation"
              icon={<PIco><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.2" /></PIco>}>
              The goal is to develop founders into purpose-driven business strategists who can lead fundable companies.
            </FeatureCard>
            <FeatureCard chip="orange" title="Capital discipline"
              icon={<PIco><path d="M12 2v20" /><path d="M16.5 6.5C16.5 4.7 14.4 4 12 4S7.5 4.9 7.5 7.2" /></PIco>}>
              Founders build milestone-based capital plans, investor narratives, and accountability systems.
            </FeatureCard>
          </div>
        </div>
      </section>

      <CtaBand />
    </React.Fragment>
  );
}

Object.assign(window, { ProgramScreen, ReadinessCard });
