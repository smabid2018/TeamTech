import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import { LoginReg } from './Components/LoginReg/LoginReg';

function App() {

  const [lat,setLat]=useState()
  const [lon,setLon]=useState()

  useEffect(()=>{
      navigator.geolocation.getCurrentPosition((postion)=>{
          setLat(postion.coords.latitude)
          setLon(postion.coords.longitude)
      })
  })


  return (
    <div>
      <LoginReg/>
      {console.log(lat)}
      {console.log(lon)}
    </div>
  );
}

export default App;
