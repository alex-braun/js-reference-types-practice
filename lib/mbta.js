'use strict';

const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {

const mbta = {
redLine: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
greenLine: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
orangeLine: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],
};

let startS = 0;
let startPK = 0;
let startToPark = 0;
let endS = 0;
let endPK= 0;
let endToPark = 0;
let totalStations = 0;

//get number of stops from start to park street
  for (let i = 0; i < mbta[startLine].length; i++) {
    if (mbta[startLine][i] === startStation) {
       startS = i;
    }
    if (mbta[startLine][i] === 'Park Street') {
      startPK = i;
      }
    }
    startToPark = startPK - startS;
    if (startToPark < 0) {
      startToPark = startToPark * -1;
    }

//# Stops from end to park street
  for (let i = 0; i < mbta[endLine].length; i++) {
    if (mbta[endLine][i] === endStation) {
      endS = i;
    }
    if (mbta[endLine][i] === 'Park Street') {
      endPK = i;
    }
  }
  endToPark = endPK- endS;
  if (endToPark < 0) {
    endToPark = endToPark * -1;
  }

  totalStations = startToPark + endToPark;
  return totalStations;
};

module.exports = {
  stopsBetweenStations,
  stretch: false,
};
