package com.uaic.info.tw.backend;

import com.uaic.info.tw.backend.Controller.WebServer;
import com.uaic.info.tw.backend.Controller.Database.DatabaseConnection;
import com.uaic.info.tw.backend.Controller.Database.InitDatabase;
import com.uaic.info.tw.backend.Globals.Variables;

public class App {
	public static void main(String[] args) throws Exception {
		System.out.println("Starting database server...");
		DatabaseConnection dbConn = new DatabaseConnection();
		Variables.DB_CONN = dbConn.getConnection();
		System.out.println("Connection to database set!");

		System.out.println("Creating tables if not exists...");
		InitDatabase dbInitializer = new InitDatabase();
		dbInitializer.databaseCreator();

		System.out.println("Starting server...");
		WebServer server = new WebServer();
		server.startServer();
		System.out.println("Server started at port: " + Variables.SERVERPORT);

	}
}
