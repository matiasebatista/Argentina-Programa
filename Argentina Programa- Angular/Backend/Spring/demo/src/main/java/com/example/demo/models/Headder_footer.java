/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.models;

import java.io.Serializable;
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
@Table(name = "headder_footer")
public class Headder_footer implements Serializable{
  @Id
   @GeneratedValue(strategy = GenerationType.AUTO)  
    @Column(name = "id")
    private Long id;
  @Column(name = "headder")
    private String headder;
   @Column(name = "footer")
    private String footer;
    @Column(name = "Persona_id")
    private Long persona; 
}
