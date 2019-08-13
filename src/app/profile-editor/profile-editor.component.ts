import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, FormArray, FormGroup, NgForm } from '@angular/forms'; // 3 methods: control(), group(), and array()
import { Validators } from '@angular/forms';
import { HeroService } from 'src/shared/hero.service';
import { Product } from 'src/shared/types';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  myForm = this.fb.group({
    title: ['', Validators.required],
    brand: [''],
    price: [''],
    /*
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    */
    materials: this.fb.array([
      this.fb.control('')
    ]),
    images: this.fb.array([])
  });

  get materials(): FormArray {
    return this.myForm.get('materials') as FormArray;
  }

  get images(): FormArray {
    return this.myForm.get('images') as FormArray;
  }

  constructor(private fb: FormBuilder, private heroService: HeroService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.myForm.value);
    this.heroService.addHero(this.myForm.value)
    .subscribe(d => {   // "data" can be your file or image in base64 or other encoding
      console.log(d);
    });
  }

  addMaterial() {
    this.materials.push(this.fb.control(''));
  }

  /* images section */

  createItem(data): FormGroup {
    return this.fb.group(data);
  }

  detectFiles(event) {
    let files = event.target.files;
    if (files) {
        for (let file of files) {
            let reader = new FileReader();
            reader.onload = (e: any) => {
                this.images.push(this.createItem({
                    file,
                    url: e.target.result  //Base64 string for preview image
                }));
            }
            reader.readAsDataURL(file);
        }
    }
  }

}
