import { component$, useStyles$ } from '@builder.io/qwik';
import { RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import globalStyles from './styles/global.css?inline';

export default component$(() => {
  useStyles$(globalStyles);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="min-h-screen bg-heritage-light">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </>
  );
});