"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
var theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
theCoaches.forEach(function (coach) {
    console.log(coach.getDailyWorkout());
});
