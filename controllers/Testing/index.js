"use strict";

const response = require("../../components/response")
const { db } = require("../../components/database")
const cron = require("node-cron");
const moment = require("moment");
const axios = require("axios")
const AxiosClient = axios.create({
  timeout: 60000
});
const { writeFile, unlink, readFile, access } = require("fs/promises");
const { constants } = require("fs")
const fs = require('fs'); 
const { detectMimeType }  = require("../../middlewares/detectMimeType")
const { uploadFileOSS } = require("../../middlewares/oss")
const crypto = require("crypto");

exports.testing = async (req, res, next) => {
  
  const obj = {
    test: "wkwk",
    result: "hore"
  }
  return response.res200(res, "000", "MANTAP", obj)
}

const cronCutOff = async (req, res, next) => {
  console.log("testing cron!!!")
  Boolean(res) && res.send(200);
}

cron.schedule(process.env.CRON_TIMER_CUTOFF, () => {
    console.log(`Cron started at ${new Date()}`)
    cronCutOff();
});

module.exports = { cronCutOff }