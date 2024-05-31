

//access to the form values
document.querySelector("#generate-names").addEventListener("submit", loadNames);

//read the values and generate URL
function loadNames(e) {
  e.preventDefault();

  //read the values from the form
  const country = document.querySelector("#country").value,
    genre = document.querySelector("#genre").value;

  // generate the URL
  let url = "https://randomuser.me/";
  if(country!==''){
      url += "api/?nat=" + country+'/';
  }else{
    url += "api/?nat=gb"; //default to UK
  }
  if(genre !==''){
    url += (genre+'/')
  }else{
    url+='random/'
  }

  console.log(url);
  console.log(genre);
}
