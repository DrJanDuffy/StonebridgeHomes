import { renderToString, RenderOptions } from '@builder.io/qwik/server';
import { manifest } from '@qwik-city-plan';
import Root from './root';

export default function (opts: RenderOptions) {
  return renderToString(<Root />, {
    manifest,
    ...opts,
  });
}