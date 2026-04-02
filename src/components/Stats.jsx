import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Stats() {
    const [stats, setStats] = useState([
        { label: 'Games Deployed', value: 0, target: 256 },
        { label: 'Active Players', value: 0, target: 45800 },
        { label: 'Total Hours Played', value: 0, target: 128500 },
        { label: 'Community Rating', value: 0, target: 48 },
    ]);

    useEffect(() => {
        const animationDuration = 2000;
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / animationDuration, 1);

            setStats((prevStats) =>
                prevStats.map((stat) => ({
                    ...stat,
                    value: Math.floor(stat.target * progress),
                }))
            );

            if (progress === 1) clearInterval(interval);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="stats-section">
            <motion.div
                className="stats-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {stats.map((stat, index) => (
                    <motion.div key={index} className="stat-box" variants={itemVariants}>
                        <div className="stat-value">
                            {stat.label.includes('Rating')
                                ? (stat.value / 10).toFixed(1)
                                : stat.value.toLocaleString()}
                            {stat.label.includes('Rating') && <span>/5</span>}
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
