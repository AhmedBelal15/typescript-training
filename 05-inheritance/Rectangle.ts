import { Shape } from './Shape'

export class Rectangle extends Shape {

    constructor(private _xCo: number, private _yCo: number, private _width: number, private _length: number){
        super(_xCo, _yCo)
    }

    public get length(): number {
        return this._length
    }
    public set length(value: number) {
        this._length = value
    }
    public get width(): number {
        return this._width
    }
    public set width(value: number) {
        this._width = value
    }

    getInfo(): string {
        return super.getInfo() + `, Width = ${this._width}, Length = ${this._length}`
    }
}