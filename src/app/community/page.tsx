"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import { ShieldCheck, Users, Lock, CreditCard } from "lucide-react";

export default function CommunityHubPage() {
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
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "/" },
            { name: "Services", id: "/services" },
            { name: "Community Hub", id: "/community" },
            { name: "About", id: "/about" },
          ]}
          brandName="Manx Growers Network"
        />

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Member-Only Community Hub</h1>
            <p className="text-xl mb-12 opacity-80">
              Access premium growing resources, exclusive workshops, and connect with fellow Isle of Man growers in our secure members area.
            </p>
          </div>

          <FeatureCardSix
            title="Member Benefits & Features"
            description="What you unlock with your community membership."
            textboxLayout="default"
            useInvertedBackground={true}
            animationType="slide-up"
            features={[
              { 
                title: "Secure Access", 
                description: "Member-only portal with encrypted content protection.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bw1ry3A2rZw2ypv4u6EYCZKc09/uploaded-1775385541540-f7ageg8c.png"
              },
              { 
                title: "Private Forums", 
                description: "Discuss techniques and share tips in a safe, moderated environment.",                imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-garden_23-2149128118.jpg?_wi=1"
              },
              { 
                title: "Paywall Integration", 
                description: "Streamlined billing for recurring community access.",                imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-working-garden-growing-plants-pots-cutting-branches-with-pruner-gardening-job-concept_74855-12893.jpg?_wi=1"
              }
            ]}
          />
        </div>

        <FooterLogoReveal
          logoText="Manx Growers Network"
          leftLink={{ text: "Services", href: "/services" }}
          rightLink={{ text: "Community", href: "/community" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}