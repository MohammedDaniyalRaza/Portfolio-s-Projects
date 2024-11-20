"use client";

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <meshStandardMaterial
              color="#1e1e1e"
              wireframe
              transparent
              opacity={0.15}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-primary">Daniyal</span>
            <br />
            Front-End Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            I create beautiful and functional websites with modern technologies.
            Let's bring your ideas to life!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button size="lg" asChild>
              <a href="#contact">
                Get in touch <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;