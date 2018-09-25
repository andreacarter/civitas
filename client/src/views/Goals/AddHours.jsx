import React, { Component } from "react";
import API from "../../utils/API";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle";

class AddHours extends Component {
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.saveHours({
      employee: this.state.employee,
      department: this.state.department,
      eventtype: this.state.eventtype,
      hourscompleted: this.state.hourscompleted
    }).then(res => this.loadData());
  };

  render() {
    return (
      <div>
        <Card>
          <CardHeader color="primary">
            <h4>Add Service Hours</h4>
          </CardHeader>
          <CardBody>
            <TextField
              autoFocus
              value={this.state.employee}
              onChange={this.handleInputChange}
              margin="dense"
              name="employee"
              label="Employee Name"
              type="input"
              fullWidth
            />
            <TextField
              value={this.state.department}
              onChange={this.handleInputChange}
              margin="dense"
              name="department"
              label="Department"
              type="input"
              fullWidth
            />
            <TextField
              value={this.state.eventtype}
              onChange={this.handleInputChange}
              margin="dense"
              name="eventtype"
              label="Service Completed"
              type="input"
              fullWidth
            />
            <TextField
              value={this.state.hourscompleted}
              onChange={this.handleInputChange}
              margin="dense"
              name="hourscompleted"
              label="Service Hours"
              type="input"
              fullWidth
            />
          </CardBody>
          <CardFooter>
            <Button onClick={this.handleFormSubmit} color="success">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default withStyles(tableStyle)(AddHours);
