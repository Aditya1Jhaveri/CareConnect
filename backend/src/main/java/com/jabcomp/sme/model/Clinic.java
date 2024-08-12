package com.jabcomp.sme.model;

import java.util.Set;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class Clinic {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
		private Long id;
		private String firstname;
		private String middlename;
		private String lastname;
		private String gender;
		private String age;
		private String mobileNo;
		private String degree;
		private String speciallization;
		private String adhar_no;
		private String license_id;
		private String clinic_name;
		private String clinic_contact;
		private String fees;
		private String district;
		private String city;
		private String state;
		private String pincode;
		private String descryption;
		private String type;
		private String Status;
		private String street;
		private String email;
		private String experience;
		private String doc_image;
//	
//	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//	@JoinTable(name="doc_image",
//	joinColumns = {
//			@JoinColumn(name="clinic_id")
//	},
//	inverseJoinColumns = {
//			@JoinColumn(name="image_id")
//	}
//	)
//	private Set<imagemodel> doc_image;
//	

	public void setClinic(Clinic clinic)
	{
		if(clinic.getFirstname() != null) this.firstname=clinic.getFirstname();
		if(clinic.getMiddlename() != null) this.middlename=clinic.getMiddlename();
		if(clinic.getLastname() != null) this.lastname=clinic.getLastname();
		if(clinic.getGender()!= null) this.gender=clinic.getGender();
		if(clinic.getAge() != null) this.age=clinic.getAge();
		if(clinic.getMobileNo() != null) this.mobileNo=clinic.getMobileNo();
		if(clinic.getDegree() != null) this.degree=clinic.getDegree();
		if(clinic.getSpeciallization() != null) this.speciallization=clinic.getSpeciallization();
		if(clinic.getAdhar_no() != null) this.adhar_no=clinic.getAdhar_no();
		if(clinic.getLicense_id() != null) this.license_id=clinic.getLicense_id();
		if(clinic.getClinic_name() != null) this.clinic_name=clinic.getClinic_name();
		if(clinic.getClinic_contact() != null) this.clinic_contact=clinic.getClinic_contact();
		if(clinic.getFees() != null) this.fees=clinic.getFees();
		if(clinic.getDistrict() != null) this.district=clinic.getDistrict();
		if(clinic.getCity() != null) this.city=clinic.getCity();
		if(clinic.getState() != null) this.state=clinic.getState();
		if(clinic.getPincode() != null) this.pincode=clinic.getPincode();
		if(clinic.getDescryption() != null) this.descryption=clinic.getDescryption();
		if(clinic.getType() != null) this.type=clinic.getType();
		if(clinic.getStatus() != null)this.Status=clinic.getStatus();
		if(clinic.getStreet() != null)this.street=clinic.getStreet();
		if(clinic.getEmail() != null)this.email=clinic.getEmail();
		if(clinic.getExperience() != null)this.experience=clinic.getExperience();
		if(clinic.getDoc_image() != null)this.setDoc_image(clinic.getDoc_image());

	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getMiddlename() {
		return middlename;
	}
	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getSpeciallization() {
		return speciallization;
	}
	public void setSpeciallization(String speciallization) {
		this.speciallization = speciallization;
	}
	
	
	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getAdhar_no() {
		return adhar_no;
	}

	public void setAdhar_no(String adhar_no) {
		this.adhar_no = adhar_no;
	}

	public String getClinic_contact() {
		return clinic_contact;
	}

	public void setClinic_contact(String clinic_contact) {
		this.clinic_contact = clinic_contact;
	}

	public String getFees() {
		return fees;
	}

	public void setFees(String fees) {
		this.fees = fees;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getLicense_id() {
		return license_id;
	}
	public void setLicense_id(String license_id) {
		this.license_id = license_id;
	}
	public String getClinic_name() {
		return clinic_name;
	}
	public void setClinic_name(String clinic_name) {
		this.clinic_name = clinic_name;
	}

	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	public String getDescryption() {
		return descryption;
	}
	public void setDescryption(String descryption) {
		this.descryption = descryption;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDoc_image() {
		return doc_image;
	}

	public void setDoc_image(String doc_image) {
		this.doc_image = doc_image;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}
	
//	public Set<imagemodel> getDoc_image() {
//		return doc_image;
//	}
//
//	public void setDoc_image(Set<imagemodel> doc_image) {
//		this.doc_image = doc_image;
//	}

}
