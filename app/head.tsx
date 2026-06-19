'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Manan Dudhwala ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Manan Dudhwala. I'm a Full-Stack Developer with 3+ years of experience building end-to-end web applications using React, Next.js, Node.js, Express, and MongoDB.`,
    keywords: 'Manan Dudhwala, mdev, Manan Dudhwala portfolio, full-stack developer, full stack developer, Node.js developer, React developer, Next.js developer, Express.js, MongoDB, REST API, backend developer, frontend developer, TypeScript, JavaScript, manan dudhwala github, Manan Dudhwala LinkedIn',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />

    </>
  )
}

export default Head;