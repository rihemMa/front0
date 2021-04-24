import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  selectedQuote
  constructor(private toastr:ToastrService ,
    private router : Router) { }

  ngOnInit(): void {
  }
  addQuote()
  {
  this.router.navigate(['/addQuote'])
  }
  deleteQuote(){
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'Do You Really Want To Delete The Bill!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'No, keep it'
    // }).then((result) => {
    //   if (result.value) {

    //     let bills_id = []
    //     this.selectedBill.map(el=>{
    //       bills_id.push({
    //       "bill_id": el.id
    //     })
    //     })
    //     this.billService.deleteBill(bills_id).subscribe(
    //       res=>{
    //         this.toastr.success('Bill is deleted')
    //         this.ngOnInit()
    //       }, err=>{
    //         console.log(err)
    //       }
    //       )
    //       Swal.fire(
    //         'Deleted!',
    //         'Your file has been deleted.',
    //         'success',
    //       )

    //     } else if (result.dismiss === Swal.DismissReason.cancel) {
    //       Swal.fire(
    //         'Cancelled',
    //         'Your file is safe :)',
    //         'error'
    //       )
    //     }})
  }
  updateQuote(id){
    this.router.navigate(['/updateQuote', id])
  }
}
