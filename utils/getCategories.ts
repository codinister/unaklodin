'use client'

import { ItemTypes } from "@/types/types";



const getCategories = (data: ItemTypes[]) => {
  const category = [
    ...new Set(
      data
        .map((v) => v.cat)
        .filter(Boolean)
        .flat(2),
    ),
  ];

  return category
}

export default getCategories