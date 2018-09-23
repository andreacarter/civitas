import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Modal from "components/Modal/Modal.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import ResultsTable from "./ResultsTable";

function Goals(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={6} sm={6} md={6}>
          <Card chart>
            <CardHeader plain color="primary">
              <h4 className={classes.cardTitleWhite}>2018 Investment Goal</h4>
              <p className={classes.cardCategoryWhite}>$2,000,000</p>
            </CardHeader>
            <CardBody>
              <p className={classes.cardCategoryPrimary}>
                Current Progress: 65% of Goal
              </p>
              <CustomLinearProgress
                variant="determinate"
                color="primary"
                value={65}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={6} sm={6} md={6}>
          <Card chart>
            <CardHeader plain color="primary">
              <h4 className={classes.cardTitleWhite}>2018 Service Goal</h4>
              <p className={classes.cardCategoryWhite}>150 Hours</p>
            </CardHeader>
            <CardBody>
              <p className={classes.cardCategoryPrimary}>
                Current Progress: 45% of Goal
              </p>
              <CustomLinearProgress
                variant="determinate"
                color="primary"
                value={45}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Completed Service Hours
              </h4>
            </CardHeader>
            <CardBody>
              <ResultsTable />
            </CardBody>
            <CardFooter>
              <Modal />
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Goals.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Goals);
