'use client';

import { Button } from '@/components/ui/button';


export default function Home() {
  return (
    <div className="h-300">
      <Button size="lg">Large</Button>
      <br /><br />
      <Button>Small</Button>
      <br /><br />
      <Button variant="outline">Small Outline</Button>
    </div>
  );
}
