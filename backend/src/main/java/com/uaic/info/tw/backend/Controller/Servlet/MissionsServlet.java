package com.uaic.info.tw.backend.Controller.Servlet;

import java.io.IOException;
import java.io.OutputStream;
import java.sql.SQLException;
import java.util.Map;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.uaic.info.tw.backend.Controller.MissionsController;

public class MissionsServlet implements HttpHandler{
	public void handle(HttpExchange exchange) throws IOException {
		System.out.println("Called mission servlet");
		
		Map<String, String> receivedParams = QueryParser.queryToMap(exchange.getRequestURI().getQuery());
		
		MissionsController missionController = new MissionsController(receivedParams);
		String response = "";
		try {
			response = missionController.getUsersPoints();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		exchange.sendResponseHeaders(200, response.length());
		OutputStream os = exchange.getResponseBody();
		os.write(response.getBytes());
		os.close();
	}
}
