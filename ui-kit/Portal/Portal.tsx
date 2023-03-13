import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const Portal = (props) => {
  const { children } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector('#modal'))
    : null;
};
