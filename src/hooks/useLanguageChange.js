import useLocalStorage from "./useLocalStorage";

const useLanguageChange = (key, initialMode) => {
    const [language, setLanguage] = useLocalStorage(key, initialMode)

      return [language, setLanguage];
}

export default useLanguageChange;