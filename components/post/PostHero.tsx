import useGetQuery from '@/state/query/useGetQuery';

const PostHero = () => {
  const data: {
    title: string;
    thumb: string;
    excerpt: string;
  }[] = useGetQuery('post', '/v1/posts') || [];

  const num = Math.floor(Math.random() * 5);

  return (
    <div
      className="sm:h-150 px-6 sm:px-0 py-50 sm:py-0 before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:-z-1 text-white relative z-2
      flex items-center justify-start
      my-10
      "
      style={{
        backgroundImage: `url(${data[num]?.thumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="sm:w-100 p-4 sm:p-6">
      <h6 className="mb-6">{data[num]?.title}</h6>
      <p>{data[num]?.excerpt}</p>
      </div>

    </div>
  );
};

export default PostHero;
