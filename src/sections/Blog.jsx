import './Blog.scss'

const posts = [
  {
    id: 1,
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    title: 'How Instant WhatsApp Auto-Response Cut Our Client Lead Drop-off by 63%',
    desc: 'The exact conversational logic and CRM triggers used to convert warm Meta leads before competitors even pick up the phone.',
  },
  {
    id: 2,
    date: 'Sep 28, 2026',
    readTime: '7 min read',
    title: 'B2B Outbound in 2026: Why Spray-and-Pray Email is Dead & Signal-Based Targeting Wins',
    desc: 'Setting up automated job-change alerts, funding triggers, and tailored value propositions that produce genuine pipeline.',
  },
  {
    id: 3,
    date: 'Sep 14, 2026',
    readTime: '4 min read',
    title: 'Building a Full-Funnel Growth Dashboard with Zero-Code Sync Tools',
    desc: 'Step-by-step architecture to bridge ad spend, lead source attribution, CRM deal stages, and real revenue numbers.',
  },
]

function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <span className="blog-label">OUR JOURNAL</span>
          <h2 className="blog-title">The Latest from Our Journal</h2>
          <p className="blog-subtitle">
            Insights and practical guides on scaling modern businesses with marketing and automation.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card__image-box">
                <div className="placeholder-art">
                  <span className="art-line"></span>
                  <span className="art-line"></span>
                </div>
              </div>

              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__desc">{post.desc}</p>

                <div className="blog-card__footer">
                  <a href="#contact" className="blog-card__read-link">
                    Read Article
                  </a>
                  <a href="#contact" className="blog-card__arrow-btn" aria-label={`Read ${post.title}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-action-bottom">
          <a href="#contact" className="blog-view-all-btn">
            View All Articles →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
