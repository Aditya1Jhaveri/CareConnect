package com.jabcomp.sme.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jabcomp.sme.model.booking_appoinment;

public interface bookingrepo extends JpaRepository<booking_appoinment, Integer> {
	
	@Query(value="SELECT u.* FROM booking_appoinment u WHERE u.Status IN (?1)",nativeQuery = true)
	List<booking_appoinment> findByStatus(String status);
	

}
