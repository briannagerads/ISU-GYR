var database = require('./database');
module.exports = {};

//Quiz
module.exports.populatequiz = function(req, res){
var rtn = {};
        function populatequiz(err, result, fields) {
            rtn.db_result = result;
            if (err)
                rtn.error = err;
            if (result.changedRows < 1) {
                rtn.error = {
                    code: 1001,
                    message: 'failed to retrieve quiz information'
                }
                //console.log("/vote/" + uid + "/" + dir + " - ", result);
            }
            rtn.ready = true;
            res.json(rtn);
        }
        database.query('SELECT DISTINCT * FROM `quiz` AS q JOIN `question` as n on q.quizid = n.quizid JOIN `answer` as a WHERE q.quizid = "quiz1";', [uid], quizquery);



};


module.exports.getquizzes = function(req, res){
var rtn = {};
        function getquizzes(err, result, fields) {
            rtn.db_result = result;
            if (err)
                rtn.error = err;
            rtn.ready = true;
            res.json(rtn);
        }
        database.query('SELECT * FROM `quiz`;', getquizzes);



};

module.exports.showquizzes = function(req, res){
var rtn = {};
        function showquizzes(err, result, fields) {
            rtn.db_result = result;
            if (err)
                rtn.error = err;
            rtn.ready = true;
            res.json(rtn);
        }
        database.query('SELECT q.`quizid`, n.`label`, n.`qid`, n.`type` FROM `quiz` as q JOIN `question` as n WHERE n.`quizid` = q.`quizid`;', showquizzes);



};

//Shopping Cart
module.exports.viewshoppingcart = function(req,res){
  var rtn = {};
          function addfact(err, result, fields) {
              rtn.db_result = result;
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('INSERT INTO `item`(`name`, `icon`, `icon_height`, `monthly_cost`, `eStar`, `object`, `type`) VALUES (?,?,?,?,?,?,?,?);', [req.body.name || "null", req.body.icon || "null", req.body.icon_height || "null", req.body.monthly_cost || "null", req.body.eStar || "null", req.body.object || "null", req.body.type || "null"], viewshoppingcart);

};

module.exports.getshoppingcart = function(req,res){
  var rtn = {};
          function getshoppingcart(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('SELECT `name`, `icon`, `icon_height`, `monthly_cost`, `object`, `type`, `eStar` FROM `item`;', getshoppingcart);

};

//Information
module.exports.getinformation = function(req,res){
  var rtn = {};
          function getinformation(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('SELECT * FROM `information`;', getinformation);

};

module.exports.addinformation = function(req,res){
  var rtn = {};
          function addfact(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to add information'
                      }
                      //console.log("/vote/" + uid + "/" + dir + " - ", result);
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('INSERT INTO `fact`(`name`, `text`, `category`, `hyperlink`, `image`) VALUES (?,?,?,?,?);', [req.body.name || "null", req.body.text || "null", req.body.category || "null", req.body.hyperlink || "null", req.body.image || "null"], addinformation);

};

//Facts
module.exports.getfacts = function(req,res){
  var rtn = {};
          function getfacts(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('SELECT * FROM `fact`;', getfacts);

};

module.exports.addfact = function(req,res){
  var rtn = {};
          function addfact(err, result, fields) {
              rtn.db_result = result;
              if (err)
                  rtn.error = err;
                  if (result.changedRows < 1) {
                      rtn.error = {
                          code: 1001,
                          message: 'failed to add fact information'
                      }
                      //console.log("/vote/" + uid + "/" + dir + " - ", result);
                  }
              rtn.ready = true;
              res.json(rtn);
          }
          database.query('INSERT INTO `fact`(`name`, `text`, `category`, `hyperlink`, `image`) VALUES (?,?,?,?,?);', [req.body.name || "null", req.body.text || "null", req.body.category || "null", req.body.hyperlink || "null", req.body.image || "null"], addfact);

};
