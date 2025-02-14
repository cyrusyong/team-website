
import { motion } from "framer-motion";

export const ProcessSection = () => {
  return (
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
                className="rounded-lg shadow-lg"
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
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
