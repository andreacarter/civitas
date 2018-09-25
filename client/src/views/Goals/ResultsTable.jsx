import React, { Component } from "react";
import API from "../../utils/API";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Delete from "@material-ui/icons/DeleteOutlined";
import Edit from "@material-ui/icons/Edit";
import Input from "./Input";
import FormBtn from "./FormBtn";
import Row from "./Row";
import Cell from "./Cell";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: [],
      employee: "",
      department: "",
      eventtype: "",
      hourscompleted: ""
    };
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    API.getAllHours().then(res =>
      this.setState({
        hours: res.data,
        employee: "",
        department: "",
        eventtype: "",
        hourscompleted: ""
      })
    );
  };

  deleteHours = id => {
    API.deleteHours(id).then(res => this.loadData());
  };

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
      hourscompleted: this.state.hourscompleted,
      date: new Date(Date.now())
    }).then(res => this.loadData());
  };

  render() {
    return (
      <div className="tableResponsive">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>Total Hours</TableCell>
              <TableCell>Edit or Delete Record</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.hours.map(hours => (
              <Row key={hours._id}>
                <Cell>{hours.employee}</Cell>
                <Cell>{hours.department}</Cell>
                <Cell>{hours.eventtype}</Cell>
                <Cell>{hours.hourscompleted}</Cell>
                <Cell>
                  <Edit />
                  <Delete onClick={() => this.deleteHours(hours._id)} />
                </Cell>
              </Row>
            ))}
            <TableRow>
              <TableCell>
                <Input
                  autoFocus
                  value={this.state.employee}
                  onChange={this.handleInputChange}
                  margin="dense"
                  name="employee"
                  label="Employee Name"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <Input
                  value={this.state.department}
                  onChange={this.handleInputChange}
                  margin="dense"
                  name="department"
                  label="Department"
                  type="input"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <Input
                  value={this.state.eventtype}
                  onChange={this.handleInputChange}
                  margin="dense"
                  name="eventtype"
                  label="Service Completed"
                  type="input"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <Input
                  value={this.state.hourscompleted}
                  onChange={this.handleInputChange}
                  margin="dense"
                  name="hourscompleted"
                  label="Service Hours"
                  type="input"
                  fullWidth
                />
              </TableCell>
              <TableCell>
              <FormBtn onClick={this.handleFormSubmit} color="success">
                Submit
              </FormBtn>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(tableStyle)(Results);
