/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.IAcercadeRepository;
import com.example.demo.models.Acercade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author matia
 */
@Service
public class AcercadeService {
    @Autowired
    IAcercadeRepository iAcercadeRepository;
    
    
    public void saveAcercade(Acercade inf){
        iAcercadeRepository.save(inf);
    }
    
     public Acercade findAcercade(Long id){
        Acercade info = iAcercadeRepository.findById(id).orElse(null);
        return info;
    }
     
     public Acercade editAcercade(Long id,Acercade inf){
        try{
            inf.setId(id);
            iAcercadeRepository.save(inf);
            return inf;
        }catch(Exception e){
            return null;
        }
    }
     
      public String deleteAcercade(Long id){
        try{
            iAcercadeRepository.deleteById(id);
            return "Esta información fue borrada";
        }catch(Exception e){
            return "No se pudo borrar la información";
        }     
    }
     
     
}
