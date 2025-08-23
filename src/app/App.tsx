import {ThemeProvider} from "@/components/theme-provider.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero.tsx";

import "@/app/App.css";

export function IndexPages() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <About />
      </ThemeProvider>
    </>
  );
}

export default IndexPages;