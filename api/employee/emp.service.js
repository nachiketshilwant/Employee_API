const pool = require("../../config/database.js");

module.exports = {
    getEmpSchema: callBack => {
        pool.query(
            `describe employee`,
            [],
            (errors, results, fields) => {
                if (errors) {
                    return callBack(errors);
                }
                const answer = results.map(field => `${field.Field}: ${field.Type}`);
                return callBack(null, answer);
            }
        );
    }

};
