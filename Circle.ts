export class Circle{
    protected radius: number;
    protected color: string;

    constructor(radius:number,color: string) {
        this.radius = radius;
        this.color = color;
    }
    public getRadius(): number{
        return this.radius;
    }
    public getColor(): string{
        return this.color
    }
    public setRadius(radius:number):void{
        this.radius = radius
    }
    public setColor(color : string):void{
        this.color = color
    }
    public getArea():number{
        return this.radius * this.radius * Math.PI
    }
}
let circle = new Circle(3, `red`);
console.log(circle)
console.log(circle.getArea())