'use client';

const Colour = ({ colorName }: { colorName: string }) => {
  const shirtColors: any = {
    jetblack: '#000000',
    purewhite: '#FFFFFF',
    ashgrey: '#B2B2B2',
    charcoalgrey: '#36454F',
    navyblue: '#000080',
    creamoffwhite : '#F5F5DC',
    sandbeige: '#D2B48C',
    olivegreen: '#556B2F',
    burgundywine: '#800020',
    Forestgreen: '#228B22',
    Royalblue: '#4169E1',
    mustardyellow: '#FFDB58',

    deepnavyblue: '#000033'
  };

  const names = colorName.split(' ').join('').split('-').join('').toLowerCase()

  console.log(names)

  const color = shirtColors[names];

  return (
    <div className="w-max">
      <div
        className="border border-black/20 rounded-lg mb=2 p-3"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <p className="text-2">{colorName}</p>
    </div>
  );
};

export default Colour;
