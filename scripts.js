


const url ="https://ipgeolocation.abstractapi.com/v1/?api_key=e826a2cd7f754d4e99d437a79a1b2d2b";


fetch(url).then( Response => {return Response.json()}).then(data =>{

 



  document.getElementById("vpn").innerHTML = data.security.is_vpn;
  document.getElementById("pic").src = data.flag.png;
  document.getElementById("ip").innerHTML = data.ip_address;
  document.getElementById("country").innerHTML = data.country;
  document.getElementById("city").innerHTML = data.city;
  document.getElementById("region").innerHTML = data.region;
  document.getElementById("continent").innerHTML = data.continent;

})

function getdata(data){
        data.forEach(element => {
 
            
        });
}