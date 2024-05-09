let selectRow = null;

function onFormSubmit() {
  let formData = readFormData();
  if (selectRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}
// Getting value from User-----------------------------------------------------
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["Department"] = document.getElementById("Department").value;
  formData["Position"] = document.getElementById("Position").value;
  formData["email"] = document.getElementById("email").value;
  formData["number"] = document.getElementById("number").value;

  //   console.log(formData);
  return formData;
}

// Inserting & Showing Record in Another Table-----------------------------------------------
function insertNewRecord(data) {
  let table = document
    .getElementById("empList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Department;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Position;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.email;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.number;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<a onclick="onEdit(this)">Edit</a>`;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;
}

// Reseting Form---------------------------------------------------------------------------
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("Department").value = "";
  document.getElementById("Position").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  selectRow = null;
}
// Editing Record ----------------------------------------------------------------------------

function onEdit(td) {
  selectRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectRow.cells[0].innerHTML;
  document.getElementById("Department").value = selectRow.cells[1].innerHTML;
  document.getElementById("Position").value = selectRow.cells[2].innerHTML;
  document.getElementById("email").value = selectRow.cells[3].innerHTML;
  document.getElementById("number").value = selectRow.cells[4].innerHTML;

}

// Update Record-----------------------------------------------------------------------------
function updateRecord(formData) {
  selectRow.cells[0].innerHTML = formData.name;
  selectRow.cells[1].innerHTML = formData.Department;
  selectRow.cells[2].innerHTML = formData.Position;
  selectRow.cells[3].innerHTML = formData.email;
  selectRow.cells[4].innerHTML = formData.number;

}

// Dleteing Record--------------------------------------------------------------------------
function onDelete(td) {
  if (confirm("Are you want to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("empList").deleteRow(row.rowIndex);
    resetForm();
  }
}
