import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSelect, IonSelectOption, IonTextarea,IonButton, 
  IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonSelect, IonSelectOption, IonTextarea,IonButton,
    IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, 
    ExploreContainerComponent, ReactiveFormsModule]
})
export class Tab2Page {

  myForm: FormGroup = new FormGroup({
    score: new FormControl("", Validators.required),
    opinion: new FormControl("", Validators.required)
  });

  constructor() {}

  onSubmit(){
    console.log(this.myForm.value);
    alert(this.myForm.controls["score"].value)
    this.myForm.reset()
  }

}
