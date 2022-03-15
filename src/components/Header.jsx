import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append('File', selectedFile);
    fetch('http://localhost:3000/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="action-block">
        <button onClick={() => navigate(-1)} className="back-button button"> <img src="images/arrow-left.svg" alt="Back" />Назад</button>
          {isFilePicked ? (
            <button onClick={handleSubmission} className="button">
              ОТПРАВИТЬ <i>{selectedFile.name}</i>
            </button>
          ) : (
            <>
            <label htmlFor="file" className="file-label">Выберите файл
            <input type="file" name="file" onChange={changeHandler} className="button file-button" />
            </label>
            </>
            
          )}
          <button className="button save-btn">
            Сохранить <img src="/images/save-icon.svg" className="icon save-icon" alt="saveIcon" />
          </button>
          <button className="button">Новое</button>
        </div>
        <div className="logo-block">
          <Link to="/">
            <img src="/images/systema.gif" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
