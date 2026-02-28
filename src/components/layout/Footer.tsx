import { motion } from "framer-motion";
import FooterLogo3D from "../footer/FooterLogo3D";
import NewsletterForm from "../footer/NewsletterForm";

const Footer = () => {
  return (
    <motion.footer
      viewport={{ once: true }}
      id="footer"
      className="bg-neutral-950 border-t border-neutral-800 mt-32"
    >
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">
        {/* 3D Logo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <FooterLogo3D />
          <p className="text-neutral-400 text-sm text-center md:text-left">
            F1 2026 Interactive Experience
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 font-semibold text-lg">Join the Grid</h3>
          <NewsletterForm />
        </div>

        {/* Info */}
        <div className="text-sm text-neutral-400 space-y-3">
          <p>© {new Date().getFullYear()} Fun Project</p>
          <p>Not affiliated with Formula 1.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
