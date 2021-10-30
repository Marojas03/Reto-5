package com.ciclo3.reto4.repository.crud;

import com.ciclo3.reto4.model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageCrudRepository extends CrudRepository<Message, Integer> {
}
