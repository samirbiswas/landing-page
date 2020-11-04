import React, { useState } from 'react';
import './AddImage.css'
const AddImage = () => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);
	console.log(selectedFiles);

	const deletePhoto = (index)=>{
	
		console.log(selectedFiles);
		// const bb =selectedFiles.splice(index,1);
		// console.log(bb)
		const filterArr = selectedFiles.filter((st,idx)=>idx !==index);
		//console.log(ddd);
		setSelectedFiles(filterArr);

	}
	


	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};





	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo,index) => {
			return <div className='photoss'><img src={photo} alt="" key={photo} /> 
            <br/>
				<button onClick={()=>deletePhoto(index)} type="button" className="btn btn-danger ml-2">remove</button>
             </div> ;
		});
	};


	
	return (
		<div id='add-photo' className="app">
			<div className="heading">Multiple Images Preview</div>
			<div>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label-holder">
					<label htmlFor="file" className="label">
						<i className="material-icons">Add Photos</i>
					</label>
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
			</div>
		</div>
	);
};

export default AddImage;