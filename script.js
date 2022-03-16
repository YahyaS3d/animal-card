//Name: Yahya Saad, ID: 322944869
const now = new Date();
let fromdate = now.getFullYear() +'0'+ (now.getMonth() +1)+ now.getDate() - 7;
let today = now.getFullYear() +'0'+ (now.getMonth() +1)+ now.getDate();
//show date from the server side - php external file
window.onload = function() {
    let http = new XMLHttpRequest();
    http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const d = new Date();
        document.getElementById('date').innerHTML = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    }
  };
  http.open("GET", "get_current_date.php", true);
  http.send();

};
// This is the client-side script.

    //to show 4 random animal pictures 
  function show4Pictures() {

    $.ajax({
        url: "https://zoo-animal-api.herokuapp.com/animals/rand/4",
        success: animals => displayAnimals(animals),
        error: err => alert(err.status)
    });

}
//to show 8 random animal pictures 
function show8Pictures() {

    $.ajax({
        url: "https://zoo-animal-api.herokuapp.com/animals/rand/8",
        success: animals => display8Animals(animals),
        error: err => alert(err.status)
    });
}
////to show 10 random animal pictures 
function show10Pictures() {

    $.ajax({
        url: "https://zoo-animal-api.herokuapp.com/animals/rand/10",
        success: animals => display10Animals(animals),
        error: err => alert(err.status)
    });
}

//display 4 animals 
function displayAnimals(animals) {
    $("#photo").empty();
    $("#info").empty();
    let count = 0;
    let data = new Array(4);
    for(const animal of animals) {
        let view = 0;
        const th = `
                <th id="anima-${count}"><span>${animal.name}</span><img src="${animal.image_link}"></th>
        `;
        
        $("#photo").append(th);
        // getViews(animal.name).done((views)=>{
        //     view = views;
        // })
        data[count] = {
            animal_type: animal.animal_type ,
            diet: animal.diet ,
            lifespan: animal.lifespan,
            length_min: animal.length_min,
            length_max: animal.length_max,
            weight_min: animal.weight_min,
            weight_max: animal.weight_max,
            // views: view
            
        };
        
        count++;
    }
    for(let i =  0; i<4; i++){
        $("#anima-" + i).click(()=>{
            alert("Animal type is:"+ data[i].animal_type +" ,diet: " + data[i].diet + " ,lifespan: " + data[i].lifespan + " ,minimum length: "+ data[i].length_min + " ,maximum length: " + data[i].length_max + " ,minimum weight: "+data[i].weight_min + " ,maximum weight: "+data[i].weight_max );
        });
        
    }
}
//display 10 animals 
function display10Animals(animals) {
    $("#photo").empty();
    $("#info").empty();
    let count = 0;
    let data = new Array(10);
    for(const animal of animals) {
        if(count<5){
            const th = `
            <th id="anima-${count}"><span>${animal.name}</span><img src="${animal.image_link}"></th>
    `;
    $("#photo").append(th);
    data[count] = {
        animal_type: animal.animal_type ,
        diet: animal.diet ,
        lifespan: animal.lifespan,
        length_min: animal.length_min,
        length_max: animal.length_max,
        weight_min: animal.weight_min,
        weight_max: animal.weight_max
    };
     count++;
        }else{
            const td = `
            <td id="anima-${count}"><span>${animal.name}</span><img src="${animal.image_link}"></td>
    `;
    $("#info").append(td);
    data[count] = {
        animal_type: animal.animal_type ,
        diet: animal.diet ,
        lifespan: animal.lifespan,
        length_min: animal.length_min,
        length_max: animal.length_max,
        weight_min: animal.weight_min,
        weight_max: animal.weight_max
    };
    count++;
        }

    }
    for(let i =  0; i<10; i++){
        $("#anima-" + i).click(()=>{
            alert("Animal type is:"+ data[i].animal_type +" ,diet: " + data[i].diet + " ,lifespan: " + data[i].lifespan + " ,minimum length: "+ data[i].length_min + " ,maximum length: " + data[i].length_max + " ,minimum weight: "+data[i].weight_min + " ,maximum weight: "+data[i].weight_max );
        });
        
    }
    

}
//display 8 animals
function display8Animals(animals) {
    $("#photo").empty();
    $("#info").empty();
    let count = 0;
    let data = new Array(8);
    for(const animal of animals) {
        if(count<4){
            let th = `
            <th id="anima-${count}"><span>${animal.name}</span><img src="${animal.image_link}"></th>
    `;
    // $("th").addClass("anima-"+count);
    $("#photo").append(th);
    data[count] = {
        animal_type: animal.animal_type ,
        diet: animal.diet ,
        lifespan: animal.lifespan,
        length_min: animal.length_min,
        length_max: animal.length_max,
        weight_min: animal.weight_min,
        weight_max: animal.weight_max
    };
     count++;
     
        }else{
            let td = `
            <td id="anima-${count}"><span>${animal.name}</span><img src="${animal.image_link}"></td>
    `;
    // $("th").addClass("anima-"+count);
    $("#info").append(td);
    data[count] = {
        animal_type: animal.animal_type ,
        diet: animal.diet ,
        lifespan: animal.lifespan,
        length_min: animal.length_min,
        length_max: animal.length_max,
        weight_min: animal.weight_min,
        weight_max: animal.weight_max
    };
    count++;
  
        }
    }
    for(let i =  0; i<8; i++){
        $("#anima-" + i).click(()=>{
            alert("Animal type is:"+ data[i].animal_type +" ,diet: " + data[i].diet + " ,lifespan: " + data[i].lifespan + " ,minimum length: "+ data[i].length_min + " ,maximum length: " + data[i].length_max + " ,minimum weight: "+data[i].weight_min + " ,maximum weight: "+data[i].weight_max );
        });
        
    }
}
//get views function
function getViews(name){
    
     return $.ajax({
        type: 'GET',
        data: views,
        url: "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/"+name+"/daily/"+fromdate+"/"+today
    });
}


