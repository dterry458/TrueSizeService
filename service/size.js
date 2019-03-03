const db = require('../db');

var size = {
    calc: function(req, res, next) {
        var size = db.query("select size from sizes where shoe = '" + req.params.shoe + "'", (err, resp) => {
            if (err) {
              return next(err)
            }

            let average = (array) => array.reduce((a, b) => a + b) / array.length;

            if (resp.rows.length > 0) {
                var list = resp.rows.map(function (el) { return el.size; });
                res.send({TrueToSizeCalculation: average(list)});
            } else {
                res.send({ TrueToSizeCalculation: 0 });
            }
        })
    },
    add: function(req, res, next) {
        const text = "INSERT INTO sizes(id, shoe, size) VALUES(nextval('sizes_id_seq'), $1, $2) RETURNING *"
        const values = [req.params.shoe, req.params.fit];

        db.query(text, values, (err, resp) => {
          if (err) {
            console.log(err.stack);
          } else {
            console.log(resp.rows[0]);
            res.send(resp.rows[0]);
          }
        })
    }
 };
 
 module.exports = size;