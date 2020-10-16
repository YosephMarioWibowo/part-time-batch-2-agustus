import React, { Component } from 'react';
import "./header.css"

var printedTicket = [];
var paidTicket = [];
// eslint-disable-next-line
var displayCountmotor = document.getElementById("motorslot");
// eslint-disable-next-line
var displayCountcar = document.getElementById("carslot");
// eslint-disable-next-line
var motorSlot = 100;
// eslint-disable-next-line
var carSlot = 50;

class Header extends Component {

  ticketPrintmotor = () => {
    const ticketcode = Math.random().toString(36).substring(2, 7).toUpperCase();;
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const datetime = date+' '+time;
    motorSlot--;
    const vehicle = "Motorcycle";
    printedTicket.push({
        ticketcode,
        datetime,
        vehicle,
      });
    this.showPrintedTickets();
};

ticketPrintcar = () => {
  const ticketcode = Math.random().toString(36).substring(2, 7).toUpperCase();;
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const datetime = date+' '+time;
  const vehicle = "Car";
  carSlot--;
  printedTicket.push({
      ticketcode,
      datetime,
      vehicle,
    });
  this.showPrintedTickets();
};

showPrintedTickets = () => {
    let row = document.getElementById("tablein");
    let rows = "";
    for (let i = 0; i < printedTicket.length; i++) {
      rows += `<tr>
      <td>${printedTicket[i].ticketcode}</td>
      <td>${printedTicket[i].datetime}</td>
      <td>${printedTicket[i].vehicle}</td></tr>`;
    }
    row.innerHTML = rows;
    console.log(motorSlot);
    console.log(carSlot);

};

ticketReset = () => {
  // eslint-disable-next-line no-restricted-globals
  var r = confirm("Are you sure?");
  if (r === true) {
    printedTicket = [];
  }  
    this.showPrintedTickets();
};

el = (el) => {
    return document.querySelector(el)
}

calculate = () => {
    const ticketcodeinput = this.el("input[name=ticketcode]").value
    const vehicle = this.el("select#input-vehicle").value
    const platenumber = this.el("input[name=platenumber]").value

    const todaypay = new Date();
    const datepay = todaypay.getFullYear()+'-'+(todaypay.getMonth()+1)+'-'+todaypay.getDate();
    const timepay = todaypay.getHours() + ":" + todaypay.getMinutes() + ":" + todaypay.getSeconds();
    const datetimeout = datepay+' '+timepay; 
    const index = printedTicket.findIndex(x => x.ticketcode === ticketcodeinput); 
      if (printedTicket[index]==null || printedTicket[index].vehicle!==vehicle) {
        return;
      }
    const datetimein = printedTicket[index].datetime;
    const difftime = Math.floor((new Date(datetimeout) - new Date(datetimein))/1000/60);
    let total;
    if (difftime <= 1) {
        if (vehicle === "Car") {
            total = 5000;
            carSlot++;
        } else {
            total = 3000;
            motorSlot++;
        }
    } else {
        if (vehicle === "Car") {
            total = 5000+difftime*3000;
            carSlot++;
        } else {
            total = 3000+difftime*1000;
            motorSlot++;
        }
    }
    printedTicket.splice(index,1)
    paidTicket.push({
        ticketcodeinput,
        vehicle,
        platenumber,
        datetimein,
        datetimeout,
        total
      });
    this.showPrintedTickets();
    this.showPaidTickets();
}

showPaidTickets = () => {
    let row = document.getElementById("tableout");
    let rows = "";
    for (let i = 0; i < paidTicket.length; i++) {
      rows += `<tr>
      <td>${paidTicket[i].ticketcodeinput}</td>
      <td>${paidTicket[i].vehicle}</td>
      <td>${paidTicket[i].platenumber}</td>
      <td>${paidTicket[i].datetimein}</td>
      <td>${paidTicket[i].datetimeout}</td>
      <td>${paidTicket[i].total}</td></tr>`;
    }
    row.innerHTML = rows;
};


paidReset = () => {
  // eslint-disable-next-line no-restricted-globals
  var r = confirm("Are you sure?");
  if (r === true) {
    paidTicket = [];
  }
  this.showPaidTickets();
};

render() { 
    return ( 
      <>
        <div className="boxin">
          <div className="GateIn">Gate In</div>
          <div>
            <button className="btn-countmotor" onClick={this.ticketPrintmotor}>Get Ticket Motorcycle</button>
            <button className="btn-countcar" onClick={this.ticketPrintcar}>Get Ticket Car</button>     
            </div>
            <table>
              <thead>
                <tr>
                  <th>Ticket Code</th>
                  <th>Time In</th>
                  <th>Vehicle</th>
                </tr>
              </thead>
              <tbody id="tablein">
              </tbody>
            </table>        
          <button className="btn-reset" onClick={this.ticketReset}>Reset</button>
        </div>

        <div className="boxout">
        <div className="GateOut">Gate Out</div>
        <form>
          <label>Ticket Code</label><input id="input-ticketcode" name="ticketcode" className="form-add" type="tel" placeholder="Please input ticket number..."/><br/>
          <label>Vehicle</label>
            <select id="input-vehicle" name="vehicle" className="form-select">
              <option value="Motorcycle">Motorcycle</option>
              <option value="Car">Car</option>
            </select><br/>  
          <label>Plate Number</label><input id="input-platenumber" name="platenumber" className="form-add" type="text" placeholder="Please input plate number..."/><br/>
        </form>
        <button className="btn-calculate" onClick={this.calculate}>Calculate</button>
          <table>
            <thead>
              <tr>
                <th>Ticket Code</th>
                <th>Vehicle</th>
                <th>Plate Number</th>
                <th>Time In</th>
                <th>Time Out</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody id="tableout"></tbody>
          </table>
        <button className="btn-reset" onClick={this.paidReset}>Reset</button>
        </div> 
      </>
    );
  }
}
 
export default Header;