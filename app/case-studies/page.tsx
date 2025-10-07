import { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Success stories of businesses we've transformed",
};

const caseStudies = [
  {
    id: 1,
    company: "TechStart Inc.",
    industry: "SaaS",
    challenge: "Low conversion rates and high CAC",
    solution: "Implemented AI-driven lead scoring and personalized campaigns",
    results: {
      roi: "320%",
      conversion: "+145%",
      cac: "-62%",
    },
  },
  {
    id: 2,
    company: "E-Commerce Plus",
    industry: "Retail",
    challenge: "Abandoned cart rate over 70%",
    solution: "AI chatbot and WhatsApp recovery campaigns",
    results: {
      roi: "280%",
      recovery: "+85%",
      revenue: "+$2.3M",
    },
  },
  {
    id: 3,
    company: "HealthTech Solutions",
    industry: "Healthcare",
    challenge: "Poor patient engagement and appointment no-shows",
    solution: "AI telecaller and automated reminder system",
    results: {
      roi: "410%",
      engagement: "+200%",
      noShows: "-78%",
    },
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl gradient-text">
            Case Studies
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Real results from real businesses. See how we've helped companies
            achieve exponential growth with our AI-powered solutions.
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id} glow className="flex flex-col">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{study.company}</h3>
                  <span className="text-sm text-muted-foreground">
                    {study.industry}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Challenge
                    </p>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Solution
                    </p>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-lg font-bold text-primary">{value}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {key}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full group">
                Read Full Story
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="flex items-center space-x-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="text-3xl font-bold">95%</p>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
