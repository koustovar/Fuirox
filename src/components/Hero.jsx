import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="hero-section">

            <motion.div
                className="hero-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="glowing-title"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1>FUIROX GAMING PORTAL</h1>
                    <p className="subtitle">Deploy Your Games. Unleash Your Potential.</p>
                </motion.div>

                <motion.div
                    className="hero-buttons"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <button className="btn btn-primary">
                        <span className="btn-text">Deploy Game</span>
                        <span className="btn-glow"></span>
                    </button>
                    <button className="btn btn-secondary">
                        <span className="btn-text">Browse Games</span>
                        <span className="btn-glow"></span>
                    </button>
                </motion.div>
            </motion.div>

            <motion.div
                className="floating-cubes"
                animate={{
                    rotateX: 360,
                    rotateY: 360,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <div className="cube"></div>
            </motion.div>
        </section>
    );
}
