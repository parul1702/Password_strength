function Strength(password)
{
  let  i=0;
  if(password.length>6)
  {
    i++;
  }
if(password.length>=10)
{
  i++;
}
  if(/[A-Z]/.test(password))
  {
i++;
  }
if(/[0-9].test(password))
   {
i++;
}
if(/[A-Za-z0-8]/.test(password))
{
i++;
}
  return i;
}
let container=document.querySelector(".container");
document.addEventListener("keyup",function(e))
{
let password =document.querySelector('#YourPassword");
let show=document.querySelector(".show");
  show.onclick=function()
    {
if (password.type==="password")
{
password.setAttribute("type","text");
  show.classList.add("hide");
}
else
{
password.setAttribute('type","password"):
show.classList.remove("hide");
}
    };
  
