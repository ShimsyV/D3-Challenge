// @TODO: YOUR CODE HERE!

// Create the svg area
// create the responsive function for the page

function makeResponsive() {

    var svgArea = d3.select("#scatter").select("svg");

    // clear svg if not empty
    if (!svgArea.empty()) {
        svgArea.remove();
    }

    svgWidth = document.getElementById('scatter').clientWidth;
    svgHeight = svgWidth / 1.45;

    var border = 1;
    var bordercolor = 'black';

    // Append SVG element
    var svg = d3
        .select("#scatter")
        .append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth)
        .attr("border", border)

}