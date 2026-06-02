'use client'

import useDispatchselector from "@/state/redux/useDispatchselector";
import { ItemTypes } from "@/types/types";
import { usePathname } from "next/navigation";

const useProductData = () => {

  const { selector } = useDispatchselector();

  const path = usePathname();
  const pathName = path.split('/')[1];

  let state;
  if (pathName === 'men') {
    state = selector((state: any) => state.menSlice) || [];
  } else if (pathName === 'unisex') {
    state = selector((state: any) => state.unisexSlice) || [];
  } else if (pathName === 'women') {
    state = selector((state: any) => state.womenSlice) || [];
  } else if (pathName === 'accessories') {
    state = selector((state: any) => state.accessoriesSlice) || [];
  }

  const data: ItemTypes[] = state?.data || [];
  const dupData: ItemTypes[] = state?.dupData || [];

  return {data, dupData}
}

export default useProductData