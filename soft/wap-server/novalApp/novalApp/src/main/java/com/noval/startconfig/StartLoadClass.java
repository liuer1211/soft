package com.noval.startconfig;

import com.noval.model.service.UserMessageInfoService;
import com.noval.websocket.WebSocketServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class StartLoadClass implements ApplicationRunner {

    private Logger logger = LoggerFactory.getLogger(StartLoadClass.class);

    @Autowired
    private UserMessageInfoService userMessageInfoService;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        logger.info("StartLoadClass start");

        WebSocketServer.userMessageInfoService = userMessageInfoService;

        WebSocketServer.webSocketServerStart();

        logger.info("StartLoadClass end");

    }
}


