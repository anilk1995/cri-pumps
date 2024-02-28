import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { ImSphere } from "react-icons/im";
function App() {
  return (
    <div className="container m-auto d-flex flex-column align-items-center justify-items-center">
      <div>
        <img src="logo.png" alt="logo-thumbnail" className="logo" />
      </div>
      <div className="d-flex award-container">
        <div>
          <img src="1.png" alt="trophy" className="trophy-image" />
        </div>
        <div>
          <ul>
            <p className="fs-11 bolder">
              {" "}
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </p>
            <li className="ml-40 fs-12 semibold">
              {" "}
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li className="ml-40 fs-12 semibold">
              {" "}
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src="2.png" alt="award" className="award-image " />
          <p className="fs-12 ml-40 semibold">
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className=" d-flex m-auto flex-column">
        <p className="fs-12 bold">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src="3.png" alt="products" className="product-image" />
        <p className="text-center bold fs-12">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <div className=" border-top">
        <p className="text-center fs-12 bold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className="text-center fs-12 semibold">
          CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE
          WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span>{" "}
          SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span>{" "}
          MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD &
          BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span>{" "}
          SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE
          FIGHTING <span>|</span>
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="bg-red d-flex footer align-items-center justify-content-around fs-13">
        <div className="d-flex align-items-center">
          <IoMdCall className="svg"/>
          <p className="link fs-11">Toll free <label>18002001234</label></p>
          </div>
        <div className="d-flex align-items-center">
        <FaFacebookF className="svg" />
        <a href="www.facebook.com/crigroups" className="link">www.facebook.com/crigroups</a>
        </div>
        <div className="d-flex align-items-center">
        <ImSphere className="svg" />
        <a href="www.crigroups.com" className="link" target="blank">www.crigroups.com</a>

        </div>
      </div>
    </div>
  );
}

export default App;
