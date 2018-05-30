package com.uaic.info.tw.backend.Controller;

import java.io.UnsupportedEncodingException;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.sun.net.httpserver.HttpServer;
import com.uaic.info.tw.backend.Controller.Servlet.TestingServlet;
import com.uaic.info.tw.backend.Globals.Variables;

public class WebServer {
	public static HttpServer server;

	public WebServer() throws Exception {
		server = HttpServer.create(new InetSocketAddress(Variables.SERVERPORT), 0);
		server.createContext("/test", new TestingServlet());//creates a servlet on path test with class 
		server.setExecutor(null); // creates a default executor
	}
	
	public void startServer() {
		server.start();
	}
	
	public void stopServer() {
		server.stop(0);
	}
}