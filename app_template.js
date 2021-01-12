//your code here!
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('br').onsubmit = function({
        const button-compute = document.querySelector('button-compute').value
        const table = document.getElementById(button-compute)
        const newRow = document.createElement('tr')
        const subjCol = document.createElement('td')
        const delCol = document.createElement('td')
        const delBtn = document.createElement('button')
   
    })
    delBtn.innerHTML = 'x'
        delBtn.onclick = function(){
            table.removeChild(newRow)
        }
      
        let subjID = document.createElement("span")
        subjID = document.querySelector("#subID").value
        subjCol.append(subjID)
        delCol.append(delBtn)
        weightCol.append(weight)
        gradeCol.append(g)
        newRow.append(subjCol)

        table.append(newRow)

    return false
}

})
