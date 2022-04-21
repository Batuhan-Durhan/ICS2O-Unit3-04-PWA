// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of pyramid.
 */
function calculate() {
  // input
  const fahrenheit = parseInt(document.getElementById('fahrenheit-of-temperature').value)
  
  // process
  const celsius = (fahrenheit - 32) * (5 / 9)

  // output
  document.getElementById('celsius').innerHTML = 'Celsius is: ' + celsius.toFixed(2) + ' °'
}
