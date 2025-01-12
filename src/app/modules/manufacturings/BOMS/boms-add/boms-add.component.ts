import { Component } from '@angular/core';

@Component({
  selector: 'app-boms-add',
  templateUrl: './boms-add.component.html',
  styleUrls: ['./boms-add.component.scss']
})
export class BomsAddComponent {
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
