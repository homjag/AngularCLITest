import { Injectable } from '@angular/core';
import { Product } from './app.interface';

@Injectable()

export class ComponentService {
    
    getProductFromService(): Product[]{
        return [{
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }]
    }
}