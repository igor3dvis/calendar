import React, { Component } from "react";
import Button from "./Button";
import "./styles/Modal.css";

class Modal extends Component {
  state = {
    btnOk: "Ok",
    btnCancel: "Cancel",
  };

  render() {
    return (
      <div>
        <div className="modal-body">
          <p className="modal-descript">{this.props.status.desc}</p>
          <div className="modal-btn-wrap">
            <Button caption={this.state.btnOk} />
            <Button clickHandler={this.props.onCancel} caption={this.state.btnCancel} />
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
