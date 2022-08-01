
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Controller;


import com.example.demo.Services.EducaciónService;
import com.example.demo.Services.ExpLaboralService;
import com.example.demo.Services.Headder_footerService;
import com.example.demo.Services.PersonaService;
import com.example.demo.Services.ProyectoService;
import com.example.demo.Services.SkillService;


import com.example.demo.models.Educación;
import com.example.demo.models.ExpLaboral;
import com.example.demo.models.Headder_footer;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
    @Autowired
    Headder_footerService Headder_footerService;
   
   

    
    @GetMapping("/personas")
    @ResponseBody
    public List<Persona> verPersonas(){
        return  PersonaService.getUsers();
    }
  
    @DeleteMapping("/personas/{id}")
    public String deleteUser(@PathVariable Long id ){
        return PersonaService.deleteUser(id);
    }
      
    
    @GetMapping("/personas/{id}")
     @ResponseBody
    public Persona findUser(@PathVariable Long id){
        return PersonaService.findUser(id);
    }
    

    
    @PostMapping("/personas/login")
    
    public Persona loginUser(@RequestBody Persona userCredential){
        return PersonaService.loginUser(userCredential);
    }
               
    
    
    
      @PutMapping("/personas")
    public void editUser(@RequestBody Persona pers){
         PersonaService.editUser(pers);
         
    }
    
    @GetMapping("/ExpLaboral/{persona}")
      @ResponseBody
    public List<ExpLaboral> findExpLaboral(@PathVariable Long persona){
        return ExpLaboralService.findExpLaboral(persona);
    }
    
    @RequestMapping(value="/ExpLaboral",method={RequestMethod.POST,RequestMethod.PUT})
    public void saveExpLaboral(@RequestBody ExpLaboral info){
        ExpLaboralService.saveExpLaboral(info);
    }
    
      @DeleteMapping("/ExpLaboral/{id}")
    public void deleteExpLaboral(@PathVariable Long id ){
         ExpLaboralService.deleteExpLaboral(id);
    }
    
   @RequestMapping(value="/Educacion",method={RequestMethod.POST,RequestMethod.PUT})
    public void saveEducación(@RequestBody Educación info){
        EducaciónService.saveEducación(info);     
    }
    
    @GetMapping("/Educacion/{Persona_id}")
      @ResponseBody
    public List<Educación> findEducación(@PathVariable Long Persona_id){
        return EducaciónService.findEducación(Persona_id);
    }
    
      @DeleteMapping("/Educacion/{id}")
    public void deleteEducación (@PathVariable Long id ){
         EducaciónService.deleteEducación(id);
    }
    
    @RequestMapping(value="/Proyecto",method={RequestMethod.POST,RequestMethod.PUT})
    public void saveProyecto(@RequestBody Proyecto info){
        ProyectoService.saveProyecto(info);     
    }
    
    @GetMapping("/Proyecto/{persona}")
      @ResponseBody
    public List<Proyecto> findProyecto(@PathVariable Long persona){
        return ProyectoService.findProyecto(persona);
    }
    
   
      @DeleteMapping("/Proyecto/{id}")
    public void deleteProyecto (@PathVariable Long id ){
        ProyectoService.deleteProyecto(id);
    }
    

    
    @GetMapping("/Skill/{persona}")
      @ResponseBody
    public List<Skill> findSkill(@PathVariable Long persona){
        return SkillService.findSkill(persona);
    }
    

        @RequestMapping(value="/Skill",method={RequestMethod.POST,RequestMethod.PUT})
    public void saveSkill(@RequestBody Skill info){
        SkillService.saveSkill(info);     
    }
    
    
      @DeleteMapping("/Skill/{id}")
    public void deleteSkill (@PathVariable Long id ){
         SkillService.deleteSkill(id);
    }
    
    
     @GetMapping("/Headder_footer/{persona}")
      @ResponseBody
    public Headder_footer findHeadder_footer(@PathVariable Long persona){
         return Headder_footerService.findHeadder_footer(persona);
    }
    

        @RequestMapping(value="/Headder_footer",method={RequestMethod.POST,RequestMethod.PUT})
    public void saveHeadder_footer(@RequestBody Headder_footer info){
        Headder_footerService.saveHeadder_footer(info);     
    }
    
    
    
    
}
    

