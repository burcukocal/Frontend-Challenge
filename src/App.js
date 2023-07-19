import Profile from './components/Profile';
import Skills from './components/Skills';
import Info from './components/Info';
import Header from './components/Header';
import useDarkMode from './hooks/useDarkMode';
import useLanguageChange from './hooks/useLanguageChange';
import Mode from './components/Mode';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [ darkMode, setDarkMode ] = useDarkMode("darkMode", false)
  const [ language, setLanguage ] = useLanguageChange("language", "en")

  return (
    <div className={`${darkMode ? "dark bg-[#2A262B]" : "App" }`}>
      <Mode darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />
      <Header language={language}/>
      <Info language={language}/>
      <Skills language={language}/>
      <Profile language={language}/>
      <Projects language={language}/>
      <Footer language={language}/>
    </div>
  );
}

export default App;
