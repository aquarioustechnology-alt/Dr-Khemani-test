import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    BookOpen,
    Calendar,
    ArrowRight,
    Clock,
    User,
    FileText,
    Heart,
    Baby,
    Pill
} from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "A Quick Guide on PCOS and How to Beat It without Fear",
        excerpt: "Polycystic Ovary Syndrome affects 1 in 10 women. Learn about symptoms, causes, and effective management strategies to take control of your health.",
        date: "April 13, 2023",
        author: "Dr. Vinita Khemani",
        readTime: "5 min read",
        category: "PCOS",
        image: "/images/blog-pcos.jpg",
        slug: "pcos-guide"
    },
    {
        id: 2,
        title: "The Importance of Family Planning: Understanding Contraception",
        excerpt: "A comprehensive guide to modern contraceptive options, helping you make informed decisions about family planning that suit your lifestyle.",
        date: "March 22, 2023",
        author: "Dr. Vinita Khemani",
        readTime: "7 min read",
        category: "Family Planning",
        image: "/images/blog-family-planning.jpg",
        slug: "family-planning-guide"
    },
    {
        id: 3,
        title: "Holistic Approaches to Fertility Management",
        excerpt: "Exploring the role of diet, exercise, and stress reduction in improving fertility outcomes alongside medical treatments.",
        date: "February 15, 2023",
        author: "Dr. Vinita Khemani",
        readTime: "6 min read",
        category: "Fertility",
        image: "/images/blog-fertility.jpg",
        slug: "holistic-fertility"
    },
    {
        id: 4,
        title: "Understanding Pregnancy Trimesters: What to Expect",
        excerpt: "A month-by-month guide to your pregnancy journey, including physical changes, baby development, and essential care tips.",
        date: "January 28, 2023",
        author: "Dr. Vinita Khemani",
        readTime: "8 min read",
        category: "Pregnancy",
        image: "/images/blog-pregnancy.jpg",
        slug: "pregnancy-trimesters"
    },
    {
        id: 5,
        title: "When to Consider Laparoscopic Surgery",
        excerpt: "Learn about minimally invasive gynecological surgery, its benefits, and conditions that can be effectively treated with laparoscopy.",
        date: "December 10, 2022",
        author: "Dr. Vinita Khemani",
        readTime: "5 min read",
        category: "Surgery",
        image: "/images/blog-laparoscopy.jpg",
        slug: "laparoscopic-surgery"
    },
    {
        id: 6,
        title: "Managing Menstrual Health: Tips for Every Woman",
        excerpt: "Practical advice for maintaining menstrual health, recognizing warning signs, and when to seek medical consultation.",
        date: "November 5, 2022",
        author: "Dr. Vinita Khemani",
        readTime: "4 min read",
        category: "Women's Health",
        image: "/images/blog-menstrual.jpg",
        slug: "menstrual-health"
    }
];

const healthGuides = [
    {
        title: "Pregnancy Care Guide",
        description: "Week-by-week guidance for expecting mothers, including nutrition, exercise, and preparation for delivery.",
        icon: Baby,
        color: "pink"
    },
    {
        title: "PCOS / PCOD Management",
        description: "Comprehensive lifestyle and medical management strategies for Polycystic Ovary Syndrome.",
        icon: Heart,
        color: "purple"
    },
    {
        title: "Menopause Support",
        description: "Understanding hormonal changes and managing symptoms during the menopausal transition.",
        icon: Pill,
        color: "blue"
    },
    {
        title: "Post-Surgery Recovery",
        description: "Essential guidelines for recovering from gynecological procedures and returning to normal activities.",
        icon: FileText,
        color: "green"
    }
];

const categories = ["All", "PCOS", "Pregnancy", "Fertility", "Family Planning", "Women's Health", "Surgery"];

export function ResourcesPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100 px-4 py-2 text-sm font-medium mb-6">
                            Patient Resources
                        </Badge>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Health{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Resources</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Expert articles, guides, and health tips to empower you on your wellness journey.
                            Your guide to gynecological health – empowering women, one article at a time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Health Guides Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                            Health <span className="text-pink-500">Guides</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive guides on common women's health topics, created by Dr. Khemani to help you understand your body better.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {healthGuides.map((guide, index) => (
                            <motion.div
                                key={guide.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-${guide.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <guide.icon className={`w-7 h-7 text-${guide.color}-500`} />
                                </div>
                                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{guide.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{guide.description}</p>
                                <span className="text-pink-500 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read Guide <ArrowRight className="w-4 h-4" />
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
                    >
                        <div>
                            <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-100 px-4 py-2 text-sm font-medium mb-4">
                                Latest Articles
                            </Badge>
                            <h2 className="font-heading text-3xl font-bold text-gray-900">
                                Our Latest <span className="text-pink-500">Posts</span>
                            </h2>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                            {categories.slice(0, 4).map((cat) => (
                                <button
                                    key={cat}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat === "All"
                                            ? "bg-pink-500 text-white"
                                            : "bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-500 border border-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Featured Post */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl overflow-hidden shadow-lg mb-12 border border-gray-100"
                    >
                        <div className="grid lg:grid-cols-2">
                            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                                <BookOpen className="w-24 h-24 text-pink-500/40" />
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <Badge className="bg-pink-100 text-pink-600 w-fit mb-4">{blogPosts[0].category}</Badge>
                                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    {blogPosts[0].title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {blogPosts[0].date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {blogPosts[0].readTime}
                                    </span>
                                </div>
                                <Link to={`/resources/${blogPosts[0].slug}`}>
                                    <Button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full px-8 py-5 font-semibold hover:shadow-lg transition-all duration-300 group w-fit">
                                        Read Article
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-pink-100 transition-all duration-300 group"
                            >
                                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <BookOpen className="w-12 h-12 text-gray-300 group-hover:text-pink-300 transition-colors" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                                            {post.category}
                                        </Badge>
                                        <span className="text-xs text-gray-400">{post.readTime}</span>
                                    </div>
                                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <User className="w-3 h-3" />
                                            <span>{post.author}</span>
                                        </div>
                                        <span className="text-xs text-gray-400">{post.date}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" className="rounded-full px-8 py-5 border-2 border-gray-200 hover:border-pink-400 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300">
                            Load More Articles
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <BookOpen className="w-16 h-16 text-white/30 mx-auto mb-6" />
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">
                            Stay Informed About Your Health
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Subscribe to receive the latest health tips, articles, and updates from Dr. Khemani directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <Button className="bg-white text-purple-600 rounded-full px-8 py-4 font-semibold hover:bg-gray-100 transition-all">
                                Subscribe
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
