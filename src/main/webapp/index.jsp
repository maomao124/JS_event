<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<h1><%= "Hello World!" %>
</h1>
<br/>
<a href="hello-servlet">Hello Servlet</a>
<br>
<%int n = 8;%>
<%
    for (int i = 0; i < n; i++)
    {

%>
<a href="t<%=(i+1)%>.html">t<%=(i + 1)%>.html</a>
<br>
<%
    }
%>
</body>
</html>