"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';

export default function ServicesPage() {
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
                { name: "Home", id: "/" },
                { name: "Services", id: "/services" },
                { name: "Community Hub", id: "/community" },
                { name: "About", id: "/about" },
            ]}
            brandName="Manx Growers Network"
            button={{ text: "Join the Community", href: "/community" }}
            />
        </div>

        <div className="pt-32 pb-16">
            <FeatureCardThree
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            features={[
                { title: "Raised Beds", description: "High-quality timber raised beds installed.", imageSrc: "http://img.b2bpic.net/free-photo/flower-sprouts-before-planting-ground-pots-plastic-boxes-selective-focus-leaves-hello-spring-beginning-seasonal-spring-work-earth_166373-3535.jpg?_wi=1" },
                { title: "Polytunnels", description: "Seasonal polytunnel setup and maintenance.", imageSrc: "http://img.b2bpic.net/free-photo/incognito-man-cutting-overgrown-bushes_651396-1551.jpg?_wi=1" },
                { title: "General Maintenance", description: "Regular garden care, weeding, and advice.", imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-working-garden-growing-plants-pots-cutting-branches-with-pruner-gardening-job-concept_74855-12893.jpg?_wi=1" },
            ]}
            title="Our Services"
            description="Detailed list of professional gardening services available to help your garden thrive."
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterLogoReveal
            logoText="Manx Growers Network"
            leftLink={{ text: "Services", href: "/services" }}
            rightLink={{ text: "Community", href: "/community" }}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
