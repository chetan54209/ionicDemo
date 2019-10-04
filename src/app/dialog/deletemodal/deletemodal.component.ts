import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.scss'],
})
export class DeletemodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletemodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public alertCtrl: AlertController) {}

  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(){
    this.alertCtrl.create({header: 'Are you sure?', message: 'Do you really want to delete the details?',
    buttons:[{
      text: 'Cancel',
      role: 'cancel'
    },{
      text: 'Delete',
      handler: () => {
        this.data;
        // this.router.navigate(['/receipes']);
      }
    }
  ] 
  }).then(alertEl => {
alertEl.present();
  });
  }
}
