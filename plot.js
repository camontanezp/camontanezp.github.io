function gaussianRand() {
    var rand = 0;
    for (var i = 0; i < 6; i += 1) {
        rand += Math.random();
    }
    return (rand / 6) - 0.5;
}
var X = [],
    Y = [],
    n = 1000,
    i;

for (i = 0; i < n; i += 1) {
    X.push(gaussianRand());
    Y.push(gaussianRand());
}

var data = [{
    type: "scattergl",
    mode: "markers",
    marker: {
        color: '#785964',
        line: {
            width: 1,
            color: '#82A7A6'
        }
    },
    x: X,
    y: Y
}]

var config = {responsive: true}

Plotly.newPlot('plot', data)