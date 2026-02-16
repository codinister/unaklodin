'use client'


import { FaSearch } from 'react-icons/fa';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const Searchbox = () => {
  return (
    <Label className="relative">
      <FaSearch className="absolute left-4 top-3" />
      <Input type="search" placeholder="Search UNA Klodin" className="pl-8 border-2 border-black/25 rounded-full" />
    </Label>
  );
};

export default Searchbox;
