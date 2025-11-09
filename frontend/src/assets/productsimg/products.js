import solgardnanogel from  './sunscreen/solgardenanogel.png'
import solagardpro  from'./sunscreen/solagardpro.png'
import beyoshade  from'./sunscreen/beyoshade.png'

////face wash
import glybonfacewash from "./facewash/glybonfacewash-removebg-preview.png";
import ideglow from "./facewash/ideglow2-removebg-preview.png";
import qutifilfacewash from "./facewash/qutifilfacewash-removebg-preview.png";
import qutifil2 from "./facewash/qutifil2-removebg-preview.png";
//////////////// moistureizer
import qtiphilbodylotion from "./moisturizer/qutifillotion.png";
import qtiphilcream from "./moisturizer/qutifilcream.png";
/////////////////////////////// Anti oxident
import beyoxi from "./antioxident/beoxis.png";
import beyoxiglow from "./antioxident/beoxix-glow.png";
import beyoxic from "./antioxident/beoxis-c.png";
import beyoxihc from "./antioxident/beoxish.png";

/////==============================soap
import kozgard from "./soap/kosgard2.png"
import qtleomoist from "./soap/utomilist2.png"
/////=========================melesma
import beyolaicplus from "./melasma/beoxisplus.png";
import glyebonultra from "./melasma/glybonultra.png";
import pellegardc from "./melasma/pelagardc.png";
import pellegardplus from "./melasma/pelagardplus.png";
//====================hair care
import keraleopro from "./Haircare/kereliopro-removebg-preview.png"
import kerelioadvanehairoil from './Haircare/kerelioadvanehairoil.png'
import keraleogold from "./Haircare/kerelio-gold.png"
import kereliotablet from "./Haircare/kereliotablet.png"
import minoxidile from "./Haircare/minoxidile.png"
import kereliof from './Haircare/kereliof.png'
import kereliomax from './Haircare/kerelio-max.png'

// ================================ shampoo
import kerelokb from './Shampoo/kerelokb.png'
import kerelof from './Shampoo/kerelof.png'
/// ===========================skin care
import fomingfacewash from './skincare/fomingfacewash.png'
import ideglow1 from './skincare/ideglow.png'
import qutifilcream from './skincare/qutifilcream.png'
import undereyecream from './skincare/undereyecream.png'

