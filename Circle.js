"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
exports.Circle = Circle;
var circle = new Circle(3, "red");
console.log(circle);
console.log(circle.getArea());
