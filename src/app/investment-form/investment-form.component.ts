import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component'

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css']
})
export class InvestmentFormComponent {
  investmentForm: FormGroup;
  submitted = false;
  previewData: any = null;

  constructor(private fb: FormBuilder,private popup:MatDialog) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      purchasePrice: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.investmentForm.valid) {
      this.previewData = this.investmentForm.value;
      this.submitted = true;
    }
  }

  confirmSubmission() {
    console.log('Form submitted:', this.previewData);
    let dialog=this.popup.open(DialogBoxComponent,{width:'30%',height:'50%'})

    dialog.afterClosed().subscribe(res=>{
      this.submitted=false
    this.investmentForm.reset()
   })
  }
 
}
