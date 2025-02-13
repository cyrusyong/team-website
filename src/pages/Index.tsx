import { Header } from "@/components/Header";
import { TeamMember } from "@/components/TeamMember";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Layout, Film, ShoppingCart, Clock, UserCircle } from "lucide-react";

const Index = () => {
  const teamMembers = [
    {
      name: "Morgan",
      role: "Front End Developer",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?fit=crop&w=800&h=800",
      bio: "Brief description about team member 1 and their contributions to the project.",
    },
    {
      name: "Sai",
      role: "Back End Developer",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&h=800",
      bio: "I was involved with creating functionality for users to add, edit, remove, and view reviews. I also created a shopping cart and an orders page, which allowed users to add movies to their cart, view and clear the cart, purchase movis, as well as view their orders.",
    },
    {
      name: "Cat Tien",
      role: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=crop&w=800&h=800",
      bio: "I was involved with creating the movie listing page and a search function. I also created the initial admin GUI and let admins edit movies. I had to implement an email feature so that reset password can function properly",
    },
    {
      name: "Cyrus",
      role: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&h=800",
      bio: "Brief description about team member 4 and their contributions to the project.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="overview" className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Movie Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Below is our movie ordering platform outline. It is a website where
            users can easily search and purchase tickets for their favorite
            movies. Create an account to track their orders and share their
            movie experiences by leaving reviews. A one-stop destination for a
            seamless movie ticket booking experience.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-secondary px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamMember {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
            Features & Functionality
          </motion.h2>
          <div className="space-y-8">
            <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
              <div className="flex items-start space-x-4">
                <Layout className="w-6 h-6 text-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">About Page</h3>
                  <img src="src/pages/images/about.png" alt="About Page" />
                  <p className="text-muted-foreground">
                    Learn more about our platform, our mission to provide seamless movie ticket booking experiences, and how we're revolutionizing the way you enjoy cinema. Discover our story and what makes us unique in the movie ticketing industry.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
              <div className="flex items-start space-x-4">
                <Film className="w-6 h-6 text-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Movies List</h3>
                  <img src="src/pages/images/movielist.png" alt="Movies List" />
                  <p className="text-muted-foreground">
                    Browse our extensive collection of movies, from latest releases to timeless classics. Use our advanced filtering system to find movies by genre, release date, or ratings. View detailed information, trailers, and user reviews for each movie.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
              <div className="flex items-start space-x-4">
                <ShoppingCart className="w-6 h-6 text-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Cart Page</h3>
                  <img src="src/pages/images/cart.png" alt="Cart Page" />
                  <p className="text-muted-foreground">
                    Review your selected movie tickets, choose your preferred showtime and seating options, and proceed to a secure checkout. Our cart system provides real-time updates and maintains your selections until you're ready to complete your purchase.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Past Orders</h3>
                  <img src="src/pages/images/orderhistory.png" alt="Order History" />
                  <p className="text-muted-foreground">
                    Access your complete order history, view past movie tickets, and download digital tickets whenever needed. Keep track of your movie-watching journey and easily reference your previous bookings for future purchases.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-secondary hover:bg-secondary/80 transition-colors">
              <div className="flex items-start space-x-4">
                <UserCircle className="w-6 h-6 text-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Login / Sign Up</h3>
                  <img src="src/pages/images/login.png" alt="Login Page" />
                  <img src="src/pages/images/signup.png" alt="Sign Up Page" />
                  <p className="text-muted-foreground">
                    Create your personal account to unlock the full potential of our platform. Enjoy features like order tracking, saved preferences, and the ability to leave movie reviews. Simple and secure authentication process for a hassle-free experience.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" className="py-20 bg-secondary px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
            Design Process
          </motion.h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Scrum</h3>
                <p className="text-muted-foreground">
                  For this project, we used the the scrum process, a popular agile development method. The primary players in this proccess include:
                  <ul className="list-disc pl-6">
                    <li>Client: provides user stores by value</li>
                    <li>Scrum Master: manages development process, clearing obstacles and managing communication along the way</li>
                    <li>Team: Works in unity to provide desired product</li>
                  </ul>
                </p>
              </div>
              <div className="flex-1">
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  src="/src/pages/images/scrum_process.jpg"
                  alt="Scrum Process Image"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Design & Development Process</h3>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Product Backlog: In this initial stage in product development the client provided us with a list of user stories. We sorted them on basis of priority</li>
                  <li>Sprint Planning: After gaining an understanding of the user stories and the client's wishes, our team planned the first sprint. This included deciding scrum master, distributing development roles, planning schedules and meetings with the client, and deciding on a method of communication and project management.</li>
                  <li>Sprint Backlog: We decided wich user stories we would focus on for the first sprint based on the importance of each requirement.</li>
                  <li>Sprint: This is an iterative process; in each sprint, the team works on the project, then reflects on obstacles, what was accomplished, and what needs to be done in preparation for the next sprint</li>
                </ul>
              </div>
              <div className="flex-1">
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  src="src/pages/images/development.png"
                  alt="Development phase"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Project Management Tools</h3>
                <p className="text-muted-foreground">
                  We utilized several project management tools to keep our team organized and on track. These tools help us manage our tasks, communicate effectively, and collaborate seamlessly.
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li><strong>GitHub:</strong> Version control system for tracking changes in the codebase.</li>
                    <li><strong>Trello:</strong> Project management tool for creating and managing tasks.</li>
                    <li><strong>Discord:</strong> Communication tool for team collaboration and instant messaging.</li>
                  </ul>
                </p>
              </div>
              <div className="flex-1">
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  src="src/pages/images/tool.jpg"
                  alt="Project Management"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-background px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Video Demonstration
          </h2>
          <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">
              Video demonstration will be added here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;