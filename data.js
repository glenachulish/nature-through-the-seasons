/* =============================================================================
   Nature Through the Seasons — data.js
   -----------------------------------------------------------------------------
   A single constant `seasonData`, keyed by the 12 months. Each month holds the
   six categories used throughout the app:

     Mammals, Birds, AmphibiansReptilesFish, Invertebrates, Plants, TopPlaces

   SPECIES SCHEMA (every entry in the wildlife categories):
     name          {String}        e.g. "Red Fox"
     action        {String|null}   e.g. "courting", "rutting", "cubs emerging"
     bakerPage     {String}        page in Nick Baker's "British Wildlife"  [ ]
     collinsPage   {String}        page in the Collins Bird Guide           [ ]
     referenceUrl  {String}        RSPB / Wildlife Trusts / Woodland Trust
     medicalUses   {String}        plant-specific
     culinaryUses  {String}        plant-specific
     folklore      {String}        folklore details or links

   TopPlaces is a simple array of { name } objects (a place isn't a species).

   STATUS: January and February are fully populated as the pilot. The remaining
   ten months are scaffolded with their species names from the source guide and
   empty schema fields, ready to be enriched in a later phase. Page numbers were
   cross-referenced against the British Wildlife index (bakerPage) and the
   Collins Bird Guide index (collinsPage); blanks mean "not yet looked up".
   ========================================================================== */

