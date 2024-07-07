import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc, getDocs,query,where } from 'firebase/firestore';
import { Snippet } from '../model/Snippet';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  db: any;
  constructor(private authService: AuthService) {
    this.db = getFirestore();
  }

  async addCodeSnippet(snippets: Snippet) {
    try {
      const docRef = await addDoc(collection(this.db, 'snippets'), {
        ...snippets,by : this.authService.getUid()
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async getAllCodeSnippets() {
    const snippets: Snippet[] = [];
    const querySnapshot = await getDocs(collection(this.db, 'snippets'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      snippets.push(doc.data());
    });
    return snippets;
  }

  async getCodeSnippetById(id: string) {
    const snippets: Snippet[] = [];

    const q = query(
      collection(this.db, 'snippets'),
      where('by', '==', this.authService.getUid())
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
      snippets.push(doc.data());
    });
    return snippets;
  }
}
