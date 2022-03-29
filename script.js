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
  $.each(data.cases_time_series,function(id,obj){
    date.push(obj.date)
    confirmed.push(obj.dailyconfirmed)
    recovered.push(obj.dailyrecovered)
    deaths.push((obj.dailydeaths)
  })
  date.shift()
  confirmed.shift()
  recovered.shift()
  deaths.shift()
  
  

  daily_recovered=data.cases_time_series[0].dailyrecovered
  daily_deaths=data.cases_time_series[0].dailydeaths
  daily_confirmed=data.cases_time_series[0].dailyconfirmed
  
  
  $("#confirmed").append(daily_confirmed)
  $("#recovered").append(daily_recovered
  $("#deaths").append(daily_deaths)
    
  var mychart= document.getelementById("myChart").getContext("2d")
  
  var chart=new chart(myChart,{
    type:'line',
    data:{
        labels:date
        datasets:[
           {
                label:"Confirmed Cases"
                data:daily_confirmed
                backgrounColor:#ffff00
                minBarlength:100
           }
           {
                label:"Recovered"
                data:daily_recovered
                backgrounColor:#666600
                minBarlength:100
           }
           {
                label:"Deceased"
                data:daily_deaths
                backgrounColor:#ff0000
                minBarlength:100
           }
         
           
           
      
    
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
                  
