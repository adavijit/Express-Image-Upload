document.getElementById('form').onsubmit = function(event){
    event.preventDefault() 
    var xhttp = new XMLHttpRequest(); 

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { 
        document.getElementById("status").innerHTML = 'sent'+this.responseText+ xhttp.status;
      }else{ 
        document.getElementById("status").innerHTML = xhttp.status ;
      }
    }

    xhttp.open("POST", "upload")
    var formData = new FormData()
    formData.append('name', document.getElementById('name').value)    
    formData.append('avatar', document.getElementById('avatar').files[0]) 
    console.log(formData);
    xhttp.send(formData)
}