import { motion } from "framer-motion";
import { MapPin, Navigation, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass text-sm font-medium text-primary">
              <Zap className="w-4 h-4" />
              Smart Travel Expense Sharing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Share Rides,{" "}
            <span className="text-gradient-primary">Split Costs</span>
            <br />
            <span className="text-gradient-accent">Travel Smart</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Connect with vehicle owners heading your way. Pay only your fair share 
            based on bus-fare equivalent pricing. Perfect for emergencies and daily commutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => navigate("/register")}
              className="group"
            >
              <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              Get Started Free
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {[
              { icon: MapPin, text: "GPS Route Matching" },
              { icon: Shield, text: "Verified Users" },
              { icon: Zap, text: "Instant Booking" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-glass text-sm text-muted-foreground"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                {feature.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating cards preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-card rounded-2xl p-6 shadow-elevated border border-border/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Active Ride Request</p>
                  <p className="text-sm text-muted-foreground">2 matches nearby</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="text-xs text-muted-foreground mb-1">From</p>
                <p className="font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Downtown Station
                </p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50">
                <p className="text-xs text-muted-foreground mb-1">To</p>
                <p className="font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  Tech Park
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div>
                <p className="text-sm text-muted-foreground">Estimated Cost</p>
                <p className="text-2xl font-bold text-primary">₹45</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Distance</p>
                <p className="text-lg font-semibold">12.5 km</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent animate-pulse-glow" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-primary animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
