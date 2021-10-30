package com.ciclo3.reto4.repository;

import com.ciclo3.reto4.model.Client;
import com.ciclo3.reto4.model.Reservation;
import com.ciclo3.reto4.model.custom.CountClient;
import com.ciclo3.reto4.repository.crud.ReservationCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {

    @Autowired
    private ReservationCrudRepository reservationCrudRepository;

    public List<Reservation> getAll() {
        return  (List<Reservation>) reservationCrudRepository.findAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationCrudRepository.findById(id);
    }

    public Reservation save(Reservation r) {
        return reservationCrudRepository.save(r);
    }

    public void delete(Reservation r){
        reservationCrudRepository.delete(r);
    }

    public List<Reservation> getClientsByDescription(String description){
        return reservationCrudRepository.findAllByStatus(description);
    }

    public List<Reservation> getReservationPeriod(Date dateOne, Date dateTwo){
        return reservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(dateOne, dateTwo);
    }

    public List<CountClient> getTopClients(){
        List<CountClient> res = new ArrayList<>();

        List<Object[]> report = reservationCrudRepository.countTotalReservationsByClients();
        for(int i = 0; i < report.size(); i ++){
            Client client = (Client) report.get(i)[0];
            Long cantidad = (Long) report.get(i)[1];
            CountClient countClient = new CountClient(cantidad, client);
            res.add(countClient);
        }
        return res;
    }
}
