import { useState } from "react";

export const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://tse4.mm.bing.net/th?id=OIP.WRUnwFa0F_sBiU8T1SOrAwHaHa&pid=Api&P=0"
      />
    </a>
  );


  const Header = () => {
    const[ title, setTitle] = useState("Food Villa")
    return (
      <div className="header">
        {Title()}
     
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;