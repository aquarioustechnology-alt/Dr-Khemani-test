import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Calendar, CheckCircle2, Clock, Shield, Heart, ArrowRight } from 'lucide-react';

// Treatment data with full content
const treatmentData: Record<string, {
    title: string;
    subtitle: string;
    category: string;
    heroImage: string;
    overview: string;
    symptoms: string[];
    causes: string[];
    treatmentOptions: { title: string; description: string }[];
    benefits: string[];
    recovery: { title: string; description: string }[];
    whyDrKhemani: string[];
    faqs: { question: string; answer: string }[];
}> = {
    'pcos': {
        title: 'PCOS Treatment & Management',
        subtitle: 'Comprehensive care for Polycystic Ovary Syndrome',
        category: 'Gynecology',
        heroImage: '/images/pcos-treatment.jpg',
        overview: 'Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting 1 in 10 women of reproductive age. Dr. Vinita Khemani provides personalized, evidence-based treatment plans that address hormonal imbalances, metabolic concerns, and fertility issues associated with PCOS.',
        symptoms: [
            'Irregular or missed menstrual periods',
            'Excess facial and body hair (hirsutism)',
            'Acne and oily skin',
            'Weight gain, especially around the abdomen',
            'Thinning hair or male-pattern baldness',
            'Difficulty getting pregnant',
            'Dark patches of skin (acanthosis nigricans)',
            'Mood swings, anxiety, or depression'
        ],
        causes: [
            'Insulin resistance leading to higher androgen levels',
            'Genetic predisposition (family history)',
            'Chronic low-grade inflammation',
            'Hormonal imbalances affecting ovulation',
            'Lifestyle factors including diet and physical activity'
        ],
        treatmentOptions: [
            {
                title: 'Lifestyle Modifications',
                description: 'Personalized diet plans, exercise routines, and stress management techniques. Even 5-10% weight loss can significantly improve symptoms and restore regular ovulation.'
            },
            {
                title: 'Hormonal Therapy',
                description: 'Birth control pills to regulate menstrual cycles, reduce androgen levels, and manage acne and unwanted hair growth.'
            },
            {
                title: 'Insulin-Sensitizing Medications',
                description: 'Metformin and similar medications to improve insulin sensitivity, which can help restore ovulation and aid weight management.'
            },
            {
                title: 'Fertility Treatments',
                description: 'Ovulation induction with Clomiphene or Letrozole for women trying to conceive. Advanced options like IUI or IVF referrals when needed.'
            },
            {
                title: 'Cosmetic Treatments',
                description: 'Guidance on managing excess hair growth and acne, including medical treatments and cosmetic procedures.'
            }
        ],
        benefits: [
            'Restored regular menstrual cycles',
            'Improved fertility outcomes',
            'Reduced symptoms like acne and excess hair',
            'Better metabolic health and weight management',
            'Lower risk of long-term complications like Type 2 diabetes',
            'Enhanced quality of life and emotional well-being'
        ],
        recovery: [
            {
                title: 'Immediate Care',
                description: 'Initial consultation includes comprehensive hormone testing and ultrasound evaluation for accurate diagnosis.'
            },
            {
                title: 'Ongoing Management',
                description: 'Regular follow-ups every 3-6 months to monitor progress and adjust treatment plans as needed.'
            },
            {
                title: 'Long-term Support',
                description: 'PCOS is a lifelong condition that requires ongoing management. Dr. Khemani provides continuous support through all life stages.'
            }
        ],
        whyDrKhemani: [
            '16+ years of experience treating hormonal disorders',
            'Holistic approach addressing physical and emotional aspects',
            'Personalized treatment plans based on individual symptoms and goals',
            'Strong network of specialists for collaborative care',
            'Compassionate, patient-centered approach'
        ],
        faqs: [
            {
                question: 'Can PCOS be cured permanently?',
                answer: 'While PCOS cannot be completely cured, it can be effectively managed with the right treatment approach. Many women achieve regular cycles and successful pregnancies with proper care.'
            },
            {
                question: 'Will I be able to get pregnant with PCOS?',
                answer: 'Yes! Many women with PCOS successfully conceive with appropriate treatment. Dr. Khemani specializes in fertility management for PCOS patients.'
            },
            {
                question: 'How long does treatment take to show results?',
                answer: 'Most patients notice improvements in symptoms within 3-6 months of starting treatment, though this varies based on individual factors.'
            }
        ]
    },
    'hysterectomy': {
        title: 'Laparoscopic Hysterectomy',
        subtitle: 'Minimally invasive uterus removal surgery',
        category: 'Laparoscopic Surgery',
        heroImage: '/images/hysterectomy.jpg',
        overview: 'Laparoscopic hysterectomy is a minimally invasive surgical procedure to remove the uterus through small incisions. Dr. Vinita Khemani specializes in advanced laparoscopic techniques that offer faster recovery, less pain, and minimal scarring compared to traditional open surgery.',
        symptoms: [
            'Heavy or prolonged menstrual bleeding',
            'Chronic pelvic pain',
            'Uterine fibroids causing symptoms',
            'Endometriosis not responding to other treatments',
            'Uterine prolapse',
            'Abnormal uterine bleeding',
            'Certain gynecological cancers or precancers'
        ],
        causes: [
            'Uterine fibroids (most common reason)',
            'Endometriosis affecting quality of life',
            'Severe adenomyosis',
            'Uterine prolapse',
            'Chronic pelvic inflammatory disease',
            'Cancer or precancerous conditions of the uterus, cervix, or ovaries'
        ],
        treatmentOptions: [
            {
                title: 'Total Laparoscopic Hysterectomy (TLH)',
                description: 'Complete removal of the uterus and cervix through small abdominal incisions using a laparoscope. Most common approach for benign conditions.'
            },
            {
                title: 'Laparoscopic Supracervical Hysterectomy',
                description: 'Removal of the uterus while preserving the cervix. May be appropriate for some patients after thorough discussion.'
            },
            {
                title: 'Laparoscopic-Assisted Vaginal Hysterectomy (LAVH)',
                description: 'Combination approach where laparoscopy assists in vaginal removal of the uterus.'
            }
        ],
        benefits: [
            'Smaller incisions (0.5-1 cm) vs. large abdominal incision',
            'Faster recovery - 2-3 weeks vs. 6-8 weeks',
            'Significantly less post-operative pain',
            'Reduced blood loss during surgery',
            'Lower risk of infection',
            'Shorter hospital stay (same day or 1-2 nights)',
            'Minimal visible scarring',
            'Better visualization for the surgeon'
        ],
        recovery: [
            {
                title: 'Hospital Stay',
                description: 'Most patients go home the same day or after one night. Immediate post-op care includes pain management and monitoring.'
            },
            {
                title: 'First 1-2 Weeks',
                description: 'Light walking encouraged. Avoid heavy lifting. Most women can return to desk jobs within 1-2 weeks.'
            },
            {
                title: '2-4 Weeks',
                description: 'Gradual return to normal activities. Light exercise may be resumed. Follow-up appointment with Dr. Khemani.'
            },
            {
                title: '4-6 Weeks',
                description: 'Full internal healing. Most activities can be resumed. Sexual activity may be permitted after clearance.'
            }
        ],
        whyDrKhemani: [
            'Expert laparoscopic surgeon with thousands of successful procedures',
            'Fellowship-trained in minimally invasive gynecological surgery',
            'State-of-the-art equipment at partner hospitals',
            'Excellent track record of patient outcomes',
            'Comprehensive pre and post-operative care'
        ],
        faqs: [
            {
                question: 'Will I go through menopause after hysterectomy?',
                answer: 'If your ovaries are preserved, you will not go through surgical menopause. The ovaries continue to produce hormones. Only if ovaries are removed will menopause occur.'
            },
            {
                question: 'How long is the surgery?',
                answer: 'Laparoscopic hysterectomy typically takes 90-120 minutes, depending on the complexity of your case.'
            },
            {
                question: 'When can I drive after surgery?',
                answer: 'Most patients can drive after 1-2 weeks, once they are off pain medication and can move comfortably.'
            }
        ]
    },
    'ovarian-cystectomy': {
        title: 'Ovarian Cystectomy',
        subtitle: 'Fertility-preserving cyst removal surgery',
        category: 'Laparoscopic Surgery',
        heroImage: '/images/ovarian-cyst.jpg',
        overview: 'Ovarian cystectomy is a surgical procedure to remove ovarian cysts while preserving healthy ovarian tissue and fertility. Dr. Vinita Khemani specializes in laparoscopic cystectomy, ensuring minimal trauma to the ovaries and optimal preservation of ovarian function.',
        symptoms: [
            'Pelvic pain or pressure',
            'Bloating or abdominal fullness',
            'Pain during intercourse',
            'Irregular menstrual cycles',
            'Sudden severe abdominal pain (if cyst ruptures or twists)',
            'Difficulty getting pregnant',
            'Frequent urination or difficulty emptying bladder'
        ],
        causes: [
            'Functional cysts (related to menstrual cycle)',
            'Endometriomas (chocolate cysts from endometriosis)',
            'Dermoid cysts (present from birth)',
            'Cystadenomas (develop from ovarian tissue)',
            'PCOS-related multiple small cysts',
            'Rarely, cancer or borderline tumors'
        ],
        treatmentOptions: [
            {
                title: 'Laparoscopic Ovarian Cystectomy',
                description: 'Minimally invasive removal of the cyst through small incisions, preserving healthy ovarian tissue. Preferred approach for most cysts.'
            },
            {
                title: 'Open Cystectomy (Laparotomy)',
                description: 'Reserved for very large cysts, suspected malignancy, or complex cases requiring larger surgical access.'
            },
            {
                title: 'Cyst Aspiration',
                description: 'Draining the cyst contents, typically used only in specific situations as cysts may recur.'
            }
        ],
        benefits: [
            'Fertility preservation - healthy ovarian tissue is carefully maintained',
            'Faster recovery (1-2 weeks vs. 4-6 weeks for open surgery)',
            'Less post-operative pain and discomfort',
            'Smaller scars and better cosmetic outcome',
            'Lower risk of adhesion formation',
            'Same-day or overnight hospital stay',
            'Quicker return to work and daily activities'
        ],
        recovery: [
            {
                title: 'Day of Surgery',
                description: 'Most patients go home the same day. Pain is managed with medication. Rest and limited activity.'
            },
            {
                title: 'First Week',
                description: 'Light walking encouraged. Avoid strenuous activities. Most discomfort subsides. Work from home may be possible.'
            },
            {
                title: '2-3 Weeks',
                description: 'Return to desk work. Light exercise can resume. Follow-up appointment to check healing.'
            },
            {
                title: '4-6 Weeks',
                description: 'Full internal healing. Normal exercise and activities resume. Sexual activity permitted after clearance.'
            }
        ],
        whyDrKhemani: [
            'Expert at fertility-preserving surgical techniques',
            'Minimizes damage to healthy ovarian tissue',
            'Thorough approach with careful pathological examination',
            'Works closely with fertility specialists when needed',
            'Compassionate pre and post-operative counseling'
        ],
        faqs: [
            {
                question: 'Will cystectomy affect my fertility?',
                answer: 'When performed by an experienced surgeon like Dr. Khemani, cystectomy aims to preserve fertility. The goal is to remove only the cyst while maintaining healthy ovarian tissue.'
            },
            {
                question: 'Can ovarian cysts come back after surgery?',
                answer: 'Some types of cysts can recur. Dr. Khemani provides guidance on monitoring and preventive measures based on your specific type of cyst.'
            },
            {
                question: 'How do I know if my cyst needs surgery?',
                answer: 'Not all cysts require surgery. Dr. Khemani evaluates cyst size, type, symptoms, and your individual situation to recommend the best approach.'
            }
        ]
    },
    'emergency-caesarean': {
        title: 'Emergency Caesarean Section',
        subtitle: 'Expert care when every second counts',
        category: 'Obstetrics',
        heroImage: '/images/caesarean.jpg',
        overview: 'An emergency caesarean section is performed when urgent delivery is needed to protect the health of mother and baby. Dr. Vinita Khemani is highly experienced in managing obstetric emergencies, ensuring the safest possible outcomes in critical situations.',
        symptoms: [
            'Fetal distress (abnormal heart rate)',
            'Cord prolapse',
            'Placental abruption',
            'Uterine rupture',
            'Failure to progress in labor',
            'Severe preeclampsia or eclampsia',
            'Maternal hemorrhage'
        ],
        causes: [
            'Sudden changes in fetal heart rate patterns',
            'Umbilical cord complications',
            'Placenta separating from uterine wall',
            'Labor not progressing despite interventions',
            'Baby in difficult position for vaginal delivery',
            'Maternal medical emergencies'
        ],
        treatmentOptions: [
            {
                title: 'Emergency C-Section',
                description: 'Immediate surgical delivery through an abdominal incision when time is critical. Performed within 30 minutes of decision in true emergencies.'
            },
            {
                title: 'Urgent C-Section',
                description: 'Required delivery within 30-60 minutes for maternal or fetal compromise that is not immediately life-threatening.'
            }
        ],
        benefits: [
            'Life-saving intervention for mother and baby',
            'Expert surgical technique minimizing complications',
            'State-of-the-art hospital facilities',
            '24/7 availability for emergency situations',
            'Coordinated care with neonatology team',
            'Comprehensive post-operative care'
        ],
        recovery: [
            {
                title: 'Hospital Stay',
                description: '2-4 days hospital stay for monitoring of both mother and baby. Pain management and wound care initiated.'
            },
            {
                title: 'First 2 Weeks',
                description: 'Limited mobility, focus on wound healing and breastfeeding support. Avoid lifting anything heavier than your baby.'
            },
            {
                title: '2-6 Weeks',
                description: 'Gradual return to light activities. Post-natal check-up at 6 weeks. Emotional support as needed.'
            },
            {
                title: '6 Weeks+',
                description: 'Most women feel recovered. Full activities can resume. Family planning discussion if desired.'
            }
        ],
        whyDrKhemani: [
            '16+ years managing high-risk pregnancies and obstetric emergencies',
            'Available at multiple hospital locations across Kolkata',
            'Calm, decisive approach in emergency situations',
            'Strong collaboration with anesthesia and neonatal teams',
            'Excellent surgical outcomes and patient safety record'
        ],
        faqs: [
            {
                question: 'How quickly can an emergency C-section be performed?',
                answer: 'In true emergencies, delivery can occur within 15-30 minutes from the decision. Our hospital teams are trained for rapid response.'
            },
            {
                question: 'Can I have a vaginal delivery after an emergency C-section?',
                answer: 'Many women can safely attempt vaginal birth after cesarean (VBAC). Dr. Khemani evaluates each case individually based on your specific circumstances.'
            },
            {
                question: 'Will my scar be bigger than a planned C-section?',
                answer: 'While emergency situations may require faster surgical approach, Dr. Khemani aims for the same careful closure technique used in planned procedures.'
            }
        ]
    },
    'hysteroscopy': {
        title: 'Hysteroscopy',
        subtitle: 'Minimally invasive uterine examination and treatment',
        category: 'Gynecology',
        heroImage: '/images/hysteroscopy.jpg',
        overview: 'Hysteroscopy is a procedure that allows direct visualization and treatment of conditions inside the uterus using a thin, lighted scope. Dr. Vinita Khemani performs both diagnostic and operative hysteroscopy to evaluate and treat various uterine conditions.',
        symptoms: [
            'Abnormal uterine bleeding',
            'Heavy or prolonged periods',
            'Bleeding between periods',
            'Postmenopausal bleeding',
            'Infertility or recurrent miscarriages',
            'Abnormal findings on ultrasound',
            'IUD removal complications'
        ],
        causes: [
            'Uterine polyps',
            'Submucosal fibroids',
            'Uterine septum or other structural abnormalities',
            'Asherman syndrome (uterine scarring)',
            'Endometrial hyperplasia',
            'Need for endometrial biopsy'
        ],
        treatmentOptions: [
            {
                title: 'Diagnostic Hysteroscopy',
                description: 'Visual examination of the uterine cavity to identify abnormalities. Often combines with biopsy collection.'
            },
            {
                title: 'Operative Hysteroscopy',
                description: 'Treatment of identified conditions including polyp removal, fibroid resection, septum division, and adhesion removal.'
            },
            {
                title: 'Office Hysteroscopy',
                description: 'Quick diagnostic procedure performed in office setting with minimal discomfort for straightforward cases.'
            }
        ],
        benefits: [
            'Direct visualization of uterine cavity',
            'No abdominal incisions required',
            'Outpatient procedure - go home same day',
            'Quick recovery - return to work in 1-2 days',
            'Can diagnose and treat in same procedure',
            'Less risk compared to major surgery',
            'Improved fertility outcomes for uterine issues'
        ],
        recovery: [
            {
                title: 'Same Day',
                description: 'Procedure takes 15-60 minutes. Mild cramping expected. Can go home within hours.'
            },
            {
                title: 'First 24-48 Hours',
                description: 'Light spotting normal. Mild discomfort managed with pain relievers. Rest recommended.'
            },
            {
                title: '3-7 Days',
                description: 'Return to normal activities. Light bleeding may continue for a few days. Avoid tampons and intercourse as advised.'
            }
        ],
        whyDrKhemani: [
            'Expertise in both diagnostic and complex operative hysteroscopy',
            'Latest hysteroscopic equipment for optimal outcomes',
            'Gentle technique minimizing discomfort',
            'Combined approach with laparoscopy when indicated',
            'Focus on fertility preservation for reproductive-age women'
        ],
        faqs: [
            {
                question: 'Is hysteroscopy painful?',
                answer: 'Most patients experience mild cramping similar to menstrual cramps. Pain medication is provided and the procedure is generally well-tolerated.'
            },
            {
                question: 'How long does hysteroscopy take?',
                answer: 'Diagnostic hysteroscopy takes 10-15 minutes. Operative procedures may take 30-60 minutes depending on the complexity.'
            },
            {
                question: 'When should I schedule hysteroscopy?',
                answer: 'The procedure is typically scheduled in the first half of your menstrual cycle (days 6-12) for better visualization.'
            }
        ]
    },
    'laparoscopy': {
        title: 'Advanced Laparoscopic Procedures',
        subtitle: 'State-of-the-art minimally invasive surgery',
        category: 'Laparoscopic Surgery',
        heroImage: '/images/laparoscopy.jpg',
        overview: 'Laparoscopic surgery, also known as keyhole surgery, uses small incisions and specialized instruments to perform complex gynecological procedures with minimal trauma. Dr. Vinita Khemani is a fellowship-trained laparoscopic surgeon offering the full range of minimally invasive gynecological surgeries.',
        symptoms: [
            'Chronic pelvic pain',
            'Painful periods (dysmenorrhea)',
            'Suspected endometriosis',
            'Ovarian cysts or masses',
            'Uterine fibroids',
            'Ectopic pregnancy',
            'Infertility requiring evaluation',
            'Tubal disease or blockage'
        ],
        causes: [
            'Endometriosis',
            'Ovarian cysts (various types)',
            'Uterine fibroids',
            'Pelvic adhesions',
            'Ectopic pregnancy',
            'Unexplained pelvic pain',
            'Tubal pathology'
        ],
        treatmentOptions: [
            {
                title: 'Diagnostic Laparoscopy',
                description: 'Visualization of pelvic organs to identify causes of pain, infertility, or abnormalities found on imaging.'
            },
            {
                title: 'Laparoscopic Cystectomy',
                description: 'Removal of ovarian cysts while preserving healthy ovarian tissue and fertility potential.'
            },
            {
                title: 'Laparoscopic Myomectomy',
                description: 'Removal of uterine fibroids while preserving the uterus for future pregnancy.'
            },
            {
                title: 'Endometriosis Excision',
                description: 'Removal of endometriosis implants and adhesions to relieve pain and improve fertility.'
            },
            {
                title: 'Laparoscopic Hysterectomy',
                description: 'Minimally invasive removal of the uterus with faster recovery than open surgery.'
            },
            {
                title: 'Tubal Surgery',
                description: 'Procedures for ectopic pregnancy, tubal ligation, or tubal reversal.'
            }
        ],
        benefits: [
            'Small incisions (5-10mm) vs. large abdominal incision',
            'Significantly less post-operative pain',
            'Faster recovery and return to activities',
            'Shorter hospital stay (often same-day)',
            'Reduced risk of infection and complications',
            'Better cosmetic outcomes - minimal scarring',
            'Magnified view allows precise surgery',
            'Lower blood loss during surgery'
        ],
        recovery: [
            {
                title: 'Day of Surgery',
                description: 'Most procedures are same-day or overnight. Shoulder tip pain from gas is common and temporary.'
            },
            {
                title: 'First Week',
                description: 'Rest at home. Light walking encouraged. Most can return to desk work by day 4-7.'
            },
            {
                title: '2-3 Weeks',
                description: 'Return to most normal activities. Light exercise may resume. Follow-up with Dr. Khemani.'
            },
            {
                title: '4-6 Weeks',
                description: 'Full recovery for most procedures. Strenuous exercise and heavy lifting can resume.'
            }
        ],
        whyDrKhemani: [
            'Fellowship training in minimally invasive gynecological surgery',
            'Thousands of successful laparoscopic procedures performed',
            'Access to latest laparoscopic technology',
            'Operates at premier hospitals in Kolkata',
            'Experience with complex cases and re-do surgeries'
        ],
        faqs: [
            {
                question: 'Am I a candidate for laparoscopic surgery?',
                answer: 'Most gynecological conditions can be treated laparoscopically. Dr. Khemani evaluates each case individually to recommend the best approach.'
            },
            {
                question: 'How many incisions will I have?',
                answer: 'Typically 3-4 small incisions (5-10mm each), depending on the procedure. These heal quickly with minimal scarring.'
            },
            {
                question: 'What if laparoscopy cannot complete the surgery?',
                answer: 'In rare cases, conversion to open surgery may be necessary for safety. This is discussed during pre-operative counseling.'
            }
        ]
    },
    'obstetrics': {
        title: 'Obstetrics - Pregnancy Care',
        subtitle: 'Comprehensive care from conception to delivery',
        category: 'Obstetrics',
        heroImage: '/images/obstetrics.jpg',
        overview: 'Dr. Vinita Khemani provides complete obstetric care, guiding expectant mothers through every stage of pregnancy. From routine check-ups to high-risk pregnancy management, her compassionate approach ensures both mother and baby receive the best possible care.',
        symptoms: [
            'Confirmed pregnancy',
            'Planning for pregnancy',
            'High-risk pregnancy factors',
            'Multiple pregnancies (twins, triplets)',
            'Previous complicated pregnancies',
            'Gestational diabetes or hypertension',
            'Advanced maternal age pregnancy'
        ],
        causes: [
            'Need for routine prenatal care',
            'Previous cesarean delivery',
            'Medical conditions requiring monitoring',
            'Family history of genetic conditions',
            'IVF or assisted conception pregnancy',
            'Previous pregnancy complications'
        ],
        treatmentOptions: [
            {
                title: 'Routine Prenatal Care',
                description: 'Regular check-ups, ultrasounds, and screenings throughout pregnancy to monitor mother and baby health.'
            },
            {
                title: 'High-Risk Pregnancy Management',
                description: 'Specialized care for pregnancies complicated by medical conditions, multiple gestation, or previous complications.'
            },
            {
                title: 'Normal Vaginal Delivery',
                description: 'Natural childbirth support with pain management options and continuous monitoring.'
            },
            {
                title: 'Cesarean Section',
                description: 'Planned or emergency surgical delivery with expert technique and care.'
            },
            {
                title: 'VBAC (Vaginal Birth After Cesarean)',
                description: 'Evaluation and support for women desiring vaginal delivery after previous C-section.'
            }
        ],
        benefits: [
            'Personalized care plan for each pregnancy',
            'Early detection of potential complications',
            'Access to latest diagnostic technologies',
            'Coordination with specialists when needed',
            'Support for birth preferences while prioritizing safety',
            'Postpartum care and breastfeeding support'
        ],
        recovery: [
            {
                title: 'First Trimester',
                description: 'Initial consultation, dating ultrasound, blood tests, and genetic screening options discussed.'
            },
            {
                title: 'Second Trimester',
                description: 'Anomaly scan, routine monitoring, and preparation for delivery begins.'
            },
            {
                title: 'Third Trimester',
                description: 'More frequent visits, growth monitoring, birth plan discussion, and delivery preparation.'
            },
            {
                title: 'Postpartum',
                description: 'Follow-up at 6 weeks, contraception counseling, and ongoing support for new mothers.'
            }
        ],
        whyDrKhemani: [
            '16+ years of obstetric experience including high-risk pregnancies',
            'Available at multiple hospital locations for continuity of care',
            '24/7 availability for delivery and emergencies',
            'Balanced approach respecting birth preferences while ensuring safety',
            'Compassionate care during this special life journey'
        ],
        faqs: [
            {
                question: 'How often will I have check-ups during pregnancy?',
                answer: 'Typically monthly until 28 weeks, every 2 weeks until 36 weeks, then weekly until delivery. High-risk pregnancies may require more frequent visits.'
            },
            {
                question: 'Which hospital should I deliver at?',
                answer: 'Dr. Khemani practices at several premier hospitals in Kolkata. She will recommend the best option based on your location and specific needs.'
            },
            {
                question: 'Do you support natural birth?',
                answer: 'Absolutely! Dr. Khemani supports individualized birth preferences while always prioritizing the safety of mother and baby.'
            }
        ]
    },
    'gynecology': {
        title: 'General Gynecology',
        subtitle: 'Comprehensive women\'s health care',
        category: 'Gynecology',
        heroImage: '/images/gynecology.jpg',
        overview: 'From routine well-woman exams to complex gynecological conditions, Dr. Vinita Khemani provides compassionate, comprehensive care for women at every stage of life. Her practice addresses the full spectrum of women\'s health concerns with expertise and understanding.',
        symptoms: [
            'Irregular or painful periods',
            'Abnormal vaginal bleeding',
            'Pelvic pain or discomfort',
            'Vaginal infections or discharge',
            'Menopausal symptoms',
            'Contraception needs',
            'Sexual health concerns',
            'Routine health screenings'
        ],
        causes: [
            'Hormonal imbalances',
            'Structural uterine abnormalities',
            'Infections',
            'Endometriosis',
            'Polycystic ovary syndrome (PCOS)',
            'Menopausal transition',
            'Benign growths (fibroids, polyps, cysts)'
        ],
        treatmentOptions: [
            {
                title: 'Preventive Care',
                description: 'Regular pelvic exams, Pap smears, HPV testing, breast examinations, and health screenings.'
            },
            {
                title: 'Medical Management',
                description: 'Hormone therapy, medications for menstrual disorders, infection treatment, and menopause management.'
            },
            {
                title: 'Contraceptive Services',
                description: 'Full range of contraceptive options including IUDs, implants, pills, and permanent sterilization.'
            },
            {
                title: 'Minor Procedures',
                description: 'Colposcopy, endometrial biopsy, IUD insertion, and other office procedures.'
            },
            {
                title: 'Surgical Treatment',
                description: 'When conservative treatment fails, surgical options including laparoscopy are available.'
            }
        ],
        benefits: [
            'One-stop care for all women\'s health needs',
            'Early detection of gynecological issues',
            'Personalized treatment plans',
            'Access to latest diagnostic and treatment options',
            'Comfortable, private environment',
            'Continuity of care through different life stages'
        ],
        recovery: [
            {
                title: 'Routine Visits',
                description: 'Annual well-woman exams recommended. More frequent visits if managing specific conditions.'
            },
            {
                title: 'Office Procedures',
                description: 'Most minor procedures allow immediate return to activities. Brief rest period may be recommended.'
            },
            {
                title: 'Ongoing Management',
                description: 'Chronic conditions require regular follow-up. Dr. Khemani works with you to find the best long-term solution.'
            }
        ],
        whyDrKhemani: [
            'Comprehensive approach to women\'s health',
            'Takes time to listen and understand concerns',
            'Uses evidence-based treatments',
            'Respects patient preferences and values',
            'Creates comfortable, non-judgmental environment'
        ],
        faqs: [
            {
                question: 'How often should I have a gynecological check-up?',
                answer: 'Annual visits are recommended for most women. Those with specific conditions may need more frequent follow-up.'
            },
            {
                question: 'At what age should I start getting Pap smears?',
                answer: 'Pap smear screening typically begins at age 21 and continues at regular intervals as recommended based on previous results.'
            },
            {
                question: 'Can I discuss sensitive topics during my visit?',
                answer: 'Absolutely. Dr. Khemani creates a safe, confidential space to discuss any health concerns, including sexual health, without judgment.'
            }
        ]
    },
    'fertility': {
        title: 'Fertility Management',
        subtitle: 'Compassionate care on your journey to parenthood',
        category: 'Fertility',
        heroImage: '/images/fertility.jpg',
        overview: 'Dr. Vinita Khemani understands the emotional journey of trying to conceive. She provides comprehensive fertility evaluation and treatment, helping couples identify issues and explore all options on their path to parenthood.',
        symptoms: [
            'Unable to conceive after 12 months of trying (or 6 months if over 35)',
            'Irregular or absent menstrual periods',
            'Known conditions affecting fertility (PCOS, endometriosis)',
            'Previous miscarriages',
            'Male factor concerns',
            'History of pelvic infections or surgery',
            'Unexplained infertility'
        ],
        causes: [
            'Ovulation disorders (PCOS being most common)',
            'Tubal blockage or damage',
            'Endometriosis',
            'Uterine abnormalities (fibroids, polyps, septum)',
            'Male factor infertility',
            'Age-related decline in fertility',
            'Unexplained factors'
        ],
        treatmentOptions: [
            {
                title: 'Fertility Evaluation',
                description: 'Comprehensive workup including hormone testing, ultrasound, HSG (tubal test), and semen analysis.'
            },
            {
                title: 'Ovulation Induction',
                description: 'Medications like Clomiphene or Letrozole to stimulate ovulation in women with ovulatory disorders.'
            },
            {
                title: 'Surgical Correction',
                description: 'Laparoscopic treatment of endometriosis, tubal repair, or hysteroscopic removal of uterine abnormalities.'
            },
            {
                title: 'Timed Intercourse',
                description: 'Cycle monitoring with ultrasound and guidance on optimal timing for conception.'
            },
            {
                title: 'IUI Preparation',
                description: 'When intrauterine insemination is indicated, Dr. Khemani works with fertility clinics for this procedure.'
            },
            {
                title: 'IVF Referral',
                description: 'When advanced reproductive technology is needed, referral to trusted IVF specialists with continued support.'
            }
        ],
        benefits: [
            'Thorough diagnostic evaluation',
            'Personalized treatment based on diagnosis',
            'Emotional support throughout the journey',
            'Multiple treatment options explored',
            'Coordination with fertility specialists when needed',
            'Realistic expectations and honest guidance'
        ],
        recovery: [
            {
                title: 'Initial Consultation',
                description: 'Comprehensive history, examination, and discussion of next steps. Tests ordered based on findings.'
            },
            {
                title: 'Diagnostic Phase',
                description: '1-2 months for complete evaluation including all tests and imaging.'
            },
            {
                title: 'Treatment Phase',
                description: 'Duration varies. Ovulation induction typically tried for 3-6 cycles. Surgery recovery varies by procedure.'
            },
            {
                title: 'Ongoing Support',
                description: 'Dr. Khemani remains involved whether you conceive naturally, with treatment, or pursue advanced options.'
            }
        ],
        whyDrKhemani: [
            'Compassionate understanding of the fertility journey',
            'Thorough diagnostic approach',
            'Expert in treating conditions affecting fertility (PCOS, endometriosis)',
            'Strong network with leading fertility specialists',
            'Continued support through pregnancy when conception occurs'
        ],
        faqs: [
            {
                question: 'When should we seek fertility help?',
                answer: 'If under 35 and not conceived after 12 months, or over 35 and not conceived after 6 months. Seek earlier if you have known risk factors.'
            },
            {
                question: 'Does Dr. Khemani perform IVF?',
                answer: 'Dr. Khemani specializes in fertility evaluation and treatments up to ovulation induction. For IVF, she refers to trusted specialists and remains involved in your care.'
            },
            {
                question: 'What tests will I need?',
                answer: 'Common tests include hormone panel (Day 2-3), ultrasound, HSG for tubal patency, and semen analysis for the partner. Additional tests may be needed based on findings.'
            }
        ]
    }
};

