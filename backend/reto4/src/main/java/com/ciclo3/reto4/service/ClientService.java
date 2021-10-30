package com.ciclo3.reto4.service;

import com.ciclo3.reto4.model.Client;
import com.ciclo3.reto4.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll() {
        return clientRepository.getAll();
    }

    public Optional<Client> getClient(int id) {
        return clientRepository.getClient(id);
    }

    public Client save(Client p) {
        if (p.getIdClient() == null) {
            return clientRepository.save(p);
        } else {
            Optional<Client> clientOptional = clientRepository.getClient(p.getIdClient());
            if (clientOptional.isEmpty()) {
                return clientRepository.save(p);
            } else {
                return p;
            }
        }
    }

    public Client update(Client u){
        if(u.getIdClient()!=null){
            Optional<Client>g=clientRepository.getClient(u.getIdClient());
            if(!g.isEmpty()){
                if(u.getEmail()!=null){
                    g.get().setName(u.getEmail());
                }
                if(u.getPassword() !=null){
                    g.get().setPassword(u.getPassword());
                }
                if(u.getName() !=null){
                    g.get().setName(u.getName());
                }
                if(u.getAge() !=null){
                    g.get().setAge(u.getAge());
                }
                return clientRepository.save(g.get());
            }
        }
        return u;
    }

    public boolean deleteClient(int id){
        Optional<Client> c = getClient(id);
        if(!c.isEmpty()){
            clientRepository.delete((c.get()));
            return true;
        }
        return false;
    }
}
