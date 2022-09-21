import React from "react";
import FormInput from "./InputField";
import Button from "./Button";
import MyTextArea from "./MyTextArea";
import Checkbox from "./Checkbox";

class LoginPage extends React.Component {
  state = {
    user: {
      custid: "",
      ifsc: "",
      email: "",
      phone: "",
      address: "",
    },
    errors: {},
    submitted: false,
  };

  handleChange = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };

  //   handleTextArealInputChange = (event) => {
  //     const { user } = this.state;
  //     user[event.target.name] = event.target.value;
  //     this.setState({ user })
  //     setValues({ ...values, textArea: event.target.value });
  //   };

  onSubmit = () => {
    const {
      user: { custid, ifsc, email, phone, address },
    } = this.state;
    let err = {};

    if (!custid) {
      err.custid = "Enter your Custumer ID!";
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      err.email = "Enter a valid Email address";
    }

    if (!ifsc.match("^[A-Z]{4}0[A-Z0-9]{6}$")) {
      err.ifsc = "Enter valid IFSC code";
    }

    if (!phone.match(/^\d{10}$/)) {
      err.phone = "Phone number must be 10 digit";
    }

    if (address.length < 5) {
      err.address = "Enter your address";
    }

    this.setState({ errors: err }, () => {
      if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
        this.setState({ submitted: true });
      }
    });
  };

  render() {
    const {
      submitted,
      errors,
      user: { custid, ifsc, email, phone, address },
    } = this.state;
    return (
      <>
        <div className="card">
          <React.Fragment>
            {submitted ? (
              <p>
                Submitted Successfully!
                <br />
                Details of Customer ID: {custid} <br />
                IFSC code: {ifsc} <br />
                Email: {email}
                <br />
                Contact number: {phone} <br />
                Address: {address}
              </p>
            ) : (
              <React.Fragment>
                <div className={"card-header text-center"}>J&Bank Details</div>
                <div className="card-body">
                  <FormInput
                    label="Customer Id "
                    name="custid"
                    type="text"
                    value={custid}
                    onChange={this.handleChange}
                    placeholder="Enter Customer ID"
                    error={errors.custid}
                    required
                    className="form-control"
                  />

                  <FormInput
                    label="IFSC "
                    name="ifsc"
                    type="text"
                    value={ifsc}
                    onChange={this.handleChange}
                    placeholder="Enter your IFSC Code"
                    error={errors.ifsc}
                    required
                    className="form-control"
                  />

                  <FormInput
                    label="Email "
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Enter email"
                    error={errors.email}
                    className="form-control"
                    required
                  />

                  <FormInput
                    label="Phone "
                    name="phone"
                    type="text"
                    value={phone}
                    onChange={this.handleChange}
                    placeholder="Enter phone number"
                    error={errors.phone}
                    className="form-control"
                    required
                  />
                  <MyTextArea
                    type="text"
                    name="address"
                    label="Address"
                    value={address}
                    error={errors.address}
                    className="form-control"
                    onChange={this.handleChange}
                    placeholder="Enter address"
                    required
                  />
                  <h7> Cards </h7>
                  <Checkbox
                    type="checkbox"
                    name="checkbox"
                    className="checkbox-example"
                    onChange={this.handleChange}
                    label="Debit"
                  />
                  <Checkbox
                    type="checkbox"
                    name="checkbox"
                    className="checkbox-example"
                    onChange={this.handleChange}
                    label="Credit"
                  />

                  <Button
                    type="submit"
                    label="Submit"
                    className="btn btn-primary"
                    handleClick={this.onSubmit}
                  />
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </div>
      </>
    );
  }
}

export default LoginPage;
