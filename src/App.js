import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
      <Navbar />
      <div className="w-full h-screen flex flex-col items-center text-white ">
        <h1 className="z-20 text-7xl  font-bold mt-20 " >Ready for your next Adventure?</h1>
        <h1 className="z-20 text-6xl  text-yellow-100  mt-2">Code Adventures </h1>
        <p className="z-20   mt-4 mb-4">Currently under development </p>
       <Button />
        <div className="w-full h-full absolute">
        <iframe src='https://my.spline.design/altarskycopy-851ffaede4f76a2f1b7b784869f37e60/' frameborder='0' width='100%' height='100%' title="scene"></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
