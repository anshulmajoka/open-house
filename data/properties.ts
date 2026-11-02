export type City = "Gurgaon" | "Noida" | "Ghaziabad";
export type Status = "Available" | "Coming Soon" | "Sold" | "Booked";
export type Configuration =
  | "1 BHK"
  | "2 BHK"
  | "3 BHK"
  | "3 BHK + SQ"
  | "4 BHK";

export type Room = { name: string; area: string; size: string };
export type GalleryImage = { label: string; src: string };

export type Property = {
  slug: string;
  society: string;
  sector: string;
  city: City;
  unit: string;
  configuration: Configuration;
  sqft: number;
  carpetSqft: number;
  price: number;
  status: Status;
  sunlight: number;
  connectivity: number;
  baths: number;
  balconies: number;
  floor: string;
  parking: string;
  facing: string;
  balconyView: string;
  images: GalleryImage[];
  highlights: string[];
  rooms: Room[];
  furnishing: string[];
  summary: string;
};

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

const shots = {
  living: photo("photo-1600210492486-724fe5c67fb0"),
  bright: photo("photo-1600607687939-ce8a6c25118c"),
  kitchen: photo("photo-1556912173-46c336c7fd55"),
  bedroom: photo("photo-1616594039964-ae9021a400a0"),
  sofa: photo("photo-1560448204-e02f11c3d0e2"),
  dining: photo("photo-1600585154526-990dced4db0d"),
  exterior: photo("photo-1600585154340-be6161a56a0c"),
  apartment: photo("photo-1502672260266-1c1ef2d93688"),
  white: photo("photo-1600566753086-00f18fb6b3ea"),
  modern: photo("photo-1600573472592-401b489a3cdc"),
};

const whyBuy = [
  "Priced against recent sales in the same tower",
  "Legal file reviewed before the first visit",
  "Staged so the rooms are easy to judge",
];

function rooms(pairs: [string, string, string][]): Room[] {
  return pairs.map(([name, area, size]) => ({ name, area, size }));
}

