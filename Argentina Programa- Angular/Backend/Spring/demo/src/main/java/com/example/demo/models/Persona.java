
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.sql.Blob;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author matia
 */
@Getter 
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "persona")
public class Persona implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "nombre")
    private String nombre;
    
    @Column(name ="contrasena")
    private String contraseña;
    
    @Column(name = "apellido")
    private String apellido;
    @Column(name = "domicilio")
    private String domicilio;
    @Column(name = "feche_nac")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date fecha;
    @Column(name = "correo")
    private String correo;
    
   @Lob
   @Column(name = "foto")
   private Blob blobFoto;
   
   @Transient
   private String foto;
   
    @Column (name = "acercade")
    private String acercade;
    @Column (name="telefono")
    private String telefono;

    
    

   

    @OneToMany(mappedBy = "persona", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Educación> educacion;
       @OneToMany(mappedBy = "persona", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Skill> skills;
          @OneToMany(mappedBy = "persona", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Proyecto> proyectos;
       @OneToMany(mappedBy = "persona", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ExpLaboral> exp_laboral;
  @OneToMany(mappedBy = "persona", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Headder_footer> Headder_footer;

}
