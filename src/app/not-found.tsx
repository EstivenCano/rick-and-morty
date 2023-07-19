import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { NotFoundBackground } from "@/components/not-found-background";

export default function NotFound() {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <main className='flex flex-col h-screen justify-center items-center gap-2'>
        <h1 className='sr-only'>404 - Not Found</h1>
        <h2 className='text-4xl font-bold'>Not Found</h2>
        <NotFoundBackground />
        <p className='text-xl'>This page does not exist on this dimension.</p>
        <Button className='mt-4' asChild>
          <a href='/' target='_self'>
            Back to home
          </a>
        </Button>
      </main>
    </ThemeProvider>
  );
}
