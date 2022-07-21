
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.IProyectoRepository;
import com.example.demo.models.Proyecto;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author matia
 */
@Service
public class ProyectoService {
    @Autowired
    IProyectoRepository iProyectoRepository;

    public void saveProyecto(Proyecto info){
        iProyectoRepository.save(info);
    }
    
     public List<Proyecto> findProyecto(Long id){
        return iProyectoRepository.findByPersona(id);
    }
     
     public void editProyecto(Long id,Proyecto info){
       iProyectoRepository.save(info);
    }
     
      public void deleteProyecto(Long id){
          iProyectoRepository.deleteById(id);    
    }
    
}
