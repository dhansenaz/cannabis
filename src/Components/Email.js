import React, { Component } from "react";
import "./email.css";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Email extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true, email: "" });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleInputChange(e) {
    this.setState({ email: e }, () => console.log(this.state));
  }
  render() {
    const email = this.state.email;
    return (
      <div className="email-sign">
        <div className="email">
          SIGN UP FOR UPDATES AND FREEBIES
          <input
            onChange={e => this.handleInputChange(e.target.value)}
            type="text"
            value={this.state.email}
          />
          <button onClick={this.openModal} email="">
            Submit
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2
              ref={subtitle => (this.subtitle = subtitle)}
              style={{ color: "blue" }}
            >
              Thanks for signing up!
            </h2>
            <div style={{ color: "black", marginBottom: "1em" }}>
              You will receive an email shortly. Cheers!
            </div>
            <button
              style={{
                borderRadius: ".5em",
                border: "none",
                padding: ".5em",
                cursor: "pointer"
              }}
              onClick={this.closeModal}
            >
              close
            </button>
          </Modal>
        </div>
      </div>
    );
  }
}
export default Email;
