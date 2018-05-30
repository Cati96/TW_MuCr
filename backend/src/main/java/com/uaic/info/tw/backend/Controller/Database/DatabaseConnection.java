package com.uaic.info.tw.backend.Controller.Database;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.apache.derby.jdbc.EmbeddedDriver;

import com.uaic.info.tw.backend.Globals.Variables;

public class DatabaseConnection {

	private Driver derbyEmbeddedDriver = new EmbeddedDriver();
	private Driver d = DriverManager.getDrivers().nextElement();

	public DatabaseConnection() throws SQLException {
		DriverManager.deregisterDriver(d);
		DriverManager.registerDriver(derbyEmbeddedDriver);
	}

	public Connection getConnection() {
		try {
			Variables.DB_CONN = DriverManager.getConnection(Variables.DB_PATH);
			Variables.DB_CONN.setAutoCommit(true);
			if (Variables.DB_CONN != null) {
				System.out.println("Connection to database created corectly.");
			}
		} catch (SQLException e) {
			System.out.println(e.getMessage());
			System.out.println("Something went wrong :) ");
		}
		return Variables.DB_CONN;
	}

}