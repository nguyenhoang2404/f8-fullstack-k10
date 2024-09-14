let tongTien = 0;
let km = window.prompt("Nhập số km đi được:");
if(km<=1)   
    tongTien = 15000;
else if(km>1&&km<=5)    
    tongTien = 13500*km
else if(km>120) 
    tongTien = (11000*km) - (11000*km*10/100);  
else if(km>5)   
    tongTien = 11000*km;
console.log(tongTien);