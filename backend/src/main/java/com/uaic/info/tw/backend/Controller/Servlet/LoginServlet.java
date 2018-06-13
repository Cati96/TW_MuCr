package com.uaic.info.tw.backend.Controller.Servlet;

import java.io.IOException;
import java.io.OutputStream;
import java.util.Map;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.uaic.info.tw.backend.Controller.LoginController;

public class LoginServlet implements HttpHandler{
	
	public void handle(HttpExchange exchange) throws IOException {
		System.out.println("Called login servlet");

		Map<String, String> receivedParams = QueryParser.queryToMap(exchange.getRequestURI().getQuery());

		LoginController loginController = new LoginController(receivedParams);
		String response = "";
		try {
			response = loginController.verifyUserExistance();
			System.out.println("Response in login servlet: " + response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		exchange.sendResponseHeaders(200, response.length());
		OutputStream os = exchange.getResponseBody();
		os.write(response.getBytes());
		os.close();
		
	}
}
