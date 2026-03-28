'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { PortableText } from '@portabletext/react';
import { useParams } from 'next/navigation';

const Policies = () => {
  const { id } = useParams();

  const res = useGetQuery('policies', `/v1/policies/${id}`) || [];


  return (
    <div className="py-15 container mx-auto">
      <h5 className="mb-6">{res[0]?.title}</h5>
      <PortableText value={res[0]?.body || ''} />
    </div>
  );
};

export default Policies;
