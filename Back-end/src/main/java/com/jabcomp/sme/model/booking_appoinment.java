package com.jabcomp.sme.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class booking_appoinment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String patientname;
	private String age;
	private String email;
	private String mobileNo;
	private String weight;
	private String address;
	private String city;
	private String symtoms;
	private String time;
	private String date;
	private String Status;
	public void setAppoinment(booking_appoinment user)
	{
		if(user.getPatientname() != null) this.patientname=user.getPatientname();
		if(user.getAge() != null)this.age=user.getAge();
		if(user.getEmail() != null)this.email=user.getEmail();
		if(user.getWeight() != null) this.weight=user.getWeight();
		if(user.getMobileNo() != null) this.mobileNo=user.getMobileNo();
		if(user.getAddress() != null) this.address = user.getAddress();
		if(user.getCity() !=null)this.city=user.getCity();
		if(user.getSymtoms() !=null)this.symtoms=user.getSymtoms();
		if(user.getTime() !=null)this.time=user.getTime();
		if(user.getDate() !=null)this.date=user.getDate();

		if(user.getStatus() !=null)this.Status=user.getStatus();


	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPatientname() {
		return patientname;
	}
	public void setPatientname(String patientname) {
		this.patientname = patientname;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getSymtoms() {
		return symtoms;
	}
	public void setSymtoms(String symtoms) {
		this.symtoms = symtoms;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}


	public String getStatus() {
		return Status;
	}


	public void setStatus(String status) {
		Status = status;
	}
	
	
	
	
	
}
