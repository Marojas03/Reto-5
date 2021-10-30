package com.ciclo3.reto4.service;

import com.ciclo3.reto4.model.Reservation;
import com.ciclo3.reto4.model.custom.CountClient;
import com.ciclo3.reto4.model.custom.DescriptionAmount;
import com.ciclo3.reto4.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * @author Miguel Rojas
 */

/**
 * Clase principal ReservationService marcada como @Service con las anotaciones de Spring
 */

@Service
public class ReservationService {

    /**
     * Instancia de la interface ReservationRepository
     */
    @Autowired
    private ReservationRepository reservationRepository;

    /**
     * Metodo GET de una lista de Reservation
     * @return reservationRepository
     */
    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    /**
     * Metodo GET Resrvation que filtra por id, recibiendo dicho parametro
     * @param id
     * @return reservationRepository.getReservation(id)
     */

    public Optional<Reservation> getReservation(int id) {
        return  reservationRepository.getReservation(id);
    }

    /**
     * Metodo para guardar datos que recibe la clase Reservation y los mete en la variable p
     * @param p
     * @return reservationRepository.save(p)
     */

    public Reservation save(Reservation p){
        if(p.getIdReservation() == null){
            return reservationRepository.save(p);
        }else{
            Optional<Reservation> reservationOptional = reservationRepository.getReservation(p.getIdReservation());
            if(reservationOptional.isEmpty()){
                return reservationRepository.save(p);
            }else{
                return p;
            }
        }
    }

    /**
     * Metodo para actualizar datos de la clase Reservation y los mete en la variable r
     * @param r
     * @return reservationRepository.save(g.get())
     */

    public Reservation update(Reservation r){
        if(r.getIdReservation()!=null){
            Optional<Reservation>g=reservationRepository.getReservation(r.getIdReservation());
            if(!g.isEmpty()){
                if(r.getStartDate()!=null){
                    g.get().setStartDate(r.getStartDate());
                }
                if(r.getDevolutionDate() !=null){
                    g.get().setDevolutionDate(r.getDevolutionDate());
                }
                if(r.getStatus() != null){
                    g.get().setStatus(r.getStatus());
                }
                if(r.getScore() !=null){
                    g.get().setScore(r.getScore());
                }
                return reservationRepository.save(g.get());
            }
        }
        return r;
    }

    /**
     * Metodo booleano que borra los registros de la clase Reservation, recibiendo el parametro id
     * @param id
     * @return true o false
     */

    public boolean deleteReservation(int id){
        Optional<Reservation> c = getReservation(id);
        if(!c.isEmpty()){
            reservationRepository.delete((c.get()));
            return true;
        }
        return false;
    }

    /**
     * Método para llamar los clientes que mas dinero han dado
     * @return reservationRepository.getTopClients()
     */

    public List<CountClient> getTopClients(){
        return reservationRepository.getTopClients();
    }

    /**
     * Método para saber el status de la reservación del cliente
     * @return descAmount
     */

    public DescriptionAmount getStatusReport(){
        List<Reservation> completed = reservationRepository.getClientsByDescription("completed");
        List<Reservation> cancelled = reservationRepository.getClientsByDescription("cancelled");

        DescriptionAmount descAmount = new DescriptionAmount(completed.size(), cancelled.size());
        return descAmount;
    }

    /**
     * Método para saber los periodos de reservación de los clientes
     * @param d1
     * @param d2
     * @return dateOne, dateTwo
     */

    public List<Reservation> getReservationsPeriod(String d1, String d2){
        //yyyy-MM-dd
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd");
        Date dateOne = new Date();
        Date dateTwo = new Date();
        try {
            dateOne = parser.parse(d1);
            dateTwo = parser.parse(d2);
        }catch (ParseException e){
            e.printStackTrace();
        }
        if(dateOne.before(dateTwo)){
            return reservationRepository.getReservationPeriod(dateOne, dateTwo);
        }else {
            return new ArrayList<>();
        }
    }

}//Fin de la clase
