/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
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
@Table(name= "proyectos")
public class Proyecto implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
      @Column(name = "id")
    private Long id;
    @Column(name = "nombre")
    private String nombre; 
    @Column(name = "descripcion_proy")
    private String descripcion_proy;
    @Column(name = "Ano")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date Ano;
    @Column(name = "Persona_id")
    private Long persona; 
    @Column (name = "link")
    private String link;
    
    
}
