import React from 'react';
import EmpItemList from './EmpItemList';
import AddEmpItem from './AddEmpItem';
import './App.css';
import EditEmpItem from './EditEmpItem';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      id: null,
      userId: 1,
      emp: '',
      dept: '',
      status: false,
      empItem: {},
      empItems: [],
      editing: false
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteEmpItem = this.deleteEmpItem.bind(this);
    this.boughtEmpItem = this.boughtEmpItem.bind(this);
    this.addEmpItem = this.addEmpItem.bind(this);
    this.editEmpItem = this.editEmpItem.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.updateEmpItem = this.updateEmpItem.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    this.setState({
      [name]:value
    })
  }

  addEmpItem(event){
    event.preventDefault()
    if (!this.state.emp) return;
    const empItem = {
      id: this.state.empItems.length + 1,
      emp: this.state.emp,
      dept: this.state.dept,
      userId: this.state.userId,
      statu: this.state.status
    };

    console.log(empItem);
    this.setState({
      emp: '',
      dept: '',
      empItem: empItem,
      empItems: [...this.state.empItems, empItem]
    })
    console.log(this.state.empItems);
  }

  deleteEmpItem(id) {
    const empItems = this.state.empItems.filter( item => item.id !== id );
    this.setState({empItems: empItems});
    if(this.state.editing === true) {
      window.location.reload();
    }
  }

  boughtEmpItem(currentEmp) {
    const updatedCurrentEmp = Object.assign({}, currentEmp, { status: true });
    const empItems = this.state.empItems.map((empItem, index) => (empItem.id === currentEmp.id ? updatedCurrentEmp : empItem));
    this.setState({empItems: empItems})
  }

  editEmpItem(empItem) {
    this.setEditing(true);
    this.setState({
      emp:empItem.emp,
      dept:empItem.dept,
      empItem: empItem
    });
    console.log(empItem);
  }

  setEditing(value) {
    if(typeof value !== 'boolean') { throw " This value must either be true or false"}
    this.setState({
      editing: value
    })
  }

  updateEmpItem(event) {
    event.preventDefault();
    const updatedEmp = this.state.emp;
    const updatedDept = this.state.dept;
    const updatedEmpItem = Object.assign({}, this.state.empItem, { emp: updatedEmp, dept: updatedDept })
    const empItems = this.state.empItems.map((empItem) => (empItem.id === this.state.empItem.id ? updatedEmpItem : empItem));
    this.setState({ emp:'', dept: '', empItems: empItems});
  }

  render() {
    const { dept, emp, empItems, editing } = this.state;
      return (
        <div className="App">
          <div className="row App-main">
            <EmpItemList 
              empItems= {empItems} 
              deleteEmpItem={this.deleteEmpItem}
              boughtEmpItem={this.boughtEmpItem}
              editEmpItem={this.editEmpItem}
            />
          </div>
          <div className="row App-main">
          { 
            editing  ? (
            <EditEmpItem 
             emp={this.state.emp}
             dept={this.state.dept} 
             handleInputChange={this.handleInputChange}
             setEditing={this.setEditing}
             updateEmpItem={this.updateEmpItem}
            />
            ) : (
            <AddEmpItem 
              emp={this.state.emp}
              dept={this.state.dept} 
              handleInputChange={this.handleInputChange} 
              addEmpItem={this.addEmpItem}
            />
            )
          }
          </div>
        </div>
      );
    }
}


/*function App(data) {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}*/

export default App;
