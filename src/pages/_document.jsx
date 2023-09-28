import { Html, Head, Main, NextScript } from 'next/document';

// const themeScript = `
//   let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

//   function updateTheme(savedTheme) {
//     let theme = 'system'
//     try {
//       if (!savedTheme) {
//         savedTheme = window.localStorage.theme
//       }
//       if (savedTheme === 'dark') {
//         theme = 'dark'
//         document.documentElement.classList.add('dark')
//       } else if (savedTheme === 'light') {
//         theme = 'light'
//         document.documentElement.classList.remove('dark')
//       } else if (mediaQuery.matches) {
//         document.documentElement.classList.add('dark')
//       } else {
//         document.documentElement.classList.remove('dark')
//       }
//     } catch {
//       theme = 'light'
//       document.documentElement.classList.remove('dark')
//     }
//     return theme
//   }

//   function updateThemeWithoutTransitions(savedTheme) {
//     updateTheme(savedTheme)
//     document.documentElement.classList.add('[&_*]:!transition-none')
//     window.setTimeout(() => {
//       document.documentElement.classList.remove('[&_*]:!transition-none')
//     }, 0)
//   }

//   document.documentElement.setAttribute('data-theme', updateTheme())

//   new MutationObserver(([{ oldValue }]) => {
//     let newValue = document.documentElement.getAttribute('data-theme')
//     if (newValue !== oldValue) {
//       try {
//         window.localStorage.setItem('theme', newValue)
//       } catch {}
//       updateThemeWithoutTransitions(newValue)
//     }
//   }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

//   mediaQuery.addEventListener('change', updateThemeWithoutTransitions)
//   window.addEventListener('storage', updateThemeWithoutTransitions)
// `;

export default function Document() {
  return (
    <Html className="h-full bg-white">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://fonts.google.com/specimen/Red+Hat+Display" />
        <link rel="apple-touch-icon" href="/favicon_prisma.svg" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon_prisma.svg" type="image/svg" sizes="16x16" />
        <meta name="keywords" content="MAIN, Prisma, aliado estratégico, eficiencia, agilidad, vigilancia, personal, seguridad, operacion" />
        <meta name="description" content="Prisma es la aplicación de administración de personal de seguridad definitiva para las empresas de seguridad privada." />
        <meta name="autor" content="MAIN - Módulos, Aplicaciones e Innovación" />
        {/* <script dangerouslySetInnerHTML={{ __html: themeScript }} /> */}
      </Head>
      <body className="bg-white" id="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
