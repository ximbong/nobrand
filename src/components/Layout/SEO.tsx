import React from 'react';

type SeoProps = {
  title?: string;
  description?: string;
};

const SEO = ({ title, description }: SeoProps) => (
  <>
    <html lang="en" />
    <title>{title ?? 'nobrand clothing'}</title>
    <meta
      name="description"
      content={description ?? 'Premium, sustainable, brand-free essentials'}
    />
  </>
);

export { SEO };
