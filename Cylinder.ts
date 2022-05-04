import {Circle} from "./Circle";

class Cylinder extends Circle{
    protected hight : number;

    constructor(radius:number,
                color: string,
                hight: number) {
        super(radius,color);
        this.hight = hight
    }
    public getHight():number{
        return this.hight;
    }
    public getVolume(): number {
        return super.getArea()* this.getHight()
    }
}

let cylinder = new Cylinder(10,`yellow`,10)
console.log(cylinder);
console.log(cylinder.getVolume())