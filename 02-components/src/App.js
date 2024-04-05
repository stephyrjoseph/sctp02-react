function displayHeader(){
  return (<h1>About me</h1>);
}


function sayHello(){
  return "hello Everybody"
}

// what is a component in React
//1. is a function
//2.First alphabet of the function is a upper case
//3.return JSX
//
//Functions can receive paameters
//But the corresponding concept in 
//React component is props

//props is an object
// the props parameter will contain all the 
//attributes assigned to the components instance

function Alert(props){
  console.log(props.msg);
 return(<div style={{
  backgroundColor:props.bgcolor,
  color:"white",
  padding:"10px",
  marginTop:"50px",
  marginBottom:"5px"
 }}>
 {props.msg}
 </div>) 
}

function App() {
  return (
    <>
    <h1>Hello World</h1>
    {displayHeader()}
    {sayHello()}
    <Alert msg="BE careful" bgcolor="green"/>
    <Alert msg="stephy" bgcolor="blue"/>
    </>
  );
}

export default App;
