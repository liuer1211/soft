package com.noval.model.filter;

import com.noval.model.entity.UserInfoEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.IOException;

/**
 * 验证用户是否登陆过滤器
 */
//@Component
//@WebFilter(filterName = "LoginUserInfoFilter",
//        /**
//         * 通配符（*）表示对所有的web资源进行拦截
//        */
//        urlPatterns = "/*")
public class LoginUserInfoFilter implements Filter {

    private Logger logger = LoggerFactory.getLogger(LoginUserInfoFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        logger.info("LoginUserInfoFilter init");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        //判断用户是否登陆
        HttpServletResponseWrapper wrapper = new HttpServletResponseWrapper((HttpServletResponse) servletResponse);

        // 请求url中包含/userInfoLogin,继续执行
        if (request.getRequestURI().contains("/userInfoLogin") || request.getRequestURI().contains("/noPermission")){
            // 交给下一个过滤器或servlet处理
            filterChain.doFilter(servletRequest,servletResponse);
        }else {
            Object userInfoEntity = request.getSession().getAttribute("userInfo");
            if(userInfoEntity!=null){
                filterChain.doFilter(servletRequest,servletResponse);
            }else{
                // 请求url不包含
                wrapper.sendRedirect("/noPermission");
            }
        }
    }

    @Override
    public void destroy() {
        logger.info("LoginUserInfoFilter destroy");
    }
}
