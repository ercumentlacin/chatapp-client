import { useChatContext } from './context/ChatContext';
import Container from './components/Container';
import './App.css';

function App() {
  const { messages } = useChatContext();
  console.log(messages);
  return (
    <div className='App'>
      <Container />
    </div>
  );
}

export default App;
