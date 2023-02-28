import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/sb-admin-2.css";
import "../src/fontawesome-free/css/all.min.css"
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Card from "./Card";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Buttons from "./Buttons";
import Charts from "./Charts";
import Tables from "./Tables";
import Cards from "./Card";

// import Edituser from "./Edituser";


function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/dashboard" element ={<Dashboard/>}></Route>
              <Route path="/buttons" element ={<Buttons/>}></Route>
              {/* <Route path="/user_create" element ={<Usercreate/>}></Route> */}
               <Route path="/tables" element ={<Tables/>}></Route>
              <Route path="/charts" element ={<Charts/>}></Route> 
              <Route  path="/cards" element={<Cards/>}> </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
