import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialMode) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialMode)

      return [darkMode, setDarkMode];
}

export default useDarkMode;