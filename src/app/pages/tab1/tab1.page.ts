import { Component, OnInit, ViewChild  } from '@angular/core';
import { StorageService, Item } from '../../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  items: Item[] = [];

  newItem: Item = <Item>{};

  @ViewChild('mylist', {static: false})mylist: IonList;

  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) { 
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  ngOnInit() {
  }
 // CREATE
 addItem() {
  this.newItem.modified = Date.now();
  this.newItem.id = Date.now();

  this.storageService.addItem(this.newItem).then(item => {
    this.newItem = <Item>{};
    this.showToast('Item added!')
    this.loadItems(); // Or add it to the array directly
  });

  console.log(this.newItem);
  
  
}

// READ
loadItems() {
  this.storageService.getItems().then(items => {
    this.items = items;
  });
  // console.log(this.items);
}

// UPDATE
updateItem(item: Item) {
  item.name = `UPDATED: ${item.name}`;
  item.modified = Date.now();

  this.storageService.updateItem(item).then(item => {
    this.showToast('Item updated!');
    this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
    this.loadItems(); // Or update it inside the array directly
  });
}

// DELETE
deleteItem(item: Item) {
  this.storageService.deleteItem(item.id).then(item => {
    this.showToast('Item removed!');
    this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
    this.loadItems(); // Or splice it from the array directly
  });
 
}

// Helper
async showToast(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}
}
