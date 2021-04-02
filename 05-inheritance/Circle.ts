import {Shape} from './Shape'
export class Circle extends Shape {

    constructor(private _xCo: number, private _yCo: number, private _radius: number){
        super(_xCo, _yCo)
    }

    public get radius(): number {
        return this._radius
    }
    public set radius(value: number) {
        this._radius = value
    }

    getInfo(): string {
        return super.getInfo() + `, radius = ${this._radius}`
    }
    
}