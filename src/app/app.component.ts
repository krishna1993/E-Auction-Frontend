import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eAuctionFrontend';

  selectedProductId: number | null = null;

  productListing = [
    {
      name: '',
      val: 0
    },
    {
      name: 'Product A',
      val: 1
    },
    {
      name: 'Product B',
      val: 2
    },
    {
      name: 'Product C',
      val: 3
    },
    {
      name: 'Product D',
      val: 4
    },
    {
      name: 'Product E',
      val: 5
    },
  ];

  productDetailsInfo = [
    {
      name: '',
      val: 0
    },
    {
      name: 'Product A',
      val: 1,
      shortDesc: 'This is A',
      detailDesc: 'Detail Descr',
      category: 'A',
      startPrice: 200,
      bidData: '22-10-2022',
      bidamount1: 3000,
      bidamount2: 5000,
      bidderName1: "john",
      bidderName2: "bill",
      bidemail1:"john@mail.com",
      bidemail2:"bill@mail.com",
      bidmobile1:923467890,
      bidmobile2:562783920
    },
    {
      name: 'Product B',
      val: 2,
      shortDesc: 'This is B',
      detailDesc: 'Detail Descr',
      category: 'B',
      startPrice: 200,
      bidData: '22-10-2022',
      bidamount1: 5000,
      bidamount2: 7000,
      bidderName1: "Alex",
      bidderName2: "David",
      bidemail1:"alex@mail.com",
      bidemail2:"david@mail.com",
      bidmobile1:923467890,
      bidmobile2:562783920
    },
    {
      name: 'Product C',
      val: 3,
      shortDesc: 'This is C',
      detailDesc: 'Detail Descr',
      category: 'C',
      startPrice: 200,
      bidData: '22-10-2022',
      bidamount1: 7000,
      bidamount2: 4000,
      bidderName1: "First",
      bidderName2: "Second",
      bidemail1:"first@mail.com",
      bidemail2:"second@mail.com",
      bidmobile1:923467890,
      bidmobile2:562783920
    },
    {
      name: 'Product D',
      val: 4,
      shortDesc: 'This is D',
      detailDesc: 'Detail Descr',
      category: 'D',
      startPrice: 200,
      bidData: '22-10-2022',
      bidamount1: 0,
      bidamount2: 4000,
      bidderName1: "Robert",
      bidderName2: "Denver",
      bidemail1:"robert@mail.com",
      bidemail2:"denver@mail.com",
      bidmobile1:923467890,
      bidmobile2:562783920
    },
    {
      name: 'Product E',
      val: 5,
      shortDesc: 'This is E',
      detailDesc: 'Detail Descr',
      category: 'E',
      startPrice: 200,
      bidData: '22-10-2022',
      bidamount1: 3000,
      bidamount2: 4000,
      bidderName1: "hayathee",
      bidderName2: "Dragonball",
      bidemail1:"Hiihettd@mail.com",
      bidemail2:"hadllase@mail.com",
      bidmobile1:923467890,
      bidmobile2:562783920
    }
  ];

  selectedProduct:any []= [];



  onChangeProduct(event:any) {
    this.selectedProductId = Number(event.target.value);
    
    console.log('---event', this.selectedProduct);
  }


  onselectProduct() {
    this.selectedProduct = this.productDetailsInfo.filter((element, index, array) => {
      return element.val === Number(this.selectedProductId);
    });
  }
}
