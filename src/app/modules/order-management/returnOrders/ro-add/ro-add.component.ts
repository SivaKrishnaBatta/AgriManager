import { Component } from '@angular/core';

@Component({
  selector: 'app-ro-add',
  templateUrl: './ro-add.component.html',
  styleUrls: ['./ro-add.component.scss']
})
export class RoAddComponent {

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
