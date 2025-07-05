import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynaecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynaecologist",
    image: Gynaecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Richard James is an experienced general physician committed to providing holistic and evidence-based primary care. He emphasizes preventive medicine, early detection of illnesses, and patient education to promote long-term health and well-being. Known for his compassionate approach, Dr. James builds strong patient relationships and delivers personalized care for a wide range of acute and chronic conditions.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynaecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Emily Larson is a dedicated gynaecologist with a deep passion for women’s health. She specializes in providing patient-centered care through preventive screenings, personalized treatment plans, and compassionate guidance through every stage of womanhood. Dr. Larson is committed to empowering her patients with knowledge and support to make informed decisions about their reproductive and overall health.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Sarah Patel is a dedicated dermatologist specializing in the diagnosis and treatment of skin, hair, and nail disorders. Known for his precision and patient-centered approach, he combines clinical expertise with modern dermatological advancements to deliver effective and personalized care. Dr. Patel is committed to helping patients achieve optimal skin health through tailored treatments and ongoing support.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Christopher Lee is a compassionate pediatrician devoted to the health and well-being of children from infancy through adolescence. With a warm, approachable nature and a focus on preventive care, he ensures young patients receive attentive, comprehensive treatment. Dr. Lee partners closely with families to support each child’s physical, emotional, and developmental needs at every stage.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Jennifer Garcia is a skilled neurologist dedicated to diagnosing and treating complex disorders of the nervous system. With a strong emphasis on personalized care, she combines advanced medical knowledge with a patient-first approach to manage conditions affecting the brain, spine, and nerves. Her goal is to help patients achieve improved neurological health and a better quality of life through early detection and evidence-based treatment.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Andrew Williams is a dedicated neurologist specializing in the diagnosis and management of neurological conditions affecting the brain, spinal cord, and nervous system. With a focus on patient-centered care, he blends clinical expertise with the latest advancements in neurology to provide accurate diagnoses and effective treatment plans. Dr. Williams is committed to helping his patients maintain optimal neurological health and lead fulfilling lives.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Christopher Davis is an experienced general physician known for his comprehensive approach to patient care. He emphasizes preventive healthcare, early diagnosis, and evidence-based treatment strategies to manage acute and chronic illnesses. With a calm and approachable demeanor, Dr. Davis builds lasting relationships with patients, promoting long-term wellness and health education.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynaecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Timothy White is a dedicated gynaecologist with a strong focus on women's reproductive health and wellness. He specializes in prenatal care, menstrual disorders, and minimally invasive gynecologic procedures. Known for his empathetic communication and patient-first approach, Dr. White ensures every woman receives personalized and respectful care throughout all stages of life.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Ava Mitchell is a skilled dermatologist dedicated to promoting healthy skin through advanced diagnostic methods and personalized care. She specializes in treating a wide range of skin conditions with a focus on both medical and cosmetic dermatology. Dr. Mitchell is committed to helping patients feel confident in their skin by delivering compassionate, effective treatment solutions tailored to individual needs.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Jeffrey King is a dedicated pediatrician committed to the health and well-being of children from infancy through adolescence. With a compassionate and child-friendly approach, he focuses on preventive care, early development monitoring, and the treatment of both acute and chronic pediatric conditions. Dr. King strives to create a welcoming environment where young patients feel safe and supported throughout their healthcare journey.",
    fees: 40,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Zoe Kelly is an experienced gastroenterologist specializing in the diagnosis and treatment of digestive system disorders. She is committed to providing patient-centered care with a focus on digestive health, nutritional guidance, and minimally invasive procedures. Dr. Kelly takes a thorough and compassionate approach to managing conditions such as IBS, acid reflux, and liver diseases, helping patients improve their quality of life through personalized treatment plans.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Patrick Harris",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Patrick Harris is a skilled neurologist dedicated to diagnosing and treating a wide range of neurological disorders. With a focus on brain, spinal cord, and nerve-related conditions, he combines clinical precision with compassionate care. Dr. Harris is committed to helping patients manage complex neurological issues such as epilepsy, stroke, migraines, and neurodegenerative diseases through evidence-based and individualized treatment strategies.",
    fees: 50,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Chloe Evans",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Chloe Evans is a dedicated general physician known for her patient-focused approach and comprehensive medical knowledge. She specializes in diagnosing and managing a wide spectrum of acute and chronic conditions. Dr. Evans emphasizes preventive care and promotes healthy lifestyle choices to support long-term wellness. Her attentive and empathetic care ensures patients feel heard, understood, and supported at every stage of their health journey.",
    fees: 50,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Ryan Martinez",
    image: doc14,
    speciality: "Gynaecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Ryan Martinez is a compassionate gynaecologist committed to delivering exceptional women’s healthcare. With expertise in reproductive health, prenatal care, and minimally invasive procedures, he provides personalized treatment plans tailored to each patient's needs. Dr. Martinez prioritizes open communication and patient education, empowering women to make informed decisions about their health and well-being.",
    fees: 60,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amelia Hill",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Amelia Hill is a skilled dermatologist dedicated to enhancing skin health through evidence-based treatments and individualized care. With a focus on both medical and cosmetic dermatology, she treats a wide range of skin conditions while promoting confidence and long-term wellness. Dr. Hill combines clinical expertise with a patient-centered approach to deliver effective and compassionate dermatological care.",
    fees: 30,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
];
