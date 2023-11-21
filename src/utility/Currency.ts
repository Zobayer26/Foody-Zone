
const currency_formatter=new Intl.NumberFormat(undefined,{
    currency:"USD",style:"currency" })
 export const Currency=(number:number)=>{
     return currency_formatter.format(number)
     
 }