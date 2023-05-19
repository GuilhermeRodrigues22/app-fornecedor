import { Client } from './../client';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../client.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  clients: Client[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;

  constructor(
    private ClientService: ClientService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      telefone: [''],
      cpf: [''],
      cidade: [''],
    });
  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.ClientService.getClients().subscribe({
      next: (data) => (this.clients = data),
    });
  }

  save() {
    if (this.isEditing) {
      this.ClientService.update(this.formGroupClient.value).subscribe({
        next: () => {
          this.loadClients();
          this.formGroupClient.reset();
          this.isEditing = false;
        },
      });
    } else {
      this.ClientService.save(this.formGroupClient.value).subscribe({
        next: (data) => {
          this.clients.push(data);
          this.formGroupClient.reset();
        },
      });
    }
  }

  edit(client: Client) {
    this.formGroupClient.setValue(client);
    this.isEditing = true;
  }

  delete(client: Client) {
    this.ClientService.delete(client).subscribe({
      next: () => this.loadClients(),
    });
  }

  FormReset(){
    this.formGroupClient.reset();
  }
}
