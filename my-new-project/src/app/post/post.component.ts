import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostService } from './post.service';
import { Posts } from './post.interface';
import { PopupComponent } from './popup/popup.component';



@Component({
  selector: 'table-root',
  templateUrl: './post.component.html',
  providers: [PostService]
})
export class PostComponent implements OnInit {

  posts: Posts[] = [];

  constructor(private postService: PostService,public dialog: MatDialog){

  }

  ngOnInit(){
    this.postService.getService().subscribe( posts => {
      this.posts = posts;
    });
  }

  openDialog(id:number) {
    const post = this.postService.getAllposts().find(c => c.id === id);
    this.dialog.open(PopupComponent, {
      data: {post}
    });
  }
}
