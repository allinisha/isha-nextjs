import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-20`}
    >
      <Head>
        <title>"新人类"</title>
      </Head>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-center text-[1.4rem]">isha</p>
        <p className="text-center text-[1.4rem]">新人类</p>
      </div>
    </main>
  );
}
