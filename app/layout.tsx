import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '@/app/providers'
import Menu from '@/app/_components/Navigation/Menu'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Menu/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
