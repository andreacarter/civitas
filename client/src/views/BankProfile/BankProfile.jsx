import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import building from "assets/img/faces/building.jpg";
import avatar from "assets/img/faces/profile.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={6} sm={6} md={6}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={building} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Community Bank</h6>
              <h4 className={classes.cardTitle}>Orlando, FL</h4>
              <p className={classes.description}>Large Bank - OCC</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={6} sm={6} md={6}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Community Bank</h6>
              <h4 className={classes.cardTitle}>Bank Employee</h4>
              <p className={classes.description}>CRA Officer</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit CRA Details</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>
                        Investment Goals
                      </h4>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.description}>
                        Current Goal: $2,000,000
                      </p>
                      <CustomInput
                        labelText="Enter new amount"
                        id="investment"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>Service Goals</h4>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.description}>
                        Current Goal: 150 Hours
                      </p>
                      <CustomInput
                        labelText="Enter new amount"
                        id="hours"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>Lending Goals</h4>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.description}>
                        Current Goal: $78,000,000
                      </p>
                      <CustomInput
                        labelText="Enter new amount"
                        id="lending"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <CardFooter>
                <Button color="primary">Update CRA Details</Button>
              </CardFooter>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
