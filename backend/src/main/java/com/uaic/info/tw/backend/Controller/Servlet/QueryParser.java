package com.uaic.info.tw.backend.Controller.Servlet;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QueryParser {
	
	/*
	 * Method used with GET method
	 */
	public static void parseQuery(String query, Map<String, Object> parameters) throws UnsupportedEncodingException {
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
	
	/*
	 * Method used with POST method
	 */
	public static Map<String, String> queryToMap(String query){
	    Map<String, String> result = new HashMap<String, String>();
	    for (String param : query.split("&")) {
	        String pair[] = param.split("=");
	        if (pair.length>1) {
	            result.put(pair[0], pair[1]);
	        }else{
	            result.put(pair[0], "");
	        }
	    }
	    return result;
	 }
}
