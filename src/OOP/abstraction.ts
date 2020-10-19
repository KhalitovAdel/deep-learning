/* Абстракция - пп, с помощью которого мы просим минимум необходимой информации для реализации полного функционала*/

class Circle {
    public radius!: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    public get diameter () {
        return this.radius * 2;
    }

    public get area () {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public get perimeter () {
        return 2 * Math.PI * this.radius;
    }
}