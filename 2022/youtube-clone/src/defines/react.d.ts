import 'react';
import { ReactElement } from 'react';

declare module 'react' {
  export type StrictPropsWithChildren<P = unknown, C = unknown> = P & { children: ReactElement<C> | ReactElement<C>[] };
}
