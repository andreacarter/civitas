import React, { Component } from "react";
import API from "../../utils/API";
import Tasks from "components/Tasks/Tasks.jsx";

class Events extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    API.getAllEvents().then(res => this.setState({ events: res.data }));
  }

  render() {
    return(
      {this.state.events.map(events => (
       <Tasks checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={[events.orgname]} key={events._id} />
      ))}
       )
      }
}

export default Events;
