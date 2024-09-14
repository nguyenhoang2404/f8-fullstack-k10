const kWh = window.prompt("Nhập số kWh sử dụng:");
let tongTien = 0;
if(kWh<=50)
    tongTien = kWh * 1.687;
else if(kWh<=100)
    tongTien = kWh * 1.734;
else if(kWh<=200)
    tongTien = kWh * 2.014;
else if(kWh<=300)
    tongTien = kWh * 2.536;
else if(kWh<=400)
    tongTien = kWh * 2.834;
else if(kWh>400)
    tongTien = kWh * 2.927;
console.log(tongTien);