/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;

import com.example.demo.Repositories.ISkillRepository;
import com.example.demo.models.Skill;
import java.util.List;
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
    
     public List<Skill> findSkill(Long id){
        return iSkillRepository.findByPersona(id);
    }
     
     public void editSkill(Long id,Skill info){
            iSkillRepository.save(info);
    }
     
      public void deleteSkill(Long id){
         iSkillRepository.deleteById(id);     
    }
    
    
}
