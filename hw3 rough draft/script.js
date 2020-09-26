function testfunction() {
d3.select('#aBarChart').selectAll('rect')
.attr("width",500)
}

function testfunction2() {
    d3.select('#aBarChart').selectAll('rect')
    .attr("width",50)
    .transition()
    .duration(5000)
    .attr("width",200)
    .style("opacity", .5)
    .style("fill","blue")
    
    }