import useGetQuery from '@/state/query/useGetQuery';

const PostHero = () => {
  const data: {
    title: string;
    thumb: string;
    excerpt: string;
  }[] = useGetQuery('post', '/post') || [];

  const num = Math.floor(Math.random() * 5);

  return (
    <div
      className="h-150 before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:-z-1 text-white relative z-2
      flex items-center justify-start
      p-10
      "
      style={{
        backgroundImage: `url(${data[num]?.thumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="w-100">
      <h6 className="mb-6">{data[num]?.title}</h6>
      <p>{data[num]?.excerpt}</p>
      </div>

    </div>
  );
};

export default PostHero;
