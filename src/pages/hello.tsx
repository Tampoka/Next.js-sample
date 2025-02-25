
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Hello: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello World Page Title</title>
        <meta property="og:title" content="Hello World" key="title"/>
      </Head>
      <h1>Hello, Next.js!</h1>
    <div> <a href="https://nostarch.com">External link</a></div>
    <Link href="/components/weather">Internal page</Link>
    <div className='bg-red-500'>
    <Image src="/vercel.svg" alt="Vercel logo" width={72} height={16} />
    </div>
    </>
  );
};

export default Hello;
