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
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [ darkMode, setDarkMode ] = useDarkMode("darkMode", false)
  const [ language, setLanguage ] = useLanguageChange("language", "en")
  const [dataEn, setDataEn] = useState({});
  const [dataTr, setDataTr] = useState({});

  useEffect(() =>{
    axios.get(" http://localhost:8000/en")
    .then(res => {
      setDataEn(res.data);
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[]);

  useEffect(() =>{
    axios.get(" http://localhost:8000/tr")
    .then(res => {
      setDataTr(res.data);
    })
    .catch(err=>{
      console.log(err)
    })
  },[]);

  return (
    <div className={`${darkMode ? "dark bg-[#2A262B]" : "App" }`}>
      <Mode darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} dataEn={dataEn} dataTr={dataTr}/>
      <Header language={language} dataEn={dataEn} dataTr={dataTr}/>
      <Info language={language} dataEn={dataEn} dataTr={dataTr}/>
      <Skills language={language} dataEn={dataEn} dataTr={dataTr}/>
      <Profile language={language} dataEn={dataEn} dataTr={dataTr}/>
      <Projects language={language} dataEn={dataEn} dataTr={dataTr}/>
      <Footer language={language} dataEn={dataEn} dataTr={dataTr}/>
    </div>
  );
}

export default App;
