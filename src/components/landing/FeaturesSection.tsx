import { motion } from "framer-motion";
import { 
  MapPin, 
  Calculator, 
  Users, 
  Clock, 
  Shield, 
  Smartphone,
  Route,
  Wallet
} from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Smart Route Matching",
    description: "Our algorithm finds vehicle owners heading your direction, maximizing efficiency for everyone.",
    color: "primary",
  },
  {
    icon: Calculator,
    title: "Fair Bus-Fare Pricing",
    description: "Pay only what a bus ride would cost. No surge pricing, just fair expense sharing.",
    color: "accent",
  },
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description: "Track your ride live on the map. Know exactly where your driver is at all times.",
    color: "primary",
  },
  {
    icon: Clock,
    title: "Emergency Mode",
    description: "Need urgent transport? Emergency mode prioritizes your request for faster matching.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Verified Community",
    description: "All users are verified with ID and phone. Rate and review after every trip.",
    color: "primary",
  },
  {
    icon: Wallet,
    title: "Expense History",
    description: "Track all your rides and expenses. Perfect for monthly budgeting and reports.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Multiple payment options with bank-grade security. Your money is always safe.",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Fully responsive design works perfectly on any device. Ride anytime, anywhere.",
    color: "accent",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Travel Smart</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BikeBuddy combines cutting-edge technology with community-driven travel 
            to make your commute affordable and reliable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                } group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
