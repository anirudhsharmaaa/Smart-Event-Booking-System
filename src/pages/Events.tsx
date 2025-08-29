import { useState } from "react";
import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Calendar, MapPin } from "lucide-react";
import conferenceImage from "@/assets/event-conference.jpg";
import concertImage from "@/assets/event-concert.jpg";
import workshopImage from "@/assets/event-workshop.jpg";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const events = [
    {
      id: "1",
      title: "Tech Innovation Summit 2025",
      description: "Join industry leaders for cutting-edge insights into the future of technology, AI, and digital transformation.",
      date: "March 15, 2025",
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
      date: "April 20, 2025",
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
      date: "May 10-12, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "TechHub Co-working Space",
      price: 599,
      availableSeats: 8,
      totalSeats: 30,
      imageUrl: workshopImage,
      category: "Workshop"
    },
    {
      id: "4",
      title: "AI & Machine Learning Conference",
      description: "Deep dive into the latest advancements in artificial intelligence and machine learning applications.",
      date: "June 5, 2025",
      time: "8:00 AM - 7:00 PM",
      location: "Silicon Valley Center",
      price: 399,
      availableSeats: 120,
      totalSeats: 300,
      imageUrl: conferenceImage,
      category: "Conference"
    },
    {
      id: "5",
      title: "Indie Rock Revival Concert",
      description: "Experience the best of indie rock with emerging and established artists in an intimate venue setting.",
      date: "July 18, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "The Fillmore",
      price: 65,
      availableSeats: 0,
      totalSeats: 1200,
      imageUrl: concertImage,
      category: "Music"
    },
    {
      id: "6",
      title: "UX/UI Design Masterclass",
      description: "Learn advanced design principles and tools from industry experts in this hands-on workshop.",
      date: "August 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Design District Studio",
      price: 299,
      availableSeats: 15,
      totalSeats: 25,
      imageUrl: workshopImage,
      category: "Workshop"
    }
  ];

  const categories = ["All", "Conference", "Music", "Workshop"];
  const locations = ["All", "San Francisco", "Silicon Valley", "Golden Gate"];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || 
                           event.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover <span className="gradient-text">Amazing</span> Events
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Find the perfect event for you from our curated collection of conferences, concerts, and workshops
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 mb-12">
        <div className="container mx-auto">
          <div className="glass-dark rounded-2xl p-6 border border-white/10">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search events by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary/50"
              />
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">Categories:</span>
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      selectedCategory === category 
                        ? "bg-gradient-primary text-white" 
                        : "hover:bg-white/10"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">Location:</span>
                {locations.map((location) => (
                  <Badge
                    key={location}
                    variant={selectedLocation === location ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      selectedLocation === location 
                        ? "bg-gradient-primary text-white" 
                        : "hover:bg-white/10"
                    }`}
                    onClick={() => setSelectedLocation(location)}
                  >
                    {location}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No events found</h3>
              <p className="text-white/60 mb-6">Try adjusting your search criteria or filters</p>
              <Button variant="outline" onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedLocation("All");
              }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {filteredEvents.length} Event{filteredEvents.length !== 1 ? 's' : ''} Found
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <div key={event.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;