/*Наследование - это возможность нового класса созданного на основе старого изменять данные и использовать предыдущие данные.*/

class Plant {
    protected volume = 10000;
    protected employees = 20;

    method1() {
        //
    }

    method2() {
        //
    }
}

class EvolutionPlant extends Plant{
    protected volume = 30000;
    protected employees = 50;
    protected cars = 10;
}