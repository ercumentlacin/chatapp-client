import { useChatContext } from '../../context/ChatContext';
import ScrollableFeed from 'react-scrollable-feed';
import ChatItem from '../ChatItem';
import styles from './styles.module.css';

function ChatList() {
  const { messages } = useChatContext();
  console.log(messages);

  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
