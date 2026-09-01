// data/collections.js
export const womensCollection = {
  badge: "WOMEN'S BEST SELLERS",
  heading: "FEEL BETTER. PERFORM BETTER. CONQUER MORE",
  shopAllUrl: "/collections/women",
  theme: {
    sectionBg: "bg-[#efe8df]",      // Cream background
    cardBgTop: "bg-white",          // White card top half
    cardBgBottom: "bg-[#f7f5f2]",   // Cream card bottom half
    headingColor: "text-black",
    badgeBg: "bg-[#d8e3e5]",
    badgeText: "text-black",
    buttonBg: "bg-black",
    buttonText: "text-white",
  },
  products: [
    {
      id: "1",
      badge: "RX",
      priceTag: "FROM $89/MO",
      image: "/images/Women/HRTT.png",
      title: "Hormones (HRT)",
      description: "Feel like yourself again.",
      link: "/products/hrt",
    },
    {
      id: "2",
      badge: "RX",
      priceTag: "FROM $199/MO",
      image: "/images/Women/GLP.png",
      title: "Weight Management (GLP)",
      description: "Lose weight. Keep your strength.",
      link: "/products/weight-management",
    },
    {
      id: "3",
      badge: "RX",
      priceTag: "FROM $89/MO",
      image: "/images/Women/sermorelin.png",
      title: "Peptide Therapy (Sermorelin)",
      description: "Recover faster. Perform better.",
      link: "/products/sermorelin",
    },
    {
      id: "4",
      badge: "RX",
      priceTag: "FROM $89/MO",
      image: "/images/Women/NAD.png",
      title: "NAD+",
      description: "Energy that goes deeper. (Nasal spray)",
      link: "/products/nad",
    },
    {
      id: "5",
      badge: "RX",
      priceTag: "FROM $89/MO",
      image: "/images/Women/scream.png",
      title: "Sexual Health",
      description: "Get your groove back. (Scream Cream)",
      link: "/products/sexual-health",
    },
    {
      id: "6",
      badge: "RX",
      priceTag: "FROM $89/MO",
      image: "/images/Women/skin cream.png",
      title: "Skin & Hair Health",
      description: "GHK-Cu peptide care.",
      link: "/products/skin-hair",
    },
  ],
};

export const mensCollection = {
  badge: "MEN'S BEST SELLERS",
  heading: "BUILD STRENGTH. RESTORE ENERGY. CONQUER MORE.",
  shopAllUrl: "/collections/men",
theme: {
    sectionBg: "bg-black",
    cardBgTop: "bg-[#f4f1ea]",      // Off-white top half behind bottles
    cardBgBottom: "bg-[#eae6df]",   // Slightly darker cream bottom half
    headingColor: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-black",
    buttonBg: "bg-white",
    buttonText: "text-black",
  },
  products: [
    {
      id: "1",
      badge: "RX",
      priceTag: "FROM $149/MO",
      image: "/images/Men/1st.png",
      title: "Testosterone Optimization (TRT)",
      description: "Restore strength and drive",
      link: "/products/hrt",
    },
    {
      id: "2",
      badge: "RX",
      priceTag: "FROM $199/MO",
      image: "/images/Men/2nd.png",
      title: "Weight Management (GLP)",
      description: "Get Lean. Stay strong.",
      link: "/products/weight-management",
    },
    {
      id: "3",
      badge: "RX",
      priceTag: "FROM $89/MO",
      image: "/images/Men/3rd.png",
      title: "Peptide Therapy (Tesamorelin)",
      description: "Recover. Rebuild. Perform.",
      link: "/products/sermorelin",
    },
    {
      id: "4",
      badge: "RX",
      priceTag: "FROM $89/MO",
      image: "/images/Men/4th.png",
      title: "NAD+",
      description: "Energy that goes deeper. (Nasal spray)",
      link: "/products/nad",
    },
    {
      id: "5",
      badge: "RX",
      priceTag: "FROM $89/MO",
      image: "/images/Men/5th.png",
      title: "Sexual Health",
      description: "Get your groove back. (Scream Cream)",
      link: "/products/sexual-health",
    },
    
  ],
};