import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay,
        },
    }),
};

const Reveal = ({
    as: Tag = "div",
    delay = 0,
    className = "",
    children,
    once = true,
    amount = 0.2,
    ...rest
}) => {
    const MotionTag = motion[Tag] || motion.div;
    return (
        <MotionTag
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            custom={delay}
            {...rest}
        >
            {children}
        </MotionTag>
    );
};

export default Reveal;
