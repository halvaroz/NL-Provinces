function createD3(){

let dataRegions = ['Zélande','Flevoland','Drenthe','Groningue','Frise','Limburg','Overjissel','Utrecht','Gueldre','Brabant-Septentrional','Hollande-Septentrionale','Hollande-Méridionale']

let dataset = [
 {"name" : 'Zélande' , "population" : 381},
 {"name" : 'Flevoland' , "population" : 403},
 {"name" : 'Drenthe' , "population" :488},
 {"name" : 'Groningue' , "population" : 582},
 {"name" : 'Frise' , "population" : 646},
 {"name" : 'Limburg' , "population" : 1115},
 {"name" : 'Overjissel' , "population" : 1142},
 {"name" : 'Utrecht' , "population" : 1268},
 {"name" : 'Gueldre' , "population" : 2031},
 {"name" : 'Brabant-Septentrional' , "population" : 2495},
 {"name" : 'Hollande-Septentrionale' , "population" : 2775},
 {"name" : 'Hollande-Méridionale', "population" : 3607}]


for (let i=0; i<dataRegions.length; i++){
	dataset[i].color = colors[regionsOrdered.indexOf(dataRegions[i])];
}

const ws = '100%'
const hs = '100%'
const vb = '0 0 600 200'

const svg = d3.select('.data')
       .append('svg')
       .attr('width',ws)
       .attr('height',hs)
       .attr('viewBox', vb)

const w = 600
const h = 200

svg.selectAll('rect')
.data(dataset)
.enter()
.append('rect')
.attr("x", (d, i) => 10 + i * 50)
       .attr("y", (d, i) => h - 0.045 * d.population)
       .attr("width", 25)
       .attr("height", (d, i) => d.population * 0.045)
       .attr("fill", (d, i) => d.color)
       .attr("class", "bar")
       .append('title')
       .text((d)=>d.name)

svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d.population)
       .attr("x", (d, i) => 10 + i * 50)
       .attr("y", (d, i) => h - (d.population * 0.045 + 0.045)-4.5) 
}