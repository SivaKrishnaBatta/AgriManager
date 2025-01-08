import { Component } from '@angular/core';

@Component({
  selector: 'app-s-returns-add',
  templateUrl: './s-returns-add.component.html',
  styleUrls: ['./s-returns-add.component.scss']
})
export class SReturnsAddComponent {
  myList: any[] = [];


  ngOnInit(){
    this.myList.push({
      component:"",
      Quantity:"",
      UnitofMeasure:""
    })
    console.log(this.myList);

  }

  addbom(){
    this.myList.push({
      component:"",
      Quantity:"",
      UnitofMeasure:""
    })
  }
  _delete(i:any){
    this.myList.splice(i,1)
  }

}
