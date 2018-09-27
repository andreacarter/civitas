import React, { Component } from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import tasksStyle from "assets/jss/material-dashboard-react/components/tasksStyle.jsx";


class Events extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events: []
      };
    }

    componentDidMount() {
        this.loadData();
      }
    
      loadData = () => {
        API.getAllEvents().then(res =>
          this.setState({
            hours: res.data
          })
        );
      };
