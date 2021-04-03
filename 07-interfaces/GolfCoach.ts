import { ICoach } from './ICoach'

export class GolfCoach implements ICoach{
    getDailyWorkout(): string {
       return "Hit 100 balls at golf range."
    }

}