import type { Metadata } from "next";
import { AppBar } from "@/components/app-bar";

export const metadata: Metadata = {
  title: "Characters",
  description: "Rick and Morty characters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBar />
      <main className='flex h-[calc(100%-90px)] w-full max-w-7xl mx-auto'>
        {children}
      </main>
    </>
  );
}
