class Car {

    static getSpecs(car) {

        
        console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`);
    }
    
    constructor ({speed, price, maxSpeed, isOn, distance}) {
        this._speed = speed;
        this._price = price;
        this._maxSpeed = maxSpeed;
        this._isOn = isOn;
        this._distance = distance = 0;

        
    }

    get price(){
        return this._price;
    }

    set price(amount) {
        this._price = amount;

    }

    turnOn() {
        this._isOn = true;
        this._speed = 0;
        return this._isOn;

    }

    turnOff() {
        this._isOn = false;
        this._speed = 0;
        return this._isOn;
    }
    
    accelerate(value) {
        const totalSpeed = this._speed += value;
       
        if (totalSpeed <= this._maxSpeed) {
            totalSpeed;
        }
        return this._speed;    
    }
  

    decelerate(value) {
        if (this._speed > 0) {
            this._speed-=value; 
        }
        return this._speed; 
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