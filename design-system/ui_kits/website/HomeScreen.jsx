// Homepage composition: hero, differentiators, process, audiences, proof, CTA.
const Ico = ({ children }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

function Hero({ onNavigate }) {
  return (
    <section style={{
      background:'var(--hw-surface-peach) url(' + window.HW_ASSETS.banner + ') center/cover no-repeat',
      position:'relative'
    }}>
      <div className="hw-container" style={{
        display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:30, alignItems:'center', minHeight:540
      }}>
        <div style={{ padding:'70px 0', maxWidth:560 }}>
          <span style={{
            display:'inline-block', fontFamily:'var(--hw-font-head)', fontWeight:'var(--hw-w-bold)',
            fontSize:'var(--hw-text-eyebrow)', letterSpacing:'var(--hw-track-eyebrow)',
            textTransform:'uppercase', color:'var(--hw-orange)', marginBottom:18
          }}>Journey of an idea</span>
          <h1 style={{ fontSize:'var(--hw-text-h1)', fontWeight:'var(--hw-w-extrabold)', marginBottom:20, lineHeight:1.12 }}>
            We build the founders your <span style={{ color:'var(--hw-orange)' }}>programme promises.</span>
          </h1>
          <p style={{ fontSize:'var(--hw-text-lead)', color:'var(--hw-muted)', maxWidth:500, marginBottom:30 }}>
            Headway Idea Labs embeds structured founder development inside accelerators, innovation hubs,
            and ecosystem partners &mdash; turning early ideas into companies investors can evaluate.
          </p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <Button size="lg" href="#">Schedule Your Free Consultation</Button>
            <Button variant="outlineNavy" size="lg" onClick={() => onNavigate('program')}>See the programme</Button>
          </div>
        </div>
        <div style={{ position:'relative', justifySelf:'end', width:'100%', maxWidth:520 }}>
          <img src={window.HW_ASSETS.heroCut} alt="Founder reviewing growth metrics"
            style={{ width:'100%', filter:'drop-shadow(0 30px 50px rgba(14,42,77,.18))' }} />
        </div>
      </div>
    </section>
  );
}

function HomeScreen({ onNavigate }) {
  return (
    <React.Fragment>
      <Hero onNavigate={onNavigate} />

      <section className="hw-section">
        <div className="hw-container">
          <SectionHeading eyebrow="What makes us different" align="split"
            title={<>Not another workshop. A founder <span style={{ color:'var(--hw-orange)' }}>operating system.</span></>}
            intro="Most programmes hand founders advice. We hand them the operating steps, the accountability, and the capital narrative that turn advice into traction."
            style={{ marginBottom:'var(--hw-space-9)' }} />
          <div className="hw-grid-3">
            <FeatureCard chip="navy" hoverFill title="Structured curriculum"
              icon={<Ico><path d="M4 6h16M4 12h16M4 18h10" /></Ico>}>
              60+ worksheets and mentor guides so every cohort runs to the same standard.
            </FeatureCard>
            <FeatureCard chip="teal" hoverFill title="Founder transformation"
              icon={<Ico><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.2" /></Ico>}>
              We develop purpose-driven business strategists, not better pitch decks.
            </FeatureCard>
            <FeatureCard chip="orange" hoverFill title="Capital readiness"
              icon={<Ico><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5M21 7h-5" /></Ico>}>
              Milestone-based capital plans and investor narratives built before the first meeting.
            </FeatureCard>
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
            <h2 style={{ color:'#fff', fontSize:29, marginBottom:18 }}>One founder journey, from first idea to investor conversation.</h2>
            <p style={{ color:'var(--text-on-dark)', fontSize:15.3 }}>
              The model layers into programmes you already run rather than replacing what works.
            </p>
          </div>
          <div style={{ display:'grid', gap:18 }}>
            <StepCard number="01" title="Pre-Accelerator Foundation">Vision, strategic clarity, market logic, and readiness diagnostics.</StepCard>
            <StepCard number="02" title="Accelerator Embedded Curriculum">Mentorship, worksheets, milestone tracking, and execution accountability.</StepCard>
            <StepCard number="03" title="Post-Accelerator Investor Readiness">Investor narrative, capital sequencing, and disciplined follow-through.</StepCard>
            <StepCard number="04" title="Ecosystem Investor Connection">Founders enter aligned investor conversations with credible evidence.</StepCard>
          </div>
        </div>
      </section>

      <section className="hw-section">
        <div className="hw-container">
          <SectionHeading eyebrow="Who we serve"
            title="Built for the organisations that build founders"
            style={{ marginBottom:'var(--hw-space-9)' }} />
          <div className="hw-grid-3">
            {[
              ['Accelerators','Add depth to an existing cohort without rebuilding your curriculum.'],
              ['Incubators','Give early founders structure before they are ready to raise.'],
              ['Innovation hubs','Standardise founder support across multiple programmes.'],
              ['Universities','Turn student ventures into investable companies.'],
              ['Economic development','Show measurable founder and capital outcomes in your region.'],
              ['Corporate ventures','Prepare internal teams to operate like funded startups.']
            ].map(([t, d]) => (
              <FeatureCard key={t} chip="soft" title={t}
                icon={<Ico><circle cx="12" cy="8" r="3.4" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></Ico>}>{d}</FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="hw-section" style={{ background:'var(--hw-surface-warm)' }}>
        <div className="hw-container">
          <SectionHeading eyebrow="Proof" title="What partners and founders say"
            style={{ marginBottom:'var(--hw-space-9)' }} />
          <div className="hw-grid-3">
            <Testimonial avatar={window.HW_ASSETS.face1} name="Ismael El-Amin" role="Founder, Ubuntu Sales Solutions"
              quote="The structure gave us a clear path from idea to a plan investors could actually evaluate." />
            <Testimonial avatar={window.HW_ASSETS.face2} name="Heath Butler" role="Partner"
              quote="Founders leave with discipline, not just a deck. That is the difference." />
            <Testimonial avatar={window.HW_ASSETS.face3} name="Patricia Vega" role="Programme Director"
              quote="It slotted into the cohort we already run and raised the standard of every team." />
          </div>
        </div>
      </section>

      <CtaBand />
    </React.Fragment>
  );
}

function CtaBand({
  title = "Let's build a founder journey that doesn't stop at demo day",
  blurb = 'Partner with Headway to extend support for your founders — deepening your impact and keeping your best founders connected to guidance and capital.'
}) {
  return (
    <section style={{ padding:'78px 0 0', marginBottom:-150, position:'relative', zIndex:2 }}>
      <div className="hw-container">
        <div style={{
          background:'var(--hw-gradient-navy)', borderRadius:'var(--hw-radius-panel)',
          padding:'66px 40px 60px', textAlign:'center'
        }}>
          <h2 style={{ color:'#fff', fontSize:40, fontWeight:'var(--hw-w-extrabold)', maxWidth:760, margin:'0 auto 20px', lineHeight:1.18 }}>{title}</h2>
          <p style={{ color:'rgba(225,235,245,.85)', fontSize:16.5, maxWidth:660, margin:'0 auto 34px' }}>{blurb}</p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <Button size="lg">Download Program Overview PDF</Button>
            <Button size="lg" variant="outline">Inquire About Partnership Opportunities</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HomeScreen, CtaBand });
