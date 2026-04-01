'use client';

const ItemBanner = ({ img }: { img: string }) => {
  return (
    <div className="cont">
      <div
        className="w-full h-150 "
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
};

export default ItemBanner;
