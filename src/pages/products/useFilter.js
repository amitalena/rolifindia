import electrics from "../../configs/electrics";
import furnitures from "../../configs/furnitures";
import tilesAndSanitary from "../../configs/tiles-and-sanitary";

// Helper function to get random items from array
const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const getFeaturedFurniture = () => {
  const featuredCategories = [
    { name: "beds", required: true },
    { name: "sofa", required: true },
    { name: "dining table", required: true },
    { name: "wardrobe", required: true },
  ];

  let featuredItems = [];
  let otherItems = [];
  let foundCategories = 0;

  furnitures.forEach((item) => {
    const lowerCategory = item.category.toLowerCase();
    const isFeatured = featuredCategories.some((fc) =>
      lowerCategory.includes(fc.name.toLowerCase())
    );

    if (isFeatured) {
      if (item.data.length > 0) {
        featuredItems.push(item.data[0]);
        foundCategories++;
      }
    } else {
      otherItems.push(...item.data);
    }
  });

  if (foundCategories < 4) {
    furnitures.forEach((item) => {
      const lowerCategory = item.category.toLowerCase();
      const isFeatured = featuredCategories.some(
        (fc) => !fc.required && lowerCategory.includes(fc.name.toLowerCase())
      );

      if (isFeatured && item.data.length > 0) {
        featuredItems.push(item.data[0]);
        foundCategories++;
      }
    });
  }

  while (featuredItems.length < 4 && otherItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * otherItems.length);
    featuredItems.push(otherItems[randomIndex]);
    otherItems.splice(randomIndex, 1);
  }

  const shuffledItems = otherItems.sort(() => 0.5 - Math.random());
  return [...featuredItems.slice(0, 4), ...shuffledItems];
};

const getFeaturedTilesAndSanitary = () => {
  const featuredItems = [];
  const otherItems = [];

  const priorityCategories = [
    "bathroom tiles",
    "kitchen tiles",
    "toilet",
    "wash basin",
  ];

  if (tilesAndSanitary.tiles) {
    for (const tileType in tilesAndSanitary.tiles) {
      if (tilesAndSanitary.tiles[tileType]) {
        for (const subType in tilesAndSanitary.tiles[tileType]) {
          const items = tilesAndSanitary.tiles[tileType][subType]?.data || [];
          const categoryName = `${tileType} ${subType}`.toLowerCase();

          if (priorityCategories.some((pc) => categoryName.includes(pc))) {
            if (items.length > 0) {
              featuredItems.push(items[0]);
            }
          }
          otherItems.push(...items);
        }
      }
    }
  }

  if (tilesAndSanitary["sanitary-ware"]) {
    for (const sanitaryType in tilesAndSanitary["sanitary-ware"]) {
      const items = tilesAndSanitary["sanitary-ware"][sanitaryType]?.data || [];
      const categoryName = sanitaryType.toLowerCase();

      if (priorityCategories.some((pc) => categoryName.includes(pc))) {
        if (items.length > 0) {
          featuredItems.push(items[0]);
        }
      }
      otherItems.push(...items);
    }
  }

  if (featuredItems.length < 4) {
    const remainingItems = otherItems.filter((item) =>
      priorityCategories.some((pc) => item.category?.toLowerCase().includes(pc))
    );
    const needed = 4 - featuredItems.length;
    const additional = getRandomItems(remainingItems, needed);
    featuredItems.push(...additional);
  }

  if (featuredItems.length < 4) {
    const needed = 4 - featuredItems.length;
    const additional = getRandomItems(otherItems, needed);
    featuredItems.push(...additional);
  }

  const featuredIds = new Set(featuredItems.map((item) => item.id));
  const remainingItems = otherItems.filter((item) => !featuredIds.has(item.id));

  return [
    ...featuredItems.slice(0, 4),
    ...remainingItems.sort(() => 0.5 - Math.random()),
  ];
};

const getFeaturedElectrics = () => {
  const featuredItems = [];
  const otherItems = [];

  const priorityCategories = ["lighting", "switches", "fans", "wiring"];

  for (const electricType in electrics) {
    const items = electrics[electricType] || [];
    const categoryName = electricType.toLowerCase();

    if (priorityCategories.some((pc) => categoryName.includes(pc))) {
      if (items.length > 0) {
        featuredItems.push(items[0]);
      }
    }
    otherItems.push(...items);
  }

  if (featuredItems.length < 4) {
    const remainingItems = otherItems.filter((item) =>
      priorityCategories.some((pc) => item.category?.toLowerCase().includes(pc))
    );
    const needed = 4 - featuredItems.length;
    const additional = getRandomItems(remainingItems, needed);
    featuredItems.push(...additional);
  }

  if (featuredItems.length < 4) {
    const needed = 4 - featuredItems.length;
    const additional = getRandomItems(otherItems, needed);
    featuredItems.push(...additional);
  }

  const featuredIds = new Set(featuredItems.map((item) => item.id));
  const remainingItems = otherItems.filter((item) => !featuredIds.has(item.id));

  return [
    ...featuredItems.slice(0, 4),
    ...remainingItems.sort(() => 0.5 - Math.random()),
  ];
};

const useFilter = (pathname = "") => {
  let _array = pathname.split("/");
  let category = _array[1];
  let subcategory = _array[2];
  let level1 = _array[3];
  let level2 = _array[4];

  if (category === "furniture") {
    if (!subcategory || subcategory === "") {
      return getFeaturedFurniture();
    }
    return (
      furnitures.filter(
        ({ category }) => category?.toLowerCase() === subcategory?.toLowerCase()
      )?.[0]?.data || []
    );
  } else if (category === "tiles-and-sanitary-ware") {
    if (!subcategory || subcategory === "") {
      return getFeaturedTilesAndSanitary();
    }
    if (subcategory === "tiles") {
      if (tilesAndSanitary?.[subcategory]?.[level1]?.[level2]) {
        return tilesAndSanitary?.[subcategory]?.[level1]?.[level2]?.data || [];
      } else if (tilesAndSanitary?.[subcategory]?.[level1]) {
        return [
          ...(tilesAndSanitary?.[subcategory]?.[level1]?.["wall"]?.data || []),
          ...(tilesAndSanitary?.[subcategory]?.[level1]?.["floor"]?.data || []),
        ];
      }
    } else if (subcategory === "sanitary-ware") {
      if (tilesAndSanitary?.[subcategory]?.[level1]) {
        return tilesAndSanitary?.[subcategory]?.[level1]?.data || [];
      }
    }
    return [];
  } else if (category === "electrics") {
    if (!subcategory || subcategory === "") {
      return getFeaturedElectrics();
    }
    if (subcategory && electrics?.[subcategory]) {
      return electrics?.[subcategory] || [];
    }
    return [];
  } else {
    return [];
  }
};

export default useFilter;
