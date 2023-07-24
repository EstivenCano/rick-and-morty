import { AppBar } from "@/components/app-bar";

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
