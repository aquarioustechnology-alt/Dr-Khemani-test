import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, ArrowRight } from 'lucide-react';

// Blog post data with full content
const blogPostData: Record<string, {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    authorImage: string;
    excerpt: string;
    content: { type: 'paragraph' | 'heading' | 'list' | 'quote'; text: string | string[] }[];
    relatedPosts: string[];
}> = {
    'pcos-guide': {
        title: 'A Quick Guide on PCOS and How to Beat It without Fear',
        category: 'PCOS',
        date: 'April 13, 2023',
        readTime: '8 min read',
        author: 'Dr. Vinita Khemani',
        authorImage: '/images/dr-vinita.jpg',
        excerpt: 'Polycystic Ovary Syndrome affects 1 in 10 women. Learn about symptoms, causes, and effective management strategies to take control of your health.',
        content: [
            { type: 'paragraph', text: 'Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders affecting women of reproductive age, yet it remains widely misunderstood. If you\'ve been diagnosed with PCOS or suspect you might have it, know that you\'re not alone – and more importantly, know that with the right approach, PCOS can be effectively managed.' },
            { type: 'heading', text: 'What is PCOS?' },
            { type: 'paragraph', text: 'PCOS is a hormonal condition that affects how the ovaries work. Despite its name, not all women with PCOS have cysts on their ovaries. The condition is characterized by three main features: irregular periods due to irregular ovulation, high levels of "male" hormones (androgens) which may cause physical signs like excess facial or body hair, and polycystic ovaries where the ovaries become enlarged and contain fluid-filled sacs (follicles) surrounding the eggs.' },
            { type: 'heading', text: 'Common Symptoms to Watch For' },
            {
                type: 'list', text: [
                    'Irregular, infrequent, or absent periods',
                    'Difficulty getting pregnant due to irregular ovulation',
                    'Excess hair growth (hirsutism) on the face, chest, back, or buttocks',
                    'Weight gain, especially around the midsection',
                    'Thinning hair and hair loss from the head',
                    'Oily skin or acne',
                    'Dark patches of skin, particularly on the neck and under breasts'
                ]
            },
            { type: 'heading', text: 'Understanding the Causes' },
            { type: 'paragraph', text: 'The exact cause of PCOS is unknown, but several factors play a role. Insulin resistance is present in up to 70% of women with PCOS, causing the body to produce more insulin to maintain blood sugar levels. This excess insulin can trigger the ovaries to produce more androgens. Genetics also play a significant role – PCOS tends to run in families.' },
            { type: 'quote', text: '"PCOS is not a disease to fear, but a condition to understand and manage. With the right approach, most women with PCOS lead healthy, fulfilling lives and achieve their family planning goals." - Dr. Vinita Khemani' },
            { type: 'heading', text: 'Lifestyle Management: Your First Line of Defense' },
            { type: 'paragraph', text: 'One of the most empowering aspects of PCOS management is that lifestyle changes can make a significant difference. Even a 5-10% reduction in body weight can help restore regular periods and improve symptoms.' },
            {
                type: 'list', text: [
                    'Focus on a balanced diet rich in whole grains, lean proteins, fruits, and vegetables',
                    'Limit processed foods, sugary drinks, and refined carbohydrates',
                    'Engage in regular physical activity – aim for at least 150 minutes per week',
                    'Manage stress through yoga, meditation, or activities you enjoy',
                    'Ensure adequate sleep – 7-9 hours per night'
                ]
            },
            { type: 'heading', text: 'Medical Treatment Options' },
            { type: 'paragraph', text: 'Depending on your symptoms and goals, medical treatment may include hormonal contraceptives to regulate periods and reduce androgen levels, metformin to improve insulin sensitivity, anti-androgen medications to reduce unwanted hair growth and acne, and fertility medications if you\'re trying to conceive.' },
            { type: 'heading', text: 'Fertility and PCOS' },
            { type: 'paragraph', text: 'One of the biggest concerns for women with PCOS is fertility. While PCOS is a leading cause of infertility due to irregular ovulation, the good news is that many women with PCOS conceive successfully with appropriate treatment. Ovulation-inducing medications have excellent success rates, and for those who need additional support, assisted reproductive technologies are available.' },
            { type: 'heading', text: 'Long-term Health Considerations' },
            { type: 'paragraph', text: 'Managing PCOS isn\'t just about addressing current symptoms – it\'s about protecting your long-term health. Women with PCOS have an increased risk of type 2 diabetes, cardiovascular disease, and endometrial cancer if periods are very infrequent. Regular monitoring and proactive management help reduce these risks significantly.' },
            { type: 'heading', text: 'Take the First Step' },
            { type: 'paragraph', text: 'If you\'re experiencing symptoms of PCOS, don\'t wait. Early diagnosis and management can make a significant difference in your quality of life and long-term health outcomes. Schedule a consultation to get a proper evaluation and develop a personalized management plan that works for you.' }
        ],
        relatedPosts: ['holistic-fertility', 'menstrual-health', 'family-planning-guide']
    },
    'family-planning-guide': {
        title: 'The Importance of Family Planning: Understanding Contraception',
        category: 'Family Planning',
        date: 'March 22, 2023',
        readTime: '7 min read',
        author: 'Dr. Vinita Khemani',
        authorImage: '/images/dr-vinita.jpg',
        excerpt: 'A comprehensive guide to modern contraceptive options, helping you make informed decisions about family planning that suit your lifestyle.',
        content: [
            { type: 'paragraph', text: 'Family planning is one of the most personal decisions you\'ll make in your life. Having access to accurate information about contraceptive options empowers you to make choices that align with your health, lifestyle, and future goals. Let\'s explore the various options available today.' },
            { type: 'heading', text: 'Why Family Planning Matters' },
            { type: 'paragraph', text: 'Family planning allows individuals and couples to decide if, when, and how many children they want to have. It\'s not just about preventing pregnancy – it\'s about taking control of your reproductive health, spacing pregnancies for optimal maternal and child health, and planning your life on your own terms.' },
            { type: 'heading', text: 'Types of Contraception' },
            { type: 'paragraph', text: 'Contraceptive methods can be broadly categorized into hormonal and non-hormonal options, short-acting and long-acting methods, and permanent versus reversible solutions. Understanding these categories helps in selecting the right method for your needs.' },
            { type: 'heading', text: 'Hormonal Methods' },
            {
                type: 'list', text: [
                    'Combined Oral Contraceptives (the "pill") - taken daily, 91-99% effective',
                    'Progestin-only Pills - suitable for breastfeeding mothers',
                    'Contraceptive Patch - changed weekly, releases hormones through skin',
                    'Vaginal Ring - inserted monthly, releases low-dose hormones',
                    'Injectable Contraceptives - administered every 1-3 months',
                    'Hormonal IUDs - long-acting, effective for 3-7 years'
                ]
            },
            { type: 'heading', text: 'Non-Hormonal Methods' },
            {
                type: 'list', text: [
                    'Copper IUD - hormone-free, effective for up to 10 years',
                    'Male and Female Condoms - also protect against STIs',
                    'Diaphragm and Cervical Cap - barrier methods used with spermicide',
                    'Natural Family Planning - tracking fertility signs',
                    'Withdrawal Method - least effective, not recommended as primary method'
                ]
            },
            { type: 'heading', text: 'Long-Acting Reversible Contraception (LARC)' },
            { type: 'paragraph', text: 'LARC methods, which include IUDs and implants, are among the most effective forms of contraception. Once inserted, they require no daily attention and can be removed whenever you decide you want to become pregnant. They\'re particularly suitable for women who want effective, hassle-free contraception for several years.' },
            { type: 'quote', text: '"The best contraceptive is one that you\'ll use correctly and consistently. There\'s no one-size-fits-all solution – the right choice depends on your health, lifestyle, and reproductive goals." - Dr. Vinita Khemani' },
            { type: 'heading', text: 'Permanent Contraception' },
            { type: 'paragraph', text: 'For those who are certain they don\'t want children in the future, permanent options include tubal ligation (for women) and vasectomy (for men). These procedures should be considered irreversible, so careful consideration and counseling are essential before proceeding.' },
            { type: 'heading', text: 'Choosing the Right Method' },
            { type: 'paragraph', text: 'When selecting a contraceptive method, consider factors like how effective you need it to be, whether you want hormonal or non-hormonal options, how long you want protection, ease of use and your daily routine, potential side effects, and future pregnancy plans.' },
            { type: 'heading', text: 'Consult with a Healthcare Provider' },
            { type: 'paragraph', text: 'While this guide provides an overview, the best way to choose a contraceptive method is through consultation with a healthcare provider. They can assess your medical history, discuss your preferences, and help you select the most suitable option. Remember, you can always switch methods if your first choice doesn\'t work for you.' }
        ],
        relatedPosts: ['pcos-guide', 'menstrual-health', 'pregnancy-trimesters']
    },
    'holistic-fertility': {
        title: 'Holistic Approaches to Fertility Management',
        category: 'Fertility',
        date: 'February 15, 2023',
        readTime: '6 min read',
        author: 'Dr. Vinita Khemani',
        authorImage: '/images/dr-vinita.jpg',
        excerpt: 'Exploring the role of diet, exercise, and stress reduction in improving fertility outcomes alongside medical treatments.',
        content: [
            { type: 'paragraph', text: 'The journey to parenthood can be both exciting and challenging. While medical interventions have helped countless couples achieve their dream of having a baby, a holistic approach that addresses lifestyle factors can significantly enhance fertility outcomes. Let\'s explore how diet, exercise, stress management, and other factors influence your fertility.' },
            { type: 'heading', text: 'The Mind-Body Connection' },
            { type: 'paragraph', text: 'Fertility isn\'t just about physical health – there\'s a powerful connection between your mental state and reproductive function. Chronic stress can disrupt hormonal balance, affecting ovulation and sperm production. Taking care of your mental well-being is an essential part of fertility optimization.' },
            { type: 'heading', text: 'Nutrition for Fertility' },
            { type: 'paragraph', text: 'What you eat can significantly impact your fertility. A balanced diet provides the nutrients your body needs for optimal reproductive function.' },
            {
                type: 'list', text: [
                    'Include plenty of antioxidant-rich foods (berries, nuts, leafy greens)',
                    'Choose whole grains over refined carbohydrates',
                    'Include healthy fats from fish, avocados, and olive oil',
                    'Ensure adequate protein from both plant and animal sources',
                    'Stay hydrated – aim for 8 glasses of water daily',
                    'Limit caffeine and avoid alcohol when trying to conceive'
                ]
            },
            { type: 'heading', text: 'The Role of Exercise' },
            { type: 'paragraph', text: 'Regular physical activity supports fertility by maintaining a healthy weight, reducing stress, and improving hormonal balance. However, moderation is key – excessive exercise can actually impair fertility.' },
            {
                type: 'list', text: [
                    'Aim for 150 minutes of moderate exercise per week',
                    'Choose activities you enjoy for sustainability',
                    'Include a mix of cardio and strength training',
                    'Yoga can be particularly beneficial for reducing stress',
                    'Avoid overtraining – listen to your body'
                ]
            },
            { type: 'quote', text: '"Fertility is influenced by the whole person – body, mind, and lifestyle. A holistic approach doesn\'t replace medical treatment; it enhances it." - Dr. Vinita Khemani' },
            { type: 'heading', text: 'Stress Management' },
            { type: 'paragraph', text: 'High stress levels can interfere with ovulation and reduce fertility. Incorporating stress management techniques into your daily routine can make a meaningful difference.' },
            {
                type: 'list', text: [
                    'Practice meditation or mindfulness for 10-15 minutes daily',
                    'Consider acupuncture, which some studies suggest may improve fertility',
                    'Maintain social connections and seek support when needed',
                    'Engage in hobbies and activities that bring joy',
                    'Consider counseling or support groups if struggling emotionally'
                ]
            },
            { type: 'heading', text: 'Environmental Factors' },
            { type: 'paragraph', text: 'Your environment can also affect fertility. Limit exposure to endocrine-disrupting chemicals found in certain plastics, pesticides, and personal care products. Opt for organic foods when possible, use glass or stainless steel containers, and choose natural personal care products.' },
            { type: 'heading', text: 'When to Seek Medical Help' },
            { type: 'paragraph', text: 'While lifestyle modifications are valuable, they\'re most effective when combined with appropriate medical care. Seek professional help if you\'re under 35 and haven\'t conceived after 12 months of trying, over 35 and haven\'t conceived after 6 months, have known risk factors like PCOS or endometriosis, or have a history of miscarriages.' },
            { type: 'heading', text: 'Creating Your Fertility Plan' },
            { type: 'paragraph', text: 'A holistic fertility plan is personalized to your unique situation. Working with a healthcare provider who understands both conventional medicine and integrative approaches can help you develop a comprehensive strategy that addresses all aspects of your fertility.' }
        ],
        relatedPosts: ['pcos-guide', 'pregnancy-trimesters', 'menstrual-health']
    },
    'pregnancy-trimesters': {
        title: 'Understanding Pregnancy Trimesters: What to Expect',
        category: 'Pregnancy',
        date: 'January 28, 2023',
        readTime: '10 min read',
        author: 'Dr. Vinita Khemani',
        authorImage: '/images/dr-vinita.jpg',
        excerpt: 'A month-by-month guide to your pregnancy journey, including physical changes, baby development, and essential care tips.',
        content: [
            { type: 'paragraph', text: 'Pregnancy is an incredible journey of transformation – both for you and your growing baby. Understanding what to expect during each trimester can help you navigate this journey with confidence and prepare for the arrival of your little one.' },
            { type: 'heading', text: 'First Trimester (Weeks 1-12)' },
            { type: 'paragraph', text: 'The first trimester is a period of rapid development. Though your baby is tiny, major organs and systems are forming. This is when many pregnancy symptoms begin, and it\'s crucial to establish prenatal care.' },
            {
                type: 'list', text: [
                    'Week 4: Implantation occurs, pregnancy test becomes positive',
                    'Week 6: Baby\'s heart begins to beat',
                    'Week 8: All major organs have begun to form',
                    'Week 12: Baby is about 2 inches long, risk of miscarriage drops significantly'
                ]
            },
            { type: 'paragraph', text: 'Common first trimester symptoms include morning sickness (which can occur any time of day), fatigue, breast tenderness, frequent urination, and food aversions or cravings. While uncomfortable, these symptoms usually indicate a healthy pregnancy.' },
            { type: 'heading', text: 'Second Trimester (Weeks 13-26)' },
            { type: 'paragraph', text: 'Often called the "honeymoon period" of pregnancy, the second trimester brings relief from early symptoms and the exciting milestone of feeling your baby move.' },
            {
                type: 'list', text: [
                    'Week 14-16: Energy returns, morning sickness typically subsides',
                    'Week 18-20: You may feel first movements (quickening)',
                    'Week 20: Anomaly scan checks baby\'s development',
                    'Week 24: Baby is considered viable if born prematurely'
                ]
            },
            { type: 'quote', text: '"The second trimester is often when pregnancy feels most enjoyable. Make the most of this energy to prepare for your baby\'s arrival." - Dr. Vinita Khemani' },
            { type: 'heading', text: 'Third Trimester (Weeks 27-40)' },
            { type: 'paragraph', text: 'The final stretch! Your baby is growing rapidly, and your body is preparing for delivery. This trimester comes with its own set of physical changes and emotional anticipation.' },
            {
                type: 'list', text: [
                    'Week 28: Baby\'s eyes can open, more regular movement patterns',
                    'Week 32: Baby is practicing breathing movements',
                    'Week 36: Baby is considered full-term from week 37',
                    'Week 40: Your estimated due date arrives'
                ]
            },
            { type: 'paragraph', text: 'Third trimester symptoms may include backache, difficulty sleeping, braxton hicks contractions, swelling in feet and ankles, and shortness of breath. These are normal but should be monitored.' },
            { type: 'heading', text: 'Prenatal Care Throughout Pregnancy' },
            { type: 'paragraph', text: 'Regular prenatal visits are essential for monitoring your health and your baby\'s development. Typical visit schedule includes monthly visits until week 28, bi-weekly from weeks 28-36, and weekly from week 36 until delivery.' },
            { type: 'heading', text: 'When to Seek Immediate Care' },
            { type: 'paragraph', text: 'While most pregnancy symptoms are normal, certain signs require immediate medical attention: severe abdominal pain or cramping, heavy vaginal bleeding, sudden severe headache or vision changes, significant decrease in baby\'s movements, and signs of preterm labor (regular contractions before 37 weeks).' },
            { type: 'heading', text: 'Preparing for Delivery' },
            { type: 'paragraph', text: 'As you approach your due date, discuss your birth preferences with your healthcare provider. Create a birth plan, pack your hospital bag by week 35, and know the signs of labor. Remember, flexibility is important – the most important outcome is a healthy mother and baby.' }
        ],
        relatedPosts: ['holistic-fertility', 'family-planning-guide', 'menstrual-health']
    },
    'laparoscopic-surgery': {
        title: 'When to Consider Laparoscopic Surgery',
        category: 'Surgery',
        date: 'December 10, 2022',
        readTime: '6 min read',
        author: 'Dr. Vinita Khemani',
        authorImage: '/images/dr-vinita.jpg',
        excerpt: 'Learn about minimally invasive gynecological surgery, its benefits, and conditions that can be effectively treated with laparoscopy.',
        content: [
            { type: 'paragraph', text: 'Laparoscopic surgery, often called "keyhole surgery," has revolutionized the field of gynecology. This minimally invasive approach allows surgeons to perform complex procedures through small incisions, offering significant advantages over traditional open surgery.' },
            { type: 'heading', text: 'What is Laparoscopic Surgery?' },
            { type: 'paragraph', text: 'Laparoscopic surgery uses a thin, lighted tube with a camera (laparoscope) inserted through small incisions in the abdomen. The camera transmits images to a screen, allowing the surgeon to see inside the body without making large incisions. Special instruments are used through additional small incisions to perform the surgery.' },
            { type: 'heading', text: 'Conditions Treated with Laparoscopy' },
            {
                type: 'list', text: [
                    'Ovarian cysts – removal while preserving the ovary',
                    'Endometriosis – diagnosis and treatment of endometrial implants',
                    'Uterine fibroids – removal of fibroids (myomectomy)',
                    'Hysterectomy – removal of the uterus when indicated',
                    'Ectopic pregnancy – treatment of pregnancy outside the uterus',
                    'Tubal procedures – ligation, reversal, or repair',
                    'Chronic pelvic pain – diagnosis and treatment',
                    'Infertility – evaluation and treatment of reproductive issues'
                ]
            },
            { type: 'heading', text: 'Benefits of Laparoscopic Surgery' },
            { type: 'paragraph', text: 'The advantages of laparoscopic surgery over traditional open surgery are significant and include:' },
            {
                type: 'list', text: [
                    'Smaller incisions (5-10mm vs. 10-15cm)',
                    'Faster recovery – days to weeks vs. weeks to months',
                    'Less post-operative pain and need for pain medication',
                    'Shorter hospital stay – often same-day or overnight',
                    'Reduced blood loss during surgery',
                    'Lower risk of infection',
                    'Minimal scarring',
                    'Quicker return to work and normal activities'
                ]
            },
            { type: 'quote', text: '"Laparoscopic surgery allows us to treat complex gynecological conditions with precision while minimizing trauma to the body. Most of my surgical patients are back to their normal routines within 1-2 weeks." - Dr. Vinita Khemani' },
            { type: 'heading', text: 'Am I a Candidate?' },
            { type: 'paragraph', text: 'Most gynecological conditions that previously required open surgery can now be treated laparoscopically. However, candidacy depends on several factors:' },
            {
                type: 'list', text: [
                    'The nature and size of the condition being treated',
                    'Your overall health and previous surgical history',
                    'Whether you\'ve had previous abdominal surgeries',
                    'Your surgeon\'s expertise in laparoscopic techniques'
                ]
            },
            { type: 'heading', text: 'What to Expect' },
            { type: 'paragraph', text: 'Before surgery, you\'ll have a pre-operative evaluation and discussion of the procedure. Most laparoscopic surgeries are performed under general anesthesia. After surgery, you may experience shoulder pain (from the gas used to inflate the abdomen) and mild abdominal discomfort, but these resolve quickly.' },
            { type: 'heading', text: 'Recovery Timeline' },
            { type: 'paragraph', text: 'Recovery from laparoscopic surgery is typically much faster than open surgery. Most patients go home the same day or after one night. Light activity can resume within a few days, and most people return to work within 1-2 weeks. Full recovery, including strenuous activities, usually takes 4-6 weeks.' },
            { type: 'heading', text: 'Choosing an Experienced Surgeon' },
            { type: 'paragraph', text: 'The success of laparoscopic surgery depends significantly on the surgeon\'s skill and experience. Look for a surgeon who has performed a high volume of laparoscopic procedures and has fellowship training in minimally invasive surgery. Don\'t hesitate to ask about your surgeon\'s experience with your specific condition.' }
        ],
        relatedPosts: ['pcos-guide', 'menstrual-health', 'holistic-fertility']
    },
    'menstrual-health': {
        title: 'Managing Menstrual Health: Tips for Every Woman',
        category: 'Women\'s Health',
        date: 'November 5, 2022',
        readTime: '5 min read',
        author: 'Dr. Vinita Khemani',
        authorImage: '/images/dr-vinita.jpg',
        excerpt: 'Practical advice for maintaining menstrual health, recognizing warning signs, and when to seek medical consultation.',
        content: [
            { type: 'paragraph', text: 'Menstrual health is a vital indicator of overall well-being, yet it\'s often overlooked or dismissed. Understanding your menstrual cycle and knowing what\'s normal for you can help identify potential health issues early and ensure you get appropriate care when needed.' },
            { type: 'heading', text: 'Understanding Your Cycle' },
            { type: 'paragraph', text: 'A typical menstrual cycle ranges from 21 to 35 days, with menstruation lasting 3-7 days. While some variation is normal, significant changes in your cycle pattern may warrant attention.' },
            {
                type: 'list', text: [
                    'Track your periods to identify your personal pattern',
                    'Note the first day of your period (Day 1 of your cycle)',
                    'Record flow intensity and any symptoms',
                    'Pay attention to changes in pattern over time'
                ]
            },
            { type: 'heading', text: 'What\'s Normal?' },
            { type: 'paragraph', text: 'Normal menstruation varies from woman to woman. Understanding the range of normal can help you identify when something might be off:' },
            {
                type: 'list', text: [
                    'Cycle length: 21-35 days (average 28 days)',
                    'Period duration: 3-7 days',
                    'Blood loss: 30-80ml per cycle (about 2-3 tablespoons)',
                    'Some cramping, especially on days 1-2',
                    'PMS symptoms in the week before your period'
                ]
            },
            { type: 'heading', text: 'Warning Signs to Watch For' },
            { type: 'paragraph', text: 'Certain symptoms may indicate underlying conditions that need medical evaluation:' },
            {
                type: 'list', text: [
                    'Periods lasting longer than 7 days',
                    'Soaking through a pad or tampon every hour or less',
                    'Severe pain that interferes with daily activities',
                    'Bleeding between periods or after sex',
                    'Periods stopping for more than 3 months (if not pregnant)',
                    'Cycles shorter than 21 days or longer than 35 days',
                    'Passage of large blood clots'
                ]
            },
            { type: 'quote', text: '"Your menstrual cycle is like a monthly report card for your reproductive health. Pay attention to what it\'s telling you." - Dr. Vinita Khemani' },
            { type: 'heading', text: 'Tips for Managing Period Symptoms' },
            {
                type: 'list', text: [
                    'Use heat therapy (heating pad or warm bath) for cramps',
                    'Stay active – gentle exercise can reduce cramps',
                    'Eat iron-rich foods to replace blood loss',
                    'Stay hydrated to reduce bloating',
                    'Limit salt, caffeine, and alcohol before and during your period',
                    'Get adequate sleep to manage fatigue and mood changes'
                ]
            },
            { type: 'heading', text: 'When to See a Doctor' },
            { type: 'paragraph', text: 'Don\'t dismiss menstrual problems as "just part of being a woman." Seek medical advice if you experience any warning signs mentioned above, if period pain is severe enough to interfere with daily life, if you notice a significant change in your cycle pattern, or if you have concerns about your menstrual health.' },
            { type: 'heading', text: 'Common Conditions Affecting Menstruation' },
            { type: 'paragraph', text: 'Several conditions can affect your menstrual cycle, including PCOS (causing irregular periods), endometriosis (causing severe pain), fibroids (causing heavy bleeding), thyroid disorders (affecting cycle regularity), and premature ovarian insufficiency.' },
            { type: 'heading', text: 'Take Charge of Your Menstrual Health' },
            { type: 'paragraph', text: 'Your menstrual health matters. Start by tracking your cycle, understanding what\'s normal for you, and not hesitating to seek help when something doesn\'t feel right. Regular gynecological check-ups can help catch and address issues early.' }
        ],
        relatedPosts: ['pcos-guide', 'holistic-fertility', 'family-planning-guide']
    }
};

