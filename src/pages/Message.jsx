import '../assets/css/Message.css';
import React, { useRef, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import v1 from '../assets/v1.jpeg'
import v2 from '../assets/v2.jpeg'
import v3 from '../assets/v3.jpeg'
import SendIcon from '@mui/icons-material/Send';

function Message() {
  const messageGlobalRef = useRef();

  useEffect(() => {
    // Scroll to the bottom when component mounts
    messageGlobalRef.current.scrollTop = messageGlobalRef.current.scrollHeight;
  }, []);
  const users = [
    {id : 1, message : "kez eh" , image: v1},
    {id : 2, message : "Oui, ça va bien, merci. Je suis ravi que tu sois intéressé par mon annonce." , image: v2},
    {id : 3, message : "manakalo ve ?" , image: v3},
  ]
  const messages = [
    { id: 1, id_vendeur: 1, id_client: 2, id_envoyeur: 1, date_envoye: '2024-01-12', message: 'Bonjour ! Comment ça va ?', id_annonce: 1 },
    { id: 2, id_vendeur: 1, id_client: 2, id_envoyeur: 2, date_envoye: '2024-01-12', message: 'Salut ! Ça va bien, merci.', id_annonce: 1 },
    { id: 3, id_vendeur: 1, id_client: 2, id_envoyeur: 1, date_envoye: '2024-01-12', message: 'Je suis intéressé par votre annonce.', id_annonce: 1 },
    { id: 4, id_vendeur: 1, id_client: 2, id_envoyeur: 2, date_envoye: '2024-01-12', message: 'Parfait ! Discutons des détails.', id_annonce: 1 },
    { id: 5, id_vendeur: 1, id_client: 2, id_envoyeur: 1, date_envoye: '2024-01-12', message: 'Salut ! Comment ça va ? J\'espère que ta journée se déroule bien. J\'ai vu ton annonce et je suis vraiment intéressé. Peux-tu me donner plus de détails ?', id_annonce: 1 },
    { id: 6, id_vendeur: 1, id_client: 2, id_envoyeur: 2, date_envoye: '2024-01-12', message: 'Bonjour !  Bien sûr, je peux te fournir plus de détails. Quels aspects spécifiques aimerais-tu connaître ?', id_annonce: 1 },
    { id: 7, id_vendeur: 1, id_client: 2, id_envoyeur: 1, date_envoye: '2024-01-12', message: 'Merci pour ta réponse rapide ! Je voudrais en savoir plus sur l\'état général de l\'article et si tu es ouvert à la négociation du prix.', id_annonce: 1 },
    { id: 8, id_vendeur: 1, id_client: 2, id_envoyeur: 2, date_envoye: '2024-01-12', message: 'Absolument ! L\'article est en excellent état, presque neuf. Pour ce qui est du prix, je suis ouvert à la discussion. Nous pouvons trouver un arrangement qui convienne à nous deux. Quel est ton budget ?', id_annonce: 1 },
    { id: 1, id_vendeur: 1, id_client: 2, id_envoyeur: 1, date_envoye: '2024-01-12', message: 'Bonjour ! Comment ça va ?', id_annonce: 1 },
    { id: 2, id_vendeur: 1, id_client: 2, id_envoyeur: 2, date_envoye: '2024-01-12', message: 'Salut ! Ça va bien, merci.', id_annonce: 1 },
    { id: 3, id_vendeur: 1, id_client: 2, id_envoyeur: 1, date_envoye: '2024-01-12', message: 'Je suis intéressé par votre annonce.', id_annonce: 1 },
    { id: 4, id_vendeur: 1, id_client: 2, id_envoyeur: 2, date_envoye: '2024-01-12', message: 'Parfait ! Discutons des détails.', id_annonce: 1 },
    { id: 5, id_vendeur: 1, id_client: 2, id_envoyeur: 1, date_envoye: '2024-01-12', message: 'Salut ! Comment ça va ? J\'espère que ta journée se déroule bien. J\'ai vu ton annonce et je suis vraiment intéressé. Peux-tu me donner plus de détails ?', id_annonce: 1 },
  ];
  return (
    <div className="message-container">
      <div className="left">
        <div className="message-head">
          <p>Discussions</p>
        </div>
        <List sx={{ bgcolor: 'background.paper' }}>
          {users.map((user) => (
            <ListItem key={user.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="User" src={user.image} sx={{height:"70px",width:"70px"}} />
              </ListItemAvatar>
              <ListItemText
              sx={{ marginLeft: '10px'}}
              primary={
                <React.Fragment>
                  <Typography sx={{ fontSize:'13px' , color:'rgb(163 0 255)' }}>
                    Mercedes C63
                  </Typography>
                  <Typography sx={{ fontSize:'18px'}}>
                    Tiavina Ramaroson 
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      width: '90%',
                      fontSize: '13px',
                      color:'#b4eb4b4'
                    }}
                    color="text.primary"
                  >
                    {user.message}
                  </Typography>
                </React.Fragment>
              }
              />
            </ListItem>
          ))}
        </List>
      </div>

      <div className="right">
        <div className="destination">
          <p><span>To:</span> Benja Ramaroson</p>
        </div>
        <div className="message-global" ref={messageGlobalRef}>
          <div className='espace' style={{ height: '50px' }}></div>

          {messages.map((message) => (
            <div key={message.id} className="message-item">
              {message.id_envoyeur === message.id_client ? (
                <div className="message-left">{message.message}</div>
              ) : (
                <div className="message-right">
                  <p></p>
                  <div>{message.message}</div>
                </div>
              )}
            </div>
          ))}

          <div className='espace' style={{ height: '300px' }}></div>
        </div>
        <div className="message-input">
          <div className="style-input">
          <input type="text" placeholder="Type your message" />
          <SendIcon sx={{ fontSize: 30 , marginLeft:"1%"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
