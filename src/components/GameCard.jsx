import { motion } from 'framer-motion';

export default function GameCard({ game }) {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
            },
        }),
        hover: {
            scale: 1.05,
            boxShadow: '0 0 40px rgba(255, 69, 0, 0.8)',
            transition: { duration: 0.3 },
        },
    };

    return (
        <motion.div
            className="game-card"
            variants={cardVariants}
            custom={game.id}
            whileHover="hover"
        >
            <div className="game-card-image">
                <img src={game.image} alt={game.title} />
                <div className="game-overlay">
                    <span className="play-btn">▶</span>
                </div>
            </div>
            <div className="game-info">
                <h3>{game.title}</h3>
                <p className="genre">{game.genre}</p>
                <p className="description">{game.description}</p>
                <div className="game-stats">
                    <span className="stat">⭐ {game.rating}</span>
                    <span className="stat">👥 {game.players}</span>
                </div>
            </div>
        </motion.div>
    );
}
