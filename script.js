function changePageTo(pageName,elmnt,color) { //ganti page
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
document.getElementById("defaultOpen").click();

var ticketNumber = 0;
let printedTicket = [];

const ticketCount = () => {
    ticketNumber ++;
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const datetime = date+' '+time;
    printedTicket.push({
        ticketNumber,
        datetime,
      });
    showPrintedTickets();
};

const showPrintedTickets = () => {
    let row = document.getElementById("tablein");
    let rows = "";
    for (let i = 0; i < printedTicket.length; i++) {
      rows += `<tr>
      <td>${printedTicket[i].ticketNumber}</td>
      <td>${printedTicket[i].datetime}</td></tr>`;
    }
    row.innerHTML = rows;
};
showPrintedTickets();

const ticketReset = () => {
    ticketNumber = 0;
    printedTicket = [];
    showPrintedTickets();
};

const el = (el) => {
    return document.querySelector(el)
}

let paidTicket = [];
const calculate = () => {
    const ticketnumberinput = el("input[name=ticketnumber]").value
    const vehicle = el("select#input-vehicle").value
    const platenumber = el("input[name=platenumber]").value

    const todaypay = new Date();
    const datepay = todaypay.getFullYear()+'-'+(todaypay.getMonth()+1)+'-'+todaypay.getDate();
    const timepay = todaypay.getHours() + ":" + todaypay.getMinutes() + ":" + todaypay.getSeconds();
    const datetimeout = datepay+' '+timepay;  
    const datetimein = printedTicket[ticketnumberinput-1].datetime;
    const difftime = Math.floor((new Date(datetimeout) - new Date(datetimein))/1000/60);
    const difftime =1;

    var total;
    if (difftime <= 1) {
        if (vehicle == "car") {
            total = 5000;
        } else {
            total = 3000;
        }
    } else {
        if (vehicle == "car") {
            total = 5000+difftime*3000;
        } else {
            total = 3000+difftime*1000;
        }
    }

    paidTicket.push({
        ticketnumberinput,
        vehicle,
        platenumber,
        datetimein,
        datetimeout,
        total
      });
    showPaidTickets();
}

const showPaidTickets = () => {
    let row = document.getElementById("tableout");
    let rows = "";
    for (let i = 0; i < paidTicket.length; i++) {
      rows += `<tr>
      <td>${paidTicket[i].ticketnumberinput}</td>
      <td>${paidTicket[i].vehicle}</td>
      <td>${paidTicket[i].platenumber}</td>
      <td>${paidTicket[i].datetimein}</td>
      <td>${paidTicket[i].datetimeout}</td>
      <td>${paidTicket[i].total}</td></tr>`;
    }
    row.innerHTML = rows;
};
showPaidTickets();

const paidReset = () => {
    paidTicket = [];
    showPaidTickets();
};