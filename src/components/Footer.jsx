import { motion } from 'framer-motion';

export default function Footer() {
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
            },
        }),
    };

    const links = [
        ['Product', ['Home', 'Features', 'Pricing', 'Security']],
        ['Resources', ['Docs', 'API', 'Community', 'Support']],
        ['Company', ['About', 'Blog', 'Careers', 'Contact']],
        ['Legal', ['Privacy', 'Terms', 'Cookies', 'License']],
    ];

    return (
        <footer className="footer">
            <motion.div
                className="footer-content"
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>FUIROX</h3>
                        <p>Your Ultimate Gaming Portal</p>
                    </div>

                    <div className="footer-links">
                        {links.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="footer-section">
                                <h4>{section[0]}</h4>
                                <ul>
                                    {section[1].map((link, linkIndex) => (
                                        <motion.li
                                            key={linkIndex}
                                            custom={sectionIndex * 4 + linkIndex}
                                            variants={linkVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <a href="#">{link}</a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>&copy; 2024 FUIROX. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">Discord</a>
                        <a href="#" className="social-link">GitHub</a>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
