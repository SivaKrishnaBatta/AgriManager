import { Component } from '@angular/core';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-credits-memo-print',
  templateUrl: './credits-memo-print.component.html',
  styleUrls: ['./credits-memo-print.component.scss']
})
export class CreditsMemoPrintComponent {
  downloadPDF() {
    const element = document.querySelector('.cor-print') as HTMLElement;

    html2canvas(element).then((canvas:any) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Credit_Memo.pdf');
    });
  }



}
