import './Team.scss'

const teamMembers = [
  {
    name: 'Aravind Sid',
    role: 'Founder & Growth Architect',
    shape: 'indigo-crest',
  },
  {
    name: 'Sneha Patel',
    role: 'Head of Automation & CRM',
    shape: 'coral-arch',
  },
  {
    name: 'Rohan Mehta',
    role: 'Performance Media Lead',
    shape: 'yellow-oval',
  },
  {
    name: 'Ananya Sharma',
    role: 'Brand & Creative Director',
    shape: 'blue-stack',
  },
]

function Team() {
  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Meet the creative minds behind our success</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card">
              <div className={`team-card__shape team-card__shape--${member.shape}`}>
                {/* Visual stylized geometric badge from Figma */}
                <span className="sr-only">{member.name} avatar</span>
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
