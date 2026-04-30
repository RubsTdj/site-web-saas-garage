// Mecanova Landing — main app, tweaks-driven.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "variant": "pilote",
  "accent": "#0FB89A",
  "dark": true,
  "density": "regular",
  "anim": true,
  "heroCopy": ""
}/*EDITMODE-END*/;

const VARIANTS = [
  { id: 'pilote',   label: 'Pilote (sombre)',     desc: 'Industriel · cockpit · sombre' },
];

const ACCENT_PRESETS = ['#0FB89A', '#FF6B35', '#3B82F6', '#FACC15', '#EF4444', '#A78BFA'];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to <body> + custom property
  React.useEffect(() => {
    const body = document.body;
    body.dataset.variant = t.variant;
    body.dataset.density = t.density;
    body.dataset.anim = t.anim ? 'on' : 'off';
    document.documentElement.style.setProperty('--accent', t.accent);

    if (t.variant === 'atelier' && t.dark) {
      body.dataset.variant = 'pilote';
    }
  }, [t.variant, t.density, t.anim, t.accent, t.dark]);

  // Scroll reveal observer
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!t.anim) {
      els.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0, rootMargin: '0px 0px -20px 0px' });
    els.forEach(el => io.observe(el));
    // Force reveal of any element already in viewport at mount
    setTimeout(() => {
      requestAnimationFrame(() => {
        els.forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
        });
      });
    }, 120);
    return () => io.disconnect();
  }, [t.variant, t.anim, t.density]);

  const { Nav, Hero, FinalCTA, Footer } = window.MecaSections;
  const { Problems, AutoRDVKiller, FeaturesGrid, PortailClient, DashboardInterne, Integrations, Onboarding } = window.MecaShowcase;
  const v = t.variant;

  return (
    <>
      <Nav t={t} variant={v} />
      <Hero t={t} variant={v} />
      <Problems />
      <AutoRDVKiller />
      <Integrations />
      <FeaturesGrid />
      <PortailClient />
      <DashboardInterne />
      <Onboarding />
      <FinalCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Couleur d'accent" />
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
          {ACCENT_PRESETS.map(c => (
            <button key={c}
              onClick={() => setTweak('accent', c)}
              aria-label={c}
              style={{
                width: 22, height: 22, borderRadius: 7,
                background: c, cursor: 'default',
                border: t.accent === c ? '2px solid #29261b' : '1px solid rgba(0,0,0,.1)',
                outline: t.accent === c ? '2px solid rgba(255,255,255,.6)' : 'none',
                outlineOffset: -3,
              }}
            />
          ))}
        </div>
        <TweakColor label="Custom" value={t.accent} onChange={(v) => setTweak('accent', v)} />

        <TweakSection label="Mise en page" />
        <TweakToggle
          label="Mode sombre"
          value={t.dark || t.variant === 'pilote'}
          onChange={(v) => setTweak('dark', v)}
        />
        <TweakRadio
          label="Densité"
          value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakToggle
          label="Animations"
          value={t.anim}
          onChange={(v) => setTweak('anim', v)}
        />

        <TweakSection label="Copy hero (H1)" />
        <TweakText
          label="Headline"
          value={t.heroCopy}
          placeholder="Laisse vide pour l'auto"
          onChange={(v) => setTweak('heroCopy', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
