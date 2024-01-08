import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent title = "Ciao Mondo" />
      <ImageComponent src = "https://www.istockphoto.com/it/foto/italia-toscana-maremma-grosseto-spiaggia-detta-delle-capanne-di-principina-a-mare-gm1424552027-469244224?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fmongolfiera%2F&utm_term=mongolfiera" alt = "mongolfiera" />
    </div>
  );
}

export default App;
