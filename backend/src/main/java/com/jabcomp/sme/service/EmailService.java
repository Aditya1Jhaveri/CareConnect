package com.jabcomp.sme.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmailService {

	@Autowired
	private JavaMailSender javaMailSender;

	public boolean sendSimpleEmail(String toUser, String subject, String body) throws Exception {

		boolean f = false;
		try {

			SimpleMailMessage message = new SimpleMailMessage();

			message.setFrom("careconnectibm@gmail.com");
			message.setTo(toUser);
			message.setSubject(subject);
			message.setText(body);

			javaMailSender.send(message);
			System.out.println("Mail Send...");

			f = true;
		} catch (Exception e) {
			// TODO: handle exception
		}

		return f;

	}
}
