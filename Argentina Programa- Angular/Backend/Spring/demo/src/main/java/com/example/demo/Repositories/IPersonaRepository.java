/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.demo.Repositories;

import com.example.demo.models.Persona;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author matia
 */
@Repository
public interface IPersonaRepository extends CrudRepository<Persona,Long> {
    
    @Query(value = "SELECT acercade FROM persona WHERE id = :id",nativeQuery = true)
    public String findAcercadebyid (Long id);
    
}
