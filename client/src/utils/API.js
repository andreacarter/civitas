import axios from "axios";

export default {
  // Gets all books
  getAllHours: function() {
    return axios.get("/api/hours");
  },
  showTop: function() {
    return axios.get("/api/hours/hourscompleted");
  },
  findById: function(id) {
    return axios.get("/api/hours" + id);
  },
  deleteHours: function(id) {
    return axios.delete("/api/hours/" + id);
  },
  saveHours: function(serviceData) {
    return axios.post("/api/hours/", serviceData);
  },
  getAllEvents: function() {
    return axios.get("/api/events");
  },
  eventById: function(id) {
    return axios.get("/api/events" + id);
  },
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  saveEvent: function(eventData) {
    return axios.post("/api/events/", eventData);
  },
  getAllTasks: function() {
    return axios.get("/api/tasks");
  },
  taskById: function(id) {
    return axios.get("/api/tasks" + id);
  },
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  saveTask: function(taskData) {
    return axios.post("/api/tasks/", taskData);
  }
};
