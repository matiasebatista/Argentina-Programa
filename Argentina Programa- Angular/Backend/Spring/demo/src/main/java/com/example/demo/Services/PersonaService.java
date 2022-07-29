/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Services;



import com.example.demo.models.Persona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Repositories.IPersonaRepository;
import com.example.utils.ImageUtils;





/**
 *
 * @author matia
 */
@Service
public class PersonaService {
   @Autowired
   
    IPersonaRepository iPersonaRepository;

  
  
    
    
    public List<Persona> getUsers(){
        return (List<Persona>) iPersonaRepository.findAll();
    }
      
    public Persona findUser(Long id){
        Persona p = iPersonaRepository.findById(id).orElse(null);
        return p;
    }
    public String deleteUser(Long id){
        try{
            iPersonaRepository.deleteById(id);
            return "Este usuario fue borrado";
        }catch(Exception e){
            return "No se pudo borrar el usuario";
        }     
    }
    public Persona loginUser(Persona userCredential){
        Persona p = iPersonaRepository.findByCorreo(userCredential.getCorreo());
        if(p != null && p.getContraseña().equals(userCredential.getContraseña())){
            return p;
        }
        return null;
    }
  
    public void editUser(Persona info){ 
        try {
                info.setBlobFoto(ImageUtils.base64ToBlob(info.getFoto()));
            } catch (Exception e) {
                e.printStackTrace();
            } 
            iPersonaRepository.save(info);
      
      
    }
        
    public String findAcercade(Long id){
      return iPersonaRepository.findAcercadebyid(id);
    }
    
     public String editAcercade(Long id,String s){
        try{
            Persona p =   iPersonaRepository.findById(id).get();
            p.setAcercade(s);
            iPersonaRepository.save(p);
            return s;
        }catch(Exception e){
            return null;
        }
    }
     
     

     
     
     
}
