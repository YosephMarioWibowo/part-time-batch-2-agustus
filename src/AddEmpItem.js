import React from 'react'

const AddEmpItem = props => {
  return (
    <form onSubmit={ props.addEmpItem }>
      <div className="form-group">
        <label>Emp name</label>
        <input type="text" className="form-control" name="emp" value={props.emp} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Emp dept</label>
        <input type="text" className="form-control" name="dept" value={props.dept} onChange={ props.handleInputChange} />
      </div>
      <button className="btn btn-success mt-2"> Add emp item </button>
    </form>
  )
}

export default AddEmpItem;