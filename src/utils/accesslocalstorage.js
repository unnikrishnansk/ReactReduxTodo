

// to load data from localstorage

function loaddata(key) {
   try{
    let temp = localStorage.getItem(key);
    temp = JSON.parse(temp);
    return temp;
    } catch(err){
    return undefined;
                }
   } 


// to add data to localstorage


function savedata(key,data){
    localStorage.setItem(key,JSON.stringify(data));
}

export {loaddata , savedata};