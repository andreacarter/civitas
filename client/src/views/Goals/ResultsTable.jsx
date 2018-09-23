import React, { Component } from "react";
import API from "../../utils/API";
// core components
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import DeleteBtn from "components/DeleteBtn/DeleteBtn.jsx";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { hours: [] };
  }
  componentDidMount() {
    API.getAllHours()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console(err));
  }

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
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.hours.map(hours => (
              <TableRow key={hours._id}>
                <TableCell>{hours.employee}</TableCell>
                <TableCell>{hours.department}</TableCell>
                <TableCell>{hours.eventtype}</TableCell>
                <TableCell>{hours.servicehours}</TableCell>
                <TableCell>
                  <DeleteBtn />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
