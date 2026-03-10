import { FAQSection } from "@/app/sections/FAQSection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";

export default function FAQPage() {
    return (
        <main>
            <Navigation />
            <div className="pt-20">
                <FAQSection />
            </div>
            <Footer />
        </main>
    );
}
