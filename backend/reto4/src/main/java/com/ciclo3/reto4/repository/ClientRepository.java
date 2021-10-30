package com.ciclo3.reto4.repository;

import com.ciclo3.reto4.model.Client;
import com.ciclo3.reto4.repository.crud.ClientCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ClientRepository {
    @Autowired
    private ClientCrudRepository clientCrudRepository;

    public List<Client> getAll() {
        return  (List<Client>) clientCrudRepository.findAll();
    }

    public Optional<Client> getClient(int id) {
        return clientCrudRepository.findById(id);
    }

    public Client save(Client u) {
        return clientCrudRepository.save(u);
    }

    public void delete(Client u){
        clientCrudRepository.delete(u);
    }
}
