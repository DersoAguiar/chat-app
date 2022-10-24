import React, {useState, useEffect, useRef} from 'react';
import Message from './Message';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';

const style = {
    main: `flex flex-col p-[10px] relative`
}

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages)
        });

        return () => unsub();
    }, [])

  return (
    <>
        <main className={style.main}>
            {messages && messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
            {/* Chat Message Component */}
            
        </main>
        {/* Send Message Component */}
        <SendMessage scroll={scroll}/>
        <span ref={scroll}></span>
    </>
  )
}

export default Chat