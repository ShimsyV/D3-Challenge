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

}