import {ThemeProvider} from "@/components/theme-provider.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero.tsx";
import { Sponsors } from "@/components/Sponsor";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Services } from "@/components/Service";
import { Cta } from "@/components/Cta";
import { Testimonials } from "@/components/Testimonial";
import { Team } from "@/components/Team";
import { Pricing } from "@/components/Pricing";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { ScrollToTop } from "@/components/ScrollToTop";

import "@/app/App.css";

export function IndexPages() {
return (
<>
    <ThemeProvider>
       <div className="flex flex-col items-center justify-center mx-auto max-w-6xl">
        <Navbar />
        <Hero />
        <Sponsors />
        <About />
        <HowItWorks />
        <Features />
        <Services />
        <Cta />
        <Testimonials />
        <Team />
        <Pricing />
        <Newsletter />
        <FAQ />
      </div>
        <Footer />
        <ScrollToTop />
    </ThemeProvider>
</>
);
}

export default IndexPages;
