import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

/**
 * @param {ReactNode} children - Isi komponen yang mau dianimasi
 * @param {boolean} once - Jika true, animasi hanya muncul sekali (default: true)
 */
export default function FadeInOnScroll({ children, once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
