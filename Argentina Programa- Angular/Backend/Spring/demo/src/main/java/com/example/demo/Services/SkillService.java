/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.ISkillRepository;
import com.example.demo.models.Skill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author matia
 */
@Service
public class SkillService  {
    @Autowired
    ISkillRepository iSkillRepository;
    
    public void saveSkill(Skill info){
        iSkillRepository.save(info);
    }
    
     public Skill findSkill(Long id){
        Skill info = iSkillRepository.findById(id).orElse(null);
        return info;
    }
     
     public Skill editSkill(Long id,Skill info){
        try{
            info.setId(id);
            iSkillRepository.save(info);
            return info;
        }catch(Exception e){
            return null;
        }
    }
     
      public String deleteSkill(Long id){
        try{
            iSkillRepository.deleteById(id);
            return "Esta información fue borrada";
        }catch(Exception e){
            return "No se pudo borrar la información";
        }     
    }
    
    
}
