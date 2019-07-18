import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, from} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private currentUserSubject: BehaviorSubject<User>;
private curentuser: Observable<User>;
  constructor() { }
}
