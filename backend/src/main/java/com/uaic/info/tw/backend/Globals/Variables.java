package com.uaic.info.tw.backend.Globals;

import java.sql.Connection;

public class Variables {
	public static final String DERBY_CONNECTOR = "org.apache.derby.jdbc.ClientDriver";
	public static final String DB_PATH = "jdbc:derby:loaclDb;create=true";

	public static final int SERVERPORT= 8111;
	
	public static Connection DB_CONN = null;
}
