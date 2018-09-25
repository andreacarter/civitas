import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Organizations in Your Branch Area</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Organization", "Contact Name", "Address", "Services Offered"]}
              tableData={[
                ["Hope Central", "Administrator", "5802 Makoma Dr Ste 3, Orlando, FL 32839", "Counseling Services, Employment Training"],
                ["New Image Youth Center", "Administrator", "214 South Parramore Ave, Orlando FL 32805", "Youth Services"],
                ["Simeon Resource & Development Center", "Administrator", "750 S. Orange Blossom Trail, Ste 30, Orlando FL 32805", "Health Services, Employment Training, Social Programs"],
                ["Bridges of Light Foundation", "Administrator", "4203 Vineland Rd, Orlando FL 32811", "Youth Services"],
                ["Homeless Services Network of Central Florida", "Administrator", "4065-D L.B. McLeod Dr., Orlando FL 32811", "Social Programs, Homelessness Prevention"],
                ["Habitat for Humanity of Greater Orlando", "Administrator", "4116 Silver Star Rd, Orlando FL 32808", "Affordable Housing, Homeowner Counseling"]             
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
