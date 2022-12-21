import "./index.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div class="stars">
      <div class="central-body">
        <img class="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="logo" />
        <Link to="/sign-in" class="btn-go-home" target="_self">
          GO BACK HOME
        </Link>
      </div>
      <div class="objects">
        <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="logo" />
        <div class="earth-moon">
          <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="logo" />
          <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="logo" />
        </div>
        <div class="box_astronaut">
          <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
