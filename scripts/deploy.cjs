// scripts/deploy.js
// import pkg from '@cloudflare/next-on-pages';
// const { nextOnPages } = pkg;

// await nextOnPages({
//   name: 'nextn', // Nombre de tu proyecto (opcional)
//   compatibilityFlags: ['nodejs_compat'], // Habilita compatibilidad con Node.js
//   define: {
//     'process.env.NODE_ENV': JSON.stringify('production'),
//     // Agrega otras variables que necesites
//     // 'process.env.FIREBASE_API_KEY': JSON.stringify('...'),
//   },
// });

// // Opcional: despliega automáticamente
// console.log('Desplegando con Wrangler...');
// await import('child_process').execSync('cd .output/server && wrangler deploy', {
//   stdio: 'inherit',
// });

// scripts/deploy.js
// scripts/deploy.cjs

const { nextOnPages } = require('@cloudflare/next-on-pages');

nextOnPages().then(() => {
  console.log('Build para Cloudflare completado.');
});