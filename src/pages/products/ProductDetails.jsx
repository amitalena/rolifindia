import React from "react";
import { useNavigate } from "react-router-dom";
import PrBanner from "../../assets/3-rolif-india.png";

const ProductDetails = () => {
  const navigate = useNavigate();

  // Furniture categories
  const furnitureCategories = furnitures.map((cat) => cat.category);

  // Tiles and Sanitary categories
  const tilesCategories = Object.keys(tilesAndSanitary.tiles);
  const sanitaryCategories = Object.keys(tilesAndSanitary["sanitary-ware"]);

  // Electric categories
  const electricCategories = Object.keys(electrics);

  // Route mappings based on menu structure
  const tileRouteMap = {
    "living-room": "/tiles-and-sanitary-ware/tiles/living-room",
    "bed-room": "/tiles-and-sanitary-ware/tiles/bed-room",
    kitchen: "/tiles-and-sanitary-ware/tiles/kitchen",
    "bath-room": "/tiles-and-sanitary-ware/tiles/bath-room",
    stairs: "/tiles-and-sanitary-ware/tiles/stairs",
    outdoor: "/tiles-and-sanitary-ware/tiles/outdoor",
  };

  const sanitaryRouteMap = {
    toilets: "/tiles-and-sanitary-ware/sanitary-ware/toilets",
    basins: "/tiles-and-sanitary-ware/sanitary-ware/basins",
    "vanity-cabinets": "/tiles-and-sanitary-ware/sanitary-ware/vanity-cabinets",
    cisterns: "/tiles-and-sanitary-ware/sanitary-ware/cisterns",
    urinals: "/tiles-and-sanitary-ware/sanitary-ware/urinals",
    "sanitaryware-accessories":
      "/tiles-and-sanitary-ware/sanitary-ware/sanitaryware-accessories",
  };

  const furnitureRouteMap = {
    beds: "/furniture/beds",
    "bed-tables": "/furniture/bed-tables",
    "dressing-tables": "/furniture/dressing-tables",
    chairs: "/furniture/chairs",
    sofas: "/furniture/sofas",
    storage: "/furniture/storage",
    tables: "/furniture/tables",
  };

  const electricRouteMap = {
    lighting: "/electrics/lighting",
    wiring: "/electrics/wiring",
  };

  return (
    <>
      <img
        src={PrBanner}
        alt="banner"
        className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[50vh] object-cover mb-8"
      />

      <main className="w-full px-4 lg:px-8 py-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Our Complete Product Collection
        </h1>

        {/* Introduction Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Our Premium Home Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            At our store, we pride ourselves on offering the finest selection of
            home products that combine quality, style, and functionality.
            Whether you're furnishing a new home or renovating your current
            space, our carefully curated collections provide everything you need
            under one roof. From elegant furniture pieces to state-of-the-art
            electrical solutions, each product is selected to help you create
            the perfect living environment that reflects your personal style and
            meets your practical needs. Our team of experts has scoured the
            globe to bring you the best materials, designs, and innovations in
            home furnishings and fixtures. We understand that your home is your
            sanctuary, and every product we offer is chosen with that
            understanding in mind.
          </p>
        </section>

        {/* Furniture Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Furniture Collection
          </h2>
          <p className="text-gray-600 mb-6">
            Discover our wide range of stylish and durable furniture, designed
            to elevate your living spaces with comfort and elegance. Our
            furniture collection features pieces crafted from premium materials,
            offering both contemporary and classic designs to suit every taste.
            Each item is built to last while providing exceptional comfort for
            your home or office. From plush sofas that invite relaxation to
            ergonomic office chairs that support productivity, our furniture
            selection transforms houses into homes and workspaces into inspiring
            environments. We offer customizable options to ensure each piece
            fits perfectly in your space and matches your unique style
            preferences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {furnitureCategories.slice(0, 8).map((category) => {
              const categoryData = furnitures.find(
                (item) => item.category === category
              );
              const firstProduct = categoryData.data[0];
              return (
                <div
                  key={category}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div
                    className="h-48 overflow-hidden cursor-pointer"
                    onClick={() => navigate(furnitureRouteMap[category])}
                  >
                    <img
                      src={firstProduct.image}
                      alt={category}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium capitalize mb-1">
                      {category}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {firstProduct.title}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      {/* Starting from ${firstProduct.price} */}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tiles & Sanitary Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Tiles & Sanitary Collection
          </h2>
          <p className="text-gray-600 mb-6">
            Transform your spaces with our premium tiles and sanitary ware,
            offering a variety of designs and high-quality products for every
            room. Our tiles come in numerous patterns, colors, and textures to
            match any decor style, while our sanitary collection combines modern
            aesthetics with practical functionality for your bathrooms and
            kitchens. Whether you're looking for sleek porcelain tiles for a
            contemporary look or natural stone finishes for a rustic appeal, our
            extensive collection has options for every design vision. Our
            sanitary ware is designed with water efficiency and easy maintenance
            in mind, without compromising on style or comfort.
          </p>

          {/* Tiles Subsection */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Premium Tile Selection</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tilesCategories.slice(0, 8).map((category) => {
                const firstProduct = tilesAndSanitary.tiles[category]?.data
                  ? tilesAndSanitary.tiles[category].data[0]
                  : tilesAndSanitary.tiles[category]?.wall?.data[0] ||
                    tilesAndSanitary.tiles[category]?.floor?.data[0];

                const route = tileRouteMap[category];
                if (!firstProduct || !route) return null;

                return (
                  <div
                    key={category}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div
                      className="h-48 overflow-hidden cursor-pointer"
                      onClick={() => navigate(route)}
                    >
                      <img
                        src={firstProduct.image}
                        alt={category}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium capitalize mb-1">
                        {category}
                      </h3>
                      <p className="text-gray-600 text-base">
                        {firstProduct.title}
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        {/* Starting from ${firstProduct.price} */}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sanitary Subsection */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Luxury Sanitary Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sanitaryCategories.slice(0, 8).map((category) => {
                const firstProduct =
                  tilesAndSanitary["sanitary-ware"]?.[category]?.data?.[0];
                const route = sanitaryRouteMap[category];

                if (!firstProduct || !route) return null;

                return (
                  <div
                    key={category}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div
                      className="h-48 overflow-hidden cursor-pointer"
                      onClick={() => navigate(route)}
                    >
                      <img
                        src={firstProduct.image}
                        alt={category}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium capitalize mb-1">
                        {category}
                      </h3>
                      <p className="text-gray-600 text-base">
                        {firstProduct.title}
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        {/* Starting from ${firstProduct.price} */}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Electricals Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Electrical Collection
          </h2>
          <p className="text-gray-600 mb-6">
            Power up your home with our reliable electrical products, ensuring
            safety and efficiency for all your needs. Our electrical collection
            includes innovative solutions from trusted brands, featuring
            energy-efficient lighting, durable wiring systems, and smart home
            technologies that bring convenience and security to your living
            spaces. We offer products that meet international safety standards
            while incorporating the latest technological advancements. From
            basic electrical components to sophisticated home automation
            systems, our range covers all your electrical needs with products
            designed for performance, longevity, and aesthetic appeal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {electricCategories.slice(0, 8).map((category) => {
              const firstProduct = electrics[category][0];
              return (
                <div
                  key={category}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div
                    className="h-48 overflow-hidden cursor-pointer"
                    onClick={() =>
                      navigate(electricRouteMap[category] || "/electrics")
                    }
                  >
                    <img
                      src={firstProduct.image}
                      alt={category}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium capitalize mb-1">
                      {category}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {firstProduct.title}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Starting from ${firstProduct.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="mt-12 bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Quality Assurance"
                className="w-full h-auto rounded-lg shadow-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback-quality-image.jpg";
                }}
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">
                Our Quality Promise
              </h2>
              <p className="text-gray-600 mb-4">
                Every product in our collection undergoes rigorous quality
                checks to ensure it meets our high standards. We partner with
                trusted manufacturers who share our commitment to excellence,
                durability, and aesthetic appeal. Whether you're looking for
                furniture, tiles, or electrical components, you can shop with
                confidence knowing you're getting products designed to enhance
                your living experience for years to come.
              </p>
              <p className="text-gray-600 mb-4">
                Our quality assurance process begins long before products reach
                our warehouse. We carefully vet each supplier, inspect materials
                at source, and conduct random quality checks throughout
                production. Our team of quality control specialists examines
                each shipment upon arrival, ensuring only products that meet our
                exacting standards make it to our showroom floor. We stand
                behind every item we sell with comprehensive warranties and
                exceptional customer service.
              </p>
              <p className="text-gray-600">
                Customer satisfaction is at the heart of everything we do.
                That's why we offer a 100% satisfaction guarantee on all our
                products. If you're not completely happy with your purchase, our
                friendly customer service team will work with you to make it
                right. We believe quality shouldn't be compromised, and neither
                should your peace of mind when shopping with us.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Placeholder data (replace with actual data imports)
const furnitures = [
  {
    category: "beds",
    data: [
      {
        title: "Cleo Bed ",
        category: "furniture",
        subcategory: "beds",
        id: "1",
        image:
          "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Cleo King Size Bed With Hydraulic Storage",
        category: "furniture",
        subcategory: "beds",
        id: "2",
        image:
          "https://images.unsplash.com/photo-1613940512699-fc9150817bb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2xlbyUyMEtpbmclMjBTaXplJTIwQmVkJTIwV2l0aCUyMEh5ZHJhdWxpYyUyMFN0b3JhZ2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Della Bed Side Table",
        category: "furniture",
        subcategory: "beds",
        id: "3",
        image:
          "https://plus.unsplash.com/premium_photo-1685026791292-0c5c6807aaf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGVsbGElMjBCZWQlMjBTaWRlJTIwVGFibGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Mellow King Size Bed With Hydraulic Storage",
        category: "furniture",
        subcategory: "beds",
        id: "4",
        image:
          "https://images.unsplash.com/photo-1654064550858-c62b971a378a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVsbG93JTIwS2luZyUyMFNpemUlMjBCZWQlMjBXaXRoJTIwSHlkcmF1bGljJTIwU3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Noah King Size Bed With Hydraulic Storage",
        category: "furniture",
        subcategory: "beds",
        id: "5",
        image:
          "https://images.unsplash.com/photo-1560185128-e173042f79dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1lbGxvdyUyMEtpbmclMjBTaXplJTIwQmVkJTIwV2l0aCUyMEh5ZHJhdWxpYyUyMFN0b3JhZ2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Smart King Size Bed Without Storage",
        category: "furniture",
        subcategory: "beds",
        id: "6",
        image:
          "https://images.unsplash.com/photo-1698517486200-e89403ea2738?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1lbGxvdyUyMEtpbmclMjBTaXplJTIwQmVkJTIwV2l0aCUyMEh5ZHJhdWxpYyUyMFN0b3JhZ2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Sophia Bed Side Table",
        category: "furniture",
        subcategory: "beds",
        id: "7",
        image:
          "https://plus.unsplash.com/premium_photo-1676320514025-c365ab8289b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1lbGxvdyUyMEtpbmclMjBTaXplJTIwQmVkJTIwV2l0aCUyMEh5ZHJhdWxpYyUyMFN0b3JhZ2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Sophia King Size Bed With Hydraulic Storage",
        category: "furniture",
        subcategory: "beds",
        id: "8",
        image:
          "https://images.unsplash.com/photo-1740446568302-0eca27e820b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWVsbG93JTIwS2luZyUyMFNpemUlMjBCZWQlMjBXaXRoJTIwSHlkcmF1bGljJTIwU3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    category: "bed-tables",
    data: [
      {
        title: "Cleo Bed Side Table",
        category: "furniture",
        subcategory: "bed-tables",
        id: "1",
        image:
          "https://images.unsplash.com/photo-1646061142491-fc141798ba14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2xlbyUyMEJlZCUyMFNpZGUlMjBUYWJsZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Della Bed Side Table",
        category: "furniture",
        subcategory: "bed-tables",
        id: "2",
        image:
          "https://plus.unsplash.com/premium_photo-1706559879916-e40844098a80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGVsbGElMjBCZWQlMjBTaWRlJTIwVGFibGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Sophia Bed Side Table",
        category: "furniture",
        subcategory: "bed-tables",
        id: "3",
        image:
          "https://images.unsplash.com/photo-1688573485190-bdad4b711db9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U29waGlhJTIwQmVkJTIwU2lkZSUyMFRhYmxlfGVufDB8fDB8fHwws",
      },
      {
        title: "Generic Bed Side Table 1",
        category: "furniture",
        subcategory: "bed-tables",
        id: "4",
        image:
          "https://images.unsplash.com/photo-1550926807-a6d0500b6502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2VuZXJpYyUyMEJlZCUyMFNpZGUlMjBUYWJsZSUyMDF8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Bed Side Table 2",
        category: "furniture",
        subcategory: "bed-tables",
        id: "5",
        image:
          "https://images.unsplash.com/photo-1669427358378-946ac74c2ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R2VuZXJpYyUyMEJlZCUyMFNpZGUlMjBUYWJsZSUyMDF8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Bed Side Table 3",
        category: "furniture",
        subcategory: "bed-tables",
        id: "6",
        image:
          "https://images.unsplash.com/photo-1719364477635-196329162e60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEdlbmVyaWMlMjBCZWQlMjBTaWRlJTIwVGFibGUlMjAxfGVufDB8fDB8fHww",
      },
      {
        title: "Generic Bed Side Table 4",
        category: "furniture",
        subcategory: "bed-tables",
        id: "7",
        image:
          "https://images.unsplash.com/photo-1652155205433-52179159a15e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdlbmVyaWMlMjBCZWQlMjBTaWRlJTIwVGFibGUlMjAxfGVufDB8fDB8fHww",
      },
      {
        title: "Generic Bed Side Table 5",
        category: "furniture",
        subcategory: "bed-tables",
        id: "8",
        image:
          "https://images.unsplash.com/photo-1711779321922-532dc4e205e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEdlbmVyaWMlMjBCZWQlMjBTaWRlJTIwVGFibGUlMjAxfGVufDB8fDB8fHww",
      },
    ],
  },
  {
    category: "dressing-tables",
    data: [
      {
        title: "Vanice Dressing Table",
        category: "furniture",
        subcategory: "dressing-tables",
        id: "1",
        image:
          "https://plus.unsplash.com/premium_photo-1671594327658-031627428a2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmFuaWNlJTIwRHJlc3NpbmclMjBUYWJsZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Generic Dressing Table 1",
        category: "furniture",
        subcategory: "dressing-tables",
        id: "2",
        image:
          "https://images.unsplash.com/photo-1619311731741-d82f87274198?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmFuaWNlJTIwRHJlc3NpbmclMjBUYWJsZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Generic Dressing Table 2",
        category: "furniture",
        subcategory: "dressing-tables",
        id: "3",
        image:
          "https://plus.unsplash.com/premium_photo-1664471481572-116e21aa5824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmFuaWNlJTIwRHJlc3NpbmclMjBUYWJsZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Generic Dressing Table 3",
        category: "furniture",
        subcategory: "dressing-tables",
        id: "4",
        image:
          "https://images.unsplash.com/photo-1697874161852-1cb2118ced48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFZhbmljZSUyMERyZXNzaW5nJTIwVGFibGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Dressing Table 4",
        category: "furniture",
        subcategory: "dressing-tables",
        id: "5",
        image:
          "https://images.unsplash.com/photo-1674065719169-5ba77e617e60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFZhbmljZSUyMERyZXNzaW5nJTIwVGFibGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Dressing Table 5",
        category: "furniture",
        subcategory: "dressing-tables",
        id: "6",
        image:
          "https://images.unsplash.com/photo-1650742031095-0c8deab72c11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFZhbmljZSUyMERyZXNzaW5nJTIwVGFibGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Dressing Table 6",
        category: "furniture",
        subcategory: "dressing-tables",
        id: "7",
        image:
          "https://images.unsplash.com/photo-1678895044556-58ae19c0fe1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFZhbmljZSUyMERyZXNzaW5nJTIwVGFibGV8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Dressing Table 7",
        category: "furniture",
        subcategory: "dressing-tables",
        id: "8",
        image:
          "https://images.unsplash.com/photo-1699861410398-026b4ad98835?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdlbmVyaWMlMjBEcmVzc2luZyUyMFRhYmxlfGVufDB8fDB8fHww",
      },
    ],
  },
  {
    category: "chairs",
    data: [
      {
        title: "Adorn Round Puffy",
        category: "furniture",
        subcategory: "chairs",
        id: "1",
        image:
          "https://plus.unsplash.com/premium_photo-1705479742794-5cd85f349bd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWRvcm4lMjBSb3VuZCUyMFB1ZmZ5JTIwY2hhaXJzfGVufDB8fDB8fHww",
      },
      {
        title: "Alpha Lobby Chair",
        category: "furniture",
        subcategory: "chairs",
        id: "2",
        image:
          "https://images.unsplash.com/photo-1662309375901-ffd9d636c077?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWRvcm4lMjBSb3VuZCUyMFB1ZmZ5JTIwY2hhaXJzfGVufDB8fDB8fHww",
      },
      {
        title: "Aston Dining Chair",
        category: "furniture",
        subcategory: "chairs",
        id: "3",
        image:
          "https://images.unsplash.com/photo-1723126004597-7154e8db8e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWRvcm4lMjBSb3VuZCUyMFB1ZmZ5JTIwY2hhaXJzfGVufDB8fDB8fHww",
      },
      {
        title: "Casper Dining Chair",
        category: "furniture",
        subcategory: "chairs",
        id: "4",
        image:
          "https://images.unsplash.com/photo-1639018107266-95ed1beebc3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWRvcm4lMjBSb3VuZCUyMFB1ZmZ5JTIwY2hhaXJzJTIwd29vZGVufGVufDB8fDB8fHww",
      },
      {
        title: "Della Dining Chair",
        category: "furniture",
        subcategory: "chairs",
        id: "5",
        image:
          "https://images.unsplash.com/photo-1639018107266-95ed1beebc3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWRvcm4lMjBSb3VuZCUyMFB1ZmZ5JTIwY2hhaXJzJTIwd29vZGVufGVufDB8fDB8fHww",
      },
      {
        title: "Eden Dining Chair",
        category: "furniture",
        subcategory: "chairs",
        id: "6",
        image:
          "https://images.unsplash.com/photo-1694806757762-cbb81d46c57f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QWRvcm4lMjBSb3VuZCUyMFB1ZmZ5JTIwY2hhaXJzJTIwd29vZGVufGVufDB8fDB8fHww",
      },
      {
        title: "Hamilton Wing Chair with Stool",
        category: "furniture",
        subcategory: "chairs",
        id: "7",
        image:
          "https://images.unsplash.com/photo-1628007976025-3fd4b56205f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFkb3JuJTIwUm91bmQlMjBQdWZmeSUyMGNoYWlycyUyMHdvb2RlbnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Khair Dining Chair",
        category: "furniture",
        subcategory: "chairs",
        id: "8",
        image:
          "https://images.unsplash.com/photo-1736796312077-93f248c96a96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFkb3JuJTIwUm91bmQlMjBQdWZmeSUyMGNoYWlycyUyMHdvb2RlbnxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    category: "sofas",
    data: [
      {
        title: "Attic Sofa",
        category: "furniture",
        subcategory: "sofas",
        id: "1",
        image:
          "https://plus.unsplash.com/premium_photo-1674567529895-c89b6bb1b9e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXN8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Blackberry Sofa",
        category: "furniture",
        subcategory: "sofas",
        id: "2",
        image:
          "https://images.unsplash.com/photo-1630585308572-f53438fc684f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXN8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Enzo Sofa",
        category: "furniture",
        subcategory: "sofas",
        id: "3",
        image:
          "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Flair Sofa",
        category: "furniture",
        subcategory: "sofas",
        id: "4",
        image:
          "https://images.unsplash.com/photo-1629640868376-373f05c618fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvZmFzfGVufDB8fDB8fHww",
      },
      {
        title: "Fusion Sofa",
        category: "furniture",
        subcategory: "sofas",
        id: "5",
        image:
          "https://images.unsplash.com/photo-1680503397671-caa25818d36f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RnVzaW9uJTIwU29mYXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Gloria Sofa",
        category: "furniture",
        subcategory: "sofas",
        id: "6",
        image:
          "https://plus.unsplash.com/premium_photo-1661407582641-9ce38a3c8402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvZmFzfGVufDB8fDB8fHww",
      },
      {
        title: "Mirly Sofa",
        category: "furniture",
        subcategory: "sofas",
        id: "7",
        image:
          "https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZmFzfGVufDB8fDB8fHww",
      },
      {
        title: "Mobil Sofa",
        category: "furniture",
        subcategory: "sofas",
        id: "8",
        image:
          "https://images.unsplash.com/photo-1653251307042-c5821df9d527?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vYmlsJTIwU29mYXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    category: "storage",
    data: [
      {
        title: "Aula 5 Rack Book Shelf",
        category: "furniture",
        subcategory: "storage",
        id: "1",
        image:
          "https://plus.unsplash.com/premium_photo-1677517547416-a48ee5cf6c97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXVsYSUyMDUlMjBSYWNrJTIwQm9vayUyMFNoZWxmfGVufDB8fDB8fHww",
      },
      {
        title: "Bino 2 Dr Shoe Cabinet",
        category: "furniture",
        subcategory: "storage",
        id: "2",
        image:
          "https://images.unsplash.com/photo-1638280678694-19d8d0444b60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXVsYSUyMDUlMjBSYWNrJTIwQm9vayUyMFNoZWxmfGVufDB8fDB8fHww",
      },
      {
        title: "Bino 3 Dr Shoe Cabinet",
        category: "furniture",
        subcategory: "storage",
        id: "3",
        image:
          "https://images.unsplash.com/photo-1729912317527-80d33a68bb6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXVsYSUyMDUlMjBSYWNrJTIwQm9vayUyMFNoZWxmfGVufDB8fDB8fHww",
      },
      {
        title: "Calvin Shoe Cabinet",
        category: "furniture",
        subcategory: "storage",
        id: "4",
        image:
          "https://images.unsplash.com/photo-1662903823294-ff3cfee674c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXVsYSUyMDUlMjBSYWNrJTIwQm9vayUyMFNoZWxmfGVufDB8fDB8fHww",
      },
      {
        title: "Cleo Side Board",
        category: "furniture",
        subcategory: "storage",
        id: "5",
        image:
          "https://images.unsplash.com/photo-1590059192860-8a218d1d1934?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEF1bGElMjA1JTIwUmFjayUyMEJvb2slMjBTaGVsZnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Cleo Side Board With Mirror Frame",
        category: "furniture",
        subcategory: "storage",
        id: "6",
        image:
          "https://images.unsplash.com/photo-1578086454990-0cc032d41fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEF1bGElMjA1JTIwUmFjayUyMEJvb2slMjBTaGVsZnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Della Side Board",
        category: "furniture",
        subcategory: "storage",
        id: "7",
        image:
          "https://images.unsplash.com/photo-1578086454990-0cc032d41fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEF1bGElMjA1JTIwUmFjayUyMEJvb2slMjBTaGVsZnxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Della Side Board With Mirror Frame",
        category: "furniture",
        subcategory: "storage",
        id: "8",
        image:
          "https://images.unsplash.com/photo-1676487071623-c2e0d44edf04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEF1bGElMjA1JTIwUmFjayUyMEJvb2slMjBTaGVsZnxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    category: "tables",
    data: [
      {
        title: "Adonis Coffee Table",
        category: "furniture",
        subcategory: "tables",
        id: "1",
        image:
          "https://plus.unsplash.com/premium_photo-1670984939638-01d1854a5d12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFibGVzfGVufDB8fDB8fHww",
      },
      {
        title: "Alpha Lobby Table",
        category: "furniture",
        subcategory: "tables",
        id: "2",
        image:
          "https://images.unsplash.com/photo-1535799695145-f3849086ee3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGVzfGVufDB8fDB8fHww",
      },
      {
        title: "Aston Dining Table",
        category: "furniture",
        subcategory: "tables",
        id: "3",
        image:
          "https://images.unsplash.com/photo-1601740468950-00fc402e926e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFibGVzfGVufDB8fDB8fHww",
      },
      {
        title: "Bino Plus Coffee Table",
        category: "furniture",
        subcategory: "tables",
        id: "4",
        image:
          "https://images.unsplash.com/photo-1523658783928-e8287dea21cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGFibGVzfGVufDB8fDB8fHww",
      },
      {
        title: "Casper Dining Table",
        category: "furniture",
        subcategory: "tables",
        id: "5",
        image:
          "https://plus.unsplash.com/premium_photo-1670984939016-ac6de78350e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Della 6 Seater Dining Bench",
        category: "furniture",
        subcategory: "tables",
        id: "6",
        image:
          "https://images.unsplash.com/photo-1609670514643-b6217a80d15e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Della 6 Seater Dining Table",
        category: "furniture",
        subcategory: "tables",
        id: "7",
        image:
          "https://images.unsplash.com/photo-1587823172314-0dc50d65a707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGVzfGVufDB8fDB8fHww",
      },
      {
        title: "Holla Coffee Table",
        category: "furniture",
        subcategory: "tables",
        id: "8",
        image:
          "https://images.unsplash.com/photo-1507089872327-8fdb6ebba93c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    category: "drawers",
    data: [
      {
        title: "Marcos Chest of Drawer",
        category: "furniture",
        subcategory: "drawers",
        id: "1",
        image:
          "https://images.unsplash.com/photo-1595428774991-829cfeea6267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJhd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Generic Chest of Drawer 1",
        category: "furniture",
        subcategory: "drawers",
        id: "2",
        image:
          "https://images.unsplash.com/photo-1586266561585-a256c3c3a348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Generic Chest of Drawer 2",
        category: "furniture",
        subcategory: "drawers",
        id: "3",
        image:
          "https://plus.unsplash.com/premium_photo-1673014201777-ce786c26fe40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJhd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Generic Chest of Drawer 3",
        category: "furniture",
        subcategory: "drawers",
        id: "4",
        image:
          "https://images.unsplash.com/photo-1678108040468-0cc9addd984d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdlcnN8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Chest of Drawer 4",
        category: "furniture",
        subcategory: "drawers",
        id: "5",
        image:
          "https://images.unsplash.com/photo-1676976500593-3dfec0b17754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRyYXdlcnN8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Chest of Drawer 5",
        category: "furniture",
        subcategory: "drawers",
        id: "6",
        image:
          "https://images.unsplash.com/photo-1605439018177-3e959e822df1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGRyYXdlcnN8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Chest of Drawer 6",
        category: "furniture",
        subcategory: "drawers",
        id: "7",
        image:
          "https://images.unsplash.com/photo-1595428774839-7e35900fb7f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGRyYXdlcnN8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Generic Chest of Drawer 7",
        category: "furniture",
        subcategory: "drawers",
        id: "8",
        image:
          "https://plus.unsplash.com/premium_photo-1683129613576-cb27862274c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGRyYXdlcnN8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
];

const tilesAndSanitary = {
  tiles: {
    "living-room": {
      wall: {
        data: [
          {
            title: "3D Rosette Blue",
            image:
              "https://d3joggurz1vobr.cloudfront.net/static/uploads/9b628259-dfa9-4b0e-82ad-599e77943333-1673764069408.jpeg",
            id: "1",
            productCategory: "wall",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Valor Arve Beige FP",
            image:
              "https://d3joggurz1vobr.cloudfront.net/category/db40bc14-2c25-426f-a883-4f09268230c9-1696593549128.jpg",
            id: "2",
            productCategory: "wall",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Enorme Impression Treviso Grey",
            image:
              "https://images.unsplash.com/photo-1708540084677-dc5838b37627?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlsZXMlMjBmb3IlMjBsaXZpbmclMjByb29tfGVufDB8fDB8fHww",
            id: "3",
            productCategory: "wall",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Vivo Mushroom",
            image:
              "https://d3joggurz1vobr.cloudfront.net/category/068a1da8-19b7-4123-93ce-12eb2fe414aa-1696598997584.jpg",
            id: "4",
            productCategory: "wall",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Enorme Impression Aria Calacatta",
            image:
              "https://images.unsplash.com/photo-1662557499772-2c613eddadd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGlsZXMlMjBmb3IlMjBsaXZpbmclMjByb29tfGVufDB8fDB8fHww",
            id: "5",
            productCategory: "wall",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "RIPPLING BROWN",
            image:
              "https://images.unsplash.com/photo-1662557499734-36c037676f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGlsZXMlMjBmb3IlMjBsaXZpbmclMjByb29tfGVufDB8fDB8fHww",
            id: "6",
            productCategory: "wall",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Enorme Impression Atlas Crema",
            image:
              "https://images.unsplash.com/flagged/photo-1556438758-df7b9e0c0fe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRpbGVzJTIwZm9yJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            id: "7",
            productCategory: "wall",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Grande Arenisca Grey Satin",
            image:
              "https://images.unsplash.com/photo-1662557499804-7f1d3910d13e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGlsZXMlMjBmb3IlMjBsaXZpbmclMjByb29tfGVufDB8fDB8fHww",
            id: "8",
            productCategory: "wall",
            category: "tiles",
            subcategory: "living-room",
          },
        ],
      },
      floor: {
        data: [
          {
            title: "Elan 3.0 Coco Polish",
            image:
              "https://plus.unsplash.com/premium_photo-1683121179538-35f7fe9a1f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRpbGVzJTIwZm9yJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            id: "1",
            productCategory: "floor",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Elan 3.0 Nero Polish",
            image:
              "https://d3joggurz1vobr.cloudfront.net/productimages/Elan-3.0-Nero-Polish/Elan-3.0-Nero-Polish.jpg",
            id: "2",
            productCategory: "floor",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Plush Cosmo Brown Polish",
            image:
              "https://images.unsplash.com/photo-1722859033306-0a05199f7010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRpbGVzJTIwZm9yJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            id: "3",
            productCategory: "floor",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Granit Trim 240 Imp Clarion Black 15",
            image:
              "https://plus.unsplash.com/premium_photo-1681487588706-c883c47eb524?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHRpbGVzJTIwZm9yJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            id: "4",
            productCategory: "floor",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Granit Trim 240 Metallo Blue 15 GFP",
            image:
              "https://plus.unsplash.com/premium_photo-1678170313442-5474acac84d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHRpbGVzJTIwZm9yJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            id: "5",
            productCategory: "floor",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Granit Trim 240 Affinity 15 GFP",
            image:
              "https://d3joggurz1vobr.cloudfront.net/productimages/Granit-Trim-240-Affinity-15-GFP/Granit-Trim-240-Affinity-15-GFP.jpg",
            id: "6",
            productCategory: "floor",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Granit Trim 240 Imp Clarion White 15",
            image:
              "https://plus.unsplash.com/premium_photo-1661875124229-5201914a77b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHRpbGVzJTIwZm9yJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            id: "7",
            productCategory: "floor",
            category: "tiles",
            subcategory: "living-room",
          },
          {
            title: "Elan 3.0 Bianco Polish",
            image:
              "https://images.unsplash.com/photo-1710775338511-3766c13110b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHRpbGVzJTIwZm9yJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            id: "8",
            productCategory: "floor",
            category: "tiles",
            subcategory: "living-room",
          },
        ],
      },
    },
    "bed-room": {
      wall: {
        data: [
          {
            title: "Valor Arve Beige FP",
            image:
              "https://media.istockphoto.com/id/1127418562/photo/modern-luxurious-black-bedroom-in-a-villa-by-the-ocean.webp?a=1&b=1&s=612x612&w=0&k=20&c=LS94_zJHoMoTWqrBzWyaagXKIu1HGj1_qvbNUJ3UNec=",
            id: "1",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Trojan Wenge",
            image:
              "https://media.istockphoto.com/id/1292480234/photo/modern-blue-interior-small-studio-apartment-with-bedroom-kitchen-living-room-in-single-space.jpg?s=612x612&w=0&k=20&c=DvT0Kg1Xi4vhIsUa9vZSKPRr3IONY5CCZE_DM9WWuWU=",
            id: "2",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Valor Liston Grey Dark",
            image:
              "https://media.istockphoto.com/id/1127417417/photo/modern-luxurious-bedroom-in-a-seaside-villa-with-black-stone-wall.jpg?s=612x612&w=0&k=20&c=xmT4JSzLQtztPcVgQXI-3BX2BPBEutTi8RCt1f_suN0=",
            id: "3",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Tigris Dark",
            image:
              "https://media.istockphoto.com/id/1363817537/photo/luxury-modern-house-interior-with-corner-sofa-bookshelf-and-staircase.jpg?s=612x612&w=0&k=20&c=BY9EvrgL_VsQkTketnce0yv9lTEpvZkVw0Y9NkMoxN8=",
            id: "4",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Lithor Dark",
            image:
              "https://media.istockphoto.com/id/1222623857/photo/master-bedroom-in-new-luxury-home-with-chandelier-and-view-of-bathroom.jpg?s=612x612&w=0&k=20&c=ppfn49Pb99UFYjIxZ1bBlPs8s-XyUgpp_Lqh6g0RE4g=",
            id: "5",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Streno HL 01",
            image:
              "https://media.istockphoto.com/id/1152520578/photo/modern-interior-of-a-small-studio-apartment.jpg?s=612x612&w=0&k=20&c=9ntYYqN_NvTD-9vdtft2okZWBDNjO0mHxOq2Q5YrYuM=",
            id: "6",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Lithor HL 01",
            image:
              "https://media.istockphoto.com/id/1059918860/photo/modern-luxurious-by-ocean-in-northern-california.jpg?s=612x612&w=0&k=20&c=DQltmW96V5ngP5hBA73O7VhDCwA-43qqhWuQDWp-GHo=",
            id: "7",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Fabro Brown Light",
            image:
              "https://media.istockphoto.com/id/1334117370/photo/luxurious-interior-of-a-five-star-hotel-room-in-a-digital-image.jpg?s=612x612&w=0&k=20&c=v-MElak-VbK8j-WgTBX_I8mjheW22dTLTSXUkJoSFys=",
            id: "8",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bed-room",
          },
        ],
      },
      floor: {
        data: [
          {
            title: "Elan 3.0 Coco Polish",
            image:
              "https://media.istockphoto.com/id/1127417417/photo/modern-luxurious-bedroom-in-a-seaside-villa-with-black-stone-wall.jpg?s=612x612&w=0&k=20&c=xmT4JSzLQtztPcVgQXI-3BX2BPBEutTi8RCt1f_suN0=",
            id: "1",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Valor Arve Beige FP",
            image:
              "https://media.istockphoto.com/id/1211463411/photo/master-bedroom-in-new-luxury-home-with-large-windows-chandelier-carpet-and-elegant-decor.jpg?s=612x612&w=0&k=20&c=17fUrsRikoC4mKeQ3yPtj87IzYSJihg4M2qkOLPW6X0=",
            id: "2",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Spruce",
            image:
              "https://media.istockphoto.com/id/1305099590/photo/home-interior-attic.jpg?s=612x612&w=0&k=20&c=hcG9Nh5VQ3TDJfngjhchYfI3uDpWSrOzrniTUtUIxjE=",
            id: "3",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Vibe Moreno Natural",
            image:
              "https://media.istockphoto.com/id/1292480226/photo/modern-interior-of-blue-contemporary-bedroom-with-handmade-wicker-wood-furniture-handmade-tv.jpg?s=612x612&w=0&k=20&c=Nit09FBIBUY9LnQInAPNP58SDCOUtLPvTwk1ZUePOWA=",
            id: "4",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Valor Liston Grey Dark",
            image:
              "https://media.istockphoto.com/id/1258168976/photo/modern-style-bedroom.jpg?s=612x612&w=0&k=20&c=EYMlbkRZmodDysKeOfPvTPjjQSkssen0Ag2YS0NdAGc=",
            id: "5",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Segesta Bianco FP",
            image:
              "https://media.istockphoto.com/id/2170199827/photo/black-luxury-modern-retro-style-master-bedroom.jpg?s=612x612&w=0&k=20&c=GLeES_nUZwdLfq2unXxswNNyHJR6mAhrir7P5QyYD6U=",
            id: "6",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Terrazzo Eton Bianco",
            image:
              "https://media.istockphoto.com/id/1262407505/photo/modern-style-bedroom.jpg?s=612x612&w=0&k=20&c=bbgHclw81AyAinAVIgnz175BVctJ-5_oIsJFBQhLZFQ=",
            id: "7",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bed-room",
          },
          {
            title: "Trojan Wenge",
            image:
              "https://media.istockphoto.com/id/2170202931/photo/luxury-modern-retro-style-master-bedroom-with-yellow-furniture.jpg?s=612x612&w=0&k=20&c=M-0GnHecRevZmNRY74sdms4xai6lV8DsEmK5-o_U34o=",
            id: "8",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bed-room",
          },
        ],
      },
    },
    kitchen: {
      wall: {
        data: [
          {
            title: "Valor Arve Beige FP",
            image:
              "https://media.istockphoto.com/id/1412401494/photo/modern-kitchen-in-luxury-home.jpg?s=612x612&w=0&k=20&c=oODFMTk4YmUqgf_zKUxwClkVOl_wWoybpTW7XAwLHns=",
            id: "1",
            productCategory: "wall",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Spice HL 01 B",
            image:
              "https://media.istockphoto.com/id/1342057253/photo/kitchen-brass-utensils-chef-accessories-hanging-kitchen-with-white-tiles-wall-and-wood.jpg?s=612x612&w=0&k=20&c=R6oYRNdBzJAOSqFqS924kIu2wAg8JEwF2DV2UFlVpVE=",
            id: "2",
            productCategory: "wall",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Vivo Crema",
            image:
              "https://media.istockphoto.com/id/1600542328/photo/classic-elegant-interior-a-modern-but-classic-kitchen-with-a-gray-and-white-wall-background.jpg?s=612x612&w=0&k=20&c=6X5XdreOj7784M_Du_twY7E2JhzAwaStppTi6Wo_Dqo=",
            id: "3",
            productCategory: "wall",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Roma Brown",
            image:
              "https://media.istockphoto.com/id/1281513233/photo/modern-luxury-kitchen-on-marble-floor.jpg?s=612x612&w=0&k=20&c=R3taNyidp2p_K5cFf7Dw_n3CFBskUEdZgU2Q1PyarWw=",
            id: "4",
            productCategory: "wall",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Venza HL 02",
            image:
              "https://media.istockphoto.com/id/2198066845/photo/bright-contemporary-kitchen-with-large-island-and-outdoor-view.jpg?s=612x612&w=0&k=20&c=EnyIiS37dIdfXagzj-n0NXnSEf069PZxEHGiW32VD78=",
            id: "5",
            productCategory: "wall",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Venza",
            image:
              "https://media.istockphoto.com/id/1276677452/photo/modern-minimalist-kitchen.jpg?s=612x612&w=0&k=20&c=B3qRo1N_Dn3qbLixydGLgswziCUqEZqJOP06WWGOvtY=",
            id: "6",
            productCategory: "wall",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Trill Bianco",
            image:
              "https://media.istockphoto.com/id/1349110850/photo/modern-kitchen-and-dining-room-on-retro-tiled-floor.jpg?s=612x612&w=0&k=20&c=X-Uf8sHPBjjfB2LJwOa9OEgtRcdMt7ZNNL_tUCcEnlE=",
            id: "7",
            productCategory: "wall",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Vivo HL 02",
            image:
              "https://media.istockphoto.com/id/1360324668/photo/modern-home-kitchen-interior-design-in-white-tones.jpg?s=612x612&w=0&k=20&c=8dxNoeRJoZ1FubtLaR97c-huDK1Qm-4gJcY5sCZq2Uk=",
            id: "8",
            productCategory: "wall",
            category: "tiles",
            subcategory: "kitchen",
          },
        ],
      },
      floor: {
        data: [
          {
            title: "Elan 3.0 Coco Polish",
            image:
              "https://media.istockphoto.com/id/171586480/photo/modern-kitchen.jpg?s=612x612&w=0&k=20&c=sLaYHo4LYVbe5iy9Ut-CWgOye5mgosgX-SzcZ1WRskE=",
            id: "1",
            productCategory: "floor",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Valor Arve Beige FP",
            image:
              "https://media.istockphoto.com/id/1398692674/photo/beautiful-kitchen-in-new-luxury-home-with-waterfall-quartz-island-pendant-lights-and-hardwood.jpg?s=612x612&w=0&k=20&c=vgNFmlUAIuhf-Cr5_BDPIU-KssDOsPx2VzsppmZJ9Ow=",
            id: "2",
            productCategory: "floor",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Vivo Glacier White FP",
            image:
              "https://media.istockphoto.com/id/171343988/photo/modern-kitchen.jpg?s=612x612&w=0&k=20&c=p2EWWutqi2CGIVpPeeUm9murQAt90MC6LwgHZ26ekAo=",
            id: "3",
            productCategory: "floor",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Land Brown",
            image:
              "https://media.istockphoto.com/id/1456467041/photo/beautiful-kitchen-in-new-farmhouse-style-luxury-home-with-island-pendant-lights-and-hardwood.jpg?s=612x612&w=0&k=20&c=wwlKjbAsf_xBveRuqMV2fCJ8cpED0CoXE4GdIUSxpW8=",
            id: "4",
            productCategory: "floor",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Corsa Crema",
            image:
              "https://media.istockphoto.com/id/1210163691/photo/beautiful-kitchen-in-new-home-with-island-pendant-lights-and-hardwood-floors.jpg?s=612x612&w=0&k=20&c=fwAyqkfOJVp_2A9oUWYHb2htaTTCOfWRY38dBovRbtM=",
            id: "5",
            productCategory: "floor",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Land Grey",
            image:
              "https://media.istockphoto.com/id/171584190/photo/modern-kitchen-house-interior.jpg?s=612x612&w=0&k=20&c=K21JGK_VfX-VhO-XJWcSSB0lB8ysVgw07HRJaEia4ZQ=",
            id: "6",
            productCategory: "floor",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Corsa Nero",
            image:
              "https://media.istockphoto.com/id/154030192/photo/modern-beige-kitchen-interior.jpg?s=612x612&w=0&k=20&c=CcAjYRJCqDDGmUXEY3VoiP6mu1E1zpDI_Jv_PMAgebE=",
            id: "7",
            productCategory: "floor",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Land Bianco",
            image:
              "https://media.istockphoto.com/id/1297586166/photo/modern-elegant-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=4qVGJq3EZ-DrVC08kFIXuZMGRe5NcEvziV-H4L9aFKc=",
            id: "8",
            productCategory: "floor",
            category: "tiles",
            subcategory: "kitchen",
          },
        ],
      },
      "counter-top": {
        data: [
          {
            title: "Elan 3.0 Coco Polish",
            image:
              "https://media.istockphoto.com/id/2161329360/photo/modern-dark-kitchen-interior-with-dark-gray-island-fridge-and-oven.jpg?s=612x612&w=0&k=20&c=0B1-qOBmtVxLWxTChM41O6Zbt9YLMNd3y83YQW2-cDY=",
            id: "1",
            productCategory: "counter-top",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Elan 3.0 Bianco Polish",
            image:
              "https://media.istockphoto.com/id/2150536581/photo/chic-contemporary-kitchen-with-green-cabinetry.jpg?s=612x612&w=0&k=20&c=WuCHcXEHwSLfy_g0EUr6RWPioQHduoaM9P-G8pY6aeg=",
            id: "2",
            productCategory: "counter-top",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Granit Trim 240 Metallo Blue 15 GFP",
            image:
              "https://media.istockphoto.com/id/2157082269/photo/open-concept-elegant-and-spacious-kitchen-with-marble-countertops-flowers-with-glass-set-on.jpg?s=612x612&w=0&k=20&c=dlcvhOm444Tm2v4qv-LQnPQr1TQmGlWJP0z2uMsuVKc=",
            id: "3",
            productCategory: "counter-top",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Elan 3.0 White Polish",
            image:
              "https://media.istockphoto.com/id/2161329510/photo/white-and-sophisticated-kitchen-with-utensils.jpg?s=612x612&w=0&k=20&c=SXei4-7sHMyH8eKOuEOlcECIkFAahtBLob0FStU-mpQ=",
            id: "4",
            productCategory: "counter-top",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Granit Trim 240 Affinity 15 GFP",
            image:
              "https://media.istockphoto.com/id/2053961830/photo/luxury-modern-gray-kitchen.jpg?s=612x612&w=0&k=20&c=JVyV2xLN-xr52YCmIyrzEhrCp7tnyVx3myBbneELUv4=",
            id: "5",
            productCategory: "counter-top",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Granit Trim 240 Alexandra Blue 15 GFP",
            image:
              "https://media.istockphoto.com/id/2161586906/photo/kitchen-hood-over-the-electric-stove-on-the-kitchen-island-in-the-minimal-kitchen.jpg?s=612x612&w=0&k=20&c=IjjsjmrdAaaAVE6LYeAY5NgmRknJBImjRKTDjVGcOSY=",
            id: "6",
            productCategory: "counter-top",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Elan 3.0 Nero Polish",
            image:
              "https://media.istockphoto.com/id/1435001508/photo/modern-kitchen-and-dining-room-on-retro-tiled-floor-side-view.jpg?s=612x612&w=0&k=20&c=ZOurPT155zu4ACEJTdiM1Oy3E0gp-mVWlyP5dE14W9g=",
            id: "7",
            productCategory: "counter-top",
            category: "tiles",
            subcategory: "kitchen",
          },
          {
            title: "Elan 3.0 Grey Polish",
            image:
              "https://media.istockphoto.com/id/2161176819/photo/the-kitchen-interior-design-is-allocated-with-wooden-and-kitchen-appliances-3d-rendering.jpg?s=612x612&w=0&k=20&c=IB2WQT63gxGpx8KZEL77kdk0wqsOBzAo1m1Py2qdfLE=",
            id: "8",
            productCategory: "counter-top",
            category: "tiles",
            subcategory: "kitchen",
          },
        ],
      },
    },
    "bath-room": {
      wall: {
        data: [
          {
            title: "Sabia Peach Light",
            image:
              "https://media.istockphoto.com/id/1073403366/photo/luxurious-minimalist-bathroom-with-slate-black-stone-wall.jpg?s=612x612&w=0&k=20&c=NpgscoGvIlNPyq9ylUWHTaUdC3YXu4hKcT52aCUeNZE=",
            id: "1",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Oriel HL 01",
            image:
              "https://media.istockphoto.com/id/1367378067/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=VR1uhmqEJ6Q65-0yxYqaETAyisbveGsSur3CW8734Uw=",
            id: "2",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Oriel Dark",
            image:
              "https://media.istockphoto.com/id/1454303048/photo/modern-dark-luxury-minimalist-bathroom.jpg?s=612x612&w=0&k=20&c=YSmUMMxsAhgD_W6EybLOjaswbR8d6BSDjjZjfCAGfDA=",
            id: "3",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Sierra Grey HL 01",
            image:
              "https://media.istockphoto.com/id/1332854650/photo/a-modern-bathroom-in-blue-tones-with-gold-fittings-a-bathrobe-next-to-the-shower-a-round.jpg?s=612x612&w=0&k=20&c=ce7Y69oiWO2h4mP-I-p77_gFQvhqDITTrTzJMLAVtI0=",
            id: "4",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Neo Statuario",
            image:
              "https://media.istockphoto.com/id/1304826235/photo/luxury-bathroom-interior-with-shower-toilet-mirror-and-yellow-towels.jpg?s=612x612&w=0&k=20&c=bUEbM3oGL_28QbeXrozy1ITjYFME42D2uOGrYh8iOkI=",
            id: "5",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Sierra Grey Dark",
            image:
              "https://media.istockphoto.com/id/2201664046/photo/elegant-marble-bathroom-interior-with-contemporary-and-classic-touches.jpg?s=612x612&w=0&k=20&c=gWAU3ZR-MYXjQfGD0kvYFjlGsjNYpfu8j1CMo70pcxU=",
            id: "6",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Sierra Brown Light",
            image:
              "https://media.istockphoto.com/id/187222933/photo/white-bathroom.jpg?s=612x612&w=0&k=20&c=QQ0qJmcuHtriJT8Rj-9YPHbZkkVHMrcvNBOoLIq8V-A=",
            id: "7",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Sabia Peach Dark",
            image:
              "https://media.istockphoto.com/id/1275104046/photo/modern-bathroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=ztvVO5u7ZHiQU9KlQhl6ZZy_D-aXP-6ZhL4rg-q9fcA=",
            id: "8",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
        ],
      },
      floor: {
        data: [
          {
            title: "Land Brown",
            image:
              "https://media.istockphoto.com/id/2179552509/photo/luxurious-modern-bathroom-interior-with-marble-finish-and-soft-lighting.jpg?s=612x612&w=0&k=20&c=tLkO6TqXWr5H69aT3iwXZ41EE8WATP4QCZjfCWX0u68=",
            id: "1",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Ridge Moka",
            image:
              "https://media.istockphoto.com/id/1363383363/photo/luxury-bathroom-interior-with-shower-toilet-mirror-and-decorative-objects.jpg?s=612x612&w=0&k=20&c=tr0uiy32njv3xLDlCFnt9acUfQ7etF2zXwP1-zDAKlE=",
            id: "2",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "F.S. Brown",
            image:
              "https://media.istockphoto.com/id/1168780492/photo/modern-white-bathroom-with-bath-and-window.jpg?s=612x612&w=0&k=20&c=iYU138WgxQmNzxIbhdGtxnDD9pwntTMDPiTILaWCy5k=",
            id: "3",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Land Grey",
            image:
              "https://media.istockphoto.com/id/1440348435/photo/contemporary-bathroom-design.jpg?s=612x612&w=0&k=20&c=y3xbYe3t9SJpDGBq-M9iqEzd1mZ-4x7HdZaFgWnSh1g=",
            id: "4",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Champion Blanco",
            image:
              "https://media.istockphoto.com/id/167487090/photo/bathroom.jpg?s=612x612&w=0&k=20&c=lGc_jiiopIoPEozoSGK0onMDmJFj092ISDceCB1UHuc=",
            id: "5",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Champion Nero",
            image:
              "https://media.istockphoto.com/id/473791162/photo/interior-of-bathroom-in-cool-tone.jpg?s=612x612&w=0&k=20&c=2xBYp0jq2480jbpCTPX_PSDXukYeLc0qQPnAZ6jxAMg=",
            id: "6",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Textilo Brown",
            image:
              "https://media.istockphoto.com/id/525103933/photo/bathroom-in-luxury-home.jpg?s=612x612&w=0&k=20&c=fiVC6hCOwppRnoQfAXL4AZ76SGsbViqchVoYoTFC4sk=",
            id: "7",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Textilo Mint",
            image:
              "https://media.istockphoto.com/id/178965822/photo/interior-of-the-modern-bathroom-3d.jpg?s=612x612&w=0&k=20&c=VG9rZaPeRAX6UPh-zuTq_DvBZGcvjQ92J3SIabWLaqw=",
            id: "8",
            productCategory: "floor",
            category: "tiles",
            subcategory: "bath-room",
          },
        ],
      },
    },
    stairs: {
      wall: {
        data: [
          {
            title: "Granit Trim 240 Lepanto Multi 15 GFP",
            image:
              "https://media.istockphoto.com/id/175724552/photo/entryway-in-a-building.jpg?s=612x612&w=0&k=20&c=miUPPyVOBYk2hVAgSN1XX6tTitaL8ynVKM_S1ifd8xM=",
            id: "1",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Granit Trim 240 Imp Clarion Black 15",
            image:
              "https://media.istockphoto.com/id/84743802/photo/staircase-in-modern-office-building.jpg?s=612x612&w=0&k=20&c=JuRSbKOW-_CZrzmOzPJBfTckfrtS_59bUNyacC950Yo=",
            id: "2",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Largo Neo Stepon Grey Dark",
            image:
              "https://media.istockphoto.com/id/146968346/photo/luxury-hall-with-staircase-in-a-new-house.jpg?s=612x612&w=0&k=20&c=XC_bGTZtaVim1an_F7z6wTuFlaeAq6ARi_5qWst8uKA=",
            id: "3",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Granit Trim 240 Imp Clarion White 15",
            image:
              "https://media.istockphoto.com/id/1289004182/photo/home-interior-restaurant.jpg?s=612x612&w=0&k=20&c=VTst1G_8bcdKvbFGm-B3r2BDaZXg7mNclPnFOTjcUX0=",
            id: "4",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Granit Trim 240 Affinity 15 GFP",
            image:
              "https://media.istockphoto.com/id/183273572/photo/palace-staircase.jpg?s=612x612&w=0&k=20&c=yMv06YBTp56BVbRFnFNea2VaGkCec7s-vywN0c_0v2U=",
            id: "5",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Granit Trim 240 Metallo Blue 15 GFP",
            image:
              "https://media.istockphoto.com/id/84743805/photo/staircase-in-modern-office-building.jpg?s=612x612&w=0&k=20&c=9qZW84pEVDnY4oRTz-u9WmPDfPnosuU3jsYtRdipU4c=",
            id: "6",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Granit Trim 240 Alexandra Blue 15 GFP",
            image:
              "https://media.istockphoto.com/id/885030296/photo/modern-house-interior-stairway.jpg?s=612x612&w=0&k=20&c=7mJwLKwqBme4mmsmQoDrKTn_KiTKrCC3eHheUn26yuw=",
            id: "7",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
          {
            title: "Granit Trim 240 Ocean Blue 15 GFP",
            image:
              "https://media.istockphoto.com/id/1289004182/photo/home-interior-restaurant.jpg?s=612x612&w=0&k=20&c=VTst1G_8bcdKvbFGm-B3r2BDaZXg7mNclPnFOTjcUX0=",
            id: "8",
            productCategory: "wall",
            category: "tiles",
            subcategory: "bath-room",
          },
        ],
      },
    },
    "out-door": {
      wall: {
        data: [
          {
            title: "Vermont Beige",
            image:
              "https://media.istockphoto.com/id/1286450628/photo/new-house-with-empty-cobblestone-floor-for-car-park.jpg?s=612x612&w=0&k=20&c=Goa0IomcZXJCu1X_RvzLKSgLFz2gY2AsWud5pPBbbz8=",
            id: "1",
            productCategory: "wall",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Pero Natural",
            image:
              "https://media.istockphoto.com/id/1388096282/photo/the-interior-of-the-backyard-with-a-seating-area.jpg?s=612x612&w=0&k=20&c=pog8j7CXTcenqfLt7GERQ2NQhdUBVDRPx4LO2jmFDUs=",
            id: "2",
            productCategory: "wall",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Pabble Marron",
            image:
              "https://media.istockphoto.com/id/1403693652/photo/sunny-mediterranean-style-terrace-with-sofa-small-wine-table-and-beautiful-bougainvillea-3d.jpg?s=612x612&w=0&k=20&c=EUTokzm-NWOS5NySfgnzuTbod1ToZpGAu2WO5hnf7pQ=",
            id: "3",
            productCategory: "wall",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Pabble Beige",
            image:
              "https://media.istockphoto.com/id/1270050433/photo/modern-terrace-caf%C3%A9.jpg?s=612x612&w=0&k=20&c=271KfucgjvvNW5mb2P6RDi0_JIeKjAYEiR8KEKMgWV8=",
            id: "4",
            productCategory: "wall",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Megastone Brown",
            image:
              "https://media.istockphoto.com/id/157380538/photo/stone-fire-pit.jpg?s=612x612&w=0&k=20&c=8-xvQs18_8wHrocHDtdzOLx9cE_Z6bdKt0N-RaF8KSE=",
            id: "5",
            productCategory: "wall",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Federigo Beige",
            image:
              "https://media.istockphoto.com/id/1286624155/photo/rear-yard-pergola-covering-patio-furniture.jpg?s=612x612&w=0&k=20&c=75JbkqqhsAFfBGTETVVvyrQwgEbCrju0MA0qHVh85JA=",
            id: "6",
            productCategory: "wall",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Pabble Brown",
            image:
              "https://media.istockphoto.com/id/911399456/photo/empty-parking-lot.jpg?s=612x612&w=0&k=20&c=q3C5yx046Fk7SYswt_T-nK6tetcriyVV6AOhoXJxZmY=",
            id: "7",
            productCategory: "wall",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Faber Brown",
            image:
              "https://media.istockphoto.com/id/183857539/photo/waterfront-house-veranda-back-porch.jpg?s=612x612&w=0&k=20&c=NDhfvrWXCV6M-p3anwJoZkjMRAkixhTMwjkWgyBItHc=",
            id: "8",
            productCategory: "wall",
            category: "tiles",
            subcategory: "out-door",
          },
        ],
      },
      floor: {
        data: [
          {
            title: "Techstone Beige",
            image:
              "https://media.istockphoto.com/id/176129375/photo/tiled-patio-with-two-wooden-chairs-and-stone-wall.jpg?s=612x612&w=0&k=20&c=2rJJVGF1_asfHOgE7SBZYFCKwLgrrUvNU6SwXhxCmxM=",
            id: "1",
            productCategory: "floor",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Techstone Super White",
            image:
              "https://media.istockphoto.com/id/184100122/photo/villa-pool-deck-phuket.jpg?s=612x612&w=0&k=20&c=itzoS1icYa74BB4HD2jJ0az0C_JDw0ksolzukExgeHU=",
            id: "2",
            productCategory: "floor",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Techstone Crema",
            image:
              "https://media.istockphoto.com/id/2181916421/photo/outdoor-seating-area-with-white-chairs-and-table-on-wet-wooden-deck.jpg?s=612x612&w=0&k=20&c=D5XaSAoouTVkhIOUQSS_65H-vundFzrK-URsq-E8Hvc=",
            id: "3",
            productCategory: "floor",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Techstone Antracita",
            image:
              "https://media.istockphoto.com/id/172258064/photo/fireplace-in-outdoor-patio.jpg?s=612x612&w=0&k=20&c=xtHq3uI3Wc1tf-cWLJllcOlfFSWDmUFcGEaJl-0k2_A=",
            id: "4",
            productCategory: "floor",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Techstone Grey Dark",
            image:
              "https://media.istockphoto.com/id/175225722/photo/outdoor-cafeteria.jpg?s=612x612&w=0&k=20&c=uowhz60XrhPD3C3U0xXgdEGw4uQCM2dqlDd0eVANo6A=",
            id: "5",
            productCategory: "floor",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Techstone Mist",
            image:
              "https://media.istockphoto.com/id/2157782327/photo/rear-yard-pergola-covering-patio-furniture.jpg?s=612x612&w=0&k=20&c=AUBaxHFeyED-fETcMEWNOe1owrJBM53iwq2pvZqFPy8=",
            id: "6",
            productCategory: "floor",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Techstone Grey Light",
            image:
              "https://media.istockphoto.com/id/184100870/photo/villa-pool-deck-phuket.jpg?s=612x612&w=0&k=20&c=0ddcpp_CaJ4eylUFmIF1ZkFJARBbntBn5VBcs-i69wA=",
            id: "7",
            productCategory: "floor",
            category: "tiles",
            subcategory: "out-door",
          },
          {
            title: "Luz",
            image:
              "https://media.istockphoto.com/id/183853557/photo/hotel-villa-restaurant.jpg?s=612x612&w=0&k=20&c=-fYwGUo7iIhdqwAvkAVraxlj89gGSocVxZC3zUzhkTQ=",
            id: "8",
            productCategory: "floor",
            category: "tiles",
            subcategory: "out-door",
          },
        ],
      },
    },
  },
  "sanitary-ware": {
    toilets: {
      data: [
        {
          title: "JAZZ PLUS Matt Grey Wall Hung WC",
          image:
            "https://media.istockphoto.com/id/1367378067/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=VR1uhmqEJ6Q65-0yxYqaETAyisbveGsSur3CW8734Uw=",
          id: "1",
          category: "sanitary-ware",
          subcategory: "toilets",
        },
        {
          title: "CANELE Matt Grey Wall Hung WC",
          image:
            "https://media.istockphoto.com/id/2168455980/photo/bathroom-in-brand-new-modern-house.jpg?s=612x612&w=0&k=20&c=Hv7UaMSoezgLNdaKyyLH6VdrbxuHOPMY2J3MuOL63io=",
          id: "2",
          category: "sanitary-ware",
          subcategory: "toilets",
        },
        {
          title: "Eiffel Plus Wall Hung Wc",
          image:
            "https://media.istockphoto.com/id/1363383363/photo/luxury-bathroom-interior-with-shower-toilet-mirror-and-decorative-objects.jpg?s=612x612&w=0&k=20&c=tr0uiy32njv3xLDlCFnt9acUfQ7etF2zXwP1-zDAKlE=",
          id: "3",
          category: "sanitary-ware",
          subcategory: "toilets",
        },
        {
          title: "EIFFEL PLUS Matt Black Wall Hung WC",
          image:
            "https://media.istockphoto.com/id/1168780492/photo/modern-white-bathroom-with-bath-and-window.jpg?s=612x612&w=0&k=20&c=iYU138WgxQmNzxIbhdGtxnDD9pwntTMDPiTILaWCy5k=",
          id: "4",
          category: "sanitary-ware",
          subcategory: "toilets",
        },
        {
          title: "Elysees Sensor Tankless",
          image:
            "https://media.istockphoto.com/id/1133604763/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=U4P402afSB_Q9ZTCx-3Q0o9EJinN0uWrGkoTMMwSONI=",
          id: "5",
          category: "sanitary-ware",
          subcategory: "toilets",
        },
        {
          title: "JAZZ PLUS Matt Black Wall Hung WC",
          image:
            "https://media.istockphoto.com/id/639573246/photo/interior-of-bathroom-in-cool-green-with-a-running-shower.jpg?s=612x612&w=0&k=20&c=6ndZC3FNBvSwofuDy1e5TOrwxVdyDg-xyXAqKtYs9uw=",
          id: "6",
          category: "sanitary-ware",
          subcategory: "toilets",
        },
        {
          title: "Bellis One Piece Toilets",
          image:
            "https://media.istockphoto.com/id/2169983889/photo/elegant-cream-beige-bathroom.jpg?s=612x612&w=0&k=20&c=IJBIpW9GmJ--TFy_pz5t3ExipGofZCVwfub7VkrjAvA=",
          id: "7",
          category: "sanitary-ware",
          subcategory: "toilets",
        },
        {
          title: "Stylo One Piece Toilet",
          image:
            "https://media.istockphoto.com/id/168324184/photo/domestic-bathrooms.jpg?s=612x612&w=0&k=20&c=z6EarSfSeJDvvUjg4qPbIZfJWc2KICNBLORQr9P0Oe8=",
          id: "8",
          category: "sanitary-ware",
          subcategory: "toilets",
        },
      ],
    },
    basins: {
      data: [
        {
          title: "Denise Full Pedestal Basin",
          image:
            "https://media.istockphoto.com/id/98844085/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=fPYof3nA47qO0pAQhGAM_aMxefzJ0-B3M4IM1_zFVgU=",
          id: "1",
          category: "sanitary-ware",
          subcategory: "basins",
        },
        {
          title: "Allen Full Pedestal Basin",
          image:
            "https://media.istockphoto.com/id/1291917591/photo/modern-bathroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=pxqczxYLHDIm0zskG3QgktaO0ICwAd3H4x5b8vdIRuY=",
          id: "2",
          category: "sanitary-ware",
          subcategory: "basins",
        },
        {
          title: "Grande Full Pedestal Basin",
          image:
            "https://media.istockphoto.com/id/610963620/photo/impressive-bathroom-designed-to-suit-modern-womans-needs.jpg?s=612x612&w=0&k=20&c=N9FE8m9Nfd8NKgHibVb9OLX3wxITQ9bJAb9kUlx9GJo=",
          id: "3",
          category: "sanitary-ware",
          subcategory: "basins",
        },
        {
          title: "Leo Wall Hung Basin",
          image:
            "https://media.istockphoto.com/id/1287515220/photo/dark-and-modern-bathroom.jpg?s=612x612&w=0&k=20&c=zpSp6Uwtu2Dlg4rI2w_Zv5yf8xuQUwULcq_0v87os28=",
          id: "4",
          category: "sanitary-ware",
          subcategory: "basins",
        },
        {
          title: "Tulip Corner Wash Basin",
          image:
            "https://media.istockphoto.com/id/468762284/photo/country-kitchen-counter-with-tile-backsplash-and-deep-sink.jpg?s=612x612&w=0&k=20&c=KcF7HomCPyQB-8b-xaNtTPnb3E1uYg8oYBNW_ZhjQgI=",
          id: "5",
          category: "sanitary-ware",
          subcategory: "basins",
        },
        {
          title: "Yen Wall Hung Basin",
          image:
            "https://media.istockphoto.com/id/1004519948/photo/modern-black-kitchen.jpg?s=612x612&w=0&k=20&c=8DehHD1rpC9zTqV8D02fbOZ8qMjUoLvAgjM6FzwfbFY=",
          id: "6",
          category: "sanitary-ware",
          subcategory: "basins",
        },
        {
          title: "Corner Wash Basin",
          image:
            "https://media.istockphoto.com/id/2197248227/photo/simple-bathroom-wood-vanity-counter.jpg?s=612x612&w=0&k=20&c=OkMOf2pRIljb_YtaRabCypwCoNOPt_J02K9yLvnEsY0=",
          id: "7",
          category: "sanitary-ware",
          subcategory: "basins",
        },
        {
          title: "Dove Wall Hung Basin",
          image:
            "https://media.istockphoto.com/id/1356431577/photo/close-up-of-sink-with-oval-mirror-standing-in-on-beige-wall.jpg?s=612x612&w=0&k=20&c=ZCjIKKTmU3PPa1lNsHnEvS3i2p-vvzFvuGpvdzgpTX4=",
          id: "8",
          category: "sanitary-ware",
          subcategory: "basins",
        },
      ],
    },
    "vanity-cabinets": {
      data: [
        {
          title: "Triumph",
          image:
            "https://media.istockphoto.com/id/953779106/photo/white-and-brick-wall-bathroom-corner.jpg?s=612x612&w=0&k=20&c=GME195JwbudIcRUkk4UT_1PiBSXjwNZOZHZmE4XxIxc=",
          id: "1",
          category: "sanitary-ware",
          subcategory: "vanity-cabinets",
        },
        {
          title: "Carlton Floor Mounted",
          image:
            "https://media.istockphoto.com/id/970847050/photo/mock-up-bathroom-in-a-modern-style-3d.jpg?s=612x612&w=0&k=20&c=0XheDJqWDQ86JRBTGjuYYKnnf0nXzCsu0dlXAeRkFFE=",
          id: "2",
          category: "sanitary-ware",
          subcategory: "vanity-cabinets",
        },
        {
          title: "Flame Wall Mounted",
          image:
            "https://media.istockphoto.com/id/1404042777/photo/new-bathroom-with-installed-furniture-and-sink-with-a-huge-mirror-in-a-modern-style.jpg?s=612x612&w=0&k=20&c=KFh4jqOmNbHm4HpQy9n6W-SE8FJvREmdb3ra_FFw6EA=",
          id: "3",
          category: "sanitary-ware",
          subcategory: "vanity-cabinets",
        },
        {
          title: "Sydney",
          image:
            "https://media.istockphoto.com/id/1129093243/photo/sink-in-beige-tile-bathroom.jpg?s=612x612&w=0&k=20&c=dCvDiHMfQYIRi8_Ndifh5hfXyy9sObjDZLKO5cnurG8=",
          id: "4",
          category: "sanitary-ware",
          subcategory: "vanity-cabinets",
        },
        {
          title: "Canterbury",
          image:
            "https://media.istockphoto.com/id/1453138974/photo/a-bathroom-with-a-wood-cabinet-and-glass-vessel-sinks.jpg?s=612x612&w=0&k=20&c=rkSvcOTeNPx6Lp6kRsBG7Q9RdQhE_Hpjw5vplkbfUo4=",
          id: "5",
          category: "sanitary-ware",
          subcategory: "vanity-cabinets",
        },
        {
          title: "Daliane",
          image:
            "https://media.istockphoto.com/id/1300451873/photo/modern-furniture-wall-mounted-wooden-shelves-against-cork-wall-background-in-living-room.jpg?s=612x612&w=0&k=20&c=jrSA6K8MRMU_LtuEDByaIqPNGZTXZ_qgm_bXCV1uZyE=",
          id: "6",
          category: "sanitary-ware",
          subcategory: "vanity-cabinets",
        },
        {
          title: "Carine",
          image:
            "https://media.istockphoto.com/id/502487400/photo/3d-illustration-of-washbasin-with-mirror.jpg?s=612x612&w=0&k=20&c=g4sRdj4_mcABCikH0qC4hdOOaiW-BoSg2b9hNfeBgLs=",
          id: "7",
          category: "sanitary-ware",
          subcategory: "vanity-cabinets",
        },
        {
          title: "Felista",
          image:
            "https://media.istockphoto.com/id/1287312458/photo/double-sink-in-modern-black-marble-bathroom.jpg?s=612x612&w=0&k=20&c=7Nvc3qjBgtOncZz2xzE8VBbJeMMFgwK6VoYNSGTCZoM=",
          id: "8",
          category: "sanitary-ware",
          subcategory: "vanity-cabinets",
        },
      ],
    },
    cisterns: {
      data: [
        {
          title: "OVERLAP Press Panel",
          image:
            "https://media.istockphoto.com/id/1225614124/photo/interior-design-of-bathroom-in-luxury-apartment.jpg?s=612x612&w=0&k=20&c=c90zYAhgAEenQDc51OHgzhAAZtRfjrtOeh9OXZQmNZc=",
          id: "1",
          category: "sanitary-ware",
          subcategory: "cisterns",
        },
        {
          title: "Smart (Single Flush)",
          image:
            "https://images.unsplash.com/photo-1595514535316-b8c85bf9bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjAoU2luZ2xlJTIwRmx1c2gpfGVufDB8fDB8fHww",
          id: "2",
          category: "sanitary-ware",
          subcategory: "cisterns",
        },
        {
          title: "ACCENT PNEUMATIC Concealed Cistern",
          image:
            "https://images.unsplash.com/photo-1558338363-ddd3e4d68882?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QUNDRU5UJTIwUE5FVU1BVElDJTIwQ29uY2VhbGVkJTIwQ2lzdGVybnxlbnwwfHwwfHx8MA%3D%3D",
          id: "3",
          category: "sanitary-ware",
          subcategory: "cisterns",
        },
        {
          title: "Super (Single Flush)",
          image:
            "https://images.unsplash.com/photo-1553725068-16bb62dcb907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFN1cGVyJTIwKFNpbmdsZSUyMEZsdXNoKXxlbnwwfHwwfHx8MA%3D%3D",
          id: "4",
          category: "sanitary-ware",
          subcategory: "cisterns",
        },
        {
          title: "CUBE Press Panel",
          image:
            "https://d3joggurz1vobr.cloudfront.net/products/a10215ed-655b-4b85-869a-25e24ebc5b23-1686029907011.jpg",
          id: "5",
          category: "sanitary-ware",
          subcategory: "cisterns",
        },
        {
          title: "Zoe (Single Flush)",
          image:
            "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVifGVufDB8fDB8fHww",
          id: "6",
          category: "sanitary-ware",
          subcategory: "cisterns",
        },
        {
          title: "Smart (Dual Flush)",
          image:
            "https://images.unsplash.com/photo-1728975728593-b128b77fa813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNtYXJ0JTIwKER1YWwlMjBGbHVzaCl8ZW58MHx8MHx8fDA%3D",
          id: "7",
          category: "sanitary-ware",
          subcategory: "cisterns",
        },
        {
          title: "Stella Single Flush",
          image:
            "https://plus.unsplash.com/premium_photo-1664391622559-14be7d68ceff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fFN0ZWxsYSUyMFNpbmdsZSUyMEZsdXNofGVufDB8fDB8fHww",
          id: "8",
          category: "sanitary-ware",
          subcategory: "cisterns",
        },
      ],
    },
    urinals: {
      data: [
        {
          title: "Smart",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/1/2/1232018829183.jpg",
          id: "1",
          category: "sanitary-ware",
          subcategory: "urinals",
        },
        {
          title: "Joven",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/j/o/joven_urinal_-_front_1.jpg",
          id: "2",
          category: "sanitary-ware",
          subcategory: "urinals",
        },
        {
          title: "Nova",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/n/o/nova_1.jpg",
          id: "3",
          category: "sanitary-ware",
          subcategory: "urinals",
        },
        {
          title: "Smart Flat Back",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/s/m/smart_1.jpg",
          id: "4",
          category: "sanitary-ware",
          subcategory: "urinals",
        },
        {
          title: "Aurore Sensor Urinal",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/a/u/aurore.jpg",
          id: "5",
          category: "sanitary-ware",
          subcategory: "urinals",
        },
        {
          title: "Squatting Urinal",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/1/2/123201882749.jpg",
          id: "6",
          category: "sanitary-ware",
          subcategory: "urinals",
        },
        {
          title: "Division Plate",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/1/2/1232018828536.jpg",
          id: "7",
          category: "sanitary-ware",
          subcategory: "urinals",
        },
        {
          title: "Oblo",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/d/s/dsc09192.jpg",
          id: "8",
          category: "sanitary-ware",
          subcategory: "urinals",
        },
      ],
    },
    "sanitaryware-accessories": {
      data: [
        {
          title: "Dual Flow Concealed Flush Valve",
          image:
            "https://d3joggurz1vobr.cloudfront.net/products/c231aad8-a8e9-47f2-8a31-5c9e37c5e8e7-1685617771851.jpg",
          id: "1",
          category: "sanitary-ware",
          subcategory: "sanitaryware-accessories",
        },
        {
          title: "C I Chair Bracket",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/c/_/c_i_chair_bracket.jpg",
          id: "2",
          category: "sanitary-ware",
          subcategory: "sanitaryware-accessories",
        },
        {
          title: "Glade Frame Wall Mount",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/g/l/glade_frame_wall_mount_.jpg",
          id: "3",
          category: "sanitary-ware",
          subcategory: "sanitaryware-accessories",
        },
        {
          title: "Trap P",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/1/2/1232018826790.jpg",
          id: "4",
          category: "sanitary-ware",
          subcategory: "sanitaryware-accessories",
        },
        {
          title: "Outlet Pipe",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/o/u/outlet_pipe.jpg",
          id: "5",
          category: "sanitary-ware",
          subcategory: "sanitaryware-accessories",
        },
        {
          title: "Rag Bolts For Wall 16mm",
          image:
            "https://d3bvng1ozw4ph9.cloudfront.net/media/catalog/product/cache/1bee143e5c1d7daf0d32058630e8617f/r/a/rag_bolts.jpg",
          id: "6",
          category: "sanitary-ware",
          subcategory: "sanitaryware-accessories",
        },
        {
          title: "EWC Ezee Close Square Seat Cover",
          image:
            "https://d3joggurz1vobr.cloudfront.net/products/4f08fdf2-00be-46a9-993f-05b8649a9873-1686032398614.jpeg",
          id: "7",
          category: "sanitary-ware",
          subcategory: "sanitaryware-accessories",
        },
        {
          title: "Concealed Flush Valve",
          image:
            "https://d3joggurz1vobr.cloudfront.net/products/9462cb4e-e621-43f0-b61a-6b5a6f96b8e6-1685662652554.jpg",
          id: "8",
          category: "sanitary-ware",
          subcategory: "sanitaryware-accessories",
        },
      ],
    },
  },
};

const electrics = {
  lighting: [
    {
      title: "Gema Chandelier 23LS G9 SMK CRM",
      image:
        "https://images.unsplash.com/photo-1646764209478-f2fe29b1a4f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdlbWElMjBDaGFuZGVsaWVyJTIwMjNMUyUyMEc5JTIwU01LJTIwQ1JNfGVufDB8fDB8fHww",
      id: "1",
      category: "electrics",
      subcategory: "lighting",
    },
    {
      title: "Spanish Bluebells Chandelier 23LS G9 CRM",
      image:
        "https://images.unsplash.com/photo-1649095556646-ada53ce87eab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BhbmlzaCUyMEJsdWViZWxscyUyMENoYW5kZWxpZXIlMjAyM0xTJTIwRzklMjBDUk18ZW58MHx8MHx8fDA%3D",
      id: "2",
      category: "electrics",
      subcategory: "lighting",
    },
    {
      title: "GUARDAPELO CHANDELIER 10LS G9 CRM",
      image:
        "https://images.unsplash.com/photo-1433338428943-7ea8cfabc03b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3BhbmlzaCUyMEJsdWViZWxscyUyMENoYW5kZWxpZXIlMjAyM0xTJTIwRzklMjBDUk18ZW58MHx8MHx8fDA%3D",
      id: "3",
      category: "electrics",
      subcategory: "lighting",
    },
    {
      title: "GUARDAPELO CHANDELIER 10LS G9 HNY",
      image:
        "https://plus.unsplash.com/premium_photo-1678129526712-cf2159e7f3cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNwYW5pc2glMjBCbHVlYmVsbHMlMjBDaGFuZGVsaWVyJTIwMjNMUyUyMEc5JTIwQ1JNfGVufDB8fDB8fHww",
      id: "4",
      category: "electrics",
      subcategory: "lighting",
    },
    {
      title: "ZAMBRA CHANDELIER 15LS E14 HN CRM",
      image:
        "https://images.unsplash.com/photo-1666021575644-ce1c9a616a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNwYW5pc2glMjBCbHVlYmVsbHMlMjBDaGFuZGVsaWVyJTIwMjNMUyUyMEc5JTIwQ1JNfGVufDB8fDB8fHww",
      id: "5",
      category: "electrics",
      subcategory: "lighting",
    },
    {
      title: "ZAMBRA CHANDELIER 15LS E14 PL CRM",
      image:
        "https://images.unsplash.com/photo-1655147999591-8d72eb548ea8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFNwYW5pc2glMjBCbHVlYmVsbHMlMjBDaGFuZGVsaWVyJTIwMjNMUyUyMEc5JTIwQ1JNfGVufDB8fDB8fHww",
      id: "6",
      category: "electrics",
      subcategory: "lighting",
    },
    {
      title: "CAMPERO CHANDELIER 12LS G9 HNY CRM",
      image:
        "https://images.unsplash.com/photo-1742626586408-b405a573dc88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fFNwYW5pc2glMjBCbHVlYmVsbHMlMjBDaGFuZGVsaWVyJTIwMjNMUyUyMEc5JTIwQ1JNfGVufDB8fDB8fHww",
      id: "7",
      category: "electrics",
      subcategory: "lighting",
    },
    {
      title: "FLAMENCO CHANDELIER 6LS E14 CL CRM",
      image:
        "https://images.unsplash.com/photo-1701634018372-01b6c39a2284?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fFNwYW5pc2glMjBCbHVlYmVsbHMlMjBDaGFuZGVsaWVyJTIwMjNMUyUyMEc5JTIwQ1JNfGVufDB8fDB8fHww",
      id: "8",
      category: "electrics",
      subcategory: "lighting",
    },
  ],
  "switches-and-accessories": [
    {
      title: "Red Star Ding Dong Electronic",
      image:
        "https://images.unsplash.com/photo-1638366412820-095ac2bde775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJlZCUyMFN0YXIlMjBEaW5nJTIwRG9uZyUyMEVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D",
      id: "1",
      category: "electrics",
      subcategory: "switches-and-accessories",
    },
    {
      title: "Grey Star Ding Dong Electronic",
      image:
        "https://images.unsplash.com/photo-1566867149340-06e5edf229fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVkJTIwU3RhciUyMERpbmclMjBEb25nJTIwRWxlY3Ryb25pY3xlbnwwfHwwfHx8MA%3D%3D",
      id: "2",
      category: "electrics",
      subcategory: "switches-and-accessories",
    },
    {
      title: "Cosmo PRO Surge & SpikeGuard (5 m) 6 A",
      image:
        "https://images.unsplash.com/photo-1721694163727-054639a4cf3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29zbW8lMjBQUk8lMjBTdXJnZSUyMCUyNiUyMFNwaWtlR3VhcmQlMjAoNSUyMG0pJTIwNiUyMEF8ZW58MHx8MHx8fDA%3D",
      id: "3",
      category: "electrics",
      subcategory: "switches-and-accessories",
    },
    {
      title: "USB Star Braided Type C to Type C Data Cable, 60 W",
      image:
        "https://images.unsplash.com/photo-1570770691583-0a1fa5847306?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fFVTQiUyMFN0YXIlMjBCcmFpZGVkJTIwVHlwZSUyMEMlMjB0byUyMFR5cGUlMjBDJTIwRGF0YSUyMENhYmxlJTJDJTIwNjAlMjBXfGVufDB8fDB8fHww",
      id: "4",
      category: "electrics",
      subcategory: "switches-and-accessories",
    },
    {
      title: "Wheel Star Surge & SpikeGuard",
      image:
        "https://images.unsplash.com/photo-1644766586492-6ce41995b938?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdoZWVsJTIwU3RhciUyMFN1cmdlJTIwJTI2JTIwU3Bpa2VHdWFyZHxlbnwwfHwwfHx8MA%3D%3D",
      id: "5",
      category: "electrics",
      subcategory: "switches-and-accessories",
    },
    {
      title: "Spike Star Surge & Spikeguard (2 m)",
      image:
        "https://images.unsplash.com/photo-1738240581253-2ad5e88495bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdoZWVsJTIwU3RhciUyMFN1cmdlJTIwJTI2JTIwU3Bpa2VHdWFyZHxlbnwwfHwwfHx8MA%3D%3D",
      id: "6",
      category: "electrics",
      subcategory: "switches-and-accessories",
    },
    {
      title: "USB Star Gan Charger 65 W 1 C",
      image:
        "https://images.unsplash.com/photo-1570949300547-dd3302720d8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFVTQiUyMFN0YXIlMjBHYW4lMjBDaGFyZ2VyJTIwNjUlMjBXJTIwMSUyMEN8ZW58MHx8MHx8fDA%3D",
      id: "7",
      category: "electrics",
      subcategory: "switches-and-accessories",
    },
    {
      title: "USB Star Surge & Spikeguard",
      image:
        "https://images.unsplash.com/photo-1608426713785-4a4c1495b064?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VVNCJTIwU3RhciUyMFN1cmdlJTIwJTI2JTIwU3Bpa2VndWFyZCUyMGxpZ2h0fGVufDB8fDB8fHww",
      id: "8",
      category: "electrics",
      subcategory: "switches-and-accessories",
    },
  ],
  "home-appliances": [
    {
      title: "Havells Polaris Water Dispenser",
      image:
        "https://images.unsplash.com/photo-1628239532623-c035054bff4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGF2ZWxscyUyMFBvbGFyaXMlMjBXYXRlciUyMERpc3BlbnNlcnxlbnwwfHwwfHx8MA%3D%3D",
      id: "1",
      category: "electrics",
      subcategory: "home-appliances",
    },
    {
      title: "Husky Steam Iron",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghgsiccu220_1.jpg",
      id: "2",
      category: "electrics",
      subcategory: "home-appliances",
    },
    {
      title: "Crony Steam Iron",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghgsicbg200.jpg",
      id: "3",
      category: "electrics",
      subcategory: "home-appliances",
    },
    {
      title: "Tinyo Steam Iron",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghgsidqp125_1.jpg",
      id: "4",
      category: "electrics",
      subcategory: "home-appliances",
    },
    {
      title: "Tinyo Pro Steam Iron",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghgsidrb125_3.jpg",
      id: "5",
      category: "electrics",
      subcategory: "home-appliances",
    },
    {
      title: "Vesta Stainless Steel Electric Kettle",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghbktdfe200_base_1.jpg",
      id: "6",
      category: "electrics",
      subcategory: "home-appliances",
    },
    {
      title: "Fyber Standing Garment Steamer",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghggsdgu160.jpg",
      id: "7",
      category: "electrics",
      subcategory: "home-appliances",
    },
    {
      title: "Vela Hand Held Garment Steamer",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghggsddw110.jpg",
      id: "8",
      category: "electrics",
      subcategory: "home-appliances",
    },
  ],
  "home-electricals": [
    {
      title: "MCB FP C Curve",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Switchgear/DHMGCFPF006.jpg",
      id: "1",
      category: "electrics",
      subcategory: "home-electricals",
    },
    {
      title: "MCB TPN C Curve",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/f/h/fhvvehuwht06_66__5.jpg",
      id: "2",
      category: "electrics",
      subcategory: "home-electricals",
    },
    {
      title: "MCB DP C Curve",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Switchgear/DHMGCDPF002.jpg",
      id: "3",
      category: "electrics",
      subcategory: "home-electricals",
    },
    {
      title: "MCB SPN C Curve",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/f/h/fhvvehuwht06_61__5.jpg",
      id: "4",
      category: "electrics",
      subcategory: "home-electricals",
    },
    {
      title: "MCB SP B Curve",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Switchgear/DHDUCDP0253025.jpg",
      id: "5",
      category: "electrics",
      subcategory: "home-electricals",
    },
    {
      title: "X7 MCB SP",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/f/h/fhvvehuwht06_87__10.jpg",
      id: "6",
      category: "electrics",
      subcategory: "home-electricals",
    },
    {
      title: "X7 MCB SPN",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Switchgear/DHCEACSN2100025.jpg",
      id: "7",
      category: "electrics",
      subcategory: "home-electricals",
    },
    {
      title: "MCB TPN C Curve New",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/f/h/fhvvehuwht06_58_9__2.jpg",
      id: "8",
      category: "electrics",
      subcategory: "home-electricals",
    },
  ],
  "smart-home": [
    {
      title: "Smart LED Bulb 9W",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/b/a/ball_base.jpg",
      id: "1",
      category: "electrics",
      subcategory: "smart-home",
    },
    {
      title: "Smart Wi-Fi Plug 16A",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Switches/AHLP301600.jpg",
      id: "2",
      category: "electrics",
      subcategory: "smart-home",
    },
    {
      title: "Smart Motion Sensor Light",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/l/h/lhfoece1tz1o014_1.jpg",
      id: "3",
      category: "electrics",
      subcategory: "smart-home",
    },
    {
      title: "Smart Ceiling Fan Controller",
      image:
        "https://images.unsplash.com/photo-1720204835658-ceb6c3e4df6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U21hcnQlMjBDZWlsaW5nJTIwRmFuJTIwQ29udHJvbGxlcnxlbnwwfHwwfHx8MA%3D%3D",
      id: "4",
      category: "electrics",
      subcategory: "smart-home",
    },
    {
      title: "Smart Door Lock",
      image:
        "https://plus.unsplash.com/premium_photo-1729574858839-5a145c914bac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBEb29yJTIwTG9ja3xlbnwwfHwwfHx8MA%3D%3D",
      id: "5",
      category: "electrics",
      subcategory: "smart-home",
    },
    {
      title: "Smart RGB Strip Light",
      image:
        "https://images.unsplash.com/photo-1731473839779-c35028d77f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U21hcnQlMjBSR0IlMjBTdHJpcCUyMExpZ2h0fGVufDB8fDB8fHww",
      id: "6",
      category: "electrics",
      subcategory: "smart-home",
    },
    {
      title: "Smart Thermostat",
      image:
        "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBUaGVybW9zdGF0fGVufDB8fDB8fHww",
      id: "7",
      category: "electrics",
      subcategory: "smart-home",
    },
    {
      title: "Smart Security Camera",
      image:
        "https://images.unsplash.com/photo-1681508482468-869b3db2aee6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U21hcnQlMjBTZWN1cml0eSUyMENhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      id: "8",
      category: "electrics",
      subcategory: "smart-home",
    },
  ],
  "small-appliances": [
    {
      title: "Compact Electric Toaster",
      image:
        "https://plus.unsplash.com/premium_photo-1719452894874-3da9fa3b882c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29tcGFjdCUyMEVsZWN0cmljJTIwVG9hc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
      id: "1",
      category: "electrics",
      subcategory: "small-appliances",
    },
    {
      title: "Mini Blender 300W",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/h/ghfhbdsw030_3_.jpg",
      id: "2",
      category: "electrics",
      subcategory: "small-appliances",
    },
    {
      title: "Portable Coffee Maker",
      image:
        "https://images.unsplash.com/photo-1712664436035-64c470e9c40e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UG9ydGFibGUlMjBDb2ZmZWUlMjBNYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      id: "3",
      category: "electrics",
      subcategory: "small-appliances",
    },
    {
      title: "Electric Hand Mixer",
      image:
        "https://plus.unsplash.com/premium_photo-1664391930020-9d0649a4820b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxlY3RyaWMlMjBIYW5kJTIwTWl4ZXJ8ZW58MHx8MHx8fDA%3D",
      id: "4",
      category: "electrics",
      subcategory: "small-appliances",
    },
    {
      title: "Digital Air Fryer 4L",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Appliances/GHROFBMK250.jpg",
      id: "5",
      category: "electrics",
      subcategory: "small-appliances",
    },
    {
      title: "Cordless Vacuum Cleaner",
      image:
        "https://images.unsplash.com/photo-1722710070534-e31f0290d8de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29yZGxlc3MlMjBWYWN1dW0lMjBDbGVhbmV8ZW58MHx8MHx8fDA%3D",
      id: "6",
      category: "electrics",
      subcategory: "small-appliances",
    },
    {
      title: "Electric Sandwich Maker",
      image:
        "https://images.unsplash.com/photo-1734822359967-651406d797a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlY3RyaWMlMjBTYW5kd2ljaCUyME1ha2VyfGVufDB8fDB8fHww",
      id: "7",
      category: "electrics",
      subcategory: "small-appliances",
    },
    {
      title: "Personal Juicer 500W",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/import/Appliances/GHFJMDHV100.jpg",
      id: "8",
      category: "electrics",
      subcategory: "small-appliances",
    },
  ],
};

export default ProductDetails;
