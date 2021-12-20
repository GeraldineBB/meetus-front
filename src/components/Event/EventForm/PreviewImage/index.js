import React from "react";



const PreviewImage = ({picture}) => {

    const [preview, setPreview] = React.useState(null);
  
    const reader = new FileReader();
  
    reader.readAsDataURL(picture);
  
    reader.onload = () => {
      setPreview(reader.result);
    }
  
  
    return( 
    <div> 
    {preview ? <img src= {preview} alt= "preview" width="200 px" height="200px"/>  : "loading.."}
    
    </div>
    )
  };

  export default PreviewImage;
  