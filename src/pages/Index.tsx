
import { Header } from "@/components/Header";
import { TeamMember } from "@/components/TeamMember";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  const teamMembers = [
    {
      name: "Morgan",
      role: "Front End Developer",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?fit=crop&w=800&h=800",
      bio: "Brief description about team member 1 and their contributions to the project."
    },
    {
      name: "Sai",
      role: "Back End Developer",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&h=800",
      bio: "Brief description about team member 2 and their contributions to the project."
    },
    {
      name: "Cat Tien Le",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=crop&w=800&h=800",
      bio: "Brief description about team member 3 and their contributions to the project."
    },
    {
      name: "Cyrus",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&h=800",
      bio: "Brief description about team member 4 and their contributions to the project."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section id="overview" className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Movie Store
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            A comprehensive description of your project and its main objectives. Highlight the key features and value proposition.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
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
      <section id="features" className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Features & Functionality</h2>
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4"></h3>
              <p className="text-gray-600">Detailed description of feature 1 and its benefits.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p className="text-gray-600">Detailed description of feature 2 and its benefits.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p className="text-gray-600">Detailed description of feature 3 and its benefits.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Design Process</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Research & Planning</h3>
                <p className="text-gray-600">Description of the research and planning phase.</p>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=800&h=600"
                  alt="Research phase"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Design & Development</h3>
                <p className="text-gray-600">Description of the design and development process.</p>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=600"
                  alt="Development phase"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Video Demonstration</h2>
          <div className="aspect-video bg-black/5 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Video demonstration will be added here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
