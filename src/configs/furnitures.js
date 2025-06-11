const furnitures = [
  {
    category: "beds",
    data: [
      {
        title: "Cleo Bed ",
        category: "furniture",
        subcategory: "beds",
        id: "1",
        image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZHxlbnwwfHwwfHx8MA%3D%3D",
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

export default furnitures;
