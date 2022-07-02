/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.IEducaciónRepository;
import com.example.demo.models.Educación;
import java.util.List;
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
    
     public List<Educación> findEducación(Long id){
        return iEducaciónRepository.findByPersona(id);
        
    }
     
     public void editEducación(Educación info){
            iEducaciónRepository.save(info);
      
      
    }
     
      public void deleteEducación(Long id){
    
            iEducaciónRepository.deleteById(id);
    
 
    }
   
}
