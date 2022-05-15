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
        private String nombre;
        @Column(name = "es_trabajo_actual")
        private Integer esTrabajoActual;
        @Column(name = "fechainicio")
    @Temporal(javax.persistence.TemporalType.DATE)
        private Date fechainicio;
        @Column(name = "fechafin")
    @Temporal(javax.persistence.TemporalType.DATE)
        private Date fechafin;
        @Column(name = "descripcion")
        private String descripcion;
        @Column(name="tipo_empleo")
        private String tipo_empleo;
        @Column(name = "Persona_id")
         private Long persona;    
}
