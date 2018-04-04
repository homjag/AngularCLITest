import { Injectable } from '@angular/core';
import { Posts } from './post.interface';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PostService {

    _posts: Posts[] = [];

    constructor(private http: Http){}

    getService(){
        return  this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function(response){
                return response.json();
            })
    }

    openDialog(post: Posts){    
        const index = this._posts.findIndex(c => c.id === post.id);
        this._posts[index] = post;
    }

    getAllposts(){
        return this._posts;
    }
    
}