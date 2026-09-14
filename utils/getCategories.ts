'use client'

import { productsType } from "@/types/types";



const getCategories = (data: productsType[]) => {
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