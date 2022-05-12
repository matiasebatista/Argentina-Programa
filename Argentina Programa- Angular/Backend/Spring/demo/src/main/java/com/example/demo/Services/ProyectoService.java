/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.IProyectoRepository;
import com.example.demo.models.Proyecto;
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
    
     public Proyecto findProyecto(Long id){
        Proyecto info = iProyectoRepository.findById(id).orElse(null);
        return info;
    }
     
     public Proyecto editProyecto(Long id,Proyecto info){
        try{
            info.setId(id);
            iProyectoRepository.save(info);
            return info;
        }catch(Exception e){
            return null;
        }
    }
     
      public String deleteProyecto(Long id){
        try{
            iProyectoRepository.deleteById(id);
            return "Esta información fue borrada";
        }catch(Exception e){
            return "No se pudo borrar la información";
        }     
    }
    
}
