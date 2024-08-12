package com.jabcomp.sme.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jabcomp.sme.model.Clinic;
import com.jabcomp.sme.repo.ClinicRepo;


@Service
public class ClinicService {
	
	@Autowired
	private ClinicRepo clinicRepo;

	public void addClinic(Clinic clinic) {
		clinicRepo.save(clinic);
		
	}
	
public Clinic updateClinicRecordStatus(Long id, String Status) {
    Clinic clinicRecord = clinicRepo.findById(id).get();
    
    clinicRecord.setStatus(Status);
    Clinic updatedClinicRecord = clinicRepo.save(clinicRecord);
    
    return updatedClinicRecord;
}


}
