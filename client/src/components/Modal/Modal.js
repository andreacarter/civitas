import React from "react";
import API from "../../utils/API";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.jsx";

import modalStyle from "assets/jss/material-dashboard-react/components/modalStyle.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      hours: [],
      employee: "",
      department: "",
      eventtype: "",
      hourscompleted: ""
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }

  loadData = () => {
    console.log("hello");
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
    })
      .then(res => this.loadData())
      .catch(err => console.log(err));
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="rose"
          round
          onClick={() => this.handleClickOpen("modal")}
        >
          Add Service Hours
        </Button>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("modal")}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleClose("modal")}
            >
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>
              Submit Employee Service Hours
            </h4>
          </DialogTitle>
          <form>
            <DialogContent
              id="modal-slide-description"
              className={classes.modalBody}
            >
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
            </DialogContent>

            <DialogActions
              className={classes.modalFooter + " " + classes.modalFooterCenter}
            >
              <Button onClick={this.handleFormSubmit} color="success">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(Modal);
