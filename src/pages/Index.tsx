import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedEvents from "@/components/FeaturedEvents";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedEvents />
      </main>
    </div>
  );
};

export default Index;
