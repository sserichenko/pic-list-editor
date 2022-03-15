import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Input from './Input';
import Checkbox from './Checkbox';

const ItemFormContainer = () => {

    const dispatch = useDispatch();
    const {isEditForm, isAddForm, EditingItemField} = useSelector((state) => state.piclist)

    console.log("EDIT AND ADD", isEditForm, isAddForm)

  const [formState, setFormState] = useState({
    UPC: '125215',
    Department: '001',
    IsQuantity: false,
    IsQuickPickItem: false,
    IsPopular: false,
    IsVisible: true,
    DeleteThisItem: false,
    IsZeroWeightItem: true,
    IsTaxable: false,
    IsExtra: false,
  });

  const [editFormInfo, setEditFormInfo] = useState({})

  const handleInputChange = (event) => {
    setEditFormInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckboxChange = (event) => {
    setEditFormInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleClearForm = () => {};

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch({
        type: "UPDATE_ITEM_IN_PICLIST",
        payload: editFormInfo
    })
  };


  useEffect(() => {
    setEditFormInfo(EditingItemField)
  }, [EditingItemField])

  console.log('editFormInfo >>> !!!', editFormInfo);

  return (
  <div className="formContainer">
      <form className="items-form">
      <Input
        type="text"
        title="UPC"
        name="UPC"
        value={editFormInfo.UPC}
        placeholder="UPS Code"
        handleChange={handleInputChange}
      />
      <Input
        type="text"
        title="Department"
        name="Department"
        value={editFormInfo.Department}
        placeholder="Department Code"
        handleChange={handleInputChange}
      />
      <Checkbox
        name="IsQuantity"
        onChange={handleCheckboxChange}
        value={editFormInfo.IsQuantity}
        checked={editFormInfo.IsQuantity}
        label="IsQuantity"
      />
      <Checkbox
        name="IsQuickPickItem"
        onChange={handleCheckboxChange}
        value={editFormInfo.IsQuickPickItem}
        checked={editFormInfo.IsQuickPickItem}
        label="IsQuickPickItem"
      />
      <Checkbox
        name="IsPopular"
        onChange={handleCheckboxChange}
        value={editFormInfo.IsPopular}
        checked={editFormInfo.IsPopular}
        label="IsPopular"
      />
      <Checkbox
        name="IsVisible"
        onChange={handleCheckboxChange}
        value={editFormInfo.IsVisible}
        checked={editFormInfo.IsVisible}
        label="IsVisible"
      />
      <Checkbox
        name="DeleteThisItem"
        onChange={handleCheckboxChange}
        value={editFormInfo.DeleteThisItem}
        checked={editFormInfo.DeleteThisItem}
        label="DeleteThisItem"
      />
      <Checkbox
        name="IsZeroWeightItem"
        onChange={handleCheckboxChange}
        value={editFormInfo.IsZeroWeightItem}
        checked={editFormInfo.IsZeroWeightItem}
        label="IsZeroWeightItem"
      />
      <Checkbox
        name="IsTaxable"
        onChange={handleCheckboxChange}
        value={editFormInfo.IsTaxable}
        checked={editFormInfo.IsTaxable}
        label="IsTaxable"
      />

    <Checkbox
        name="IsExtra"
        onChange={handleCheckboxChange}
        value={editFormInfo.IsExtra}
        checked={editFormInfo.IsExtra}
        label="IsExtra"
      />
        <hr />
    <div className="items-form__footer">
        <button type="submit" className="items-form__save overlay-action" onClick={handleFormSubmit}>Save</button>
        <button className="items-form__close overlay-action" onClick={() => dispatch({type: "HIDE_EDIT_ITEMS_MODAL"})}>Close</button>
        </div>
    </form>
  </div>
    
  );
};

export default ItemFormContainer;
