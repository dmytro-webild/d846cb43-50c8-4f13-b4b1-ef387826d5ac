"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Community Hub",
          id: "/community",
        },
        {
          name: "About",
          id: "/about",
        },
      ]}
      brandName="Manx Growers Network"
      button={{
        text: "Join the Community",
        href: "/community",
      }}
    />
  </div>

  <div id="community-sales" data-section="community-sales">
      <SplitAbout
      textboxLayout="split-actions"
      useInvertedBackground={false}
      title="Online Growers Community"
      description="Join our subscription hub for weekly calls, expert advice, and a local community of Isle of Man gardeners. Just $5.99/mo."
      buttons={[
        {
          text: "Subscribe Now",
          href: "#",
        },
      ]}
      bulletPoints={[
        {
          title: "Discussion Feed",
          description: "Connect with others.",
        },
        {
          title: "Weekly Calls",
          description: "Live community engagement.",
        },
        {
          title: "Event Calendar",
          description: "Workshops and sessions.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-working-garden_23-2149128118.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "What's included in the $5.99 subscription?",
          content: "Weekly calls, chat access, and workshop calendar.",
        },
        {
          id: "2",
          title: "Is it for beginners?",
          content: "Yes, it is designed for all skill levels.",
        },
        {
          id: "3",
          title: "Can I cancel anytime?",
          content: "Absolutely, manage your subscription easily in your profile.",
        },
      ]}
      title="Community FAQ"
      description="Everything you need to know about joining our growing hub."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Manx Growers Network"
      leftLink={{
        text: "Services",
        href: "/services",
      }}
      rightLink={{
        text: "Community",
        href: "/community",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
