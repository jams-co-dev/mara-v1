
import localFont from 'next/font/local';

// =================================================================================
// NOTA IMPORTANTE:
// Por favor, asegúrate de que tus archivos de fuentes (.otf) están en
// la carpeta `src/assets/fonts/`.
// =================================================================================

export const ptSans = localFont({
  src: [
    {
      path: '../assets/fonts/PTSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PTSans-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/PTSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PTSans-BoldItalic.otf',
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
      path: '../assets/fonts/Belleza-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-belleza',
  display: 'swap',
});
