import './App.css'
import Home from './Pages/Home';
import LargeNavbar from './Shared/Navs/Desktop/LargeNavbar';
import TopLargeNavbar from './Shared/Navs/Desktop/TopLargeNavbar';
// import ModalButton from './components/Shared/Modals/ModalButton';

function App() {

  
  return (
    <div>
     {/* <ModalButton /> */}
     <TopLargeNavbar />
     <LargeNavbar />
     <Home />

    </div>
  );
}

export default App
