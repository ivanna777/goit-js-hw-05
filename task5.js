class Car {

    static getSpecs(car) {

        
        console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`);
    }
    
    constructor ({speed, price, maxSpeed, isOn, distance}) {
        this._speed = speed || 0;
        this._price = price;
        this._maxSpeed = maxSpeed;
        this._isOn = isOn || false;
        this._distance = distance || 0;

        
    }

    get price(){
        return this._price;
    }

    set price(amount) {
        this._price = amount;

    }

    turnOn() {
        this._isOn = true;
    }

    turnOff() {
        this._isOn = false;
        this._speed = 0;
    }
    
    accelerate(value) {
        const totalSpeed = this._speed + value;
       
        if (totalSpeed <= this._maxSpeed) {
            this._speed = totalSpeed;
        }   
    }
  
    decelerate(value) {
        const totalSpeed = this._speed - value;
        if (this._speed > 0) {
            this._speed = totalSpeed; 
        }
    }

    drive(hours) {
        if (!this._isOn) return;
        this._distance += hours * this._speed;
      }
    }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);


  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();

  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000