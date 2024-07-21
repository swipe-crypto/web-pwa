import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center bg-snowball">
      <Image
        src="/logo.svg"
        alt="Snowball Logo"
        width={400}
        height={24}
        priority
      />
    </main>
  );
}
