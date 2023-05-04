package com.jabcomp.sme.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jabcomp.sme.model.Clinic;
import com.jabcomp.sme.repo.ClinicRepo;
import com.jabcomp.sme.service.ClinicService;

import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping(value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class ClinicController {

	@Autowired
	private ClinicRepo clinicrepo;

	private ClinicService clinicservice;

	public static String imagedirectory = System.getProperty("user.dir") + "src/main/resources/static/images";

//	@RequestMapping(value = "/clinic",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE}, method = RequestMethod.POST)
//	public Clinic addClinic(@RequestPart Clinic clinic,@RequestPart MultipartFile[] file) throws JsonProcessingException {
//
////		clinicrepo.save(clinic);
//		try {
//			Set<imagemodel> images=addimage(file);
//			clinic.setDoc_image(images);
//		 return clinicrepo.save(clinic);
//		} catch (Exception e) {
//			System.out.println(e.getMessage());
//			return null;
//		}
//		
//	}
	
	@RequestMapping(value = "/image", method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)

    public void getImage(HttpServletResponse response) throws IOException {
		String APPROVED = "STATUS_APPROVED";

	  List<Clinic> clinc=clinicrepo.findByStatus(APPROVED);
	 
	  

        var imgFile = new ClassPathResource("static/images/myimage.jpg");

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(imgFile.getInputStream(), response.getOutputStream());
}
	
	

	@Autowired
	private ObjectMapper mapper;

	@RequestMapping(value = "/clinic", method = RequestMethod.POST)
	public Clinic addClinic(@RequestParam("clinicdata") String clinic,
			@RequestParam("formData") MultipartFile image) throws JsonProcessingException, IOException {

		Clinic clini = null;
		try {
			clini = mapper.readValue(clinic, Clinic.class);

		} catch (JsonProcessingException e) {

			throw new RuntimeException(e);
			// TODO: handle exception
		}

		if (image.isEmpty()) {
			System.out.println("Error");
		} else {
			clini.setDoc_image(image.getOriginalFilename());

			File file = new File("src/main/resources/static/images");

			Path path = Paths.get(file.getAbsolutePath() + File.separator + image.getOriginalFilename());

			Files.copy(image.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
		}

		clini.setClinic(clini);
		clinicrepo.save(clini);
		return clini;

	}


//	@RequestMapping(value = "/clinic", method = RequestMethod.POST)
//	public Clinic addClinic(@RequestBody Clinic clinic,@RequestParam("doc_image") MultipartFile file) throws JsonProcessingException {
//
//		StringBuilder filenames=new StringBuilder();
//		String filename=clinic.getId()+file.getOriginalFilename().substring(file.getOriginalFilename().length()-4);
//		Path filenamepath=Paths.get(imagedirectory,filename);
//		
//		try {
//			Files.write(filenamepath, file.getBytes());
//		} catch (IOException e) {
//			e.printStackTrace();
//			// TODO: handle exception
//		}
//		clinic.setDoc_image(filename);
//		clinicrepo.save(clinic);
//		return clinic;
//		
//	}

	@GetMapping("/approvedclinic")
	List<Clinic> getAllClinic() {

		String APPROVED = "STATUS_APPROVED";

		return clinicrepo.findByStatus(APPROVED);

	}

	@GetMapping("/pendingclinic")
	List<Clinic> getAllUsers() {

		String pending = "STATUS_PENDING";

		return clinicrepo.findByStatus(pending);

	}


	@PutMapping("/updateclinic/{id}")
	public ResponseEntity<Clinic> updateClinicRecordStatus(@PathVariable Long id) {
//        Clinic updatedClinicRecord = clinicservice.updateClinicRecordStatus(id, newStatus);
		Clinic clinicRecord = clinicrepo.findById(id).get();

		clinicRecord.setStatus("STATUS_APPROVED");
		Clinic updatedClinicRecord = clinicrepo.save(clinicRecord);

		return ResponseEntity.ok(updatedClinicRecord);
	}
}
