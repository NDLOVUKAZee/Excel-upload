const inpt = document.getElementById("inptFile")
const tableD = document.getElementById("btl")

// function loadF(){

// }
inpt.addEventListener('change', (event) => {
    const file = event.target.files[0]

    readXlsxFile(file).then(rows) => {
        console.log(rows)
        tableD.innerHTML = ""

        rows.forEach((row)=> {
            let tr = document.createElement('tr')
            rows.forEach((cell)=> {
                const td = document.createElement('td')
                td.textContent = cell 
                tr.appendChild(td)
        })
         table.appendChild(tr)   
        })
    }

})