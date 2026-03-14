'use client';

import { ItemTypes } from '@/types/types';
import { useState } from 'react';
import Modal from '../modal/Modal';
import { motion } from 'motion/react';

const ImageBox = ({ data }: { data: ItemTypes[] }) => {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState('');

  const handleClick = (val: string) => {
    setShowModal(true);
    setImg(val);
  };

  const g = data[0]?.gallery;
  const newArr = [
    {
      n1: g && g[0],
      n2: g && g[1],
      n3: g && g[2],
    },
    {
      n1: g && g[3],
      n2: g && g[4],
      n3: g && g[5],
    },
    {
      n1: g && g[6],
      n2: g && g[7],
      n3: g && g[8],
    },
  ];

  const arr = newArr.map((v, k) => (
    <div key={k}>
      <div className="flex gap-1">
        <div
          className={`group relative overflow-hidden   ${v.n1 ? 'flex-1 h-90' : ''} `}
        >
          <div
            className={`group-hover:scale-400  transform transition-transform duration-500 cursor-pointer   ${v.n1 ? 'h-90' : ''} `}
            style={{
              backgroundImage: `url(${v.n1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
            onClick={() => handleClick(v.n1)}
          ></div>
        </div>

        <div
          className={`group relative overflow-hidden   ${v.n2 ? 'flex-1 h-90' : ''} `}
        >
          <div
            className={`group-hover:scale-400  transform transition-transform duration-500 cursor-pointer   ${v.n2 ? 'h-90' : ''} `}
            style={{
              backgroundImage: `url(${v.n2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
            onClick={() => handleClick(v.n2)}
          ></div>
        </div>
      </div>

      <div
        className={`mt-1 group relative overflow-hidden   ${v.n3 ? ' h-120' : ''} `}
      >
        <div
          className={`group-hover:scale-400  transform transition-transform duration-500 cursor-pointer   ${v.n3 ? 'h-120' : ''} `}
          style={{
            backgroundImage: `url(${v.n3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
          onClick={() => handleClick(v.n3)}
        ></div>
      </div>
    </div>
  ));

  return (
    <div>
      {arr}
      <Modal img={img} showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default ImageBox;
