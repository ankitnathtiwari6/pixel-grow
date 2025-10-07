"use client";

import { Card } from "@/components/ui/Card";
import { services } from "@/lib/constants";
import {
  TrendingUp,
  Users,
  MessageSquare,
  Bot,
  Phone,
  Palette,
} from "lucide-react";

const iconMap = {
  TrendingUp,
  Users,
  MessageSquare,
  Bot,
  Phone,
  Palette,
};

export function Services() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            AI-Powered Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Complete marketing solutions with integrated AI technology.
            Everything you need, nothing you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={service.id}
                glow
                className="group hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
