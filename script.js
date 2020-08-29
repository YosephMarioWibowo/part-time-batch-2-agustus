const changePageTo = (pageName,elmnt,color) => { //ganti page
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

const filterStock = (event) => { //filter stock
  let filter = event.target.value.toUpperCase();
  let rows = document.querySelector("#output-tablestock").rows;
  for (let i = 0; i < rows.length; i++) {
      let firstCol = rows[i].cells[0].textContent.toUpperCase();
      let secondCol = rows[i].cells[1].textContent.toUpperCase();
      let thirdCol = rows[i].cells[2].textContent.toUpperCase();
      let fourthCol = rows[i].cells[3].textContent.toUpperCase();
      let fifthCol = rows[i].cells[4].textContent.toUpperCase();
      let sixthCol = rows[i].cells[5].textContent.toUpperCase();
      if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 
      || fourthCol.indexOf(filter) > -1 || fifthCol.indexOf(filter) > -1 || sixthCol.indexOf(filter) > -1 ) {
          rows[i].style.display = "";
      } else {
          rows[i].style.display = "none";
      }      
  }
}

let stock = [ //array stock
    {
      productid : "FS123",
      productname : "Frozen Steak",
      stockamount : 10,
      priceperitem : 100000,
      discount : 20,
      category : "Food",
    },
    {
      productid : "CD123",
      productname : "Cendol Dawet",
      stockamount : 15,
      priceperitem : 25000,
      discount : 10,
      category : "Beverage",
    }
  ];
let statusUpdate = null; //status update stock atau tambah baru
let indexUpdate = null; //index array saat update stock

const el = (el) => { //fungsi queryselector
  return document.querySelector(el)
}

const submitStock = () => {  
  const productid = el("input[name=productid]").value;
  const productname = el("input[name=productname]").value;
  const stockamount = el("input[name=stockamount]").value;
  const priceperitem = el("input[name=priceperitem]").value;
  const discount = el("input[name=discount]").value;
  const category = el("select#input-category").value;

  if (statusUpdate == 1) { // update stock
    stock[indexUpdate].productid = productid;
    stock[indexUpdate].productname = productname;
    stock[indexUpdate].stockamount = stockamount;
    stock[indexUpdate].priceperitem = priceperitem;
    stock[indexUpdate].discount = discount;
    stock[indexUpdate].category = category;
    statusUpdate=null
  } else { // tambah stock baru
    for (let i = 0; i < stock.length; i++) {
      if (stock[i].productid == productid || stock[i].productname == productname) { //jika ada yang sama 
        alert("Product id or name already exist!");
        return;
      }
    }
    stock.push({
      productid,
      productname,
      stockamount,
      priceperitem,
      discount,
      category,
      });
  }
  showStock();
  el("input[name=productid]").value="";
  el("input[name=productname]").value="";
  el("input[name=stockamount]").value="";
  el("input[name=priceperitem]").value="";
  el("input[name=discount]").value="";
  el("select#input-category").value="";
}

const showStock = () => { //menampilkan stock
  let row = document.getElementById("output-tablestock");
  let rows = "";
  for (let i = 0; i < stock.length; i++) {
    rows += `<tr>
    <td>${stock[i].productid}</td>
    <td>${stock[i].productname}</td>
    <td>${stock[i].stockamount}</td>
    <td>${stock[i].priceperitem}</td>
    <td>${stock[i].discount}</td>
    <td>${stock[i].category}</td>
    <td align=center><button onclick="editStock(${i})">Edit</button> <button onclick="discardStock(${i})">Delete</button></td>
    </tr>`;
  }
  row.innerHTML = rows;
};
showStock();

const editStock = (i) => { //edit stock di form
  el("input[name=productid]").value = stock[i].productid;
  el("input[name=productname]").value = stock[i].productname;
  el("input[name=stockamount]").value = stock[i].stockamount;
  el("input[name=priceperitem]").value = stock[i].priceperitem;
  el("input[name=discount]").value = stock[i].discount;
  el("select#input-category").value = stock[i].category;
  statusUpdate = 1;
  indexUpdate = i;
};

const discardStock = (i) => { //delete stock
  var r = confirm("Are you sure?");
  if (r == true) {
      stock.splice(i,1)
  }
  showStock();
}

let receipt = []; //array nota
let sales = []; //array sales
const submitReceipt = () => { //tambah item chasier
  const productidreceipt = el("input[name=productidreceipt]").value;
  let index = stock.findIndex(x => x.productid === productidreceipt);
  const quantity = el("input[name=quantityreceipt]").value;
  const memberidreceipt = el("input[name=member]").value;
  const productnamereceipt = stock[index].productname;
  const priceperitemreceipt = stock[index].priceperitem;
  const discountreceipt = stock[index].discount;
  const categoryreceipt = stock[index].category;
  let total = (priceperitemreceipt*quantity)-(discountreceipt/100*priceperitemreceipt*quantity); 

  receipt.push({
    productidreceipt,
    productnamereceipt,
    quantity,
    categoryreceipt,
    priceperitemreceipt,
    discountreceipt,
    total,
    });
  showReceipt();
  el("input[name=productidreceipt]").value="";
  el("input[name=quantityreceipt]").value="";
}

const showReceipt = () =>{
  let row = document.getElementById("output-receipt");
  let rows = "";
  for (let i = 0; i < receipt.length; i++) {
    rows += `<tr>
    <td>${receipt[i].productidreceipt}</td>
    <td>${receipt[i].productnamereceipt}</td>
    <td>${receipt[i].categoryreceipt}</td>
    <td>${receipt[i].quantity}</td>
    <td>${receipt[i].priceperitemreceipt}</td>
    <td>${receipt[i].discountreceipt}</td>
    <td>${receipt[i].total}</td>
    <td align=center><button onclick="discardReceipt(${i})">Delete</button></td>
    </tr>`;
  }
  row.innerHTML = rows;
  let grandtotal = receipt.map(item => item.total).reduce((prev, next) => prev + next);
  console.log(grandtotal);
  let showGrandtotal = document.getElementById("output-grandtotal");
  rowGrandtotal=`<tr><td>${grandtotal}</td></tr>`;
  showGrandtotal.innerHTML = rowGrandtotal;
  }

const discardReceipt = (i) => { //delete stock
  var r = confirm("Are you sure?");
  if (r == true) {
      receipt.splice(i,1)
  }
  showReceipt();
}

let numberTransaction = 1;
const printReceipt = () => { //cetak nota
  const todaypay = new Date();
  const datepay = todaypay.getFullYear()+'-'+(todaypay.getMonth()+1)+'-'+todaypay.getDate();
  const timepay = todaypay.getHours() + ":" + todaypay.getMinutes() + ":" + todaypay.getSeconds();
  const datetime = datepay+' '+timepay;  
  //const datetimein = printedTicket[ticketnumberinput-1].datetime;
  numberTransaction++;
}













