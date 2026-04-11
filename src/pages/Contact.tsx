import { motion } from "framer-motion";
import { contactItems } from "../data/userData";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-24 min-h-screen text-foreground">
      <motion.div className="w-full max-w-5xl backdrop-blur-sm rounded-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-5"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let’s build something <span className="text-blue-500 underline underline-offset-8 decoration-blue-500">great</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-md">
              Got an idea, opportunity, or just want to connect? I’m always open to meaningful conversations.
            </p>

            {/* PRIMARY CTA */}
            <a
              href="mailto:ajseven@outlook.in"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
            >
              Send Email →
            </a>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4 w-full">
            {contactItems.map(({ icon: Icon, label, value, href, color }, i) => {
              const CardComponent = href ? motion.a : motion.div;
              
              return (
                <CardComponent
                  key={i}
                  href={href}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="group p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white/10 dark:bg-black/10 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 w-full"
                >
                  <div className="p-3 sm:p-4 rounded-xl bg-white/50 dark:bg-black/20 shadow-sm border border-gray-100 dark:border-gray-800">
                    <Icon className={`${color} group-hover:scale-110 transition-transform duration-300`} size={24} />
                  </div>

                  <div className="flex-1 flex flex-col items-start text-left">
                    <p className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {value}
                    </p>
                  </div>
                  
                  {href && (
                    <div className="pr-2 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      <ArrowUpRight size={22} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </CardComponent>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;