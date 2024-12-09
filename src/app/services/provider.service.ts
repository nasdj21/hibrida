import { Injectable, inject } from '@angular/core';

/*Importo modulos de angular fire */
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  firestoreService = inject(Firestore);

  constructor() { }

  createDocument(collectionName: string, data:any): Promise<any> {
    const colRef = collection(this.firestoreService, collectionName);
    return addDoc(colRef, data);
  }

   /* Método para leer una colección */
   readCollection(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestoreService, collectionName);
    return collectionData(colRef, { idField: 'id' });
  }
}
