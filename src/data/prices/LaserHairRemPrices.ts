export type PriceLine = {
  name: string;
  price: number;
  originalPrice?: number;
  note?: string;
};

export type PriceSection = {
  title: string;
  subtitle?: string;
  items: PriceLine[];
};

export type PriceTab = {
  key: string;
  label: string;
  header?: string;
  sections: PriceSection[];
};

export const LASER_PRICE_TABS: PriceTab[] = [
  {
    key: "alexandrite_ndyag",
    label: "Alexandrite & ND YAG Laser",
    header: "Price for one session",
    sections: [
      {
        title: "Face",
        items: [
          {
            name: "Full face",
            price: 100,
            note: "Includes upper lips, chin, cheeks, sideburns, forehead or neck",
          },
          { name: "Cheeks", price: 50 },
          { name: "Neck", price: 50 },
          { name: "Upper lip", price: 50 },
          { name: "Chin", price: 50 },
          { name: "Sideburns", price: 50 },
          { name: "Upper lip + chin", price: 75 },
          { name: "Ears", price: 50 },
        ],
      },
      {
        title: "Underarms & Arms",
        items: [
          { name: "Underarms", price: 60 },
          { name: "Arms", price: 130 },
          { name: "Half arms", price: 80 },
        ],
      },
      {
        title: "Chest, Stomach & Back",
        items: [
          { name: "Chest", price: 100 },
          { name: "Stomach", price: 100 },
          { name: "Chest + stomach", price: 169 },
          { name: "Full back", price: 169 },
          { name: "Half back", price: 100 },
        ],
      },
      {
        title: "Bikini & Intimate Areas",
        items: [
          { name: "Areolas", price: 50 },
          { name: "Brazilian", price: 160 },
          { name: "Bikini line", price: 100 },
          { name: "Labia", price: 100 },
          { name: "Pubic area", price: 100 },
          { name: "Buttock cheeks", price: 60 },
          { name: "Belly line", price: 40 },
        ],
      },
      {
        title: "Legs",
        items: [
          { name: "Full legs", price: 190 },
          { name: "Lower legs", price: 110 },
          { name: "Upper legs", price: 110 },
        ],
      },
      {
        title: "Packages",
        items: [
          { name: "Bikini + underarms", originalPrice: 160, price: 129 },
          { name: "Brazilian + underarms", originalPrice: 200, price: 189 },
          {
            name: "Lower legs + underarms + Brazilian",
            originalPrice: 310,
            price: 259,
          },
          {
            name: "Full legs + underarms + Brazilian",
            originalPrice: 390,
            price: 329,
          },
          { name: "Full legs + Brazilian", originalPrice: 330, price: 280 },
          { name: "Full legs + underarms", originalPrice: 250, price: 216 },
          { name: "Lower legs + Brazilian", originalPrice: 250, price: 221 },

          { name: "Full body (5 areas)", price: 350 },
          { name: "Full body (6 areas)", price: 419 },
          { name: "Full body (7 areas)", price: 489 },
          { name: "Book full body and save 30%", price: 0, note: "Save 30%" },
        ],
      },
      {
        title: "Packages (6 sessions)",
        items: [
          {
            name: "Underarms package",
            originalPrice: 360,
            price: 300,
          },
          {
            name: "Full face package",
            originalPrice: 600,
            price: 500,
          },
          {
            name: "Full legs package",
            originalPrice: 1140,
            price: 950,
          },
          {
            name: "Brazilian package",
            originalPrice: 840,
            price: 700,
          },
        ],
      },
    ],
  },

  {
    key: "diode",
    label: "Diode Laser Hair Removal",
    header: "Price for one session",
    sections: [
      {
        title: "Face",
        items: [
          {
            name: "Full face",
            price: 75,
            note: "Includes upper lips, chin, cheeks, sideburns, forehead or neck",
          },
          { name: "Cheeks", price: 30 },
          { name: "Neck", price: 30 },
          { name: "Upper lip", price: 30 },
          { name: "Chin", price: 30 },
          { name: "Sideburns", price: 30 },
          { name: "Upper lip + chin", price: 50 },
          { name: "Ears", price: 40 },
        ],
      },
      {
        title: "Underarms & Arms",
        items: [
          { name: "Underarms", price: 40 },
          { name: "Arms", price: 100 },
          { name: "Half arms", price: 60 },
        ],
      },
      {
        title: "Chest, Stomach & Back",
        items: [
          { name: "Chest", price: 80 },
          { name: "Stomach", price: 80 },
          { name: "Chest + stomach", price: 150 },
          { name: "Full back", price: 150 },
          { name: "Half back", price: 80 },
        ],
      },
      {
        title: "Bikini & Intimate Areas",
        items: [
          { name: "Areolas", price: 30 },
          { name: "Brazilian", price: 125 },
          { name: "Bikini line", price: 70 },
          { name: "Labia", price: 70 },
          { name: "Pubic area", price: 70 },
          { name: "Buttock cheeks", price: 40 },
          { name: "Belly line", price: 30 },
        ],
      },
      {
        title: "Legs",
        items: [
          { name: "Full legs", price: 150 },
          { name: "Lower legs", price: 80 },
          { name: "Upper legs", price: 90 },
        ],
      },
      {
        title: "Packages",
        items: [
          { name: "Brazilian + underarms", originalPrice: 175, price: 150 },
          {
            name: "Lower legs + underarms + Brazilian",
            originalPrice: 245,
            price: 185,
          },
          {
            name: "Full legs + underarms + Brazilian",
            originalPrice: 315,
            price: 240,
          },
          { name: "Full legs + Brazilian", originalPrice: 275, price: 216 },
          { name: "Full legs + underarms", originalPrice: 190, price: 160 },
          { name: "Lower legs + Brazilian", originalPrice: 205, price: 160 },

          { name: "Full body (5 areas)", price: 250 },
          { name: "Full body (6 areas)", price: 300 },
          { name: "Full body (7 areas)", price: 350 },
          { name: "Book full body and save 30%", price: 0, note: "Save 30%" },
        ],
      },
      {
        title: "Packages (6 sessions)",
        items: [
          {
            name: "Underarms package (6 sessions)",
            originalPrice: 240,
            price: 200,
          },
          {
            name: "Full face package (6 sessions)",
            originalPrice: 450,
            price: 300,
          },
          {
            name: "Full legs package (6 sessions)",
            originalPrice: 900,
            price: 750,
          },
          {
            name: "Brazilian package (6 sessions)",
            originalPrice: 750,
            price: 600,
          },
        ],
      },
    ],
  },

  {
    key: "ipl",
    label: "IPL Hair Removal & Skin Rejuvenation",
    header: "Price for one session",
    sections: [
      {
        title: "IPL Hair Removal — Face",
        items: [
          {
            name: "Full face",
            price: 75,
            note: "Includes upper lips, chin, cheeks, sideburns, forehead or neck",
          },
          { name: "Cheeks", price: 30 },
          { name: "Neck", price: 30 },
          { name: "Upper lip", price: 30 },
          { name: "Chin", price: 30 },
          { name: "Sideburns", price: 30 },
          { name: "Upper lip + chin", price: 50 },
          { name: "Ears", price: 40 },
        ],
      },
      {
        title: "IPL Hair Removal — Underarms & Arms",
        items: [
          { name: "Underarms", price: 40 },
          { name: "Arms", price: 100 },
          { name: "Half arms", price: 60 },
        ],
      },
      {
        title: "IPL Hair Removal — Chest, Stomach & Back",
        items: [
          { name: "Chest", price: 80 },
          { name: "Stomach", price: 80 },
          { name: "Chest + stomach", price: 150 },
          { name: "Full back", price: 150 },
          { name: "Half back", price: 80 },
        ],
      },
      {
        title: "IPL Hair Removal — Bikini & Intimate Areas",
        items: [
          { name: "Areolas", price: 30 },
          { name: "Brazilian", price: 125 },
          { name: "Bikini line", price: 70 },
          { name: "Labia", price: 70 },
          { name: "Pubic area", price: 70 },
          { name: "Buttock cheeks", price: 40 },
          { name: "Belly line", price: 30 },
        ],
      },
      {
        title: "IPL Hair Removal — Legs",
        items: [
          { name: "Full legs", price: 150 },
          { name: "Lower legs", price: 80 },
          { name: "Upper legs", price: 90 },
        ],
      },
      {
        title: "IPL Hair Removal — Packages",
        items: [
          { name: "Brazilian + underarms", originalPrice: 175, price: 150 },
          {
            name: "Lower legs + underarms + Brazilian",
            originalPrice: 245,
            price: 185,
          },
          {
            name: "Full legs + underarms + Brazilian",
            originalPrice: 315,
            price: 240,
          },
          { name: "Full legs + Brazilian", originalPrice: 275, price: 216 },
          { name: "Full legs + underarms", originalPrice: 190, price: 160 },
          { name: "Lower legs + Brazilian", originalPrice: 205, price: 160 },

          { name: "Full body (5 areas)", price: 250 },
          { name: "Full body (6 areas)", price: 300 },
          { name: "Full body (7 areas)", price: 350 },
          { name: "Book full body and save 30%", price: 0, note: "Save 30%" },
        ],
      },
      {
        title: "IPL Hair Removal — Packages (6 sessions)",
        items: [
          {
            name: "Underarms package (6 sessions)",
            originalPrice: 240,
            price: 200,
          },
          {
            name: "Full face package (6 sessions)",
            originalPrice: 450,
            price: 300,
          },
          {
            name: "Full legs package (6 sessions)",
            originalPrice: 900,
            price: 750,
          },
          {
            name: "Brazilian package (6 sessions)",
            originalPrice: 750,
            price: 600,
          },
        ],
      },

      {
        title: "Skin Rejuvenation (IPL)",
        items: [
          { name: "IPL acne treatment", price: 50 },
          { name: "IPL full face", price: 120 },
          { name: "Package of 3 sessions (face + neck)", price: 389 },
          { name: "Package of 3 sessions (face)", price: 309 },
          { name: "IPL small spot", price: 50, note: "Vein removal" },
        ],
      },
    ],
  },
];
