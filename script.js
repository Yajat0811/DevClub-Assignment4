console.log("Loaded script.js");
$(document).ready(function(){
var url="https://api.covid19india.org/data.json"

$.getJSON(url,function(data){
  console.log(data)
  var total_active,total_recovered,total_deaths,total_confirmed
  var dates=[]
  var confirmed=[]
  var recovered=[]
  var deaths=[]
  $.each(data.    ,function(id,obj){
    dates.push(obj.date)
    confirmed.push(obj.confirmed)
    recovered.push(obj.recovered)
    deaths.push((obj.deaths)
  })
  date.shift()
  confirmed.shift()
  recovered.shift()
  deaths.shift()
  
  
  toatl_active=data.
  toatl_recovered=data.
  total_deaths=data.
  total_confirmed=data.
  
  $("#active").append(total_active)
  $("#confirmed").append(total_confirmed)
  $("#recovered").append(total_recovered
  $("#deaths").append(total_deaths)
    
  var mychart= document.getelementById("myChart").getContext("2d")
  
  var chart=new chart(myChart,{
    type:'line',
    data:{
        labels:date
        datasets:[
           {
                label:"Confirmed Cases"
                data:confirmed
                backgrounColor:#ffff00
                minBarlength:100
           }
           {
                label:"Recovered"
                data:recovered
                backgrounColor:#666600
                minBarlength:100
           }
           {
                label:"Deceased"
                data:deaths
                backgrounColor:#ff0000
                minBarlength:100
           }
         
           
           
      
    
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
                  
