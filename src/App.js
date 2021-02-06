// Import CSS
import './App.css';

// Import Header
import Header from './components/Header'
import Item from './components/Item'
import Footer from './components/Footer'

// Import Images
import Accessories from './assests/Desktop-Accessories.jpg'
import ModelS from './assests/Desktop-ModelS.jpeg'
import Model3 from './assests/Desktop-Model3.jpeg'
import ModelX from './assests/Desktop-ModelX.jpeg'
import ModelY from './assests/Desktop-ModelY.jpeg'
import SolarRoof from './assests/Desktop-SolarRoof.jpeg'
import SolarPanels from './assests/Desktop-SolarPanels.jpeg'

function App(){
    return (
        <div className="App">

           {/* Header with logo */}
           <Header />

           {/* Items */}
           <div className="app__itemsContainer">

                <Item
                  title = 'Lowest Cost Solar Panels in America'
                  desc = 'Money-back guarantee'
                  descLink = ''
                  backgroundImg = {SolarPanels}
                  leftBtnTxt = 'ORDER NOW'
                  leftBtnLink = 'https://www.tesla.com/energy/design'
                  rightBtnTxt = 'LEARN MORE'
                  rightBtnLink = 'https://www.tesla.com/solarpanels'
                  twoButtons = 'true'
                  first
                />

                <Item 
                  title = 'Model S'
                  desc = 'Order Online for Touchless Delivery'
                  descLink = ''
                  backgroundImg = {ModelS}
                  leftBtnTxt = 'CUSTOM ORDER'
                  leftBtnLink = 'https://www.tesla.com/models/design#overview'
                  rightBtnTxt = 'EXISTING INVENTORY'
                  rightBtnLink = 'https://www.tesla.com/inventory/new/ms'
                  twoButtons = 'true'
                />


                <Item 
                  title = 'Model 3'
                  desc = 'Order Online for Touchless Delivery'
                  descLink = ''
                  backgroundImg = {Model3}
                  leftBtnTxt = 'CUSTOM ORDER'
                  leftBtnLink = 'https://www.tesla.com/model3/design#overview'
                  rightBtnTxt = 'EXISTING INVENTORY'
                  rightBtnLink = 'https://www.tesla.com/inventory/new/m3'
                  twoButtons = 'true'
                />


                <Item 
                  title = 'Model X'
                  desc = 'Order Online for Touchless Delivery'
                  descLink = ''
                  backgroundImg = {ModelX}
                  leftBtnTxt = 'CUSTOM ORDER'
                  leftBtnLink = 'https://www.tesla.com/modelx/design#overview'
                  rightBtnTxt = 'EXISTING INVENTORY'
                  rightBtnLink = 'https://www.tesla.com/inventory/new/mx'
                  twoButtons = 'true'
                />

                <Item 
                  title = 'Model Y'
                  desc = 'Order Online for Touchless Delivery'
                  descLink = ''
                  backgroundImg = {ModelY}
                  leftBtnTxt = 'CUSTOM ORDER'
                  leftBtnLink = 'https://www.tesla.com/modely/design#overview'
                  rightBtnTxt = 'LEARN MORE'
                  rightBtnLink = 'https://www.tesla.com/modely'
                  twoButtons = 'true'
                />

                <Item
                  title = 'Solar for New Roofs'
                  desc = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                  descLink = ''
                  backgroundImg = {SolarRoof}
                  leftBtnTxt = 'ORDER NOW'
                  leftBtnLink = 'https://www.tesla.com/solarroof/design'
                  rightBtnTxt = 'LEARN MORE'
                  rightBtnLink = 'https://www.tesla.com/solarroof'
                  twoButtons = 'true'
                />



                <Item 
                  title = 'Accessories'
                  descLink = ''
                  backgroundImg = {Accessories}
                  leftBtnTxt = 'SHOP NOW'
                  leftBtnLink = 'https://shop.tesla.com/'
                  // rightBtnTxt = 'LEARN MORE'
                  // rightBtnLink = ''
                  // twoButtons = 'true'
                />

            <Footer />

           </div>

        </div>
    );
}

export default App;
