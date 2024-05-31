//access to the form values
document.querySelector('#generate-names').addEventListener('submit',loadNames)

//read the values and generate URL
function loadNames(e){
    e.preventDefault();

    //read the values from the form
    const country=document.querySelector('#country').value,
      genre=document.querySelector('#genre').value

    console.log(country);  
    console.log(genre);  
}