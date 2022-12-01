import MakeAPayment from './components/MakeAPayment';
import PaymentInfo from './components/PaymentInfo';
import './styles/App.css';
import './styles/Responsive.css';

function App() {
  return (
    <main id='app' className="app">
      <MakeAPayment />
      <PaymentInfo />
    </main>
  );
}

export default App;
