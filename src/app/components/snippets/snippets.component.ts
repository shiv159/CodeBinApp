import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../model/Snippet';

@Component({
  selector: 'app-snippets',
  standalone: true,
  imports: [],
  templateUrl: './snippets.component.html',
  styleUrl: './snippets.component.css',
})
export class SnippetsComponent {
  constructor(private dbService: DbService) {}
  snippets: Snippet[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dbService.getCodeSnippetById().then((snippets) => {
      console.log(snippets);
      this.snippets = snippets;
    });
  }
}
