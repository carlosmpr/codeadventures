import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const mainData = [
  {
    title: "BOOK CHRONICLES",
    decorator: "The adventure begins with",
    description:
      "Welcome to Book Chronicles a revolutionary way of storytelling that takes traditional literature to a whole new level.Book Chronicles offers an interactive experience that allows readers to actively participate in the story.",
    riveAnimation: "https://rive.app/s/mCpvVHGeHEans7HfxbVwPw/embed",
  },

  {
    title: "READERS",
    decorator: "Engage your",
    description:
      "This innovative approach to storytelling brings the story to life, making the reader an active participant rather than just a passive observer.By engaging readers in this way, Book Chronicles offers a unique and captivating way to experience literature. ",
    riveAnimation: "https://rive.app/s/bT91CYMeVESL0mq_FthujA/embed",
    reverse:true
  },

  {
    title: "Your own unique stories.",
    decorator: "Build and create.",
    description:
      "With its interactive format, readers have the power to shape the narrative, making it a truly personalized experience. By selecting different paths and making choices throughout the story, readers can determine the outcome of the plot and create their own unique version of the story.",
    riveAnimation: "https://rive.app/s/q78zCqbMMUmZlAsRh2-GOQ/embed",
    
  },
];
function App() {
  return (
    <div>
      <Navbar />
     {mainData.map(item => <Hero key={item.riveAnimation} {...item}/>)}
     <div style={{height:"500px"}}>
      <div className="w-full flex flex-col items-center mb-20">
     <h1 className='font-black text-6xl text-center'>Play Demo </h1>
     <p className="text-center w-1/2">Thank you for taking the time to try out this demo, and we hope you enjoy this preview of what's to come! Please note that this is a work in progress</p>

     <div className="border p-4 mt-10 left-0  z-10">
      <h2 className="text-lg  text-center font-bold mb-2">Game Controls</h2>
      <div className="flex flex-col  justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 ">
          W
        </button>
        <div className="flex  justify-between gap-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
            A
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          S
        </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 mb-2 md:mb-0">
            D
          </button>
        </div>
       
      </div>
    </div>
     </div>
     <spline-viewer url="https://prod.spline.design/TL5oKO6KESBOldkC/scene.splinecode"></spline-viewer>
     </div>
    </div>
  );
}

export default App;
//