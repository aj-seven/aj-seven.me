import { motion } from "framer-motion";
import { contactItems } from "../data/userData";

const Contact = () => {
  return (
    <section className="w-full px-4 py-10 text-center text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mx-auto backdrop-blur-sm border border-gray-400 dark:border-gray-600 rounded-xl p-6 sm:p-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 underline underline-offset-4 decoration-blue-500">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-8">
          I’m always open to new opportunities and conversations. Reach out!
        </p>

        <div className="space-y-5 text-left text-sm sm:text-base">
          {contactItems.map(
            ({ icon: Icon, label, value, href, color }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                className="flex items-center gap-4 group"
                aria-label={label}
              >
                <Icon className={`${color}`} size={20} />
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline underline-offset-2 transition-all duration-200"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-foreground">{value}</span>
                )}
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
