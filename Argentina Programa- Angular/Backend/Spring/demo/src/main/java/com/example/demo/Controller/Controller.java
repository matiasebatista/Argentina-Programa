/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Controller;


import com.example.demo.Services.EducaciónService;
import com.example.demo.Services.ExpLaboralService;
import com.example.demo.Services.PersonaService;
import com.example.demo.Services.ProyectoService;
import com.example.demo.Services.SkillService;


import com.example.demo.models.Educación;
import com.example.demo.models.ExpLaboral;
import java.util.List;
import com.example.demo.models.Persona;
import com.example.demo.models.Proyecto;
import com.example.demo.models.Skill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author matia
 */
@RestController
public class Controller {
    @Autowired     
    PersonaService PersonaService;   
    @Autowired
    ExpLaboralService ExpLaboralService;
    @Autowired
    ProyectoService ProyectoService;
    @Autowired
    EducaciónService EducaciónService;
    @Autowired
    SkillService SkillService;
    
    
     @PostMapping ("/personas")
     @ResponseBody
    public void agregarPersona (@RequestBody Persona pers){
        PersonaService.registerUser(pers);
    }
    
    @GetMapping("/personas")
    public List<Persona> verPersonas(){
        return  PersonaService.getUsers();
    }
  
    @DeleteMapping("/personas/{id}")
    public String deleteUser(@PathVariable Long id ){
        return PersonaService.deleteUser(id);
    }
      
    
    @GetMapping("/personas/{id}")
    public Persona findUser(@PathVariable Long id){
        return PersonaService.findUser(id);
    }
    
    @PutMapping("/personas/{id}")
    public Persona editUser(@PathVariable Long id, @RequestBody Persona pers){
        return PersonaService.editUser(id,pers);
    }
       @GetMapping("/Acercade/{id}")
    public String findAcercade(@PathVariable Long id){
        return PersonaService.findAcercade(id);
    }
    
    @PutMapping("/Acercade/{id}")
    public String editAcercade(@PathVariable Long id, @RequestBody String inf){
        return PersonaService.editAcercade(id,inf);
    }

    
     @PostMapping("/ExpLaboral")
    public void saveExpLaboral (@RequestBody ExpLaboral info){
        ExpLaboralService.saveExpLaboral(info);     
    }
    
    @GetMapping("/ExpLaboral/{id}")
    public ExpLaboral findExpLaboral(@PathVariable Long id){
        return ExpLaboralService.findExpLaboral(id);
    }
    
    @PutMapping("/ExpLaboral/{id}")
    public ExpLaboral editExpLaboral(@PathVariable Long id, @RequestBody ExpLaboral info){
        return ExpLaboralService.editExpLaboral(id,info);
    }
      @DeleteMapping("/ExpLaboral/{id}")
    public String deleteExpLaboral(@PathVariable Long id ){
        return ExpLaboralService.deleteExpLaboral(id);
    }
    
     @PostMapping("/Educación")
    public void saveEducación(@RequestBody Educación info){
        EducaciónService.saveEducación(info);     
    }
    
    @GetMapping("/Educación/{id}")
    public Educación findEducación(@PathVariable Long id){
        return EducaciónService.findEducación(id);
    }
    
    @PutMapping("/Educación/{id}")
    public Educación editEducación(@PathVariable Long id, @RequestBody Educación info){
        return EducaciónService.editEducación(id,info);
    }
      @DeleteMapping("/Educación/{id}")
    public String deleteEducación (@PathVariable Long id ){
        return EducaciónService.deleteEducación(id);
    }
    
     @PostMapping("/Proyecto/{id}")
    public void saveProyecto (@RequestBody Proyecto info){
        ProyectoService.saveProyecto(info);     
    }
    
    @GetMapping("/Proyecto/{id}")
    public Proyecto findProyecto(@PathVariable Long id){
        return ProyectoService.findProyecto(id);
    }
    
    @PutMapping("/Proyecto/{id}")
    public Proyecto editProyecto(@PathVariable Long id, @RequestBody Proyecto info){
        return ProyectoService.editProyecto(id,info);
    }
      @DeleteMapping("/Proyecto/{id}")
    public String deleteProyecto (@PathVariable Long id ){
        return ProyectoService.deleteProyecto(id);
    }
    
    @PostMapping("/Skill/{id}")
    public void saveSkill (@RequestBody Skill info){
        SkillService.saveSkill(info);     
    }
    
    @GetMapping("/Skill/{id}")
    public Skill findSkill(@PathVariable Long id){
        return SkillService.findSkill(id);
    }
    
    @PutMapping("/Skill/{id}")
    public Skill editProyecto(@PathVariable Long id, @RequestBody Skill info){
        return SkillService.editSkill(id,info);
    }
      @DeleteMapping("/Skill/{id}")
    public String deleteSkill (@PathVariable Long id ){
        return SkillService.deleteSkill(id);
    }
    
}
    

