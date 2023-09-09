export type DataPoint = {
  label: string;
  protein: number;
  kcal: number;
  co2: number;
  price: number;
  links: string[];
}
export type DataValue = 'protein' | 'kcal' | 'co2' | 'price';
export const data: Array<{ id: string, data: DataPoint[ ]}> = [
  {
    id: 'dairy',
    data: [
      {
        label: 'H-melk',
        protein: 3.4,
        kcal: 63,
        co2: 1.2,
        price: 22.3,
        links: [
          'https://oda.com/no/search/?q=tine+helmelk',
          'https://www.framtiden.no/tips/sjekk-hvilken-mat-som-er-best-for-miljoeet'
        ]
      },
      {
        label: 'Skummet melk',
        protein: 3.5,
        kcal: 33,
        co2: 1.2,
        price: 19.3,
        links: [
          'https://oda.com/no/products/437-tine-tine-helmelk/',
          'https://www.framtiden.no/tips/sjekk-hvilken-mat-som-er-best-for-miljoeet'
        ]
      },
      {
        label: 'Mager Cottage Cheese',
        protein: 13,
        kcal: 79,
        co2: 3.4,
        price: 82,
        links: [
          'https://oda.com/no/products/2224-tine-cottage-cheese-mager/',
          'https://livelca.com/products/cottage-cheese_c95f1b41-34a9-4170-a53d-efd3024bfe76'
        ]
      }
    ]
  },
  {
    id: 'Beans',
    data: [
      {
        label: 'Kidneybønner (canned)',
        protein: 7.8,
        kcal: 100,
        co2: 1.8,
        price: 45.79,
        links: [
          'https://oda.com/no/products/23656-kolonihagen-kidneybonner-okologisk/',
          'https://livelca.com/products/kidney-beans-canned_0665b247-906e-4dcf-9b89-b79ff4a04b96'
        ]
      },
      {
        label: 'Kidneybønner (tørkede)',
        protein: 22,
        kcal: 300,
        co2: 0.5,
        price: 59,
        links: [
          'https://www.rawfoodshop.no/adzuki-bonner-oko-1kg-2',
          'https://livelca.com/products/kidney-beans-dried_300d11a4-a97e-4af6-8101-da15ca3a07f7'
        ]
      },
      {
        label: 'Edamamebønner',
        protein: 12,
        kcal: 141,
        co2: 2,
        price: 94.25,
        links: [
          'https://oda.com/no/products/20980-edamame/',
          'https://www.healabel.com/edamame-benefits/'
        ]
      }
    ]
  },
  {
    id: 'rawVarer',
    data: [
      {
        label: 'Sukker',
        protein: 0,
        kcal: 400,
        co2: 1.2,
        price: 26.9,
        links: [
          'https://oda.com/no/products/7813-dansukker-sukker/',
          'https://www.framtiden.no/tips/sjekk-hvilken-mat-som-er-best-for-miljoeet'
        ]
      },
      {
        label: 'Hvetemel',
        protein: 11.2,
        kcal: 338,
        co2: 0.63,
        price: 14.05,
        links: [
          'https://oda.com/no/products/1768-mollerens-hvetemel-siktet/',
          'https://livelca.com/products/wheat_1d6fb169-0c9c-4dd3-ac6d-443555011d7e'
        ]
      },
      {
        label: 'Rapsolje',
        protein: 0,
        kcal: 828,
        co2: 3,
        price: 45.7,
        links: [
          'https://oda.com/no/products/22318-rema-1000-rapsolje/',
          'https://livelca.com/products/rapeseed-oil_d10e7955-5656-46e1-b767-6f2d26002546'
        ]
      },
      {
        label: '4-korn',
        protein: 11,
        kcal: 340,
        co2: 0.6,
        price: 34.52,
        links: [
          'https://oda.com/no/products/9566-axa-4-korn/',
          'https://livelca.com/products/barley-groats_7ecf7a39-17d2-4bf1-b019-2f7f1367582b'
        ]
      }
    ]
  },
  {
    id: 'greens',
    data: [
      {
        label: 'Tomat',
        protein: 0.7,
        kcal: 74,
        co2: 1.2,
        price: 60,
        links: [
          'https://oda.com/no/products/61760-wiig-gartneri-runde-tomater/ ',
          'https://www.framtiden.no/tips/sjekk-hvilken-mat-som-er-best-for-miljoeet'
        ]
      },
      {
        label: 'Banan',
        protein: 1.1,
        kcal: 83,
        co2: 1.3,
        price: 24.35,
        links: [
          'https://oda.com/no/search/?q=banan',
          'https://www.framtiden.no/tips/sjekk-hvilken-mat-som-er-best-for-miljoeet'
        ]
      },
      {
        label: 'Potato',
        protein: 2,
        kcal: 76,
        co2: 0.4,
        price: 15.16,
        links: [
          'https://oda.com/no/products/19633-poteter-usorterte-var-laveste-pris-norge/',
          'https://www.framtiden.no/tips/sjekk-hvilken-mat-som-er-best-for-miljoeet'
        ]
      }
    ]
  },
  {
    id: 'Meats',
    data: [
      {
        label: 'Biff (strimler)',
        protein: 22,
        kcal: 113,
        co2: 22.7,
        price: 213.5,
        links: [
          'https://oda.com/no/products/59487-var-laveste-pris-biffstrimler/',
          'https://www.framtiden.no/tips/sjekk-hvilken-mat-som-er-best-for-miljoeet'
        ]
      },
      {
        label: 'Kylling (hel)',
        protein: 18,
        kcal: 180,
        co2: 3,
        price: 82.69,
        links: [
          'https://oda.com/no/products/4150-solvinge-frossen-hel-kylling-ra/',
          'https://www.framtiden.no/tips/sjekk-hvilken-mat-som-er-best-for-miljoeet'
        ]
      },
      {
        label: 'Egg',
        protein: 13,
        kcal: 149,
        co2: 1.8,
        price: 49.31,
        links: [
          'https://oda.com/no/products/28870-prior-frokostegg-fra-frittgaende-honer-str-l/',
          'https://www.framtiden.no/tips/sjekk-hvilken-mat-som-er-best-for-miljoeett'
        ]
      }
    ]
  }
] as const;