// Helper to get related posts
const getRelatedPosts = (slugs: string[]) => {
    return slugs.map(slug => {
        const post = blogPostData[slug];
        return post ? { slug, title: post.title, category: post.category, readTime: post.readTime } : null;
    }).filter(Boolean);
};

export function BlogPostPage() {
    const { postSlug } = useParams<{ postSlug: string }>();
    const post = postSlug ? blogPostData[postSlug] : null;

    if (!post) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                    <Link to="/resources">
                        <Button className="rounded-full">Back to Resources</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const relatedPosts = getRelatedPosts(post.relatedPosts);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/resources" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-6 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Resources
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
                            {post.category}
                        </Badge>

                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

                        {/* Author and Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-t border-b border-gray-200 py-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                                    <User className="w-6 h-6 text-pink-500" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{post.author}</p>
                                    <p className="text-gray-500">Gynecologist & Laparoscopic Surgeon</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 lg:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.article
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-lg max-w-none"
                    >
                        {post.content.map((block, idx) => {
                            switch (block.type) {
                                case 'heading':
                                    return (
                                        <h2 key={idx} className="font-heading text-2xl font-bold text-gray-900 mt-10 mb-4">
                                            {block.text as string}
                                        </h2>
                                    );
                                case 'paragraph':
                                    return (
                                        <p key={idx} className="text-gray-600 leading-relaxed mb-6">
                                            {block.text as string}
                                        </p>
                                    );
                                case 'list':
                                    return (
                                        <ul key={idx} className="space-y-2 mb-6 ml-4">
                                            {(block.text as string[]).map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                                    <span className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                case 'quote':
                                    return (
                                        <blockquote key={idx} className="border-l-4 border-pink-400 pl-6 py-4 my-8 bg-pink-50 rounded-r-xl italic text-gray-700">
                                            {block.text as string}
                                        </blockquote>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </motion.article>
                </div>
            </section>

            {/* Consultation CTA */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-8 lg:p-12 text-center text-white"
                    >
                        <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                            Need Personalized Guidance?
                        </h2>
                        <p className="text-white/90 mb-6 max-w-xl mx-auto">
                            Schedule a consultation with Dr. Vinita Khemani to discuss your specific concerns and get a personalized care plan.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-white text-pink-600 rounded-full px-8 py-6 font-semibold hover:bg-gray-100 transition-all">
                                Book Appointment
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">
                            Related <span className="text-pink-500">Articles</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedPosts.map((related: any, idx) => (
                                <motion.div
                                    key={related.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link to={`/resources/${related.slug}`} className="group block">
                                        <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all h-full">
                                            <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4">
                                                <BookOpen className="w-10 h-10 text-gray-300 group-hover:text-pink-300 transition-colors" />
                                            </div>
                                            <Badge className="bg-gray-100 text-gray-600 mb-3">{related.category}</Badge>
                                            <h3 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                                                {related.title}
                                            </h3>
                                            <span className="text-sm text-gray-500">{related.readTime}</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Share Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-600 mb-4">Found this article helpful? Share it with others:</p>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline" className="rounded-full">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Article
                        </Button>
                        <Link to="/resources">
                            <Button variant="outline" className="rounded-full">
                                More Articles
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
