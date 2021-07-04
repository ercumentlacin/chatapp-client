import { useState } from 'react';
import { useChatContext } from '../../context/ChatContext';
import { sendMessage } from '../../socketApi';
import styles from './styles.module.css';

function ChatForm() {
  const [message, setMessage] = useState('');
  const { setMessages } = useChatContext();

  const handleChangeMessage = ({ target }) => setMessage(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    setMessages((prev) => [...prev, { message, fromMe: true }]);
    sendMessage(message);

    setMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={handleChangeMessage}
        />
      </form>
    </div>
  );
}

export default ChatForm;
