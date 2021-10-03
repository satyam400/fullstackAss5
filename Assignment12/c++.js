function callback(json) {
    
    let table = document.getElementById('mainTable');
    let newHTML = "";
    
    newHTML += '<thead>';
    newHTML += `<tr class="tableHeading"><th colspan="${json.heading.length}">${json.heading}</th></tr>`;
    newHTML += `<tr>${json.titles.map(val => `<td>${val}</td>`).join('')}</tr>`;
    newHTML += '</thead>';
    
    newHTML += '<tbody>';
    for (let curRow of json.tableData)
    newHTML += `<tr>${curRow.map((val, i) => `<td class="${json.classes[i]}">${val}</td>`).join('')}</tr>`;
    newHTML += '</tbody>';
    
    
    table.innerHTML = newHTML;
    
    for(let x of document.getElementsByClassName('link'))
        x.setAttribute('onclick', 'clicked(this)');
}

function clicked(ele){
    window.open( 'https://www.google.com/search?q=fullstack-practical ' + ele.innerText );
}

fetch('./rust.json').then(response => response.json()).then(callback);
