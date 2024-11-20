"use client";

import { motion } from 'framer-motion';
import { Code2, Palette, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Developer",
    description: "Writing elegant, maintainable, and efficient code is my passion."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Modern Design",
    description: "Creating beautiful, intuitive interfaces that users love."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every project."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm a passionate Front-end developer with a keen eye for design and a 
            love for creating seamless user experiences. With expertise in modern 
            web technologies, I bring ideas to life through code.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-background shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;