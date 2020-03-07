//import { Injectable } from '@angular/core';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
//import { Observable } from 'rxjs';
//import 'firebase/firestore';

//export interface Item { name: string; }

//@Injectable({
  //providedIn: 'root'
//})
//export class ConexionService {

  //private itemsCollection: AngularFirestoreCollection<Item>;
  //items: Observable<Item[]>

  //constructor(private afs: AngularFirestore) { 
    //this.itemsCollection = afs.collection<Item>('items');
    //this.items = this.itemsCollection.snapshotChanges().map(actions => {
      //return actions.map(a => {
        //const data = a.payload.doc.data() as Item;
        //const id = a.payload.doc.id;
        //return {id, ...data };
      //});
    //;
  //}

  //listaItem(){
    //return this.items;
 //}
//}
