import React from "react";
import ReactDOM from "react-dom/client"

//React Element 

//const heading=React.createElement("h1",{id:"heading"},"Namaste React");


const heading= React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Iam h5 tag"),
    React.createElement("h2",{},"Iam h2 tag")]),React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Iam h1 tag"),
        React.createElement("h2",{},"Iam h2 tag")])])


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)


// const Jsxheading=()=>(
// <h1 className="use" tabIndex='5'>hello vishnu how </h1>

// )


// const HeadingComponent=()=>(
//     <div>
//         <h1>Hi vishnu You Created Functional component</h1>
//         <h2>Hi vishnu You Created Functional component</h2>
//         <Jsxheading/>
//     </div>
// )

// const root=ReactDOM.createRoot(document.getElementById("root"));



// root.render(<HeadingComponent/>);
