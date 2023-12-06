import { RefObject, useEffect } from 'react';

export default function useClickOutside(ref: RefObject<HTMLElement>, onClose: () => void) {
  useEffect(() => {
    const onClick = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      onClose();
    };

    document.addEventListener('mousedown', onClick);

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [ref, onClose]);
}
