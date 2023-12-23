const { getEmpSchema } = require("./emp.service.js");

module.exports = {
    getEmpSch: (req, res) => {
        getEmpSchema((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }

}
