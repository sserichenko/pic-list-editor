import React from 'react';

const Checkbox = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">
                {props.name}
            </label>
            <input
              className="form-checkbox"
              name={props.name}
              onChange={props.onChange}
              value={props.value}
              checked={props.checked}
              type="checkbox" /> 
        </div>
    );
};

export default Checkbox;