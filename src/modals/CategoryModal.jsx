import React from 'react';

const CategoryModal = () => {
  return (
    <div className="overlay">
      <div className="overlay__modal">
        <img className="overlay__close-icon" src="/images/icon-close.svg" alt="close-icon" />
        <h2 className="overlay__title">Category editor</h2>
        <hr />
        <form className="overlay__form">
          <div className="input-field-wrapper">
            <label htmlFor="id-select">Choose ID : </label>
            <select id="id-select" className="overlay__idselect overlay__select">
              <option value="Favorites">Popular</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
          <div className="input-field-wrapper">
            <label htmlFor="id-visible">Is group VISIBLE : </label>
            <input type="checkbox" className="overrlay__checkbox" id="id-visible" />
          </div>
          <div className="input-field-wrapper">
            <label htmlFor="id-quick">Is piclist QUICK : </label>
            <input type="checkbox" className="overrlay__checkbox" id="id-quick" />
          </div>
          <div className="input-field-wrapper">
            <label htmlFor="id-taxable">Is TAXABLE : </label>
            <input type="checkbox" className="overrlay__checkbox" id="id-taxable" />
          </div>
          <div className="input-field-wrapper">
            <label htmlFor="id-custom">Is CASTOMIZABLE : </label>
            <input type="checkbox" className="overrlay__checkbox" id="id-custom" />
          </div>
          <hr />
          <div className="landAddWrapper">
            <span className="overlay__langTitle">Add language :</span>
            {/* <button className="btn-add-category">+</button> */}
          </div>
          <div className="overlay__languagesBlock">
            <div className="overlay__language">
              <select id="id-select" className="overlay__langselect overlay__select">
                <option value="0816">Portuguese_Standard</option>
                <option value="0422">Ukrainian</option>
                <option value="0403">Catalan</option>
                <option value="0405">Czech</option>
                <option value="0406">Danish</option>
                <option value="0413">Dutch_Standard</option>
                <option value="0c09">English_Australian</option>
                <option value="1809">English_Irish</option>
                <option value="1409">English_New_Zealand</option>
                <option value="0809">English_United_Kingdom</option>
                <option value="0409">English_United_States</option>
                <option value="040b">Finnish</option>
                <option value="0c0c">French_Canadian</option>
                <option value="040c">French_Standard</option>
                <option value="0407">German_Standard</option>
                <option value="0410">Italian_Standard</option>
                <option value="0427">Lithuanian</option>
                <option value="0415">Polish</option>
                <option value="0c0a">Spanish_Modern_Sort</option>
                <option value="080a">Spanish_Mexican</option>
                <option value="041d">Swedish</option>
                <option value="041f">Turkish</option>
                <option value="0452">Валлийский (Соединенное Королевство)</option>
                <option value="0424">Slovenian</option>
                <option value="041a">Croatian</option>
                <option value="041b">Slovak</option>
                <option value="0401">Arabic_Saudi_Arabia</option>
                <option value="0419">Russian</option>
                <option value="040e">Hungarian</option>
                <option value="0804">Chinese_PRC</option>
                <option value="0408">Greek</option>
                <option value="043e">Malay_Malaysia</option>
                <option value="041e">Thai</option>
                <option value="0446">Пенджабский (Индия)</option>
                <option value="081a">Serbian_Latin</option>
                <option value="0416">Portuguese_Brazilian</option>
                <option value="040d">Hebrew</option>
                <option value="0c04">Chinese_Hong_Kong</option>
                <option value="0418">Romanian</option>
              </select>
              <input type="text" className="overlay-input" />
              <button className="btn-add-category">+</button>
              {/* <button className="btn-add-category rm-lang-btn"><img src="/images/icons8-trash.svg" alt="" /></button> */}
            </div>
          </div>
          <div className="establish-lang-wrapper">
            <div className="overlay__establishedLanguages">
              <div className="lang-info-wrapper">
                <p className="overlay__langName">Ukrainian</p>
                <p className="overlay__langTitle">Чай та кава</p>
              </div>
              <button className="btn-add-category rm-lang-btn">
                <img src="/images/icons8-trash.svg" alt="" />
              </button>
            </div>
            <div className="overlay__establishedLanguages">
              <div className="lang-info-wrapper">
                <p className="overlay__langName">Ukrainian</p>
                <p className="overlay__langTitle">Чай та кава</p>
              </div>
              <button className="btn-add-category rm-lang-btn">
                <img src="/images/icons8-trash.svg" alt="" />
              </button>
            </div>
            <div className="overlay__establishedLanguages">
              <div className="lang-info-wrapper">
                <p className="overlay__langName">Ukrainian</p>
                <p className="overlay__langTitle">Чай та кава</p>
              </div>
              <button className="btn-add-category rm-lang-btn">
                <img src="/images/icons8-trash.svg" alt="" />
              </button>
            </div>
            <div className="overlay__establishedLanguages">
              <div className="lang-info-wrapper">
                <p className="overlay__langName">Ukrainian</p>
                <p className="overlay__langTitle">Чай та кава</p>
              </div>
              <button className="btn-add-category rm-lang-btn">
                <img src="/images/icons8-trash.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="overlay__footer">
            <button className="overlay__save overlay-action">Save</button>
            <button className="overlay__close overlay-action">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
