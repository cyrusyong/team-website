
import { motion } from "framer-motion";
import { TeamMember } from "@/components/TeamMember";

export const TeamSection = () => {
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
      bio: "I was involved with creating functionality for users to add, edit, remove, and view reviews. I also created a shopping cart and an orders page, which allowed users to add movies to their cart, view and clear the cart, purchase movies, as well as view their orders.",
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
      bio: "I was involved in creating the base template for the rest of the website. I also implemented the layout for the login and sign up pages. I also created the home page and the about page.",
    },
  ];

  return (
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
  );
};
