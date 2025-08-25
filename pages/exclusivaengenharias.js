// C:\Users\Cliente\Documents\GitHub\synapseb2b-site\pages\exclusivaengenharias.js

import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';

export default function ExclusivaEngenhariasPage() {
  
  // Este hook executa todo o JavaScript da página original após os elementos serem renderizados.
  useEffect(() => {
    // Utilities
    const $ = (sel, root=document) => root.querySelector(sel);
    const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    // Header mobile menu
    const mobileBtn = $('#mobile-menu-btn');
    const mobileMenu = $('#mobile-menu');
    mobileBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
    });

    // Year
    const yearEl = $('#year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Segmentation filter (header buttons)
    const segBtns = $$('.seg-btn');
    const segCards = $$('.seg-card');
    segBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        segBtns.forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        const seg = btn.dataset.seg;
        segCards.forEach(card => {
          card.classList.remove('opacity-40');
          if (seg !== 'todos' && card.dataset.seg !== seg) {
            card.classList.add('opacity-40');
          }
        });
      });
    });

    // Obras filter
    const obraBtns = $$('[data-filter]');
    const obraCards = $$('.obra-card');
    obraBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.filter;
        obraBtns.forEach(b => b.classList.remove('bg-concrete/70'));
        btn.classList.add('bg-concrete/70');
        obraCards.forEach(c => {
          c.classList.remove('hidden');
          if (cat !== 'todas' && c.dataset.cat !== cat) c.classList.add('hidden');
        });
      });
    });

    // Content Hub
    const posts = [
      { id: 1, title: 'Checklist de pré-obra: do canteiro à segurança', cat: 'obras', img: 'https://images.unsplash.com/photo-1629642971489-7bba22df9402?auto=format&fit=crop&w=1200&q=70', desc: 'Itens essenciais para começar sem retrabalho.'},
      { id: 2, title: 'Como planejar uma parada de manutenção eficiente', cat: 'manutencao', img: 'https://images.unsplash.com/photo-1676537445553-8779e0b27309?auto=format&fit=crop&w=1200&q=70', desc: 'Passos práticos para reduzir tempo e custo.'},
      { id: 3, title: 'Integração entre civil e elétrica no layout', cat: 'projetos', img: 'https://images.unsplash.com/photo-1612871552811-b7d292586a0c?auto=format&fit=crop&w=1200&q=70', desc: 'Menos interfaces, mais previsibilidade.'},
      { id: 4, title: 'Energia de reserva: dimensionamento objetivo', cat: 'energia', img: 'https://images.unsplash.com/photo-1724660582276-6793ce7ba6b4?auto=format&fit=crop&w=1200&q=70', desc: 'O que considerar ao especificar geradores.'},
      { id: 5, title: 'Climatização eficiente em ambientes críticos', cat: 'projetos', img: 'https://images.unsplash.com/photo-1629642972010-e84e6066fd30?auto=format&fit=crop&w=1200&q=70', desc: 'Conforto, confiabilidade e consumo sob controle.'},
      { id: 6, title: 'Estruturas metálicas: inspeção e proteção', cat: 'obras', img: 'https://images.unsplash.com/photo-1751054554594-85de2fe63e6b?auto=format&fit=crop&w=1200&q=70', desc: 'Boas práticas para vida útil prolongada.'}
    ];

    const grid = $('#conteudo-grid');
    const renderPosts = (list) => {
      if (!grid) return;
      grid.innerHTML = '';
      list.forEach(p => {
        const card = document.createElement('article');
        card.className = 'rounded-lg border border-concrete overflow-hidden bg-white hover:shadow-md transition';
        card.innerHTML = `
          <img src="${p.img}" alt="${p.title}" class="h-36 w-full object-cover">
          <div class="p-4">
            <span class="inline-block text-xs text-steel uppercase tracking-wide">${p.cat}</span>
            <h3 class="mt-2 text-base font-semibold">${p.title}</h3>
            <p class="mt-1 text-sm text-gunmetal/80">${p.desc}</p>
            <div class="mt-3">
              <a href="#contato" class="text-sm text-brand-900 hover:underline">Ler</a>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    };

    const loadPosts = () => {
        if(grid) {
            setTimeout(() => { renderPosts(posts); }, 600);
        }
    };
    loadPosts();

    const chips = $$('.chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => { c.classList.remove('active'); c.setAttribute('aria-pressed', 'false'); });
        chip.classList.add('active'); chip.setAttribute('aria-pressed', 'true');
        const cat = chip.dataset.cat;
        const filtered = cat === 'tudo' ? posts : posts.filter(p => p.cat === cat);
        renderPosts(filtered);
      });
    });

    const searchInput = $('#search');
    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = posts.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
      renderPosts(filtered);
    });

    // Drawer (simulador)
    const drawer = $('#drawer');
    if (drawer) {
        const drawerOverlay = drawer.firstElementChild;
        const drawerPanel = drawer.children[1];
        const openButtons = $$('.open-sim').concat([$('#open-simulator-desktop'), $('#open-simulator-mobile'), $('#hero-orcar')]).filter(Boolean);

        const openDrawer = () => {
            drawer.classList.remove('hidden');
            requestAnimationFrame(() => {
                drawerOverlay.classList.remove('opacity-0');
                drawerPanel.classList.remove('translate-x-full');
            });
            document.body.style.overflow = 'hidden';
            $('#drawer-title')?.focus({ preventScroll: true });
        }
        const closeDrawer = () => {
            drawerOverlay.classList.add('opacity-0');
            drawerPanel.classList.add('translate-x-full');
            setTimeout(() => {
                drawer.classList.add('hidden');
                document.body.style.overflow = '';
            }, 200);
        }
        openButtons.forEach(btn => btn.addEventListener('click', openDrawer));
        $('#drawer-close')?.addEventListener('click', closeDrawer);
        drawerOverlay?.addEventListener('click', closeDrawer);
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !drawer.classList.contains('hidden')) closeDrawer(); });
    }

    // Calculator logic
    const calcBtn = $('#calc');
    calcBtn?.addEventListener('click', () => {
        const seg = $('#seg').value;
        const tipo = $('#tipo').value;
        const area = Math.max(10, parseFloat($('#area').value || '0'));
        const complexidade = $('#complexidade').value;
        const prazo = $('#prazo').value;
        const discs = $$('input[name="disc"]:checked').map(i => i.value);
        if (!discs.length) {
            alert('Selecione ao menos uma disciplina.');
            return;
        }
        const fmtBRL = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
        const calcValor = ({ seg, discs, tipo, area, complexidade, prazo }) => {
            const baseMap = { civil: 700, eletrica: 280, mecanica: 230, automacao: 190, clima: 260, sst: 60 };
            let base = discs.reduce((sum, d) => sum + (baseMap[d] || 0), 0);
            if (tipo === 'projeto') base *= 0.25;
            if (tipo === 'manutencao') base *= 0.18;
            if (tipo === 'epc') base *= 1.15;
            const segAdj = { industrial: 1.1, energia: 1.15, infra: 1.05, saude: 1.12, logistica: 1.0, comercial: 0.95 }[seg] || 1;
            const compAdj = { baixa: 0.9, media: 1.0, alta: 1.25 }[complexidade] || 1;
            const prazoAdj = { estendido: 0.95, normal: 1.0, urgente: 1.12 }[prazo] || 1;
            const valor = base * area * segAdj * compAdj * prazoAdj;
            return { min: valor * 0.88, max: valor * 1.12 };
        };
        
        const faixa = calcValor({ seg, discs, tipo, area, complexidade, prazo });
        $('#resultado').classList.remove('hidden');
        $('#valor').textContent = `${fmtBRL(faixa.min)} - ${fmtBRL(faixa.max)}`;
        $('#detalhe').textContent = `Base ${discs.join(', ')} • ${area} m² • ${tipo} • ${complexidade} • ${prazo}`;
    });
  }, []); // O array vazio [] garante que o script rode apenas uma vez.

  return (
    <>
      <Head>
        <title>Exclusiva Engenharias - Hub Multidisciplinar em Projetos, Obras e Manutenção</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Exclusiva Engenharias: engenharia multidisciplinar com foco em desempenho, segurança e previsibilidade. Projetos, obras e manutenção para indústria, varejo, energia, infraestrutura e saúde." />
        <meta property="og:title" content="Exclusiva Engenharias - Hub Multidisciplinar" />
        <meta property="og:description" content="Projetos, obras e manutenção com integração civil, elétrica, mecânica, automação e climatização." />
        <meta property="og:image" content="https://storage.googleapis.com/geral-publico/9497db5d-a0d7-4ae3-b3e8-a285a2afea85.png" />
        <meta name="theme-color" content="#0A3D62" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* A configuração do Tailwind e estilos são aplicados via Script para esta página específica */}
        <style>{`
          :root { color-scheme: light; }
          html, body { scroll-behavior: smooth; }
        `}</style>
      </Head>

      {/* Carrega o TailwindCSS e a sua configuração inline para esta página */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script id="tailwind-config" strategy="beforeInteractive">
        {`
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
                colors: {
                  brand: { 900: '#0A3D62', 800: '#1F5A82', 700: '#2A6E9E', 600: '#4A6B82' },
                  gunmetal: '#0F172A',
                  steel: '#94A3B8',
                  concrete: '#E5E7EB',
                },
                boxShadow: { 'focus': '0 0 0 4px rgba(31,90,130,0.25)' },
                transitionTimingFunction: { 'expo': 'cubic-bezier(0.16, 1, 0.3, 1)' }
              }
            }
          }
        `}
      </Script>

      <div className="bg-white text-gunmetal font-sans antialiased">
        {/* O conteúdo do <body> do HTML original vem aqui */}
        {/* Top Notice Bar */}
        <div className="bg-gunmetal text-white text-xs">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <p className="opacity-80">Engenharia que conecta projeto, obra e operação.</p>
            <div className="hidden sm:flex gap-6">
                <a href="#simulador" className="hover:underline focus:outline-none">Simulador</a>
                <a href="#contato" className="hover:underline focus:outline-none">Contato</a>
            </div>
            </div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-concrete">
            <div className="max-w-7xl mx-auto px-4">
            <div className="h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3" aria-label="Página inicial - Exclusiva Engenharias">
                <img src="https://storage.googleapis.com/geral-publico/9497db5d-a0d7-4ae3-b3e8-a285a2afea85.png" alt="Logotipo Exclusiva Engenharias" className="h-8 w-8" />
                <span className="sr-only">Exclusiva Engenharias</span>
                </a>
                <nav className="hidden md:flex items-center gap-6" aria-label="Principal">
                <a href="#segmentos" className="text-sm text-gunmetal/80 hover:text-brand-900 transition-colors">Segmentos</a>
                <a href="#hub-multidisciplinar" className="text-sm text-gunmetal/80 hover:text-brand-900 transition-colors">Hub</a>
                <a href="#provas-sociais" className="text-sm text-gunmetal/80 hover:text-brand-900 transition-colors">Provas</a>
                <a href="#obras" className="text-sm text-gunmetal/80 hover:text-brand-900 transition-colors">Obras</a>
                <a href="#conteudo" className="text-sm text-gunmetal/80 hover:text-brand-900 transition-colors">Conteúdo</a>
                </nav>
                <div className="flex items-center gap-3">
                <button id="open-simulator-desktop" className="hidden sm:inline-flex items-center rounded-md bg-brand-900 text-white text-sm px-4 py-2 hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-800 transition-shadow" aria-controls="simulador" aria-expanded="false">
                    Orçar
                </button>
                <button id="mobile-menu-btn" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-concrete text-gunmetal hover:bg-concrete focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-800 transition">
                    <span className="sr-only">Abrir menu</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
                </div>
            </div>
            <div id="mobile-menu" className="md:hidden hidden border-t border-concrete pb-4" role="dialog" aria-label="Menu">
                <div className="pt-2 flex flex-col gap-2">
                <a href="#segmentos" className="px-3 py-2 rounded-md text-sm hover:bg-concrete/60 transition">Segmentos</a>
                <a href="#hub-multidisciplinar" className="px-3 py-2 rounded-md text-sm hover:bg-concrete/60 transition">Hub</a>
                <a href="#provas-sociais" className="px-3 py-2 rounded-md text-sm hover:bg-concrete/60 transition">Provas</a>
                <a href="#obras" className="px-3 py-2 rounded-md text-sm hover:bg-concrete/60 transition">Obras</a>
                <a href="#conteudo" className="px-3 py-2 rounded-md text-sm hover:bg-concrete/60 transition">Conteúdo</a>
                <button id="open-simulator-mobile" className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-900 text-white text-sm px-4 py-2 hover:bg-brand-800 transition">
                    Orçar
                </button>
                </div>
            </div>
            </div>
        </header>

        {/* Hero */}
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1629642972010-e84e6066fd30?auto=format&fit=crop&w=1600&q=70" alt="Estrutura metálica de ponte sob céu azul" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4">
            <div className="py-16 sm:py-20 md:py-24">
                <h1 className="text-3xl font-semibold text-gunmetal max-w-2xl leading-tight">
                Engenharia multidisciplinar para projetos, obras e manutenção
                </h1>
                <p className="mt-4 text-base text-gunmetal/80 max-w-xl">
                Integramos civil, elétrica, mecânica, automação e climatização para entregar desempenho, segurança e previsibilidade em cada etapa.
                </p>
                <div className="mt-6 flex items-center gap-3">
                <button className="inline-flex items-center rounded-md bg-brand-900 text-white text-sm px-5 py-2.5 hover:bg-brand-800 shadow-sm hover:shadow-md transition-all ease-expo" id="hero-orcar">
                    Orçar
                </button>
                <a href="#obras" className="inline-flex items-center rounded-md border border-concrete text-gunmetal text-sm px-5 py-2.5 hover:bg-concrete/70 transition">
                    Cases
                </a>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                <div className="rounded-md bg-white/80 border border-concrete p-4 backdrop-blur">
                    <p className="text-xs text-steel uppercase tracking-wide">Foco</p>
                    <p className="mt-1 text-sm">Desempenho e confiabilidade</p>
                </div>
                <div className="rounded-md bg-white/80 border border-concrete p-4 backdrop-blur">
                    <p className="text-xs text-steel uppercase tracking-wide">Modelo</p>
                    <p className="mt-1 text-sm">Projeto → Obra → Operação</p>
                </div>
                <div className="rounded-md bg-white/80 border border-concrete p-4 backdrop-blur">
                    <p className="text-xs text-steel uppercase tracking-wide">Entrega</p>
                    <p className="mt-1 text-sm">Prazo, segurança e qualidade</p>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* O resto do conteúdo da página (seções, footer, etc.) continua aqui... */}
        {/* ... cole o restante do <body> aqui, convertendo class para className ... */}
        <section id="segmentos" className="py-16 border-t border-concrete">
            <div className="max-w-7xl mx-auto px-4">
            <header className="flex items-end justify-between">
                <div>
                <h2 className="text-2xl font-semibold">Atuamos nos principais segmentos</h2>
                <p className="mt-2 text-base text-gunmetal/80 max-w-2xl">Soluções de engenharia adequadas à realidade de cada setor, com linguagem clara e foco no resultado.</p>
                </div>
                <div className="hidden md:flex items-center gap-2">
                <button data-seg="todos" className="seg-btn text-sm px-3 py-2 rounded-md border border-concrete hover:bg-concrete/70 transition" aria-pressed="true">Todos</button>
                <button data-seg="industrial" className="seg-btn text-sm px-3 py-2 rounded-md border border-concrete hover:bg-concrete/70 transition">Industrial</button>
                <button data-seg="comercial" className="seg-btn text-sm px-3 py-2 rounded-md border border-concrete hover:bg-concrete/70 transition">Comercial</button>
                <button data-seg="energia" className="seg-btn text-sm px-3 py-2 rounded-md border border-concrete hover:bg-concrete/70 transition">Energia</button>
                <button data-seg="infra" className="seg-btn text-sm px-3 py-2 rounded-md border border-concrete hover:bg-concrete/70 transition">Infra</button>
                <button data-seg="saude" className="seg-btn text-sm px-3 py-2 rounded-md border border-concrete hover:bg-concrete/70 transition">Saúde</button>
                <button data-seg="logistica" className="seg-btn text-sm px-3 py-2 rounded-md border border-concrete hover:bg-concrete/70 transition">Logística</button>
                </div>
            </header>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Cards de Segmentos */}
                <article className="seg-card group rounded-lg border border-concrete p-5 hover:shadow-md transition" data-seg="industrial">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-900/10 text-brand-900">
                      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M4 21V9l5 3V9l5 3V9l6 3v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
                    </span>
                    <h3 className="text-base font-semibold">Indústria</h3>
                  </div>
                  <p className="mt-2 text-sm text-gunmetal/80">Adequação de plantas, utilidades, linhas e áreas classificadas com mínimo impacto produtivo.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="open-sim text-sm text-brand-900 hover:underline">Orçar</button>
                    <a href="#obras" className="text-sm text-gunmetal/80 hover:underline">Ver cases</a>
                  </div>
                </article>
                {/* Repetir para outros segmentos... */}
                 <article className="seg-card group rounded-lg border border-concrete p-5 hover:shadow-md transition" data-seg="comercial">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-900/10 text-brand-900">
                      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M4 21V7h16v14M7 7V3h10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
                    </span>
                    <h3 className="text-base font-semibold">Comercial</h3>
                  </div>
                  <p className="mt-2 text-sm text-gunmetal/80">Modernização de instalações, climatização eficiente e reformas com segurança operacional.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="open-sim text-sm text-brand-900 hover:underline">Orçar</button>
                    <a href="#obras" className="text-sm text-gunmetal/80 hover:underline">Ver cases</a>
                  </div>
                </article>
                <article className="seg-card group rounded-lg border border-concrete p-5 hover:shadow-md transition" data-seg="energia">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-900/10 text-brand-900">
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l-2 7h4l-2 7 8-11h-6l-2-3z" fill="currentColor"/></svg>
                        </span>
                        <h3 className="text-base font-semibold">Energia</h3>
                    </div>
                    <p className="mt-2 text-sm text-gunmetal/80">Subestações, painéis, geradores e eficiência energética com foco em continuidade.</p>
                    <div className="mt-4 flex items-center gap-2">
                        <button className="open-sim text-sm text-brand-900 hover:underline">Orçar</button>
                        <a href="#obras" className="text-sm text-gunmetal/80 hover:underline">Ver cases</a>
                    </div>
                </article>
                 <article className="seg-card group rounded-lg border border-concrete p-5 hover:shadow-md transition" data-seg="infra">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-900/10 text-brand-900">
                      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20h18M4 20V6l8-3 8 3v14M7 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
                    </span>
                    <h3 className="text-base font-semibold">Infraestrutura</h3>
                  </div>
                  <p className="mt-2 text-sm text-gunmetal/80">Obras civis e estruturas metálicas com controle de qualidade e segurança de ponta a ponta.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="open-sim text-sm text-brand-900 hover:underline">Orçar</button>
                    <a href="#obras" className="text-sm text-gunmetal/80 hover:underline">Ver cases</a>
                  </div>
                </article>
                 <article className="seg-card group rounded-lg border border-concrete p-5 hover:shadow-md transition" data-seg="saude">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-900/10 text-brand-900">
                      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v8M8 6h8M4 12h16v8H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
                    </span>
                    <h3 className="text-base font-semibold">Saúde</h3>
                  </div>
                  <p className="mt-2 text-sm text-gunmetal/80">Ambientes críticos com climatização, elétrica e acabamentos compatíveis às normas vigentes.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="open-sim text-sm text-brand-900 hover:underline">Orçar</button>
                    <a href="#obras" className="text-sm text-gunmetal/80 hover:underline">Ver cases</a>
                  </div>
                </article>
                 <article className="seg-card group rounded-lg border border-concrete p-5 hover:shadow-md transition" data-seg="logistica">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-900/10 text-brand-900">
                      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17h18M4 17V7h16v10M7 17l2 4h6l2-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
                    </span>
                    <h3 className="text-base font-semibold">Logística</h3>
                  </div>
                  <p className="mt-2 text-sm text-gunmetal/80">Galpões, docas e sistemas de combate a incêndio preparados para operação contínua.</p>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="open-sim text-sm text-brand-900 hover:underline">Orçar</button>
                    <a href="#obras" className="text-sm text-gunmetal/80 hover:underline">Ver cases</a>
                  </div>
                </article>

            </div>
            </div>
        </section>

        {/* E assim por diante para todas as seções... */}
         <footer className="border-t border-concrete">
            <div className="max-w-7xl mx-auto px-4 py-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <img src="https://storage.googleapis.com/geral-publico/9497db5d-a0d7-4ae3-b3e8-a285a2afea85.png" alt="Logotipo Exclusiva Engenharias" className="h-7 w-7" />
                  <p className="text-sm">Exclusiva Engenharias</p>
                </div>
                <nav className="flex flex-wrap gap-4" aria-label="Rodapé">
                  <a href="#segmentos" className="text-sm text-gunmetal/80 hover:text-brand-900">Segmentos</a>
                  <a href="#hub-multidisciplinar" className="text-sm text-gunmetal/80 hover:text-brand-900">Hub</a>
                  <a href="#provas-sociais" className="text-sm text-gunmetal/80 hover:text-brand-900">Provas</a>
                  <a href="#obras" className="text-sm text-gunmetal/80 hover:text-brand-900">Obras</a>
                  <a href="#conteudo" className="text-sm text-gunmetal/80 hover:text-brand-900">Conteúdo</a>
                  <a href="#simulador" className="text-sm text-gunmetal/80 hover:text-brand-900">Simulador</a>
                </nav>
              </div>
              <div className="mt-6 text-xs text-gunmetal/60">
                © <span id="year"></span> Exclusiva Engenharias. Todos os direitos reservados.
              </div>
            </div>
          </footer>

         {/* Drawer (Simulador) */}
          <div id="drawer" className="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
            <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity"></div>
            <div className="absolute right-0 top-0 h-full w-full sm:w-[480px] translate-x-full transition-transform">
              <div className="h-full bg-white shadow-xl flex flex-col">
                <div className="h-16 flex items-center justify-between px-4 border-b border-concrete">
                  <h2 id="drawer-title" className="text-base font-semibold">Simulador de orçamento</h2>
                  <button id="drawer-close" className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-concrete/70 transition" aria-label="Fechar simulador">
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4">
                    <form id="sim-form" className="space-y-4" aria-describedby="sim-desc">
                        {/* Conteúdo do formulário */}
                        <p id="sim-desc" className="text-xs text-gunmetal/70">Estimativa inicial. Para proposta formal, enviaremos um escopo detalhado.</p>
                        <div>
                            <label htmlFor="seg" className="block text-sm font-medium">Segmento</label>
                            <select id="seg" name="seg" className="mt-1 w-full rounded-md border border-concrete px-3 py-2 text-sm focus:outline-none focus:shadow-focus">
                                <option value="industrial">Industrial</option>
                                <option value="comercial">Comercial</option>
                                {/* ... mais opções */}
                            </select>
                        </div>
                        <div>
                            <span className="block text-sm font-medium">Disciplinas</span>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="disc" value="civil" className="accent-brand-900" /> Civil</label>
                                <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="disc" value="eletrica" className="accent-brand-900" /> Elétrica</label>
                                 {/* ... mais checkboxes */}
                            </div>
                        </div>
                        <div className="pt-2 flex items-center gap-2">
                            <button type="button" id="calc" className="inline-flex items-center rounded-md bg-brand-900 text-white text-sm px-4 py-2 hover:bg-brand-800 transition">Calcular</button>
                        </div>
                    </form>
                    <div id="resultado" className="mt-6 hidden">
                        {/* Resultados do cálculo */}
                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}