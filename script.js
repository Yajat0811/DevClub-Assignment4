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
    date.push(obj.date)
    confirmed.push(obj.confirmed)
    recovered.push(obj.recovered)
    deaths.push((obj.deaths)
  })
  
  
  
  toatl_active=data.
  toatl_recovered=data.
  total_deaths=data.
  total_confirmed=data.
  
    
  
  
  
  
  
  
  
  
  
  
  
  
                  
