import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";

interface Profile {
  id: number;
  name: string;
  age: number;
  bio: string;
}

const profiles: Profile[] = [
  { id: 1, name: "Alice", age: 28, bio: "Love hiking and photography" },
  { id: 2, name: "Bob", age: 32, bio: "Foodie and travel enthusiast" },
  { id: 3, name: "Charlie", age: 25, bio: "Musician and coffee addict" },
];

const Swipe: React.FC = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);

  const handleSwipe = (direction: "left" | "right"): void => {
    if (direction === "right") {
      console.log("Liked:", profiles[currentProfileIndex].name);
    } else {
      console.log("Passed:", profiles[currentProfileIndex].name);
    }
    setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full p-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">
          {profiles[currentProfileIndex].name},{" "}
          {profiles[currentProfileIndex].age}
        </h2>
        <p>{profiles[currentProfileIndex].bio}</p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleSwipe("left")}
          className="border-gray-300 dark:border-gray-700"
        >
          <X className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleSwipe("right")}
          className="border-gray-300 dark:border-gray-700"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Swipe;
