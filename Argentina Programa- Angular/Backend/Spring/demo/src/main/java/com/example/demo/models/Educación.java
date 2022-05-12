/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.models;


import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

public class Educación implements Serializable{
     @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
     
    @Column(name = "id")
    private Long id;
    @Column(name = "establecimiento")
    private String establecimiento;
    @Column(name = "año_ingreso")
    private Date AñoIngreso;
    @Column(name = "año_egreso")
    private Date AñoEgreso;
    @Column(name = "nombre_titulo")
    private String nombre_titulo;
    @Column (name="nivel")
    private String nivel; 
    @Column(name = "Persona_id")
    private Long persona;     
}
