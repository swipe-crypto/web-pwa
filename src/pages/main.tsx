import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { User, Home, Moon, Sun } from "lucide-react";

import Profile from "./profile";
import Swipe from "./swipe";

const Main: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`fixed inset-0 flex flex-col bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 ${
        darkMode ? "dark" : ""
      }`}
    >
      <Button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
      <Tabs defaultValue="swipe" className="flex flex-col h-full">
        <div className="flex-grow overflow-auto">
          <TabsContent value="swipe" className="h-full">
            <Swipe />
          </TabsContent>
          <TabsContent value="profile" className="h-full">
            <Profile />
          </TabsContent>
        </div>
        <TabsList className="grid w-full grid-cols-2 bg-transparent border-t border-gray-200 dark:border-gray-800">
          <TabsTrigger
            value="swipe"
            className="flex flex-col items-center py-6 data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white text-lg"
          >
            <Home className="h-8 w-8 mb-1" />
            Home
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="flex flex-col items-center py-6 data-[state=active]:bg-transparent data-[state=active]:text-black dark:data-[state=active]:text-white text-lg"
          >
            <User className="h-8 w-8 mb-1" />
            Profile
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default Main;
