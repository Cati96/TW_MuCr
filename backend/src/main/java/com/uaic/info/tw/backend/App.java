package com.uaic.info.tw.backend;

import com.uaic.info.tw.backend.Controller.WebServer;
import com.uaic.info.tw.backend.Controller.Database.DatabaseConnection;

public class App 
{
	public static void main(String[] args) throws Exception {
    	System.out.println("Hello world!");
    	
    	DatabaseConnection dbConn = DatabaseConnection.getInstance();
    	
    	WebServer server = new WebServer();
    	
    }
}
