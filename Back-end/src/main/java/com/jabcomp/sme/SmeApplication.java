package com.jabcomp.sme;

import java.io.File;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.jabcomp.sme.controller.ClinicController;

@SpringBootApplication
@EnableAutoConfiguration
public class SmeApplication {

	public static void main(String[] args) {
		
		new File(ClinicController.imagedirectory).mkdir();
		
		SpringApplication.run(SmeApplication.class, args);
	}

}
