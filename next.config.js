/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
            "source": "/about/",
            "destination": "/about-dr-vinita-khemani/",
            "permanent": true
      },
      {
            "source": "/treatment/pcos-treatment-and-management/",
            "destination": "/treatments/pcos-pcod-treatment/",
            "permanent": true
      },
      {
            "source": "/treatment/endometriosis/",
            "destination": "/treatments/endometriosis-treatment/",
            "permanent": true
      },
      {
            "source": "/treatment/advanced-laparoscopic-procedures/",
            "destination": "/treatments/advanced-laparoscopic-procedures/",
            "permanent": true
      },
      {
            "source": "/treatment/emergency-caesarean-section/",
            "destination": "/treatments/emergency-caesarean-procedures/",
            "permanent": true
      },
      {
            "source": "/treatment/hysterectomy/",
            "destination": "/treatments/hysterectomy/",
            "permanent": true
      },
      {
            "source": "/treatment/hysteroscopy/",
            "destination": "/treatments/hysteroscopy/",
            "permanent": true
      },
      {
            "source": "/treatment/ovarian-cystectomy/",
            "destination": "/treatments/ovarian-cystectomy-treatment/",
            "permanent": true
      },
      {
            "source": "/treatment/family-planning/",
            "destination": "/treatments/family-planning/",
            "permanent": true
      },
      {
            "source": "/treatment/fertility-management/",
            "destination": "/treatments/fertility-management/",
            "permanent": true
      },
      {
            "source": "/treatment/pregnancy-management/",
            "destination": "/treatments/pregnancy-management/",
            "permanent": true
      },
      {
            "source": "/testimonials/",
            "destination": "/patient-success-stories/",
            "permanent": true
      },
      {
            "source": "/stories/",
            "destination": "/patient-success-stories/",
            "permanent": true
      }
];
  },
};

module.exports = nextConfig;