export const properties: Property[] = [
  {
    slug: "maple-court-sector-92",
    society: "Maple Court",
    sector: "Sector 92",
    city: "Gurgaon",
    unit: "M-06",
    configuration: "3 BHK",
    sqft: 1190,
    carpetSqft: 695,
    price: 14_000_000,
    status: "Available",
    sunlight: 8,
    connectivity: 8,
    baths: 2,
    balconies: 3,
    floor: "3rd floor",
    parking: "1 covered",
    facing: "Northeast",
    balconyView: "Tower and open green",
    images: [
      { label: "Living room", src: shots.living },
      { label: "Kitchen", src: shots.kitchen },
      { label: "Bedroom", src: shots.bedroom },
      { label: "Dining", src: shots.dining },
    ],
    highlights: [
      "Low floor with a short walk from the lobby",
      "Dwarka Expressway access without a highway-facing bedroom",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "155 sq. ft.", "15.5 × 10 ft"],
      ["Primary bedroom", "120 sq. ft.", "12 × 10 ft"],
      ["Bedroom 2", "110 sq. ft.", "11 × 10 ft"],
      ["Bedroom 3", "89 sq. ft.", "10.9 × 8.2 ft"],
      ["Kitchen", "60 sq. ft.", "8.6 × 7 ft"],
    ]),
    furnishing: ["Modular kitchen", "Wardrobes", "Light fixtures", "Fans"],
    summary:
      "A compact 3 BHK in Sector 92, priced from sales in the same stack and ready for a daytime visit.",
  },
  {
    slug: "cedar-residency-sector-70",
    society: "Cedar Residency",
    sector: "Sector 70",
    city: "Gurgaon",
    unit: "B4-503",
    configuration: "3 BHK",
    sqft: 1177,
    carpetSqft: 710,
    price: 16_200_000,
    status: "Available",
    sunlight: 7.5,
    connectivity: 8,
    baths: 2,
    balconies: 2,
    floor: "5th floor",
    parking: "1 covered",
    facing: "West",
    balconyView: "Internal garden",
    images: [
      { label: "Living room", src: shots.sofa },
      { label: "Bright room", src: shots.bright },
      { label: "Kitchen", src: shots.kitchen },
      { label: "Bedroom", src: shots.bedroom },
    ],
    highlights: [
      "Afternoon light in the living room",
      "Society maintenance receipts for the last year are on file",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "168 sq. ft.", "16 × 10.5 ft"],
      ["Primary bedroom", "130 sq. ft.", "13 × 10 ft"],
      ["Bedroom 2", "108 sq. ft.", "12 × 9 ft"],
      ["Bedroom 3", "96 sq. ft.", "12 × 8 ft"],
      ["Kitchen", "64 sq. ft.", "8 × 8 ft"],
    ]),
    furnishing: ["Modular kitchen", "Wardrobes in two rooms", "Geysers"],
    summary:
      "A west-facing 3 BHK in Sector 70 with a garden-side balcony and a complete society dues file.",
  },
  {
    slug: "parkline-towers-sector-37d",
    society: "Parkline Towers",
    sector: "Sector 37D",
    city: "Gurgaon",
    unit: "T6-1701",
    configuration: "3 BHK",
    sqft: 1813,
    carpetSqft: 1120,
    price: 22_000_000,
    status: "Available",
    sunlight: 7,
    connectivity: 8,
    baths: 3,
    balconies: 2,
    floor: "17th floor",
    parking: "1 covered",
    facing: "Northeast",
    balconyView: "Open area and approach road",
    images: [
      { label: "Living room", src: shots.bright },
      { label: "Dining", src: shots.dining },
      { label: "Bedroom", src: shots.white },
      { label: "Exterior", src: shots.exterior },
    ],
    highlights: [
      "Larger carpet than the typical 3 BHK on this road",
      "Three bathrooms, so guests do not share with the primary suite",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "240 sq. ft.", "20 × 12 ft"],
      ["Primary bedroom", "160 sq. ft.", "16 × 10 ft"],
      ["Bedroom 2", "130 sq. ft.", "13 × 10 ft"],
      ["Bedroom 3", "120 sq. ft.", "12 × 10 ft"],
      ["Kitchen", "90 sq. ft.", "10 × 9 ft"],
    ]),
    furnishing: ["Modular kitchen", "Wardrobes", "Split air conditioners in two rooms"],
    summary:
      "A high-floor 3 BHK in Sector 37D with a wide living room and a northeast balcony.",
  },
  {
    slug: "millennia-greens-sector-37d",
    society: "Millennia Greens",
    sector: "Sector 37D",
    city: "Gurgaon",
    unit: "A-2105",
    configuration: "2 BHK",
    sqft: 718,
    carpetSqft: 430,
    price: 6_800_000,
    status: "Available",
    sunlight: 7,
    connectivity: 7.5,
    baths: 2,
    balconies: 1,
    floor: "21st floor",
    parking: "1 open",
    facing: "East",
    balconyView: "Podium",
    images: [
      { label: "Living room", src: shots.apartment },
      { label: "Kitchen", src: shots.kitchen },
      { label: "Bedroom", src: shots.bedroom },
      { label: "Detail", src: shots.modern },
    ],
    highlights: [
      "Entry price under 1 Cr on the Dwarka Expressway side",
      "Both bedrooms take morning light",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "140 sq. ft.", "14 × 10 ft"],
      ["Primary bedroom", "110 sq. ft.", "11 × 10 ft"],
      ["Bedroom 2", "90 sq. ft.", "10 × 9 ft"],
      ["Kitchen", "48 sq. ft.", "8 × 6 ft"],
    ]),
    furnishing: ["Open kitchen", "Fans and lights", "No wardrobes"],
    summary:
      "A small 2 BHK for a first home near Sector 37D, with an open kitchen and one parking bay.",
  },
  {
    slug: "avenue-one-sector-102",
    society: "Avenue One",
    sector: "Sector 102",
    city: "Gurgaon",
    unit: "D-901",
    configuration: "2 BHK",
    sqft: 606,
    carpetSqft: 380,
    price: 7_900_000,
    status: "Coming Soon",
    sunlight: 6.5,
    connectivity: 8,
    baths: 2,
    balconies: 1,
    floor: "9th floor",
    parking: "1 covered",
    facing: "South",
    balconyView: "Internal road",
    images: [
      { label: "Living room", src: shots.white },
      { label: "Kitchen", src: shots.kitchen },
      { label: "Bedroom", src: shots.bedroom },
      { label: "Building", src: shots.exterior },
    ],
    highlights: [
      "Visit slots open next week, after staging",
      "Covered parking included in the quoted price",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living", "120 sq. ft.", "12 × 10 ft"],
      ["Primary bedroom", "100 sq. ft.", "10 × 10 ft"],
      ["Bedroom 2", "80 sq. ft.", "10 × 8 ft"],
      ["Kitchen", "42 sq. ft.", "7 × 6 ft"],
    ]),
    furnishing: ["Basic kitchen", "Lights only"],
    summary:
      "A compact 2 BHK in Sector 102. Staging finishes this week, so visits start after that.",
  },
  {
    slug: "horizon-crest-sector-65",
    society: "Horizon Crest",
    sector: "Sector 65",
    city: "Gurgaon",
    unit: "C-1202",
    configuration: "4 BHK",
    sqft: 2680,
    carpetSqft: 1760,
    price: 34_000_000,
    status: "Available",
    sunlight: 8.5,
    connectivity: 9,
    baths: 4,
    balconies: 3,
    floor: "12th floor",
    parking: "2 covered",
    facing: "Northeast",
    balconyView: "Golf course edge and road",
    images: [
      { label: "Living room", src: shots.dining },
      { label: "Bright room", src: shots.bright },
      { label: "Bedroom", src: shots.bedroom },
      { label: "Kitchen", src: shots.kitchen },
    ],
    highlights: [
      "Two parking bays on the same level",
      "Primary suite is separate from the other three rooms",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "340 sq. ft.", "20 × 17 ft"],
      ["Primary bedroom", "200 sq. ft.", "16 × 12.5 ft"],
      ["Bedroom 2", "150 sq. ft.", "15 × 10 ft"],
      ["Bedroom 3", "140 sq. ft.", "14 × 10 ft"],
      ["Bedroom 4", "120 sq. ft.", "12 × 10 ft"],
      ["Kitchen", "110 sq. ft.", "11 × 10 ft"],
    ]),
    furnishing: ["Modular kitchen", "Wardrobes in all bedrooms", "False ceiling"],
    summary:
      "A 4 BHK on Golf Course Extension Road with two covered parking spots and a separate primary suite.",
  },
  {
    slug: "northpark-75",
    society: "Northpark 75",
    sector: "Sector 75",
    city: "Noida",
    unit: "D-208",
    configuration: "3 BHK + SQ",
    sqft: 1540,
    carpetSqft: 980,
    price: 15_800_000,
    status: "Available",
    sunlight: 8,
    connectivity: 8,
    baths: 3,
    balconies: 2,
    floor: "2nd floor",
    parking: "1 covered",
    facing: "South",
    balconyView: "Central lawn",
    images: [
      { label: "Living room", src: shots.living },
      { label: "Study", src: shots.modern },
      { label: "Kitchen", src: shots.kitchen },
      { label: "Bedroom", src: shots.bedroom },
    ],
    highlights: [
      "Servant room can work as a study or a guest room",
      "Low floor, so the lift is optional",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "210 sq. ft.", "18 × 11.5 ft"],
      ["Primary bedroom", "140 sq. ft.", "14 × 10 ft"],
      ["Bedroom 2", "120 sq. ft.", "12 × 10 ft"],
      ["Bedroom 3", "110 sq. ft.", "11 × 10 ft"],
      ["Study", "60 sq. ft.", "8 × 7.5 ft"],
      ["Kitchen", "80 sq. ft.", "10 × 8 ft"],
    ]),
    furnishing: ["Modular kitchen", "Wardrobes", "Study desk left by the seller"],
    summary:
      "A 3 BHK with a study in Sector 75, facing the lawn and priced inside the 1.5 to 2 Cr band.",
  },
  {
    slug: "cherry-county-techzone",
    society: "Cherry County",
    sector: "Techzone 4",
    city: "Noida",
    unit: "A2-1802",
    configuration: "2 BHK",
    sqft: 891,
    carpetSqft: 560,
    price: 10_300_000,
    status: "Available",
    sunlight: 7,
    connectivity: 7.8,
    baths: 2,
    balconies: 2,
    floor: "18th floor",
    parking: "1 covered",
    facing: "Northwest",
    balconyView: "Expressway side, buffered by the podium",
    images: [
      { label: "Living room", src: shots.sofa },
      { label: "Balcony light", src: shots.apartment },
      { label: "Kitchen", src: shots.kitchen },
      { label: "Bedroom", src: shots.white },
    ],
    highlights: [
      "Just over 1 Cr for a high floor in Greater Noida West",
      "Two balconies, one off the living room",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "160 sq. ft.", "16 × 10 ft"],
      ["Primary bedroom", "120 sq. ft.", "12 × 10 ft"],
      ["Bedroom 2", "100 sq. ft.", "10 × 10 ft"],
      ["Kitchen", "55 sq. ft.", "8 × 7 ft"],
    ]),
    furnishing: ["Semi-modular kitchen", "Wardrobe in the primary bedroom"],
    summary:
      "A high-floor 2 BHK in Techzone 4 with two balconies and a covered parking bay.",
  },
  {
    slug: "lotus-137",
    society: "Lotus 137",
    sector: "Sector 137",
    city: "Noida",
    unit: "B-904",
    configuration: "3 BHK",
    sqft: 2100,
    carpetSqft: 1340,
    price: 18_500_000,
    status: "Booked",
    sunlight: 8,
    connectivity: 8.5,
    baths: 3,
    balconies: 2,
    floor: "9th floor",
    parking: "2 covered",
    facing: "East",
    balconyView: "Park",
    images: [
      { label: "Living room", src: shots.bright },
      { label: "Dining", src: shots.dining },
      { label: "Bedroom", src: shots.bedroom },
      { label: "Kitchen", src: shots.kitchen },
    ],
    highlights: [
      "Token already placed — shown so you can see what sold",
      "Park-facing living room",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "260 sq. ft.", "20 × 13 ft"],
      ["Primary bedroom", "170 sq. ft.", "17 × 10 ft"],
      ["Bedroom 2", "140 sq. ft.", "14 × 10 ft"],
      ["Bedroom 3", "130 sq. ft.", "13 × 10 ft"],
      ["Kitchen", "95 sq. ft.", "10 × 9.5 ft"],
    ]),
    furnishing: ["Full modular kitchen", "Wardrobes", "Chimney and hob"],
    summary:
      "A park-facing 3 BHK in Sector 137. The token is placed, so it stays on the list as booked.",
  },
  {
    slug: "riverwalk-sector-150",
    society: "Riverwalk",
    sector: "Sector 150",
    city: "Noida",
    unit: "A-1601",
    configuration: "4 BHK",
    sqft: 3120,
    carpetSqft: 2050,
    price: 41_000_000,
    status: "Available",
    sunlight: 9,
    connectivity: 7.5,
    baths: 4,
    balconies: 3,
    floor: "16th floor",
    parking: "2 covered",
    facing: "Northeast",
    balconyView: "Open green and the expressway in the distance",
    images: [
      { label: "Living room", src: shots.modern },
      { label: "Dining", src: shots.dining },
      { label: "Bedroom", src: shots.bedroom },
      { label: "Exterior", src: shots.exterior },
    ],
    highlights: [
      "Largest carpet on this list",
      "Staff room and a separate utility balcony",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "380 sq. ft.", "22 × 17 ft"],
      ["Primary bedroom", "220 sq. ft.", "18 × 12 ft"],
      ["Bedroom 2", "160 sq. ft.", "16 × 10 ft"],
      ["Bedroom 3", "150 sq. ft.", "15 × 10 ft"],
      ["Bedroom 4", "140 sq. ft.", "14 × 10 ft"],
      ["Kitchen", "120 sq. ft.", "12 × 10 ft"],
    ]),
    furnishing: ["Designer kitchen", "Wardrobes", "Home automation panel"],
    summary:
      "A large 4 BHK in Sector 150, above 3,000 sq. ft., with two parking bays and a staff room.",
  },
  {
    slug: "bamheta-luxuria",
    society: "Bamheta Luxuria",
    sector: "Bamheta",
    city: "Ghaziabad",
    unit: "D-1701",
    configuration: "2 BHK",
    sqft: 965,
    carpetSqft: 620,
    price: 7_000_000,
    status: "Available",
    sunlight: 7.5,
    connectivity: 8,
    baths: 2,
    balconies: 2,
    floor: "17th floor",
    parking: "1 covered",
    facing: "Northwest",
    balconyView: "City side",
    images: [
      { label: "Living room", src: shots.apartment },
      { label: "Kitchen", src: shots.kitchen },
      { label: "Bedroom", src: shots.white },
      { label: "Detail", src: shots.sofa },
    ],
    highlights: [
      "Under 1 Cr with a covered parking bay",
      "Close to the Raj Nagar Extension market",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living and dining", "170 sq. ft.", "17 × 10 ft"],
      ["Primary bedroom", "125 sq. ft.", "12.5 × 10 ft"],
      ["Bedroom 2", "105 sq. ft.", "10.5 × 10 ft"],
      ["Kitchen", "58 sq. ft.", "8 × 7.2 ft"],
    ]),
    furnishing: ["Modular kitchen", "Wardrobes", "Geysers"],
    summary:
      "A 2 BHK in Bamheta at 70 Lac, with two balconies and a file that includes the latest maintenance bill.",
  },
  {
    slug: "crossings-orbit",
    society: "Crossings Orbit",
    sector: "Crossings Republik",
    city: "Ghaziabad",
    unit: "C-304",
    configuration: "1 BHK",
    sqft: 640,
    carpetSqft: 410,
    price: 4_600_000,
    status: "Sold",
    sunlight: 6.5,
    connectivity: 8,
    baths: 1,
    balconies: 1,
    floor: "3rd floor",
    parking: "1 open",
    facing: "East",
    balconyView: "Street",
    images: [
      { label: "Living room", src: shots.white },
      { label: "Kitchen", src: shots.kitchen },
      { label: "Bedroom", src: shots.bedroom },
      { label: "Building", src: shots.exterior },
    ],
    highlights: [
      "Sold last month — kept here as a price reference",
      "Useful if you want a 1 BHK benchmark in Crossings",
      ...whyBuy,
    ],
    rooms: rooms([
      ["Living", "140 sq. ft.", "14 × 10 ft"],
      ["Bedroom", "110 sq. ft.", "11 × 10 ft"],
      ["Kitchen", "45 sq. ft.", "7.5 × 6 ft"],
    ]),
    furnishing: ["Kitchen platform", "Lights and fans"],
    summary:
      "A sold 1 BHK in Crossings Republik. The page stays up so you can see what a recent deal looked like.",
  },
];

export const cities: City[] = ["Gurgaon", "Noida", "Ghaziabad"];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function propertiesIn(city: City) {
  return properties.filter((property) => property.city === city);
}
