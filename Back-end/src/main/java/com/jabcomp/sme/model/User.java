package com.jabcomp.sme.model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String firstname;
	private String middlename;
	private String lastname;
	private String email;
	private String mobileNo;
	private String role;
	private String password;

	public void setUser(User user)
	{
		if(user.getFirstname() != null) this.firstname=user.getFirstname();
		if(user.getMiddlename() != null)this.middlename=user.getMiddlename();
		if(user.getLastname() != null)this.lastname=user.getLastname();
		if(user.getEmail() != null) this.email=user.getEmail();
		if(user.getMobileNo() != null) this.mobileNo=user.getMobileNo();
		if(user.getRole() != null) this.role = user.getRole();
		if(user.getPassword() !=null)this.password=user.getPassword();
	}

	public int getId() {
		return id;
	}

	public void setId(int uid) {
		this.id = uid;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
