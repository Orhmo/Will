import React from 'react'
import html2canvas from "html2canvas";
import {jsPDF} from 'jspdf';

const Download = ({page1ID, page2ID, downloadFileName}) => {
    const handleWillDownload = () => {
        const input1 = document.getElementById (page1ID)
        html2canvas(input1).then( (canvas) => {
        const imgData1 = canvas.toDataURL("image/png")

        const input2 = document.getElementById (page2ID)
        html2canvas(input2).then( (canvas) => {
        const imgData2 = canvas.toDataURL("image/png")

        const imgWidth = 400
        const imgHeight = 600 //canvas.height * imgWidth / canvas.width
        const pdf = new jsPDF('portrait', 'pt','a4')

        pdf. addImage (imgData1,"JPEG", 100, 100, imgWidth, imgHeight)
        pdf.addPage()
        pdf. addImage (imgData2,"JPEG", 100, 50, imgWidth, imgHeight)
    pdf.save(`${(downloadFileName)}`)
    })
    })
  };
  return (
    <div>
        <button onClick={handleWillDownload} className='btn mt-8 mx-12 md:mx-44 px-16 py-2'>Download Will</button>
    </div>
  )
}

export default Download;
    ;
