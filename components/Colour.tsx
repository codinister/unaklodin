'use client';

const Colour = ({ hex, colorName }: { colorName: string; hex: string }) => {
  return (
    <div className="w-max">
      <div
        className="border border-black/20 rounded-lg mb=2 p-3"
        style={{
          backgroundColor: hex,
        }}
      ></div>
      <p className="text-2">{colorName}</p>
    </div>
  );
};

export default Colour;
