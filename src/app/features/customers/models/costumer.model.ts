export interface Customer {
  id: number;
  name: string;
  cpf: string;
  whatsapp: string;
}

export interface NewCustomer {
  name: string;
  cpf: string;
  whatsapp: string;
}

export interface CustomerResponse {
  costumers: Customer[];
  errorMessage: string;
}

export interface UniqCustomerResponse {
  costumer: Customer;
  errorMessage: string;
}

export interface UpdateCustomer {
  costumer: Customer;
  errorMessage: string;
}

export interface DeleteResponse {
  success?: string;
  error?: string;
}
