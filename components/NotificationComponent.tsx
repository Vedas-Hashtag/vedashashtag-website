"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IoBulbOutline,
  IoNotifications,
  IoBulb,
  IoSettingsOutline,
} from "react-icons/io5";
import { notifications as initialNotifications } from "@/app/data/notification";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const NotificationComponent = () => {
  const { theme, setTheme } = useTheme();

  // State to manage unseen notifications
  const [unseenNotifications, setUnseenNotifications] =
    React.useState(initialNotifications);

  // Handle opening the notifications dropdown
  const handleOpen = () => {
    // Move all unseen notifications to seen
    console.log("this is working.");
    setUnseenNotifications([]);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="relative z-10 focus:outline-none"
        aria-label="Notifications"
      >
        <div onClick={handleOpen}>
          <IoNotifications className="text-3xl hover:text-primary transition-colors cursor-pointer" />
          {unseenNotifications.length > 0 && (
            <div
              className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 flex justify-center items-center text-[10px] text-white pointer-events-none"
              aria-label={`${unseenNotifications.length} new notifications`}
            >
              {unseenNotifications.length}
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:w-[24rem] md:w-[20rem] w-[16rem] flex flex-col items-center mr-3 md:mr-2">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator className="w-full h-[2px]" />
        {/* Render unseen notifications */}
        {unseenNotifications.map((notification) => (
          <DropdownMenuItem className="w-full px-8" key={notification.id}>
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <h1 className="text-sm font-medium text-primary-background truncate">
                  {notification.title}
                </h1>
                <p className="text-sm text-accent-foreground">
                  {notification.description}
                </p>
                <a
                  href={notification.link}
                  className="mx-auto text-primary hover:text-primary-background focus:text-primary-background hover:underline"
                >
                  Click Here
                </a>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        {unseenNotifications.length === 0 && (
          <p className="px-2">No new notifications</p>
        )}
        {unseenNotifications.length > 0 && (
          <>
            <DropdownMenuSeparator className="w-full h-[2px]" />
            <DropdownMenuItem className="w-full px-8 focus:bg-background">
              <Button onClick={handleOpen} className="mx-auto">
                Mark all as read
              </Button>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator className="w-full h-[2px]" />
        <DropdownMenuItem className="w-full px-8 focus:bg-background">
          <div className="w-full flex justify-evenly space-x-2">
            {/* Light mode toggle button */}
            <Button
              variant={"outline"}
              className={`flex-auto ${
                theme === "light" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => setTheme("light")}
              title="Light Mode Toggle"
              aria-label="Light Mode Toggle"
            >
              <IoBulbOutline />
              <p className="hidden md:flex">Light</p>
            </Button>
            {/* Dark mode toggle button */}
            <Button
              variant={"outline"}
              className={`flex-auto ${
                theme === "dark" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => setTheme("dark")}
              title="Dark Mode Toggle"
              aria-label="Dark Mode Toggle"
            >
              <IoBulb className="text-foreground dark:drop-shadow-lg drop-shadow-white" />{" "}
              <p className="hidden md:flex">Dark</p>
            </Button>
            {/* System mode toggle button */}
            <Button
              variant={"outline"}
              className={`flex-auto ${
                theme === "system" ? "bg-primary text-primary-foreground" : ""
              }`}
              onClick={() => setTheme("system")}
              title="System Mode Toggle"
              aria-label="System Mode Toggle"
            >
              <IoSettingsOutline />
              <p className="hidden md:flex">System</p>
            </Button>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationComponent;
