import "./index.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="stars">
      <div className="central-body">
        <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="logo" />
        <Link to="/sign-in" className="btn-go-home" target="_self">
          GO BACK HOME
        </Link>
      </div>
      <div className="objects">
        <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="logo" />
        <div className="earth-moon">
          <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="logo" />
          <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="logo" />
        </div>
        <div className="box_astronaut">
          <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
