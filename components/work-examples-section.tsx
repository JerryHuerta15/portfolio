import ArrowUpRight from 'lucide-react'

const portfolioUrl = 'https://jhportfolio15.my.canva.site/'

const workExamples = [
  {
    number: '01',
    category: 'FILM · MUSIC VIDEO',
    title: 'Hopeless',
    description: 'Shot and edited a music video for a local artist, working with a Blackmagic URSA Mini Pro 4K.',
    image: 'https://jhportfolio15.my.canva.site/_assets/video/7afb56eba5e22a72ac90f923bd00567e.jpg',
    imageAlt: 'Preview still from the Hopeless music video',
    visual: 'work-card--film',
  },
  {
    number: '02',
    category: 'FILM · SHORT',
    title: 'The Mailman',
    description: 'A short film project with writing and directing across the production process.',
    image: 'https://jhportfolio15.my.canva.site/_assets/video/6e1c1b60c1b58eeb43efe2351bf73ff3.jpg',
    imageAlt: 'Preview still from The Mailman short film',
    visual: 'work-card--mailman',
  },
  {
    number: '03',
    category: 'FILM · EDITING',
    title: 'Scone',
    description: 'A short-form edit shaped in CapCut, from raw footage to a finished story.',
    image: 'https://jhportfolio15.my.canva.site/_assets/video/9a309a0c0523cf80b9de67192aa9cf20.jpg',
    imageAlt: 'Preview still from the Scone video',
    visual: 'work-card--scone',
  },
  {
    number: '04',
    category: 'BRAND · CONTENT STRATEGY',
    title: 'Brio Bowls',
    description: 'A social content strategy for a Norman smoothie and fruit bowl shop, built around consistency, community, and engagement.',
    image: 'https://jhportfolio15.my.canva.site/_assets/media/b1b12468df52712be1f774e44e01d0fb.jpg',
    imageAlt: 'Brio Bowls content strategy preview',
    visual: 'work-card--brio',
  },
  {
    number: '05',
    category: 'EDITORIAL · NEWSLETTER',
    title: 'Newsletter campaign',
    description: 'Newsletter design, writing, distribution, and original photography brought together in one campaign.',
    image: 'https://jhportfolio15.my.canva.site/_assets/media/a4dc93b3f701f1851a2ba8043cd6d348.jpg',
    imageAlt: 'Newsletter campaign preview',
    visual: 'work-card--newsletter',
  },
  {
    number: '06',
    category: 'REAL ESTATE · MARKETING',
    title: 'Property marketing package',
    description: 'Listing copy and a property analysis package created to help buyers evaluate a five-door investment opportunity.',
    visual: 'work-card--real-estate',
  },
]

export function WorkExamplesSection() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="work-heading">
        <div>
          <span className="section-kicker">SELECTED PROJECTS · CREATIVE TO CAMPAIGN</span>
          <h2 id="work-title">Work examples<span>.</span></h2>
        </div>
        <p>A few ways I bring ideas to life — through film, thoughtful content, and people-first marketing.</p>
      </div>
      <div className="work-grid">
        {workExamples.map((work) => (
          <article className={`work-card ${work.visual}`} key={work.title}>
            <a className="work-card-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${work.title} in Jerry's original portfolio`}>
              <div className="work-card-image">
                {work.image ? <img src={work.image} alt={work.imageAlt} loading="lazy" /> : <div className="work-card-art" aria-hidden="true"><span>PROPERTY<br />STORYTELLING</span></div>}
                <span className="work-card-number">{work.number}</span>
                <span className="work-card-open" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>
              <div className="work-card-copy">
                <span className="work-card-category">{work.category}</span>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <span className="work-card-cta">VIEW PROJECT <ArrowUpRight aria-hidden="true" /></span>
              </div>
            </a>
          </article>
        ))}
      </div>
      <a className="work-portfolio-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">
        Explore the full portfolio <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  )
}

export default WorkExamplesSection

function ArrowUpRight({ size = 16 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
}
