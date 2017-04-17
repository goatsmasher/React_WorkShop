// var React, ReactDOM;
// const myElement = React.createElement("div", null,
//                     React.createElement("h1", null, "Hello Coding Dojo!"),
//                     React.createElement("h3", null, "Things I need to do:"),
//                         React.createElement("ul", null,
//                             React.createElement("li", null, "Get a Job"),
//                             React.createElement("li", null, "Make Some Money")));

const tileArray = [
    {key: 1,backgroundColor: "gray", textColor: "tomato"},
    {key: 2,backgroundColor: "yellow", textColor: "teal"},
    {key: 3,backgroundColor: "black", textColor: "royalblue"},
    {key: 4,backgroundColor: "blue", textColor: "pink"},
];

function Tile(props) {
    const background = props.backgroundColor;
    const textColor = props.textColor;
    const key = props.key;
    const propsObj = {
        style : {
            backgroundColor: background,
            color: textColor,
            height: 200,
            width: 200,
            display: "inline-block",
            margin: 2
        },
        ident: key,
        children: `${textColor} on ${background}`
    };
    return  React.createElement("div", propsObj);
}

function AppComponent(props) {
    return React.createElement("div", null, props.tiles.map((tileData) => React.createElement(Tile, tileData)));
    // let id = 0;
    // var myTiles = props.tiles.map(({textColor, backgroundColor}, id) => {
    //     return React.createElement(Tile, {key: id++, backgroundColor: backgroundColor, textColor: textColor});
    // });
}


ReactDOM.render(
    React.createElement(AppComponent, {tiles: tileArray}), document.getElementById("app"));


