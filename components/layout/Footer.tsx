import Link from "next/link";
import { Brain } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "Performance Marketing", href: "/services#performance" },
    { name: "AI CRM", href: "/services#crm" },
    { name: "WhatsApp Solutions", href: "/services#whatsapp" },
    { name: "Content Creation", href: "/services#content" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  Support: [
    { name: "Contact", href: "/contact" },
    { name: "Documentation", href: "/docs" },
    { name: "API", href: "/api" },
    { name: "Status", href: "/status" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">
                Pixel Grow
              </span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground">
              Revolutionizing digital marketing with AI-powered solutions. Your
              profitability is our only metric.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold leading-6">{category}</h3>
                <ul className="mt-6 space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Pixel Grow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
