import React from "react";

//stateless Functional Component
const NavBar = ({ totalCounter }) => {
  console.log("NavBar - Rendered");

  // the const references the props property.
  return (
    <nav className="navbar navbar-light br-light">
      <a href=" " className="navbar-brand">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">{totalCounter}</span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
// return (
//   <nav className="navbar navbar-light br-light">
//     <a href="#" className="navbar-brand">
//       NavBar{" "}
//       <span className="badge badge-pill badge-secondary">
//         {this.props.totalCounter}
//       </span>
//     </a>
//   </nav>
// );
//   }
// }

export default NavBar;
