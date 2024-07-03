'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Manan Dudhwala ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Manan Dudhwala. I have 1+ year of work experience in JavaScript and React.`,
    keywords: 'Manan Dudhwala, mdev, Manan Dudhwala portfolio, mdv portfolio, Manan portfolio, manan dudhwala github, Manan Dudhwala github, Manan LinkedIn, Manan Dudhwala LinkedIn, Web, web developer, programmer, React, Typescript, Jest',
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