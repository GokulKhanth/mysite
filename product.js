    var item= [ 
        { Name:"model1",id:"s1", category: "shirt" , gender:"men",INR:"999rs" },
        { Name:"model2",id:"t1", category: "tshirt" , gender:"men",INR:"899rs" },
        { Name:"model1",id:"p2", category: "pant" , gender:"men",INR:"879rs" },
        { Name:"model1",id:"s2", category: "shirt" , gender:"women",INR:"989rs" },
        { Name:"model2",id:"t2", category: "tshirt" , gender:"women",INR:"798rs" },
        { Name:"model1",id:"p2", category: "pant" , gender:"women",INR:"899rs" },
        { Name:"model1",id:"s3", category: "shirt" , gender:"kids",INR:"789rs" },
        { Name:"model2",id:"t3", category: "tshirt" , gender:"kids",INR:"759rs" },
        { Name:"model1",id:"p3", category: "pant" , gender:"kids",INR:"959rs" },
    ]
    
    var productitem=localStorage.getItem("category");
    var product=[]
    function showproduct(){
    for(let i=0; i<item.length; i++){
        if(item[i].category=="shirt"){
          product.push(item[i])
        }
    }
    console.log(product);
    

    const table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-bordered");

    //table heading 
     let row = document.createElement('tr');
     for(const keys in product[0]){
        let col = document.createElement('td');
        let node = document.createTextNode(keys)
        console.log(node)
        col.appendChild(node);
        row.appendChild(col);
        
     }
        table.appendChild(row)

    var divelement = document.getElementById("someproduct")
    //table data
    // var table = document.createElement("table");
    for(let j =0; j<product.length; j++){
        let row = document.createElement("tr");
        for (let key in product[j]){
            var col = document.createElement("td");
            var node = document.createTextNode(product[j][key]);
            col.appendChild(node)
            row.appendChild(col)
        }
        table.appendChild(row)
        console.log(table);
        
    }
    divelement.appendChild(table)

}

