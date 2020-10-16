import React from 'react'

const EditEmpItem = props => {
  return (
    <form>
      <div className="form-group">
        <label>Emp name</label>
        <input type="text" className="form-control" name="emp" value={props.emp} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label className="text-white">Emp dept</label>
        <input type="text" className="form-control" name="dept" value={props.dept} onChange={ props.handleInputChange} />
      </div>
      <button onClick={ props.updateEmpItem } className="btn btn-success mt-2"> Update </button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info mt-2">Cancel</button>
    </form>
  )
}

export default EditEmpItem;