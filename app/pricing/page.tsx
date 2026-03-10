import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "../_shared/Header";

const Pricing = () => {
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
            Simple
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Pricing
            </span>
          </h1>

          <p className="mt-6 text-gray-600">
            Choose the perfect plan for your design workflow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Free */}
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <h3 className="text-xl font-semibold">Free</h3>
              <p className="text-gray-600">$0 / month</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <p>✔ 10 UI generations</p>
              <p>✔ Basic layouts</p>
              <p>✔ Community support</p>

              <Button className="w-full mt-4">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="rounded-2xl shadow-xl border-indigo-500 border-2">
            <CardHeader>
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="text-gray-600">$19 / month</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <p>✔ Unlimited generations</p>
              <p>✔ Advanced UI components</p>
              <p>✔ Export to Figma / React</p>
              <p>✔ Priority support</p>

              <Button className="w-full mt-4">
                Start Pro
              </Button>
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="rounded-2xl shadow-md">
            <CardHeader>
              <h3 className="text-xl font-semibold">Team</h3>
              <p className="text-gray-600">$49 / month</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <p>✔ Team collaboration</p>
              <p>✔ Shared design workspace</p>
              <p>✔ API access</p>
              <p>✔ Premium support</p>

              <Button className="w-full mt-4">
                Contact Sales
              </Button>
            </CardContent>
          </Card>

        </div>

      </div>
    </section>
    </div>
  );
};

export default Pricing;