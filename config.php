<?php 
	// Set environment
	define('ENVIRONMENT', 'development'); // or 'production'

	if (ENVIRONMENT === 'development') {
	    define('DB_HOST', 'localhost');
		define('DB_USERNAME', 'root');
		define('DB_PASSWORD', 'password');
		define('DB_NAME', 'summit');
	} elseif (ENVIRONMENT === 'production') {
	    define('DB_HOST', 'localhost');
		define('DB_USERNAME', 'root');
		define('DB_PASSWORD', 'password');
		define('DB_NAME', 'summit');
	}		
?>