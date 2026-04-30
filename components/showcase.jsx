// Showcase sections — Problèmes chiffrés, Auto-RDV pneus (killer), Portail client,
// Dashboard interne, Intégrations, Onboarding 48h, Impact mesurable.
// All adapt to current variant via CSS variables.

const { Calendar: SCalendar, Key: SKey, Clipboard: SClipboard, Receipt: SReceipt,
        Users: SUsers, Spark: SSpark, Bolt: SBolt, Chart: SChart, Check: SCheck,
        ArrowRight: SArrowRight, Phone: SPhone, Paper: SPaper, Bike: SBike,
        Shield: SShield, Mail: SMail, Wrench: SWrench, Search: SSearch,
        Box: SBox, Plus: SPlus, X: SX, Logo: SLogo } = window.MecaIcons;

// ─────────────────────────────────────────────────────────────────────────────
// PROBLÈMES CHIFFRÉS — Le quotidien sans Mecanova
function Problems() {
  const items = [
    {
      icon: <SPhone size={18} />,
      q: '"Où en est ma moto ?"',
      d: "Vos clients appellent sans cesse pour connaître l'avancement. Chaque appel vous coupe de votre travail.",
      cost: '~20 min / jour',
    },
    {
      icon: <SMail size={18} />,
      q: 'E-mail Allopneu, à traiter…',
      d: "Vous recevez l'e-mail de livraison pneus. Vous appelez le client. Il ne répond pas. Vous rappelez. Vous notez dans l'agenda.",
      cost: '~45 min / commande',
    },
    {
      icon: <SPaper size={18} />,
      q: 'La paperasse quotidienne',
      d: "Devis à rédiger, factures à envoyer, relances à faire… Des heures de travail administratif à faible valeur.",
      cost: '~2 h / jour',
    },
    {
      icon: <SSearch size={18} />,
      q: '"Vous avez fait quoi exactement ?"',
      d: "Retrouver l'historique d'un client prend du temps. Factures égarées, notes perdues, e-mails introuvables.",
      cost: '~10 min / recherche',
    },
  ];

  return (
    <section id="problemes" style={{ padding: '120px 0' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <div className="eyebrow eyebrow-center" style={{ marginBottom: 18, color: 'var(--accent)', justifyContent: 'center' }}>Le quotidien sans Mecanova</div>
          <h2 style={{ marginBottom: 16 }}>
            Vous perdez du temps <span style={{ color: 'var(--muted)', textDecoration: 'line-through', textDecorationThickness: '2px' }}>tous les jours</span>.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 18, marginTop: 14 }}>
            La plupart des garages moto passent plus de <b style={{ color: 'var(--fg)', fontWeight: 500 }}>3 heures par jour</b> sur des tâches administratives qui pourraient être automatisées.
          </p>
        </div>

        <div className="problems-grid">
          {items.map((p, i) => (
            <div key={i} className="reveal card card-tilt" style={{ padding: 24, transitionDelay: `${i*0.05}s`, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'color-mix(in oklab, var(--accent) 12%, transparent)',
                color: 'var(--accent)',
                display: 'grid', placeItems: 'center',
              }}>{p.icon}</div>
              <div>
                <div style={{ fontSize: 15.5, fontWeight: 500, marginBottom: 8 }}>{p.q}</div>
                <div style={{ color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.5 }}>{p.d}</div>
              </div>
              <div className="cost-pill">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                </svg>
                {p.cost}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 36, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--muted)', fontSize: 14 }}>Tout ça <SArrowRight size={14} /></span>
          <a href="#auto-rdv" className="btn btn-primary" style={{ padding: '10px 16px', fontSize: 14 }}>
            automatisé avec Mecanova
          </a>
        </div>
      </div>

      <style>{`
        .problems-grid { display: grid; gap: 16px; grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 980px) { .problems-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .problems-grid { grid-template-columns: 1fr; } }
        .cost-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 10px; border-radius: 999px;
          background: color-mix(in oklab, var(--accent-2, #FF6B35) 14%, transparent);
          color: var(--accent-2, #FF6B35);
          font-family: 'Geist Mono', monospace; font-size: 11px; letter-spacing: .03em;
          width: fit-content; margin-top: auto;
        }
        .eyebrow-center::before { display: none; }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// KILLER FEATURE — Auto-RDV pneus (interactive 4-step flow)
function AutoRDVKiller() {
  const steps = [
    {
      id: 1,
      tag: 'allopneu.com',
      title: 'E-mail reçu',
      icon: <SMail size={16} />,
      sub: 'Allopneu ou 1001Pneus confirme la livraison des pneus commandés.',
      detail: {
        from: 'noreply@allopneu.com',
        subject: 'Votre commande #ALP-2026-4892 est livrée',
        preview: 'Bonjour, votre commande de 2 pneus Michelin Road 6 a bien été livrée à votre atelier ce matin…',
      },
    },
    {
      id: 2,
      tag: 'Analyse en 2s',
      title: 'Mecanova détecte',
      icon: <SSpark size={16} />,
      sub: "Le système parse automatiquement l'e-mail et identifie le client concerné par la commande.",
      detail: {
        match: { client: 'Sophie Lambert', moto: 'Honda CB500F', cmd: 'Michelin Road 6 — 120/70 + 180/55' },
      },
    },
    {
      id: 3,
      tag: 'Mail automatique',
      title: 'Mail envoyé au client',
      icon: <SMail size={16} />,
      sub: "Le client reçoit un mail personnalisé l'invitant à réserver son créneau de pose.",
      detail: {
        sms: "Bonjour Sophie 👋 Vos pneus Michelin Road 6 sont arrivés à l'atelier. Réservez votre créneau de pose en 2 clics : meca.no/r/k4j2",
      },
    },
    {
      id: 4,
      tag: 'Agenda mis à jour',
      title: 'RDV réservé',
      icon: <SCalendar size={16} />,
      sub: "Le client choisit son créneau depuis son portail. L'agenda atelier se met à jour, vous êtes prévenu.",
      detail: {
        slot: { day: 'Jeudi 30 avril', time: '10:30 — 11:30', tech: 'Tech : Marc' },
      },
    },
  ];

  const [active, setActive] = React.useState(1);

  // Auto-cycle
  React.useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a % 4) + 1);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const cur = steps[active - 1];

  return (
    <section id="auto-rdv" style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(900px 500px at 80% 30%, color-mix(in oklab, var(--accent) 8%, transparent), transparent 70%)',
      }} />
      <div className="container" style={{ position: 'relative' }}>

        <div className="auto-grid">
          {/* LEFT — pitch */}
          <div className="reveal">
            <div className="chip" style={{ marginBottom: 22 }}>
              <span className="dot" /> Automatisation
            </div>
            <h2 style={{ marginBottom: 18 }}>
              Vos pneus livrés. <br/>
              Le RDV pris <span style={{ color: 'var(--accent)' }}>automatiquement.</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 17, marginBottom: 22, maxWidth: 480 }}>
              Mecanova se branche sur vos e-mails Allopneu et 1001Pneus. Dès qu'une livraison est confirmée, un mail part automatiquement au client pour qu'il réserve son créneau de pose. <b style={{ color: 'var(--fg)', fontWeight: 500 }}>Zéro action de votre part.</b>
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Fonctionne avec Allopneu, 1001Pneus & vos boîtes mail',
                'Personnalisation du message mail envoyé',
                "Le RDV apparaît directement dans votre agenda",
                'Relance automatique si le client ne répond pas',
              ].map((x, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5 }}>
                  <span style={{ color: 'var(--accent)', marginTop: 4 }}>
                    <SCheck size={14} stroke={2.4} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>

            <a href="features.html" className="btn btn-ghost" style={{ paddingLeft: 0, border: 'none', color: 'var(--accent)' }}>
              Voir toutes les automatisations <SArrowRight size={14} />
            </a>
          </div>

          {/* RIGHT — interactive 4-step timeline */}
          <div className="reveal reveal-delay-1">
            <div className="auto-stack">
              {steps.map((s) => (
                <button
                  key={s.id}
                  className="auto-card"
                  data-active={active === s.id}
                  onClick={() => setActive(s.id)}
                >
                  <div className="auto-card-num">{String(s.id).padStart(2, '0')}</div>
                  <div className="auto-card-icon">{s.icon}</div>
                  <div className="auto-card-body">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                      <span style={{ fontWeight: 500, fontSize: 14.5 }}>{s.title}</span>
                      <span className="auto-card-tag">{s.tag}</span>
                    </div>
                    <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4, lineHeight: 1.45 }}>
                      {s.sub}
                    </div>

                    {/* expanded detail when active */}
                    {active === s.id && (
                      <div className="auto-detail">
                        {s.id === 1 && (
                          <div>
                            <div style={{ fontSize: 11.5, color: 'var(--muted)', fontFamily: 'Geist Mono, monospace' }}>
                              De · {s.detail.from}
                            </div>
                            <div style={{ fontWeight: 500, fontSize: 13, margin: '4px 0 4px' }}>{s.detail.subject}</div>
                            <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.5 }}>{s.detail.preview}</div>
                          </div>
                        )}
                        {s.id === 2 && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12.5 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span style={{ color: 'var(--muted)' }}>Client identifié</span>
                              <span style={{ fontWeight: 500 }}>{s.detail.match.client}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span style={{ color: 'var(--muted)' }}>Moto</span>
                              <span style={{ fontWeight: 500 }}>{s.detail.match.moto}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                              <span style={{ color: 'var(--muted)' }}>Commande</span>
                              <span style={{ fontWeight: 500, textAlign: 'right' }}>{s.detail.match.cmd}</span>
                            </div>
                          </div>
                        )}
                        {s.id === 3 && (
                          <div className="mail-bubble">{s.detail.sms}</div>
                        )}
                        {s.id === 4 && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                            <div style={{ width: 36, height: 36, borderRadius: 9, background: 'color-mix(in oklab, var(--accent) 15%, transparent)', color: 'var(--accent)', display: 'grid', placeItems: 'center' }}>
                              <SCalendar size={16} />
                            </div>
                            <div>
                              <div style={{ fontWeight: 500 }}>{s.detail.slot.day} · {s.detail.slot.time}</div>
                              <div style={{ color: 'var(--muted)', fontSize: 12 }}>{s.detail.slot.tech}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* time saved card */}
            <div className="auto-saved">
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>
                Temps économisé
              </div>
              <div style={{ fontSize: 38, fontWeight: 500, color: 'var(--accent)', letterSpacing: '-0.02em', marginTop: 6, lineHeight: 1 }}>
                ~45 min
              </div>
              <div style={{ color: 'rgba(255,255,255,.65)', fontSize: 13.5, marginTop: 4 }}>
                par commande pneu traitée
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .auto-grid { display: grid; grid-template-columns: 1fr 1.05fr; gap: 56px; align-items: start; }
        @media (max-width: 980px) { .auto-grid { grid-template-columns: 1fr; gap: 32px; } }

        .auto-stack { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }

        .auto-card {
          appearance: none; text-align: left;
          background: var(--card); border: 1px solid var(--line); border-radius: 14px;
          padding: 14px 16px; display: grid;
          grid-template-columns: 28px 36px 1fr; gap: 14px; align-items: start;
          font-family: inherit; color: var(--fg); cursor: default;
          transition: border-color .25s ease, background .25s ease, box-shadow .25s ease;
          position: relative;
        }
        .auto-card[data-active="true"] {
          border-color: color-mix(in oklab, var(--accent) 50%, transparent);
          background: color-mix(in oklab, var(--accent) 5%, var(--card));
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--accent) 8%, transparent);
        }
        .auto-card:hover { border-color: color-mix(in oklab, var(--accent) 25%, var(--line)); }
        .auto-card-num {
          font-family: 'Geist Mono', monospace; font-size: 11px;
          color: var(--muted); letter-spacing: .08em;
          align-self: flex-start; padding-top: 2px;
        }
        .auto-card[data-active="true"] .auto-card-num { color: var(--accent); }
        .auto-card-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: color-mix(in oklab, var(--accent) 12%, transparent);
          color: var(--accent);
          display: grid; place-items: center;
          align-self: flex-start;
        }
        .auto-card-body { min-width: 0; }
        .auto-card-tag {
          font-family: 'Geist Mono', monospace; font-size: 10.5px;
          color: var(--muted); padding: 3px 8px; border-radius: 999px;
          background: color-mix(in oklab, var(--fg) 5%, transparent);
          white-space: nowrap; flex-shrink: 0;
        }
        .auto-card[data-active="true"] .auto-card-tag {
          color: var(--accent);
          background: color-mix(in oklab, var(--accent) 14%, transparent);
        }
        .auto-detail {
          margin-top: 12px; padding: 12px 14px;
          border: 1px solid var(--line); border-radius: 10px;
          background: color-mix(in oklab, var(--bg) 50%, transparent);
        }
        .mail-bubble {
          background: color-mix(in oklab, var(--accent) 14%, transparent);
          border: 1px solid color-mix(in oklab, var(--accent) 25%, transparent);
          padding: 11px 14px; border-radius: 14px 14px 14px 4px;
          font-size: 13px; line-height: 1.5; color: var(--fg);
          max-width: 90%;
        }
        .auto-saved {
          background: #0E1411; color: #fff;
          border-radius: 14px; padding: 22px 24px;
          border: 1px solid rgba(255,255,255,.08);
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURES GRID — same as before, refined
function FeaturesGrid() {
  const items = [
    { icon: <SCalendar size={18} />, t: "Prise de RDV automatisée",  d: "Vos clients réservent en ligne 24h/24. Rappels SMS automatiques. Plus de no-show.", tag: "Agenda" },
    { icon: <SSpark size={18} />,    t: "Relances intelligentes",     d: "Relance automatique pour révision à venir, contrôle technique, rappel pneus usés. Le bon message au bon moment.", tag: "Automatisation" },
    { icon: <SReceipt size={18} />,  t: "Génération de documents",    d: "Devis, ordres de réparation, factures PDF générés en un clic. Signature électronique incluse.", tag: "Documents" },
    { icon: <SBox size={18} />,      t: "Suivi des commandes pneus",  d: "Centralisation des commandes Allopneu, 1001Pneus et autres fournisseurs. Stock en temps réel.", tag: "Stock" },
    { icon: <SUsers size={18} />,    t: "Gestion client complète",    d: "Fiche client, historique des motos, notes internes, préférences. Retrouvez tout en quelques secondes.", tag: "CRM" },
    { icon: <SBolt size={18} />,     t: "Alertes personnalisées",     d: "Stock critique, moto prête, révision dépassée… Vous et vos clients êtes toujours informés.", tag: "Notifications" },
    { icon: <SReceipt size={18} />,  t: "Facturation & encaissement", d: "Créez, envoyez et suivez vos factures. Lien de paiement en ligne intégré. Conforme 2026.", tag: "Facturation" },
    { icon: <SChart size={18} />,    t: "Tableaux de bord",           d: "CA, interventions, performance par technicien, taux de retour. Pilotez avec les bons chiffres.", tag: "Analytique" },
  ];

  // tag colors — soft pastel chips per tag
  const tagColors = {
    Agenda: ['rgba(15,184,154,.14)', '#0FB89A'],
    Automatisation: ['rgba(59,130,246,.14)', '#3B82F6'],
    Documents: ['rgba(34,197,94,.14)', '#16A34A'],
    Stock: ['rgba(168,85,247,.14)', '#9333EA'],
    CRM: ['rgba(249,115,22,.14)', '#EA580C'],
    Notifications: ['rgba(234,179,8,.14)', '#CA8A04'],
    Facturation: ['rgba(20,184,166,.14)', '#0D9488'],
    Analytique: ['rgba(236,72,153,.14)', '#DB2777'],
  };

  React.useEffect(() => {
    if (window._initTilt) window._initTilt();
    if (window._initCounters) window._initCounters();
  });

  return (
    <section id="features" style={{ padding: '120px 0' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <div className="eyebrow eyebrow-center" style={{ marginBottom: 18, color: 'var(--accent)', justifyContent: 'center' }}>Tout ce qu'il vous faut</div>
          <h2 style={{ marginBottom: 16 }}>Un seul outil. <span style={{ color: 'var(--muted)' }}>Tout dedans.</span></h2>
          <p style={{ color: 'var(--muted)', fontSize: 18 }}>
            Fini les 5 logiciels qui ne se parlent pas. Mecanova centralise tout ce dont vous avez besoin pour gérer votre garage moto au quotidien.
          </p>
        </div>

        <div className="features-grid">
          {items.map((it, i) => {
            const [bg, fg] = tagColors[it.tag] || ['rgba(0,0,0,.06)', 'var(--fg)'];
            return (
              <div key={i} className="reveal card feature-card card-tilt" style={{ padding: 28, transitionDelay: `${i * 0.04}s` }}>
                <div style={{ display: 'inline-flex', padding: '4px 10px', borderRadius: 999, background: bg, color: fg, fontSize: 11, fontWeight: 500, fontFamily: 'Geist Mono, monospace', letterSpacing: '.02em', marginBottom: 20 }}>
                  {it.tag}
                </div>
                <div style={{ width: 40, height: 40, borderRadius: 11, background: bg, color: fg, display: 'grid', placeItems: 'center', marginBottom: 18 }}>
                  {it.icon}
                </div>
                <div style={{ fontSize: 15.5, fontWeight: 500, marginBottom: 8, lineHeight: 1.3 }}>{it.t}</div>
                <p style={{ color: 'var(--muted)', fontSize: 13.5, margin: 0, lineHeight: 1.6 }}>{it.d}</p>
              </div>
            );
          })}
        </div>

        <div className="reveal" style={{ marginTop: 32, textAlign: 'center' }}>
          <a className="btn btn-ghost" href="features.html">
            Voir tout en détail <SArrowRight size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .features-grid { display: grid; gap: 20px; grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 1100px) { .features-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 820px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .features-grid { grid-template-columns: 1fr; } }
        .feature-card { transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease; }
        .feature-card:hover { transform: translateY(-3px); border-color: color-mix(in oklab, var(--accent) 30%, var(--line)); }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PORTAIL CLIENT — mockup mobile + bénéfices
function PortailClient() {
  const benefits = [
    { icon: <SPlus size={16} />, t: "Enregistrement de la moto", d: "Le client ajoute ses motos : marque, modèle, plaque, kilométrage. Tout centralisé." },
    { icon: <SCalendar size={16} />, t: "Prise de RDV en ligne", d: "Choix du créneau, du type d'intervention. Confirmation immédiate par SMS." },
    { icon: <SClipboard size={16} />, t: "Historique complet", d: "Chaque intervention, révision et contrôle est consultable par le client." },
    { icon: <SReceipt size={16} />, t: "Factures accessibles", d: "Téléchargement PDF, historique complet, zéro appel pour retrouver un document." },
    { icon: <SBolt size={16} />, t: "Notifications & rappels", d: "Rappel de révision, contrôle technique, moto prête. Automatique." },
    { icon: <SShield size={16} />, t: "Espace sécurisé", d: "Connexion par compte personnel. Données chiffrées et conformes RGPD." },
  ];

  return (
    <section id="portail" style={{ padding: '120px 0', background: 'color-mix(in oklab, var(--fg) 3%, transparent)' }}>
      <div className="container">
        <div className="portail-grid">
          {/* mockup phone */}
          <div className="reveal portail-phone-wrap">
            <PhonePortail />
          </div>

          {/* content */}
          <div className="reveal reveal-delay-1">
            <div className="chip" style={{ marginBottom: 22 }}>
              <span className="dot" /> Portail client
            </div>
            <h2 style={{ marginBottom: 18 }}>
              Vos clients ont leur <span style={{ color: 'var(--accent)' }}>espace perso.</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 17, marginBottom: 32, maxWidth: 480 }}>
              Chaque client accède depuis son smartphone à l'historique complet de sa moto, ses factures, et peut prendre rendez-vous en quelques secondes — sans vous appeler.
            </p>

            <div className="portail-benefits">
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                    background: 'color-mix(in oklab, var(--accent) 12%, transparent)',
                    color: 'var(--accent)', display: 'grid', placeItems: 'center',
                  }}>{b.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 3 }}>{b.t}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.5 }}>{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .portail-grid { display: grid; grid-template-columns: 380px 1fr; gap: 64px; align-items: center; }
        @media (max-width: 900px) { .portail-grid { grid-template-columns: 1fr; gap: 40px; } .portail-phone-wrap { display: flex; justify-content: center; } }
        .portail-benefits { display: grid; grid-template-columns: 1fr 1fr; gap: 22px 28px; }
        @media (max-width: 540px) { .portail-benefits { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function PhonePortail() {
  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div style={{ padding: '46px 18px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, fontWeight: 500, color: '#0E1411' }}>9:41</span>
          <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 11, color: '#0E1411' }}>● ● ●</span>
        </div>
        <div style={{ padding: '4px 18px 18px', color: '#0E1411' }}>
          <div style={{ fontSize: 13, color: 'rgba(14,20,17,.55)', marginBottom: 2 }}>Bonjour,</div>
          <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 18 }}>Sophie Lambert</div>

          {/* moto card */}
          <div style={{
            background: '#0E1411', color: '#fff', borderRadius: 14, padding: 16, marginBottom: 14, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '.1em', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', marginBottom: 6 }}>Ma moto</div>
            <div style={{ fontSize: 18, fontWeight: 500 }}>Honda CB500F</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.6)', marginBottom: 14 }}>AB-123-CD · 2022 · 12 480 km</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(15,184,154,.2)', color: '#0FB89A', padding: '4px 9px', borderRadius: 999, fontSize: 10.5, fontWeight: 500 }}>✓ CT à jour</span>
              <span style={{ background: 'rgba(255,107,53,.18)', color: '#FF6B35', padding: '4px 9px', borderRadius: 999, fontSize: 10.5, fontWeight: 500 }}>! Vidange bientôt</span>
            </div>
          </div>

          {/* prochain RDV */}
          <div style={{
            border: '1px solid rgba(255,107,53,.25)',
            background: 'rgba(255,107,53,.08)',
            borderRadius: 14, padding: 14, marginBottom: 14,
          }}>
            <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '.1em', color: '#C2410C', textTransform: 'uppercase', marginBottom: 4 }}>Prochain rendez-vous</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#0E1411', marginBottom: 2 }}>Jeu. 30 avr · 10h30</div>
            <div style={{ fontSize: 12, color: 'rgba(14,20,17,.55)' }}>Pose pneus Michelin Road 6</div>
          </div>

          {/* actions grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { l: 'Prendre RDV', icon: <SCalendar size={14} /> },
              { l: 'Factures', icon: <SReceipt size={14} /> },
              { l: 'Historique', icon: <SClipboard size={14} /> },
              { l: 'Contact', icon: <SPhone size={14} /> },
            ].map((b, i) => (
              <button key={i} style={{
                background: '#fff', border: '1px solid rgba(14,20,17,.08)',
                borderRadius: 11, padding: '11px 12px', fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', gap: 8, color: '#0E1411',
                fontSize: 12.5, fontWeight: 500, cursor: 'default',
              }}>
                <span style={{ color: '#0FB89A' }}>{b.icon}</span> {b.l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* notification toast */}
      <div className="phone-toast">
        <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(15,184,154,.18)', color: '#0FB89A', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <SCheck size={14} stroke={2.4} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#0E1411' }}>Moto prête ✓</div>
          <div style={{ fontSize: 10.5, color: 'rgba(14,20,17,.55)' }}>Votre CB500F est disponible</div>
        </div>
      </div>

      <style>{`
        .phone-frame {
          position: relative;
          width: 280px; height: 580px;
          background: #0E1411; border-radius: 44px;
          padding: 8px;
          box-shadow: 0 30px 80px rgba(14,20,17,.18), 0 8px 24px rgba(14,20,17,.08), inset 0 0 0 1px rgba(255,255,255,.04);
          margin: 0 auto;
        }
        .phone-screen {
          width: 100%; height: 100%;
          background: #FBFAF7; border-radius: 36px;
          overflow: hidden; position: relative;
        }
        .phone-notch {
          position: absolute; top: 12px; left: 50%; transform: translateX(-50%);
          width: 100px; height: 26px; background: #0E1411; border-radius: 999px;
          z-index: 10;
        }
        .phone-toast {
          position: absolute; top: 220px; right: -36px;
          background: #fff; border: 1px solid rgba(14,20,17,.07);
          border-radius: 12px; padding: 9px 12px;
          box-shadow: 0 12px 32px rgba(14,20,17,.18);
          display: flex; align-items: center; gap: 10px;
          width: 188px;
          animation: floaty 4s ease-in-out infinite;
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        [data-anim="off"] .phone-toast { animation: none; }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DASHBOARD INTERNE — cockpit
function DashboardInterne() {
  const benefits = [
    { icon: <SClipboard size={15} />, t: "Suivi temps réel", d: "Chaque moto, chaque intervention, chaque technicien — tracés en direct." },
    { icon: <SBox size={15} />, t: "Commandes centralisées", d: "Pneus, pièces, consommables. Un seul endroit pour tout commander et suivre." },
    { icon: <SReceipt size={15} />, t: "Documents en 1 clic", d: "Devis, OR, factures PDF générés automatiquement depuis la fiche intervention." },
    { icon: <SSpark size={15} />, t: "Automatisations", d: "Rappels, relances, alertes stock. Votre assistant qui ne dort jamais." },
    { icon: <SUsers size={15} />, t: "CRM client intégré", d: "Historique, notes, préférences, relances programmées. Fidélisez sans effort." },
    { icon: <SChart size={15} />, t: "Reporting complet", d: "CA, marges, performance par technicien. Les chiffres qui font grandir." },
  ];

  React.useEffect(() => {
    if (window._initTilt) window._initTilt();
    if (window._initCounters) window._initCounters();
  });

  return (
    <section id="dashboard" style={{ padding: '120px 0', background: '#0A0F0D', color: '#F2F4F2' }}>
      <div className="container">
        <div className="dash-grid">
          <div className="reveal">
            <div className="chip" style={{
              marginBottom: 22,
              background: 'rgba(15,184,154,.14)',
              borderColor: 'rgba(15,184,154,.32)',
            }}>
              <span className="dot" /> Dashboard interne
            </div>
            <h2 style={{ marginBottom: 18, color: '#F2F4F2' }}>
              Votre cockpit. <br/>
              <span style={{ color: 'var(--accent)' }}>Tout sous contrôle.</span>
            </h2>
            <p style={{ color: 'rgba(242,244,242,.62)', fontSize: 17, marginBottom: 32, maxWidth: 480 }}>
              Derrière le portail client, Mecanova vous offre un outil de gestion interne complet : suivi des interventions, commandes, facturation, CRM et automatisations — tout dans un seul dashboard.
            </p>

            <div className="dash-benefits">
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 9, flexShrink: 0,
                    background: 'rgba(15,184,154,.14)',
                    color: '#0FB89A', display: 'grid', placeItems: 'center',
                  }}>{b.icon}</div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 500, marginBottom: 3, color: '#F2F4F2' }}>{b.t}</div>
                    <div style={{ fontSize: 12, color: 'rgba(242,244,242,.55)', lineHeight: 1.5 }}>{b.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#demo" className="btn btn-primary" style={{ marginTop: 32, padding: '12px 18px', fontSize: 14 }}>
              Voir le dashboard en démo <SArrowRight size={14} />
            </a>
          </div>

          {/* mock dashboard */}
          <div className="reveal reveal-delay-1">
            <DashCockpitMock />
          </div>
        </div>
      </div>

      <style>{`
        .dash-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 56px; align-items: center; }
        @media (max-width: 980px) { .dash-grid { grid-template-columns: 1fr; gap: 32px; } }
        .dash-benefits { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 28px; }
        @media (max-width: 540px) { .dash-benefits { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function DashCockpitMock() {
  const palette = { bg: '#0F1614', card: '#141C1A', line: 'rgba(255,255,255,.07)', fg: '#E8ECEA', muted: 'rgba(232,236,234,.55)', accent: '#0FB89A' };
  return (
    <div style={{
      background: palette.bg, border: `1px solid ${palette.line}`,
      borderRadius: 14, overflow: 'hidden',
      boxShadow: '0 30px 80px rgba(0,0,0,.4)',
    }}>
      {/* window chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 14px', background: '#0A100E', borderBottom: `1px solid ${palette.line}` }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ flex: 1, textAlign: 'center', fontFamily: 'Geist Mono, monospace', fontSize: 11, color: palette.muted }}>
          Dashboard — Atelier Moto Lyon 3
        </span>
      </div>

      <div style={{ padding: 18 }}>
        {/* stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 14 }}>
          {[
            { l: "RDV aujourd'hui", v: '8', s: '+2 vs hier' },
            { l: "En atelier", v: '12', s: '3 urgents' },
            { l: "CA mois", v: '18 K€', s: '+12%', accent: true },
          ].map((s, i) => (
            <div key={i} style={{ background: palette.card, border: `1px solid ${palette.line}`, borderRadius: 10, padding: '11px 12px' }}>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase', color: palette.muted, marginBottom: 4 }}>{s.l}</div>
              <div style={{ fontSize: 22, fontWeight: 500, color: palette.fg, letterSpacing: '-0.02em' }}>{s.v}</div>
              <div style={{ fontSize: 10.5, color: s.accent ? palette.accent : palette.muted, marginTop: 2 }}>{s.s}</div>
            </div>
          ))}
        </div>

        {/* clients à relancer */}
        <div style={{ background: palette.card, border: `1px solid ${palette.line}`, borderRadius: 10, padding: 14, marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Clients à relancer</div>
            <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: palette.accent, padding: '2px 7px', borderRadius: 999, background: 'rgba(15,184,154,.14)' }}>4 en attente</span>
          </div>
          {[
            { n: 'M. Dupont', m: 'MT-07 · Révision 12 000 km', t: 'il y a 3 mois' },
            { n: 'Mme Martin', m: 'CB500 · Pneus usés', t: 'il y a 6 sem.' },
            { n: 'M. Bernard', m: 'R1 · CT à prévoir', t: 'dans 2 mois' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: i > 0 ? `1px solid ${palette.line}` : 'none' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(15,184,154,.18)', color: palette.accent, display: 'grid', placeItems: 'center', fontFamily: 'Geist Mono, monospace', fontSize: 10, fontWeight: 500 }}>
                {r.n.split(' ').slice(-1)[0][0]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500 }}>{r.n}</div>
                <div style={{ fontSize: 10.5, color: palette.muted }}>{r.m}</div>
              </div>
              <div style={{ fontSize: 10, color: palette.muted, fontFamily: 'Geist Mono, monospace' }}>{r.t}</div>
              <button style={{ background: 'rgba(15,184,154,.18)', color: palette.accent, border: '1px solid rgba(15,184,154,.32)', padding: '4px 10px', borderRadius: 999, fontFamily: 'inherit', fontSize: 10.5, fontWeight: 500, cursor: 'default' }}>
                Relancer
              </button>
            </div>
          ))}
        </div>

        {/* facture line */}
        <div style={{ background: palette.card, border: `1px solid ${palette.line}`, borderRadius: 10, padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(15,184,154,.14)', color: palette.accent, display: 'grid', placeItems: 'center' }}>
            <SReceipt size={14} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Facture #2026-089 générée</div>
            <div style={{ fontSize: 10.5, color: palette.muted }}>Dupont · Yamaha MT-07 · 385 €</div>
          </div>
          <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, color: palette.accent, padding: '3px 8px', borderRadius: 999, background: 'rgba(15,184,154,.14)' }}>Envoyée ✓</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INTÉGRATIONS — bandeau Allopneu/1001Pneus + ouverture
function Integrations() {
  return (
    <section style={{ padding: '64px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
          <div className="eyebrow eyebrow-center" style={{ color: 'var(--accent)', justifyContent: 'center' }}>Intégrations</div>
        </div>
        <div className="reveal integrations-row">
          <IntegrationLogo name="Allopneu" sub="Intégration native" native />
          <IntegrationLogo name="1001Pneus" sub="Intégration native" native />
          <IntegrationLogo name="Boîte mail" sub="Compatible IMAP" />
          <IntegrationLogo name="Comptabilité" sub="Export FEC / Sage" />
        </div>
        <div className="reveal" style={{ textAlign: 'center', marginTop: 22, color: 'var(--muted)', fontSize: 13.5 }}>
          Et tous vos autres fournisseurs par e-mail — Mecanova lit, comprend, agit.
        </div>
      </div>
      <style>{`
        .integrations-row {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
        }
        @media (max-width: 900px) { .integrations-row { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .integrations-row { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </section>
  );
}

function IntegrationLogo({ name, sub, native }) {
  return (
    <div style={{
      padding: '16px 14px', textAlign: 'center',
      borderRadius: 12, border: '1px solid var(--line)',
      background: native ? 'color-mix(in oklab, var(--accent) 5%, var(--card))' : 'var(--card)',
    }}>
      <div style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--fg)', marginBottom: 3 }}>{name}</div>
      <div style={{
        fontFamily: 'Geist Mono, monospace', fontSize: 10,
        letterSpacing: '.04em',
        color: native ? 'var(--accent)' : 'var(--muted)',
      }}>
        {native && '● '}{sub}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ONBOARDING — Opérationnel en 48h
function Onboarding() {
  const steps = [
    {
      icon: <SBox size={20} />,
      t: "Import de vos données",
      d: "Notre équipe migre votre fichier clients, l'historique des motos et vos données existantes. Aucune saisie manuelle.",
      pill: "Migration en 24h",
    },
    {
      icon: <SSpark size={20} />,
      t: "Configuration à vos couleurs",
      d: "Logo, couleurs, services proposés, techniciens, horaires. Votre Mecanova ressemble à votre garage.",
      pill: "Personnalisation complète",
    },
    {
      icon: <SBolt size={20} />,
      t: "Lancement & formation",
      d: "Vos clients reçoivent une invitation à créer leur compte. Vous êtes formé en 1h. Vous êtes en production.",
      pill: "Opérationnel en 48h",
    },
  ];

  return (
    <section style={{ padding: '120px 0' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <div className="eyebrow eyebrow-center" style={{ color: 'var(--accent)', justifyContent: 'center', marginBottom: 18 }}>Mise en place</div>
          <h2 style={{ marginBottom: 16 }}>Opérationnel en 48h.</h2>
          <p style={{ color: 'var(--muted)', fontSize: 18 }}>
            Notre équipe s'occupe de tout. Vous n'avez rien à configurer.
          </p>
        </div>

        <div className="onboarding-grid">
          {steps.map((s, i) => (
            <div key={i} className="reveal card onb-card card-tilt" style={{ padding: 28, transitionDelay: `${i*0.08}s`, position: 'relative' }}>
              <div className="onb-num">{String(i+1).padStart(2, '0')}</div>
              <div style={{
                width: 44, height: 44, borderRadius: 11,
                background: '#0E1411', color: 'var(--accent)',
                display: 'grid', placeItems: 'center', marginBottom: 18,
              }}>{s.icon}</div>
              <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{s.t}</div>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.55, margin: 0, marginBottom: 16 }}>{s.d}</p>
              <div className="onb-pill">
                <SCheck size={11} stroke={2.4} /> {s.pill}
              </div>
              {i < steps.length - 1 && (
                <div className="onb-arrow"><SArrowRight size={18} /></div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#demo" className="btn btn-dark" style={{ padding: '13px 20px', fontSize: 14 }}>
            Démarrer maintenant <SArrowRight size={14} />
          </a>
          <div style={{ marginTop: 12, color: 'var(--muted)', fontSize: 12.5 }}>
            Migration incluse · Support dédié
          </div>
        </div>
      </div>

      <style>{`
        .onboarding-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 900px) { .onboarding-grid { grid-template-columns: 1fr; } }
        .onb-card { transition: transform .25s ease, box-shadow .25s ease; }
        .onb-card:hover { transform: translateY(-3px); box-shadow: 0 1px 2px rgba(14,20,17,.04), 0 16px 40px rgba(14,20,17,.08); }
        .onb-num {
          position: absolute; top: 24px; right: 24px;
          font-family: 'Geist Mono', monospace;
          font-size: 36px; font-weight: 300;
          color: color-mix(in oklab, var(--fg) 8%, transparent);
          letter-spacing: -0.02em;
        }
        .onb-pill {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 5px 11px; border-radius: 999px;
          background: color-mix(in oklab, var(--accent) 12%, transparent);
          color: var(--accent);
          font-family: 'Geist Mono', monospace; font-size: 11px;
          letter-spacing: .02em; font-weight: 500;
        }
        .onb-arrow {
          position: absolute; right: -22px; top: 50%; transform: translateY(-50%);
          width: 36px; height: 36px; border-radius: 50%;
          background: var(--bg); border: 1px solid var(--line);
          display: grid; place-items: center; color: var(--muted);
          z-index: 2;
        }
        @media (max-width: 900px) { .onb-arrow { display: none; } }
      `}</style>
    </section>
  );
}

window.MecaShowcase = { Problems, AutoRDVKiller, FeaturesGrid, PortailClient, DashboardInterne, Integrations, Onboarding };
