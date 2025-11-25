'use client';

import clientConfig from '@/state/sanity/client.config';
import { NextStudio } from 'next-sanity/studio';

export default function AdminDashboard() {
  return (
    <div className="mt-25">
      <NextStudio config={clientConfig} />
    </div>
  );
}
