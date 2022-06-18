require('dotenv').config()

const express = require("express");
const axios = require('axios').default;

const _ = require('lodash');

axios.defaults.headers.common['Authorization'] = "Client-ID " + process.env.ACCESS_KEY;
axios.defaults.baseURL = 'https://api.unsplash.com/';

exports.homeTrending = function(req, res) {
  const imgArr = [];

  axios.get('/search/photos', {
      params: {
        query: "sneaker",
        orientation: "portrait",
      }
    })
    .then(function (response) {
      response.data.results.forEach( result => {
        const obj = {
          url: result.urls.small,
          alt: result.alt_description
        };
        imgArr.push(obj);
      });
      res.json(_.sampleSize(imgArr, 6));
      console.log(response.status);
    })
    .catch(function (error) {
      console.log(error);
    })
}