const seasonData = {

  /* ----------------------------------------------------------------- JANUARY */
  January: {
    Mammals: [
      {
        name: "Voles",
        action: null,
        bakerPage: "15-16",
        collinsPage: "",
        referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/bank-vole",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Vital winter prey for owls and kestrels; their tunnels stay active beneath the snow."
      },
      {
        name: "Squirrels",
        action: "courting",
        bakerPage: "16-17",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/grey-squirrel/",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Mid-winter chases spiralling up tree trunks are the first sign of the breeding season."
      }
    ],
    Birds: [
      {
        name: "Waxwing",
        action: null,
        bakerPage: "18",
        collinsPage: "330",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/waxwing",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Irruptive winter visitors from Scandinavia, descending on berry-laden rowans and supermarket car parks alike."
      },
      {
        name: "Lapwing",
        action: null,
        bakerPage: "18",
        collinsPage: "138",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/lapwing",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Also called the peewit for its call; winter flocks wheel over flooded fields."
      },
      {
        name: "Shags",
        action: null,
        bakerPage: "",
        collinsPage: "78",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/shag",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Distinguished from cormorants by a steeper forehead and, in spring, a jaunty crest."
      },
      {
        name: "Cormorants",
        action: null,
        bakerPage: "",
        collinsPage: "60, 78",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/cormorant",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Often seen wings outstretched to dry, their feathers being less waterproof than most waterbirds'."
      },
      {
        name: "Sparrowhawks",
        action: null,
        bakerPage: "25-26",
        collinsPage: "112",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/sparrowhawk",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Garden ambush hunters; the larger bird of a pair is the female."
      }
    ],
    AmphibiansReptilesFish: [
      {
        name: "Frogs",
        action: "courting",
        bakerPage: "27",
        collinsPage: "",
        referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-frog/",
        medicalUses: "",
        culinaryUses: "",
        folklore: "In milder south-western winters, frogs gather at ponds remarkably early to spawn."
      }
    ],
    Invertebrates: [],
    Plants: [
      {
        name: "Snowdrops",
        action: null,
        bakerPage: "",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/snowdrop/",
        medicalUses: "Contains galantamine, an alkaloid used in medicine to treat the symptoms of Alzheimer's disease.",
        culinaryUses: "None — all parts are poisonous if eaten.",
        folklore: "A symbol of hope and purity; tradition holds it unlucky to bring a single bloom indoors."
      },
      {
        name: "Lichens",
        action: null,
        bakerPage: "30, 215",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/fungi-and-lichens/",
        medicalUses: "Historically used in folk remedies and as the source of litmus dye.",
        culinaryUses: "Some species used historically to make dyes for tweed and wool.",
        folklore: "A partnership of fungus and alga; their presence is a classic indicator of clean air."
      }
    ],
    TopPlaces: [
      { name: "Clyde Estuary" },
      { name: "Snettisham, Norfolk" },
      { name: "Old Hall Marshes, Essex" },
      { name: "Pagham Harbour, West Sussex" },
      { name: "Exe Estuary, Devon" },
      { name: "Morecambe Bay, Lancashire" },
      { name: "Greyabbey, County Down" }
    ]
  },

  /* ---------------------------------------------------------------- FEBRUARY */
  February: {
    Mammals: [
      {
        name: "Badgers",
        action: null,
        bakerPage: "67-68",
        collinsPage: "",
        referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/badger",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Cubs are born underground in the sett this month, though they won't emerge until spring."
      }
    ],
    Birds: [
      {
        name: "Rook",
        action: null,
        bakerPage: "",
        collinsPage: "366",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/rook",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Rookeries grow noisy as the colony begins repairing nests; a 'parliament of rooks' in folklore."
      },
      {
        name: "Grebe",
        action: null,
        bakerPage: "",
        collinsPage: "66",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/great-crested-grebe",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Great crested grebes begin their elaborate weed-dance courtship on open water."
      },
      {
        name: "Woodpeckers",
        action: "drumming",
        bakerPage: "",
        collinsPage: "244",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/great-spotted-woodpecker",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Great spotted woodpeckers drum on resonant dead branches to claim territory."
      },
      {
        name: "Wigeon",
        action: null,
        bakerPage: "",
        collinsPage: "26",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/wigeon",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Winter flocks graze wet grassland with a distinctive whistling 'wheeoo' call."
      },
      {
        name: "Shoveler",
        action: null,
        bakerPage: "",
        collinsPage: "26",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/shoveler",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Named for the huge spatulate bill it sweeps through the water to sift food."
      },
      {
        name: "Coal Tits",
        action: null,
        bakerPage: "47, 172",
        collinsPage: "342",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/coal-tit",
        medicalUses: "",
        culinaryUses: "",
        folklore: "The smallest UK tit; caches seeds in conifers and a frequent late-winter feeder visitor."
      }
    ],
    AmphibiansReptilesFish: [
      {
        name: "Tadpoles",
        action: null,
        bakerPage: "54",
        collinsPage: "",
        referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-frog/",
        medicalUses: "",
        culinaryUses: "",
        folklore: "The earliest frogspawn of the year can hatch into tadpoles in the mild south-west."
      }
    ],
    Invertebrates: [
      {
        name: "Peacock Butterfly",
        action: "emerging from hibernation",
        bakerPage: "43, 56",
        collinsPage: "",
        referenceUrl: "https://butterfly-conservation.org/butterflies/peacock",
        medicalUses: "",
        culinaryUses: "",
        folklore: "On warm February days, hibernating adults wake and bask; the eyespots startle predators."
      },
      {
        name: "Wood Ants",
        action: null,
        bakerPage: "44, 91",
        collinsPage: "",
        referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/ants-and-wasps/wood-ant",
        medicalUses: "",
        culinaryUses: "",
        folklore: "On sunny days they cluster on the surface of their nest mounds to soak up warmth."
      }
    ],
    Plants: [
      {
        name: "Hazel Catkins",
        action: "flowering",
        bakerPage: "45, 93",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/hazel/",
        medicalUses: "Hazel has been used in traditional remedies; the nuts are nutritionally rich.",
        culinaryUses: "Hazelnuts (autumn) are widely eaten; catkins are the male flowers, not edible.",
        folklore: "The 'lambs' tails' are among the first signs of the returning year; hazel was a tree of wisdom in Celtic lore."
      },
      {
        name: "Alder",
        action: "in catkin",
        bakerPage: "45, 46",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/alder/",
        medicalUses: "Bark historically used as an astringent and for treating inflammation.",
        culinaryUses: "Not a food plant; the wood was prized for charcoal and clog-making.",
        folklore: "Cut alder wood turns orange 'as if bleeding', giving it a long association with protection and the fae."
      },
      {
        name: "Sweet Violet",
        action: null,
        bakerPage: "46",
        collinsPage: "",
        referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/sweet-violet",
        medicalUses: "Traditionally used in cough syrups and as a mild sedative; rich in vitamins A and C.",
        culinaryUses: "Edible flowers used to flavour and decorate cakes, salads and crystallised as sweets.",
        folklore: "The only scented native violet; symbol of modesty, and sacred to ancient Athens."
      }
    ],
    TopPlaces: [
      { name: "Caerlaverock, Dumfries" },
      { name: "Strangford Lough, Northern Ireland" },
      { name: "Slimbridge" },
      { name: "Langstone Harbour & Farlington Marshes" },
      { name: "Ribble Estuary" },
      { name: "Loch of Strathbeg" }
    ]
  },

  /* ------------------------------------------------------------------- MARCH */
  March: {
    Mammals: [
      { name: "Brown Hare", action: "boxing", bakerPage: "7, 49, 182", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "Wheatear", action: "arriving", bakerPage: "", collinsPage: "282", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Woodpeckers", action: null, bakerPage: "", collinsPage: "244", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Robin", action: "singing", bakerPage: "", collinsPage: "278", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Buzzards", action: null, bakerPage: "", collinsPage: "116", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [
      { name: "Toads", action: "mating", bakerPage: "27, 53", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Tadpoles", action: null, bakerPage: "54", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Newts", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Invertebrates: [
      { name: "Marsh Fritillary Caterpillars", action: null, bakerPage: "56, 57", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Buff-tailed Bumblebee", action: null, bakerPage: "57, 58", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Comma Butterfly", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Dog Whelk", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "Primroses", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Lesser Celandine", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Daffodils", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Lords and Ladies", action: null, bakerPage: "64", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Wood Anemone", action: null, bakerPage: "65, 79", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Sallow Catkins", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "Lea & Paget's Woods, near Hereford" },
      { name: "Wentwood Forest, Gwent" },
      { name: "Dunsford Wood, Devon" },
      { name: "West Dean Woods, near Chichester" },
      { name: "The Daffodil Way, Gloucestershire/Herefordshire border" },
      { name: "Farndale, Yorkshire" }
    ]
  },

  /* ------------------------------------------------------------------- APRIL */
  April: {
    Mammals: [
      { name: "Badgers in Bluebells", action: null, bakerPage: "67-68", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Wood Mouse", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "Cuckoos", action: "arriving", bakerPage: "", collinsPage: "220", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Skylark", action: "singing", bakerPage: "", collinsPage: "254", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Starling", action: null, bakerPage: "", collinsPage: "370", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Blue Tit", action: null, bakerPage: "25", collinsPage: "342", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Tree Pipit", action: null, bakerPage: "", collinsPage: "266", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [
      { name: "Grass Snakes", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Common Lizards", action: null, bakerPage: "121, 136", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Slow Worms", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Invertebrates: [
      { name: "Orange-tip Butterflies", action: null, bakerPage: "75, 79", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Wood Butterflies", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Bloody-nosed Beetle", action: null, bakerPage: "75", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "Cowslip", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "St George's Mushroom", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Bluebells", action: null, bakerPage: "66, 77-78", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "Herefordshire Badger Watch" },
      { name: "Cotswold Badger Watch" },
      { name: "Ebbor Gorge" },
      { name: "New Forest Badger Watch" },
      { name: "Kiln Wood, Kent" },
      { name: "Bradfield Woods, Suffolk" },
      { name: "Wormley Woods, Hertfordshire" },
      { name: "Castle Eden Dene, near Hartlepool" },
      { name: "New Lanark Badger Watch" }
    ]
  },

  /* --------------------------------------------------------------------- MAY */
  May: {
    Mammals: [
      { name: "Hedgehogs", action: "courting", bakerPage: "81, 98, 212", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "Stone Curlew", action: null, bakerPage: "82", collinsPage: "136", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Swifts", action: "arriving", bakerPage: "82", collinsPage: "236", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "House Martin", action: null, bakerPage: "", collinsPage: "260", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Sand Martin", action: null, bakerPage: "", collinsPage: "258", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Divers (red-, black-throated & great northern)", action: null, bakerPage: "", collinsPage: "60", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [
      { name: "Sand Lizard", action: null, bakerPage: "86, 136", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Stickleback", action: null, bakerPage: "86, 87", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Rudd", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Invertebrates: [
      { name: "Pearl-bordered Fritillaries", action: null, bakerPage: "89", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Shield Bugs", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Spring Spider Crab", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Wool Crab", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "Blossom", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Umbellifers", action: null, bakerPage: "76, 77, 90, 94", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Gorse", action: null, bakerPage: "84, 95, 128", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Dog Violet", action: null, bakerPage: "89, 92", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Early Purple Orchid", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "Rutland Water" },
      { name: "Highnam Woods" },
      { name: "Radipole Lake & Lodmoor, Weymouth" },
      { name: "Beachy Head" },
      { name: "Blean Woods, Kent" }
    ]
  },

  /* -------------------------------------------------------------------- JUNE */
  June: {
    Mammals: [
      { name: "Fox Cubs", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Grey & Common Seal Pups", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "Terns", action: null, bakerPage: "99-100", collinsPage: "198", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Puffins", action: null, bakerPage: "", collinsPage: "212", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Auks", action: null, bakerPage: "", collinsPage: "208", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Razorbills", action: null, bakerPage: "", collinsPage: "210", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Guillemots", action: null, bakerPage: "19, 96, 105", collinsPage: "210", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Skylarks", action: "singing", bakerPage: "", collinsPage: "254", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Whitethroats", action: "singing", bakerPage: "", collinsPage: "316", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Fulmar", action: null, bakerPage: "", collinsPage: "70", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [
      { name: "Common Frog (froglets emerging)", action: "froglets emerging", bakerPage: "106-107", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Cornish Sucker", action: null, bakerPage: "29, 105, 106", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Newts", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Invertebrates: [
      { name: "Common Shore Crab", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Parasitic Barnacle (Sacculina carcini)", action: null, bakerPage: "108, 142", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Stag Beetle", action: null, bakerPage: "108-109", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Scorpion Flies", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Dingy Skipper Butterfly", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Common Blue", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Speckled Wood", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "Thrift", action: null, bakerPage: "102, 104, 105, 131", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Greater Broomrape", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Common Dodder", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Bee Orchid", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Foxgloves", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Ragged Robin", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Elder", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Guelder Rose", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Yellow Rattle", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Cranesbills", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Ox-eye Daisy", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Buttercup", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "Farne Islands" },
      { name: "Rye House Marsh, Lee Valley" },
      { name: "Abberton Reservoir, Essex" },
      { name: "Stodmarsh NR, Canterbury" },
      { name: "Rye Harbour, Kent" },
      { name: "Brownsea Island, Poole" },
      { name: "Lough Neagh" }
    ]
  },

  /* -------------------------------------------------------------------- JULY */
  July: {
    Mammals: [
      { name: "Pipistrelle Bat", action: null, bakerPage: "56, 98, 117, 212", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Cetaceans", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "Tawny Owls", action: null, bakerPage: "", collinsPage: "230", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Buzzard", action: null, bakerPage: "", collinsPage: "116", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Kestrel", action: null, bakerPage: "25-26, 118", collinsPage: "118", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Sparrowhawk", action: null, bakerPage: "25-26, 118", collinsPage: "112", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Dartford Warbler", action: null, bakerPage: "119-120, 129", collinsPage: "318", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Stonechat", action: null, bakerPage: "120", collinsPage: "280", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Whinchat", action: null, bakerPage: "", collinsPage: "280", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Yellowhammer", action: null, bakerPage: "", collinsPage: "398", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [
      { name: "Adder", action: null, bakerPage: "54, 74, 121, 129, 136", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Common Lizard", action: null, bakerPage: "121, 136", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Grass Snakes", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Invertebrates: [
      { name: "Honey Bee", action: null, bakerPage: "46, 57, 122, 143, 198, 213", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Bumblebee", action: null, bakerPage: "44, 46, 57, 122, 213", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Solitary Bees & Wasps", action: null, bakerPage: "88, 122", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Purple Emperor", action: null, bakerPage: "89, 123, 124, 125", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Purple Hairstreak", action: null, bakerPage: "125", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "White Admiral", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "Bog Asphodel", action: null, bakerPage: "126", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Sphagnum Moss", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Cotton Grass", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Gorse", action: null, bakerPage: "84, 95, 128", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "New Forest" },
      { name: "Lizard Peninsula" },
      { name: "Cannock Chase" },
      { name: "Ashdown Forest" },
      { name: "Thursley Heath" },
      { name: "Studland" }
    ]
  },

  /* ------------------------------------------------------------------ AUGUST */
  August: {
    Mammals: [
      { name: "Cetaceans", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Basking Shark", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Dolphins", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Porpoises", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "Sandwich Terns", action: null, bakerPage: "101, 134", collinsPage: "198", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Oystercatchers", action: null, bakerPage: "", collinsPage: "134", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Ringed Plover", action: null, bakerPage: "", collinsPage: "140", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Sanderling", action: null, bakerPage: "", collinsPage: "152", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [
      { name: "Adders", action: null, bakerPage: "54, 74, 121, 129, 136", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Slow Worms", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Sand Lizard", action: null, bakerPage: "86, 136", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Common Lizard", action: null, bakerPage: "121, 136", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Smooth Snake", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Invertebrates: [
      { name: "Lugworms", action: null, bakerPage: "137, 210", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Ragworms", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Thin Tellin (Angulus tenuis)", action: null, bakerPage: "137, 138", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Common Cockle", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Razorshell", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Common Shrimp", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Ghost Shrimp", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "Sea Holly", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Thrift", action: null, bakerPage: "102, 104, 105, 131", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "Isle of Mull" },
      { name: "The Minch" },
      { name: "Moray Firth" },
      { name: "Durlston Head" },
      { name: "Cornwall" },
      { name: "Cardigan Bay" },
      { name: "Isle of Man" },
      { name: "Bull Point, County Antrim" },
      { name: "St Cyrus, Grampian (beach)" },
      { name: "Gibraltar Point, South Humberside (beach)" },
      { name: "North Norfolk Coast (beach)" },
      { name: "Exmouth & Dawlish, South Devon (beach)" },
      { name: "South Gower Coast, South Wales (beach)" },
      { name: "Ramore Head, County Derry (beach)" }
    ]
  },

  /* --------------------------------------------------------------- SEPTEMBER */
  September: {
    Mammals: [
      { name: "Grey Squirrel", action: null, bakerPage: "146", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Shrew", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "House Martins", action: "gathering", bakerPage: "", collinsPage: "260", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Bluethroat", action: null, bakerPage: "149, 150", collinsPage: "276", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Chaffinch", action: null, bakerPage: "", collinsPage: "384", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [
      { name: "Newts", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Invertebrates: [
      { name: "Grasshoppers", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Crickets", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Oak Bush Cricket", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Harvestmen", action: null, bakerPage: "153, 155", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Craneflies", action: null, bakerPage: "154", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Pale Tussock Moth Caterpillar", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Minotaur Beetle", action: null, bakerPage: "154", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Common Dor Beetle", action: null, bakerPage: "154, 155", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Brown Hairstreak Butterfly", action: null, bakerPage: "156", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Convolvulus Hawk Moth", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "White Bryony", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Woody Nightshade", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Rosehip", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Rowan", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Blackberries", action: null, bakerPage: "145, 158, 160, 161", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Hops", action: null, bakerPage: "161", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "West Light Viewpoint, County Antrim" },
      { name: "Holyhead, Wales" },
      { name: "St David's Head, Wales" },
      { name: "Scilly Isles" },
      { name: "Isle of Portland, Dorset" },
      { name: "Beachy Head, East Sussex" },
      { name: "Cley, Norfolk" },
      { name: "Snettisham, Norfolk" },
      { name: "Flamborough Head" },
      { name: "Spurn Head, Humberside" }
    ]
  },

  /* ----------------------------------------------------------------- OCTOBER */
  October: {
    Mammals: [
      { name: "Red Deer", action: "rutting", bakerPage: "184", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "Tawny Owls", action: "hooting", bakerPage: "", collinsPage: "230", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [
      { name: "Sea Trout", action: null, bakerPage: "162, 168", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Salmon", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Invertebrates: [
      { name: "Ground Beetles", action: null, bakerPage: "173", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Spiders", action: null, bakerPage: "170-171, 213", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Goose Barnacles", action: null, bakerPage: "169-170", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Common Whelk", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Sea Mouse", action: null, bakerPage: "170", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "Mushrooms & Toadstools", action: null, bakerPage: "176-179", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Galls (effects of gall wasps)", action: null, bakerPage: "171-173", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Leaves Turning", action: null, bakerPage: "174-177", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Field Maple", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Oak", action: null, bakerPage: "172", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Stinkhorn", action: null, bakerPage: "177", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Beefsteak Fungus", action: null, bakerPage: "176", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Penny Bun (Cep)", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Waxcap", action: null, bakerPage: "178, 179", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "Aviemore" },
      { name: "Cannock Chase" },
      { name: "Wilmersham Common, Exmoor" },
      { name: "Richmond Park, Surrey" },
      { name: "Thetford Forest Park" },
      { name: "Woburn Park" },
      { name: "Glen Creran, Argyll" },
      { name: "Cambus o' May, Kincardineshire" },
      { name: "Epping Forest" },
      { name: "New Forest" },
      { name: "Westonbirt Arboretum, Gloucestershire" },
      { name: "Forest of Dean" },
      { name: "Tollymore Forest Park, County Down" }
    ]
  },

  /* ---------------------------------------------------------------- NOVEMBER */
  November: {
    Mammals: [
      { name: "Squirrels", action: null, bakerPage: "181, 182, 189", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Brown Hares", action: null, bakerPage: "7, 49, 182", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Mountain Hares", action: null, bakerPage: "182-183", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "Long-tailed Tits", action: null, bakerPage: "51, 172", collinsPage: "346", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Knot", action: null, bakerPage: "21, 187", collinsPage: "152", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Dunlin", action: null, bakerPage: "", collinsPage: "150", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Rookeries", action: null, bakerPage: "", collinsPage: "366", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Woodpecker Nest Holes", action: null, bakerPage: "", collinsPage: "244", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Fieldfares", action: null, bakerPage: "", collinsPage: "298", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Redwings", action: null, bakerPage: "", collinsPage: "298", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Goldfinch", action: null, bakerPage: "191", collinsPage: "380", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Starling", action: "murmurations", bakerPage: "191-193", collinsPage: "370", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [
      { name: "Salmon", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Invertebrates: [
      { name: "Hibernating Ladybirds", action: null, bakerPage: "197", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Moth Pupae", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Red Admiral", action: null, bakerPage: "198", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "Rusty-back Fern", action: null, bakerPage: "199", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Hart's Tongue Fern", action: null, bakerPage: "199", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "Glasgow City Centre" },
      { name: "Forth Bridge" },
      { name: "Huddersfield Station" },
      { name: "Poole Harbour" },
      { name: "Slapton Ley NNR" },
      { name: "Aberystwyth Pier" },
      { name: "Leighton Moss" }
    ]
  },

  /* ---------------------------------------------------------------- DECEMBER */
  December: {
    Mammals: [
      { name: "Yellow-necked Mouse", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Fox", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Bank Vole", action: null, bakerPage: "15, 16, 202, 203", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Birds: [
      { name: "Buntings", action: null, bakerPage: "", collinsPage: "392", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Yellowhammer", action: null, bakerPage: "", collinsPage: "398", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Redwing", action: null, bakerPage: "", collinsPage: "298", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Fieldfare", action: null, bakerPage: "", collinsPage: "298", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Treecreeper", action: null, bakerPage: "207", collinsPage: "350", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Curlew", action: null, bakerPage: "", collinsPage: "158", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Redshank", action: null, bakerPage: "", collinsPage: "156", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Grey Plover", action: null, bakerPage: "", collinsPage: "142", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Eider", action: null, bakerPage: "", collinsPage: "36", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Shelduck", action: null, bakerPage: "", collinsPage: "22", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    AmphibiansReptilesFish: [],
    Invertebrates: [
      { name: "Lugworm", action: null, bakerPage: "137, 210", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Tortoiseshell Butterfly", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Peacock Butterfly", action: null, bakerPage: "43, 56", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Queen Wasp", action: "hibernating", bakerPage: "213", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Centipede", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" },
      { name: "Dragonfly Nymph", action: null, bakerPage: "", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    Plants: [
      { name: "Fungi & Lichen", action: null, bakerPage: "30, 178-179, 215", collinsPage: "", referenceUrl: "", medicalUses: "", culinaryUses: "", folklore: "" }
    ],
    TopPlaces: [
      { name: "Ballyronan Marina, Lough Neagh" },
      { name: "Chew Valley Lakes" },
      { name: "Staines Reservoir, Surrey" },
      { name: "Abberton Reservoir, Colchester" },
      { name: "Grafham Water, Cambridgeshire" },
      { name: "Fairburn Ings, West Yorkshire" },
      { name: "The Mere, Ellesmere, Shropshire" }
    ]
  }
};
