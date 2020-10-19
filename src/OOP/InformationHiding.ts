/*Сокрытие - пп, который разграничивает реализацию основного функционала. */

export class CoffeeMachine {
    public minimalClearVolume = 1000;
    public waterLimit!: number;

    constructor(volume: number) {
        this.waterLimit = volume;
    }

    private checkWaterLimit (volume: number): boolean {
        if (typeof this.waterLimit !== 'number') throw new Error('Произошла ошибка. Перезагрузите кофемашину!');
        if (this.waterLimit < volume) throw new Error('Добавьте воды.');
        return true;
    }

    public makeCoffee(volume) {
        if (this.checkWaterLimit) {
            //Сделать кофе
        }
    }

    public makeFoam() {
        if (this.checkWaterLimit) {
            //Сделать пенку
        }
    }
}

/*
    Сложно придумать пример. По результату размышления я пришел к тому что приватные функции это недочет архитектуры.
    Единственное что можно вынести в приватные функции это какие то микродействия, которые повторяются 1+ раз. Возможно я просто не придумал примера.
    Хотя я часто использую приватные функции, но сейчас я понимаю что можно и нужно вынести подобные преобразования в отдельный класс.
*/