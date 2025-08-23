import {ThemeProvider} from "@/components/theme-provider.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero.tsx";
import { Sponsors } from "@/components/Sponsor";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Services } from "@/components/Service";


import "@/app/App.css";

export function IndexPages() {
return (
<>
    <ThemeProvider>
        <Navbar />
        <Hero />
        <Sponsors />
        <About />
        <HowItWorks />
        <Features />
        <Services />

    </ThemeProvider>
</>
);
}

export default IndexPages;
