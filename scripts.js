

const url ="https://ipgeolocation.abstractapi.com/v1/?api_key=e826a2cd7f754d4e99d437a79a1b2d2b";


fetch(url).then( Response => {return Response.json()}).then(data=>{
    document.getElementById("vpn").innerHTML = data.security.is_vpn;
    document.getElementById("pic").src = data.flag.png;
  document.getElementById("ip").innerHTML = data.ip_address;
    document.getElementById("country").innerHTML = data.country;
  document.getElementById("city").innerHTML = data.city;
    document.getElementById("region").innerHTML = data.region;
  document.getElementById("continent").innerHTML = data.continent;
  document.getElementById("isp").innerHTML = data.connection.isp_name;
  document.getElementById("aut").innerHTML = data.connection.autonomous_system_number;
  document.getElementById("map").src = "https://www.bing.com/maps/embed?h=200&w=400&cp="+data.latitude+"~"+ data.longitude +"&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8";
  
})
function getdata(data){
        data.forEach(element => {         
        });
}