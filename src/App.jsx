import { Home, Projects, Skills, About, Contact, Footer } from "./sections";
function App() {
  return (
    <div className="p-5">
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
