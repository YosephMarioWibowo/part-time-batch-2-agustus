import React from 'react';

  const EmpItemList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Emp</th>
            <th>Dept</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.empItems.length > 0 ? (
                props.empItems.map((empItem) => (
                    <tr key={empItem.id}>
                      <td>{ empItem.id }</td>
                      <td>{ empItem.emp }</td>
                      <td>{ empItem.dept }</td>
                      <td>
                        <button className="btn btn-primary ml-2" onClick={() => props.editEmpItem(empItem) }>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteEmpItem(empItem.id) }>Delete</button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={3}>No emp</td>
                </tr>
              )
            }
        </tbody>
      </table>
    );
  }


export default EmpItemList;


