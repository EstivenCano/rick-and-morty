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
      <div className='flex flex-col w-full'>
        <AppBar />
        {children}
      </div>
    </>
  );
}
