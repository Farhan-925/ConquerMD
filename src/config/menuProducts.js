// src/config/menuProducts.js
export const popularProducts = {
  women: [
    {
      id: "w1",
      title: "Weight Loss",
      description: "Metabolic support & GLP-1 treatments.",
      image: "https://conquermd.com/api/media/products/1787566405412-et4me6-men-glp-1-vial.png",
      href: "/weight-loss",
    },
    {
      id: "w2",
      title: "Hormone Optimization",
      description: "Menopause, energy & hormone balance.",
      image: "/images/home-v2/steps/HRT-vial.png",
      href: "/hormone-health",
    },
    {
      id: "w3",
      title: "Sermorelin Peptide",
      description: "Peptide associated with growth hormone support.",
      image: "https://conquermd.com/api/media/products/1787483782894-o4c2hh-1787482949985-21bjwl-959a1661-b587-470f-b94e-cf614b6a2b40-re.png",
      href: "/sermorelin",
    },
    {
      id: "w4",
      title: "NAD+ Nasal Spray",
      description: "Cellular energy and longevity support.",
      image: "https://conquermd.com/api/media/products/1787779398102-yl5qhu-Gemini_Generated_Image_90orbm90orbm90or-removebg-preview.png",
      href: "/nad",
    },
    {
      id: "w5",
      title: "Sexual Health",
      description: "Vitality and satisfaction care.",
      image: "https://conquermd.com/api/media/products/1787780777436-za4rkt-Gemini_Generated_Image_lemqpzlemqpzlemq-removebg-preview__1_.png",
      href: "/scream-cream",
    },
    {
      id: "w6",
      title: "Skin & Hair Health",
      description: "GHK-Cu peptide skin cream.",
      image: "https://conquermd.com/api/media/products/1787780359342-q27z8r-Gemini_Generated_Image_b8d4gob8d4gob8d4-removebg-preview.png",
      href: "/ghk-cu-peptide-skin-cream",
    },
  ],
  men: [
    {
      id: "m1",
      title: "Weight Loss",
      description: "Metabolic support & GLP-1 treatments.",
      image: "https://conquermd.com/api/media/products/1787566405412-et4me6-men-glp-1-vial.png",
      href: "/weight-loss",
    },
    {
      id: "m2",
      title: "Hormone Optimization",
      description: "Menopause, energy & hormone balance.",
      image: "/images/home-v2/steps/HRT-vial.png",
      href: "/hormone-health",
    },
    {
      id: "m3",
      title: "Testosterone Therapy",
      description: "Optimizing energy, focus & performance.",
      image: "/images/home-v2/steps/HRT-vial.png",
      href: "/men/testosterone-replacement",
    },
    {
      id: "m4",
      title: "Sermorelin Peptide",
      description: "Peptide associated with growth hormone support.",
      image: "https://conquermd.com/api/media/products/1787483782894-o4c2hh-1787482949985-21bjwl-959a1661-b587-470f-b94e-cf614b6a2b40-re.png",
      href: "/sermorelin",
    },
    {
      id: "m5",
      title: "NAD+ Therapy",
      description: "Boost cellular health and clarity.",
      image: "https://conquermd.com/api/media/products/1787779398102-yl5qhu-Gemini_Generated_Image_90orbm90orbm90or-removebg-preview.png",
      href: "/nad",
    },
    {
      id: "m6",
      title: "Longevity & Performance",
      description: "Sustained baseline optimization.",
      image: "https://conquermd.com/api/media/products/1787780359342-q27z8r-Gemini_Generated_Image_b8d4gob8d4gob8d4-removebg-preview.png",
      href: "/longevity",
    },
  ],
};

// Add to src/config/menuProducts.js
export const megaMenuData = {
  men: {
    title: "Men's Health",
    allUrl: "/men-products",
    categories: [
      { label: "Peptide Therapy", href: "/sermorelin" },
      { label: "Hormone Health", href: "/men/testosterone-replacement" },
      { label: "Longevity", href: "/longevity" },
      { label: "Lab Tests", href: "/schedule-consult" },
      { label: "Supplements", href: "/nad" },
      { label: "Sexual Health", href: "/sexual-health" },
      { label: "Weight Loss", href: "/weight-loss" },
    ],
  },
  women: {
    title: "Women's Health",
    allUrl: "/women-products",
    categories: [
      { label: "Peptide Therapy", href: "/sermorelin" },
      { label: "Hormone Health", href: "/hormone-health" },
      { label: "Longevity", href: "/longevity" },
      { label: "Lab Tests", href: "/schedule-consult" },
      { label: "Supplements", href: "/nad" },
      { label: "Sexual Health", href: "/scream-cream" },
      { label: "Weight Loss", href: "/weight-loss" },
    ],
  },
};