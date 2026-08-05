// Products Component - Showcases CAEZ Farms' main agricultural products
// Displays product cards with descriptions

export default function Products() {
  // Array of products - each with name, description, and highlights
  const products = [
    {
      id: 1,
      name: 'Elite Hybrid Coconut',
      description: 'Premium hybrid coconut varieties cultivated on our fertile farmland. High-yield, disease-resistant plants producing premium quality coconuts.',
      highlights: ['High Yield', 'Disease Resistant', 'Premium Quality']
    },
    {
      id: 2,
      name: 'Commercial Cashew',
      description: 'Sustainably grown cashew nuts using advanced farming techniques. Rich flavor and superior quality for both domestic and international markets.',
      highlights: ['Sustainable', 'Advanced Techniques', 'Export Quality']
    },
    {
      id: 3,
      name: 'Premium Mango',
      description: 'Delicious and nutritious mangoes grown with environmental responsibility. Organic farming practices ensure natural, healthy produce.',
      highlights: ['Organic Farming', 'Nutritious', 'Seasonal Fresh']
    }
  ]

  return (
    <section id="products" className="products section light">
      <div className="container">
        {/* Section heading */}
        <h2 className="section-title">Our Products</h2>
        
        {/* Products grid */}
        <div className="products-grid">
          {/* Map through products array and render each product card */}
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Product name */}
              <h3>{product.name}</h3>
              
              {/* Product description */}
              <p>{product.description}</p>
              
              {/* Product highlights/features */}
              <div className="product-highlights">
                {product.highlights.map((highlight, index) => (
                  <span key={index} className="highlight-tag">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info about farming practices */}
        <div className="farming-practices">
          <h3>Our Sustainable Practices</h3>
          <div className="practices-grid">
            <div className="practice">
              <h4>Renewable Energy</h4>
              <p>Solar-powered irrigation and farm operations reduce environmental impact</p>
            </div>
            <div className="practice">
              <h4>Advanced Irrigation</h4>
              <p>Water-efficient systems optimize crop growth while conserving resources</p>
            </div>
            <div className="practice">
              <h4>Environmental Stewardship</h4>
              <p>Protecting natural resources and biodiversity for future generations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
