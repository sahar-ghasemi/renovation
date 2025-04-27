export interface Stone {
  id: number;
  name: string;
  images: string[];
}

export const stones: Stone[] = [
  {
    id: 1,
    name: "Granite Black",
    images: [
      "/assets/images/stone1-1.jpg",
      "/assets/images/stone1-2.jpg",
      "/assets/images/stone1-3.jpg",
      "/assets/images/stone1-4.jpg",
      "/assets/images/stone1-5.jpg",
    ],
  },
  {
    id: 2,
    name: "Marble White",
    images: [
      "/assets/images/stone2-1.jpg",
      "/assets/images/stone2-2.jpg",
      "/assets/images/stone2-3.jpg",
    ],
  },
  {
    id: 3,
    name: "Travertine Classic",
    images: ["/assets/images/stone3-1.jpg", "/assets/images/stone3-2.jpg"],
  },
  {
    id: 4,
    name: "Onyx Gold",
    images: [
      "/assets/images/stone4-1.jpg",
      "/assets/images/stone4-2.jpg",
      "/assets/images/stone4-3.jpg",
    ],
  },
  {
    id: 5,
    name: "Limestone Grey",
    images: ["/assets/images/stone5-1.jpg", "/assets/images/stone5-2.jpg"],
  },
];
