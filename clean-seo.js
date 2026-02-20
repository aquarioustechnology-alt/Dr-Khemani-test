const fs = require('fs');
const path = require('path');

const treatmentPages = [
    'src/app/treatments/pcos-treatment/page.tsx',
    'src/app/treatments/fertility/page.tsx',
    'src/app/treatments/emergency-caesarean/page.tsx',
    'src/app/treatments/high-risk-pregnancy/page.tsx',
    'src/app/treatments/menopause/page.tsx',
    'src/app/treatments/endometriosis/page.tsx',
    'src/app/treatments/hysterectomy/page.tsx',
    'src/app/treatments/ovarian-cystectomy/page.tsx',
    'src/app/treatments/advanced-laparoscopic-procedures/page.tsx',
    'src/app/treatments/pregnancy-care/page.tsx',
    'src/app/treatments/family-planning/page.tsx',
    'src/app/treatments/hysteroscopy/page.tsx',
    'src/app/treatments/laparoscopic-surgery/page.tsx'
];

treatmentPages.forEach(file => {
    let filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract H1 to protect it
    let heroMatches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/i);
    let originalH1 = heroMatches ? heroMatches[0] : null;

    // Aggressively replace "Kolkata" phrases to reduce keyword stuffing.
    content = content.replace(/ in Kolkata/gi, "");
    content = content.replace(/ at her Kolkata clinics/gi, " at her clinics");
    content = content.replace(/ at her clinics in Kolkata/gi, " at her clinics");
    content = content.replace(/ across Kolkata/gi, " across the region");
    content = content.replace(/ for women in Kolkata/gi, " for local women");
    content = content.replace(/ women in Kolkata/gi, " local women");
    content = content.replace(/ Kolkata's/gi, " the region's");
    content = content.replace(/ Kolkata/gi, " the city");

    // Fix up some resulting bad grammar
    content = content.replace(/ in \./gi, ".");
    content = content.replace(/ in \,/gi, ",");
    content = content.replace(/ in and /gi, " and ");
    content = content.replace(/ the city \&amp; West Bengal/gi, " West Bengal");
    content = content.replace(/ the city \s*\&amp; West Bengal/gi, " West Bengal");
    content = content.replace(/ the city and urban West Bengal/gi, " urban West Bengal");
    content = content.replace(/ clinics in \./gi, " clinics.");
    content = content.replace(/ treatment in \./gi, " treatment.");
    content = content.replace(/ the city,/gi, " the city,");

    // Restore the H1 if we modified it
    if (heroMatches && originalH1) {
        let newHeroMatches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/i);
        if (newHeroMatches) {
            content = content.replace(newHeroMatches[0], originalH1);
        }
    }

    // Keep just ONE instance of "in Kolkata" in the Book Consultation CTA to retain some local SEO value,
    // we can do this by finding the first "Book Consultation" and appending " in Kolkata".
    // Or we just let layout.tsx headers handle the SEO and leave the body clean.

    fs.writeFileSync(filePath, content);
});

console.log('Cleanup completed successfully!');
