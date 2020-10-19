/*
* Инкапсуляция - это свойство системы, позволяющее объединить данные и методы, работающие с ними, в классе.
* */

const user =  {
    name: 'Khalitov Adel',
    birthday: 19940316,
    geo: {
        x: 12.1212,
        y: 21.2121
    }
}

export class Address {
    public geo!;
    constructor(x = 0, y = 0) {
        this.geo = {x, y};
    }

    public getFullAddress(): string {
        /**
         * Любая логика c использованием this.geo
         */
        return '';
    }

    public getFias() {
        /**
         * Любая логика c использованием this.geo
         */
        return '';
    }

    public getTimeOffset() {
        /**
         * Любая логика c использованием this.geo
         */
        return 0;
    }
}