package com.jabcomp.sme.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.jabcomp.sme.model.EmailRequest;
import com.jabcomp.sme.service.EmailService;

@RestController
@RequestMapping(value = "/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {

	@Autowired
	public EmailService emailservice;
	
//	@RequestMapping(value = "/sendEmail", method = RequestMethod.POST)
//	public ResponseEntity<?> sendEmail(@RequestBody EmailRequest emailrequest){
//		
//		boolean b =this.emailservice.sendEmail(emailrequest.getSubject(), emailrequest.getMessage(), emailrequest.getToUser());
//		
//		if(b)
//		{
//			return ResponseEntity.ok("Succesfully Mailed");
//	
//		}
//		else {
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error");
//		}
//		
//		
//	}
	
	
	
	
	@RequestMapping(value = "/sendEmail", method = RequestMethod.POST)
	//@EventListener(ApplicationReadyEvent.class)
	public ResponseEntity<String> triggerMail(@RequestBody EmailRequest email) throws Exception {

		boolean b =this.emailservice.sendSimpleEmail(email.getToUser(),
				email.getSubject(),
				email.getMessage());
		
		if(b)
			{
				return ResponseEntity.ok("Succesfully Mailed");
		
			}
			else {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error");
			}

	}
}
