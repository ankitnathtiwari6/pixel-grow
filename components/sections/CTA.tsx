"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import {
  ArrowRight,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  CheckCircle,
  Send,
} from "lucide-react";

export function CTA() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent, type: "lead" | "demo") => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(`${type} form captured:`, formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsLeadModalOpen(false);
      setIsDemoModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 2000);
  };

  const renderFormContent = (type: "lead" | "demo") => {
    if (submitSuccess) {
      return (
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Success! 🎉</h3>
          <p className="text-gray-400">
            {type === "demo"
              ? "Thank you! We'll contact you to schedule your demo within 24 hours."
              : "Thank you for your interest! Our team will contact you within 24 hours."}
          </p>
        </div>
      );
    }

    return (
      <form onSubmit={(e) => handleSubmit(e, type)} className="space-y-4">
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
            {type === "demo"
              ? "What would you like to see in the demo?"
              : "How can we help?"}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-white resize-none"
            placeholder={
              type === "demo"
                ? "Tell us about your specific needs..."
                : "Tell us about your marketing goals..."
            }
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
                {type === "demo" ? "Schedule Demo" : "Get Started"}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setIsLeadModalOpen(false);
              setIsDemoModalOpen(false);
            }}
            className="px-6"
          >
            Cancel
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to our Terms of Service and Privacy Policy.
          We'll contact you within 24 hours.
        </p>
      </form>
    );
  };

  return (
    <>
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-green-500/20 to-blue-600/20 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            <div className="absolute inset-0 ai-grid opacity-10"></div>

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Revolutionize Your Marketing?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Join 500+ businesses already growing with our AI-powered
                solutions. No setup fees, no hidden costs - just results.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  variant="glow"
                  size="lg"
                  className="group"
                  onClick={() => setIsLeadModalOpen(true)}
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Modal */}
      <Modal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        title="Start Your Growth Journey"
      >
        {renderFormContent("lead")}
      </Modal>

      {/* Schedule Demo Modal */}
      <Modal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Schedule Your Demo"
      >
        {renderFormContent("demo")}
      </Modal>
    </>
  );
}
