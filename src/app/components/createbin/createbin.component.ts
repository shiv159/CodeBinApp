import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../model/Snippet';

@Component({
  selector: 'app-createbin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createbin.component.html',
  styleUrl: './createbin.component.css',
})
export class CreatebinComponent {
  constructor(private dbService: DbService) {}
  snippet: Snippet = new Snippet();
  title = new FormControl('', Validators.required);
  code = new FormControl('', Validators.required);

  codeBinForm = new FormGroup({
    title: this.title,
    code: this.code,
  });

  save() {
    if (
      this.codeBinForm.value != null &&
      this.codeBinForm.value.title != null &&
      this.codeBinForm.value.code != null
    ) {
      console.log(this.codeBinForm.value);
      this.dbService.addCodeSnippet(this.codeBinForm.value as Snippet);
    } else {
      console.log('Please enter the title and code');
      return;
    }
  }
}
