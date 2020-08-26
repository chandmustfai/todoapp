import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-start">{this.props.totalItems} Items left</div>
        {/* <div className="footer-mid">
                    <span>All</span>
                    <span>Active</span>
                    <span>Completed</span>
        </div> */}
        <div className="footer-end">Clear Completed</div>
      </div>
    );
  }
}

export default Footer;