export const products = [
  {
    id: "69081917f1937ae4cd0da98f",
    name: "Solagard Nanogel SPF 50+ & PA+++",
    ingredients: "Zinc Oxide (Nano), Titanium Dioxide, Octinoxate, Vitamin E",
    description:
      "Solagard Nanogel is a lightweight, non-greasy sunscreen formulated with nano zinc oxide and titanium dioxide for broad-spectrum protection against UVA and UVB rays.",
    indications: [
      "Protects skin from sunburn",
      "Prevents premature aging",
      "Maintains hydration",
      "Suitable for all skin types",
    ],
    category: "Sunscreen",
    images: [
      [solgardnanogel],
    ],
    createdAt: "2025-11-03T02:53:11.082Z",
  },
  {
    id: "69081a3ef1937ae4cd0da99a",
    name: "Solagard Pro SPF 50++++",
    ingredients: "Titanium Dioxide, Silk Protein Extract, Zinc Oxide, Vitamin E",
    description:
      "Solagard Pro SPF 50++++ is an ultra-protective, non-comedogenic sunscreen enriched with silk protein extract and antioxidants to shield skin from UV damage.",
    indications: [
      "Protects against UVA/UVB",
      "Prevents dark spots",
      "Maintains even skin tone",
      "Suitable for oily skin",
    ],
    category: "Sunscreen",
    images: [
      solagardpro
    ],
    createdAt: "2025-11-03T02:58:06.912Z",
  },
  {
    id: "69081b35f1937ae4cd0da9a4",
    name: "Beyoshade Nanogel SPF 50+ & PA+++",
    ingredients: "Zinc Oxide (Nano), Titanium Dioxide, Octinoxate, Vitamin E",
    description:
      "Beyoshade Nanogel SPF 50+ & PA+++ is an advanced sunscreen with nano-technology providing superior protection while keeping the skin light and breathable.",
    indications: [
      "Sun protection for sensitive skin",
      "Non-greasy finish",
      "Suitable for daily use",
      "Dermatologically tested",
    ],
    category: "Sunscreen",
    images: [
      beyoshade // replace with your actual image path
    ],
    createdAt: "2025-11-03T03:02:13.922Z",
  },

  ////// face wash ===================================================>
    {
  id: "prod_glybon_001",
  name: "Glyebon Acne Free Face Wash Gel",
  ingredients: "Encapsulated beads of natural ingredients, Dermatologically tested actives",
  description:
    "Glyebon is a dermatologist-tested face wash gel designed to control acne and keep your skin clear. Its encapsulated natural actives gently cleanse while maintaining skin balance.",
  indications: [
    "Controls acne and excess oil",
    "Gently cleanses pores",
    "Maintains natural hydration",
    "Suitable for daily use",
  ],
  category: "Face Wash",
  images: [glybonfacewash],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_ideglow_002",
  name: "IdegLOW Skin Lightening Face Wash",
  ingredients:
    "Enriched with Oils, Butters & Vitamins",
  description:
    "IdegLOW gently exfoliates, de-tans, and smoothens the skin. Its unique blend of oils and butters nourishes the skin, helping maintain radiance and softness.",
  indications: [
    "Removes tan and dead cells",
    "Brightens dull skin",
    "Softens and smoothens texture",
    "Prevents dryness and irritation",
  ],
  category: "Face Wash",
  images: [ideglow],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_qutipil_003",
  name: "Qtiphil Foaming Facewash",
  ingredients: "Mineral Complex, Skin Brightening Actives",
  description:
    "Qtiphil Foaming Facewash revitalizes and energizes dull skin with a rich mineral complex. It helps brighten the skin and improves its overall texture for a radiant glow.",
  indications: [
    "Brightens dull skin",
    "Improves skin texture",
    "Cleanses impurities deeply",
    "Maintains moisture balance",
  ],
  category: "Face Wash",
  images: [qutifilfacewash],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_qutipil_004",
  name: "Qtiphil Sulphate-Free Facewash",
  ingredients:
    "AHA-BHA, Niacinamide, Mandelic Acid, Glycolic Acid, Salicylic Acid, Tea Tree Oil, Rosemary Extract, Vitamin E",
  description:
    "A sulphate-free advanced formulation designed to gently exfoliate, clarify pores, and promote healthy, radiant skin without stripping moisture.",
  indications: [
    "Controls acne and oil",
    "Improves uneven skin tone",
    "Gently exfoliates and refines texture",
    "Suitable for sensitive skin",
  ],
  category: "Face Wash",
  images: [qutifil2],
  createdAt: "2025-11-08T00:00:00.000Z",
},
///======================================================================>
{
  id: "prod_qtiphil_005",
  name: "Qtiphil Daily Moisturizing Body Lotion",
  ingredients:
    "Glycerin, Aloe Vera, Shea Butter, Vitamin E, Lecithin, Ceramide MEA, Sodium PCA",
  description:
    "Qtiphil Daily Moisturizing Body Lotion is a deeply nourishing, non-comedogenic formulation that keeps your skin hydrated and smooth throughout the day. Its unique blend of natural emollients restores skin softness and elasticity.",
  indications: [
    "Deeply moisturizes and nourishes dry skin",
    "Improves skin smoothness and suppleness",
    "Non-sticky and absorbs quickly",
    "Suitable for daily use and all skin types",
  ],
  category: "Moisturizer",
  images: [qtiphilbodylotion],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_qtiphil_006",
  name: "Qtiphil Advance Moisturising Cream",
  ingredients: "Hyaluronic Acid, Ceramide, Vitamin E, Glycerin, Lecithin",
  description:
    "Qtiphil Advance Moisturising Cream is a long-lasting hydrating formula enriched with Hyaluronic Acid and Ceramides to restore skin’s moisture barrier. It provides deep nourishment and keeps skin soft, supple, and healthy.",
  indications: [
    "Deep moisturization for dry and sensitive skin",
    "Repairs and strengthens skin barrier",
    "Non-sticky and fast-absorbing",
    "Ideal for daily hydration and post-treatment care",
  ],
  category: "Moisturizer",
  images: [qtiphilcream],
  createdAt: "2025-11-08T00:00:00.000Z",
},
////////////////////////////// antioxident
{
  id: "prod_beyoxi_007",
  name: "Beyoxi Capsules",
  ingredients:
    "Pomegranate Extract, Musk Melon, Lycopene, Vitamins & Minerals",
  description:
    "Beyoxi Capsules are enriched with natural antioxidants and essential vitamins to promote overall wellness, improve skin texture, and combat oxidative stress.",
  indications: [
    "Helps in skin rejuvenation and glow",
    "Boosts antioxidant levels",
    "Improves immunity and vitality",
    "Supports healthy aging",
  ],
  category: "Antioxidant",
  images: [beyoxi],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_beyoxi_008",
  name: "Beyoxi Glow Tablets",
  ingredients:
    "L-Glutathione, Vitamin C, Alpha Lipoic Acid, Silymarin, Co-Enzyme Q10, Veg. Collagen",
  description:
    "Beyoxi Glow Tablets are formulated to enhance natural skin radiance and reduce pigmentation. A blend of antioxidants supports skin brightening and detoxification.",
  indications: [
    "Promotes brighter, even-toned skin",
    "Reduces oxidative stress and dullness",
    "Improves elasticity and glow",
    "Supports liver detoxification and repair",
  ],
  category: "Antioxidant",
  images: [beyoxiglow],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_beyoxi_009",
  name: "Beyoxi-C Effervescent Tablets",
  ingredients:
    "Natural Vitamin C 1000 mg, Orange Extract, Sodium Bicarbonate, Citric Acid",
  description:
    "Beyoxi-C is a powerful Vitamin C supplement in effervescent tablet form, designed to boost immunity, reduce fatigue, and promote collagen production. Its refreshing orange flavor makes it easy and pleasant to consume daily.",
  indications: [
    "Boosts immunity and protects against infections",
    "Enhances collagen synthesis for skin and joints",
    "Acts as a potent antioxidant",
    "Sugar-free and easy to dissolve in water",
  ],
  category: "Antioxidant",
  images: [beyoxic],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_beyoxi_010",
  name: "Beyoxi-HC Antioxidant Capsules",
  ingredients:
    "Antioxidant Complex, Lycopene, Vitamin C, Vitamin E, Zinc, Beta-Carotene",
  description:
    "Beyoxi-HC Capsules are antioxidant-rich supplements formulated to protect the skin from environmental stress, reduce pigmentation, and maintain skin youthfulness.",
  indications: [
    "Protects against oxidative stress",
    "Reduces free radical damage",
    "Improves skin health and glow",
    "Enhances natural defense mechanism",
  ],
  category: "Antioxidant",
  images: [beyoxihc],
  createdAt: "2025-11-08T00:00:00.000Z",
},
/////===================soap
{
  id: "prod_kozgard_011",
  name: "Kozgard Anti-Dandruff & Anti-Fungal Soap",
  ingredients: "Ketoconazole 1%",
  description:
    "Kozgard Anti-Dandruff & Anti-Fungal Soap is formulated with Ketoconazole to effectively fight dandruff, fungal infections, and scalp irritation. It gently cleanses while maintaining scalp and skin hygiene.",
  indications: [
    "Treats dandruff and fungal scalp infections",
    "Reduces itching and flaking",
    "Prevents recurrence of dandruff",
    "Suitable for both scalp and body use",
  ],
  category: "Soap",
  images: [kozgard],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_qtleomoist_012",
  name: "Qtleomoist Soap",
  ingredients: "Aloe Vera, Kokum Butter, Olive Oil, Shea Butter",
  description:
    "Qtleomoist Soap is a gentle, pH-balanced moisturizing soap enriched with natural emollients. It helps retain skin hydration and restore softness while cleansing effectively.",
  indications: [
    "Deeply moisturizes and nourishes skin",
    "Maintains natural skin pH balance",
    "Soothes dryness and irritation",
    "Ideal for daily use on sensitive skin",
  ],
  category: "Soap",
  images: [qtleomoist],
  createdAt: "2025-11-08T00:00:00.000Z",
},
//========================== melesma
{
  id: "prod_beyolaic_013",
  name: "Beyolaic Plus Face Serum",
  ingredients: "Retinol, Hyaluronic Acid, Niacinamide",
  description:
    "Beyolaic Plus Face Serum combines the power of retinol, hyaluronic acid, and niacinamide to reduce fine lines, improve texture, and restore youthful radiance. Suitable for all skin types with anti-aging and antioxidant action.",
  indications: [
    "Reduces fine lines and wrinkles",
    "Brightens and evens skin tone",
    "Boosts hydration and elasticity",
    "Antioxidant and anti-aging properties",
  ],
  category: "Melasma",
  images: [beyolaicplus],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_glyebon_014",
  name: "Glyebon Ultra De-Pigmenting Serum",
  ingredients:
    "Tranexamic Acid, Alpha Arbutin, Glycolic Acid, Licorice Extract, Brightenyl",
  description:
    "Glyebon Ultra Serum helps in skin depigmentation and brightening. It targets dark spots, melasma, and uneven tone while being gentle and steroid-free for all skin types.",
  indications: [
    "Reduces melasma and hyperpigmentation",
    "Brightens skin and evens tone",
    "Steroid-free and clinically tested",
    "Safe for daily use on sensitive skin",
  ],
  category: "Melasma",
  images: [glyebonultra],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_pellegardc_015",
  name: "Pellegard-C Advance Face Serum",
  ingredients:
    "L-Ascorbic Acid, Alpha Arbutin, Hyaluronic Acid, Ferulic Acid, Hydrolyzed Collagen",
  description:
    "Pellegard-C Serum is a brightening and anti-aging formula enriched with Vitamin C and Hyaluronic Acid to rejuvenate dull skin, fade dark spots, and enhance collagen production.",
  indications: [
    "Reduces pigmentation and dark spots",
    "Boosts collagen synthesis",
    "Improves skin brightness and texture",
    "Protects against UV and oxidative damage",
  ],
  category: "Melasma",
  images: [pellegardc],
  createdAt: "2025-11-08T00:00:00.000Z",
},
{
  id: "prod_pellegardplus_016",
  name: "Pellegard-Plus Cream",
  ingredients:
    "Niacinamide, Alpha Arbutin, Vitamin E, Hyaluronic Acid, Botanical Extracts",
  description:
    "Pellegard-Plus Cream is designed to reduce dullness, dark spots, and fine lines. It provides deep hydration and improves overall skin luminosity for an even-toned, radiant complexion.",
  indications: [
    "Reduces pigmentation and blemishes",
    "Improves skin texture and tone",
    "Hydrates and smoothens skin",
    "Reduces fine lines and wrinkles",
  ],
  category: "Melasma",
  images: [pellegardplus],
  createdAt: "2025-11-08T00:00:00.000Z",
},
//===============================hair care
{
  id: "prod_keraleo_017",
  name: "Keraleo Pro Hair Growth Serum",
  ingredients: "Procapil, Baicapil, Anagain, Burgeon UP, Biotin, D-Panthenol",
  description:
    "Keraleo Pro Hair Growth Serum is a potent combination of clinically proven actives designed to reduce hair fall, stimulate new growth, and strengthen follicles. The serum nourishes the scalp, revitalizes roots, and promotes thicker, healthier hair.",
  indications: [
    "Promotes new hair growth and reduces hair fall",
    "Strengthens hair roots and improves scalp health",
    "Revitalizes dormant hair follicles",
    "Suitable for both men and women",
  ],
  category: "Hair Care",
  images: [keraleopro],
  createdAt: "2025-11-08T00:00:00.000Z",
},
  {
    id: "keraleo-advance",
    name: "Keraleo Advance Hair Oil",
    ingredients:
      "Pure Cold Pressed Oils Blend, No Mineral Oil, No Silicones, No Synthetic Fragrance",
    description:
      "Keraleo Advance Hair Oil is a non-sticky, non-greasy hair oil enriched with cold-pressed natural oils. It strengthens hair roots, reduces hair fall, and adds silky smoothness for stronger, healthier hair.",
    indications: [
      "Reduces hair fall",
      "Strengthens hair roots",
      "Improves scalp health",
      "Adds shine and smoothness to hair",
    ],
    category: "Hair Care",
    images: [kerelioadvanehairoil],
    createdAt: "2025-11-08T12:30:00.000Z",
  },

{
    id: "keraleo-gold",
    name: "Keraleo Gold Capsules",
    ingredients:
      "Anagain, Beta-sitosterol, EGCG, Nettle Leaf Extract, Rosemary Extract, Biotin, Amino Acids, Vitamins B1, B2, B3, B6, B12, E, C, Melatonin & Minerals",
    description:
      "Keraleo Gold Capsules are nutraceutical supplements that nourish hair follicles from within, reduce hair thinning, and promote stronger, shinier hair growth.",
    indications: [
      "Prevents hair thinning",
      "Improves hair density and texture",
      "Provides essential hair nutrients",
      "Supports overall scalp health",
    ],
    category: "Hair Care",
    images: [keraleogold],
    createdAt: "2025-11-08T12:32:00.000Z",
  },

   {
    id: "keraleo-tablets",
    name: "Keraleo Tablets",
    ingredients:
      "Myo-inositol, Multivitamins, Minerals, Amino Acids, Grape Seed Extract, Chia Seed Extract, Lycopene",
    description:
      "Keraleo Tablets provide a powerful combination of vitamins and natural extracts that promote hair health, boost scalp nourishment, and improve follicle strength.",
    indications: [
      "Strengthens hair from roots",
      "Improves scalp nourishment",
      "Enhances overall hair health",
      "Protects against oxidative damage",
    ],
    category: "Hair Care",
    images: [kereliotablet],
    createdAt: "2025-11-08T12:34:00.000Z",
  },
  {
    id: "keraleo-minoxidil",
    name: "Keraleo Minoxidil Topical Solution 5%",
    ingredients:
      "Minoxidil 5% w/v, Ethanol, Propylene Glycol, Purified Water",
    description:
      "Keraleo Minoxidil 5% is a clinically proven topical solution that revitalizes hair follicles to stimulate growth and slow down hair loss.",
    indications: [
      "Promotes new hair growth",
      "Revitalizes dormant hair follicles",
      "Improves blood circulation in the scalp",
      "Clinically proven to reduce hair fall",
    ],
    category: "Hair Care",
    images: [minoxidile],
    createdAt: "2025-11-08T12:36:00.000Z",
  },
  {
    id: "keraleo-f",
    name: "Keraleo F Solution (Minoxidil + Finasteride)",
    ingredients:
      "Minoxidil, Finasteride, Alcohol, Propylene Glycol, Purified Water",
    description:
      "Keraleo F Solution is a dual-action formulation combining Minoxidil and Finasteride to prevent hair loss and promote healthy regrowth.",
    indications: [
      "Prevents male pattern baldness",
      "Stimulates hair regrowth",
      "Improves follicle health",
      "Clinically tested for hair density",
    ],
    category: "Hair Care",
    images: [kereliof],
    createdAt: "2025-11-08T12:38:00.000Z",
  },
  {
  id: "keraleo-max",
  name: "Keraleo-Max Hair Therapy Serum",
  ingredients: "Procapil, Anagain, Redensyl",
  description:
    "Keraleo-Max Hair Therapy Serum is a potent scalp treatment fortified with Procapil, Anagain, and Redensyl. It helps revitalize hair roots, reduce hair loss, and stimulate the natural hair growth cycle for thicker and stronger hair.",
  indications: [
    "Revitalizes and minimizes hair loss",
    "Stimulates hair follicles for regrowth",
    "Improves blood circulation in hair roots",
    "Suitable for all hair types",
  ],
  category: "Hair Care",
  images: [kereliomax],
  createdAt: "2025-11-09T10:30:00.000Z",
},
///======================shampoo
{
  id: "keraleo-kb",
  name: "Keraleo KB Shampoo",
  ingredients:
    "Ketoconazole, ZPTO, D-Panthenol, Biotin, Aloe Vera Extract",
  description:
    "Keraleo KB Shampoo is an anti-hair fall and anti-dandruff shampoo enriched with Ketoconazole and Biotin. It cleanses the scalp, strengthens hair roots, and helps control dandruff while nourishing the hair.",
  indications: [
    "Reduces dandruff and scalp irritation",
    "Prevents hair fall and promotes healthy roots",
    "Strengthens hair and adds shine",
    "Suitable for daily use and all hair types",
  ],
  category: "Shampoo",
  images: [kerelokb],
  createdAt: "2025-11-09T10:45:00.000Z",
},
{
  id: "keraleo-ahf",
  name: "Keraleo AHF Conditioning Shampoo",
  ingredients:
    "Saw Palmetto, Biotin, Caffeine, Argan Oil, No Paraben, No Sulphate",
  description:
    "Keraleo AHF Conditioning Shampoo is a gentle, paraben- and sulphate-free formula designed to strengthen hair while improving texture and shine. Enriched with Saw Palmetto and Caffeine, it supports healthy hair growth and hydration.",
  indications: [
    "Nourishes and strengthens hair from roots to ends",
    "Improves scalp health and hydration",
    "Promotes thicker, shinier hair",
    "Free from parabens and sulphates",
  ],
  category: "Shampoo",
  images: [kerelof],
  createdAt: "2025-11-09T10:50:00.000Z",
},
/// ====================== skin care
  {
    id: "qtiphil-foam",
    name: "Qtiphil Foaming Face Wash",
    ingredients:
      "Advanced Skin Brightening Formula, Mineral Complex, Aloe Vera Extract",
    description:
      "Qtiphil Foaming Face Wash gently cleanses and brightens the skin. Formulated with a mineral complex, it revitalizes, energizes, and improves overall skin texture for a radiant glow.",
    indications: [
      "Cleanses and removes impurities effectively",
      "Brightens and revitalizes dull skin",
      "Improves skin texture and tone",
      "Suitable for daily use on all skin types",
    ],
    category: "Skin Care",
    images: [fomingfacewash],
    createdAt: "2025-11-09T12:30:00.000Z",
  },
   {
    id: "ideglow-serum",
    name: "IdegLow Skin Brightening Serum",
    ingredients:
      "Niacinamide, Vitamin C, Hyaluronic Acid, Licorice Extract, Glutathione",
    description:
      "IdegLow Skin Brightening Serum helps reduce pigmentation and dark spots while giving the skin a natural, even-toned glow. Its non-comedogenic formula provides deep hydration and smooth texture.",
    indications: [
      "Lightens dark spots and pigmentation",
      "Evens out skin tone",
      "Hydrates and nourishes the skin",
      "Non-comedogenic and suitable for all skin types",
    ],
    category: "Skin Care",
    images: [ideglow1],
    createdAt: "2025-11-09T12:35:00.000Z",
  },

   {
    id: "qtiphil-cream",
    name: "Qtiphil Advance Moisturising Cream",
    ingredients: "Hyaluronic Acid, Ceramide, Shea Butter, Glycerin",
    description:
      "Qtiphil Advance Moisturising Cream provides deep hydration with Hyaluronic Acid and Ceramide. It restores skin moisture balance and helps maintain smooth, supple, and healthy-looking skin.",
    indications: [
      "Deeply moisturizes and nourishes skin",
      "Improves elasticity and texture",
      "Suitable for dry and sensitive skin",
      "Long-lasting hydration formula",
    ],
    category: "Skin Care",
    images: [qutifilcream],
    createdAt: "2025-11-09T12:40:00.000Z",
  },
  {
    id: "pellegard-ue",
    name: "Pellegard-UE Under Eye Cream",
    ingredients: "Caffeine Extract, Vitamin E, Hyaluronic Acid, Aloe Vera",
    description:
      "Pellegard-UE Under Eye Cream provides an immediate cooling effect to reduce puffiness and dark circles. Enriched with caffeine and vitamins, it rejuvenates and brightens the under-eye area.",
    indications: [
      "Reduces dark circles and puffiness",
      "Provides cooling and soothing effect",
      "Hydrates and nourishes under-eye skin",
      "Suitable for all skin types",
    ],
    category: "Skin Care",
    images: [undereyecream],
    createdAt: "2025-11-09T12:45:00.000Z",
  },
];
