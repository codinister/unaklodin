import React from 'react';

const MenPreview = ({ value }: {value: any}) => {
  const firstImage = value?.items?.images?.[0]?.img;
  const imageUrl = firstImage?.asset?.url;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={value.title || 'Men item'}
          style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }}
        />
      )}
      <span>{value.title}</span>
    </div>
  );
};


export default MenPreview
