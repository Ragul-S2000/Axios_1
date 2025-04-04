
import List from "../Pages/List"
import Welcome from "../Pages/Welcome"
import { useLocation } from "react-router-dom";


const RouteWithBackground = ({ element }) => {
    const location = useLocation();
    const backgroundColors = {
      "/": "lightblue",
      "/list":"lightgreen",
    };
  
    const backgroundColor = backgroundColors[location.pathname] || "white";
  
    return (
      <div style={{ backgroundColor,minHeight:"100vh",width:"100%" }}>
        {element}
      </div>
    );
  };

export const routes = [
    {
        path: "/",
        exact: true,
        element: <RouteWithBackground element={<Welcome />} />
      },
      {
        path:"/list",
        exact:true,
        element:<RouteWithBackground element={<List />} />
      }]