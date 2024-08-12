package com.jabcomp.sme.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class imagemodel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer image_id;
	private String name;
	private String type;
	public imagemodel(String name,String type)
	{
		this.name=name;
		this.setType(type);
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
}
