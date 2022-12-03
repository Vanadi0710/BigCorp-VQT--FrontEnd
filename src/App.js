import Login from "./pages/login";
import SiderBar from "./pages/siderbar";
import Header from "./pages/component/header";
import Footer from "./pages/component/footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <SiderBar></SiderBar>
        <Footer/>
    </div>
  );
}

export default App;
