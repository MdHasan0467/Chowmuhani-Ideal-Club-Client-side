import { useEffect, useState } from "react";

/*
🧠 Debounce Logic:
- user typing করলে সাথে সাথে filter না চালিয়ে
- কিছু delay (400ms) পরে value update হয়
- এতে performance improve হয়
*/

const useDebounce = (value, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;