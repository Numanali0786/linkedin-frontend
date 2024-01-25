import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { postModalOff } from '../../context/stateSlice';
import { IoMdClose } from "react-icons/io";
import { resumeModalOff,resumeModalOn } from '../../context/stateSlice'
import Base64Downloader from 'react-base64-downloader';

import './ResumeModal.scss'


const ResumeModal = () => {

    const { user, profile } = useSelector((state) => state.userSlice)
    const {resumeModal}  = useSelector((state)=> state.stateSlice)
    // const profile = profiles?.find((profile)=> profile?.authorSub === user?.sub)

    const [resumeData, setResumeData] = useState({selectedFile: '' })
    const [fileName, setFileName] = useState('')

    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(resumeData.selectedFile)
       
    }

    const downloadPDF = () => {
        console.log(resumeData.selectedFile.split(',')[1])
        const base64PDFString = resumeData.selectedFile.split(',')[1];
    
        const binaryPDF = atob(base64PDFString);
    
        const arrayBuffer = new Uint8Array(binaryPDF.length);
        for (let i = 0; i < binaryPDF.length; i++) {
          arrayBuffer[i] = binaryPDF.charCodeAt(i);
        }
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    
        const downloadLink = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = 'example.pdf';
    
        document.body.appendChild(downloadLink);
        downloadLink.click();
    
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(url);
      };
    
    
    return (
        <div className='resumeModal__div'>
            <section className='modal__center'>
                <div className="modal__content">
                   
                    <form>
                        <h3>Select a resume</h3>
                        <h5>Get insights for formatting issues, keywords, and more.</h5>
                        {/* <br /> */}
                        <p>Supported upload formats: 5MB max in .DOCX or .PDF</p>
                        <div className="file">
                            <FileBase
                                size="60"
                              
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setResumeData({ ...resumeData, selectedFile: base64 })
                                }
                            />
                            {resumeData.selectedFile?<img src={resumeData.selectedFile} alt="" />:(
                                <div className="resumeUpload">
                                    Upload Resume
                                </div>
                            )}
                            {/* {eventData.selectedFile? <img src={eventData.selectedFile} alt="" />: <img src='"data:image/png;base64,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"'/>} */}
                            {/* <button type='button'><img src="data:image/png;base64,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" alt="" /></button> */}
                        </div>

                        <br />
                        <button type='button' className='close icon__button' onClick={() => dispatch(resumeModalOff())}><IoMdClose size={25} /></button>
                        <button disabled={!resumeData.selectedFile} className={`${!resumeData.selectedFile == "" ? "post__btn" : "disable__btn"}`} onClick={handleSubmit} >Create</button>
                    </form>
                    <button className='' onClick={downloadPDF}>Download PDF</button>
                    

                </div>
            </section>
        </div>
    )
}

export default ResumeModal