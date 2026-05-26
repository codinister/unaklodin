'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { Button } from './ui/button';
import Link from 'next/link';
import PostCard from './post/PostCard';
import { motion } from 'motion/react';
import { fadeUp, fadeUpCustom, staggerChildren } from '@/variants/variants';

const BlogPosts = () => {
  const data = useGetQuery('post', '/v1/posts') || [];

  return (
    <div className="cont  pt-6 pb-10 ">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="text-center mb-10"
      >
        <motion.div
          variants={fadeUpCustom}
          custom={0.2}
          className="flex justify-center items-center gap-1"
        >
          <div className="border-b-2 border-b-primary w-20"></div>{' '}
          <p>UNA Klodin Blog</p>{' '}
          <div className="border-2 border-b-primary w-20"></div>
        </motion.div>

        <motion.h3 variants={fadeUpCustom} custom={0.3}>
          Our Blog
        </motion.h3>
      </motion.div>

      <div className="flex-col sm:flex-row flex gap-4">
        {data
          .slice(0, 3)
          .map(
            (
              v: { title: string; thumb: string; excerpt: string; id: string },
              k: number,
            ) => {
              return (
                <motion.div
                  key={k}
                  variants={fadeUpCustom}
                  initial="hidden"
                  whileInView="visible"
                  custom={(Number(k) + 1) * 0.2}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                >
                  <PostCard v={v} />
                </motion.div>
              );
            },
          )}
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <Link
          href="/blog"
          className="mt-12 mx-auto block w-max text-primary  border-b border-b-primary"
        >
          <Button>View All</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default BlogPosts;
