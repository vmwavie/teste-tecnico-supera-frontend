import { Component, Input } from '@angular/core';
import { NewCustomer } from '../../models/costumer.model';
import { CustomerService } from '../../services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-add-modal',
  templateUrl: './customer-add-modal.component.html',
  styleUrls: ['./customer-add-modal.component.sass'],
})
export class CustomerAddModalComponent {
  @Input()
  newCustomer!: NewCustomer;
  isOpened = false;

  constructor(private customerService: CustomerService) {}
  handleCloseModal(): void {
    this.isOpened = false;
  }

  handleOpenModal(): void {
    this.newCustomer = { name: '', cpf: '', whatsapp: '' };
    this.isOpened = true;
  }
  save(): void {
    this.customerService.addCustomer(this.newCustomer).subscribe({
      next: value => {
        this.newCustomer = value.costumer;
        this.handleCloseModal();
        Swal.fire({
          title: 'Added!',
          text: 'Customer has been created.',
          icon: 'success',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-primary px-4',
            container: 'bg-primaryLight dark:bg-primaryDark',
            popup:
              'bg-primaryLight dark:bg-primaryDark text-black dark:text-white',
          },
        });
      },
      error: error => {
        Swal.fire({
          title: 'Error!',
          text: error.error.errorMessage
            ? error.error.errorMessage
            : 'Failed to create customer.',
          icon: 'error',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-primary px-4',
            container: 'bg-primaryLight dark:bg-primaryDark',
            popup:
              'bg-primaryLight dark:bg-primaryDark text-black dark:text-white',
          },
        });
      },
    });
  }
}
