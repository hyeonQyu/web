import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    logoUrl: string;
    color: string;
    background: string;
    dividerColor: string;
  }
}
