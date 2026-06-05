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
      {
        name: "Brown Hare",
        action: "boxing",
        bakerPage: "7, 49, 182",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/brown-hare/",
        medicalUses: "",
        culinaryUses: "",
        folklore: "The 'mad March hare' — the spring boxing is usually a female fending off an over-eager male, not two males fighting. Long linked to the moon and to fertility."
      }
    ],
    Birds: [
      {
        name: "Wheatear",
        action: "arriving",
        bakerPage: "",
        collinsPage: "282",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/wheatear",
        medicalUses: "",
        culinaryUses: "",
        folklore: "One of the earliest spring migrants, fresh in from Africa; the name is a polite reworking of an older term for its white rump."
      },
      {
        name: "Woodpeckers",
        action: "drumming",
        bakerPage: "",
        collinsPage: "244",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/great-spotted-woodpecker",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Great spotted woodpeckers drum hardest in March to mark territory; the rapid burst can sound out across a whole wood."
      },
      {
        name: "Robin",
        action: "singing",
        bakerPage: "",
        collinsPage: "276",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/robin",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Sings year-round but ramps up in early spring as pairs form; a fixture of British folklore and the nation's unofficial favourite bird."
      },
      {
        name: "Buzzards",
        action: "displaying",
        bakerPage: "",
        collinsPage: "106",
        referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/buzzard",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Now the UK's commonest bird of prey; pairs perform rolling, tumbling display flights over their territory on fine spring days."
      }
    ],
    AmphibiansReptilesFish: [
      {
        name: "Toads",
        action: "mating",
        bakerPage: "27, 53",
        collinsPage: "",
        referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-toad/",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Common toads migrate en masse back to ancestral breeding ponds on mild, damp March nights — the origin of road 'toad patrols'."
      },
      {
        name: "Tadpoles",
        action: null,
        bakerPage: "54",
        collinsPage: "",
        referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-frog/",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Frogspawn laid in late winter hatches into tadpoles through March; the first sign of a pond waking up for the year."
      },
      {
        name: "Newts",
        action: "returning to ponds",
        bakerPage: "27, 54",
        collinsPage: "",
        referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/great-crested-newt/",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Newts head back to water to breed in spring; the great crested newt is strictly protected by law in the UK."
      }
    ],
    Invertebrates: [
      {
        name: "Marsh Fritillary Caterpillars",
        action: null,
        bakerPage: "56, 57",
        collinsPage: "",
        referenceUrl: "https://butterfly-conservation.org/butterflies/marsh-fritillary",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Spiky black caterpillars bask communally in early spring sun to warm up; the species is a threatened priority for conservation."
      },
      {
        name: "Buff-tailed Bumblebee",
        action: "queens emerging",
        bakerPage: "57, 58",
        collinsPage: "",
        referenceUrl: "https://www.bumblebeeconservation.org/bumblebee-species/buff-tailed-bumblebee/",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Big queens are among the first bumblebees seen, droning low over the ground in March as they hunt for nest sites."
      },
      {
        name: "Comma Butterfly",
        action: "emerging from hibernation",
        bakerPage: "57, 58, 197",
        collinsPage: "",
        referenceUrl: "https://butterfly-conservation.org/butterflies/comma",
        medicalUses: "",
        culinaryUses: "",
        folklore: "Named for the tiny white comma mark under the wing; the ragged wing edges mimic a dead leaf when it hibernates."
      },
      {
        name: "Dog Whelk",
        action: null,
        bakerPage: "57, 59",
        collinsPage: "",
        referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/sea-snails/dog-whelk",
        medicalUses: "",
        culinaryUses: "",
        folklore: "A predatory shore snail that drills holes in barnacles and mussels; historically a source of purple dye."
      }
    ],
    Plants: [
      {
        name: "Primroses",
        action: "flowering",
        bakerPage: "9, 60, 62-63, 77, 79",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/primrose/",
        medicalUses: "Traditionally used in herbal remedies, but not recommended for self-medication.",
        culinaryUses: "The flowers and leaves are often described as edible in wild-food guides; however, handling can cause allergic skin reactions in some people, so treat any foraging information with caution and seek expert guidance.",
        folklore: "The name comes from the Latin prima rosa, 'first rose' — one of the earliest spring flowers and a long-standing emblem of youth and spring."
      },
      {
        name: "Lesser Celandine",
        action: "flowering",
        bakerPage: "60",
        collinsPage: "",
        referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/lesser-celandine",
        medicalUses: "An old country name, 'pilewort', reflects a historical folk use, but it is not a recommended remedy.",
        culinaryUses: "⚠️ Caution: a member of the buttercup family, it contains protoanemonin and is toxic if eaten raw, causing mouth and stomach irritation and skin blistering. Some foragers eat the early leaves only after thorough cooking, which breaks down the toxin — but given the risk this is best avoided without expert instruction.",
        folklore: "Its glossy yellow stars open in early March; Wordsworth loved it so much it was carved on his tomb."
      },
      {
        name: "Daffodils",
        action: "flowering",
        bakerPage: "",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wild-daffodil/",
        medicalUses: "The wild daffodil contains alkaloids studied medically (galantamine is derived from related Narcissus species), but the plant itself is toxic and not for home use.",
        culinaryUses: "⚠️ Not edible — all parts of the daffodil are poisonous if eaten, causing vomiting and stomach pain; the bulbs are sometimes mistaken for onions, which can cause serious poisoning.",
        folklore: "The native wild daffodil (the 'Lent lily') flowers around Lent; Wordsworth's 'host of golden daffodils' were the wild kind on the shores of Ullswater."
      },
      {
        name: "Lords and Ladies",
        action: null,
        bakerPage: "64",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/lords-and-ladies/",
        medicalUses: "No safe home use — the plant is an irritant and was historically handled only with great care.",
        culinaryUses: "⚠️ Poisonous — all parts contain calcium oxalate crystals that severely irritate the mouth and throat; it is one of the commonest causes of plant-poisoning hospital visits in the UK. Do not eat. The bright berries are especially dangerous to children.",
        folklore: "Also called cuckoo pint or wake-robin; the spike of the flower generates its own heat to attract the small flies that pollinate it."
      },
      {
        name: "Wood Anemone",
        action: "flowering",
        bakerPage: "65, 79",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/wood-anemone/",
        medicalUses: "Despite historical folk uses, it is too toxic for any home remedy.",
        culinaryUses: "⚠️ Poisonous — like its buttercup-family relatives it contains protoanemonin, which irritates the skin and gut. Not edible.",
        folklore: "Named after Anemos, the Greek wind god, giving it the alternative name 'windflower'; a slow-spreading indicator of ancient woodland."
      },
      {
        name: "Sallow Catkins",
        action: "in catkin",
        bakerPage: "56-57, 125, 197",
        collinsPage: "",
        referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/goat-willow/",
        medicalUses: "Willow bark is the historical source of salicin, the natural compound behind aspirin — though this is a documented property of willows generally, not a recommendation to self-treat.",
        culinaryUses: "Not a food plant.",
        folklore: "The fluffy silver-then-gold catkins of sallow (goat willow) are the 'pussy willow' traditionally gathered for Palm Sunday; a vital early nectar source for bees."
      }
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
      { name: "Badgers in Bluebells", action: "foraging", bakerPage: "67-68", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/badger/", medicalUses: "", culinaryUses: "", folklore: "Spring badgers leave their setts at dusk to forage in bluebell woods; cubs born in late winter begin venturing out around now." },
      { name: "Wood Mouse", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/wood-mouse", medicalUses: "", culinaryUses: "", folklore: "Britain's most abundant wild mammal, active mainly by night; it caches seeds and can shed its tail-tip to escape predators." }
    ],
    Birds: [
      { name: "Cuckoos", action: "arriving", bakerPage: "", collinsPage: "220", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/cuckoo", medicalUses: "", culinaryUses: "", folklore: "The cuckoo's two-note call is one of the classic sounds of spring; it lays its eggs in other birds' nests, a trick woven through European folklore." },
      { name: "Skylark", action: "singing", bakerPage: "", collinsPage: "248", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/skylark", medicalUses: "", culinaryUses: "", folklore: "Famous for its sustained song delivered high in a hovering display flight; celebrated by Shelley and Vaughan Williams alike." },
      { name: "Starling", action: null, bakerPage: "", collinsPage: "370", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/starling", medicalUses: "", culinaryUses: "", folklore: "A superb mimic; spring birds show an iridescent oil-on-water sheen. Huge winter murmurations are one of Britain's great wildlife spectacles." },
      { name: "Blue Tit", action: null, bakerPage: "25", collinsPage: "342", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/blue-tit", medicalUses: "", culinaryUses: "", folklore: "A familiar, acrobatic garden bird; once known for pecking through milk-bottle foil to reach the cream." },
      { name: "Tree Pipit", action: null, bakerPage: "", collinsPage: "266", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/tree-pipit", medicalUses: "", culinaryUses: "", folklore: "A summer migrant that sings on a parachuting display flight, drifting down to a perch with a long descending trill." }
    ],
    AmphibiansReptilesFish: [
      { name: "Grass Snakes", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/grass-snake/", medicalUses: "", culinaryUses: "", folklore: "Britain's largest snake and a strong swimmer; harmless to people, it may play dead or release a pungent smell when handled." },
      { name: "Common Lizards", action: null, bakerPage: "121, 136", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-lizard/", medicalUses: "", culinaryUses: "", folklore: "Our most widespread reptile; it basks to warm up in spring and, unusually for a lizard, gives birth to live young." },
      { name: "Slow Worms", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/slow-worm/", medicalUses: "", culinaryUses: "", folklore: "A legless lizard, not a snake or worm; a gardener's friend that eats slugs, and can live for decades." }
    ],
    Invertebrates: [
      { name: "Orange-tip Butterfly", action: "emerging", bakerPage: "75, 79", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/orange-tip", medicalUses: "", culinaryUses: "", folklore: "One of the first true spring butterflies; the male's bright orange wingtips are a classic April sight along hedgerows and damp meadows." },
      { name: "Speckled Wood", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/speckled-wood", medicalUses: "", culinaryUses: "", folklore: "A dappled brown butterfly of woodland edges and glades; males defend sunlit patches with spiralling aerial chases." },
      { name: "Bloody-nosed Beetle", action: null, bakerPage: "75", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/bloody-nosed-beetle", medicalUses: "", culinaryUses: "", folklore: "A slow, flightless beetle named for its alarming defence: when threatened it exudes a drop of bright red, foul-tasting blood from its mouth." }
    ],
    Plants: [
      { name: "Cowslip", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/cowslip/", medicalUses: "Traditionally used in herbal remedies, but not recommended for self-medication.", culinaryUses: "The flowers are sometimes used to flavour country wines and the young leaves were historically eaten; forage only with confident identification and from healthy, lawful populations.", folklore: "Nodding clusters of deep-yellow flowers in old meadows; its country names and use in May Day garlands run deep in British folklore. Now recovering after decades of decline." },
      { name: "St George's Mushroom", action: "appearing", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/fungi-and-lichens/st-georges-mushroom/", medicalUses: "", culinaryUses: "⚠️ A prized spring edible to those who know it, but it has poisonous lookalikes (including the deadly fool's funnel and some Inocybe species). Never eat any wild fungus without expert, in-person identification.", folklore: "Named because it traditionally appears around St George's Day (23 April); a mealy-smelling white mushroom of grassland and hedgerows." },
      { name: "Bluebells", action: "flowering", bakerPage: "66, 77-78", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/bluebell/", medicalUses: "Studied medically (it contains compounds of scientific interest) but the plant is toxic and not for home use.", culinaryUses: "⚠️ Poisonous — all parts of the bluebell contain glycosides that are toxic if eaten. Not edible.", folklore: "Britain holds much of the world's bluebells; their haze through April–May woods is iconic. Folklore tied them to fairies, and the sticky sap was once used to bind books and fletch arrows." }
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
      { name: "Hedgehogs", action: "courting", bakerPage: "81, 98, 212", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/hedgehog", medicalUses: "", culinaryUses: "", folklore: "Spring courtship involves the male circling the female for hours. A much-loved garden visitor, now sadly in steep decline; leave gaps in fences to help them roam." }
    ],
    Birds: [
      { name: "Stone-curlew", action: "arriving", bakerPage: "", collinsPage: "136", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/stone-curlew", medicalUses: "", culinaryUses: "", folklore: "A rare, secretive bird of dry, stony ground with a large yellow eye and an eerie, wailing night-time call; a conservation success story on Breckland and Salisbury Plain." },
      { name: "Swift", action: "arriving", bakerPage: "", collinsPage: "236", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/swift", medicalUses: "", culinaryUses: "", folklore: "Just arrived from Africa, screaming parties race around rooftops on long scythe-like wings. Swifts eat, sleep and mate on the wing, landing only to nest." },
      { name: "House Martin", action: null, bakerPage: "", collinsPage: "260", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/house-martin", medicalUses: "", culinaryUses: "", folklore: "Builds neat mud cups under the eaves of houses; long held to bring luck to the home it nests on." },
      { name: "Sand Martin", action: null, bakerPage: "", collinsPage: "258", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/sand-martin", medicalUses: "", culinaryUses: "", folklore: "The smallest European hirundine; nests in colonies tunnelled into sandy riverbanks and quarry faces, and among the first summer migrants back each spring." },
      { name: "Red-throated, Black-throated & Great Northern Divers", action: "in breeding plumage", bakerPage: "", collinsPage: "60, 62", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/red-throated-diver", medicalUses: "", culinaryUses: "", folklore: "Divers (loons) moult into striking breeding plumage in spring; their wild, yodelling calls carry across northern lochs." }
    ],
    AmphibiansReptilesFish: [
      { name: "Sand Lizard", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/sand-lizard/", medicalUses: "", culinaryUses: "", folklore: "One of Britain's rarest reptiles, confined to sandy heath and dune; males turn vivid green in the breeding season. Strictly protected by law." },
      { name: "Stickleback", action: "nesting", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/freshwater/three-spined-stickleback", medicalUses: "", culinaryUses: "", folklore: "The male builds a tunnel nest, turns red-throated, and courts females with a zig-zag dance — a classic subject of animal-behaviour study." },
      { name: "Rudd", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/freshwater/rudd", medicalUses: "", culinaryUses: "", folklore: "A golden-flanked freshwater fish with red fins, often seen near the surface of still and slow waters in warmer months." }
    ],
    Invertebrates: [
      { name: "Pearl-bordered Fritillary", action: "on the wing", bakerPage: "56, 57", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/pearl-bordered-fritillary", medicalUses: "", culinaryUses: "", folklore: "An early fritillary of sunny woodland clearings, named for the row of 'pearls' along the underwing; a fast-declining species needing active coppice management." },
      { name: "Shield Bugs", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/common-green-shieldbug", medicalUses: "", culinaryUses: "", folklore: "Flat, shield-shaped bugs that emerge and breed in late spring; many release a pungent scent when disturbed, earning the family name 'stink bugs'." },
      { name: "Spiny Spider Crab", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/crabs-and-lobsters/spiny-spider-crab", medicalUses: "", culinaryUses: "", folklore: "Spider crabs migrate inshore and gather in great moulting heaps in late spring; they decorate their shells with seaweed and sponge for camouflage." }
    ],
    Plants: [
      { name: "Blossom", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/", medicalUses: "", culinaryUses: "", folklore: "Hawthorn ('may') blossom peaks now; bringing it indoors was traditionally thought unlucky, and 'ne'er cast a clout till May be out' refers to the may-blossom, not the month." },
      { name: "Umbellifers", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/cow-parsley", medicalUses: "", culinaryUses: "⚠️ Caution: this family contains both edible plants and some of Britain's most deadly (hemlock, hemlock water-dropwort). Lookalikes are easily confused with fatal consequences — never forage umbellifers without expert certainty.", folklore: "Cow parsley froths along the verges in May, once called 'Queen Anne's lace'. The flat flower-heads are a magnet for early insects." },
      { name: "Gorse", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/shrubs/gorse/", medicalUses: "", culinaryUses: "The coconut-scented flowers are sometimes used to flavour drinks and as a garnish; the rest of the plant is spiny and not eaten. Forage flowers sparingly and with care.", folklore: "'When gorse is out of blossom, kissing's out of fashion' — because some gorse is almost always in flower. A blaze of yellow and a refuge for nesting birds." },
      { name: "Common Dog-violet", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/common-dog-violet", medicalUses: "", culinaryUses: "", folklore: "The commonest wild violet; unlike the sweet violet it has little scent ('dog' here meaning plain or inferior). A vital foodplant for fritillary caterpillars." },
      { name: "Early Purple Orchid", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/early-purple-orchid/", medicalUses: "", culinaryUses: "", folklore: "An early woodland orchid of ancient woods and old meadows; Shakespeare's 'long purples'. Like all wild orchids it is protected — admire, never pick or dig." }
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
      { name: "Fox Cubs", action: "emerging", bakerPage: "15, 98, 145", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/red-fox/", medicalUses: "", culinaryUses: "", folklore: "By June fox cubs are play-fighting above ground at dusk; the fox runs through British folklore as the clever trickster Reynard." },
      { name: "Grey & Common Seal Pups", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/grey-seal", medicalUses: "", culinaryUses: "", folklore: "Common (harbour) seals pup in summer on sandbanks and can swim within hours; grey seals pup later in autumn. Britain holds a large share of the world's grey seals." }
    ],
    Birds: [
      { name: "Terns", action: null, bakerPage: "99-100", collinsPage: "200", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/common-tern", medicalUses: "", culinaryUses: "", folklore: "'Sea swallows' — buoyant, fork-tailed seabirds that plunge-dive for fish and defend their colonies fiercely. Arctic terns make the longest migration of any animal." },
      { name: "Puffins", action: "at colonies", bakerPage: "", collinsPage: "218", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/puffin", medicalUses: "", culinaryUses: "", folklore: "The clown-faced 'sea parrot' nests in clifftop burrows in summer, carrying beakfuls of sandeels; one of Britain's best-loved seabirds." },
      { name: "Auks", action: null, bakerPage: "", collinsPage: "208", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/guillemot", medicalUses: "", culinaryUses: "", folklore: "The auk family — guillemots, razorbills and puffins — packs onto sea cliffs to breed in summer, the northern hemisphere's answer to penguins." },
      { name: "Razorbills", action: "at colonies", bakerPage: "", collinsPage: "210", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/razorbill", medicalUses: "", culinaryUses: "", folklore: "A black-and-white auk with a deep, blade-like bill; it lays a single egg on a bare cliff ledge and both parents share the duties." },
      { name: "Guillemots", action: "at colonies", bakerPage: "19, 96, 105", collinsPage: "208, 210", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/guillemot", medicalUses: "", culinaryUses: "", folklore: "Guillemots breed shoulder-to-shoulder on open ledges; their pear-shaped eggs roll in a circle rather than off the cliff." },
      { name: "Skylarks", action: "singing", bakerPage: "", collinsPage: "248", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/skylark", medicalUses: "", culinaryUses: "", folklore: "Still in full song over summer meadows, pouring out their music from high in the sky." },
      { name: "Whitethroats", action: "singing", bakerPage: "", collinsPage: "302, 304", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/whitethroat", medicalUses: "", culinaryUses: "", folklore: "A scratchy-voiced warbler of scrub and hedgerow that delivers its song from a dancing display flight; an African migrant." },
      { name: "Fulmar", action: "at colonies", bakerPage: "", collinsPage: "68", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/fulmar", medicalUses: "", culinaryUses: "", folklore: "A stiff-winged, gull-like tubenose related to albatrosses; it defends its nest by spitting a foul oil and glides effortlessly along cliff updraughts." }
    ],
    AmphibiansReptilesFish: [
      { name: "Common Frog", action: "froglets emerging", bakerPage: "106-107", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-frog/", medicalUses: "", culinaryUses: "", folklore: "Tiny froglets leave the ponds in early summer, often in great numbers after rain — the culmination of the spring's spawn." },
      { name: "Cornish Sucker", action: "spawning", bakerPage: "29, 105, 106", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/fish/cornish-sucker", medicalUses: "", culinaryUses: "", folklore: "A small, jewel-coloured clingfish of rockpools, with violet spots and a sucker disc that holds it fast against the surge; it guards its eggs under stones." },
      { name: "Newts", action: null, bakerPage: "27, 54", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/great-crested-newt/", medicalUses: "", culinaryUses: "", folklore: "Smooth, palmate and great crested newts are all in the water to breed in early summer; the great crested is strictly protected." }
    ],
    Invertebrates: [
      { name: "Common Shore Crab", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/crabs-and-lobsters/common-shore-crab", medicalUses: "", culinaryUses: "", folklore: "The ubiquitous greenish crab of rockpools and the staple catch of crabbing buckets; remarkably tolerant of varied salinity and temperature." },
      { name: "Parasitic Barnacle (Sacculina carcini)", action: null, bakerPage: "108, 142", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/barnacles", medicalUses: "", culinaryUses: "", folklore: "A barnacle that lives as a parasite inside shore crabs, castrating the host and making it tend the parasite's eggs as if its own — a striking example of host manipulation." },
      { name: "Stag Beetle", action: null, bakerPage: "108-109", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/stag-beetle", medicalUses: "", culinaryUses: "", folklore: "Britain's largest land beetle; the male's huge 'antlers' are used to wrestle rivals. Larvae spend years in dead wood, so log piles help them." },
      { name: "Scorpion Fly", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/scorpion-fly", medicalUses: "", culinaryUses: "", folklore: "Harmless despite the name — the male's upturned, scorpion-like tail is only a mating clasper. It scavenges dead insects, often from spiders' webs." },
      { name: "Dingy Skipper", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/dingy-skipper", medicalUses: "", culinaryUses: "", folklore: "A small, moth-like brown butterfly of warm grassland and brownfield sites; it basks with wings spread and roosts on dead flowerheads." },
      { name: "Common Blue", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/common-blue", medicalUses: "", culinaryUses: "", folklore: "The most widespread blue butterfly; the male is bright violet-blue, the female browner. A grassland species reliant on bird's-foot trefoil." },
      { name: "Speckled Wood", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/speckled-wood", medicalUses: "", culinaryUses: "", folklore: "A shade-loving butterfly that flickers through dappled woodland light all summer, the males holding sunlit territories." }
    ],
    Plants: [
      { name: "Thrift", action: "flowering", bakerPage: "102, 104, 105, 131", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/thrift", medicalUses: "", culinaryUses: "", folklore: "Pink cushions on sea cliffs and saltmarsh; once so emblematic it featured on the old threepenny bit. Also called sea pink." },
      { name: "Greater Broomrape", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/common-broomrape", medicalUses: "", culinaryUses: "", folklore: "A ghostly, honey-brown parasitic plant with no chlorophyll of its own; it taps the roots of other plants, often gorse and broom, for all its food." },
      { name: "Common Dodder", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/common-dodder", medicalUses: "", culinaryUses: "", folklore: "A leafless parasitic plant of red threads that smother heather and gorse; folk names include 'devil's guts' and 'hellweed' for the way it strangles its host." },
      { name: "Bee Orchid", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/bee-orchid", medicalUses: "", culinaryUses: "", folklore: "Its flower mimics a female bee to lure males into pollinating it, though in Britain it usually self-pollinates. A protected wild orchid — never pick or dig." },
      { name: "Foxgloves", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/foxglove/", medicalUses: "The source of digoxin, a heart drug refined from the plant — but the raw plant is dangerously toxic and must never be used at home.", culinaryUses: "⚠️ Poisonous — every part of the foxglove is highly toxic and can stop the heart. Never eat any part. Even handling then touching the mouth is unwise.", folklore: "'Folks' glove' of the fairies; the spotted bells were said to be fairy thimbles. Bumblebees disappear inside the flowers to gather nectar." },
      { name: "Ragged Robin", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/ragged-robin", medicalUses: "", culinaryUses: "", folklore: "Tattered pink petals nod over damp meadows and marshes in early summer; a declining wetland flower and a good nectar source." },
      { name: "Elder", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/elder/", medicalUses: "Long used in folk medicine (especially for colds), but evidence is limited and raw parts are unsafe.", culinaryUses: "The creamy flowers make cordial and fritters, and the autumn berries make wine and jelly — but flowers and berries should be cooked, and the leaves, bark, stems and raw berries are toxic. Forage with care and correct identification.", folklore: "Steeped in folklore: the Elder Mother was said to guard the tree, and it was thought unlucky to cut elder without asking her leave." },
      { name: "Guelder Rose", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/shrubs/guelder-rose/", medicalUses: "", culinaryUses: "⚠️ The raw berries are mildly toxic and cause stomach upset; they have been used cooked in some traditions but are best left for the birds. Not recommended for foraging.", folklore: "A native shrub with lacy white flower-heads in June and translucent red berries in autumn, loved by birds." },
      { name: "Yellow Rattle", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/yellow-rattle", medicalUses: "", culinaryUses: "", folklore: "A meadow wildflower that is semi-parasitic on grasses, weakening them and letting other flowers flourish — so it's the 'meadow maker' used in restoration. Ripe seeds rattle in the pod." },
      { name: "Cranesbills", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/meadow-cranesbill", medicalUses: "", culinaryUses: "", folklore: "Wild geraniums named for the long beaked seed-pod that resembles a crane's bill; meadow cranesbill's deep blue is a highlight of summer verges." },
      { name: "Ox-eye Daisy", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/oxeye-daisy", medicalUses: "", culinaryUses: "", folklore: "The big white 'moon daisy' of midsummer meadows and verges; its country names and use in love-divination ('he loves me, he loves me not') are long-standing." },
      { name: "Buttercup", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/meadow-buttercup", medicalUses: "", culinaryUses: "⚠️ Caution: buttercups contain protoanemonin and are acrid and toxic when raw, irritating mouth and gut. Not edible.", folklore: "The childhood game of holding a buttercup under the chin to 'see if you like butter' works because the petals are mirror-bright and reflect yellow light." }
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
      { name: "Pipistrelle Bat", action: null, bakerPage: "117", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/common-pipistrelle", medicalUses: "", culinaryUses: "", folklore: "Britain's commonest bat, tiny enough to fit in a matchbox, hunting midges at dusk on warm July evenings; a single pipistrelle can eat thousands of insects a night." },
      { name: "Cetaceans", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/whales-and-dolphins", medicalUses: "", culinaryUses: "", folklore: "Summer brings the best chance of whales, dolphins and porpoises inshore as they follow shoals of fish; harbour porpoise and bottlenose dolphin are the most likely." }
    ],
    Birds: [
      { name: "Tawny Owls", action: null, bakerPage: "", collinsPage: "230", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/tawny-owl", medicalUses: "", culinaryUses: "", folklore: "The classic 'twit-twoo' is actually a duet — the female's 'ke-wick' answered by the male's hoot. Young owls are learning to hunt by midsummer." },
      { name: "Buzzard", action: null, bakerPage: "", collinsPage: "106, 108, 109", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/buzzard", medicalUses: "", culinaryUses: "", folklore: "Now Britain's commonest bird of prey; in summer it soars over farmland on broad wings with a far-carrying, cat-like mewing call." },
      { name: "Kestrel", action: "hunting", bakerPage: "", collinsPage: "116", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/kestrel", medicalUses: "", culinaryUses: "", folklore: "The 'windhover', famous for hanging motionless on beating wings above roadside verges as it watches for voles; it can see ultraviolet vole trails." },
      { name: "Sparrowhawk", action: null, bakerPage: "", collinsPage: "112", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/sparrowhawk", medicalUses: "", culinaryUses: "", folklore: "A dashing woodland hawk that hunts small birds in low, fast surprise attacks along hedges and through gardens." },
      { name: "Dartford Warbler", action: null, bakerPage: "", collinsPage: "312", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/dartford-warbler", medicalUses: "", culinaryUses: "", folklore: "A small, dark, long-tailed warbler of southern heaths, tied closely to gorse; nearly wiped out by hard winters, it has recovered with warmer years." },
      { name: "Stonechat", action: null, bakerPage: "", collinsPage: "292", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/stonechat", medicalUses: "", culinaryUses: "", folklore: "A robin-shaped bird of heath and rough ground; its call sounds like two pebbles knocked together, hence the name. Often perches conspicuously on gorse tips." },
      { name: "Whinchat", action: null, bakerPage: "", collinsPage: "292", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/whinchat", medicalUses: "", culinaryUses: "", folklore: "A summer migrant of rough grassland, similar to the stonechat but with a pale eye-stripe; 'whin' is an old word for gorse." },
      { name: "Yellowhammer", action: "singing", bakerPage: "", collinsPage: "398", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/yellowhammer", medicalUses: "", culinaryUses: "", folklore: "The bright yellow bunting whose song is rendered 'a little bit of bread and no cheeeese'; a farmland bird now much reduced." }
    ],
    AmphibiansReptilesFish: [
      { name: "Adder", action: "basking", bakerPage: "", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/adder/", medicalUses: "", culinaryUses: "", folklore: "Britain's only venomous snake, identified by the dark zigzag along its back; shy and rarely a danger, it basks on warm heath and is best left undisturbed." },
      { name: "Common Lizard", action: "basking", bakerPage: "121, 136", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-lizard/", medicalUses: "", culinaryUses: "", folklore: "Our most widespread reptile, often seen basking on warm paths and logs in high summer; the young of the year start to appear now." },
      { name: "Grass Snakes", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/grass-snake/", medicalUses: "", culinaryUses: "", folklore: "Females seek out compost heaps and rotting vegetation to lay eggs in mid-summer, using the heat to incubate them; harmless and a fine swimmer." }
    ],
    Invertebrates: [
      { name: "Honey Bee", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/honey-bee", medicalUses: "", culinaryUses: "", folklore: "Summer hives are at full strength; the famous 'waggle dance' tells nestmates the direction and distance of good flowers. New queens may lead off swarms now." },
      { name: "Bumblebee", action: null, bakerPage: "57, 58", collinsPage: "", referenceUrl: "https://www.bumblebeeconservation.org/bumblebee-species/buff-tailed-bumblebee/", medicalUses: "", culinaryUses: "", folklore: "Bumblebee colonies peak in mid-summer; buzz-pollination, where the bee vibrates flowers to shake out pollen, makes them vital pollinators." },
      { name: "Solitary Bees & Wasps", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/solitary-bees", medicalUses: "", culinaryUses: "", folklore: "Most of Britain's bees are solitary, nesting in burrows, hollow stems and bee hotels rather than hives; gentle and superb pollinators." },
      { name: "Purple Emperor", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/purple-emperor", medicalUses: "", culinaryUses: "", folklore: "A large, elusive woodland butterfly; the male's wings flash iridescent purple. Famously, this regal insect comes down from the canopy to feed on dung and carrion." },
      { name: "Purple Hairstreak", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/purple-hairstreak", medicalUses: "", culinaryUses: "", folklore: "A small butterfly that spends most of its life high in oak canopies, sipping honeydew; easily overlooked unless you scan the treetops at dusk." },
      { name: "White Admiral", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/white-admiral", medicalUses: "", culinaryUses: "", folklore: "An elegant black-and-white woodland butterfly that glides through shady rides; its caterpillars feed on honeysuckle." }
    ],
    Plants: [
      { name: "Bog Asphodel", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/bog-asphodel", medicalUses: "", culinaryUses: "", folklore: "Spikes of starry yellow flowers light up wet bogs and heaths in summer; its old Latin name means 'bone-breaker', from a belief it caused brittle bones in grazing sheep (really a calcium-poor diet)." },
      { name: "Sphagnum Moss", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/sphagnum-mosses", medicalUses: "Famous for its absorbency and mild antiseptic quality, it was used as wound dressing in WWI — of historical interest, not a home remedy.", culinaryUses: "", folklore: "The bog-builder: sphagnum holds many times its weight in water and forms peat over millennia, locking up vast amounts of carbon." },
      { name: "Cotton Grass", action: "in seed", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/common-cottongrass", medicalUses: "", culinaryUses: "", folklore: "Not a grass but a sedge; its white cottony seed-heads drift across blanket bog in summer. The fluff was once used to stuff pillows and dress wounds." },
      { name: "Gorse", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/shrubs/gorse/", medicalUses: "", culinaryUses: "The coconut-scented flowers can be used to flavour drinks and as a garnish; the rest of the spiny plant is not eaten. Forage flowers sparingly.", folklore: "Still flowering through summer; its near year-round bloom gave rise to the saying that kissing is never out of fashion." }
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
      { name: "Cetaceans", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/whales-and-dolphins", medicalUses: "", culinaryUses: "", folklore: "Late summer is prime time for sea-watching as whales, dolphins and porpoises follow fish shoals close inshore off western and northern coasts." },
      { name: "Basking Shark", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/fish/basking-shark", medicalUses: "", culinaryUses: "", folklore: "The world's second-largest fish, harmless and plankton-feeding, cruises British waters in summer with its cavernous mouth agape; best seen off the west coast and Hebrides." },
      { name: "Dolphins", action: null, bakerPage: "103, 117, 132, 133", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/bottlenose-dolphin", medicalUses: "", culinaryUses: "", folklore: "Bottlenose and common dolphins are seen year-round but often well in summer; resident pods live in the Moray Firth and Cardigan Bay." },
      { name: "Porpoises", action: null, bakerPage: "132", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/harbour-porpoise", medicalUses: "", culinaryUses: "", folklore: "The harbour porpoise is Britain's smallest and commonest cetacean — small, dark and undemonstrative, it surfaces with a brief puffing roll." }
    ],
    Birds: [
      { name: "Sandwich Terns", action: null, bakerPage: "99-100", collinsPage: "198", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/sandwich-tern", medicalUses: "", culinaryUses: "", folklore: "The largest common British tern, named after the Kent town; its shaggy black crest and grating call mark out late-summer flocks gathering before migration." },
      { name: "Oystercatchers", action: null, bakerPage: "", collinsPage: "134", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/oystercatcher", medicalUses: "", culinaryUses: "", folklore: "Boldly pied waders with long orange bills, noisy and conspicuous on estuaries; despite the name they mostly eat cockles and mussels." },
      { name: "Ringed Plover", action: null, bakerPage: "", collinsPage: "138", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/ringed-plover", medicalUses: "", culinaryUses: "", folklore: "A small, neat shore wader that runs and pauses on sand and shingle; it lures predators from the nest with a broken-wing display." },
      { name: "Sanderling", action: null, bakerPage: "", collinsPage: "148", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/sanderling", medicalUses: "", culinaryUses: "", folklore: "The clockwork wader that chases the waves back and forth along the tideline; Arctic breeders pass through and winter on British beaches." }
    ],
    AmphibiansReptilesFish: [
      { name: "Adders", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/adder/", medicalUses: "", culinaryUses: "", folklore: "Young adders are born in late summer, miniature replicas of the adults complete with the zigzag pattern; the species is shy and protected." },
      { name: "Slow Worms", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/slow-worm/", medicalUses: "", culinaryUses: "", folklore: "Females give birth to live young in late summer; these legless lizards bask in compost heaps and are great allies against slugs." },
      { name: "Sand Lizard", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/sand-lizard/", medicalUses: "", culinaryUses: "", folklore: "Eggs laid in warm sand hatch in late summer; one of Britain's rarest reptiles and strictly protected, found on heath and dune." },
      { name: "Common Lizard", action: null, bakerPage: "121, 136", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/common-lizard/", medicalUses: "", culinaryUses: "", folklore: "Young of the year are widespread now, basking on logs and paths; our most common and widespread reptile." },
      { name: "Smooth Snake", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/smooth-snake/", medicalUses: "", culinaryUses: "", folklore: "Britain's rarest snake, confined to southern heaths; non-venomous, it kills prey by constriction and is strictly protected by law." }
    ],
    Invertebrates: [
      { name: "Lugworms", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/lugworm", medicalUses: "", culinaryUses: "", folklore: "The maker of the familiar squiggly casts on the beach; it lives in a U-shaped burrow and is a mainstay of both wading birds' diets and sea anglers' bait." },
      { name: "Ragworms", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/ragworm", medicalUses: "", culinaryUses: "", folklore: "An iridescent, many-legged marine worm of muddy shores; a fierce little predator with pincer jaws and a favourite angling bait." },
      { name: "Thin Tellin (Angulus tenuis)", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/thin-tellin", medicalUses: "", culinaryUses: "", folklore: "A small, fragile, often pink bivalve of sandy beaches; its delicate shells, fanned open like a butterfly, are common strandline finds." },
      { name: "Common Cockle", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/common-cockle", medicalUses: "", culinaryUses: "A traditional and edible shellfish gathered from sandy estuaries, but cockles filter-feed and can concentrate pollutants and toxins — only eat those from monitored, lawful fisheries, well cooked.", folklore: "The ribbed cockle of 'cockles and mussels'; it lives just under the sand and digs with a muscular foot. Vast cockle beds feed huge flocks of waders." },
      { name: "Common Shrimp", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/brown-shrimp", medicalUses: "", culinaryUses: "The brown shrimp of potted-shrimp fame is edible and traditionally netted in the shallows; gather only lawfully and cook thoroughly.", folklore: "A sand-coloured shrimp that buries itself by day; netting them in the shallows is an old seaside tradition on flats like Morecambe Bay." },
      { name: "Ghost Shrimp", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/shrimps", medicalUses: "", culinaryUses: "", folklore: "A pale, almost translucent burrowing crustacean of sand and mud flats, rarely seen above the surface of its deep burrows." }
    ],
    Plants: [
      { name: "Sea Holly", action: "flowering", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/sea-holly", medicalUses: "The candied roots ('eringoes') were sold as a sweetmeat and reputed tonic in past centuries — of historical interest only.", culinaryUses: "Historically the roots were candied, but this is a declining coastal plant — admire it, don't dig it.", folklore: "A spiny, blue-tinged thistle-like plant of sand dunes, beautifully architectural; its candied roots were once a fashionable Elizabethan sweet." },
      { name: "Thrift", action: null, bakerPage: "102, 104, 105, 131", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/thrift", medicalUses: "", culinaryUses: "", folklore: "Still flowering on cliffs and saltmarsh into late summer; the resilient sea pink that once graced the threepenny bit." }
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
      { name: "Grey Squirrel", action: "caching", bakerPage: "16-17", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/grey-squirrel/", medicalUses: "", culinaryUses: "", folklore: "Autumn is caching season: squirrels bury nuts and acorns in scattered hoards, finding them later by memory and smell — and the ones they forget help plant new trees." },
      { name: "Shrew", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/common-shrew", medicalUses: "", culinaryUses: "", folklore: "Tiny, frantic and ferocious, shrews must eat almost constantly to survive; folklore once wrongly blamed them for harming livestock, hence 'shrewd' and 'shrew'." }
    ],
    Birds: [
      { name: "House Martins", action: "gathering", bakerPage: "", collinsPage: "260", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/house-martin", medicalUses: "", culinaryUses: "", folklore: "Martins gather in chattering lines on wires in September, fuelling up before the long flight back to Africa." },
      { name: "Bluethroat", action: null, bakerPage: "", collinsPage: "278", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/bluethroat", medicalUses: "", culinaryUses: "", folklore: "A scarce but jewel-like migrant, like a robin with a vivid blue throat; most British sightings are of passage birds on the east coast in autumn." },
      { name: "Chaffinch", action: null, bakerPage: "", collinsPage: "376", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/chaffinch", medicalUses: "", culinaryUses: "", folklore: "One of Britain's most numerous birds; its Latin name coelebs ('bachelor') reflects an old observation that wintering flocks often split by sex." }
    ],
    AmphibiansReptilesFish: [
      { name: "Newts", action: "leaving ponds", bakerPage: "27, 54", collinsPage: "", referenceUrl: "https://www.froglife.org/info-advice/amphibians-and-reptiles/great-crested-newt/", medicalUses: "", culinaryUses: "", folklore: "Newts leave the water in late summer to live on land through autumn and winter, sheltering under logs and stones; the great crested newt is protected." }
    ],
    Invertebrates: [
      { name: "Grasshoppers", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/common-green-grasshopper", medicalUses: "", culinaryUses: "", folklore: "Late summer is loud with grasshopper song ('stridulation'), made by rubbing legs against wings; each species has its own distinctive rhythm." },
      { name: "Crickets", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/dark-bush-cricket", medicalUses: "", culinaryUses: "", folklore: "Unlike grasshoppers, crickets sing by rubbing their wings together and have very long antennae; many are most vocal in late summer and at dusk." },
      { name: "Oak Bush-cricket", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/oak-bush-cricket", medicalUses: "", culinaryUses: "", folklore: "A delicate green cricket of trees and gardens; the male 'sings' silently to us by drumming a foot on a leaf, and it is often drawn to lighted windows." },
      { name: "Harvestmen", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/harvestman", medicalUses: "", culinaryUses: "", folklore: "Long-legged relatives of spiders that lack venom and silk; abundant at harvest time, hence the name. The legs can detach and twitch to distract predators." },
      { name: "Craneflies", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/cranefly", medicalUses: "", culinaryUses: "", folklore: "The 'daddy-long-legs' emerges in late-summer swarms; harmless to people, the larvae ('leatherjackets') live in the soil and feed lawns to autumn birds." },
      { name: "Pale Tussock Moth Caterpillar", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/moths/pale-tussock", medicalUses: "", culinaryUses: "", folklore: "A spectacular yellow-green caterpillar with tufts of hair and a red tail-brush, conspicuous in autumn; the hairs can irritate skin, so look but don't handle." },
      { name: "Minotaur Beetle", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/minotaur-beetle", medicalUses: "", culinaryUses: "", folklore: "A glossy black dung beetle; the male bears three forward-pointing horns like the mythical Minotaur, used in tussles at the burrow entrance." },
      { name: "Common Dor Beetle", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/dor-beetle", medicalUses: "", culinaryUses: "", folklore: "A burrowing dung beetle with a metallic blue-violet underside; it buries dung as food for its larvae, recycling nutrients and often carrying tiny mites." },
      { name: "Brown Hairstreak", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/brown-hairstreak", medicalUses: "", culinaryUses: "", folklore: "One of the last butterflies on the wing, flying into early autumn; it lays white eggs on blackthorn that are easier to find in winter than the elusive adult." },
      { name: "Convolvulus Hawk-moth", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/moths/convolvulus-hawk-moth", medicalUses: "", culinaryUses: "", folklore: "A huge migrant moth that arrives in late summer; with a tongue longer than its body it hovers like a hummingbird to drink from tubular flowers at dusk." }
    ],
    Plants: [
      { name: "White Bryony", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/white-bryony", medicalUses: "", culinaryUses: "⚠️ Poisonous — every part, especially the red berries and the large root, is toxic and a serious risk to children. Not edible.", folklore: "Britain's only native member of the cucumber family; it scrambles over hedges with spiralling tendrils and its huge root gave rise to fake 'mandrake' charms." },
      { name: "Woody Nightshade (Bittersweet)", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/bittersweet", medicalUses: "Historically used in herbalism, but it is toxic and not safe for home use.", culinaryUses: "⚠️ Poisonous — the bright red berries and other parts contain toxic alkaloids and are dangerous, particularly to children. Not edible.", folklore: "A relative of the potato and deadly nightshade, with purple-and-yellow flowers and dangling red berries in hedges; 'bittersweet' from the taste of the stem." },
      { name: "Rosehip", action: "fruiting", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/dog-rose/", medicalUses: "Exceptionally rich in vitamin C; rosehip syrup was famously distributed to children in wartime Britain.", culinaryUses: "The hips make syrup, jelly and tea and are a classic autumn forage — but the seeds' irritant hairs must be strained out, so always cook and sieve properly.", folklore: "The fruit of the dog rose; gathering hips for syrup is a long British tradition, and the irritant seed-hairs were the original 'itching powder'." },
      { name: "Rowan", action: "fruiting", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/rowan/", medicalUses: "", culinaryUses: "The berries are too bitter and mildly irritant to eat raw, but cooked into jelly (traditionally with crab apple) they make a classic accompaniment to game. Cook before eating.", folklore: "The 'mountain ash' was the great protective tree of British folklore, planted by doors and made into charms to ward off witchcraft." },
      { name: "Blackberries", action: "fruiting", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/wild-flowers/bramble/", medicalUses: "", culinaryUses: "One of the safest and best-loved wild foods, easily identified and delicious raw or cooked. Tradition says not to pick after Michaelmas (early October), when the devil is said to spoil them — really just when autumn damp brings mould.", folklore: "Blackberrying is perhaps Britain's most universal foraging custom; the bramble's arching, rooting stems form dense, wildlife-rich thickets." },
      { name: "Hops", action: "fruiting", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/hop", medicalUses: "Traditionally used as a sleep aid (hop pillows) and a mild sedative in herbalism.", culinaryUses: "The papery cones flavour and preserve beer; young spring shoots are also eaten like asparagus in some traditions. Forage with confident identification.", folklore: "A climbing hedgerow plant central to British brewing; Kentish hop-picking was once a working holiday for whole East End families." }
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
      { name: "Red Deer", action: "rutting", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/red-deer", medicalUses: "", culinaryUses: "", folklore: "Autumn brings the rut: stags roar, wallow in mud and clash antlers for control of the hinds. Britain's largest land mammal, and one of its most dramatic wildlife spectacles." }
    ],
    Birds: [
      { name: "Tawny Owls", action: "calling", bakerPage: "", collinsPage: "230", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/tawny-owl", medicalUses: "", culinaryUses: "", folklore: "Autumn nights ring with tawny owl calls as young birds disperse and adults defend territories for winter; the 'twit-twoo' is a male and female calling to each other." }
    ],
    AmphibiansReptilesFish: [
      { name: "Sea Trout", action: "running", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/freshwater/trout", medicalUses: "", culinaryUses: "", folklore: "Sea trout (migratory brown trout) run up rivers to spawn in autumn, leaping weirs and falls on the way to the gravel beds where they hatched." },
      { name: "Salmon", action: "running", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/freshwater/atlantic-salmon", medicalUses: "", culinaryUses: "", folklore: "Atlantic salmon return from the sea to spawn in the very rivers of their birth, hurling themselves up waterfalls — one of nature's great feats of navigation and endurance." }
    ],
    Invertebrates: [
      { name: "Ground Beetles", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/violet-ground-beetle", medicalUses: "", culinaryUses: "", folklore: "Fast, glossy nocturnal hunters that shelter under logs and stones by day; the violet ground beetle has a beautiful purple sheen to its margins, and all are great pest-controllers." },
      { name: "Spiders", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/garden-spider", medicalUses: "", culinaryUses: "", folklore: "Autumn is 'spider season': garden orb-weavers reach full size and spangle hedges with dewy webs, while males of the house spider roam indoors seeking mates." },
      { name: "Goose Barnacles", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/goose-barnacle", medicalUses: "", culinaryUses: "", folklore: "Stalked barnacles that raft in on driftwood after storms; medieval people, never seeing the birds nest, believed barnacle geese hatched from them — hence both names." },
      { name: "Common Whelk", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/common-whelk", medicalUses: "", culinaryUses: "An edible sea snail traditionally sold at the seaside; only eat whelks from monitored, lawful fisheries and cook them well.", folklore: "The largest British sea snail; its empty shells are favourite homes for hermit crabs, and its papery egg-mass clumps were once used as washballs ('sea wash balls')." },
      { name: "Sea Mouse", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/sea-mouse", medicalUses: "", culinaryUses: "", folklore: "Not a mouse but a stout marine bristleworm, washed up after storms; its hairy coat shimmers iridescent green, blue and gold — a remarkable natural optical effect." }
    ],
    Plants: [
      { name: "Mushrooms & Toadstools", action: "fruiting", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/fungi-and-lichens/", medicalUses: "", culinaryUses: "⚠️ Autumn is peak fungus season, but many wild mushrooms are poisonous and some are deadly, with edible species having dangerous lookalikes. Never eat any wild fungus without expert, in-person identification.", folklore: "The visible mushroom is just the fruit of a vast underground network; folklore filled the autumn woods with 'fairy rings' and pixie seats." },
      { name: "Gall Wasps", action: "galls visible", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/invertebrates/gall-wasps/", medicalUses: "Oak galls were a key ingredient of iron-gall ink for centuries — of historical interest.", culinaryUses: "", folklore: "Tiny wasps make oaks grow strange swellings — marble galls, oak apples, knopper galls — as nurseries for their grubs. Oak-gall ink wrote much of British history." },
      { name: "Leaves Turning", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/trees-woods-and-wildlife/", medicalUses: "", culinaryUses: "", folklore: "As days shorten, trees withdraw green chlorophyll and unmask the yellows and reds beneath before leaf-fall; a warm, sunny autumn gives the brightest colour." },
      { name: "Field Maple", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/field-maple/", medicalUses: "", culinaryUses: "", folklore: "Britain's only native maple, turning rich butter-yellow in autumn; a traditional hedgerow tree whose fine wood was prized for carving and turnery." },
      { name: "Oak", action: "acorns falling", bakerPage: "125, 175, 186", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/english-oak/", medicalUses: "", culinaryUses: "⚠️ Acorns are bitter and toxic raw (high in tannins); they were historically leached and ground into flour in hard times, but this needs careful processing. Not a casual forage.", folklore: "The oak supports more wildlife than any other British tree; long sacred to druids and the emblem of English strength, with acorns feeding jays, squirrels and pigs." },
      { name: "Stinkhorn", action: "fruiting", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/fungi-and-lichens/fungi/stinkhorn/", medicalUses: "", culinaryUses: "⚠️ Not recommended as food; while the young 'egg' stage is eaten in some traditions, the fungus is easily confused and best left alone.", folklore: "Famous for its rude shape and its carrion stench, which draws flies to spread its spores; Victorian naturalists were known to destroy them to protect delicate sensibilities." },
      { name: "Beefsteak Fungus", action: "fruiting", bakerPage: "176", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/fungi-and-lichens/fungi/beefsteak-fungus/", medicalUses: "", culinaryUses: "⚠️ Edible to those who know it and named for its raw, meat-like look that even 'bleeds' a red juice, but as with all wild fungi, never eat without expert identification.", folklore: "A reddish bracket fungus on oak and sweet chestnut that looks startlingly like a slab of raw meat; it stains the host's timber a prized brown ('brown oak')." },
      { name: "Penny Bun (Cep)", action: "fruiting", bakerPage: "176", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/fungi-and-lichens/fungi/cep/", medicalUses: "", culinaryUses: "⚠️ One of the most prized edible mushrooms (the porcini/cep), but wild fungi must never be eaten without expert, in-person identification — there are toxic boletes.", folklore: "Named for its glossy, well-baked-bun cap; a classic autumn woodland find, dried and treasured in kitchens across Europe." },
      { name: "Waxcap", action: "fruiting", bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/fungi-and-lichens/fungi/", medicalUses: "", culinaryUses: "⚠️ Some waxcaps are edible and some are not, and identification is tricky — never eat without expert help. They are better valued as a sign of precious old grassland.", folklore: "Jewel-coloured grassland mushrooms — scarlet, gold, green and pink — whose presence marks ancient, unimproved meadows and lawns, increasingly rare habitats." }
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
      { name: "Squirrels", action: "caching", bakerPage: "16-17", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/grey-squirrel/", medicalUses: "", culinaryUses: "", folklore: "Squirrels are busy laying down and recovering buried food stores against winter; they don't truly hibernate but lie up in dreys during the worst weather." },
      { name: "Brown Hares", action: null, bakerPage: "7, 49, 182", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/brown-hare", medicalUses: "", culinaryUses: "", folklore: "Hares stay active all winter, relying on speed and their shallow 'form' rather than a burrow; their large groups are easier to spot on bare November fields." },
      { name: "Mountain Hares", action: "turning white", bakerPage: "183", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/mountain-hare", medicalUses: "", culinaryUses: "", folklore: "On the Scottish hills the mountain hare moults into a white winter coat for camouflage in snow — a change that can leave it conspicuous in snowless years." }
    ],
    Birds: [
      { name: "Long-tailed Tits", action: null, bakerPage: "", collinsPage: "346", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/long-tailed-tit", medicalUses: "", culinaryUses: "", folklore: "Roving winter flocks of these tiny, lollipop-shaped birds move through hedges with thin contact calls; they huddle together along a branch to survive cold nights." },
      { name: "Knot", action: "flocking", bakerPage: "", collinsPage: "148", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/knot", medicalUses: "", culinaryUses: "", folklore: "Vast winter flocks wheel over estuaries in smoke-like clouds; the name is said to honour King Cnut, who supposedly couldn't hold back the tide these birds follow." },
      { name: "Dunlin", action: "flocking", bakerPage: "", collinsPage: "150", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/dunlin", medicalUses: "", culinaryUses: "", folklore: "The commonest small wader of winter estuaries, often in huge mixed flocks; restless feeders that probe the mud in tight, busy groups." },
      { name: "Rookeries", action: null, bakerPage: "", collinsPage: "364", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/rook", medicalUses: "", culinaryUses: "", folklore: "Rooks return to inspect and squabble over their bare-treetop rookeries in late autumn; long associated in folklore with weather-telling and with omens." },
      { name: "Woodpecker Nest Holes", action: "visible", bakerPage: "", collinsPage: "244", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/great-spotted-woodpecker", medicalUses: "", culinaryUses: "", folklore: "With the leaves down, old woodpecker holes stand out in bare trunks; these become vital winter roosts and nest sites for many other birds and mammals." },
      { name: "Fieldfares", action: "arriving", bakerPage: "", collinsPage: "294", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/fieldfare", medicalUses: "", culinaryUses: "", folklore: "Big, handsome thrushes that pour in from Scandinavia for winter, stripping hedges of berries with loud chacking calls." },
      { name: "Redwings", action: "arriving", bakerPage: "", collinsPage: "294", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/redwing", medicalUses: "", culinaryUses: "", folklore: "Our smallest thrush, a winter visitor with a rusty flank and cream eye-stripe; listen for the thin 'tseep' calls of migrating flocks overhead on autumn nights." },
      { name: "Goldfinch", action: "flocking", bakerPage: "", collinsPage: "380", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/goldfinch", medicalUses: "", culinaryUses: "", folklore: "Twittering flocks (a 'charm' of goldfinches) work over teasels and thistleheads in late autumn, expertly extracting the seeds with fine bills." },
      { name: "Starling Murmurations", action: null, bakerPage: "", collinsPage: "370", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/starling", medicalUses: "", culinaryUses: "", folklore: "Winter dusk brings one of Britain's greatest spectacles: tens of thousands of starlings swirl in shape-shifting clouds before plunging to roost together." }
    ],
    AmphibiansReptilesFish: [
      { name: "Salmon", action: "spawning", bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/freshwater/atlantic-salmon", medicalUses: "", culinaryUses: "", folklore: "Salmon cut nests ('redds') in clean river gravel and spawn in late autumn; many die afterwards, their bodies feeding the river that raised them." }
    ],
    Invertebrates: [
      { name: "Hibernating Ladybirds", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/7-spot-ladybird", medicalUses: "", culinaryUses: "", folklore: "Ladybirds cluster together to hibernate in sheltered crannies — window frames, hollow stems, leaf litter — sometimes in their hundreds, sharing warmth through winter." },
      { name: "Moth Pupae", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/moths", medicalUses: "", culinaryUses: "", folklore: "Many moths pass the winter as a chrysalis tucked in soil, leaf litter or bark, waiting out the cold before emerging in spring; turning the soil can reveal them." },
      { name: "Red Admiral", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/red-admiral", medicalUses: "", culinaryUses: "", folklore: "Once purely a summer migrant, the red admiral now increasingly overwinters in Britain and can be seen flying on mild late-autumn days, even feeding on ivy and windfall fruit." }
    ],
    Plants: [
      { name: "Rustyback Fern", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/wildflowers/rustyback", medicalUses: "", culinaryUses: "", folklore: "A small fern of old walls and limestone; the underside of its fronds is densely covered in rust-coloured scales, and it can curl up and survive drought." },
      { name: "Hart's-tongue Fern", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/plants/ferns/harts-tongue-fern/", medicalUses: "Used in old herbals as a soothing remedy — of historical interest, not a recommendation.", culinaryUses: "", folklore: "One of the few evergreen ferns, its strap-shaped, undivided fronds bright through winter; the name likens the frond to a deer's ('hart's') tongue." }
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
      { name: "Yellow-necked Mouse", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/yellow-necked-mouse", medicalUses: "", culinaryUses: "", folklore: "A larger, more agile cousin of the wood mouse with a yellow collar; it readily climbs and often moves into rural lofts and outbuildings for the winter." },
      { name: "Fox", action: null, bakerPage: "15, 98, 145, 155", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/red-fox/", medicalUses: "", culinaryUses: "", folklore: "December is the start of the fox breeding season; on cold nights the vixen's eerie scream and the dog fox's sharp bark carry far through the dark." },
      { name: "Bank Vole", action: null, bakerPage: "15-16", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/mammals/bank-vole", medicalUses: "", culinaryUses: "", folklore: "Active all winter beneath the leaf litter and snow, the chestnut-backed bank vole is important prey for owls, weasels and foxes through the lean months." }
    ],
    Birds: [
      { name: "Buntings", action: null, bakerPage: "", collinsPage: "392", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/reed-bunting", medicalUses: "", culinaryUses: "", folklore: "Winter brings flocks of buntings to stubble, saltmarsh and coast; snow buntings drift like flurries of snow along northern shores and hills." },
      { name: "Yellowhammer", action: "flocking", bakerPage: "", collinsPage: "398", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/yellowhammer", medicalUses: "", culinaryUses: "", folklore: "In winter yellowhammers join mixed finch and bunting flocks on farmland stubble, their bright yellow dimmed but still catching the low sun." },
      { name: "Redwing", action: null, bakerPage: "", collinsPage: "294", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/redwing", medicalUses: "", culinaryUses: "", folklore: "Winter-visiting thrushes from the north roam in flocks after berries and windfalls; hard weather pushes them into gardens." },
      { name: "Fieldfare", action: null, bakerPage: "", collinsPage: "294", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/fieldfare", medicalUses: "", culinaryUses: "", folklore: "Bold northern thrushes that defend a good berry bush against all comers; a classic bird of frosty December hedgerows." },
      { name: "Treecreeper", action: null, bakerPage: "", collinsPage: "350", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/treecreeper", medicalUses: "", culinaryUses: "", folklore: "A tiny, mouse-like bird that spirals up tree trunks probing bark for insects; on cold nights it roosts in hollows it scrapes in soft redwood bark." },
      { name: "Curlew", action: null, bakerPage: "", collinsPage: "158", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/curlew", medicalUses: "", culinaryUses: "", folklore: "Our largest wader, with a long down-curved bill and a bubbling, evocative call; in winter it moves from the moors to feed on estuaries and coastal fields." },
      { name: "Redshank", action: null, bakerPage: "", collinsPage: "156", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/redshank", medicalUses: "", culinaryUses: "", folklore: "The 'sentinel of the marsh', quick to take off with ringing alarm calls on bright red legs; it winters in numbers on muddy estuaries." },
      { name: "Grey Plover", action: null, bakerPage: "", collinsPage: "142", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/grey-plover", medicalUses: "", culinaryUses: "", folklore: "A stocky winter wader of estuaries, silvery in winter dress with diagnostic black 'armpits' in flight; it feeds in a hunched run-and-pause." },
      { name: "Eider", action: null, bakerPage: "", collinsPage: "36", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/eider", medicalUses: "", culinaryUses: "", folklore: "Britain's heaviest duck, a hardy sea-going bird of northern coasts; eiderdown, plucked by the female to line her nest, is the warmest natural insulation known." },
      { name: "Shelduck", action: null, bakerPage: "", collinsPage: "22", referenceUrl: "https://www.rspb.org.uk/birds-and-wildlife/shelduck", medicalUses: "", culinaryUses: "", folklore: "A big, boldly pied duck of estuaries and mudflats, midway between duck and goose; it nests in old rabbit burrows and gathers in winter on tidal flats." }
    ],
    AmphibiansReptilesFish: [],
    Invertebrates: [
      { name: "Lugworm", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/marine/lugworm", medicalUses: "", culinaryUses: "", folklore: "Still casting its squiggles on winter beaches; buried in its burrow, it remains a year-round staple for wading birds and anglers." },
      { name: "Small Tortoiseshell", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/small-tortoiseshell", medicalUses: "", culinaryUses: "", folklore: "One of the butterflies that overwinters as an adult, tucked into sheds, lofts and hollow trees; a warm spell or central heating can wake them too early." },
      { name: "Peacock Butterfly", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://butterfly-conservation.org/butterflies/peacock", medicalUses: "", culinaryUses: "", folklore: "Hibernates as an adult in cool, dark places like outbuildings and hollow trees; if disturbed it flashes its eye-spots and rasps its wings to startle predators." },
      { name: "Queen Wasp", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/common-wasp", medicalUses: "", culinaryUses: "", folklore: "Only the new queens survive winter, hibernating alone in sheltered nooks; each will found an entire colony from scratch in spring. The autumn nest dies off." },
      { name: "Centipede", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/centipede", medicalUses: "", culinaryUses: "", folklore: "Fast nocturnal predators that shelter under logs, bark and stones through winter; despite the name few have anywhere near a hundred legs." },
      { name: "Dragonfly Nymph", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/dragonflies-and-damselflies", medicalUses: "", culinaryUses: "", folklore: "Beneath the ice, dragonfly nymphs hunt on as fierce underwater predators; some spend several years in the water before emerging to fly in summer." }
    ],
    Plants: [
      { name: "Fungi & Lichen", action: null, bakerPage: "", collinsPage: "", referenceUrl: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/fungi-and-lichens/", medicalUses: "", culinaryUses: "⚠️ Some fungi fruit even in winter, but many are poisonous and identification is hard — never eat any wild fungus without expert, in-person identification.", folklore: "Lichens — part fungus, part alga — grow on through winter and are sensitive indicators of clean air; the richest displays mark the least-polluted places." }
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
