import './styles/App.css';
import Form from './components/Form';
import PaymentHistory from './components/PaymentHistory';
import ExtraPayments from './components/ExtraPayments';

function App() {
  return (
    <main className="app">
      <Form />
      <PaymentHistory />
      <ExtraPayments />
    </main>
  );
}

export default App;
