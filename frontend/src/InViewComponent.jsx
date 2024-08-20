import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function InViewComponent({ children, variants, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {children}
    </motion.div>
  );
}

export default InViewComponent;
