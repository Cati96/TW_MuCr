package com.uaic.info.tw.backend.Controller.Servlet;

import java.io.IOException;
import java.io.OutputStream;
import java.sql.SQLException;
import java.util.Map;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.uaic.info.tw.backend.Controller.RegisterController;
import com.uaic.info.tw.backend.Controller.SaveDataController;

public class SaveDataServlet implements HttpHandler{
	public void handle(HttpExchange exchange) throws IOException {
		System.out.println("Called save data servlet");

		Map<String, String> receivedParams = QueryParser.queryToMap(exchange.getRequestURI().getQuery());

		SaveDataController saveDataController = new SaveDataController(receivedParams);
		String response = "Ok";
		try {
			saveDataController.saveUserStatusGame();
		} catch (SQLException e) {
			e.printStackTrace();
		}


		exchange.sendResponseHeaders(200, response.length());
		OutputStream os = exchange.getResponseBody();
		os.write(response.getBytes());
		os.close();
	}
}
