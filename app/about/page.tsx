import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "../_shared/Header";

const About = () => {
  return (
   <div>
     <Header/>
  
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-purple-50" />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Our AI
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}UI/UX Generator
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We help designers, developers, and startups generate beautiful UI
            and intuitive UX instantly using the power of AI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">⚡ Instant Design</h3>
              <p className="text-gray-600 mt-3">
                Generate layouts, wireframes, and UI components in seconds
                using AI-powered generation.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">🎨 Modern Interfaces</h3>
              <p className="text-gray-600 mt-3">
                Create sleek, responsive designs optimized for web and mobile
                products.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">🚀 Faster Prototyping</h3>
              <p className="text-gray-600 mt-3">
                Turn product ideas into working UI concepts instantly without
                starting from scratch.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Button size="lg">
            Try the AI Generator
          </Button>
        </div>

      </div>
    </section>
     </div>
  );
};

export default About;