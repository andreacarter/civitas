import React, { Component } from "react";
import API from "../../utils/API";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Row from "../Goals/Row";
import Cell from "../Goals/Cell";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    API.showTop().then(res =>
      this.setState({
        hours: res.data
      })
    );
  };

  render() {
    return (
      <div className="tableResponsive">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Total Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.hours.map(hours => (
              <Row key={hours._id}>
                <Cell>{hours.employee}</Cell>
                <Cell>{hours.department}</Cell>
                <TableCell>{hours.hourscompleted}</TableCell>
              </Row>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(tableStyle)(Results);
