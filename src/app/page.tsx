"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

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

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      title="Helping the Isle of Man Grow Its Own Food"
      description="Practical support for creating vegetable growing spaces and a community-led movement for self-sufficiency. Join us to start your growing journey today."
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
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-working-garden_23-2149128118.jpg"
      imageAlt="Community vegetable garden"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-elderly-female-gardener-wearing-gardening-hat-holding-rake-shoulder-green_141793-92966.jpg",
          alt: "Local grower 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-gardening-greenhouse_23-2148509891.jpg",
          alt: "Local grower 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-male-florist-work_23-2149127312.jpg",
          alt: "Local grower 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-with-copy-space-medium-shot_23-2149009281.jpg",
          alt: "Local grower 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pleased-young-gardener-woman-with-short-hair-apron-hat-holding-plant-lookign-camera-with-smile-face-standing-light-background_141793-45497.jpg",
          alt: "Local grower 5",
        },
      ]}
      avatarText="Join 500+ Manx growers"
      marqueeItems={[
        {
          type: "text",
          text: "Sustainable Growing",
        },
        {
          type: "text",
          text: "Local Isle of Man",
        },
        {
          type: "text",
          text: "Community Support",
        },
        {
          type: "text",
          text: "Organic Produce",
        },
        {
          type: "text",
          text: "Expert Guidance",
        },
      ]}
    />
  </div>

  <div id="about-intro" data-section="about-intro">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Practical & Community-Led"
      description="Manx Growers Network is your go-to for hands-on gardening services and a supportive growers community. We help you build self-sufficiency, one patch at a time."
      bulletPoints={[
        {
          title: "Expert Guidance",
          description: "Practical, beginner-friendly advice.",
        },
        {
          title: "Local Expertise",
          description: "Tailored for the Isle of Man.",
        },
        {
          title: "Community Driven",
          description: "Connect with fellow growers.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bw1ry3A2rZw2ypv4u6EYCZKc09/uploaded-1775385541540-f7ageg8c.png"
      imageAlt="Manx Growers Network Brand"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="services-preview" data-section="services-preview">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Start Your Growing Journey",
          description: "Vegetable patches, raised beds, polytunnels, and greenhouse work.",
          imageSrc: "http://img.b2bpic.net/free-photo/flower-sprouts-before-planting-ground-pots-plastic-boxes-selective-focus-leaves-hello-spring-beginning-seasonal-spring-work-earth_166373-3535.jpg",
        },
        {
          title: "Professional Landscaping",
          description: "High-quality landscaping services for your outdoor spaces.",
          imageSrc: "http://img.b2bpic.net/free-photo/incognito-man-cutting-overgrown-bushes_651396-1551.jpg",
        },
        {
          title: "General Gardening",
          description: "Ongoing maintenance and practical help.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-working-garden-growing-plants-pots-cutting-branches-with-pruner-gardening-job-concept_74855-12893.jpg",
        },
      ]}
      title="Our Growing Services"
      description="Professional support for every step of your growing journey."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "monthly",
          badge: "Community",
          price: "$5.99/mo",
          subtitle: "Everything you need to grow",
          features: [
            "Facebook-style discussion",
            "Weekly group calls",
            "Events & workshop calendar",
            "Expert support",
          ],
          buttons: [
            {
              text: "Join the Community",
              href: "/community",
            },
          ],
        },
      ]}
      title="Community Hub Subscription"
      description="Connect, learn, and grow together."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah T.",
          handle: "@grower",
          testimonial: "The raised beds have transformed my small backyard!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-elderly-female-gardener-wearing-gardening-hat-holding-rake-shoulder-green_141793-92966.jpg",
        },
        {
          id: "2",
          name: "Mark L.",
          handle: "@local",
          testimonial: "So supportive for beginners like me.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-gardening-greenhouse_23-2148509891.jpg",
        },
        {
          id: "3",
          name: "Jane D.",
          handle: "@member",
          testimonial: "The community calls keep me motivated every week.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-male-florist-work_23-2149127312.jpg",
        },
        {
          id: "4",
          name: "Tom K.",
          handle: "@gardener",
          testimonial: "Excellent service and locally focused.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-with-copy-space-medium-shot_23-2149009281.jpg",
        },
        {
          id: "5",
          name: "Lucy W.",
          handle: "@enthusiast",
          testimonial: "Building self-sufficiency together is so rewarding.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pleased-young-gardener-woman-with-short-hair-apron-hat-holding-plant-lookign-camera-with-smile-face-standing-light-background_141793-45497.jpg",
        },
      ]}
      showRating={true}
      title="Community Voices"
      description="Hear from local residents building their own food spaces."
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
