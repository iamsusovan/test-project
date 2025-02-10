import { useEffect } from "react";
import './App.css';
const isMobile = () => {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent);
};

function App() {
  useEffect(() => {
    if (isMobile()) {
      window.location.href = "https://m.cricbuzz.com/";
    }
  }, []);
  return (
    <>
      <h1 className='text-3xl text-purple-600 text-center'>The site is coming soon</h1>
    </>
  );
}

export default App;
