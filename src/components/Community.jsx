// Community Component - Showcases community engagement and social responsibility
// Displays community programs and impact initiatives

export default function Community() {
  // Community initiatives data
  const initiatives = [
    {
      id: 1,
      title: 'Employment Opportunities',
      description: 'Creating meaningful jobs for local community members, supporting economic growth in Kwame Danso.'
    },
    {
      id: 2,
      title: 'Healthcare Programs',
      description: 'Free community healthcare outreach including blood pressure and diabetes screenings for preventive health.'
    },
    {
      id: 3,
      title: 'Local Development',
      description: 'Supporting initiatives that improve quality of life and promote long-term regional growth.'
    },
    {
      id: 4,
      title: 'Education Support',
      description: 'Investing in education and skills development for the next generation of agricultural leaders.'
    }
  ]

  return (
    <section id="community" className="community section dark">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">Community & Social Impact</h2>

        {/* Introduction text */}
        <p className="section-intro">
          At CAEZ Farms, agriculture creates prosperity beyond the farm. We work with local communities to build employment, protect health, and strengthen regional opportunity.
        </p>

        {/* Community initiatives grid */}
        <div className="initiatives-grid">
          {initiatives.map((initiative) => (
            <div key={initiative.id} className="initiative-card">
              {/* Initiative number badge */}
              <div className="initiative-number">{initiative.id}</div>
              
              {/* Initiative title */}
              <h3>{initiative.title}</h3>
              
              {/* Initiative description */}
              <p>{initiative.description}</p>
            </div>
          ))}
        </div>

        {/* Our commitment section */}
        <div className="commitment-section">
          <h3>Our Commitment</h3>
          <div className="commitment-content">
            <div className="commitment-item">
              <h4>Social Responsibility</h4>
              <p>
                Our commitment extends beyond farming. CAEZ Farms organizes free community healthcare outreach 
                programs to promote preventive healthcare and improve community well-being. We believe healthy 
                communities are essential to sustainable development.
              </p>
            </div>
            <div className="commitment-item">
              <h4>Sustainable Growth</h4>
              <p>
                Building strong partnerships with the people of Kwame Danso contributes to the long-term growth 
                of the region. Together, we're creating a future where agriculture drives prosperity and opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
