// Import of all components
import Section from "./Section/Section";
import Bar from "./Bar/Bar";
import Footer from "./Footer/Footer";
import Information from "./Information/Information";

// Creation of the whole app
const App = () => (
  <Section>
    <Bar />
    <Information />
    <Footer />
  </Section>
);

// Component export
export default App;