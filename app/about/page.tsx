import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Users, Target, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Team of software engineers revolutionizing digital marketing",
};

const values = [
  {
    name: "Innovation First",
    description: "We leverage cutting-edge AI to solve marketing challenges",
    icon: Zap,
  },
  {
    name: "Results Driven",
    description: "Your profitability is our only metric of success",
    icon: Target,
  },
  {
    name: "Client Focused",
    description: "Every solution is tailored to your unique business needs",
    icon: Users,
  },
  {
    name: "Transparent Pricing",
    description: "No hidden costs, no extra charges for platforms",
    icon: Shield,
  },
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl gradient-text">
            About Pixel Grow
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're not just another marketing agency. We're software engineers on
            a mission to revolutionize how businesses grow online.
          </p>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="prose prose-invert max-w-4xl mx-auto text-muted-foreground">
            <p className="text-lg">
              Founded by a team of software engineers frustrated with the
              inefficiencies in traditional digital marketing, Pixel Grow was
              born from a simple belief: marketing should be driven by data,
              powered by AI, and focused solely on results.
            </p>
            <p className="text-lg mt-4">
              We've built our entire platform from the ground up, integrating
              every tool a business needs - from CRM to content creation - into
              one seamless, AI-powered ecosystem. No more juggling multiple
              platforms, no more integration headaches, and most importantly, no
              more wasted budget on tools that don't deliver ROI.
            </p>
            <p className="text-lg mt-4">
              Today, we serve over 500 clients worldwide, delivering an average
              3x ROI through our proprietary AI algorithms and unwavering focus
              on profitability. We're not just your marketing agency; we're your
              growth partners in the age of AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
