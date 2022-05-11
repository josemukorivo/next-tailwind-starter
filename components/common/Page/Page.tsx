import { FC, ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
  children: ReactNode;
}

export const Page: FC<Props> = ({
  children,
  title,
  description,
  image = '',
  canonicalURL,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content='' />
        <meta name='author' content='' />
        <meta name='image' content={image} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
        <meta name='og:image' content={image} />
        <meta name='og:url' content='' />
        <meta name='og:site_name' content='' />
        <meta name='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:alt' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
        <meta name='twitter:site' content='' />
        <meta name='twitter:creator' content='' />
        {canonicalURL && <link rel='canonical' href={canonicalURL} />}
      </Head>
      <main>{children}</main>
    </>
  );
};
