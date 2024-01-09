import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    return [{
        url: 'https://blueprintapparelcompany.com',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    }, {
        url: 'https://blueprintapparelcompany.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }, {
        url: 'https://blueprintapparelcompany.com/contact-us',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    }]
}