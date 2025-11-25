import { createClient } from 'next-sanity';

const key = process.env.SANITY_SERVER_KEY || '';

const serverConfig = createClient({
  dataset: 'production',
  projectId: key,
  apiVersion: '2025-11-22',
  useCdn: true,
});

export default serverConfig;
