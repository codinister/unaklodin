'use client'


import { FaSearch } from 'react-icons/fa';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import React from 'react'




type SearchInputImgType = React.InputHTMLAttributes<HTMLInputElement>

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputImgType>(({...props}, ref) => {
  return (
    <Label className="relative">
      <FaSearch className="absolute left-4 top-3" />
      <Input ref={ref} {...props} type="search" placeholder="Search UNA Klodin" className="pl-8 border-2 border-black/25 rounded-full" />
    </Label>
  );
})

export default SearchInput
