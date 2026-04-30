// Landing core sections — Nav, Hero, FinalCTA, Footer
// All sections receive `t` (tweaks) and adapt to variant.

const { Calendar, Key, Clipboard, Receipt, Users, Spark, Bolt,
  Chart, Check, ArrowRight, Phone, Paper, Bike, Shield, Mail, Wrench,
  Search, Box, Plus, X,
  Logo, Wordmark, LogoWordmark: IconLogoWordmark } = window.MecaIcons;

// ─────────────────────────────────────────────────────────────────────────────
// NAV
function Nav({ t, variant }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 60,
      backdropFilter: 'saturate(140%) blur(14px)',
      background: 'color-mix(in oklab, var(--bg) 78%, transparent)',
      borderBottom: '1px solid var(--line)'
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 68
      }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', marginRight: 32 }}>
          <IconLogoWordmark height={30} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 14, color: 'var(--muted)', flex: 1 }} className="nav-links">
          <a href="#problemes">Problèmes</a>
          <a href="#auto-rdv">Auto-RDV pneus</a>
          <a href="#portail">Portail client</a>
          <a href="#dashboard">Dashboard</a>
          <a href="features.html">Fonctionnalités</a>
        </nav>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a className="btn btn-ghost" href="#" style={{ padding: '9px 14px', fontSize: 13 }}>Connexion</a>
          <a className="btn btn-primary" href="contact.html" style={{ padding: '10px 16px', fontSize: 13.5 }}>Démo gratuite</a>
        </div>
        <button
          className="nav-burger"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: 'none', background: 'transparent', border: 'none',
            cursor: 'pointer', padding: 8, color: 'var(--fg)',
          }}
        >
          {menuOpen
            ? <X size={22} />
            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="2" y1="6" x2="20" y2="6"/><line x1="2" y1="11" x2="20" y2="11"/><line x1="2" y1="16" x2="20" y2="16"/></svg>
          }
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'color-mix(in oklab, var(--bg) 96%, transparent)',
          borderBottom: '1px solid var(--line)',
          backdropFilter: 'blur(14px)',
          padding: '16px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {[
            { label: 'Problèmes', href: '#problemes' },
            { label: 'Auto-RDV pneus', href: '#auto-rdv' },
            { label: 'Portail client', href: '#portail' },
            { label: 'Dashboard', href: '#dashboard' },
            { label: 'Fonctionnalités', href: 'features.html' },
          ].map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              padding: '11px 4px', fontSize: 15, color: 'var(--fg)',
              borderBottom: '1px solid var(--line)',
            }}>{label}</a>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
            <a className="btn btn-ghost" href="#" style={{ flex: 1, justifyContent: 'center' }}>Connexion</a>
            <a className="btn btn-primary" href="contact.html" style={{ flex: 1, justifyContent: 'center' }}>Démo gratuite</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-links { display: none !important; }
          .nav-actions { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </header>);

}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
function Hero({ t, variant }) {
  const headlines = {
    atelier: {
      eyebrow: 'Nouveau · Intégration Allopneu & 1001Pneus',
      h1: t.heroCopy || "Le garage moto qui ne décroche plus le téléphone.",
      sub: "Mecanova prend les RDV, suit les commandes pneus, édite les factures et tient vos clients informés. Vous, vous restez à l'atelier."
    },
    pilote: {
      eyebrow: 'Nouveau · Intégration Allopneu & 1001Pneus',
      h1: t.heroCopy || "Pilotez l'atelier comme une moto.",
      sub: "Tableau de bord temps réel, RDV en autonomie, suivi des commandes pneus, facturation. Tout ce qu'il faut pour reprendre la main sur l'atelier."
    },
    workshop: {
      eyebrow: 'Pour les garages qui en ont marre du téléphone',
      h1: t.heroCopy || "Mécanique d'abord. L'admin s'occupe de tout le reste.",
      sub: "Mecanova est le logiciel tout-en-un des garages moto. Conçu en France, avec des garagistes."
    }
  }[variant];

  return (
    <section style={{ padding: '80px 0 80px', position: 'relative', overflow: 'hidden' }}>
      {/* subtle radial glow behind visual */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '-10%', top: '5%',
        width: '60%', height: '90%', borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, color-mix(in oklab, var(--accent) 8%, transparent) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: 56, alignItems: 'center', paddingTop: 16 }} className="hero-grid">
          {/* ── LEFT COLUMN ── */}
          <div>
            <div className="reveal chip" style={{ marginBottom: 24 }}>
              <span className="dot" /> {headlines.eyebrow}
            </div>
            <h1 className="reveal reveal-delay-1" style={{ marginBottom: 24, lineHeight: 1.04, fontSize: 'clamp(34px, 3.6vw, 58px)' }}>
              {headlines.h1.split(/(\s+)/).map((w, i, arr) => {
                const isAccent = i >= arr.length - 3 && /\S/.test(w);
                return isAccent
                  ? <span key={i} style={{ color: 'var(--accent)' }}>{w}</span>
                  : <span key={i}>{w}</span>;
              })}
            </h1>
            <p className="reveal reveal-delay-2" style={{
              fontSize: 17, color: 'var(--muted)', marginBottom: 36, lineHeight: 1.65, maxWidth: 420
            }}>{headlines.sub}</p>
            <div className="reveal reveal-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                <a className="btn btn-primary" href="#demo" style={{ padding: '13px 20px', fontSize: 14.5 }}>
                  Demander une démo <ArrowRight size={15} stroke={2} />
                </a>
                <a className="btn btn-ghost" href="features.html" style={{ padding: '13px 18px', fontSize: 14 }}>
                  Voir les fonctionnalités
                </a>
              </div>
              <span style={{ color: 'var(--muted)', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Check size={14} stroke={2} style={{ color: 'var(--accent)' }} /> Démo en 20 min avec un garagiste
              </span>
            </div>
          </div>
          {/* ── RIGHT COLUMN — visual overflows bottom intentionally ── */}
          <div className="reveal reveal-delay-2 hero-visual" style={{ alignSelf: 'end' }}>
            <HeroVisual variant={variant} />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-visual { order: -1; }
        }
      `}</style>
    </section>);

}

const DASH_W = 880;
const DASH_H = 540;

function HeroVisual({ variant }) {
  const DashMock = window.DashMock;
  const outerRef = React.useRef(null);
  const [colW, setColW] = React.useState(0);

  React.useEffect(() => {
    if (!outerRef.current) return;
    const obs = new ResizeObserver(([e]) => setColW(e.contentRect.width));
    obs.observe(outerRef.current);
    return () => obs.disconnect();
  }, []);

  const scale = colW > 0 ? colW / DASH_W : 0.55;

  return (
    <div style={{ position: 'relative' }}>
      {/* ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '15% 0 -12% 0',
        background: 'radial-gradient(ellipse at 50% 90%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 65%)',
        filter: 'blur(32px)', pointerEvents: 'none', zIndex: 0,
      }} />
      {/* sizer ref */}
      <div ref={outerRef} style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: DASH_H * scale,
          borderRadius: 14,
          overflow: 'hidden',
          border: '1px solid var(--line)',
          boxShadow: '0 2px 0 rgba(255,255,255,.06) inset, 0 24px 64px rgba(0,0,0,.32)',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: DASH_W,
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
          }}>
            <DashMock variant={variant} />
          </div>
          {/* live badge */}
          <div style={{
            position: 'absolute', top: 12, right: 12,
            background: 'rgba(15,184,154,.95)', color: '#fff',
            padding: '5px 10px', borderRadius: 999,
            fontFamily: 'Geist Mono, monospace', fontSize: 10,
            display: 'inline-flex', alignItems: 'center', gap: 5,
            boxShadow: '0 4px 14px rgba(15,184,154,.4)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', animation: 'pulse 2s infinite' }} />
            En direct · Atelier
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FINAL CTA
function FinalCTA() {
  return (
    <section id="demo" style={{ padding: '0 0 120px' }}>
      <div className="container">
        <div className="reveal cta-card">
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="eyebrow" style={{ marginBottom: 18, color: 'rgba(255,255,255,.6)' }}>Démo en 20 minutes</div>
            <h2 style={{ color: '#fff', maxWidth: 640, marginBottom: 20 }}>
              Demain matin, l'atelier <span style={{ color: 'var(--accent)' }}>tourne tout seul.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 18, maxWidth: 540, marginBottom: 32 }}>
              Migration de vos données et formation incluses. On vous montre Mecanova en direct sur votre cas concret — 20 minutes, avec un garagiste de l'équipe.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="contact.html" style={{ padding: '14px 20px', fontSize: 15 }}>
                Réserver une démo <ArrowRight size={16} />
              </a>
              <a className="btn" href="contact.html" style={{ padding: '14px 20px', fontSize: 15, color: '#fff', border: '1px solid rgba(255,255,255,.2)' }}>
                Voir une démo en 90s
              </a>
            </div>
          </div>
          {/* deco rings */}
          <svg viewBox="0 0 600 600" style={{ position: 'absolute', right: -100, top: -100, width: 600, opacity: .1, pointerEvents: 'none' }}>
            <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="300" cy="300" r="120" stroke="white" strokeWidth="1" fill="none" />
            {Array.from({ length: 36 }).map((_, i) =>
            <line key={i} x1="300" y1="300" x2="300" y2="20"
            stroke="white" strokeWidth=".5"
            transform={`rotate(${i * 10} 300 300)`} />
            )}
          </svg>
        </div>
      </div>
      <style>{`
        .cta-card {
          position: relative; overflow: hidden;
          background: #0E1411; color: #fff;
          border-radius: 22px;
          padding: clamp(40px, 6vw, 80px);
          border: 1px solid rgba(255,255,255,.08);
        }
        .cta-card::before {
          content: ""; position: absolute; inset: 0;
          background:
            radial-gradient(600px 300px at 100% 0%, rgba(15,184,154,.18), transparent 60%),
            radial-gradient(500px 250px at 0% 100%, rgba(15,184,154,.1), transparent 60%);
        }
      `}</style>
    </section>);

}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '48px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 32, marginBottom: 40 }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <IconLogoWordmark height={26} />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 14, maxWidth: 320 }}>
              Le logiciel tout-en-un des garages moto. Conçu en France, avec des garagistes.
            </p>
          </div>
          <div>
            <div className="footer-h">Produit</div>
            <a className="footer-l" href="features.html">Fonctionnalités</a>
            <a className="footer-l" href="#auto-rdv">Auto-RDV pneus</a>
            <a className="footer-l" href="#portail">Portail client</a>
            <a className="footer-l" href="#dashboard">Dashboard</a>
            <a className="footer-l" href="#demo">Démo</a>
          </div>
          <div>
            <div className="footer-h">Entreprise</div>
            <a className="footer-l" href="#">À propos</a>
            <a className="footer-l" href="#">Blog atelier</a>
            <a className="footer-l" href="#">Recrutement</a>
            <a className="footer-l" href="contact.html">Contact</a>
          </div>
          <div>
            <div className="footer-h">Ressources</div>
            <a className="footer-l" href="#">Centre d'aide</a>
            <a className="footer-l" href="#">Statut services</a>
            <a className="footer-l" href="#">CGV / RGPD</a>
            <a className="footer-l" href="#">Mentions légales</a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, paddingTop: 24, borderTop: '1px solid var(--line)', fontSize: 12.5, color: 'var(--muted)' }}>
          <div className="mono">© 2026 MECANOVA SAS · 73 RUE DE LA MÉCANIQUE, 69003 LYON</div>
          <div className="mono">v 4.1 · 100% conforme · 🇫🇷</div>
        </div>
      </div>
      <style>{`
        .footer-h { font-family: 'Geist Mono', monospace; font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .footer-l { display: block; font-size: 13.5px; color: var(--fg); padding: 5px 0; opacity: .85; }
        .footer-l:hover { opacity: 1; color: var(--accent); }
        @media (max-width: 720px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>);

}

window.MecaSections = { Nav, Hero, FinalCTA, Footer };