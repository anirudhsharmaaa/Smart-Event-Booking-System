import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern tech conference venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-float blur-xl" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float blur-lg" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-primary/5 rounded-full animate-float blur-2xl" style={{animationDelay: '4s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 glass text-black border-white/20">
            <Calendar className="w-4 h-4 mr-2" />
            Premium Event Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Discover. Connect.{" "}
            <span className="gradient-accent-text">Create</span>.
            <br />
            One Epic Experience
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our lineup of world-class events and industry leaders who
            will inspire and enlighten at every conference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/events">
            <Button variant="hero" size="lg" className="hover-lift">
              <Calendar className="w-5 h-5 mr-2" />
              Browse Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            </Link>
            <Button variant="glass" size="lg" className="hover-lift">
              <MapPin className="w-5 h-5 mr-2" />
              Find Near You
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold gradient-accent-text mb-2">500+</div>
              <div className="text-white/80">Events Hosted</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold gradient-accent-text mb-2">50K+</div>
              <div className="text-white/80">Happy Attendees</div>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold gradient-accent-text mb-2">200+</div>
              <div className="text-white/80">Expert Speakers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;