import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import data from './data'
import './style.css'

export default function App() {
  const cards = data.map((item) => {
    return <Card key ={item.key} {...item}/> 
  })

  return (
    <>
      <Navbar />
      <section className = "section-container"> {cards}</section>
      <Footer />
    </> 
    
  );
}

