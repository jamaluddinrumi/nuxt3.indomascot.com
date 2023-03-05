const name = "INDOMASCOT";

const image = [
  "https://a.storyblok.com/f/118728/1400x1400/ba97dc3514/kostum-badut-maskot-burger-bangor-man.jpg/m/628x628",
  "https://a.storyblok.com/f/118728/1400x1400/122889d837/kostum-badut-maskot-roti-kapiten.jpg/m/628x628",
  "https://a.storyblok.com/f/118728/1400x1400/f6a29df146/kostum-badut-maskot-unilabs.jpg/m/628x628",
  "https://a.storyblok.com/f/118728/1400x1400/4ab74e83a1/kostum-badut-grab-jastip-motor-lagi.jpg/m/628x628",
  "https://a.storyblok.com/f/118728/1400x1400/92e6aec87c/kostum-badut-dr-rara-rs-lira-medika.jpg/m/628x628",
  "https://a.storyblok.com/f/118728/1400x1400/a2e11fad8c/kostum-badut-maskot-oppa-bowl.jpg/m/628x628",
];

const address = {
  streetAddress:
    "Jl. Cukang Kawung Gang Bojong Mekar No. 53 RT 01 RW 15 Cibeunying Kaler, Kec. Cimenyan",
  addressLocality: "Bandung",
  addressRegion: "BDO",
  postalCode: "40191",
  addressCountry: "ID",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: -6.886996,
  longitude: 107.6340354,
};

const url = "https://www.indomascot.com/";
const telephone = "+6282221556633";
const priceRange = "$$";
const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "16:30",
  },
];

export const getSchema = () => {
  return {
    name,
    image,
    address,
    geo,
    url,
    telephone,
    priceRange,
    openingHoursSpecification,
  };
};
