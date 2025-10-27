import { component$ } from '@builder.io/qwik';

export const StructuredData = component$((props: { data: unknown }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={JSON.stringify(props.data)}
    />
  );
});

