package com.uaic.info.tw.backend.Controller.Servlet;

import java.io.IOException;
import java.io.OutputStream;
import java.sql.SQLException;
import java.util.Map;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.uaic.info.tw.backend.Controller.RankController;
import com.uaic.info.tw.backend.Controller.RegisterController;

public class RankServlet implements HttpHandler {
	public void handle(HttpExchange exchange) throws IOException {
		System.out.println("Called rank servlet");

		RankController rankController = new RankController();
		String response = "";
		try {
			response = rankController.getRanking();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		exchange.sendResponseHeaders(200, response.length());
		OutputStream os = exchange.getResponseBody();
		os.write(response.getBytes());
		os.close();
	}
}
