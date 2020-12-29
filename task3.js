class Storage {
    constructor (items) {
       this._items = items;
    }
    getItems() {
        return this._items;
    }
    addItem(item) {
        this._items.push(item);
    }
    removeItem(item) {

            const itemIndex = this._items.indexOf(item);
        
            if (itemIndex === -1) return;
        
            this._items.splice(itemIndex, 1);
    }
}



const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]