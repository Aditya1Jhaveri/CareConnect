package com.jabcomp.sme.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jabcomp.sme.model.Clinic;

public interface ClinicRepo extends JpaRepository<Clinic, Long> {
	
	@Query(value="SELECT u.* FROM clinic u WHERE u.Status IN (?1)",nativeQuery = true)
	List<Clinic> findByStatus(String status);
//
//	String approved ="STATUS_APPROVED";
//	@Query("update clinic u set u.Status=approved where u.email=email;")
//	Clinic getUpdateClinic(String email);

	

}
