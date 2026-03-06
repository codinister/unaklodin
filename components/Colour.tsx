'use client';

const Colour = ({ hex, colorName, clickHandler }: { colorName: string; hex: string; clickHandler: Function }) => {
  return (
    <div className="w-max" onClick={()=> clickHandler(colorName)}>
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
