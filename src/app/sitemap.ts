import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://drvinitakhemani.com'

    // Core pages
    const routes = [
        '',
        '/about',
        '/services',
        '/treatments/pregnancy-care',
        '/treatments/high-risk-pregnancy',
        '/treatments/fertility',
        '/treatments/laparoscopic-surgery',
        '/treatments/pcos-treatment',
        '/treatments/menopause',
        '/stories',
        '/blog',
        '/clinic-schedule',
        '/contact',
        '/privacy-policy',
        '/terms-of-service',
        '/blog/10-essential-tips-healthy-pregnancy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return routes
}
