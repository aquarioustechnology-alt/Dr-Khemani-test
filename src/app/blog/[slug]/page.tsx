import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { BlogCTA } from "@/components/BlogCTA";

// Same data as listing page
const blogPosts = [
    {
        id: "1",
        slug: "a-quick-guide-on-pcos-and-how-to-beat-it-without-fear",
        title: "A Quick Guide on PCOS and How to Beat It without Fear",
        excerpt: "The impact of PCOS extends to various symptoms that can significantly affect a woman's quality of life. In this blog post, we will provide a comprehensive overview of PCOS, exploring its causes and treatments.",
        category: "PCOS",
        readTime: "5 min read",
        date: "Apr 13, 2023",
        image: "/images/blog/pcos-treatment.jpg",
        content: `
            <p>Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods or excess male hormone (androgen) levels. The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs.</p>
            <h3>Common Symptoms</h3>
            <ul>
                <li>Irregular periods</li>
                <li>Excess androgen (elevated levels of male hormones)</li>
                <li>Polycystic ovaries</li>
            </ul>
            <h3>Management & Treatment</h3>
            <p>While there's no cure for PCOS, symptoms can often be managed. Lifestyle changes are the first step, including losing weight through a low-calorie diet combined with moderate exercise activities.</p>
            <p>For more personalized advice and treatment options, please consult with Dr. Vinita Khemani.</p>
        `
    },
    {
        id: "2",
        slug: "the-importance-of-family-planning-understanding-contraception",
        title: "The Importance of Family Planning: Understanding Contraception",
        excerpt: "Navigating married life can be challenging, and making decisions about family planning is no exception. Choosing the right contraceptive method is an essential part of every couple's life.",
        category: "Family Planning",
        readTime: "4 min read",
        date: "Apr 5, 2023",
        image: "/images/blog/family-planning.jpg",
        content: `
            <p>Family planning allows people to attain their desired number of children and determine the spacing of pregnancies. It is achieved through use of contraceptive methods and the treatment of infertility.</p>
            <h3>Benefits of Family Planning</h3>
            <ul>
                <li>Prevents pregnancy-related health risks in women</li>
                <li>Reduces infant mortality</li>
                <li>Helps to prevent HIV/AIDS</li>
                <li>Empowers people and enhances education</li>
            </ul>
            <p>Consult with Dr. Vinita Khemani to discuss the best contraceptive methods for your needs.</p>
        `
    },
    {
        id: "3",
        slug: "holistic-approaches-to-fertility-management",
        title: "Holistic Approaches to Fertility Management",
        excerpt: "Lack of Fertility can be a worrying and challenging experience for couples trying to conceive. However, adopting a holistic approach to fertility management can provide hope and empower individuals.",
        category: "Fertility",
        readTime: "6 min read",
        date: "Mar 29, 2023",
        image: "/images/blog/infertility-management.jpg",
        content: `
            <p>A holistic approach to fertility considers the whole person — body, mind, and spirit — in the context of their environment.</p>
            <h3>Key Components</h3>
            <ul>
                <li><strong>Nutrition:</strong> Eating a balanced diet rich in antioxidants.</li>
                <li><strong>Stress Management:</strong> Practices like yoga and meditation can improve hormonal balance.</li>
                <li><strong>Exercise:</strong> Moderate exercise is beneficial, but excessive exercise can sometimes hinder fertility.</li>
            </ul>
        `
    },
    {
        id: "4",
        slug: "understanding-fertility-management",
        title: "Understanding Fertility Management",
        excerpt: "Fertility issues can be a difficult and emotional journey for many couples, but understanding the available options can offer hope and support.",
        category: "Fertility",
        readTime: "5 min read",
        date: "Mar 22, 2023",
        image: "/images/blog/understanding-fertility.jpg",
        content: `
            <p>Fertility treatments can range from simple medication to more complex procedures like IVF. Understanding the cause of infertility is the first step.</p>
            <p>Dr. Vinita Khemani specializes in diagnosing and treating various fertility issues, offering a compassionate and evidence-based approach.</p>
        `
    },
    {
        id: "5",
        slug: "mid-cycle-spotting-should-you-be-worried",
        title: "Mid-Cycle Spotting: Should You be Worried?",
        excerpt: "Mid-cycle spotting, also known as breakthrough bleeding, can be a common occurrence for many women. However, it can also be a source of concern and anxiety.",
        category: "Gynecology",
        readTime: "3 min read",
        date: "Mar 15, 2023",
        image: "/images/blog/mid-cycle-spotting.jpg",
        content: `
            <p>Spotting between periods is usually harmless, but sometimes it can be a sign of a health problem. It can be caused by hormonal contraceptives, ovulation (ovulation spotting), or infections.</p>
            <p>If you experience heavy bleeding, pain, or spotting after sex, it is recommended to see a gynecologist immediately.</p>
        `
    },
    {
        id: "6",
        slug: "what-is-vaginal-infection-all-you-should-know",
        title: "What is Vaginal Infection? All You Should Know",
        excerpt: "Vaginal infections are common. Although they can be uncomfortable and unpleasant, most vaginal infections are not serious and can be easily treated.",
        category: "Gynecology",
        readTime: "4 min read",
        date: "Mar 9, 2023",
        image: "/images/blog/vaginal-infection.jpg",
        content: `
            <p>Vaginitis is an inflammation of the vagina that can result in discharge, itching and pain. The cause is usually a change in the normal balance of vaginal bacteria or an infection.</p>
            <h3>Common Types</h3>
            <ul>
                <li>Bacterial vaginosis</li>
                <li>Yeast infections</li>
                <li>Trichomoniasis</li>
            </ul>
        `
    },
    {
        id: "7",
        slug: "how-does-egg-freezing-work",
        title: "How Does Egg Freezing Work?",
        excerpt: "Egg freezing, also known as oocyte cryopreservation, is a fertility preservation technique that involves extracting a woman's eggs and freezing them at a very low temperature.",
        category: "Fertility",
        readTime: "6 min read",
        date: "Feb 28, 2023",
        image: "/images/blog/egg-freezing.jpg",
        content: `
            <p>Egg freezing allows women to preserve their fertility for the future. The process involves hormonal stimulation to produce multiple eggs, retrieval of the eggs, and then freezing (vitrification).</p>
            <p>This option is often considered for medical reasons (like cancer treatment) or social reasons.</p>
        `
    },
    {
        id: "8",
        slug: "pregnancy-and-sleep-how-to-sleep-well-when-expecting",
        title: "Pregnancy and Sleep: How to Sleep Well When Expecting",
        excerpt: "During pregnancy, sleep can be disrupted by several factors. These may include physical discomfort, hormonal changes, and stress.",
        category: "Pregnancy",
        readTime: "5 min read",
        date: "Feb 5, 2023",
        image: "/images/blog/pregnancy-sleep.jpg",
        content: `
            <p>Getting enough sleep is crucial for both the mother and the baby. Common sleep disturbances include frequent urination, heartburn, and back pain.</p>
            <h3>Tips for Better Sleep</h3>
            <ul>
                <li>Sleep on your side, preferably the left side.</li>
                <li>Use pillows for support between your knees and under your belly.</li>
                <li>Avoid large meals before bedtime.</li>
            </ul>
        `
    },
    {
        id: "9",
        slug: "the-psychological-impact-of-fertility-challenges-in-women",
        title: "The Psychological Impact of Fertility Challenges in Women",
        excerpt: "Fertility issues can profoundly affect a woman’s mental and emotional well-being, triggering a range of complex emotions.",
        category: "Fertility",
        readTime: "7 min read",
        date: "Jan 27, 2023",
        image: "/images/blog/fertility-psychology.jpg",
        content: `
            <p>Infertility is often a silent struggle. The emotional rollercoaster of hope and disappointment can lead to anxiety, depression, and relationship strain.</p>
            <p>It is important to seek support from counselors, support groups, and fertility specialists who understand the emotional aspect of treatment.</p>
        `
    },
    {
        id: "10",
        slug: "7-common-fertility-questions-couples-who-cant-conceive-ask",
        title: "7 Common Fertility Questions Couples Ask",
        excerpt: "There are many potential reasons why couples may have difficulty conceiving. Here are answers to common questions couples ask.",
        category: "Fertility",
        readTime: "5 min read",
        date: "Jan 7, 2023",
        image: "/images/blog/fertility-questions.jpg",
        content: `
            <p>Common questions include:</p>
            <ol>
                <li>How long should we try before seeing a doctor?</li>
                <li>Does stress affect fertility?</li>
                <li>What lifestyle changes can improve fertility?</li>
            </ol>
            <p>Understanding these basics can help couples make informed decisions about their fertility journey.</p>
        `
    },
    {
        id: "11",
        slug: "maternity-leave-in-india-what-every-working-women-should-know",
        title: "Maternity Leave in India: What Every Working Woman Should Know",
        excerpt: "India has come a long way regarding maternity leave policy. While the Maternity Benefit Act still has gaps, recent reforms have improved rights.",
        category: "General",
        readTime: "5 min read",
        date: "Dec 30, 2022",
        image: "/images/blog/maternity-leave.jpg",
        content: `
            <p>The Maternity Benefit (Amendment) Act 2017 increased the paid maternity leave from 12 weeks to 26 weeks for women with fewer than two surviving children. This allows mothers more time to recover and bond with their newborns.</p>
        `
    },
    {
        id: "12",
        slug: "9-tips-to-avoid-infections-during-pregnancy",
        title: "9 Tips to Avoid Infections During Pregnancy",
        excerpt: "Infections during pregnancy can imply complications. Learn essential hygiene and lifestyle tips to keep yourself and your baby safe.",
        category: "Pregnancy",
        readTime: "4 min read",
        date: "Dec 24, 2022",
        image: "/images/blog/pregnancy-infections.jpg",
        content: `
            <p>Protecting yourself from infections is vital. Some key tips include:</p>
            <ul>
                <li>Wash your hands frequently with soap and water.</li>
                <li>Avoid unpasteurized milk and foods made from it.</li>
                <li>Get tested for STIs.</li>
                <li>Avoid contact with people who have contagious infections like chickenpox or rubella.</li>
            </ul>
        `
    }
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {

    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Dr. Vinita Khemani`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Dr. Vinita Khemani"],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="relative bg-white">
            <Navigation />

            {/* Hero / Header */}
            <div className="relative pt-32 pb-32 lg:pb-40 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fdf8fa 0%, #fff 100%)' }}>
                {/* Premium Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container-fluid mx-auto max-w-[1000px] px-6 relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C21975] mb-8 transition-colors text-sm font-semibold">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <span className="px-4 py-1.5 rounded-full bg-[#f5e6ef] text-[#C21975] text-xs font-bold uppercase tracking-wider border border-[#d4a5c4]/50 shadow-sm">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-[#C21975]" /> {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-[#C21975]" /> {post.readTime}
                            </span>
                        </div>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.15] tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 border-t border-gray-200/60 pt-6">
                        <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                            <Image src="/images/dr-vinita-khemani.jpeg" alt="Dr. Vinita Khemani" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-900">Dr. Vinita Khemani</p>
                            <p className="text-sm text-gray-500 font-medium">Senior Gynecologist & Obstetrician</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="container-fluid mx-auto max-w-[1000px] px-6 -mt-24 lg:-mt-32 mb-6 md:mb-12 relative z-20">
                <div className="h-[300px] md:h-[400px] lg:h-[450px] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </div>

            {/* Content Body */}
            <article className="container-fluid mx-auto max-w-[800px] px-6 pb-16 lg:pb-20 pt-4 md:pt-8">
                <div
                    className="
                        max-w-none text-gray-700 leading-relaxed text-lg
                        [&_p]:mb-6 
                        [&_h2]:font-display [&_h2]:text-3xl md:[&_h2]:text-4xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-6 [&_h2]:mt-12
                        [&_h3]:font-display [&_h3]:text-2xl md:[&_h3]:text-3xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mb-4 [&_h3]:mt-10
                        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-3
                        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:space-y-3
                        [&_li]:text-gray-700
                        [&_a]:text-[#C21975] [&_a]:underline [&_a]:underline-offset-2
                        [&_strong]:font-bold [&_strong]:text-gray-900
                    "
                    dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
                />

                {/* Styled CTA Box */}
                <BlogCTA />
            </article>

            <Footer />
        </main>
    );
}
