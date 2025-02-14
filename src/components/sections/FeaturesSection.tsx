
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Layout, Film, ShoppingCart, Clock, UserCircle } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          Features & Functionality
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Layout className="w-6 h-6 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground">About Page</h3>
              </div>
              <img src="/images/about.png" alt="About Page" className="w-full rounded-lg" />
              <p className="text-muted-foreground">
                Learn more about our platform, our mission to provide seamless movie ticket booking experiences, and how we're revolutionizing the way you enjoy cinema.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Film className="w-6 h-6 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground">Movies List</h3>
              </div>
              <img src="/images/movielist.png" alt="Movies List" className="w-full rounded-lg" />
              <p className="text-muted-foreground">
                Browse our extensive collection of movies, from latest releases to timeless classics. Use our advanced filtering system to find movies by genre, release date, or ratings.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <ShoppingCart className="w-6 h-6 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground">Cart Page</h3>
              </div>
              <img src="/images/cart.png" alt="Cart Page" className="w-full rounded-lg" />
              <p className="text-muted-foreground">
                Review your selected movie tickets, choose your preferred showtime and seating options, and proceed to a secure checkout.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground">Past Orders</h3>
              </div>
              <img src="/images/orderhistory.png" alt="Order History" className="w-full rounded-lg" />
              <p className="text-muted-foreground">
                Access your complete order history, view past movie tickets, and download digital tickets whenever needed.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <UserCircle className="w-6 h-6 text-foreground" />
                <h3 className="text-xl font-semibold text-foreground">Login / Sign Up</h3>
              </div>
              <div className="space-y-2">
                <img src="/images/login.png" alt="Login Page" className="w-full rounded-lg" />
                <img src="/images/signup.png" alt="Sign Up Page" className="w-full rounded-lg" />
              </div>
              <p className="text-muted-foreground">
                Create your personal account to unlock the full potential of our platform. Simple and secure authentication process.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
