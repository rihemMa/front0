import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  number
  bills
  selectedBill
  years = Array()
  year
  thisyear
  num = 0
  constructor(private billService: BillService,private toastr:ToastrService ,
    private router : Router) { }

  ngOnInit(): void {

    for ( let i = 2017 ;  i < 2050 ; i++  )
    {
      this.years.push({
       year : i
      })
    }
    this.thisyear = new Date().getFullYear()

    this.billService.getBills().subscribe(
    res=>{
      this.bills = res.bills
        },err=>{
      console.log(err)
    }
  )
  }

  updateBill(id){
    this.router.navigate(['/updateBill', id])

  }

  deleteBill(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do You Really Want To Delete The Bill!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        let bills_id = []
        this.selectedBill.map(el=>{
          bills_id.push({
          "bill_id": el.id
        })
        })
        this.billService.deleteBill(bills_id).subscribe(
          res=>{
            this.toastr.success('Bill is deleted')
            this.ngOnInit()
          }, err=>{
            console.log(err)
          }
          )
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success',
          )

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your file is safe :)',
            'error'
          )
        }})}



 addBill()
{

this.router.navigate(['/addBill'])

}

}
