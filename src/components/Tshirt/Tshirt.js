import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import './Tshirt.css';
import shirt from '../../images/tshirt.jpg';
import Resize from './Resize';
import NavBar from '../Home/NavBar/NavBar';
import Header from '../Home/Header/Header';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
   
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Tshirt = () => {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");

        const handleOpen = () => {
          setOpen(true);
        };
        let value;
        const handleChange = (e) => {
          value = e.target.value;
        };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    setText(value);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>

          <input type="text" onChange={handleChange} />
            <button className='btn btn-success' variant="primary" onClick={handleSave}>
              Save
            </button>
            <button className='btn btn-danger' variant="primary" onClick={handleClose}>
              Close
            </button>
          <h2 id="simple-modal-title">Write Text</h2>
    </div>
  );
  return (
    <div>
     
      <div className="editimageboby">
       
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <div className="imagediv">
          <img src={shirt} alt="T-shirt" />
          <div class="text">
            <Fragment >
              <Resize
                top={-80}
                left={-50}
                width={100}
                height={100}
                rotateAngle={0}
              >
                <div className='content content1'>
                   <h2>{text}</h2>
                </div>
              </Resize>
            </Fragment>
            </div>
        </div>
        <button className='btn btn-primary' type="button" onClick={handleOpen}>
          Input Text Here 
      </button>
      </div>
    </div>
  );
};

export default Tshirt;