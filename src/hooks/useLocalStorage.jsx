import { useState } from 'react';

//source : https://monsterlessons-academy.com/posts/react-local-storage-how-to-sync-state-and-local-storage-in-react

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });
    //----end of initialization of the state
  
    const setValue = (value) => {
      try {
        setStoredValue(value);
  
        if (typeof window !== "undefined") {
          localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.log(error);
      }
    };
    return [storedValue, setValue];
  };
  
  export default useLocalStorage;
  