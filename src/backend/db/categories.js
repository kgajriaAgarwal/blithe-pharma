import { v4 as uuid } from "uuid";



export const categories = [
    {   
      _id: uuid(),
      id:1,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq29zM4sZ-T8wWl6usxGEUJ7WGgi76uCrsuA&usqp=CAU",
      title:"Healthcare Devices",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. one",
      brandfilters: ["Johnson & Johnson" ,
                      "Novartis AG",
                      "Abbott Laboratories",
                      "Medtronic PLC",
                      "Baxter International",
                      "Danaher Corporation",
                      "General Electric",
                      "3M Company",
                      "Siemens Healthineers",
                      "Stryker Corporation",
                      "Omron",
                      "Dr Trust",
                      "Hoffen",
                      "Dr Morepen"
                  ],
      productTags:[
          "BP monitors",
          "Weighing Scales",
          "Glucometers",
          "Excercise equipments",
          "Pulse oximeter",
          "Vital Signs monitors & wearables",
          "Thermometers",
          "Body Massager",
          "Nebulizers & Vaporizers",
          "Mobility Equipments",
          "Supports & Braces"
      ]
     
  },
  {   
      _id: uuid(),
      id:2,
      img:"https://www.choosetolivebetter.com/sites/default/files/eating-drinking-final_0.png",
      title:"Health Food and Drinks",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters: ["Boost by Unilever",
                      "Horlicks",
                      "Bournvita by Cadbury",
                      "Complan",
                      "Powervita by Patanjali",
                      "PediaSure by Abbott Laboratories",
                      "Ensure",
                      "Protinex"
                  ],
      productTags:["Weight Gain", "Weight Loss", "Energy drink"]
  },
  {   
      _id: uuid(),
      id:3,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MESVejz1iRQmGH6c6GPlyXWVIvW7JZYBGw&usqp=CAU",
      title:"Personal Care",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters: ["VLCC",
                      "Loreal",
                      "Amway",
                      "Kaya skin", 
                      "Lakme", 
                      "Richfeel", 
                      "Lotus Herbal",
                      "Hindustan Unilever"
                  ],
      productTags:["Body lotions", 
                  "hair dyes", 
                  "cosmetics", 
                  "creams", 
                  "deodorants", 
                  "bath soaps", 
                  "dental care products",
                  "shampoos",
                  "toothpaste",
                  "perfumes", 
                  "UV filters", 
                  "detergents",
                  "sunscreens",
                  ]
  },
  {   
      _id: uuid(),
      id:4,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1szF8AlO1frM0h0ccv_P8Gz6qcu_ZSUwtw&usqp=CAU",
      title:"Ayurvedic Care",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters: ["Dabur India Ltd.",
                      "Patanjali Ayurveda",
                      "Baidyanath",
                      "Hamdard Labs",
                      "Zandu Ayurveda",
                      "Himalaya wellness",
                      "vicco Labs"
                  ],
      productTags:["Pain relief", 
                  "Hair care",
                  "Skin Care",
                  "Digestive Care",
                  "Liver Health",
                  "cold n cough",
                  "Diabetes Care",
                  "Cholestrol control",
                  "Respiratory relief",
              ]
  },
  {   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65XbvKpRNM3EGa5eD-fJZ0g1SuX-vB1UZAw&usqp=CAU",
      title:"Mother and Baby Care",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters: ["Himalaya Baby Product",
                      "Chicco Baby Products",
                      "MamaEarth Baby Products",
                      "Sebamed Baby Products",
                      "Aveeno Baby Products",
                      "Dove Baby Products",
                      "Pigeon Baby Products",
                      "Patanjali Baby Products"
                  ],
      productTags:["Baby Wash",
          "Soap",
          "Powder",
          "Oil",
          "Haircare",
          "Cream",
          "Lotion",
          "Wipes",
          "Gift Packs",
          "Nappy Pads",
          "Cotton Buds",
          "Toothbrush",
          "Shampoo" ]
  },
  {   
      _id: uuid(),
      id:5,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMwm6TBBFCUDrNGVwVYwkF-unbjvf4RgAbw&usqp=CAU",
      title:"Skin Care",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters: [
          "L'Oréal",
          "Gillette",
          "Nivea",
          "Estée Lauder",
          "Clinique",
          "Guerlain",
          "Shiseido",
          "Garnier"
      ],
      productTags:[ "Dryness",
          "Acne Treatment",
          "Tan Removal",
          "Dark Circles",
          "Sun Protection",
          "Prevention & Protection",
          "Make Up Remover",
          "Anti-Aging",
          "Uneven Skin Tone",
          "Pigmentation",
          "Pore Tightening",
          "Lightening And Brightening",
          "Oil Control"
      ]
  },
  {   
      _id: uuid(),
      id:6,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYoE82xIpzqwAcxdajyBPDq3mJeLSAU4JFg&usqp=CAU",
      title:"Diabetic Care",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters:["Novo Nordisk A/S",
              "Ypsomed AG",
              "Abbott Laboratories",
              "Ascensia Diabetes Care Holdings AG",
              "Hoffmann-La Roche Ltd.",
              "Johnson & Johnson",
              "Medtronic PLC",
              "Becton, Dickinson and Company",
              "Terumo Corporation",
              "Sanofi",
              "Acc check"
          ],
      productTags:["Short-acting insulin",
          "Rapid-acting insulins",
          "Intermediate-acting insulin",
          "Long-acting insulins",
          "Combination insulins",
          "Amylinomimetic drug",
          "Alpha-glucosidase inhibitors",
          "Biguanides",
         " Dopamine agonist",
          "Dipeptidyl peptidase-4 (DPP-4) inhibitors",
          "Glucagon-like peptide-1 receptor agonists (GLP-1 receptor agonists)",
          "Meglitinides",
          "Sodium-glucose transporter (SGLT) 2 inhibitors",
          "Sulfonylureas",
          "Thiazolidinediones"]
  },
  {   
      _id: uuid(),
      id:7,
      img:"https://preview.pixlr.com/images/800wm/1503/1/1503120701.jpg",
      title:"Health Condition",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters:["Johnson & Johnson",
                      "Novartis",
                      "Abbott Laboratories",
                      "Medtronic",
                      "Baxter",
                      "glenamrk",
                      "Lispro",
                      "Cipla",
                      "Sun pharma"
                  ],
      productTags: ["Cancer",
          "Cholesterol",
          "Health Care Associated Infection Reporting",
          "High Blood Pressure",
          "HIV/AIDS Counseling & Testing Sites",
          "Hyperthermia",
          "Hypothermia",
          "Missouri Million Hearts",
          "Obesity",
          "STDs",
          "Time Critical Diagnosis System (Stroke and STEMI)",
          "Traumatic Brain Injury"]
  },
  {   
      _id: uuid(),
      id:8,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXeHNGAKmYpglS8Z2jkvlvkBaonpxIOXloQ&usqp=CAU",
      title:"Home Care",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters:["Hindustan unilever",
                  "Godrej",
                  "Nirma",
                  "Procter & Gamble",
                  "Reckitt Benckiser"    
          ],
      productTags: ["Laundry detergents (powder, liquid and tablet)",
          "Fabric conditioners",
          "Dishwashing detergents (liquid and tablet)",
         " Hard floor and surface cleaners",
          "Carpet cleaners",
          "Oven cleaners",
          "Air fresheners"]
  },
  {   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jzzTKtx1E-gr2g4ci-qHkforVpf8kc-Ogw&usqp=CAU",
      title:"Fitness Supplements",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters:["Muscle Blaze",
                  "Endura Mass",
                  "Prontinex",
                  "Procter & Gamble",
                  "Reckitt Benckiser",
                  "Muscle Mass",
                  "Whey",
                  "Truebasics",
                  "1MG",    
          ],
      productTags: ["Weight gain", "weight Loss"]
  },
  {   
      _id: uuid(),
      id:9,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2c8BMnEMuEKwhQtjdopnM88qMlm_BkNDrQ&usqp=CAU",
      title:"Elderly Care",
      gif:"https://pro2-bar-s3-cdn-cf1.myportfolio.com/93bea8ef802a988ed8ab44889dc82b83/c4fb2bc4-9f30-4899-afee-d8ea5eeca43b_rw_1200.gif?h=725162a6e84eb9419ea4c08f456f04c2",
      categoryStatus:"top",
      categoryIcon:"https://healthicons.org/icons/svg/filled/conditions/back_pain.svg",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters:["Tenura","step Neuro","NRS HealthCare", "Elder ease", "Trionic"],
      productTags: ["Shower Chair with Backrest",
          "Portable Conversion Commode",
          "Toilet Squat Stool",
          "Wall-Mounted Indian Conversion Commode",
          "Folding Commode Chair with Castors",
          "Stainless Steel Grab Bars",
          "Air Pump Mattress for Bed Sores",
          "Bedside Rail"]
  },
  {   
      _id: uuid(),
      id:10,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNT3ozmvVdMCtsL8kgt-1vSjukFvJ8xHID7w&usqp=CAU",
      title:"Surgicals and Dressings",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters:["Bactigras Dressing","Ent dressings","NRS HealthCare"],
      productTags:["Collagen Film Dressing",
          "Gelatin Sponge Porcine Origin",
          "Sterile Porous Collagen Dressing Sheet",
          "Hospital Dressing Trolley",
          "Surgical Isolation Gown",
          "N95 Mask",
          "Collagen Burn Sheet",
          "Hycoloid Hydrocolloid Wound Dressing"]
  },
  {   
      _id: uuid(),
      id:11,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavKV4sOSdmA5_Qqt8k8wGBVeclUGSr0rFlw&usqp=CAU",
      title:"Pet Care",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      brandfilters:["Canponus wet wipes pvt ltd","Paws India","Pet Vanity", "Liveath BioPharma"],
      productTags:["PetHex Anti Bacterial and Anti Fungal Shampoo for Dogs",
          "Petcare Notix Green Shampoo",
          "Petcare Proviboost Syrup",
          "Pet Joint Supplement for Dogs",
          "Petcare Livoferol Pet Supplement",
          "Petcare Seledruff Shampoo",
          "Petcare Notix Scrub-Liquid Shampoo for Dogs",
          "Pet food"
      ]
  },
   {   
        _id: uuid(),
        id:12,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavKV4sOSdmA5_Qqt8k8wGBVeclUGSr0rFlw&usqp=CAU",
        title:"Fitness & Supplements",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        brandfilters:["Canponus wet wipes pvt ltd","Paws India","Pet Vanity", "Liveath BioPharma"],
        productTags:["PetHex Anti Bacterial and Anti Fungal Shampoo for Dogs",
            "Petcare Notix Green Shampoo",
            "Petcare Proviboost Syrup",
            "Pet Joint Supplement for Dogs",
            "Petcare Livoferol Pet Supplement",
            "Petcare Seledruff Shampoo",
            "Petcare Notix Scrub-Liquid Shampoo for Dogs",
            "Pet food"
        ]
    },
    {   
        _id: uuid(),
        id:11,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7l8Nq5-mRzo-0uSkGpr2D1b7D3mWY8xdzQ&usqp=CAU",
        title:"Obesity",
        gif:"https://www.medylife.com/blog/wp-content/uploads/2017/10/Obesity-GIF.gif",
        categoryStatus:"top",
        categoryIcon:"https://healthicons.org/icons/svg/outline/conditions/overweight.svg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        brandfilters:["Mega","Keto","VLCC"],
        productTags:["Garcinia Cambogia Extract",
            "Hydroxycut",
            "Caffeine",
          ]
      },
      {   
        _id: uuid(),
        id:12,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUD-4d0bUWkWC_dmvvez-LscgNs54X1Kuh1IQVIrcUcmMblxqath22X6j60lQy4XoODU4&usqp=CAU",
        title:"Covid-19",
        gif:"https://healthmatters.nyp.org/wp-content/uploads/2021/01/Vaccine-Facts-2_thumbnail-GIF.gif",
        categoryStatus:"top",
        categoryIcon:"https://img.icons8.com/external-flatart-icons-flat-flatarticons/50/000000/external-medical-mask-coronavirus-covid19-flatart-icons-flat-flatarticons.png",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        brandfilters:["CoviSelf","Seloi","3M company"],
        productTags:["Thermometer",
            "Face Mask",
            "Diagnostic Test Kit",
          ]
      },
      {   
        _id: uuid(),
        id:14,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkJMn9twUy7V_4cxZWOsAKnVyhsL6OEpGAg&usqp=CAU",
        title:"Woman",
        gif:"https://www.countdown2030europe.org/storage/app/media/uploaded-files/GIF2.gif",
        categoryStatus:"top",
        categoryIcon:"https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/50/000000/external-medical-mask-covid19-prevention-photo3ideastudio-flat-photo3ideastudio.png",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        brandfilters:["kairali","Himalaya"],
        productTags:["Health supplements"
          ]
      },
      {   
        _id: uuid(),
        id:15,
        img:"https://cdn.cdnparenting.com/articles/2018/04/1066815683-H.webp",
        title:"NewBorn",
        gif:"https://i.gifer.com/6yKa.gif",
        categoryStatus:"top",
        categoryIcon:"https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/000000/external-baby-baby-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-2.png",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        brandfilters:["Huggies","Johnson's baby"],
        productTags:["Diapers",
            "oil",
            "shampoo",
          ]
      },
      {   
        _id: uuid(),
        id:16,
        img:"https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2020/01/mildHeartAttack-866257238-770x553-650x428.jpg",
        title:"Heart",
        gif:"https://www.sgu.edu/blog/medical/wp-content/uploads/sites/2/2018/02/What-Is-Heart-Disease_-Cardiovascular-Health-Problems-Explained.gif",
        categoryStatus:"top",
        categoryIcon:"https://img.icons8.com/offices/50/000000/medical-heart.png",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        brandfilters:["1MG","Himalya"],
        productTags:["Heart supplements"
          ]
      }
]
 