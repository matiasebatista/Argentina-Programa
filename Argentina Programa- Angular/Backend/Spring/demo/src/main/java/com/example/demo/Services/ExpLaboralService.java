
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.IExpLaboralRepository;
import com.example.demo.models.ExpLaboral;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author matia
 */
@Service
public class ExpLaboralService {
    @Autowired
    IExpLaboralRepository iExpLaboralRepository;

    
    public void saveExpLaboral(ExpLaboral info){
        iExpLaboralRepository.save(info);
    }
     public List<ExpLaboral> findExpLaboral(Long id){
      return iExpLaboralRepository.findByPersona(id);
    }
     
     public void editExpLaboral(Long id,ExpLaboral info){
         iExpLaboralRepository.save(info);
       
    }
     
   public void deleteExpLaboral(Long id){
    
            iExpLaboralRepository.deleteById(id);
    

    }
      
    
}
