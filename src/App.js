import Form from './components/Form';
import PaymentHistory from './components/PaymentHistory';
import ExtraPayments from './components/ExtraPayments';
import './styles/App.css';
import './styles/Responsive.css';

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
