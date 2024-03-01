import {Injectable} from '@angular/core';
import {Request} from "../interfaces/request";
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  Firestore
} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  requestsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.requestsCollection = collection(this.firestore, 'requests');
  }

  addRequest(request: Request) {
    return addDoc(this.requestsCollection, request);
  }
}
