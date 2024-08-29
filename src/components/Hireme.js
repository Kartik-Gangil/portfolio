import React from 'react' 
import Photo from '../assets/photo2.png'

export default function Hireme() {
    const resume = "https://drive.google.com/file/d/1N9fs4N5FaBzexjJF3qPbqU3ETorkz4Qq/view?usp=sharing"
    const onButtonClick = () => {
        const pdfUrl = {resume};
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Kartik_Resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className='container bg-success rounded-4'>
            <div className="row">
                <div className="col d-flex justify-content-start">
                    <img src={Photo} alt=""  />
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <button className='btn btn-primary rounded-pill fs-2 fst-italic ' onClick={onButtonClick} style={{ height: "100px", width: "300px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}}> <i className='fa-solid fa-download'></i> Download CV</button>
                </div>

            </div>
        </div>
    )
}
