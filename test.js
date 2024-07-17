// let content=document.createElement("h1");
// content.innerHTML="hello world from javascript";

// let root=document.getElementById("root");

// root.append(content);

//React code

// const heading=React.createElement("h1",{},"Hello wprld from React js");

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/* <div id=parent>
  <div>
    <h1>

    </h1>
  </div>
</div> 

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    // "I am Mahdev",
    [
      React.createElement("h1", { id: "head" }, "I am h1 tag"),//array of data
      React.createElement("h2", { id: "head2" }, "I am  h2 tag🚀")
    ]
  )
);


// const heading = React.createElement(
//   "h1",
//   { id: "first",xyz:"abc"},
//   "Hello world from React js"
// );

// console.log(heading);//object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);//react Element

const content=React.createElement("h1",{},"Basic react concepts");

const header=ReactDOM.createRoot(document.getElementById("header"));

header.render(content);//pass content in header to display the content
