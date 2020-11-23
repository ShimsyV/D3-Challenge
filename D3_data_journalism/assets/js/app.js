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
        .attr("border", border);

    var borderpath = svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("height", svgHeight)
        .attr("width", svgWidth)
        .style("stroke", bordercolor)
        .style("fill", "none")
        .style("stroke-width", border);

    var margin = {
        top: 50,
        bottom: 50,
        right: 50,
        left: 50
    };

    var chartHeight = svgHeight - margin.top - margin.bottom;
    var chartWidth = svgWidth - margin.left - margin.right;

    // Append group element
    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Reading the data via d3
    d3.csv("assets/data/data.csv").then(function (healthData) {

        healthData.forEach(function (data) {

            data.healthcare = +data.healthcare;
            data.poverty = +data.poverty;

            console.log(data)
        });

        // Creating linear scale for X and Y

        var xScale = d3.scaleLinear()
            .domain([d3.min(healthData, d => d.poverty) / 1.35, d3.max(healthData, d => d.poverty) * 1.15])
            .range([0, chartWidth]);

        var yScale = d3.scaleLinear()
            .domain([d3.min(healthData, d => d.healthcare) / 1.35, d3.max(healthData, d => d.healthcare) * 1.15])
            .range([chartHeight, 0]);

        // Create the X and Y axes
        var xAxis = d3.axisBottom(xScale).ticks(6);
        var yAxis = d3.axisLeft(yScale).ticks(6);

        // append axes
        chartGroup.append("g")
            .attr("transform", `translate(0, ${chartHeight})`)
            .call(xAxis);

        chartGroup.append("g")
            .call(yAxis);



    })

}