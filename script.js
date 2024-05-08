document.addEventListener("DOMContentLoaded", function() {
    let tableData = [];
  
    document.getElementById('displayButton').addEventListener('click', function() {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        tableData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        renderTable();
      };
  
      reader.readAsArrayBuffer(file);
    });
  
    function renderTable() {
      const filteredData = applySearchFilter(tableData);
      let tableHTML = '<table class="table table-bordered">';
      
      for (let i = 0; i < filteredData.length; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < filteredData[i].length; j++) {
          tableHTML += '<td>' + filteredData[i][j] + '</td>';
        }
        tableHTML += '</tr>';
      }
      
      tableHTML += '</table>';
      document.getElementById('dataTableContainer').innerHTML = tableHTML;
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