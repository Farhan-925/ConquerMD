import { FaInstagram, FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const footerLinks = [
  {
    title: "MENU",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Men", href: "/collections/men" },
      { label: "Women", href: "/collections/women" },
      { label: "Treatments", href: "/treatments" },
      { label: "Schedule a Consult", href: "/consult" },
    ],
  },
  {
    title: "TREATMENTS",
    links: [
      { label: "Women's Health", href: "/treatments/women" },
      { label: "Men's Health", href: "/treatments/men" },
      { label: "Weight Management", href: "/treatments/weight-management" },
      { label: "Longevity", href: "/treatments/longevity" },
      { label: "Skin & Hair", href: "/treatments/skin-hair" },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { label: "Our Story", href: "/story" },
      { label: "The Conquer Method", href: "/method" },
      { label: "Why Conquer MD", href: "/why-us" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Science & Research", href: "/research" },
      { label: "Guides", href: "/guides" },
      { label: "Lab Directory", href: "/labs" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Membership", href: "/membership" },
    ],
  },
  {
    title: "AFFILIATES",
    links: [
      { label: "Partner Program", href: "/partner" },
      { label: "Refer a Friend", href: "/refer" },
      { label: "For Clinicians", href: "/clinicians" },
    ],
  },
];

export const socialIcons = [
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaFacebook, href: "#", label: "Facebook" },
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "#", label: "X (Twitter)" },
];

export const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Telehealth Consent & Open Payments", href: "/telehealth-consent" },
  { label: "Consumer Health Data Privacy Policy", href: "/privacy" },
  { label: "Your Privacy Choices", href: "/privacy-choices" },
];