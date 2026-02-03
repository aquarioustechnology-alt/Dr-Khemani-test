import { Hero } from '@/sections/Hero';
import { QuickActions } from '@/sections/QuickActions';
import { AboutDoctor } from '@/sections/AboutDoctor';
import { VideoIntro } from '@/sections/VideoIntro';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { SpecialtyTreatments } from '@/sections/SpecialtyTreatments';
import { Testimonials } from '@/sections/Testimonials';
import { ClinicSchedule } from '@/sections/ClinicSchedule';
import { LatestBlogs } from '@/sections/LatestBlogs';
import { HomeFAQ } from '@/sections/HomeFAQ';
import { ContactCTA } from '@/sections/ContactCTA';

export function HomePage() {
    return (
        <>
            <Hero />
            <QuickActions />
            <AboutDoctor />
            <VideoIntro />
            <WhyChooseUs />
            <SpecialtyTreatments />
            <Testimonials />
            <ClinicSchedule />
            <LatestBlogs />
            <HomeFAQ />
            <ContactCTA />
        </>
    );
}
