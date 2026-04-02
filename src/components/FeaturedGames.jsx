import { motion } from 'framer-motion';
import GameCard from './GameCard';

export default function FeaturedGames() {
    const games = [
        {
            id: 1,
            title: 'NEON RACER',
            genre: 'Racing',
            description: 'High-speed racing in neon cities',
            image: 'https://via.placeholder.com/300x200?text=NEON+RACER',
            rating: 4.8,
            players: '2.5K',
        },
        {
            id: 2,
            title: 'CYBER QUEST',
            genre: 'RPG',
            description: 'Epic adventure in digital realms',
            image: 'https://via.placeholder.com/300x200?text=CYBER+QUEST',
            rating: 4.9,
            players: '5.2K',
        },
        {
            id: 3,
            title: 'PULSE ZERO',
            genre: 'Action',
            description: 'Fast-paced combat with rhythm elements',
            image: 'https://via.placeholder.com/300x200?text=PULSE+ZERO',
            rating: 4.7,
            players: '3.1K',
        },
        {
            id: 4,
            title: 'BLAZE ARENA',
            genre: 'Multiplayer',
            description: 'Competitive battles with power-ups',
            image: 'https://via.placeholder.com/300x200?text=BLAZE+ARENA',
            rating: 4.6,
            players: '8.9K',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const titleVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8 },
        },
    };

    return (
        <section className="featured-games-section">
            <motion.div
                className="section-header"
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h2>FEATURED GAMES</h2>
                <div className="header-line"></div>
            </motion.div>

            <motion.div
                className="games-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </motion.div>
        </section>
    );
}
