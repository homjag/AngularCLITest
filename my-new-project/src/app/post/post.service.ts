import { Injectable } from '@angular/core';
import { Posts } from './post.interface';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PostService {

    constructor(private http: Http){}

    getService(){
        return  this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function(response){
                return response.json();
            })
    }
    
}