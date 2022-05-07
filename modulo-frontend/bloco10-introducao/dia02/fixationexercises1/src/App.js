import Image from './Image';

/* Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada. */

const staringCat = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
const alt = 'Cute cat staring'

function App() {
  return (<div>
    <Image source={ staringCat } alternativeText={ alt } />
    </div>);
}

export default App;
