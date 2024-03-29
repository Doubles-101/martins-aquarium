const database = {
    fish: [
        {
            id: 1,
            image: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg",
            name: "Gil",
            species: "Goldfish",
            food: "Algae",
            size: 1,
            location: "Japan",
            quote: "I love Panama"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Nemo",
            species: "Betta",
            food: "Plankton",
            size: 1,
            location: "China",
            quote: "I love Panama"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Dory",
            species: "Angelfish",
            food: "Insects",
            size: 3,
            location: "Norway",
            quote: "I love Panama"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Bubbles",
            species: "Terta",
            food: "Worms",
            size: 1,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Splash",
            species: "Swordtrail",
            food: "Larvae",
            size: 1,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Finley",
            species: "Molly",
            food: "Crustaceans",
            size: 1,
            location: "Russia (Caspian Sea)",
            quote: "I love Panama"
        },
        {
            id: 7,
            image: "https://plus.unsplash.com/premium_photo-1684943834574-8371ce37639f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Discus",
            species: "Flounder",
            food: "Brine shrimp",
            size: 1,
            location: "Peru",
            quote: "I love Panama"
        },
        {
            id: 8,
            image: "https://plus.unsplash.com/premium_photo-1684943834572-aefa4307e5a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Aqua",
            species: "Clownfish",
            food: "Bloodworms",
            size: 1,
            location: "Chile",
            quote: "I love Panama"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Sushi",
            species: "Zerba Danio",
            food: "Daphnia",
            size: 6,
            location: "Thailand",
            quote: "I love Panama"
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1513039464749-94912b3841ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Marlen",
            species: "Rainbowfish",
            food: "Mosquito larvae",
            size: 6,
            location: "Vietnam",
            quote: "I love Panama"
        },
        {
            id: 11,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Bubbly",
            species: "Platies",
            food: "Fish flakes",
            size: 6,
            location: "Philippines",
            quote: "I love Panama"
        },
        {
            id: 12,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Flounder",
            species: "Killifish",
            food: "Fish pellets",
            size: 6,
            location: "Indonesia",
            quote: "I love Panama"
        },
        {
            id: 13,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Splashy",
            species: "Barbs",
            food: "Krill",
            size: 6,
            location: "Bangladesh",
            quote: "I love Panama"
        },
        {
            id: 14,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Tim",
            species: "Rasbora",
            food: "Mysis shrimp",
            size: 6,
            location: "Iceland",
            quote: "I love Panama"
        },
        {
            id: 15,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Tom",
            species: "Cichlid",
            food: "Tubifex worms",
            size: 6,
            location: "Brazil",
            quote: "I love Panama"
        },
        {
            id: 16,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Poseidon",
            species: "Plecostomus",
            food: "Earthworms",
            size: 6,
            location: "Argentina",
            quote: "I love Panama"
        },
        {
            id: 17,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Blinky",
            species: "Oscars",
            food: "Aquatic plants",
            size: 6,
            location: "India",
            quote: "I love Panama"
        },
        {
            id: 18,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Rainbow",
            species: "Koi",
            food: "Phytoplankton",
            size: 6,
            location: "Australia",
            quote: "I love Panama"
        },
        {
            id: 19,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Seabiscuit",
            species: "Siamese Fighting Fish",
            food: "Zooplankton",
            size: 6,
            location: "Mexico",
            quote: "I love Panama"
        },
        {
            id: 20,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Goldie",
            species: "Carp",
            food: "Small fish",
            size: 5,
            location: "New Zealand",
            quote: "I love Panama"
        },
        {
            id: 21,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Bubbles",
            species: "Carp",
            food: "Small crustaceans",
            size: 5,
            location: "Costa Rica",
            quote: "I love Panama"
        },
        {
            id: 22,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Squirt",
            species: "Bluegill",
            food: "Small insects",
            size: 5,
            location: "Panama",
            quote: "I love Panama"
        },
        {
            id: 23,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Stary",
            species: "Sunfish",
            food: "Mollusks",
            size: 5,
            location: "Ecuador",
            quote: "I love Panama"
        },
        {
            id: 24,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Seashell",
            species: "Discus",
            food: "Aquatic insect larvae",
            size: 5,
            location: "Malaysia",
            quote: "I love Panama"
        },
        {
            id: 25,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Whiskers",
            species: "Trout",
            food: "Shrimp",
            size: 5,
            location: "Papua New Guinea",
            quote: "I love Panama"
        },
        {
            id: 26,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Tidal",
            species: "Perch",
            food: "Insect eggs",
            size: 5,
            location: "Solomon Islands",
            quote: "I love Panama"
        },
        {
            id: 27,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Sandy",
            species: "Salmon",
            food: "Fruit flies",
            size: 5,
            location: "Seychelles",
            quote: "I love Panama"
        },
        {
            id: 28,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Pebbles",
            species: "Pike",
            food: "Mealworms",
            size: 5,
            location: "Maldives",
            quote: "I love Panama"
        },
        {
            id: 29,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Tropicana",
            species: "Bass",
            food: "Blackworms",
            size: 5,
            location: "Sri Lanka",
            quote: "I love Panama"
        },
        {
            id: 30,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Reef",
            species: "Molly",
            food: "White worms",
            size: 3,
            location: "Tanzania",
            quote: "I love Panama"
        },
        {
            id: 31,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Surge",
            species: "Sole",
            food: "Frozen fish food",
            size: 2,
            location: "Kenya",
            quote: "I love Panama"
        },
        {
            id: 32,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Blu",
            species: "Cod",
            food: "Live brine shrimp",
            size: 2,
            location: "Uganda",
            quote: "I love Panama"
        },
        {
            id: 33,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Neptune",
            species: "Haddock",
            food: "Frozen bloodworms",
            size: 2,
            location: "Zambia",
            quote: "I love Panama"
        },
        {
            id: 34,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Captain",
            species: "Tuna",
            food: "Spirulina",
            size: 2,
            location: "Zimbabwe",
            quote: "I love Panama"
        },
        {
            id: 35,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Coraline",
            species: "Marlin",
            food: "Duckweed",
            size: 2,
            location: "Botswana",
            quote: "I love Panama"
        },
        {
            id: 36,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Shimmer",
            species: "Swordfish",
            food: "Water fleas",
            size: 2,
            location: "South Africa",
            quote: "I love Panama"
        },
        {
            id: 37,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Seafarer",
            species: "Snapper",
            food: "Grasshoppers",
            size: 2,
            location: "Namibia",
            quote: "I love Panama"
        },
        {
            id: 38,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Scallop",
            species: "Mahi-mahi",
            food: "Crickets",
            size: 3,
            location: "Mozambique",
            quote: "I love Panama"
        },
        {
            id: 39,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Beachy",
            species: "Grouper",
            food: "Fruit",
            size: 3,
            location: "Madagascar",
            quote: "I love Panama"
        },
        {
            id: 40,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Finn",
            species: "Tilapia",
            food: "Vegetables",
            size: 7,
            location: "Senegal",
            quote: "I love Panama"
        },
        {
            id: 41,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Tony",
            species: "Herring",
            food: "Squid",
            size: 7,
            location: "Mauritania",
            quote: "I love Panama"
        },
        {
            id: 42,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Seaweed",
            species: "Anchovy",
            food: "Octopus",
            size: 7,
            location: "Sudan",
            quote: "I love Panama"
        },
        {
            id: 43,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Splasher",
            species: "Sardine",
            food: "Small snails",
            size: 7,
            location: "Egypt",
            quote: "I love Panama"
        },
        {
            id: 44,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Breezy",
            species: "Mackerel",
            food: "Fish eggs",
            size: 7,
            location: "Ethiopia",
            quote: "I love Panama"
        },
        {
            id: 45,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Tide",
            species: "Halibut",
            food: "Cyclops",
            size: 7,
            location: "Nigeria",
            quote: "I love Panama"
        },
        {
            id: 46,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Flicker",
            species: "Wrasse",
            food: "Rotifers",
            size: 7,
            location: "Congo",
            quote: "I love Panama"
        },
        {
            id: 47,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Bubbler",
            species: "Hake",
            food: "Carnivorous plants",
            size: 7,
            location: "DRC",
            quote: "I love Panama"
        },
        {
            id: 48,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Oceanus",
            species: "Pollock",
            food: "Fish fry",
            size: 7,
            location: "Cameroon",
            quote: "I love Panama"
        },
        {
            id: 49,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Splish",
            species: "Skate",
            food: "Nymphs",
            size: 7,
            location: "Gabon",
            quote: "I love Panama"
        },
        {
            id: 50,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Swimmer",
            species: "Sturgeon",
            food: "Small crustaceans",
            size: 7,
            location: "Republic of the Congo",
            quote: "I love Panama"
        },
        {
            id: 51,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Skippy",
            species: "Pikeperch",
            food: "Small fish",
            size: 7,
            location: "Central African Republic",
            quote: "I love Panama"
        },
        {
            id: 52,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Echo",
            species: "Bream",
            food: "Mysis",
            size: 7,
            location: "Angola",
            quote: "I love Panama"
        },
        {
            id: 53,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Coral",
            species: "Gar",
            food: "Shrimp eggs",
            size: 7,
            location: "Uganda",
            quote: "I love Panama"
        },
        {
            id: 54,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Seabreeze",
            species: "Eel",
            food: "Artemia",
            size: 7,
            location: "Sudan",
            quote: "I love Panama"
        },
        {
            id: 55,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Siren",
            species: "Gurnard",
            food: "Fish food flakes",
            size: 1,
            location: "Kenya",
            quote: "I love Panama"
        },
        {
            id: 56,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Pop",
            species: "Lingcod",
            food: "Fish food pellets",
            size: 1,
            location: "Tanzania",
            quote: "I love Panama"
        },
        {
            id: 57,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Splash Splash",
            species: "Wolffish",
            food: "Bloodworm larvae",
            size: 1,
            location: "Bolivia",
            quote: "I love Panama"
        },
        {
            id: 58,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Pearl",
            species: "Oarfish",
            food: "Tubifex",
            size: 1,
            location: "Colombia",
            quote: "I love Panama"
        },
        {
            id: 59,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Opal",
            species: "Parrotfish",
            food: "Gammarus",
            size: 1,
            location: "Venezuela",
            quote: "I love Panama"
        },
        {
            id: 60,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Shelly",
            species: "Pufferfish",
            food: "Rotifers",
            size: 1,
            location: "Guyana",
            quote: "I love Panama"
        },
        {
            id: 61,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Shelby",
            species: "Triggerfish",
            food: "Ostracods",
            size: 1,
            location: "Suriname",
            quote: "I love Panama"
        },
        {
            id: 62,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Turkey",
            species: "Lionfish",
            food: "Seed shrimp",
            size: 1,
            location: "French Guiana",
            quote: "I love Panama"
        },
        {
            id: 63,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Blue",
            species: "Seahorse",
            food: "Infusoria",
            size: 1,
            location: "Paraguay",
            quote: "I love Panama"
        },
        {
            id: 64,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Tidal",
            species: "Pipefish",
            food: "Cyclops",
            size: 1,
            location: "Uruguay",
            quote: "I love Panama"
        },
        {
            id: 65,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Martin",
            species: "Archerfish",
            food: "Brine shrimp eggs",
            size: 1,
            location: "Russia",
            quote: "I love Panama"
        },
        {
            id: 66,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "H2O",
            species: "Butterflyfish",
            food: "Daphnia",
            size: 1,
            location: "China",
            quote: "I love Panama"
        },
        {
            id: 67,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Shine",
            species: "Surgeonfish",
            food: "Clams",
            size: 3,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 68,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Seashine",
            species: "Tang",
            food: "Cockles",
            size: 3,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 69,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Sandy Sand Sand",
            species: "Damselfish",
            food: "Oysters",
            size: 9,
            location: "Australia",
            quote: "I love Panama"
        },
        {
            id: 70,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Steve",
            species: "Boxfish",
            food: "Krill",
            size: 9,
            location: "Germany",
            quote: "I love Panama"
        },
        {
            id: 71,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Alexander",
            species: "Wobbegong",
            food: "Squid",
            size: 9,
            location: "France",
            quote: "I love Panama"
        },
        {
            id: 72,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Olivia",
            species: "Batfish",
            food: "Copepods",
            size: 9,
            location: "Spain",
            quote: "I love Panama"
        },
        {
            id: 73,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Liam",
            species: "Blenny",
            food: "Gammarus",
            size: 9,
            location: "Portugal",
            quote: "I love Panama"
        },
        {
            id: 74,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Emma",
            species: "Boxer Crab",
            food: "Scuds",
            size: 9,
            location: "Italy",
            quote: "I love Panama"
        },
        {
            id: 75,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Noah",
            species: "Hogfish",
            food: "Snails",
            size: 9,
            location: "Switzerland",
            quote: "I love Panama"
        },
        {
            id: 76,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Ava",
            species: "Jawfish",
            food: "Mussels",
            size: 3,
            location: "Austria",
            quote: "I love Panama"
        },
        {
            id: 77,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "William",
            species: "Porcupinefish",
            food: "Shrimp pellets",
            size: 2,
            location: "Hungary",
            quote: "I love Panama"
        },
        {
            id: 78,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Sophia",
            species: "Cornetfish",
            food: "Duckweed",
            size: 2,
            location: "Slovakia",
            quote: "I love Panama"
        },
        {
            id: 79,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "James",
            species: "Filefish",
            food: "Watercress",
            size: 2,
            location: "Serbia",
            quote: "I love Panama"
        },
        {
            id: 80,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Isabella",
            species: "Goatfish",
            food: "Zucchini",
            size: 2,
            location: "Croatia",
            quote: "I love Panama"
        },
        {
            id: 81,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Benjamin",
            species: "Hawkfish",
            food: "Spinach",
            size: 2,
            location: "Bosnia and Herzegovina",
            quote: "I love Panama"
        },
        {
            id: 82,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Mia",
            species: "Moonfish",
            food: "Kale",
            size: 2,
            location: "Montenegro",
            quote: "I love Panama"
        },
        {
            id: 83,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Lucas",
            species: "Lizardfish",
            food: "Lettuce",
            size: 2,
            location: "Albania",
            quote: "I love Panama"
        },
        {
            id: 84,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Harper",
            species: "Goby",
            food: "Carrots",
            size: 2,
            location: "Greece",
            quote: "I love Panama"
        },
        {
            id: 85,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Henry",
            species: "Scorpionfish",
            food: "Cucumber",
            size: 2,
            location: "Turkey",
            quote: "I love Panama"
        },
        {
            id: 86,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Evelyn",
            species: "Rockfish",
            food: "Bell peppers",
            size: 2,
            location: "Iran",
            quote: "I love Panama"
        },
        {
            id: 87,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Oliver",
            species: "Soldierfish",
            food: "Peas",
            size: 5,
            location: "Iraq",
            quote: "I love Panama"
        },
        {
            id: 88,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Abigail",
            species: "Drumfish",
            food: "Beans",
            size: 5,
            location: "Syria",
            quote: "I love Panama"
        },
        {
            id: 89,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Elijah",
            species: "Squirrelfish",
            food: "Corn",
            size: 5,
            location: "Jordan",
            quote: "I love Panama"
        },
        {
            id: 90,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Emily",
            species: "Grunt",
            food: "Oranges",
            size: 5,
            location: "Israel",
            quote: "I love Panama"
        },
        {
            id: 91,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Ethan",
            species: "Barracuda",
            food: "Apples",
            size: 5,
            location: "Palestine",
            quote: "I love Panama"
        },
        {
            id: 92,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Charlotte",
            species: "Bonefish",
            food: "Bananas",
            size: 5,
            location: "Lebanon",
            quote: "I love Panama"
        },
        {
            id: 93,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Alexander",
            species: "Tuskfish",
            food: "Grapes",
            size: 5,
            location: "Cyprus",
            quote: "I love Panama"
        },
        {
            id: 94,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Amelia",
            species: "Cowfish",
            food: "Papayas",
            size: 5,
            location: "Egypt",
            quote: "I love Panama"
        },
        {
            id: 95,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Michael",
            species: "Flatfish",
            food: "Mangos",
            size: 5,
            location: "Libya",
            quote: "I love Panama"
        },
        {
            id: 96,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Elizabetth",
            species: "Sargo",
            food: "Blueberries",
            size: 5,
            location: "Chad",
            quote: "I love Panama"
        },
        {
            id: 97,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Daniel",
            species: "Sandperch",
            food: "Raspberries",
            size: 5,
            location: "Cameroon",
            quote: "I love Panama"
        },
        {
            id: 98,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Sofia",
            species: "Trumpetfish",
            food: "Strawberries",
            size: 5,
            location: "Nigeria",
            quote: "I love Panama"
        },
        {
            id: 99,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Matthew",
            species: "Tilefish",
            food: "Blackberries",
            size: 5,
            location: "Benin",
            quote: "I love Panama"
        },
        {
            id: 100,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Avery",
            species: "Moray Eel",
            food: "Melons",
            size: 5,
            location: "Niger",
            quote: "I love Panama"
        },
        {
            id: 101,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Aiden",
            species: "Mudskipper",
            food: "Pears",
            size: 5,
            location: "Mali",
            quote: "I love Panama"
        },
        {
            id: 102,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Ella",
            species: "Razorfish",
            food: "Kiwis",
            size: 5,
            location: "Guinea",
            quote: "I love Panama"
        },
        {
            id: 103,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Jackson",
            species: "Dottyback",
            food: "Pineapples",
            size: 5,
            location: "Ivory Coast",
            quote: "I love Panama"
        },
        {
            id: 104,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Scarlett",
            species: "Pikeblenny",
            food: "Cherries",
            size: 5,
            location: "Ghana",
            quote: "I love Panama"
        },
        {
            id: 105,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Sebastian",
            species: "Stickleback",
            food: "Tomatoes",
            size: 5,
            location: "Togo",
            quote: "I love Panama"
        },
        {
            id: 106,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Gracew",
            species: "Halosaur",
            food: "Cauliflower",
            size: 5,
            location: "Burkina Faso",
            quote: "I love Panama"
        },
        {
            id: 107,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "David",
            species: "Searobin",
            food: "Broccoli",
            size: 5,
            location: "Niger",
            quote: "I love Panama"
        },
        {
            id: 108,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Chloe",
            species: "Bobtail Snipe Eel",
            food: "Celery",
            size: 5,
            location: "Nigeria",
            quote: "I love Panama"
        },
        {
            id: 109,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Joseph",
            species: "Pelican Eel",
            food: "Potatoes",
            size: 5,
            location: "Guinea",
            quote: "I love Panama"
        },
        {
            id: 110,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Victoria",
            species: "Freshwater Drum",
            food: "Sweet potatoes",
            size: 5,
            location: "Guinea-Bissau",
            quote: "I love Panama"
        },
        {
            id: 111,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Samuel",
            species: "Glassfish",
            food: "Squash",
            size: 5,
            location: "Senegal",
            quote: "I love Panama"
        },
        {
            id: 112,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Madison",
            species: "Hogfish",
            food: "Pumpkin",
            size: 5,
            location: "Mauritania",
            quote: "I love Panama"
        },
        {
            id: 113,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "John",
            species: "Jack Dempsey",
            food: "Radishes",
            size: 4,
            location: "Gambia",
            quote: "I love Panama"
        },
        {
            id: 114,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Luna",
            species: "Kissing Gourami",
            food: "Turnips",
            size: 4,
            location: "Guinea",
            quote: "I love Panama"
        },
        {
            id: 115,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Jack",
            species: "Longnose Gar",
            food: "Beets",
            size: 4,
            location: "Australia",
            quote: "I love Panama"
        },
        {
            id: 116,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Penelope",
            species: "Midas Cichlid",
            food: "Cabbage",
            size: 4,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 117,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Luck",
            species: "Oscar Cichlid",
            food: "Eggplant",
            size: 4,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 118,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Layla",
            species: "Parrot Cichlid",
            food: "Asparagus",
            size: 4,
            location: "Russia",
            quote: "I love Panama"
        },
        {
            id: 119,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Anthony",
            species: "Peacock Cichlid",
            food: "Artichokes",
            size: 4,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 120,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Riley",
            species: "Piranha",
            food: "Brussels sprouts",
            size: 4,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 121,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Issac",
            species: "Red Belly Pacu",
            food: "Leeks",
            size: 4,
            location: "Kazakhstan",
            quote: "I love Panama"
        },
        {
            id: 122,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Zoe",
            species: "Ropefish",
            food: "Onions",
            size: 4,
            location: "Turkmenistan",
            quote: "I love Panama"
        },
        {
            id: 123,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Wyatt",
            species: "Royal Gramma",
            food: "Garlic",
            size: 4,
            location: "Iran",
            quote: "I love Panama"
        },
        {
            id: 124,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Nora",
            species: "Scat",
            food: "Ginger",
            size: 4,
            location: "Azerbaijan",
            quote: "I love Panama"
        },
        {
            id: 125,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Dylan",
            species: "Silver Dollar",
            food: "Mushrooms",
            size: 4,
            location: "Russia",
            quote: "I love Panama"
        },
        {
            id: 126,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Lily",
            species: "Striped Bass",
            food: "Rice",
            size: 4,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 127,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Christopher",
            species: "Sun Catfish",
            food: "Pasta",
            size: 4,
            location: "Iran",
            quote: "I love Panama"
        },
        {
            id: 128,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Eleanor",
            species: "Tadpole Madtom",
            food: "Bread",
            size: 4,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 129,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Joshua",
            species: "Tiger Barb",
            food: "Oats",
            size: 4,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 130,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Hannah",
            species: "Tiger Shovelnose Catfish",
            food: "Cereal",
            size: 4,
            location: "Nicaragua",
            quote: "I love Panama"
        },
        {
            id: 131,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Andrew",
            species: "Toadfish",
            food: "Quinoa",
            size: 4,
            location: "Russia",
            quote: "I love Panama"
        },
        {
            id: 132,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Lillian",
            species: "Triggerfish",
            food: "Millet",
            size: 4,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 133,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Grayson",
            species: "Trout-perch",
            food: "Barley",
            size: 8,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 134,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Addison",
            species: "Tuna",
            food: "Lentils",
            size: 8,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 135,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Julian",
            species: "Upside-down Catfish",
            food: "Beans",
            size: 8,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 136,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Mateo",
            species: "Veiltail Betta",
            food: "Chickpeas",
            size: 8,
            location: "Tanzania",
            quote: "I love Panama"
        },
        {
            id: 137,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Ellie",
            species: "Walking Catfish",
            food: "Tofu",
            size: 8,
            location: "Malawi",
            quote: "I love Panama"
        },
        {
            id: 138,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Levi",
            species: "Weather Loach",
            food: "Tempeh",
            size: 8,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 139,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Stella",
            species: "Whip-tailed Catfish",
            food: "Seitan",
            size: 8,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 140,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Nathan",
            species: "Wolf Fish",
            food: "Nuts",
            size: 8,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 141,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Natalie",
            species: "Wrasse",
            food: "Seeds",
            size: 8,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 142,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Caleb",
            species: "Yellow Bass",
            food: "Nutritional yeast",
            size: 8,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 143,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Zoe",
            species: "Yellow Perch",
            food: "Protein bars",
            size: 8,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 144,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Christian",
            species: "Yellowhead Jawfish",
            food: "Granola",
            size: 8,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 145,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Leah",
            species: "Yellowtail Snapper",
            food: "Trail mix",
            size: 8,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 146,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Hunter",
            species: "Yoyo Loach",
            food: "Crackers",
            size: 9,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 147,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Hazel",
            species: "Zebra Pleco",
            food: "Chips",
            size: 3,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 148,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Isaiah",
            species: "Zebra Tilapia",
            food: "Popcorn",
            size: 3,
            location: "Canada",
            quote: "I love Panama"
        },
        {
            id: 149,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Violet",
            species: "Zebra Trout",
            food: "Pretzels",
            size: 3,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 150,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Thomas",
            species: "Zebrafish",
            food: "Cheese",
            size: 3,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 151,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Aurora",
            species: "Zebrafish",
            food: "Yogurt",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 152,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Aaron",
            species: "Zig-zag Eel",
            food: "Milk",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 153,
            image: "    https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Savannah",
            species: "Zingel",
            food: "Eggs",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 154,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Lincoln",
            species: "Zingel streber",
            food: "Butter",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 155,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Audrey",
            species: "Zingel zingel",
            food: "Olive oil",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 156,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Charles",
            species: "Zingel zingel",
            food: "Canola oil",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 157,
            image: "    https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Brooklyn",
            species: "Zingelidis vandesandti",
            food: "Coconut oil",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 158,
            image: "    https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Eli",
            species: "Zingelidae",
            food: "Avocado oil",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 159,
            image: "    https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Bella",
            species: "Zingelinae",
            food: "Sesame oil",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 160,
            image: "    https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Connor",
            species: "Zingelus",
            food: "Sunflower oil",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 161,
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Claire",
            species: "Zipper Loach",
            food: "Peanut oil",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 162,
            image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Cameron",
            species: "Zoarcidae",
            food: "Soy sauce",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 163,
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Brooklyn",
            species: "Zoarces americanus",
            food: "Worcestershire sauce",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 164,
            image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Naomi",
            species: "Zoarces elongatus",
            food: "Vinegar",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 165,
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Nicholas",
            species: "Zoarces fedorovi",
            food: "Mustard",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 166,
            image: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Arianna",
            species: "Zoarces gillii",
            food: "Ketchup",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 167,
            image: "https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Evan",
            species: "Zoarces viviparus",
            food: "Mayonnaise",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 168,
            image: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Ruby",
            species: "Zosteropidae",
            food: "Hot sauce",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 169,
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Axel",
            species: "Zosterops",
            food: "BBQ sauce",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 170,
            image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Piper",
            species: "Zosterops abyssinicus",
            food: "Salad dressing",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 171,
            image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Tristan",
            species: "Zosterops atrifrons",
            food: "Salsa",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 172,
            image: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Alexis",
            species: "Zosterops capensis",
            food: "Hummus",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 173,
            image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Ryder",
            species: "Zosterops chloronothos",
            food: "Guacamole",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 174,
            image: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Sadie",
            species: "Zosterops emiliae",
            food: "Pesto",
            size: 5,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 175,
            image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Leo",
            species: "Zosterops flavissimus",
            food: "Marinara sauce",
            size: 4,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 176,
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Eliana",
            species: "Zosterops frenata",
            food: "Pesto",
            size: 4,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 177,
            image: "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Santiago",
            species: "Zosterops griseotinctus",
            food: "Alfredo sauce",
            size: 2,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 178,
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Taylor",
            species: "Zosterops japonicus",
            food: "Tahini",
            size: 3,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 179,
            image: "https://images.unsplash.com/photo-1497671954146-59a89ff626ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Diego",
            species: "Zosterops lateralis",
            food: "Honey",
            size: 3,
            location: "United States",
            quote: "I love Panama"
        },
        {
            id: 180,
            image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpc2h8ZW58MHx8MHx8fDA%3D",
            name: "Harrison",
            species: "Zosterops semperi",
            food: "Maple syrup",
            size: 7,
            location: "United States",
            quote: "I love Panama"
        },
    ],
    tips: [
        {
            id: 1,
            title: "Change water regularly",
            description: "The properties of your tank’s water is crucial to the long-term well-being of your fish."
        },
        {
            id: 2,
            title: "Acclimate your fish to the water",
            description: "Many fish species are delicate and thus, without proper acclimation, they may go through shock."
        },
        {
            id: 3,
            title: "Maintain pH balance and other chemical levels",
            description: "You can monitor your tank’s pH  levels by purchasing a pH test kit."
        },
        {
            id: 4,
            title: "Make sure water temperature is right",
            description: "Your tank’s water temperature should be comfortable enough to sustain aquatic life."
        }
    ],
    locations: [
        {
            id: 1, 
            location: "USA",
            quote: "Make sure to wear sunscreen!"
        },
        {
            id: 2, 
            location: "Mexico",
            quote: "Bring extra cash and have fun!"
        },
        {
            id: 3, 
            location: "Panama",
            quote: "The tour guides are extra friendly. Tip them well!"
        },
        {
            id: 4, 
            location: "China",
            quote: "Check out the amazing train system!"
        },
        {
            id: 5, 
            location: "Japan",
            quote: "One of the best countries to fish at."
        },
        {
            id: 6, 
            location: "Spain",
            quote: "Take time to observe the buildings."
        },
        {
            id: 7, 
            location: "Italy",
            quote: "Enjoy the food and culture"
        },
        {
            id: 8, 
            location: "South Africa",
            quote: "Check out the surfing options"
        },
        {
            id: 9, 
            location: "New Zealand",
            quote: "Plenty of outdoor activities"
        },
        {
            id: 10, 
            location: "Brazil",
            quote: "Check out the night-life!"
        }
    ]
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []


    for (const holy of database.fish) {
        if (holy.size % 3 === 0) {
            holyFish.push(holy)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const soldier of database.fish) {
        if (soldier.size % 5 === 0) {
            soldiers.push(soldier)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const regular of database.fish) {
        if (regular.size % 5 != 0 && regular.size % 3 != 0) {
            regularFish.push(regular)
        }
    }
    
    return regularFish
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}