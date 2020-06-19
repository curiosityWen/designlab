import React from "react";

class PageUp extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    var header = document.getElementById("page-up");
    if (window.pageYOffset >= 120) {
      header.classList.add("up-scroll");
    } else {
      header.classList.remove("up-scroll");
    }
  };
  render() {
    return (
        <a id="page-up" className="page-up" href="#home">
          
        </a>
    );
  }
}
export default PageUp;
