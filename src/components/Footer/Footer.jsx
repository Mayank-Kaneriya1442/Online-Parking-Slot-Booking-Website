import React from 'react';

// --- SVG Icons ---
// A comprehensive set of icons for social media.

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.003 3.469c-2.217 0-4.012 1.795-4.012 4.012s1.795 4.012 4.012 4.012 4.012-1.795 4.012-4.012-1.795-4.012-4.012-4.012zm0 6.677c-1.474 0-2.665-1.191-2.665-2.665s1.191-2.665 2.665-2.665 2.665 1.191 2.665 2.665-1.191 2.665-2.665 2.665zm5.506-6.828a1.32 1.32 0 100-2.64 1.32 1.32 0 000 2.64z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);


// CSS styles for the detailed footer.
const Styles = () => (
    <style>{`
        .park-plus-footer-long {
            background-color: #121212;
            color: #A9A9A9;
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            padding: 4rem 2rem;
        }
        .footer-container-long {
            max-width: 1200px;
            margin: 0 auto;
        }
        .footer-main-long {
            display: grid;
            grid-template-columns: 1fr; /* Mobile-first: single column */
            gap: 3rem;
            padding-bottom: 3rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #282828;
        }
        .footer-info-long {
            max-width: 350px;
        }
        .footer-logo-long {
            font-size: 2rem;
            font-weight: 700;
            color: #FFFFFF;
            text-decoration: none;
            display: block;
            margin-bottom: 1rem;
        }
        .footer-description-long {
            font-size: 0.9rem;
            line-height: 1.6;
        }
        .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
            gap: 2rem;
        }
        .links-column-long h3 {
            font-size: 1.1rem;
            color: #FFFFFF;
            font-weight: 600;
            margin-bottom: 1.5rem;
        }
        .links-column-long a {
            display: block;
            color: #A9A9A9;
            margin-bottom: 0.75rem;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .links-column-long a:hover {
            color: #FFFFFF;
        }
        .footer-bottom-long {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            text-align: center;
        }
        .copyright-long {
            font-size: 0.9rem;
        }
        .social-media-long {
            display: flex;
            gap: 1.5rem;
        }
        .social-media-long a {
            color: #A9A9A9;
            transition: color 0.3s ease;
        }
        .social-media-long a:hover {
            color: #FFFFFF;
        }

        /* Responsive adjustments for larger screens */
        @media (min-width: 768px) {
            .footer-links-grid {
                grid-template-columns: repeat(3, 1fr); /* 3 columns on tablet */
            }
        }
        @media (min-width: 1024px) {
            .footer-main-long {
                grid-template-columns: 1fr 2fr; /* Two columns: info and links grid */
                gap: 4rem;
            }
             .footer-links-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            .footer-bottom-long {
                flex-direction: row;
                justify-content: space-between;
            }
        }
    `}</style>
);


const Footer = () => {
    return (
        <>
            <Styles />
            <footer className="park-plus-footer-long">
                <div className="footer-container-long">
                    <div className="footer-main-long">
                        <div className="footer-info-long">
                            <a href="/" className="footer-logo-long">Park+</a>
                            <p className="footer-description-long">
                                The super app for car owners. We are a team of car lovers, building a delightful experience for car owners across India.
                            </p>
                        </div>
                        <div className="footer-links-grid">
                            <div className="links-column-long">
                                <h3>Company</h3>
                                <a href="#">About Us</a>
                                <a href="#">Blog</a>
                                <a href="#">Careers</a>
                                <a href="#">Press</a>
                            </div>
                            <div className="links-column-long">
                                <h3>Services</h3>
                                <a href="#">Book Parking</a>
                                <a href="#">FASTag Recharge</a>
                                <a href="#">Challan Payment</a>
                                <a href="#">Car Wash & Detailing</a>
                                <a href="#">Car Insurance</a>
                            </div>
                            <div className="links-column-long">
                                <h3>Help & Legal</h3>
                                <a href="#">Help & Support</a>
                                <a href="#">FAQs</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-long">
                        <p className="copyright-long">© {new Date().getFullYear()} Park+  Pvt. Ltd. All Rights Reserved.</p>
                        <div className="social-media-long">
                            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
                            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
                            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
                            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

