'use client';

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center bg-secondary text-white py-10">
      <h5>{title}</h5>
    </div>
  );
};

export default PageHeader;
