import { useSystem } from "@/store";

function useLanguage() {
  const { setLangAction } = useSystem();

  const setLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    setLangAction(lang);
  };

  return { setLang };
}

export default useLanguage;
