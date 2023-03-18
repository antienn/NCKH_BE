const route = require("express").Router();
const Managercars = require("../controllers/managercars");

route.post("/upload",Managercars.addviolation);
route.get("/getdata",Managercars.getalldata);

module.exports = route;