'use client';

type ColourProps = { hex: string } & React.HTMLAttributes<HTMLDivElement>;

const Colour = ({ hex, ...props }: ColourProps) => {
  return (
    <div className="w-max" {...props}>
      <div
        className="border border-black/20 rounded-lg mb=2 p-3"
        style={{
          backgroundColor: hex,
        }}
      ></div>
    </div>
  );
};

export default Colour;
