import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Profile: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="text-center">
        <User className="h-12 w-12 mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Your Profile</h2>
        <p>Edit your information and preferences here</p>
      </div>
    </div>
  );
};

export default Profile;
