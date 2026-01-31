'use client'
import { useQuery } from '@tanstack/react-query';
import fetchApi from './fetchApi';

const useGetQuery = (key: string,url: string) => {
  const fn = () =>
    fetchApi({
      url,
    });

  const { data } = useQuery({
    queryKey: [key],
    queryFn: fn,
  });
  return data?.data || [];
};

export default useGetQuery;
