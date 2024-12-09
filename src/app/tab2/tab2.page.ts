import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSelect, IonSelectOption, IonTextarea,IonButton, 
  IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ProviderService } from '../services/provider.service';

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


   /* Nombre de la colección */
   collectionName = 'reviews';

   /* Arreglo con datos locales */
   dataList: any[] = [];

    /* Inyecte la dependencia a Firestore */
    constructor(private providerService: ProviderService) { }

    /* El método onSubmit para enviar los datos del formulario mediante el servicio */
    onSubmit() {
      console.log(this.myForm.value);
        this.providerService.createDocument(this.collectionName, this.myForm.value).then(() => {
            this.myForm.reset()
        });
    }

      /* Al inicializar, carga los datos  */
      ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.providerService.readCollection(this.collectionName).subscribe((data) => {
            this.dataList = data;
        });
    }

}
