package com.uaic.info.tw.backend.Controller.Database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class InitDatabase {
	
	private String createUserTable = "CREATE TABLE users ("
            + "  id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),"
            + "  username VARCHAR(32600) NOT NULL,"
            + "  password VARCHAR(32600) NOT NULL,"
            + "  name VARCHAR(32600) NOT NULL,"
            + "  email VARCHAR(32600) NOT NULL,"
            + "  avatar VARCHAR(32600) NOT NULL,"
            + "  PRIMARY KEY (id)"
            + ") ";
	
	private String createRankTable = "CREATE TABLE rank ("
			+ "  id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),"
			+ "  user_id INTEGER NOT NULL,"
			+ "  username VARCHAR(32600) NOT NULL,"
			+ "  points INTEGER NOT NULL DEFAULT 0,"
			+ "  PRIMARY KEY (id)"
			+ ") ";
	
	private String createSaveDataTable = "CREATE TABLE save_data ("
			+ "  id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),"
			+ "  user_id INTEGER NOT NULL,"
			+ "  save_data VARCHAR(32600) NOT NULL,"
			+ "  PRIMARY KEY (id)"
			+ ") ";
	
	private Connection connection;
	
	public InitDatabase(Connection connection) {
		this.connection = connection;
		createTable(createUserTable);
		createTable(createRankTable);
		createTable(createSaveDataTable);
		
	}
	private void createTable(String query) {
		PreparedStatement pst;
		try {
			pst = this.connection.prepareStatement(query);
			pst.executeUpdate();
		} catch (SQLException e) {
			System.out.println("Table already exists.");
		}
	}
}
