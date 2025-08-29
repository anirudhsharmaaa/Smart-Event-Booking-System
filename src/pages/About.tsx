import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Handshake } from "lucide-react";
import aboutusImage from "@/assets/event-concert.jpg"
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
          <img
            src={aboutusImage}
            alt="About Us Background"
            className="absolute inset-0 w-full h-full object-cover brightness-50 mt-0 pt-0 shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
          <div className="relative z-10 text-center px-4">
            <motion.div
            initial={{y:100, opacity: 0 }}
            animate={{y:0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
              About <span className="gradient-accent-text">EventBook</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Connecting people through unforgettable experiences.
            </p>
            </motion.div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
            initial={{y:100, opacity: 0 }}
            animate={{y:0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
              At EventBook, our mission is to revolutionize the way people discover, attend, and host events.
            </p>
            </motion.div>
            </div>
            </section>
            </main>
    </div>
  )};

  export default About;