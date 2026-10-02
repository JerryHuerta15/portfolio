import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Clapperboard, Mail, Megaphone, NotebookTabs } from 'lucide-react'

const portfolioUrl = 'https://jhportfolio15.my.canva.site/'

const films = [
  {
    title: 'Hopeless',
    category: 'MUSIC VIDEO',
    description: 'Shot and edited for a local artist, using a Blackmagic Mini Ursa 4K camera.',
    image: 'https://jhportfolio15.my.canva.site/_assets/video/7afb56eba5e22a72ac90f923bd00567e.jpg',
    alt: 'Frame from the Hopeless music video',
  },
  {
    title: 'The Mailman',
    category: 'SHORT FILM',
    description: 'An original short film that I wrote and directed.',
    image: 'https://jhportfolio15.my.canva.site/_assets/video/6e1c1b60c1b58eeb43efe2351bf73ff3.jpg',
    alt: 'Frame from The Mailman short film',
  },
  {
    title: 'Scone',
    category: 'SHORT-FORM VIDEO',
    description: 'A short-form edit made with CapCut, shaped around pacing and a clear visual story.',
    image: 'https://jhportfolio15.my.canva.site/_assets/video/9a309a0c0523cf80b9de67192aa9cf20.jpg',
    alt: 'Frame from the Scone short-form video',
  },
]

function WorkHeader() {
  return (
    <header className="site-header work-site-header">
      <a className="wordmark" href="/" aria-label="Jerry, home">
        <span className="wordmark-mark">JH</span>
        <span className="wordmark-name">JERRY<span className="wordmark-dot">.</span></span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="/#about">About</a>
        <a href="/#experience">Experience</a>
        <a href="/#education">Education</a>
        <a className="work-current" href="/work" aria-current="page">Work</a>
        <a className="nav-contact" href="/#contact">Let's connect <ArrowUpRight aria-hidden="true" /></a>
      </nav>
    </header>
  )
}

export function PortfolioWorkPage() {
  return (
    <main className="calling-card work-page" id="top">
      <WorkHeader />

      <section className="work-hero" aria-labelledby="work-title">
        <div className="work-hero-copy">
          <span className="section-kicker"><span className="eyebrow-line" /> SELECTED WORK · FILM / MARKETING / REAL ESTATE</span>
          <h1 id="work-title">Ideas made<br /><span>to connect.</span></h1>
        </div>
        <div className="work-hero-aside">
          <p>A selection of stories, campaigns, and creative work across film production, digital marketing, and real estate.</p>
          <a className="work-hero-link" href="#film-work">Explore selected work <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="work-index" aria-label="Work categories">
          <a href="#film-work"><Clapperboard aria-hidden="true" /> Film &amp; video</a>
          <a href="#marketing-work"><Megaphone aria-hidden="true" /> Marketing &amp; strategy</a>
          <a href="#real-estate-work"><NotebookTabs aria-hidden="true" /> Real estate</a>
        </div>
      </section>

      <section className="work-section film-work" id="film-work" aria-labelledby="film-work-title">
        <div className="work-section-heading">
          <div>
            <span className="section-kicker">ON SET, IN THE EDIT, AND EVERYWHERE BETWEEN</span>
            <h2 id="film-work-title">Film &amp; video<span>.</span></h2>
          </div>
          <p>Original short-form work, from the first idea through the final cut.</p>
        </div>
        <div className="film-grid">
          {films.map((film) => (
            <article className="film-card" key={film.title}>
              <a className="film-image" href={portfolioUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${film.title} on the original portfolio`}>
                <Image src={film.image} alt={film.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                <span className="film-image-action" aria-hidden="true"><ArrowUpRight /></span>
              </a>
              <div className="film-card-copy">
                <span className="work-category">{film.category}</span>
                <h3>{film.title}</h3>
                <p>{film.description}</p>
                <a className="work-card-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">View original portfolio <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section marketing-work" id="marketing-work" aria-labelledby="marketing-work-title">
        <div className="work-section-heading">
          <div>
            <span className="section-kicker">CLEAR STRATEGY, HUMAN STORIES</span>
            <h2 id="marketing-work-title">Marketing &amp; content<span>.</span></h2>
          </div>
          <p>Connecting the right message to the right people, across channels and formats.</p>
        </div>
        <div className="marketing-grid">
          <article className="marketing-card strategy-card">
            <div className="strategy-preview" aria-hidden="true">
              <div className="preview-topline"><span>BRIO BOWLS</span><span>CONTENT STRATEGY</span></div>
              <p className="preview-title">Fresh ideas.<br /><em>Local following.</em></p>
              <div className="strategy-channels">
                <span><b>Instagram</b><small>Entertain &amp; inform</small></span>
                <span><b>Facebook</b><small>Inform &amp; promote</small></span>
                <span><b>Website</b><small>Educate &amp; connect</small></span>
              </div>
            </div>
            <div className="marketing-card-copy">
              <span className="work-category">SOCIAL STRATEGY · NORMAN, OK</span>
              <h3>Brio Bowls</h3>
              <p>A channel-by-channel content strategy for a local smoothie and fruit bowl shop, built around consistency, community, and engagement.</p>
              <a className="work-card-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">View original portfolio <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </article>
          <article className="marketing-card newsletter-card">
            <div className="newsletter-preview" aria-hidden="true">
              <div className="newsletter-rule" />
              <span className="newsletter-label">A NOTE FROM THE CAMPAIGN DESK</span>
              <p>Good stories<br />make people<br /><em>lean in.</em></p>
              <div className="newsletter-footer"><span>EDITORIAL · PHOTOGRAPHY · DISTRIBUTION</span><Mail /></div>
            </div>
            <div className="marketing-card-copy">
              <span className="work-category">EMAIL · EDITORIAL</span>
              <h3>Newsletter campaign</h3>
              <p>Designed, wrote, and distributed a newsletter, with original photography captured for the piece.</p>
              <a className="work-card-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">View original portfolio <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="work-section real-estate-work" id="real-estate-work" aria-labelledby="real-estate-work-title">
        <div className="real-estate-card">
          <div className="property-preview" aria-hidden="true">
            <div className="property-preview-head"><span>PROPERTY MARKETING</span><span>LAWTON, OK</span></div>
            <div className="property-building"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
            <div className="property-preview-foot"><span>INVESTMENT OPPORTUNITY</span><span>MARKETING · RESEARCH · STORY</span></div>
          </div>
          <div className="real-estate-copy">
            <span className="section-kicker">PROPERTY MARKETING &amp; RESEARCH</span>
            <h2 id="real-estate-work-title">Real estate,<br /><span>with a clear story.</span></h2>
            <p>Listing collateral and supporting property analysis for an off-market multi-unit package in Lawton, Oklahoma—making the details easier to scan and the opportunity easier to understand.</p>
            <a className="work-card-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">View original portfolio <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <footer className="work-footer">
        <div>
          <span className="section-kicker">HAVE A GOOD STORY TO TELL?</span>
          <h2>Let's make<br /><span>something matter.</span></h2>
        </div>
        <a className="work-footer-link" href="/#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
        <div className="footer-bottom"><span>JERRY<span className="wordmark-dot">.</span> &nbsp;© {new Date().getFullYear()}</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  )
}

export default PortfolioWorkPage
