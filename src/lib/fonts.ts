
import localFont from 'next/font/local';

// =================================================================================
// NOTA IMPORTANTE:
// Por favor, sube tus archivos de fuentes a la carpeta `public/fonts/`
// y asegúrate de que los nombres de archivo coincidan con los que se usan aquí.
// Puedes añadir o quitar pesos (weight) según los archivos que tengas.
// =================================================================================

export const ptSans = localFont({
  src: [
    {
      path: '../../public/fonts/PTSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PTSans-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PTSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PTSans-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-pt-sans',
  display: 'swap',
});

export const belleza = localFont({
  src: [
    {
      path: '../../public/fonts/Belleza-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-belleza',
  display: 'swap',
});
