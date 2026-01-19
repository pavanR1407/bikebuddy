import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Bike, 
  MapPin, 
  Navigation, 
  Clock, 
  IndianRupee,
  Bell,
  User,
  History,
  Settings,
  LogOut,
  Plus,
  Search,
  AlertTriangle,
  Star,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const recentRides = [
    { id: 1, from: "Downtown Station", to: "Tech Park", cost: 45, date: "Today", status: "completed" },
    { id: 2, from: "Mall Road", to: "University", cost: 32, date: "Yesterday", status: "completed" },
    { id: 3, from: "Airport", to: "City Center", cost: 85, date: "Jan 15", status: "completed" },
  ];

  const nearbyDrivers = [
    { id: 1, name: "Rahul S.", rating: 4.8, vehicle: "Honda Activa", distance: "0.5 km", price: 45 },
    { id: 2, name: "Priya M.", rating: 4.9, vehicle: "TVS Jupiter", distance: "0.8 km", price: 48 },
    { id: 3, name: "Amit K.", rating: 4.7, vehicle: "Hero Splendor", distance: "1.2 km", price: 42 },
  ];

  const menuItems = [
    { icon: Navigation, label: "Home", id: "home" },
    { icon: History, label: "Ride History", id: "history" },
    { icon: User, label: "Profile", id: "profile" },
    { icon: Settings, label: "Settings", id: "settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-card border-r border-border flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-primary">
              <Bike className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">BikeBuddy</span>
          </div>
        </div>

        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-card">
          <div className="flex items-center gap-4">
            <div className="md:hidden flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Bike className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <h1 className="font-display text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors" title="Notifications">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Book Ride Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-card rounded-2xl p-6 border border-border/50 shadow-card"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-display text-xl font-semibold mb-1">Where are you going?</h2>
                  <p className="text-sm text-muted-foreground">Find a ride or share your journey</p>
                </div>
                <Button variant="emergency" size="sm" className="gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Emergency
                </Button>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="w-0.5 h-8 bg-border" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div className="space-y-2 pl-10">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                      <Input
                        placeholder="Enter pickup location"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        className="pl-10 h-12 bg-secondary border-border"
                      />
                    </div>
                    <div className="relative">
                      <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent" />
                      <Input
                        placeholder="Enter destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="pl-10 h-12 bg-secondary border-border"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="hero" size="lg" className="flex-1 group">
                    <Search className="w-4 h-4" />
                    Find Rides
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    <Plus className="w-4 h-4" />
                    Offer Ride
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Total Rides", value: "47", icon: Navigation, color: "primary" },
                { label: "Money Saved", value: "₹2,340", icon: IndianRupee, color: "accent" },
                { label: "This Month", value: "12 rides", icon: Clock, color: "primary" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-gradient-card border border-border/50"
                >
                  <div className={`w-10 h-10 rounded-lg mb-3 flex items-center justify-center ${
                    stat.color === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Nearby Drivers */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-card rounded-2xl p-6 border border-border/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-semibold">Nearby Drivers</h3>
                  <span className="text-sm text-muted-foreground">{nearbyDrivers.length} available</span>
                </div>
                <div className="space-y-3">
                  {nearbyDrivers.map((driver) => (
                    <div
                      key={driver.id}
                      className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                            <User className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium flex items-center gap-2">
                              {driver.name}
                              <span className="flex items-center text-xs text-accent">
                                <Star className="w-3 h-3 fill-current" />
                                {driver.rating}
                              </span>
                            </p>
                            <p className="text-sm text-muted-foreground">{driver.vehicle} • {driver.distance}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">₹{driver.price}</p>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Rides */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-card rounded-2xl p-6 border border-border/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-semibold">Recent Rides</h3>
                  <button className="text-sm text-primary hover:underline">View all</button>
                </div>
                <div className="space-y-3">
                  {recentRides.map((ride) => (
                    <div
                      key={ride.id}
                      className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="font-medium text-sm">{ride.from}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{ride.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Navigation className="w-4 h-4 text-accent" />
                          <span className="font-medium text-sm">{ride.to}</span>
                        </div>
                        <span className="font-semibold text-primary">₹{ride.cost}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden flex items-center justify-around py-4 border-t border-border bg-card">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 ${
                activeTab === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </nav>
      </main>
    </div>
  );
};

export default Dashboard;