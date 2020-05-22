import React, { Component } from "react";
class Nav extends Component {
  render() {
    return (
      <div>
      <div className="navigation-bar">
    <div id="navigation-container">
      <a href="index.html"><img src="./assets/logo.png" width="100"></img></a>
      <ul>
        <li><a href="about.html">about</a></li>
        <li><a href="work.html">work</a></li>
        <li><a href="https://github.com/jessmaple">github</a></li>
        <li><a href="https://www.linkedin.com/in/jessmaple/">linkedin</a></li>
        <li><a href="resume.html">resume</a></li>
      </ul>
    </div>
    </div>
</div>
    );
  }
}
export default Nav;