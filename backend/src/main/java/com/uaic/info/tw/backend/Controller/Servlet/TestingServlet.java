package com.uaic.info.tw.backend.Controller.Servlet;

import java.io.IOException;
import java.io.OutputStream;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

public class TestingServlet  implements HttpHandler{

	public void handle(HttpExchange exchange) throws IOException {
		String response = "This is the response";
		exchange.sendResponseHeaders(200, response.length());
		OutputStream os = exchange.getResponseBody();
		os.write(response.getBytes());
		os.close();
	}
}