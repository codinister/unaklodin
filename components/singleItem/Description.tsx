'use client';

import { ItemTypes } from '@/types/types';
import getColours from '@/utils/getColours';
import Colour from '../Colour';
import getSizes from '@/utils/getSizes';
import useGetQuery from '@/state/query/useGetQuery';
import { useEffect, useState } from 'react';
import AddToCartBtn from './AddToCartBtn';
import { PortableText } from '@portabletext/react';
import useCurrency from '@/utils/useCurrency';

const Description = ({ data }: { data: ItemTypes[] }) => {
  const { currency, defaultPrice } = useCurrency();
  const sizes = getSizes(data);
  const colors = getColours(data);

  const [getSize, setSize] = useState('');
  const [getColour, setColour] = useState('');

  useEffect(() => {
    if (data) {
      setColour(data[0]?.colour ? data[0]?.colour[0]?.title : '');
      setSize(data[0]?.size ? data[0]?.size[0] : '');
    }
  }, [data]);

  const colorFn = (value: string) => {
    setColour(value);
  };

  return (
    <div className="py-7">
      <h6 className="font-bold">{data[0]?.title}</h6>

      <div className="my-6">
        <PortableText value={data[0]?.description} />
      </div>

      <p className="my-10 font-bold">
        {currency} {defaultPrice(data[0]?.dollarPrice, data[0]?.cediPrice)}
      </p>

      {sizes.length > 0 ? (
        <div className="my-4 ">
          <span className="block mb-3 text-xs">Click to choose size</span>

          <div className="flex gap-2">
            {sizes.map((v, k) => (
              <div
                key={k}
                className={
                  getSize === v
                    ? ` border-b-primary border-b-2 w-max p-1`
                    : 'p-1 w-max  hover:border-b-primary hover:border-b-2 border-b-2 border-b-white'
                }
              >
                <button
                  className="cursor-pointer border-2 border-black/10 rounded-lg px-1"
                  onClick={() => setSize(v)}
                >
                  {v}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
      {colors.length > 0 ? (
        <div>
          <span className="block mb-3 text-xs">Click to choose colour</span>

          <div className="flex gap-2">
            {colors.map((v, k) => (
              <div
                key={k}
                title={v.title}
                className={
                  getColour === v.title
                    ? ` border-b-primary border-b-2 w-max p-1`
                    : 'p-1 w-max   hover:border-b-primary hover:border-b-2 border-b-2 border-b-white cursor-pointer'
                }
              >
                <Colour
                  onClick={() => colorFn(v?.title)}
                  hex={v?.hex}
                  colorName=""
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}

      <div className="mt-8">
        <AddToCartBtn getSize={getSize} getColour={getColour} data={data} />
      </div>
    </div>
  );
};

export default Description;