export function TreatmentDetailPage() {
    const { treatmentSlug } = useParams<{ treatmentSlug: string }>();
    const treatment = treatmentSlug ? treatmentData[treatmentSlug] : null;

    if (!treatment) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Treatment Not Found</h1>
                    <Link to="/treatments">
                        <Button className="rounded-full">Back to Treatments</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/treatments" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-6 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to All Treatments
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
                                {treatment.category}
                            </Badge>
                            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                {treatment.title}
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">{treatment.subtitle}</p>
                            <p className="text-gray-600 leading-relaxed mb-8">{treatment.overview}</p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <Button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full px-8 py-6 font-semibold hover:shadow-lg transition-all group">
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Book Consultation
                                    </Button>
                                </Link>
                                <a href="tel:+919903588155">
                                    <Button variant="outline" className="rounded-full px-8 py-6 border-2 border-gray-200 hover:border-pink-400 hover:bg-pink-50">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Now
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center overflow-hidden">
                                <Heart className="w-32 h-32 text-pink-500/30" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Expert Care</p>
                                        <p className="text-sm text-gray-500">16+ Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                                Signs & <span className="text-pink-500">Symptoms</span>
                            </h2>
                            <div className="space-y-3">
                                {treatment.symptoms.map((symptom, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{symptom}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                                Common <span className="text-pink-500">Causes</span>
                            </h2>
                            <div className="space-y-3">
                                {treatment.causes.map((cause, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{cause}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Treatment Options Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                            Treatment <span className="text-pink-500">Options</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Dr. Khemani offers personalized treatment plans tailored to your specific needs and goals.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {treatment.treatmentOptions.map((option, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all"
                            >
                                <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{option.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-10 lg:p-16"
                    >
                        <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center">
                            Benefits of Treatment
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {treatment.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                                    <span className="text-white/90">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Recovery Timeline */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                            What to <span className="text-pink-500">Expect</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {treatment.recovery.map((stage, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full">
                                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-bold mb-4">
                                        {idx + 1}
                                    </div>
                                    <h3 className="font-heading font-bold text-gray-900 mb-2">{stage.title}</h3>
                                    <p className="text-gray-600 text-sm">{stage.description}</p>
                                </div>
                                {idx < treatment.recovery.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                        <ArrowRight className="w-6 h-6 text-gray-300" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Dr. Khemani Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                                Why Choose <span className="text-pink-500">Dr. Khemani?</span>
                            </h2>
                            <div className="space-y-4">
                                {treatment.whyDrKhemani.map((reason, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8"
                        >
                            <div className="text-center">
                                <Clock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                                    Ready to Take the Next Step?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Schedule a consultation with Dr. Khemani to discuss your treatment options.
                                </p>
                                <Link to="/contact">
                                    <Button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full px-8 py-6 font-semibold hover:shadow-lg transition-all">
                                        Book Your Appointment
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                            Frequently Asked <span className="text-pink-500">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {treatment.faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-gray-100"
                            >
                                <h3 className="font-heading font-bold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                            Have Questions About This Treatment?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Dr. Khemani is here to help. Book a consultation to discuss your specific situation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="bg-white text-pink-600 rounded-full px-10 py-6 text-lg font-semibold hover:bg-gray-100 transition-all w-full sm:w-auto">
                                    Book Consultation
                                </Button>
                            </Link>
                            <a href="tel:+919903588155">
                                <Button variant="outline" className="border-2 border-white text-white rounded-full px-10 py-6 text-lg font-semibold hover:bg-white/10 transition-all w-full sm:w-auto">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call +91-9903588155
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
