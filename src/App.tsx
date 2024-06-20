import "./App.css";
import DropdownComponent from "./components/common-components/dropdownComponent";
import SideNavBar from "./layout/sideBar";
import Automation from "./pages/automation/automation";
import PageRoutes from "./routes/page-route";

function App() {
  return (
    <div className="App">
      {/* <DropdownComponent
            options={[
              { value: "Hours", label: "Hours" },
              { value: "Days", label: "Days" },
              { value: "Weeks", label: "Weeks" },
              { value: "Months", label: "Months" },
            ]}
            getData={(value) => {
              // data.onchange(id, "unit", value.value);
            }}
            isDisabled={false}
            value={{ value: "Days", label: "Days" }}
            title="Unit:"
            // required
            width="200px"
            placeHolder="Select"
            // errorMessage="Please select an option"
          /> */}
      {/* <SideNavBar />
      <div className="content">
        <Automation /> */}
      {/* </div> */} 
        <PageRoutes /> 
      <div></div>
    </div>
  );
}

export default App;
