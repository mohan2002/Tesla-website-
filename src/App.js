import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CarHome from './Components/CarHome';
import ModelS from './Images/0x0-ModelS_02.jpg'
import ModelY from './Images/Model Y/0x0-ModelY_03.jpg'
import Model3 from './Images/Model 3/0x0-Model3_26.jpg'
import ModelX from './Images/Model X/0x0-ModelX_05.jpg'
import SolarPanels from './Images/Solar/0x0-SolarPanels_05.jpg'
import SolarRoof from './Images/Solar Roofs/0x0-SolarRoof_06.jpg'
import Charger from './Images/Charger1.jpg'
import Footer from './Footer';


function App() {
  const Data = [
    {
      id: 1,
      name:'Model S',
      img:ModelS,
      text:'Order Online for ',
      btn1:'custom order',
      touchless:'Touchless Delivery',
      btn2:'order now',
    },
    {
      id: 2,
      name:'Model Y',
      img:ModelY,
      text:'Order Online for ',
      touchless:'Touchless Delivery',
      btn1:'custom order',
      btn2:'order now',
    },
    {
      id: 3,
      name:'Model 3',
      img:Model3,
      text:'Order Online for ',
      touchless:'Touchless Delivery',
      btn1:'custom order',
      btn2:'order now',
    },
    {
      id: 4,
      name:'Model X',
      img:ModelX,
      text:'Order Online for ',
      touchless:'Touchless Delivery',
      btn1:'custom order',
      btn2:'order now',
    },
    {
      id: 5,
      name:'Solar Panels',
      img:SolarPanels,
      text:'Lowest Cost Solar Panels in America',
      touchless:'',
      btn1:'order now',
      btn2:'learn more',
    },
    {
      id: 6,
      name:'Solar Roof',
      img:SolarRoof,
      text:'Produce Clean Energy From Your Roof',
      touchless:'',
      btn1:'order now',
      btn2:'learn more',
    },
    {
      id: 7,
      name:'Accessories',
      img:Charger,
      touchless:'',
      btn1:'Shop now',
    },
  ]
  return (
    <div className="App">
      <BrowserRouter>

        {
          Data.map((item) => (
              <div className="sections">
                    <CarHome item={item} key={item.id}/>
              </div>
          ))
        }
          
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
