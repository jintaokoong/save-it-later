import { MutableRefObject, useEffect } from 'react';

const useOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  btnRef: MutableRefObject<HTMLButtonElement | null>,
  open: boolean,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        ref.current &&
        btnRef.current &&
        !btnRef.current.contains(event.target) &&
        !ref.current.contains(event.target) &&
        open
      ) {
        callback();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, btnRef, open, callback]);
};

export default useOutside;
