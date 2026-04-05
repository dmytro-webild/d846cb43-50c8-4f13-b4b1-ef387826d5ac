"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

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

  <div id="services-list" data-section="services-list">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      features={[
        {
          title: "Get Started Growing",
          description: "Vegetable patches, raised beds, polytunnels, and greenhouse work.",
          imageSrc: "http://img.b2bpic.net/free-photo/flower-sprouts-before-planting-ground-pots-plastic-boxes-selective-focus-leaves-hello-spring-beginning-seasonal-spring-work-earth_166373-3535.jpg",
        },
        {
          title: "Professional Landscaping",
          description: "Transform your outdoor landscape effectively.",
          imageSrc: "http://img.b2bpic.net/free-photo/incognito-man-cutting-overgrown-bushes_651396-1551.jpg",
        },
        {
          title: "General Maintenance",
          description: "Ongoing upkeep for a healthy garden year-round.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-working-garden-growing-plants-pots-cutting-branches-with-pruner-gardening-job-concept_74855-12893.jpg",
        },
      ]}
      title="Comprehensive Growing Services"
      description="From raised beds to general gardening, we help you manage your space."
    />
  </div>

  <div id="booking-form" data-section="booking-form">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Booking Request"
      title="Book Your Free Quote"
      description="Ready to transform your growing space? Tell us about your project and we'll reach out to schedule your quote."
      buttons={[
        {
          text: "Submit Enquiry",
          href: "#",
        },
      ]}
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
