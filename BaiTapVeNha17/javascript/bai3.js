const n = window.prompt("Nhập n:");
let S = 0;

for(let i=1;i<=n;i++)
{
    S+=i*(i+1);
}
console.log(S);