import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: number;
  availableSeats: number;
  totalSeats: number;
  imageUrl: string;
  category: string;
}

const EventCard = ({ 
  title, 
  description, 
  date, 
  time, 
  location, 
  price, 
  availableSeats, 
  totalSeats, 
  imageUrl, 
  category 
}: EventCardProps) => {
  const isLowAvailability = availableSeats < totalSeats * 0.2;
  const isSoldOut = availableSeats === 0;

  return (
    <div className="group bg-gradient-card rounded-2xl overflow-hidden hover-lift hover-glow border border-white/10">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Category Badge */}
        <Badge 
          variant="secondary" 
          className="absolute top-4 left-4 glass text-black border-white/20"
        >
          {category}
        </Badge>

        {/* Availability Badge */}
        {isSoldOut ? (
          <Badge className="absolute top-4 right-4 bg-destructive text-white">
            Sold Out
          </Badge>
        ) : isLowAvailability ? (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            Few Left!
          </Badge>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-white/70 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-white/80">
            <Calendar className="w-4 h-4 mr-3 text-primary" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-white/80">
            <Clock className="w-4 h-4 mr-3 text-primary" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-white/80">
            <MapPin className="w-4 h-4 mr-3 text-primary" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center text-white/80">
            <Users className="w-4 h-4 mr-3 text-primary" />
            <span className="text-sm">{availableSeats} / {totalSeats} seats</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold gradient-accent-text">
              ₹{price}
            </span>
            <span className="text-white/60 text-sm ml-1">per ticket</span>
          </div>
          
          {isSoldOut ? (
            <Button variant="outline" disabled>
              Sold Out
            </Button>
          ) : (
            <Button variant="hero" size="sm" className="hover-lift">
              Book Now
            </Button>
          )}
        </div>

        {/* Seat Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${((totalSeats - availableSeats) / totalSeats) * 100}%` }}
            />
          </div>
          <p className="text-xs text-white/60 mt-1">
            {Math.round(((totalSeats - availableSeats) / totalSeats) * 100)}% booked
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;