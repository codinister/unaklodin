'use client';

const ItemImage = ({ img }: { img: string }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className="sm:h-75 lg:80  p-50 sm:p-0"
    ></div>
  );
};

export default ItemImage;
