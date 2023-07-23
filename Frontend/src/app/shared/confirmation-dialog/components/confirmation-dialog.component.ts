import { Component, EventEmitter, Inject ,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  onEmistStatusChange = new EventEmitter();
  details:any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any) { }


  ngOnInit(): void {
    if(this.dialogData && this.dialogData.confirmation){
      this.details = this.dialogData;
    }
  }

  handleChangeAction(){
    this.onEmistStatusChange.emit();
  }
}
