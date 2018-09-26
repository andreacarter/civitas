import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import AccessTime from "@material-ui/icons/AccessTime";
import StarTwoTone from "@material-ui/icons/StarTwoTone";
import CalendarToday from "@material-ui/icons/CalendarToday";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { tasks, events } from "variables/general";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import TopEmployees from "./TopEmployees";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>
                  Low and Moderate Income Lending
                </h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 15%
                  </span>{" "}
                  increase in loans to low and moderate income borrowers since 2017.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Service Hours by Month</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 7%
                  </span>{" "}
                  increase in employee participation in community service events since 2017.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> last entry 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>CRA Lending</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.dangerText}>
                    <ArrowDownward className={classes.downArrowCardCategory} /> 11%
                  </span>{" "}
                  decrease in small business and community development lending since 2017.
                  
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="CRA Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "To Do",
                  tabIcon: StarTwoTone,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={tasks}
                    />
                  )
                },
                {
                  tabName: "Upcoming Events",
                  tabIcon: CalendarToday,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={events}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>
                  Top Employee Volunteers
                </h4>
                <p className={classes.cardCategoryWhite}>Updated 2 days ago</p>
              </CardHeader>
              <CardBody>
                <TopEmployees />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
