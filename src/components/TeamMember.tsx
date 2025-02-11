
import { Card } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-4">{role}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
      </div>
    </Card>
  );
};
