package com.uaic.info.tw.backend;

import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpServer;

import com.uaic.info.tw.backend.Controller.Servlet.Servlet;

public class App 
{
	public static void main(String[] args) throws Exception {
    	System.out.println("Hello world!");
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/test", new Servlet());
        server.setExecutor(null); // creates a default executor
        server.start();
    }
}
