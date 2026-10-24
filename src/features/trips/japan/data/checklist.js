// Stable IDs independent of translation or display order.
export const checklistGroups = [
  {
    "id": "essentials",
    "items": [
      "passport",
      "wallet",
      "yen",
      "credit-card",
      "transit-card",
      "phone",
      "charger",
      "mobile-data",
      "hotel-key",
      "rubbish-bag",
      "bathroom",
      "shopping-bag",
      "tax-free"
    ]
  },
  {
    "id": "weather",
    "items": [
      "cold-weather",
      "scarf-gloves",
      "extra-layer",
      "sunny-weather",
      "sunscreen",
      "sunglasses"
    ]
  },
  {
    "id": "room",
    "items": [
      "appliances",
      "windows",
      "valuables"
    ]
  }
];
export const checklistIds = checklistGroups.flatMap((group) => group.items);
