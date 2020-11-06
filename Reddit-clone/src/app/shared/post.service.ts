import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

    getAllPosts(): Observable<Array<PostModel>> {
      return this.http.get<Array<PostModel>>('http://localhost8080/api/posts')
    }
   }

