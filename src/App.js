import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = (msg, type = "SUCCESS") => {
    toast.success(msg, { type: toast.TYPE[type] });
  };
 
  return (
    <BrowserRouter>
      <ToastContainer />
      <Router notify={notify} />
    </BrowserRouter>
  );
}

export default App;
