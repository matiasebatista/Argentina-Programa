/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.IExpLaboralRepository;
import com.example.demo.models.ExpLaboral;
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
     public ExpLaboral findExpLaboral(Long id){
        ExpLaboral info = iExpLaboralRepository.findById(id).orElse(null);
        return info;
    }
     
     public ExpLaboral editExpLaboral(Long id,ExpLaboral info){
        try{
            info.setId(id);
            iExpLaboralRepository.save(info);
            return info;
        }catch(Exception e){
            return null;
        }
    }
     
      public String deleteExpLaboral(Long id){
        try{
            iExpLaboralRepository.deleteById(id);
            return "Esta información fue borrada";
        }catch(Exception e){
            return "No se pudo borrar la información";
        }     
    }
      
    
}
