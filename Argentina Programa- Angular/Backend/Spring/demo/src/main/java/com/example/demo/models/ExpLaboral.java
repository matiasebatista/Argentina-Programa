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
import javax.persistence.Temporal;
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
@Table( name = "exp_laboral")
public class ExpLaboral implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "id")
        private Long id;
        @Column(name = "nombre_empresa")
        private String nombre_empresa;
        @Column(name = "es_trabajo_actual")
        private String es_trabajo_actual;
        @Column(name = "fechainicio")
    @JsonFormat(pattern = "yyyy-MM-dd")
        private Date fechainicio;
        @Column(name = "fechafin")
    @JsonFormat(pattern = "yyyy-MM-dd")
        private Date fechafin;
        @Column(name = "descripcion")
        private String descripcion;
      
         private Long persona;    
}
