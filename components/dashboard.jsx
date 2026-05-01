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
            <svg width="26" height="26" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50.4506 0.135773C51.836 0.129853 51.836 0.129853 53.2465 0.123933C56.2931 0.112093 59.3334 0.112093 62.38 0.106173C63.4332 0.106173 64.4863 0.106173 65.5395 0.106173C71.0747 0.0943327 76.6037 0.0884126 82.1328 0.0884126C87.2543 0.0884126 92.3758 0.0765724 97.4974 0.0588122C101.923 0.0410519 106.343 0.0351318 110.768 0.0351318C113.395 0.0351318 116.028 0.0351318 118.661 0.0232916C145.127 -0.08327 145.127 -0.0832697 157.288 6.10323C160.63 8.04502 163.557 10.2414 166.441 12.7396C167.193 13.3376 167.939 13.9355 168.71 14.5512C173.474 19.2162 176.558 25.7698 178.564 31.8911C179.411 35.1176 179.687 38.1664 179.699 41.4876C179.705 42.3934 179.712 43.2932 179.718 44.2227C179.718 45.2173 179.724 46.2178 179.724 47.2123C179.73 48.2602 179.737 49.314 179.743 50.3678C179.756 53.8192 179.768 57.2706 179.774 60.7279C179.781 61.9178 179.781 63.1078 179.787 64.3036C179.799 69.2647 179.812 74.2257 179.818 79.1927C179.831 86.279 179.85 93.3713 179.887 100.464C179.912 105.46 179.925 110.457 179.925 115.459C179.925 118.437 179.937 121.415 179.956 124.393C179.975 127.199 179.981 130.011 179.969 132.817C179.969 134.321 179.987 135.83 180 137.334C179.956 145.527 177.95 152.939 173.863 160.185C169.475 166.792 163.758 172.067 156.549 175.874C148.957 179.355 141.61 179.947 133.26 179.923C132.214 179.929 131.16 179.935 130.114 179.941C127.286 179.947 124.453 179.947 121.626 179.947C119.256 179.941 116.887 179.947 114.517 179.953C108.919 179.959 103.321 179.959 97.7231 179.953C91.9684 179.947 86.2137 179.953 80.459 179.97C75.5004 179.982 70.5356 179.982 65.5771 179.982C62.6245 179.982 59.6719 179.982 56.7194 179.994C53.9361 180 51.159 180 48.3757 179.988C46.8838 179.982 45.3918 179.994 43.8998 180C36.183 179.953 29.2436 178.621 22.4044 175.151C15.7533 171.38 10.0738 166.088 6.23738 159.706C2.75197 153.383 0.250749 147.043 0.225674 139.88C0.225674 139.003 0.219408 138.127 0.213139 137.221C0.213139 136.262 0.213138 135.303 0.206869 134.315C0.206869 133.296 0.200602 132.272 0.194334 131.248C0.181796 127.891 0.175527 124.535 0.169258 121.178C0.169258 120.018 0.162988 118.863 0.162988 117.703C0.150451 112.25 0.144181 106.804 0.137913 101.352C0.131644 95.0822 0.112841 88.8128 0.0877665 82.5375C0.0689603 77.6831 0.0626897 72.8227 0.056421 67.9623C0.056421 65.0673 0.050153 62.1724 0.0376156 59.2775C0.0188094 56.5483 0.0188067 53.8132 0.0250754 51.0841C0.0250754 49.6218 0.0125374 48.1596 0 46.6973C0.043881 37.9592 1.64868 29.9967 6.05558 22.2592C7.69799 19.6721 9.47204 17.3573 11.6034 15.1077C12.0046 14.6696 12.4121 14.2374 12.8258 13.7875C18.3172 8.2167 24.9808 4.51072 32.5723 2.06572C38.6404 0.496899 44.1757 0.129853 50.4506 0.135773Z" fill="#009081"/>
              <path d="M110.176 116.069H69.6683C68.1258 116.069 66.8752 117.32 66.8752 118.862C66.8752 120.405 68.1258 121.655 69.6683 121.655H110.176C111.718 121.655 112.969 120.405 112.969 118.862C112.969 117.32 111.718 116.069 110.176 116.069Z" fill="#00FFE0"/>
              <path d="M72.3618 102.024L60.5102 86.7092C60.4793 86.6692 60.4152 86.6911 60.4152 86.7417V103.241C60.4152 105.355 58.7013 107.069 56.5871 107.069C54.4729 107.069 52.759 105.355 52.759 103.241V75.7925C52.759 74.0409 54.179 72.621 55.9306 72.621C56.8893 72.621 57.7965 73.0546 58.3986 73.8006L73.2325 92.1801C73.6374 92.6818 74.1781 93.0563 74.7902 93.2589C74.974 93.3502 75.1963 93.3051 75.33 93.1494L87.9243 78.4854C88.4144 77.9148 89.1291 77.5865 89.8813 77.5865C90.6183 77.5865 91.3202 77.9018 91.8098 78.4528L104.73 92.9949C104.919 93.2071 105.257 93.1842 105.415 92.9486L121.778 73.7517C122.39 73.0342 123.285 72.621 124.228 72.621C126.005 72.621 127.446 74.062 127.446 75.8396V103.319C127.446 105.39 125.767 107.069 123.696 107.069C121.625 107.069 119.946 105.39 119.946 103.319V87.052C119.946 86.8984 119.752 86.8309 119.657 86.9513L107.455 102.348C106.956 102.978 106.196 103.345 105.392 103.345C104.614 103.345 103.876 103.001 103.376 102.405L90.2441 86.7552C90.168 86.6644 90.0304 86.6581 89.9463 86.7417L83.8526 94.5779L77.6866 102.099C77.04 102.888 76.0739 103.345 75.054 103.345C74.0006 103.345 73.0065 102.857 72.3618 102.024Z" fill="white"/>
            </svg>
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1 }}>
              <span style={{ color: '#fff' }}>Meca</span><span style={{ color: '#0FB89A' }}>nova</span>
            </span>
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
