import { Background } from "@/components/background";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Background />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
    </>
  );
}
