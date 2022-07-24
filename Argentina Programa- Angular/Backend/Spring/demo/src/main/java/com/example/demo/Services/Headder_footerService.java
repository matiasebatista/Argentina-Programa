/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.IHeadder_footerRepository;
import com.example.demo.models.Headder_footer;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author matia
 */
        
@Service
public class Headder_footerService {
     @Autowired
    IHeadder_footerRepository iHeadder_footerRepository;
     
     
     public void saveHeadder_footer(Headder_footer info){
        iHeadder_footerRepository.save(info);
    }
     public List<Headder_footer> findHeadder_footer(Long id){
      return iHeadder_footerRepository.findByPersona(id);
    }
     
     public void editHeadder_footer(Long id,Headder_footer info){
         iHeadder_footerRepository.save(info);
       
    }
      
     
     
     
     
}
