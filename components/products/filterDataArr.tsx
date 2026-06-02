import { ItemTypes } from '@/types/types';

const filterDataArr = (data: ItemTypes[], dupData: ItemTypes[], type: string) => {

  const catArr = [...new Set(data.map((v) => v.cat).filter(Boolean))];

  return catArr.length > 1
    ? dupData.filter((v) => v.type.toLowerCase() === type)
    : dupData.filter((v) => v.cat === catArr[0]);

};

export default filterDataArr;
