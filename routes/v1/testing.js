const apicache = require("apicache");
const cache = apicache.middleware;
const response = require("../../components/response");
const { body, param, query, validationResult } = require("express-validator");
const validator = require("../../middlewares/validator");
const express = require("express");
const router = express.Router();

const testingController = require("../../controllers/Testing");

const index = function (req, res, next) {
  response.res404(res);
};

router.route("/")
  .get((req, res, next) => {
    testingController.testing(req, res).catch((error) => {
      console.error(error);
      return response.res500(res, "Internal system error, please try again later!");
    });
  })
  router.route("/cut-off")
    .get((req, res, next) => {
      testingController.cronCutOff(req, res, next)
        .catch((error) => {
          console.error(error);
          return response.res500(res, error.message);
        })
    })

router.all("*", index);

module.exports = router;





router.all("*", index);

module.exports = router;
