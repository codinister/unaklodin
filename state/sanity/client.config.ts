'use client';

import { defineConfig } from 'sanity';
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import { schemaTypes } from './schemaTypes';

const key = process.env.NEXT_PUBLIC_SANITY_CLIENT_KEY || '';

const clientConfig = defineConfig({
  title: 'UNA Klodin',
  dataset: 'production',
  projectId: key,
  basePath: '/admindashboard',
  schema: {
    types: schemaTypes
  },
  plugins: [structureTool(), visionTool()]
});

export default clientConfig;
