import React, { useState } from 'react';
import './AddImage.css'
const AddImage = () => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <div><img src={photo} alt="" key={photo} /> 
                
                <button > remove </button>
             </div> ;
		});
	};

	return (
		<div className="app">
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