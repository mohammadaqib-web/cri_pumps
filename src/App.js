import logo from './images/logo.png';
import trophy from './images/1.png';
import groupImg from './images/2.png';
import machines from './images/3.png';
import './App.css';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import { faPhone, faF, faGlobe } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <div className="logo-img">
        <img src={logo} alt="CRI Logo" className="logo" />
      </div>
      <div className="content-container">
        <div style={{width:"35%"}} className='trophy-sec'>
          <img src={trophy} alt="trophy" height="600px" className="trophy-img"/>
        </div>
        <div style={{width:"60%"}} className='trophy-cont'>
          <strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <img src={groupImg} alt="group" height="450px" width="100%" className='group-img'/>
          <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <div className="machines">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src={machines} alt="machines" height="450px" className='machine-img'/>
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>
      <hr style={{width:"95%",backgroundColor:"red",height:"2px",border:"none"}}/>
      <div className="after-machines">
        <strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
        <p>CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL</p>
      </div>
      <div className="footer">
        <span style={{color:"white"}} className='foot'><FontAwesomeIcon icon={faPhone}/> Toll Free 1800 200 1234</span>
        <span style={{color:"white"}} className='foot'><FontAwesomeIcon icon={faF}/> www.facebook.com/cripumps</span>
        <span style={{color:"white"}} className='foot'><FontAwesomeIcon icon={faGlobe}/> www.cripumps.com</span>
      </div>
    </div>
  );
}

export default App;
