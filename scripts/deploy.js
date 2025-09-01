// scripts/deploy.js
import nextOnPages from '@cloudflare/next-on-pages/cli';

await nextOnPages({
  name: 'nextn',
  compatibilityFlags: ['nodejs_compat'],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});

