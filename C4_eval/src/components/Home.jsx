import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <div className="homepage">
      <div>welcome</div>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      Welcome to Laptop service center. Please login to continue
    </div>
  );
};
