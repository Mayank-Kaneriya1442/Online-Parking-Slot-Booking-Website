import React from 'react';
import Navbar from '../Navbar/Navbar'
import man from "../image/man.avif";
import man2 from "../image/man2.avif";
import man3 from "../image/man3.avif";
import Footer from '../Footer/Footer.jsx';

// --- SVG Icons for the About Us Page ---

const MissionIcon = () => (
  <svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-8 0h8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const VisionIcon = () => (
  <svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ValuesIcon = () => (
  <svg className="w-16 h-16 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

// --- Main About Us Component ---

const AboutUs = () => {
  
  const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  .about-us-container {
    font-family: 'Inter', sans-serif;
    color: #1F2937; /* dark gray */
    background: linear-gradient(135deg, #E0F2FE 0%, #FCE7F3 100%);
  }

  .content-section {
    padding: 5rem 1rem;
    max-width: 1200px;
    margin: auto;
  }

  .section-title {
    font-size: 2.75rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(90deg, #6366F1, #EC4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Mission Cards */
  .mission-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    text-align: center;
  }

  .mission-card {
    background: linear-gradient(145deg, #FFFFFF, #D1FAE5);
    padding: 2.5rem;
    border-radius: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #34D399;
  }

  .mission-card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 20px 35px -5px rgba(0,0,0,0.12);
  }

  .mission-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: #059669;
  }

  .mission-card p {
    font-size: 1rem;
    color: #374151;
  }

  /* Story Section */
  .story-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 768px) {
    .story-section {
      grid-template-columns: 1fr 1fr;
    }
  }

  .story-image {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }

  /* Team Section */
  .team-section {
    background: linear-gradient(135deg, #F0F9FF, #FCE7F3);
    padding: 5rem 1rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: auto;
  }

  .team-member {
    background-color: white;
    border-radius: 50px;
    overflow: hidden;
    text-align: center;
    padding: 2rem 1rem;
    box-shadow: 0 8px 18px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .team-member:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(99,102,241,0.3);
  }

  .team-member img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 4px solid #EC4899;
  }

  .team-member h4 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 0.5rem;
    color: #ffffffff;
  }

  .team-member p {
    color: #6B7280;
    font-weight: 500;
  }

  /* CTA Section */
  .cta-section {
    background: linear-gradient(135deg, #6366F1, #EC4899);
    color: white;
    text-align: center;
    padding: 5rem 1rem;
    border-radius: 1rem;
    margin-top: 5rem;
  }

  .cta-section h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .cta-section p {
    max-width: 700px;
    margin: auto;
    font-size: 1.1rem;
  }

  .cta-button {
    display: inline-block;
    background-color: white;
    color: #6366F1;
    padding: 0.75rem 2rem;
    border-radius: 1rem;
    font-weight: 700;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin-top: 2rem;
  }

  .cta-button:hover {
    background-color: #F3F4F6;
    transform: scale(1.05);
  }
`;

  return (
    <>
      <Navbar />
      <style>{styles}</style>
      <div className="about-us-container">
        <main>
          {/* Mission, Vision, Values */}
          <section className="content-section">
            <div className="mission-grid">
              <div className="mission-card">
                <MissionIcon />
                <h3>Our Mission</h3>
                <p>To eliminate parking anxiety by creating a connected ecosystem of smart parking solutions that saves time, fuel, and frustration for every car owner in India.</p>
              </div>
              <div className="mission-card">
                <VisionIcon />
                <h3>Our Vision</h3>
                <p>To be the leading platform for all car-related services, starting with a flawless parking experience that redefines urban mobility and smart city living.</p>
              </div>
              <div className="mission-card">
                <ValuesIcon />
                <h3>Our Values</h3>
                <p>Customer-first approach, relentless innovation, and uncompromising integrity. We build trust through reliability and a commitment to excellence.</p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="content-section story-section">
            <div>
              <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1.5rem'}}>From a Simple Idea to a Super App</h2>
              <p className="mb-4">
                Founded in 2019, Park+ started with a simple observation: finding a parking spot was a universal headache for drivers in bustling Indian cities. What began as an app to book parking slots has grown into a comprehensive ecosystem for car owners.
              </p>
              <p>
                Through strategic partnerships and a focus on user-centric technology, we've expanded our services to include FASTag recharges, challan payments, car wash services, and more. Our journey is fueled by the desire to build a single, trusted platform that simplifies car ownership.
              </p>
            </div>
            <div>
              <img src="https://placehold.co/600x400/EDF2F7/4A5568?text=Our+Journey" alt="Park+ Team Collaboration" className="story-image" />
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={man} alt="Kenil" />
                <h4>Kenil Chodavadiya</h4>
                <p>Chief Technology Officer</p>
              </div>
              <div className="team-member">
                <img src={man2} alt="Mayank" />
                <h4>Mayank Kaneriya</h4>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <img src={man3} alt="Mahek" />
                <h4>Mahek Pokiya</h4>
                <p>Head of Operations</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <h2 className="section-title" style={{color: 'white'}}>Join Us on Our Mission</h2>
            <p className="max-w-2xl mx-auto">
              We are always looking for talented individuals to help us build the future of urban mobility. If you are passionate about solving real-world problems, check out our open positions.
            </p>
            {/* <a href="#" className="cta-button">View Careers</a> */}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
