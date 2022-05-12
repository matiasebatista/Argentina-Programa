/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.IEducaciónRepository;
import com.example.demo.models.Educación;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author matia
 */
@Service
public class EducaciónService {
   @Autowired
   IEducaciónRepository iEducaciónRepository;
    
   public void saveEducación(Educación info){
        iEducaciónRepository.save(info);
    }
    
     public Educación findEducación(Long id){
        Educación info = iEducaciónRepository.findById(id).orElse(null);
        return info;
    }
     
     public Educación editEducación(Long id,Educación info){
        try{
            info.setId(id);
            iEducaciónRepository.save(info);
            return info;
        }catch(Exception e){
            return null;
        }
    }
     
      public String deleteEducación(Long id){
        try{
            iEducaciónRepository.deleteById(id);
            return "Esta información fue borrada";
        }catch(Exception e){
            return "No se pudo borrar la información";
        }     
    }
   
}
