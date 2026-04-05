"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
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

  <div id="about-story" data-section="about-story">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Mission"
      description="Manx Growers Network exists to help local residents gain confidence in growing their own food and building self-sufficient outdoor spaces."
      bulletPoints={[
        {
          title: "Local Roots",
          description: "Supporting our Manx community.",
        },
        {
          title: "Sustainability",
          description: "Growing for the future.",
        },
        {
          title: "Hands-on Support",
          description: "Practical tools for everyone.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/flower-sprouts-before-planting-ground-pots-plastic-boxes-selective-focus-leaves-hello-spring-beginning-seasonal-spring-work-earth_166373-3535.jpg?_wi=3"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about-cta" data-section="about-cta">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Let's Grow"
      title="Start Your Growing Journey"
      description="Ready to get hands-on or join our community?"
      buttons={[
        {
          text: "Book a Free Quote",
          href: "/services",
        },
        {
          text: "Join the Community",
          href: "/community",
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
