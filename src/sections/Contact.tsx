import { motion } from "framer-motion";
import { contactItems, resume } from "../data/userData";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-8 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl flex-1 flex flex-col justify-center mb-20"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto font-medium"
          >
            Let's build something great together. I'm always open to new opportunities and collaborations.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT SIDE - MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-4"
          >
            <h3 className="text-4xl md:text-5xl font-black leading-tight text-white tracking-tighter">
              Let’s build <span className="text-blue-600 text-glow">better</span> products.
            </h3>

            <p className="text-lg md:text-2xl text-zinc-400 font-medium max-w-md leading-relaxed">
              Open for interesting opportunities or just a meaningful chat.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-2">
              <a
                href="mailto:ajseven@outlook.in"
                className="px-6 py-3.5 rounded-full bg-white text-black font-black text-base transition-all duration-300 hover:bg-zinc-200 hover:-translate-y-1 flex items-center gap-2 group"
              >
                Start a Conversation
              </a>
              <a
                href={resume["full-stack-developer"]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white border border-white/10 rounded-full font-black text-base hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
              >
                Resume <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4 w-full">
            {contactItems.map(({ icon: Icon, label, value, href }, i) => {
              const CardComponent = href ? motion.a : motion.div;

              return (
                <CardComponent
                  key={i}
                  href={href}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="group p-5 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 flex items-center gap-5 w-full"
                >
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="text-zinc-400 group-hover:text-blue-500 transition-colors" size={20} />
                  </div>

                  <div className="flex-1 flex flex-col items-start text-left">
                    <p className="font-black text-zinc-500 uppercase tracking-widest text-[10px] mb-1">
                      {label}
                    </p>
                    <p className="text-base font-bold text-white group-hover:text-blue-500 transition-colors truncate w-full">
                      {value}
                    </p>
                  </div>

                  {href && (
                    <div className="text-zinc-600 group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
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