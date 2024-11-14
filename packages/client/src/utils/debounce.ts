import { useCallback } from "react";
import { debounce } from "lodash";

export default function useDebounce(callback: any, delay: number) {
  const debouncedFn = useCallback(
    debounce((...args: any[]) => callback(...args), delay),
    [delay]
  );

  return debouncedFn;
}
