import { Supllier } from './../supplier';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,} from '@angular/forms';
import { ClientService } from '../client.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  Suplliers: Supllier[] = [];
  isEditing: boolean = false;
  formGroupSupllier: FormGroup;

  constructor(
    private SupllierService: SupllierService,
    private formBuilder: FormBuilder
  ){
    this.formGroupSupllier = formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      telefone: [''],
      cpf: [''],
      cidade: [''],
    });
  }
}
