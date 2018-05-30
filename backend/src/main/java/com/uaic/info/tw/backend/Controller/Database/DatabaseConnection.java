package com.uaic.info.tw.backend.Controller.Database;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.apache.derby.jdbc.EmbeddedDriver;

import com.uaic.info.tw.backend.Globals.Variables;

public class DatabaseConnection {
	private Connection connection;

	private Driver derbyEmbeddedDriver = new EmbeddedDriver();
	private Driver d = DriverManager.getDrivers().nextElement();

	public DatabaseConnection() throws SQLException {
		DriverManager.deregisterDriver(d);
		DriverManager.registerDriver(derbyEmbeddedDriver);
		
		connection = null;
	}

	public Connection getConnection() {
		try {
			connection = DriverManager.getConnection(Variables.DB_PATH);
			connection.setAutoCommit(true);
			if (connection != null) {
				System.out.println("Connection to database created corectly.");
			}
		} catch (SQLException e) {
			System.out.println(e.getMessage());
			System.out.println("Something went wrong when creating connection to database.");
		}
		return connection;
	}

}