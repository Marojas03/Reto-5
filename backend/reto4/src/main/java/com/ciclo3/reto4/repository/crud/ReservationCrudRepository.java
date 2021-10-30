package com.ciclo3.reto4.repository.crud;

import com.ciclo3.reto4.model.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {

    //JQPL
    @Query("select c.client, COUNT(c.client) from Reservation AS c group by c.client order by COUNT(c.client) desc")
    public List<Object[]> countTotalReservationsByClients();

    //QUERY METHODS !!
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date dateOne, Date dateTwo);

    public List<Reservation> findAllByStatus(String descriptionAAA);

    // PAPELERIA = RESERVATION;
    // CATEGORY == CLIENT;
}
