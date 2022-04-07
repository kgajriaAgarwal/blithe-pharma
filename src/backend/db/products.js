import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

// export const products = [
//   {
//     _id: uuid(),
//     title: "You Can WIN",
//     author: "Shiv Khera",
//     price: "5000",
//     categoryName: "non-fiction",
//   },
//   {
//     _id: uuid(),
//     title: "You are Winner",
//     author: "Junaid Qureshi",
//     price: "3000",
//     categoryName: "horror",
//   },
//   {
//     _id: uuid(),
//     title: "Think and Grow Rich",
//     author: "Shiv Khera",
//     price: "1000",
//     categoryName: "fiction",
//   },
// ];


//ctaegortName & uuid do not change..
export const products = [
  {
    _id: uuid(), 
    id:1,
    prdctBadge: 'Popular',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg",
    title:"Multivitamins",
    description:"Multivitamin Supreme, Zinc, Calcium and Vitamin D Immunity Booster Capsule",
    ratings: 4.2,
    reviews: 169,
    mrp: 1780,
    discount: 20,
    qty: 0,
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG',
    productStatus: "featured"
  },
  {
    _id: uuid(), 
    id:2,
    prdctBadge: '',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1637324194/gc3u9gfc331wtsipnljl.jpg",
    title:"Multivitamins Pro",
    description:"Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tablets for Joint Health & Immunity",
    ratings: 4.9,
    reviews: 170,
    mrp: 1700,
    discount: 15,
    qty: 0,
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG',
    productStatus: "featured"
  },
  {
    _id: uuid(), 
    id:3,
    prdctBadge: '',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1645272788/qh1au45w8u7cfvf3lg3i.jpg",
    title:"Multivitamins xtreme",
    description:"Women's Multivitamin, Zinc, Vitamin C, Calcium, Vitamin D, and Iron  Immunity Booster Tablet",
    ratings: 4.8,
    reviews: 200,
    mrp: 1500,
    discount: 22,
    qty: 0,
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG',
    productStatus: "featured"
  },
  {
    _id: uuid(), 
    id:4,
    prdctBadge: 'Best Selling',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507827/fwram2p7rbkoigjg6zas.jpg",
    title:"Salmon Omega3",
    description:"Salmon Omega 3 Fish Oil Capsule",
    ratings: 5.0,
    reviews: 600,
    mrp: 1200,
    discount: 18,
    qty: 0,
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG',
    productStatus: "featured"
  },
  {
    _id: uuid(), 
    id:5,
    prdctBadge: 'Popular',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
    title:"Maltodextrin",
    description:"High Fiber with Pre- & Probiotics with Inulin, Guar gum, & Resistant Maltodextrin Unflavoured Unflavoured with Resistant Maltodextrin, Inulin and Guar Gum",
    ratings: 4.9,
    reviews: 800,
    mrp:1000,
    discount: 20,
    qty: 0,
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG',
    productStatus: "featured"
  },
  {
    _id: uuid(), 
    id:6,
    prdctBadge: 'New',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507956/q9xnukhrycqpcypv7aeg.jpg",
    title:"Probiotic Plus",
    description:"Apple Cider Vinegar Probiotic Plus - Raw Unfiltered Unpasteurized with The Mother",
    ratings: 4.5,
    reviews: 100,
    mrp:1200,
    discount: 10,
    qty: 0,
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG',
    productStatus: "featured"
  },
  {
    _id: uuid(), 
    id:7,
    prdctBadge: '',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631894048/uqehwqt3b6cwuuvqrymf.jpg",
    title:"Active Nutrition",
    description:"Active Nutrition Mix with Whey Protein, Vitamin D, Choline and Fiber Vanilla",
    ratings: 2.5,
    reviews: 100,
    mrp: 1500,
    discount: 20,
    qty: 0,
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG',
    productStatus: "featured"
  },
  {
    _id: uuid(),
    id:8,
    prdctBadge: '',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1645272646/klpj2khvaphkvpqmchui.jpg",
    title:"Energy Booster",
    description:"Senior 50+ Multivitamin & Multimineral Immunity Booster Zinc, Vitamin C, Calcium, and Vitamin D Veg Tablet",
    ratings: 2.9,
    reviews: 80,
    mrp: 1500,
    discount: 10,
    qty: 0,
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG',
    productStatus: "featured"
  },
  {
    _id: uuid(),
    id:9,
    prdctBadge: '',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631892302/bpstjff7hzg9uecj54n7.jpg",
    title:"Diabetes Nutrition",
    description:"Diabetes Nutrition Mix Vanilla",
    ratings: 3.6,
    reviews: 400,
    mrp: 1800,
    discount: 20,
    qty: 0,
    // categoryName: ["Fitness & Supplements", 'Diabetic Care'],
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG',
    productStatus: "featured"
  },
  {
    _id: uuid(),
    id:10,
    prdctBadge: '',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1637324544/eapxk8huctwyc4cwxv5a.jpg",
    title:"Quick Heating gel pad",
    description:"Ortho Electric Heating Gel Pad with Auto-Cut & Quick Heating Feature",
    ratings: 3.8,
    reviews: 420,
    mrp: 1200,
    discount: 25,
    qty: 0,
    categoryName: "Fitness & Supplements",
    productTags: 'Supplements',
    brandName: '1MG'
  },
  // Healthcare Devices -- BP MONITORS
  //== OMROM PRODUCTS 
  {
    _id: uuid(),
    id:11,
    prdctBadge: 'new',
    img:"https://m.media-amazon.com/images/I/41bVWz9qU1S._AC_SR160,160_.jpg",
    title:"Omron-HEM 7121",
    description:"Omrom digital blood pressure monitor",
    ratings: 1.5,
    reviews: 45,
    mrp: 1390,
    discount: 25,
    qty: 0,
    categoryName: "Healthcare Devices",
    productTags: 'BP monitors',
    brandName: 'Omron'
  },
  {
    _id: uuid(),
    id:12,
    prdctBadge: '',
    img:"https://m.media-amazon.com/images/I/51EJPKLTMeL._AC_SR160,160_.jpg",
    title:"Omron-HEM 7126",
    description:"Omrom digital blood pressure monitor",
    ratings: 4.0,
    reviews: 40,
    mrp: 1600,
    discount: 20,
    qty: 0,
    categoryName: "Healthcare Devices",
    productTags: 'BP monitors',
    brandName: 'Omron'
  },
  //Dr Morepen //BP monitors
  {
    _id: uuid(),
    id:13,
    prdctBadge: '',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600224115/cropped/tjwwwbb8c0wdf0eiehfb.jpg",
    title:"Dr Morepen BP 02 Blood Pressure Monitor",
    description:"Dr Morepen BP 02 Blood Pressure Monitor Fully automatic blood pressure monitor",
    ratings: 1.0,
    reviews: 500,
    mrp: 1900,
    discount: 10,
    qty: 0,
    features:["Fully automatic blood pressure monitor is a home blood pressure monitor that measures blood pressure, pulse rate and stores the result in memory","Offers high-end technology which measures blood pressure on inflation","Offers Measurement accuracy of Pressure: +/- 3 mmHg, Pulse: +/- 5%", "Even useful for patients with larger sized arms"],
    categoryName: "Healthcare Devices",
    productTags: 'BP monitors',
    brandName: 'Dr Morepen'
  },
  //Dr Trust //BP monitors
  {
    _id: uuid(),
    id:14,
    prdctBadge: '',
    img:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600593729/cropped/ajhgrwutc5tzq7xgevgw.jpg",
    title:"Dr Trust bp monitor",
    description:"Dr Trust USA Goldline Talking Automatic Digital Blood Pressure Monitor Metallic Silver",
    ratings: 4.8,
    reviews: 500,
    mrp: 2000,
    discount: 30,
    qty: 0,
    features:["Clinically accurate results with auto-power on/off feature","It is a pain-free, quick and accurate process", "Helps in measuring blood pressure"],
    categoryName: "Healthcare Devices",
    productTags: 'BP monitors',
    brandName: 'Dr Trust'
  },

  //// Healthcare Devices -- Weighing Scales
  {
    _id: uuid(),
    id:15,
    prdctBadge: '',
    img:"https://m.media-amazon.com/images/I/61Q84WOyxIL._AC_UL320_.jpg",
    title:"Omron HN 289",
    description:"Omron HN 289 (Black) Automatic Personal Digital Weight Machine With Large LCD Display and 4 Sensor Technology For Accurate Weight Measurement",
    ratings: 2.2,
    reviews: 500,
    mrp: 1000,
    discount: 30,
    qty: 0,
    features:["Age Range: N/A ; Personal with Digital Display","1 year brand warranty from date of purchase", "4 sensor for greater precision", "Large LCD panel. Selectable matrix", "Dimesnions (L*H*D)cm: 29*31*4 ; Place the machine on flat surface for accurate values"],
    categoryName: "Healthcare Devices",
    productTags: 'Weighing Scales',
    brandName: 'Omron'
  },
  {
    _id: uuid(),
    id:16,
    prdctBadge: '',
    img:"https://rukminim2.flixcart.com/image/416/416/j7hxmkw0/weighing-scale/v/q/v/lite-weight-digital-electronic-personal-health-body-ho-18-hoffen-original-imaexp2txfytkhpj.jpeg",
    title:"Hoffen Weighing Scale",
    description:"Hoffen (India) Digital Electronic LCD Personal Health Body Fitness Weighing Scale (Black) with 2 Years Warranty",
    ratings: 3.0,
    reviews: 1000,
    mrp: 1200,
    discount: 20,
    qty: 0,
    features:["High precision strain gauge sensor system","Tempered Glass 280 x 280 mm", "Large LCD panel. Selectable matrix", "Capacity 2.3 -180 Kg"],
    categoryName: "Healthcare Devices",
    productTags: 'Weighing Scales',
    brandName: 'Hoffen'
  },
  {
    _id: uuid(),
    id:17,
    prdctBadge: '',
    img:"https://images.meesho.com/images/products/78851998/6ulkb_512.jpg",
    title:"Dr Trust-BMI Weight Machine",
    description:"Dr Trust (USA) Rechargeable Bluetooth Digital Smart Fitness Body Fat Composition Analyzer BMI Weight Machine For Human USB Electronic Weighing Scale- 505",
    ratings: 4.0,
    reviews: 500,
    mrp: 2000,
    discount: 30,
    qty: 0,
    features:["TRACK 16 ESSENTIAL BODY METRICS + ROOM TEMPRATURE: Measures body metrics including BMI, Bone mass, Muscle, BFR, BMR, Visceral fat, Body fat, Muscle weight etc.","It also measures room temperature and perfect for use by all family members", "RECHARGEABLE & PORTABLE: Any standard mobile charger and power bank can be used to recharge your scale anytime, anywhere", "As a single rigid tempered glass bearing, it is easy to carry during travelling"],
    categoryName: "Healthcare Devices",
    productTags: 'Weighing Scales',
    brandName: 'Dr Trust'
  },
  {
    _id: uuid(),
    id:17,
    prdctBadge: 'New',
    img:"https://cdn.shopify.com/s/files/1/0148/5482/products/28901297029166_360x360.jpg",
    title:"Dr Trust-BMI Weight Machine",
    description:"Dr Trust (USA) Rechargeable Bluetooth Digital Smart Fitness Body Fat Composition Analyzer BMI Weight Machine For Human USB Electronic Weighing Scale- 505 (Gray)",
    ratings: 3.8,
    reviews: 500,
    mrp: 2000,
    discount: 30,
    qty: 0,
    features:["TRACK 16 ESSENTIAL BODY METRICS + ROOM TEMPRATURE: Measures body metrics including BMI, Bone mass, Muscle, BFR, BMR, Visceral fat, Body fat, Muscle weight etc.","It also measures room temperature and perfect for use by all family members", "RECHARGEABLE & PORTABLE: Any standard mobile charger and power bank can be used to recharge your scale anytime, anywhere", "As a single rigid tempered glass bearing, it is easy to carry during travelling"],
    categoryName: "Healthcare Devices",
    productTags: 'Weighing Scales',
    brandName: 'Dr Trust'
  },

  //glucometers
  {
    _id: uuid(),
    id:18,
    prdctBadge: '',
    img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxWn9_0GBQf_6iCYw_fnOgvvDiKKezhAlOqi11XD1G-jcVoWxYVzi_mUR-BHT4hW4c8V7AiV3QC5h7LHxB6fTl68MzO9qhl2iUsNmiVBI&usqp=CAE",
    title:"Accu-Chek Active Glucometer",
    description:"Dr Trust (USA) Rechargeable Bluetooth Digital Smart Fitness Body Fat Composition Analyzer BMI Weight Machine For Human USB Electronic Weighing Scale- 505 (Gray)",
    ratings: 3.5,
    reviews: 500,
    mrp: 2000,
    discount: 30,
    qty: 0,
    features:["Under-dosing Detection.","Easy-to-learn and easy-to-use with intuitive icons and simple two-button navigation.", "Fast and accurate results within 5 seconds only.", "Pre-meal and post-meal flagging of glucose levels."],
    categoryName: ["Healthcare Devices", "Diabetic Care"],
    productTags: 'Glucometers',
    brandName: 'Accu-Chek'
  },
  {
    _id: uuid(),
    id:19,
    prdctBadge: '',
    img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxWn9_0GBQf_6iCYw_fnOgvvDiKKezhAlOqi11XD1G-jcVoWxYVzi_mUR-BHT4hW4c8V7AiV3QC5h7LHxB6fTl68MzO9qhl2iUsNmiVBI&usqp=CAE",
    title:"Accu-Chek Active Glucometer",
    description:"Dr Trust (USA) Rechargeable Bluetooth Digital Smart Fitness Body Fat Composition Analyzer BMI Weight Machine For Human USB Electronic Weighing Scale- 505 (Gray)",
    ratings: 0.5,
    reviews: 500,
    mrp: 2000,
    discount: 30,
    qty: 0,
    features:["Under-dosing Detection.","Easy-to-learn and easy-to-use with intuitive icons and simple two-button navigation.", "Fast and accurate results within 5 seconds only.", "Pre-meal and post-meal flagging of glucose levels."],
    categoryName: ["Healthcare Devices", "Diabetic Care"],
    productTags: 'Glucometers',
    brandName: 'Accu-Chek'
  },
]