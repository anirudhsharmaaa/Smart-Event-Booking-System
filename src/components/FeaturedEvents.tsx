import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import conferenceImage from "@/assets/event-conference.jpg";
import concertImage from "@/assets/event-concert.jpg";
import workshopImage from "@/assets/event-workshop.jpg";
import { Link } from "react-router-dom";

const FeaturedEvents = () => {
  const featuredEvents = [
    {
      id: "1",
      title: "Tech Innovation Summit 2025",
      description: "Join industry leaders for cutting-edge insights into the future of technology, AI, and digital transformation.",
      date: "September 30, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center",
      price: 299,
      availableSeats: 45,
      totalSeats: 500,
      imageUrl: conferenceImage,
      category: "Conference"
    },
    {
      id: "2",
      title: "Electric Nights Music Festival",
      description: "An unforgettable night featuring top electronic music artists and immersive visual experiences.",
      date: "November 20, 2025",
      time: "6:00 PM - 2:00 AM",
      location: "Golden Gate Park",
      price: 89,
      availableSeats: 250,
      totalSeats: 2000,
      imageUrl: concertImage,
      category: "Music"
    },
    {
      id: "3",
      title: "Full-Stack Development Bootcamp",
      description: "Intensive 3-day workshop covering modern web development technologies and best practices.",
      date: "January 10-12, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "TechHub Co-working Space",
      price: 599,
      availableSeats: 8,
      totalSeats: 30,
      imageUrl: workshopImage,
      category: "Workshop"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured</span> Events
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Discover handpicked events that offer exceptional experiences and learning opportunities
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredEvents.map((event) => (
            <div key={event.id} className="animate-slide-up" style={{animationDelay: `${featuredEvents.indexOf(event) * 0.2}s`}}>
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link to="/events">
          <Button variant="outline" size="lg" className="hover-lift">
            View All Events
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;