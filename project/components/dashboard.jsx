// Stylized dashboard mockup — inspired by the real Mecanova UI but original.
// Uses same teal/emerald accent + sidebar layout pattern.

const DashMock = ({ scale = 1, variant = 'atelier' }) => {
  const isDark = variant === 'pilote';
  const palette = isDark
    ? { bg: '#0F1614', side: '#0A100E', card: '#141C1A', line: 'rgba(255,255,255,.07)', fg: '#E8ECEA', muted: 'rgba(232,236,234,.55)', accent: '#0FB89A' }
    : { bg: '#FBFBF8', side: '#0E1411', card: '#FFFFFF', line: 'rgba(14,20,17,.08)', fg: '#0E1411', muted: 'rgba(14,20,17,.55)', accent: '#0FB89A' };

  const Stat = ({ label, value, sub, accent }) => (
    <div style={{
      background: palette.card, border: `1px solid ${palette.line}`, borderRadius: 12,
      padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 6,
    }}>
      <div style={{ fontSize: 9.5, letterSpacing: '.1em', textTransform: 'uppercase', color: palette.muted, fontFamily: 'Geist Mono, monospace' }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 500, color: palette.fg, letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ fontSize: 10.5, color: accent || palette.muted }}>{sub}</div>
    </div>
  );

  const NavItem = ({ icon, label, active }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px',
      borderRadius: 7, fontSize: 11.5,
      background: active ? 'rgba(15,184,154,.14)' : 'transparent',
      color: active ? palette.accent : 'rgba(255,255,255,.7)',
      border: active ? '1px solid rgba(15,184,154,.3)' : '1px solid transparent',
    }}>
      <span style={{ width: 14, height: 14, opacity: .9 }}>{icon}</span>
      {label}
    </div>
  );

  return (
    <div style={{
      transform: `scale(${scale})`, transformOrigin: 'top left',
      width: 880, background: palette.bg,
      borderRadius: 14, overflow: 'hidden',
      border: `1px solid ${palette.line}`,
      boxShadow: '0 30px 80px rgba(14,20,17,.18), 0 8px 24px rgba(14,20,17,.08)',
      display: 'grid', gridTemplateColumns: '188px 1fr',
      fontFamily: 'Geist, sans-serif',
    }}>
      {/* Sidebar */}
      <aside style={{ background: palette.side, padding: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 6px' }}>
            <svg width="70" height="16" viewBox="0 0 399 91" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.4524 0.068641C27.1788 0.065648 27.9183 0.0626551C32.7073 0.0536763C43.0641 0.0446975C51.1201 0.0297328C58.0783 0.0177611C62.2164 0.0117752C76.0934 -0.0420976C82.4699 3.08552C87.2687 6.4406C90.9565 9.71487C93.6254 16.1227C94.2203 20.9743C94.2335 23.8685C94.2598 30.7013C94.2828 40.0363C94.3386 58.371C94.3616 67.1463C94.3781 69.4299C94.3551 73.5721 93.3033 77.3193 91.1603 80.9827C88.8595 84.3228 85.8619 86.9895 82.082 88.9139C78.1017 90.6738 74.2495 90.9731 69.8715 90.9611C63.7711 90.9731C51.2384 90.9761C42.1865 90.985C34.3835 90.991C25.3645 90.994C23.0177 91C15.3331 90.3026 11.7471 88.5488C5.28194 83.9666 3.2704 80.7402C0.118326 70.7169C0.0886689 61.1723C0.0426247 41.3328C0.0130899 26.5216C0 24.2768C0.862459 15.1437 3.16654 11.2584C9.55136 4.14844 16.9993 1.04275C23.0177 0.065648 26.4524 0.068641Z" fill="#009081"/>
              <path d="M57.8198 58.6793H36.476C35.064 60.0914C36.476 61.5035H57.8198C59.2318 60.0914C57.8198 58.6793Z" fill="#00FFE0"/>
              <path d="M37.9284 51.5633L31.726 43.8353V52.1221C30.7783 54.1293 28.5612 54.1293 27.6626 52.1221V38.3891C28.4127 36.7137 29.3379 36.7137C30.3043 36.9335 30.6226 37.3137L38.3913 46.5948C39.214 47.1474C39.4987 47.0902L46.092 39.6881C47.1268 39.2241C47.8835 39.3861 48.1459 39.6708L54.9132 47.0149C55.2713 46.9905L64.1544 37.2159C65.2893 36.7137C66.8228 38.2472V52.1631C65.9425 54.1293 63.7707 54.1293 62.8904 52.1631V44.0094L56.3506 51.7308C55.6818 52.2465C54.4619 52.0695 54.1936 51.7612L47.3171 43.8597C47.1608 43.8525L43.9657 47.8142L40.7441 51.6032C39.8884 52.2465 39.3527 52.2465C38.275 51.9952 37.9284 51.5633Z" fill="white"/>
              <path d="M123.575 65.4926V25.1035H135.327L148.126 64.0341H143.996L156.795 25.1035H168.605V65.4926H161.158V27.5156H162.38L149.93 65.4926H141.843L129.509 27.8522H130.673V65.4926H123.575Z" fill="white"/>
              <path d="M181.197 64.1462C175.728 58.8732 173.808 51.1319 181.197 38.2299C186.239 36.3226 197.021 38.1177 203.887 50.5149C203.654 53.3197H178.346V48.3832H198.011L194.578 43.6712C186.743 41.6517 181.856 45.7654 181.139 51.2441C183.291 58.3122C189.516 60.7243C196.149 57.3025H203.072C198.127 63.6974 189.458 66.0535Z" fill="white"/>
              <path d="M214.715 64.1462C207.443 51.1319 209.363 43.5029 214.715 38.2299C225.071 36.3226 234.146 41.3713 236.59 46.8687H229.55C224.45 41.9883 215.995 46.3077 215.064 51.1319C218.671 59.2658 229.55 55.5074H236.59C229.201 64.7632 222.627 66.0535Z" fill="white"/>
              <path d="M259.973 65.4925C259.391 59.7707H259.159V46.1955C255.649 41.6517 240.774 45.2419C244.73 38.7909 266.489 46.8126V59.7707C267.304 65.4925H259.973ZM249.676 66.0535C239.902 58.0878 251.246 48.7759L260.497 47.4296V51.9173L252.468 53.0953C247.232 57.3025C251.828 60.6682C259.159 55.4513L259.973 59.7707C252.235 66.0535Z" fill="#009081"/>
              <path d="M273.914 65.4925V36.8836H281.244V65.4925H273.914ZM294.741 65.4925V47.4296C281.244 50.0661L280.488 43.2224C291.891 36.3226 302.13 45.9711V65.4925H294.741Z" fill="#009081"/>
              <path d="M314.714 64.1462C307.209 51.0758 314.714 38.2299C338.858 51.0758 331.295 64.1462C323.034 66.0535ZM323.034 60.3878C330.131 56.0123 331.179 51.0198C323.034 41.9883 314.831 51.0198C320.028 60.0138Z" fill="#009081"/>
              <path d="M351.659 65.4926L339.791 36.8837H347.703L357.186 63.1926H353.288L362.771 36.8837H370.451L358.524 65.4926H351.659Z" fill="#009081"/>
              <path d="M391.67 65.4925C391.088 59.7707H390.855V46.1955C385.561 41.6517 372.471 45.2419C376.427 38.7909 398.186 46.8126V59.7707C399 65.4925H391.67ZM381.372 66.0535C371.598 58.0878 382.943 48.7759L392.193 47.4296V51.9173L384.165 53.0953C378.929 57.3025C383.525 60.6682C390.855 55.4513L391.67 59.7707C383.932 66.0535Z" fill="#009081"/>
            </svg>
          </div>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,.35)', letterSpacing: '.12em', padding: '0 6px', marginTop: 4 }}>ATELIER</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <NavItem active label="Vue d'ensemble" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>} />
          <NavItem label="Clients" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg>} />
          <NavItem label="Rendez-vous" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>} />
          <NavItem label="Ordres de réparation" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 8h6"/></svg>} />
          <NavItem label="Pré-Contrôle CT" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3z"/></svg>} />
          <NavItem label="Gardiennage" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11l9-7 9 7v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9z"/></svg>} />
        </div>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,.35)', letterSpacing: '.12em', padding: '0 6px', marginTop: 8 }}>GESTION</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <NavItem label="Commandes & Stock" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 4h3l3 12h11l2-8H6"/></svg>} />
          <NavItem label="Factures & Devis" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3z"/></svg>} />
        </div>
      </aside>

      {/* Main */}
      <main style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 16, fontWeight: 500, color: palette.fg, letterSpacing: '-0.01em' }}>Vue d'ensemble</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ background: palette.card, border: `1px solid ${palette.line}`, borderRadius: 8, padding: '5px 10px', fontSize: 10.5, color: palette.muted, display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>
              Rechercher
            </div>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: palette.card, border: `1px solid ${palette.line}`, display: 'grid', placeItems: 'center', fontSize: 10, color: palette.muted }}>AM</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          <Stat label="Clients actifs" value="284" sub="+12% ce mois" accent={palette.accent} />
          <Stat label="RDV aujourd'hui" value="9" sub="Atelier en cours" />
          <Stat label="À encaisser" value="4 280 €" sub="3 facture(s) en attente" />
          <Stat label="Commandes actives" value="12" sub="2 articles en alerte" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 10 }}>
          {/* Prochains RDV */}
          <div style={{ background: palette.card, border: `1px solid ${palette.line}`, borderRadius: 12, padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: palette.fg }}>Prochains rendez-vous</div>
              <div style={{ fontSize: 10, color: palette.accent }}>Voir tout →</div>
            </div>
            {[
              { time: '09:30', name: 'Honda CB500F', who: 'Sophie Martin', tag: 'Révision', color: '#10b981' },
              { time: '10:45', name: 'KTM Duke 390', who: 'Emma Garcia', tag: 'Plaquettes AV', color: '#f59e0b' },
              { time: '14:15', name: 'BMW R 1250 GS', who: 'Lucas Moreau', tag: 'Pré-CT', color: '#8b5cf6' },
              { time: '16:00', name: 'Yamaha MT-07', who: 'Karim Belaid', tag: 'Pneus', color: '#ef4444' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderTop: i ? `1px solid ${palette.line}` : 'none' }}>
                <div style={{ width: 38, fontFamily: 'Geist Mono, monospace', fontSize: 10.5, color: palette.muted, fontWeight: 500 }}>{r.time}</div>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: r.color }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 11, color: palette.fg, fontWeight: 500 }}>{r.name}</div>
                  <div style={{ fontSize: 9.5, color: palette.muted }}>{r.who}</div>
                </div>
                <div style={{ fontSize: 9.5, color: palette.muted, padding: '2px 7px', border: `1px solid ${palette.line}`, borderRadius: 999 }}>{r.tag}</div>
              </div>
            ))}
          </div>

          {/* Gardiennage */}
          <div style={{ background: palette.card, border: `1px solid ${palette.line}`, borderRadius: 12, padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: palette.fg }}>Gardiennage</div>
              <div style={{ fontSize: 10, color: palette.accent }}>Voir tout →</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
              <div style={{ fontSize: 32, fontWeight: 500, color: palette.fg, letterSpacing: '-0.02em' }}>17</div>
              <div style={{ fontSize: 13, color: palette.muted }}>/ 30</div>
              <div style={{ flex: 1 }} />
              <div style={{ fontSize: 10, color: palette.muted }}>places occupées</div>
            </div>
            <div style={{ height: 6, background: palette.line, borderRadius: 3, overflow: 'hidden', marginBottom: 12 }}>
              <div style={{ width: '57%', height: '100%', background: palette.accent }} />
            </div>
            <div style={{ background: 'rgba(239,68,68,.08)', border: '1px solid rgba(239,68,68,.18)', color: '#ef4444', padding: '7px 10px', borderRadius: 7, fontSize: 10.5, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4M12 17h.01M5 21h14L12 4 5 21z"/></svg>
              3 motos en retard de récupération
            </div>
            {[
              { bike: 'Honda CB500F', name: 'Sophie Martin', days: '+24j' },
              { bike: 'KTM Duke 390',  name: 'Emma Garcia',   days: '+13j' },
              { bike: 'BMW R 1250 GS', name: 'Lucas Moreau',  days: '+6j' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ flex: 1, fontSize: 10.5, color: palette.fg }}>{r.bike}<span style={{ color: palette.muted, marginLeft: 6 }}>· {r.name}</span></div>
                <div style={{ fontSize: 10.5, color: '#ef4444', fontFamily: 'Geist Mono, monospace' }}>{r.days}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

window.DashMock = DashMock;
