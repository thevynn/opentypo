import Image from "next/image";
import { NavigationBar } from '@/components/navigation-bar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-neutral-900">
      <NavigationBar />
    </main>
  );
}
