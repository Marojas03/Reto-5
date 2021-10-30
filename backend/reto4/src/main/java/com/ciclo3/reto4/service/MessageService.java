package com.ciclo3.reto4.service;

import com.ciclo3.reto4.model.Message;
import com.ciclo3.reto4.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll() {
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage(int id) {
        return  messageRepository.getMessage(id);
    }

    public Message save(Message p){
        if(p.getIdMessage() == null){
            return messageRepository.save(p);
        }else{
            Optional<Message> messageOptional = messageRepository.getMessage(p.getIdMessage());
            if(messageOptional.isEmpty()){
                return messageRepository.save(p);
            }else{
                return p;
            }
        }
    }

    public Message update(Message m){
        if(m.getIdMessage()!=null){
            Optional<Message>g=messageRepository.getMessage(m.getIdMessage());
            if(!g.isEmpty()){
                if(m.getMessageText()!=null){
                    g.get().setMessageText(m.getMessageText());
                }

                return messageRepository.save(g.get());
            }
        }
        return m;
    }

    public boolean deleteMessage(int id){
        Optional<Message> c = getMessage(id);
        if(!c.isEmpty()){
            messageRepository.delete((c.get()));
            return true;
        }
        return false;
    }
}
