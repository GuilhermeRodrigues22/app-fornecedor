import { EmailValidator } from "@angular/forms";

export interface Client
{
  id: number;
  name: string;
  telefone: number;
  email: EmailValidator;
  cpf: number;
  cidade: string;
}
