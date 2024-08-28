/* eslint-disable arrow-body-style */

import { useEffect, useRef } from "react";

function useDebounce(callbackFn, delay) {
  const timerIDRef = useRef(undefined);

  useEffect(() => {
    return () => {
      clearTimeout(timerIDRef.current);
      timerIDRef.current = undefined;
    };
  }, []);

  // eslint-disable-next-line func-names
  return function (...args) {
    const context = this;
    if (timerIDRef.current) clearTimeout(timerIDRef.current);
    timerIDRef.current = setTimeout(() => {
      callbackFn.apply(context, args); // keep the context of this
    }, delay);
  };
}

export default useDebounce;
