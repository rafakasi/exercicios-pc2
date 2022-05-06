import Image from './Image';

const staringCat = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
const alt = 'Cute cat staring'

function App() {
  return (<div>
    <Image source={ staringCat } alternativeText={ alt } />
    </div>);
}

export default App;
