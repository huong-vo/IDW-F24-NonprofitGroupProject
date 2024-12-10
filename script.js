const donatename = document.getElementsByClassName('name');
// console.log(donatename);
const donatebutton = document.getElementById("donatebutton");
// console.log(donatebutton);
donatebutton.addEventListener('click', (e) =>  {
    for (let i = 0; i < donatename.length; i++) {
        console.log(donatename[i].value);
        
    }

    // console.log("clicking donate button");
})