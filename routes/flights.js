var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");
const detailsCtrl = require("../controllers/details");
const ticketsCtrl = require("../controllers/tickets");

/* GET pages */
router.get("/", flightsCtrl.index);
router.get("/new", flightsCtrl.new);
router.get("/:id", flightsCtrl.show);
router.get("/:id/tickets/new", ticketsCtrl.new);

//Post flights
router.post("/", flightsCtrl.create);
router.post("/:id/destinations", detailsCtrl.create);
router.post("/:id/tickets", ticketsCtrl.create);

module.exports = router;
