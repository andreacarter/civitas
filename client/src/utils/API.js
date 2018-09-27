import axios from "axios";

export default {
  // Gets all books
  getAllHours: function() {
    return axios.get("/api/hours");
  },
  showTop: function() {
    return axios.get("/api/hours/hourscompleted");
  },
  // Gets the book with the given id
  findById: function(id) {
    return axios.get("/api/hours" + id);
  },
  // Deletes the book with the given id
  deleteHours: function(id) {
    return axios.delete("/api/hours/" + id);
  },
  // Saves a book to the database
  saveHours: function(serviceData) {
    return axios.post("/api/hours/", serviceData);
  }
};
