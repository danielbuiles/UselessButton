function desapareser()
{
  document.getElementById("anuncioss").style.visibility="hidden"
}

function getPassword(){
  const pass=document.getElementById("text_password").value;
  if(pass == "contraseña" || pass =="CONTRASEÑA"){
    window.location.replace("https://github.com/danielbuiles");
  }
}