import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    slug: 'pcos-guide',
    image: '/images/blog-1.jpg',
    title: 'A Quick Guide on PCOS and How to Beat It without Fear',
    date: 'April 13, 2023',
    author: 'Dr. Vinita Khemani',
    excerpt:
      'Understanding PCOS and managing it effectively with lifestyle changes and medical treatment. Learn about symptoms, causes, and treatment options.',
  },
  {
    slug: 'family-planning-guide',
    image: '/images/blog-2.jpg',
    title: 'The Importance of Family Planning: Understanding Contraception',
    date: 'April 5, 2023',
    author: 'Dr. Vinita Khemani',
    excerpt:
      'Learn about various contraception methods and choose what works best for you. Make informed decisions about your reproductive health.',
  },
  {
    slug: 'holistic-fertility',
    image: '/images/blog-3.jpg',
    title: 'Holistic Approaches to Fertility Management',
    date: 'March 29, 2023',
    author: 'Dr. Vinita Khemani',
    excerpt:
      'The role of diet, exercise, and stress reduction in improving fertility. Discover natural ways to boost your fertility journey.',
  },
];

export function LatestBlogs() {
  return (
    <section id="blogs" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <Badge className="bg-pink-100 text-pink-500 hover:bg-pink-100 px-4 py-2 text-sm font-medium mb-6">
              Health Articles
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Latest{' '}
              <span className="text-pink-500">Posts</span>
            </h2>
            <p className="text-lg text-gray-600">
              Your Guide to Gynecological Health. Empowering Women, One Blog
              Post at a Time.
            </p>
          </div>

          <Link to="/resources">
            <Button
              variant="outline"
              className="rounded-full px-6 py-5 border-2 border-pink-500 text-pink-500 hover:bg-pink-50 w-fit group"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link to={`/resources/${blog.slug}`}>
                <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full group">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-500 transition-colors">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition-colors group/link">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

