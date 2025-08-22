import { Navbar } from "@/components/Navbar.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import "./App.css";

export function IndexPages() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default IndexPages;