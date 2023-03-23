import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const mainData = [
  {
    title: "BOOK CHRONICLES",
    decorator: "The adventure begins with",
    description:
      "Welcome to Code Chronicles, where we document our journey in the world of coding. Follow along as we explore the latest technologies, tackle challenging problems, and share our insights with the community. Whether you're a seasoned developer or just starting out, there's something for everyone here.",
    riveAnimation: "https://rive.app/s/mCpvVHGeHEans7HfxbVwPw/embed",
  },

  {
    title: "BOOK CHRONICLES",
    decorator: "The adventure begins with",
    description:
      "Welcome to Code Chronicles, where we document our journey in the world of coding. Follow along as we explore the latest technologies, tackle challenging problems, and share our insights with the community. Whether you're a seasoned developer or just starting out, there's something for everyone here.",
    riveAnimation: "https://rive.app/s/bT91CYMeVESL0mq_FthujA/embed",
    reverse:true
  },

  {
    title: "BOOK Chronicles",
    decorator: "The adventure begins with",
    description:
      "Welcome to Code Chronicles, where we document our journey in the world of coding. Follow along as we explore the latest technologies, tackle challenging problems, and share our insights with the community. Whether you're a seasoned developer or just starting out, there's something for everyone here.",
    riveAnimation: "https://rive.app/s/q78zCqbMMUmZlAsRh2-GOQ/embed",
    
  },
];
function App() {
  return (
    <div>
      <Navbar />
     {mainData.map(item => <Hero key={item.riveAnimation} {...item}/>)}
    </div>
  );
}

export default App;
