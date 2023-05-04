package com.jabcomp.sme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.jabcomp.sme.model.booking_appoinment;
import com.jabcomp.sme.repo.bookingrepo;

@RestController
@RequestMapping(value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:3000")
public class bookingController {
	
	

	@Autowired
	private bookingrepo bookingrepo;
	
	
	@RequestMapping(value = "/booking", method = RequestMethod.POST)
	public booking_appoinment addClinic(@RequestBody booking_appoinment clinic) throws JsonProcessingException {

		bookingrepo.save(clinic);
		return clinic;
		
	}
	

	
	 @GetMapping("/approvedbooking")
	    List<booking_appoinment> getAllClinic() {
		 
			String APPROVED="STATUS_APPROVED";
			
			return bookingrepo.findByStatus(APPROVED);
					
	    }

	 @GetMapping("/pendingcbooking")
	    List<booking_appoinment> getAllUsers() {
		 
			String pending="STATUS_PENDING";
			
			return bookingrepo.findByStatus(pending);
					
	    }
	
	

    @PutMapping("/updatebooking/{id}")
    public ResponseEntity<booking_appoinment> updateClinicRecordStatus(@PathVariable int id) {
//        Clinic updatedClinicRecord = clinicservice.updateClinicRecordStatus(id, newStatus);
        booking_appoinment clinicRecord = bookingrepo.findById(id).get();
        
        clinicRecord.setStatus("STATUS_APPROVED");
        booking_appoinment updatedClinicRecord = bookingrepo.save(clinicRecord);
        
       return ResponseEntity.ok(updatedClinicRecord);
    }
}
