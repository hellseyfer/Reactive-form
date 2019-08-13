import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl(''); // you get immediate access to listen for, update, and validate the state of the form input.
  /* After you create the control in the component class, you must associate it with a form control element in the template. */

  constructor() { }

  ngOnInit() {
  }



}
