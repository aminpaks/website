import 'twin.macro';
import { css as cssImport } from '@emotion/react';

// The css prop
// https://emotion.sh/docs/typescript#css-prop
import {} from '@emotion/react/types/css-prop';

declare module 'twin.macro' {
  const css: typeof cssImport;
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes extends React.Attributes {
      as?: string;
    }
  }
}
