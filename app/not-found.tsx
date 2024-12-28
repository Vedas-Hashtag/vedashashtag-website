"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px" }}
      className="min-h-[36rem] flex flex-col justify-center items-center space-y-4"
    >
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button onClick={handleGoHome}>Go to Home</Button>
    </div>
  );
};

export default NotFoundPage;
