
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section id="overview" className="pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
        >
          Movie Store
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-8"
        >
          Below is our movie ordering platform outline. It is a website where
          users can easily search and purchase tickets for their favorite
          movies. Create an account to track their orders and share their
          movie experiences by leaving reviews. A one-stop destination for a
          seamless movie ticket booking experience.
        </motion.p>
      </div>
    </section>
  );
};
