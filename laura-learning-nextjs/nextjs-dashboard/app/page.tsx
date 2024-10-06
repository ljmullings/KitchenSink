import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* navbar */}
      <nav className="flex items-center justify-between bg-blue-500 p-4">
        <div className="flex items-center gap-8">
          <AcmeLogo />
          <Link href="#" className="text-white text-lg">Option 1</Link>
          <Link href="#" className="text-white text-lg">Option 2</Link>
          <Link href="#" className="text-white text-lg">Option 3</Link>
        </div>
        <Link
          href="/login"
          className="flex items-center gap-5 rounded-lg bg-white px-6 py-2 text-sm font-medium text-blue-500 transition-colors hover:bg-gray-100"
        >
          <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"/>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by me HAHAH.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>

      {/* Widget Grid Section */}
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-5">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-32 rounded-lg bg-gray-200 text-gray-700"
          >
            Widget {index + 1}
          </div>
        ))}
      </div>
    </main>
  );
}