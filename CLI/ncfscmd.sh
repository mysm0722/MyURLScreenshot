#!/bin/bash

if [ "$JAVA_HOME" == "" ]; then
        echo "Please install jdk version 1.6.X or 1.7.X"
		echo "set your profile JAVA_HOME"
        exit 1
fi

HOME="/Users/naver/MyURLScreenshot/CLI/lib"

if [ "$NCFS_HOME" != "" ]; then
        HOME=$NCFS_HOME
fi


if [ "$#" == "0" ]; then
    $JAVA_HOME/bin/java -jar $HOME/cli.jar 6
fi

if [ "$1" == "put" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 0 $2 $3
elif [ "$1" == "get" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 1 $2 $3
elif [ "$1" == "ls" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 2 $2
elif [ "$1" == "mkdir" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 3 $2
elif [ "$1" == "del" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 4 $2
elif [ "$1" == "configure" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 5 $2 $3
elif [ "$1" == "help" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 6
elif [ "$1" == "abort" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 7 $2
elif [ "$1" == "version" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 8	
elif [ "$1" != "" ]; then
	$JAVA_HOME/bin/java -jar $HOME/cli.jar 
fi      
