import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ToastController } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { GroceriesServiceProvider } from "../../providers/groceries-service/groceries-service";
import { InputDialogueServiceProvider } from "../../providers/input-dialogue-service/input-dialogue-service";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  title = "Grocery";

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public dataService: GroceriesServiceProvider,
    public inputDialogueService: InputDialogueServiceProvider
  ) {}

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("removing item - ", item, index);
    const toast = this.toastCtrl.create({
      message: "Removing Item - " + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);
  }
  editItem(item, index) {
    console.log("Editing item - ", item, index);
    const toast = this.toastCtrl.create({
      message: "Editing Item - " + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogueService.showPrompt(item, index);
  }
  addItem() {
    console.log("adding item");
    this.inputDialogueService.showPrompt();
  }
}
