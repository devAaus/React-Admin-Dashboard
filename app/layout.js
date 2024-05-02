import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar/Sidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "next-themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex bg-[#f0f4f9] dark:bg-[#1b222d] `}>
        <ThemeProvider attribute="class">
          <SidebarProvider>
            <Sidebar />
            <div className="flex flex-col w-full lg:w-[calc(100%-18rem)] ">
              <Navbar />
              <div className='max-w-screen-2xl mx-auto p-4 md:p-6 xl:p-10'>
                {children}
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
