// Dr. Vinita Khemani Website Data

export const doctorInfo = {
  name: "Dr. Vinita Khemani",
  title: "Consultant Gynecologist & Obstetrician",
  qualifications: ["MBBS", "DGO", "DNB (OBGYN)"],
  experience: 21,
  patientsTreated: "10,000+",
  phone: "+91-9903588155",
  email: "drvinitakhemani@gmail.com",
  description: "One of Kolkata's most trusted obstetricians and gynecologists with over 21 years of extensive clinical experience in helping thousands of patients achieve optimal women's health.",
  philosophy: "Every woman deserves personalized, compassionate care. My approach combines medical expertise with genuine empathy to support you through every stage of life.",
  image: "/images/doctor-hero.jpg",
};

export const clinics = [
  {
    id: "healing-touch",
    name: "Healing Touch",
    address: "59, Bangur Avenue, Block A (Near Shyam Mandir), Kolkata",
    phone: "+91-9903588155",
    timings: [
      { days: "Monday, Wednesday", time: "11:00 AM - 1:00 PM, 6:00 PM - 8:00 PM" },
      { days: "Tuesday, Friday", time: "11:00 AM - 4:00 PM" },
      { days: "Saturday", time: "11:00 AM - 5:00 PM" },
      { days: "Thursday, Sunday", time: "Closed" },
    ],
    mapLink: "https://maps.google.com/?q=Healing+Touch+Bangur+Avenue+Kolkata",
  },
  {
    id: "apollo-clinic",
    name: "Apollo Clinic",
    address: "Signature Building, Nawapara, Chinar Park, New Town, Kolkata",
    phone: "+91-9903588155",
    timings: [
      { days: "Monday - Saturday", time: "10:00 AM - 1:00 PM, 5:00 PM - 8:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    mapLink: "https://maps.google.com/?q=Apollo+Clinic+Chinar+Park+Kolkata",
  },
  {
    id: "charnock-hospital",
    name: "Charnock Hospital",
    address: "Tegharia, Kolkata",
    phone: "+91-9903588155",
    timings: [
      { days: "Monday - Saturday", time: "By Appointment Only" },
      { days: "Sunday", time: "Closed" },
    ],
    mapLink: "https://maps.google.com/?q=Charnock+Hospital+Tegharia+Kolkata",
  },
];

export const services = [
  {
    id: "gynecology",
    title: "Gynecology Consultation",
    shortTitle: "Gynecology",
    description: "Comprehensive care for all women's health concerns including routine check-ups, menstrual problems, and preventive care.",
    icon: "PcosIcon",
    features: [
      "Routine gynecological check-ups",
      "Menstrual disorder management",
      "PCOS/PCOD treatment",
      "Cervical cancer screening",
      "Preventive health counseling",
    ],
    image: "/images/service-gynecology.jpg",
  },
  {
    id: "obstetrics",
    title: "Obstetrics & Pregnancy Care",
    shortTitle: "Pregnancy Care",
    description: "Complete pregnancy care from conception to delivery, ensuring the health and well-being of both mother and baby.",
    icon: "Baby",
    features: [
      "Normal pregnancy care",
      "Antenatal check-ups",
      "Nutrition counseling",
      "Delivery planning",
      "Postnatal care",
    ],
    image: "/images/service-pregnancy.jpg",
  },
  {
    id: "high-risk-pregnancy",
    title: "High-Risk Pregnancy Care",
    shortTitle: "High-Risk Pregnancy",
    description: "Specialized care and monitoring for complex pregnancies requiring extra attention and expertise.",
    icon: "HeartPulse",
    features: [
      "Gestational diabetes management",
      "Preeclampsia care",
      "Multiple pregnancy care",
      "Advanced maternal age pregnancy",
      "Previous pregnancy complication management",
    ],
    image: "/images/service-highrisk.jpg",
  },
  {
    id: "fertility",
    title: "Fertility Treatment",
    shortTitle: "Fertility",
    description: "Advanced fertility solutions helping couples achieve their dream of parenthood with personalized treatment plans.",
    icon: "FertilityIcon",
    features: [
      "Infertility evaluation",
      "Ovulation induction",
      "IUI support",
      "IVF coordination",
      "Male factor infertility management",
    ],
    image: "/images/service-fertility.jpg",
  },
  {
    id: "laparoscopy",
    title: "Laparoscopic Surgery",
    shortTitle: "Laparoscopy",
    description: "Minimally invasive surgical procedures for faster recovery and better outcomes.",
    icon: "LaparoscopyIcon",
    features: [
      "Diagnostic laparoscopy",
      "Ovarian cyst removal",
      "Fibroid surgery",
      "Hysterectomy",
      "Ectopic pregnancy management",
    ],
    image: "/images/service-laparoscopy.jpg",
  },
  {
    id: "menopause",
    title: "Menopause Care",
    shortTitle: "Menopause",
    description: "Comprehensive support for women transitioning through menopause, managing symptoms and maintaining quality of life.",
    icon: "Flower2",
    features: [
      "Hormone replacement therapy",
      "Osteoporosis prevention",
      "Symptom management",
      "Lifestyle counseling",
      "Bone health monitoring",
    ],
    image: "/images/service-menopause.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sharmila Sinha",
    role: "Mother",
    location: "Kolkata",
    condition: "High-risk pregnancy",
    outcome: "Healthy baby girl",
    rating: 5,
    text: "Dr. Vinita Khemani is an angel for us. For her we were blessed with our little princess on Mother's Day. I came to mam when my 3rd month was running with excessive vomiting. Her care and expertise made all the difference.",
    image: "/images/patient-1.jpg",
  },
  {
    id: 2,
    name: "Jayosree Saha",
    role: "Mother",
    location: "Kolkata",
    condition: "Normal delivery",
    outcome: "Baby boy",
    rating: 5,
    text: "I had a son on 10 September from Dr. Vinita Khemani Mam. Mam is very good doctor and very careful. I'm very satisfied. Her behavior is very good and she is very helpful. Thank you mam, thank you so much!",
    image: "/images/patient-2.jpg",
  },
  {
    id: 3,
    name: "Shanta Ghatak",
    role: "Patient",
    location: "Kolkata",
    condition: "Hysterectomy",
    outcome: "Pain-free life",
    rating: 5,
    text: "She is not just a gynaecologist but a manifestation of the Almighty. She performed my hysterectomy a few days ago and freed me from my years of pain and discomfort. I am highly satisfied.",
    image: "/images/patient-3.jpg",
  },
  {
    id: 4,
    name: "Khushboo Khemka",
    role: "Mother",
    location: "Kolkata",
    condition: "Pregnancy care",
    outcome: "Healthy delivery",
    rating: 5,
    text: "Amazing doctor, very patient and friendly. Always available to clear any minor doubts and she carries a very pleasant and positive feeling. Every time she came to meet me in the hospital post delivery, I felt reassured.",
    image: "/images/patient-4.jpg",
  },
  {
    id: 5,
    name: "Soma Saha",
    role: "Patient",
    location: "Kolkata",
    condition: "Fertility treatment",
    outcome: "Successful pregnancy",
    rating: 5,
    text: "I started seeing Maam because of period problems and later on she also treated me for fertility. Just 2 weeks back I delivered. Before that, I changed two doctors but nobody gripped the issue like Dr. Khemani.",
    image: "/images/patient-5.jpg",
  },
];

export const faqs = [
  {
    question: "How do I book an appointment with Dr. Vinita Khemani?",
    answer: "You can book an appointment through our website's booking form, call us directly at +91-9903588155, or send a WhatsApp message. We recommend booking 1-2 days in advance to secure your preferred time slot.",
    category: "Appointments",
  },
  {
    question: "What are the consultation charges?",
    answer: "Consultation fees vary by clinic location. At Healing Touch and Apollo Clinic, the fee is ₹700. For Charnock Hospital, please contact us for details. We strive to keep our services affordable while maintaining the highest quality of care.",
    category: "Payments",
  },
  {
    question: "What should I bring for my first visit?",
    answer: "Please bring any previous medical reports, prescription lists, current medications, and a valid ID proof. If you have any prior ultrasound reports or blood test results, those would be helpful too.",
    category: "Consultation",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major health insurance plans. Please bring your insurance card and any necessary documents. Our staff will assist you with the insurance claim process.",
    category: "Payments",
  },
  {
    question: "How long does a consultation typically take?",
    answer: "Initial consultations usually take 15-20 minutes, allowing time for discussion of your concerns, examination, and treatment planning. Follow-up appointments are generally shorter, around 10-15 minutes.",
    category: "Consultation",
  },
  {
    question: "Is Dr. Khemani available for emergency consultations?",
    answer: "For emergencies, please visit the nearest hospital emergency room. For urgent but non-emergency concerns, you can contact us via WhatsApp or call, and we will accommodate you as soon as possible.",
    category: "Appointments",
  },
  {
    question: "What is a high-risk pregnancy?",
    answer: "A high-risk pregnancy is one where the mother or baby has an increased chance of health problems. Factors include advanced maternal age (35+), pre-existing medical conditions, multiple pregnancies, or previous pregnancy complications. Dr. Khemani specializes in managing such cases with extra care and monitoring.",
    category: "Services",
  },
  {
    question: "Do you provide fertility treatment?",
    answer: "Yes, we offer comprehensive fertility evaluation and treatment including ovulation induction, IUI support, and IVF coordination. We work closely with fertility specialists to provide the best care for couples trying to conceive.",
    category: "Services",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Understanding PCOS: Causes, Symptoms, and Treatment Options",
    excerpt: "Polycystic Ovary Syndrome affects millions of women worldwide. Learn about the causes, symptoms, and effective treatment strategies...",
    category: "Gynecological Health",
    date: "January 15, 2026",
    readTime: "5 min read",
    image: "/images/blog-pcos.jpg",
  },
  {
    id: 2,
    title: "Preparing for a Healthy Pregnancy: Essential Tips for Expecting Mothers",
    excerpt: "From preconception planning to the first trimester, discover the key steps to ensure a healthy pregnancy journey...",
    category: "Pregnancy Care",
    date: "January 10, 2026",
    readTime: "7 min read",
    image: "/images/blog-pregnancy.jpg",
  },
  {
    id: 3,
    title: "High-Risk Pregnancy: What You Need to Know",
    excerpt: "Understanding the factors that make a pregnancy high-risk and how specialized care can ensure the best outcomes...",
    category: "High-Risk Pregnancy",
    date: "January 5, 2026",
    readTime: "6 min read",
    image: "/images/blog-highrisk.jpg",
  },
];

export const instagramPosts = [
  {
    id: 1,
    image: "/images/instagram-1.jpg",
    likes: 245,
    comments: 18,
    caption: "Patient education seminar on women's health 🌸",
  },
  {
    id: 2,
    image: "/images/instagram-2.jpg",
    likes: 312,
    comments: 24,
    caption: "Celebrating another successful delivery 💕",
  },
  {
    id: 3,
    image: "/images/instagram-3.jpg",
    likes: 189,
    comments: 12,
    caption: "At the cancer awareness workshop",
  },
  {
    id: 4,
    image: "/images/instagram-4.jpg",
    likes: 276,
    comments: 21,
    caption: "Consultation time - every patient matters",
  },
  {
    id: 5,
    image: "/images/instagram-5.jpg",
    likes: 198,
    comments: 15,
    caption: "Busy day at the clinic 🏥",
  },
  {
    id: 6,
    image: "/images/instagram-6.jpg",
    likes: 334,
    comments: 28,
    caption: "Thank you for the recognition 🙏",
  },
];

export const stats = [
  { label: "Years Experience", value: 21, suffix: "+" },
  { label: "Patients Treated", value: 10000, suffix: "+" },
  { label: "Clinic Locations", value: 3, suffix: "" },
  { label: "Success Rate", value: 99, suffix: "%" },
];

export const whyChoosePoints = [
  {
    title: "Personalized Care",
    description: "Every patient receives individualized attention and customized treatment plans tailored to their unique needs.",
    icon: "UserCheck",
  },
  {
    title: "Advanced Technology",
    description: "Modern diagnostic equipment and minimally invasive surgical techniques for accurate diagnosis and faster recovery.",
    icon: "Cpu",
  },
  {
    title: "Convenient Locations",
    description: "Three strategically located clinics across Kolkata for easy accessibility from any part of the city.",
    icon: "MapPin",
  },
  {
    title: "Flexible Timings",
    description: "Evening and weekend appointments available to accommodate your busy schedule.",
    icon: "Clock",
  },
  {
    title: "Affordable Care",
    description: "Quality healthcare accessible to all income groups without compromising on standards.",
    icon: "Wallet",
  },
  {
    title: "21+ Years Experience",
    description: "Two decades of clinical excellence with thousands of successful patient outcomes.",
    icon: "Award",
  },
];
