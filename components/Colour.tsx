'use client';

type ColourProps = { hex: string; colorName: string } & React.HTMLAttributes<HTMLDivElement>;

const Colour = ({ hex,colorName, ...props }: ColourProps) => {
  return (
    <div className="w-max" {...props}>
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
