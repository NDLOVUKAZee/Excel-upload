document.addEventListener("DOMContentLoaded", function() {
  let tableData = [];

document.getElementById('displayButton').addEventListener('click', function() {
    const InputF = document.getElementById('fileInput');
    const file = InputF.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      const data = new Uint8Array(event.target.result);
      const spreadSheet = XLSX.read(data, { type: 'array' });
      const sheetName = spreadSheet.SheetNames[0];
      const sheet = spreadSheet.Sheets[sheetName];
      tableData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      renderTable();
    };

    reader.readAsArrayBuffer(file);
  });
  
  function renderTable() {
    const filteredData = applySearchFilter(tableData);
    let tableHTML = '<table class="table table-bordered">';
    
    
    tableHTML += '<thead><tr class="header-row">';
    for (let header of filteredData[0]) {
        tableHTML += '<th>' + header + '</th>';
    }
    tableHTML += '</tr></thead>';
    
    tableHTML += '<tbody>';
    for (let i = 1; i < filteredData.length; i++) {
        tableHTML += '<tr class="' + (i % 2 === 0 ? 'even-row' : 'odd-row') + '">';
        for (let j = 0; j < filteredData[i].length; j++) {
            tableHTML += '<td>' + filteredData[i][j] + '</td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</tbody>';
    
    tableHTML += '</table>';
    document.getElementById('dataTable').innerHTML = tableHTML;
}

  function applySearchFilter(data) {
    const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!searchValue) return data;
    return data.filter(function(row) {
      return row.some(function(cell) {
        return cell.toString().toLowerCase().includes(searchValue);
      });
    });
  }

  document.getElementById('searchInput').addEventListener('input', function() {
    renderTable();
  });
});