//Animal 과 Dog 클래스 구현
//Animal 은 name 과 speak메소드가짐
//speak는 나는[name]출력

//Dog는 anumal 상속받고
//breed 속성을 가짐, 개 품종
//bark메소드를 가지고 메소드는 나는[breed] 를 출력

class Animal{
    constructor(name){
        this.name =name
    }
    speak(){
        console.log(`나는${this.name}`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed
    }
    bark(){
        console.log(`나는 ${this.breed}`)
    }
}

const animal = new Dog("개","포메라니언")
animal.speak();
animal.bark();