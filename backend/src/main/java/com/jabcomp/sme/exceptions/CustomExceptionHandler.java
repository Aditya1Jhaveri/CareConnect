package com.jabcomp.sme.exceptions;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {
	private String INCORRECT_REQUEST = "INCORRECT_REQUEST";
	private String BAD_REQUEST = "BAD_REQUEST";

	@ExceptionHandler({ BaseException.class })
	public final ResponseEntity<ErrorResponse> handleUserNotFoundException(BaseException ex, WebRequest request) {
		ErrorResponse error = new ErrorResponse();
		error.message = ex.getLocalizedMessage();
		error.date = LocalDateTime.now();
		return new ResponseEntity<>(error, new HttpHeaders(), HttpStatus.CONFLICT);
	}
}