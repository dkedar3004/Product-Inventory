import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class Service {
   private subject = new Subject();
   constructor() { }
   sendMessage(message: boolean) {
      this.subject.next({ text: message });
   }

   clearMessages() {
      this.subject.next();
   }

   getMessage(): Observable<any> {
      return this.subject.asObservable();
   }
}