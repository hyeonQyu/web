import { StrictPropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {}

export function Portal(props: StrictPropsWithChildren<PortalProps>) {
  const { children } = props;
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById('portal'));
  }, []);

  return element ? ReactDOM.createPortal(<>{children}</>, element) : <></>;
}
