import { Geist, Geist_Mono } from "next/font/google";
import '../estilos/globals.css'
import { TodoProvider } from "@/context/TodoContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap' 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap' 
});

export const metadata = {
  title: "TO DO APP",
  description: "una practica de mis habilidades fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="forced-client-render">
        <TodoProvider>
          {children}
        </TodoProvider>
        
      </body>
    </html>
  );
}
