import { ICoach } from './ICoach'
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach()
let myGolfCoach = new GolfCoach()

let theCoaches: ICoach[] = [];

theCoaches.push(myCricketCoach)
theCoaches.push(myGolfCoach)

theCoaches.forEach(coach => {
    console.log(coach.getDailyWorkout());
})
