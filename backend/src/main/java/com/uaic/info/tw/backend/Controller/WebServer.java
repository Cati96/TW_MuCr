package com.uaic.info.tw.backend.Controller;

import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpServer;
import com.uaic.info.tw.backend.Controller.Servlet.LoginServlet;
import com.uaic.info.tw.backend.Controller.Servlet.RankServlet;
import com.uaic.info.tw.backend.Controller.Servlet.RegisterServlet;
import com.uaic.info.tw.backend.Controller.Servlet.SaveDataServlet;
import com.uaic.info.tw.backend.Controller.Servlet.TestingServlet;
import com.uaic.info.tw.backend.Globals.Variables;

public class WebServer {
	public static HttpServer server;

	public WebServer() throws Exception {
		server = HttpServer.create(new InetSocketAddress(Variables.SERVERPORT), 0);
		server.createContext("/test", new TestingServlet());//creates a servlet on path test with class
		server.createContext("/register", new RegisterServlet());
		server.createContext("/login", new LoginServlet());
		server.createContext("/rank", new RankServlet());
		server.createContext("/save", new SaveDataServlet());
		
		server.setExecutor(null); // creates a default executor
	}
	
	public void startServer() {
		server.start();
	}
	
	public void stopServer() {
		server.stop(0);
	}
}