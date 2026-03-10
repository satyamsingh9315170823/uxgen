"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { suggestions } from "@/data/constant";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loader } from "lucide-react";

const Hero = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [device, setDevice] = useState<string>("Desktop");
  const [loading, setLoading] = useState(false);
  const router= useRouter()
const {user}= useUser();

const onCreateProject = async () => {
  if (!user) {
    router.push("/sign-in");
    return;
  }

  if (!userInput) return;

  try {
    setLoading(true);

    const projectId = crypto.randomUUID();

    const result = await axios.post("/api/project", {
      userInput,
      device,
      projectId,
    });

    console.log(result.data);

    router.push("/project/" + projectId);
  } catch (error) {
    console.error("Project creation failed", error);
  } finally {
    setLoading(false);
  }
};

 
  

  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-100 via-white to-gray-50" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Generate Beautiful
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              UI/UX
            </span>{" "}
            with AI
          </h1>
          <p className="mt-6 text-zinc-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Turn your ideas into modern interfaces instantly. Our AI creates
            layouts, wireframes, and UX flows in seconds.
          </p>
          {/* AI Prompt */}
          {/* AI Prompt */}
          <div className="mt-8 max-w-xl mx-auto lg:mx-0">
            <div className="border border-gray-500 rounded-lg p-3 bg-white">
              <Textarea
                placeholder="Describe your app idea..."
                value={userInput}
                onChange={(e) => setUserInput(e.target?.value)}
                className="border border-gray-500 resize-none focus-visible:ring-0"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {suggestions.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <button
                      onClick={() => setUserInput(item.description)}
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 border-gray-400  text-sm border rounded-md hover:bg-gray-50"
                    >
                      <Icon size={16} />
                      {item.name}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between mt-3">
                <Select
                  onValueChange={(value) => setDevice(value)}
                  defaultValue={device}
                >
                  <SelectTrigger className="w-[140px] h-9">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Desktop">Desktop</SelectItem>
                    <SelectItem value="Mobile">Mobile</SelectItem>
                  </SelectContent>
                </Select>

<Button
  onClick={onCreateProject}
  className="h-9 px-5 flex items-center gap-2"
  disabled={loading}
>
  {loading && <Loader className="animate-spin w-4 h-4" />}
  {loading ? "Generating..." : "Generate"}
</Button>
              </div>
            </div>
          </div>{" "}
          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg">Start Free</Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
      <div className="group relative flex justify-center mt-12 lg:mt-16 perspective-1000 px-4 sm:px-0">
  {/* Graphite Fog Glow - Scales with viewport */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[300px] sm:max-w-[350px] md:max-w-[420px] h-[280px] sm:h-[350px] md:h-[420px] bg-gradient-to-tr from-zinc-800 via-gray-300 to-zinc-900 blur-[100px] sm:blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 rounded-full pointer-events-none"></div>

  {/* Main Pitch-Black Card - Fluid Width */}
  <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] rounded-3xl sm:rounded-[2rem] bg-black/95 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,1)] border border-zinc-800/80 p-5 sm:p-6 md:p-8 rotate-3 group-hover:rotate-0 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.03)] transition-all duration-500 ease-out mx-auto">
    
    {/* Top Bar */}
    <div className="flex justify-between items-center mb-6 sm:mb-8">
      {/* Metallic Text */}
      <div className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-300 to-gray-500 text-xs sm:text-sm md:text-base tracking-widest uppercase drop-shadow-sm">
        System Core
      </div>

      {/* Monochrome Window Dots */}
      <div className="flex gap-2 sm:gap-2.5">
        <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 bg-zinc-700 rounded-full border border-black shadow-inner"></div>
        <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 bg-gray-500 rounded-full border border-black shadow-inner"></div>
        <div className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 bg-zinc-300 rounded-full border border-black shadow-[0_0_10px_rgba(212,212,216,0.3)]"></div>
      </div>
    </div>

    {/* UI Layout Skeleton */}
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {/* Sidebar */}
      <div className="col-span-1 space-y-3 sm:space-y-4 pt-1">
        <div className="h-2.5 sm:h-3 w-4/5 bg-zinc-600 rounded-full border border-white/5"></div>
        <div className="h-2.5 sm:h-3 w-full bg-zinc-600 rounded-full border border-white/5"></div>
        {/* Active Sidebar Item - Bright contrast */}
        <div className="h-2.5 sm:h-3 w-5/6 bg-zinc-200 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
        <div className="h-2.5 sm:h-3 w-3/4 bg-zinc-600 rounded-full border border-white/5"></div>
      </div>

      {/* Content */}
      <div className="col-span-3 space-y-3 sm:space-y-4">
        {/* Hero Section */}
        <div className="h-12 sm:h-14 bg-zinc-700 border border-zinc-800 rounded-xl relative overflow-hidden group/hero">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-[pulse_2s_ease-in-out_infinite]"></div>
          {/* Subtle accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-400 shadow-[0_0_12px_rgba(161,161,170,0.6)]"></div>
        </div>

        {/* Banners */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="h-16 sm:h-20 bg-zinc-950 border border-zinc-800 rounded-xl shadow-inner flex items-center justify-center">
             {/* Monochrome Spinner */}
             <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-zinc-800 border-t-zinc-300 animate-spin"></div>
          </div>
          <div className="h-16 sm:h-20 bg-zinc-950 border border-zinc-800 rounded-xl shadow-inner p-2 sm:p-3 flex flex-col justify-end gap-1 sm:gap-1.5">
            <div className="h-1 sm:h-1.5 w-full bg-zinc-700 rounded-full"></div>
            <div className="h-1 sm:h-1.5 w-2/3 bg-zinc-800 rounded-full"></div>
          </div>
        </div>

        {/* Graph/Chart Area */}
        <div className="h-20 sm:h-24 bg-black border border-zinc-800 rounded-xl shadow-inner relative overflow-hidden">
             {/* Faint Grid lines */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
             {/* Silver gradient rise */}
             <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-700/20 to-transparent"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Floating Widget Card - Adaptive Positioning */}
  <div className="absolute -bottom-6 left-0 sm:-bottom-8 sm:-left-10 w-auto bg-zinc-950/95 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,1)] border border-zinc-800 rounded-2xl p-3 sm:p-4 md:p-5 rotate-[-6deg] sm:rotate-[-8deg] group-hover:rotate-[-2deg] group-hover:-translate-y-2 sm:group-hover:-translate-y-3 group-hover:-translate-x-1 sm:group-hover:-translate-x-2 transition-all duration-500 ease-out z-10 mx-4 sm:mx-0">
    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
      {/* Grayscale Ping Dot */}
      <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-zinc-300 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
      </div>
      <p className="text-[10px] sm:text-xs md:text-sm font-bold text-zinc-300 tracking-tight whitespace-nowrap">
        Processing Data
      </p>
    </div>
    <div className="w-28 sm:w-32 md:w-40 h-8 sm:h-10 bg-black border border-zinc-800 rounded-lg relative overflow-hidden">
       {/* Silver Loading bar progress */}
       <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-gray-600 to-zinc-200 opacity-90 shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;
