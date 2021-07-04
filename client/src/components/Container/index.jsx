import ChatList from '../ChatList';
import ChatForm from '../ChatForm';
import { init, subscribeChat, subscribeInitialMessages } from '../../socketApi';

import styles from './styles.module.css';
import { useEffect } from 'react';
import { useChatContext } from '../../context/ChatContext';

function Container() {
  const { setMessages } = useChatContext();

  useEffect(() => {
    init();

    subscribeInitialMessages((messages) => {
      setMessages(messages);
    });

    subscribeChat((message) => {
      setMessages((prev) => [...prev, { message }]);
    });
  }, [setMessages]);

  return (
    <div className={styles.container}>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
