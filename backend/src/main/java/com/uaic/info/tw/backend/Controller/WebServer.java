package com.uaic.info.tw.backend.Controller;

import java.io.UnsupportedEncodingException;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.sun.net.httpserver.HttpServer;
import com.uaic.info.tw.backend.Globals.Variables;

public class WebServer {
	public static HttpServer server;

	public WebServer() throws Exception {
		server = HttpServer.create(new InetSocketAddress(Variables.SERVERPORT), 0);
		server.createContext("/test", new Servlet());//creates a servlet on path test with class 
		server.setExecutor(null); // creates a default executor
		server.start();
	}
	public static void parseQuery(String query, Map<String, 
		Object> parameters) throws UnsupportedEncodingException {
	
         if (query != null) {
             String pairs[] = query.split("[&]");
             for (String pair : pairs) {
                  String param[] = pair.split("[=]");
                  String key = null;
                  String value = null;
                  if (param.length > 0) {
                  key = URLDecoder.decode(param[0], 
                  	System.getProperty("file.encoding"));
                  }

                  if (param.length > 1) {
                           value = URLDecoder.decode(param[1], 
                           System.getProperty("file.encoding"));
                  }

                  if (parameters.containsKey(key)) {
                           Object obj = parameters.get(key);
                           if (obj instanceof List<?>) {
                                    List<String> values = (List<String>) obj;
                                    values.add(value);

                           } else if (obj instanceof String) {
                                    List<String> values = new ArrayList<String>();
                                    values.add((String) obj);
                                    values.add(value);
                                    parameters.put(key, values);
                           }
                  } else {
                           parameters.put(key, value);
                  }
             }
         }
	}
}