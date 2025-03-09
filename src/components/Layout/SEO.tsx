import React, { FC, PropsWithChildren } from 'react';

type SeoProps = {
  title?: string;
  description?: string;
};

const SEO = ({ title, description, children }: PropsWithChildren<SeoProps>) => (
  <>
    <html lang="en" />
    <title>{title ?? 'nobrand clothing'}</title>
    <meta
      name="description"
      content={description ?? 'Premium, sustainable, brand-free essentials'}
    />
    {children}
  </>
);

export { SEO };
