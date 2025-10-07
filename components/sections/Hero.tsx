// components/sections/Hero.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import {
  ArrowRight,
  Sparkles,
  Send,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  CheckCircle,
  Bot,
  TrendingUp,
  Users,
  Zap,
  Target,
} from "lucide-react";

export function Hero() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isFlowModalOpen, setIsFlowModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Lead captured:", formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsLeadModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 2000);
  };

  const flowSteps = [
    {
      icon: Users,
      title: "1. Discovery Call",
      description: "We understand your business goals and challenges",
      color: "from-blue-500 to-cyan-500",
      delay: "0ms",
    },
    {
      icon: Bot,
      title: "2. AI Integration",
      description: "Deploy our AI-powered marketing tools and CRM",
      color: "from-green-500 to-emerald-500",
      delay: "100ms",
    },
    {
      icon: Zap,
      title: "3. Campaign Launch",
      description: "Launch multi-channel campaigns with AI optimization",
      color: "from-yellow-500 to-orange-500",
      delay: "200ms",
    },
    {
      icon: TrendingUp,
      title: "4. Real-time Optimization",
      description: "AI continuously optimizes for maximum ROI",
      color: "from-purple-500 to-pink-500",
      delay: "300ms",
    },
    {
      icon: Target,
      title: "5. Scale & Grow",
      description: "Scale successful campaigns and expand reach",
      color: "from-red-500 to-rose-500",
      delay: "400ms",
    },
    {
      icon: CheckCircle,
      title: "6. Profit & Repeat",
      description: "Track profitability and continuously improve",
      color: "from-green-500 to-teal-500",
      delay: "500ms",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-700 hover:ring-green-500/50 transition-all">
              <Sparkles className="inline h-4 w-4 mr-1 text-green-500" />
              AI-Powered Marketing Revolution
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="block">Grow Your Business</span>
            <span className="block gradient-text">With AI Intelligence</span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            We're a team of software engineers revolutionizing digital
            marketing. Our only metric is your profitability. No extra costs for
            CRM, calling, or WhatsApp platforms - everything integrated,
            AI-powered, and results-driven.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="glow"
              size="lg"
              className="group"
              onClick={() => setIsLeadModalOpen(true)}
            >
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsFlowModalOpen(true)}
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {["500+ Clients", "3x ROI", "24/7 Support", "0 Extra Costs"].map(
              (stat) => (
                <div key={stat} className="text-center">
                  <p className="text-2xl font-bold text-green-500">{stat}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Lead Capture Modal */}
      <Modal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        title="Start Your Growth Journey"
      >
        {!submitSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                <User className="h-4 w-4 mr-2" />
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                <Mail className="h-4 w-4 mr-2" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-white"
                placeholder="john@company.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-white"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <Building className="h-4 w-4 mr-2" />
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-white"
                  placeholder="Acme Inc."
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                <MessageSquare className="h-4 w-4 mr-2" />
                How can we help?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-white resize-none"
                placeholder="Tell us about your marketing goals..."
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                variant="glow"
                className="flex-1 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get Started
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsLeadModalOpen(false)}
                className="px-6"
              >
                Cancel
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to our Terms of Service and Privacy
              Policy. We'll contact you within 24 hours.
            </p>
          </form>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Success! 🎉</h3>
            <p className="text-gray-400">
              Thank you for your interest! Our team will contact you within 24
              hours.
            </p>
          </div>
        )}
      </Modal>

      {/* Enhanced Flow Diagram Modal */}
      {/* Enhanced Flow Diagram Modal */}
      <Modal
        isOpen={isFlowModalOpen}
        onClose={() => setIsFlowModalOpen(false)}
        className="max-w-3xl"
      >
        <style jsx>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          @keyframes arrowFlow {
            0% {
              transform: translateY(-10px);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(10px);
              opacity: 0;
            }
          }
          @keyframes dotPulse {
            0%,
            100% {
              transform: scale(0.8);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
          }
          .flow-step {
            animation: slideInUp 0.6s ease-out forwards;
            opacity: 0;
          }
          .flow-icon {
            animation: float 3s ease-in-out infinite;
          }
          .arrow-animated {
            animation: arrowFlow 2s ease-in-out infinite;
          }
          .dot-pulse {
            animation: dotPulse 2s ease-in-out infinite;
          }
        `}</style>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-green-500 animate-pulse" />
              <span className="text-sm text-gray-400">AI-Powered Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              How Pixel Grow Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven 6-step process leverages AI at every stage to maximize
              your ROI and ensure sustainable business growth.
            </p>
          </div>

          {/* Flowchart */}
          <div className="relative flex flex-col items-center">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 ai-grid opacity-5 pointer-events-none"></div>

            {/* Steps */}
            <div className="space-y-0 w-full max-w-md">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center"
                  >
                    {/* Step Card */}
                    <div
                      className="flow-step w-full group"
                      style={{ animationDelay: step.delay }}
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 border border-gray-700/50 group-hover:border-green-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20 group-hover:scale-105">
                        {/* Gradient Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        ></div>

                        {/* Content */}
                        <div className="relative z-10 flex items-center gap-4">
                          {/* Icon */}
                          <div className="relative flex-shrink-0">
                            <div
                              className={`flow-icon w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                              style={{ animationDelay: step.delay }}
                            >
                              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                              <Icon className="h-7 w-7 text-white relative z-10" />
                            </div>
                            {/* Pulse Ring */}
                            <div
                              className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500`}
                            ></div>
                          </div>

                          {/* Text */}
                          <div className="flex-1">
                            <h3 className="font-bold text-base mb-1">
                              {step.title}
                            </h3>
                            <p className="text-gray-400 text-xs leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Animated Arrow Connector */}
                    {index < flowSteps.length - 1 && (
                      <div className="relative h-12 w-0.5 my-2 bg-gradient-to-b from-gray-700 to-gray-600 overflow-visible flex flex-col items-center justify-center">
                        {/* Animated Flowing Arrow */}
                        <div
                          className="arrow-animated absolute"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            className="text-green-500"
                          >
                            <path
                              d="M6 0 L6 8 M6 8 L3 5 M6 8 L9 5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            />
                          </svg>
                        </div>

                        {/* Pulsing Dots */}
                        <div
                          className="dot-pulse absolute w-1.5 h-1.5 bg-green-500 rounded-full"
                          style={{ animationDelay: `${index * 0.3 + 0.5}s` }}
                        ></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA with Animation */}
          <div className="text-center pt-8 border-t border-gray-800 relative mt-4">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

            <Sparkles className="h-6 w-6 text-green-500 mx-auto mb-3 animate-pulse" />
            <p className="text-gray-400 mb-6 text-lg">
              Ready to transform your marketing with AI?
            </p>
            <Button
              variant="glow"
              size="lg"
              onClick={() => {
                setIsFlowModalOpen(false);
                setIsLeadModalOpen(true);
              }}
              className="group"
            >
              Start Your Journey Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
