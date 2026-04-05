"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function AboutPage() {
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
              { name: "About", id: "/about" },
              { name: "Services", id: "/services" },
              { name: "Community", id: "/community" },
            ]}
            brandName="Manx Growers Network"
            button={{ text: "Join the Community", href: "/community" }}
        />
        
        <SplitAbout
            title="Our Story & Mission"
            description="Manx Growers Network was founded on the belief that everyone in the Isle of Man should have access to fresh, locally grown food. We provide the tools, knowledge, and community support to make this a reality for every household."
            bulletPoints={[
                { title: "Sustainable Practices", description: "Promoting organic and regenerative gardening techniques." },
                { title: "Community Empowerment", description: "Building strong networks of local growers who share resources and skills." },
                { title: "Local Sovereignty", description: "Reducing reliance on imported goods by fostering island-wide food production." }
            ]}
            textboxLayout="split"
            imageSrc="http://img.b2bpic.net/free-photo/happy-woman-working-garden-growing-plants-pots-cutting-branches-with-pruner-gardening-job-concept_74855-12893.jpg?_wi=1"
        />

        <TestimonialCardThirteen
            title="What Our Members Say"
            description="Read stories from fellow islanders who are transforming their outdoor spaces."
            testimonials={[
                { id: "1", name: "Sarah T.", handle: "@grower", testimonial: "The raised beds have transformed my small backyard!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-elderly-female-gardener-wearing-gardening-hat-holding-rake-shoulder-green_141793-92966.jpg" },
                { id: "2", name: "Mark L.", handle: "@local", testimonial: "So supportive for beginners like me.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-gardening-greenhouse_23-2148509891.jpg" }
            ]}
            showRating={true}
            animationType="slide-up"
            textboxLayout="default"
        />

        <FooterLogoReveal
            logoText="Manx Growers Network"
            leftLink={{ text: "Home", href: "/" }}
            rightLink={{ text: "Community", href: "/community" }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}