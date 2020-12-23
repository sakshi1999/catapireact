import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "../css/Upload.css";
const Upload = () => {
    const [uploadImage, setUploadImage] = useState();


    const uploadCat = (file) => {
        console.log(file);
        const formdata = new FormData()
        formdata.append('file', file)
        axios.post(`https://api.thecatapi.com/v1/images/upload`,{
            header:{
                "Content-Type": "application/json",
                "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f"
            },
            body: formdata
        })
        .then((res)=>{
            console.log('uploaded',res);
            setUploadImage(res.data)

        })
    }
    return (
        <div className="upload__fileDiv">
            <input type="file" onChange={uploadCat} className="upload__file"/>
        </div>
    )
}

export default Upload;

