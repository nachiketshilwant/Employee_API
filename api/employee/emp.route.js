const { getEmpSch } = require("./emp.controller.js");
const router = require("express").Router();

router.get("/empschema", getEmpSch);


module.exports = router;
