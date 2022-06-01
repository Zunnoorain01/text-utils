import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('dark');
  return (
    <>
      <Navbar mode={mode}/>
      <TextForm />
    </>
  )
}

export default App