'use client'

import { useQuery } from '@tanstack/react-query';
import fetchApi from './fetchApi';


const useGetQuery = (key: string, url: string) => {

  const fn = () => {
    return fetchApi({ url });
  };

  const result = useQuery({
    queryKey: [key],
    queryFn: fn,
  });

  const {data,isPending, isError} = result
  return isError ? 'An error occured' : isPending ? [] : data?.data
  
};

export default useGetQuery;
