const Flight = require("../models/flight");
const Ticket = require("../models/ticket");
module.exports = {
  create,
  index,
  new: newFlight,
  show,
};

//to create a new flight
function create(req, res) {
  // split if it's not an empty string

  const flight = new Flight(req.body);
  flight.save(function (err) {
    // one way to handle errors
    if (err) return res.redirect("error");
    // for now, redirect right back to index.ejs
    res.redirect("/flights");
  });
}

//to bring up new page with database data
function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { title: "All Flights", flights });
  });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "Add Flight" });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    if (err) {
      console.log(err);
    }
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      // Now you can pass both the flight and tickets in the res.render call
      if (err) {
        console.log(err);
      }
      res.render("flights/show", { flight, tickets, title: "Flight Details" });
    });
  });
}
