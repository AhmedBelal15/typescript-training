import { ICoach } from './ICoach'

export class CricketCoach implements ICoach {
    getDailyWorkout(): string {
        return "Practice your spin balling technique.";
    }
}