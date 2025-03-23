import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,h as e,o as i}from"./app-BgLJQgKS.js";const p="/assets/2023-12-27_10-20-02-BbLp1vbb.png",l="/assets/2023-12-27_10-21-43-D9pa3HJ6.png",r={};function t(c,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h2 id="xxl-job" tabindex="-1"><a class="header-anchor" href="#xxl-job"><span>xxl-job</span></a></h2><p>拉取镜像：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker pull xuxueli/xxl-job-admin:2.3.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>启动容器：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker run -d --name=xxl-job-admin \\</span></span>
<span class="line"><span>-p 8088:8080 \\</span></span>
<span class="line"><span>-v /root/docker-data/xxl-job/application.properties:/application.properties \\</span></span>
<span class="line"><span>-v /root/docker-data/xxl-job/applogs:/data/applogs \\</span></span>
<span class="line"><span>xuxueli/xxl-job-admin:2.3.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>/root/docker-data/xxl-job/application.properties 其中的application.properties文件需要从xxl-job项目中拿到，并需要要修改数据库连接账号密码，然后就是</p></blockquote><p>application.properties</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>### web</span></span>
<span class="line"><span>server.port=8080</span></span>
<span class="line"><span>server.servlet.context-path=/xxl-job-admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### actuator</span></span>
<span class="line"><span>management.server.servlet.context-path=/actuator</span></span>
<span class="line"><span>management.health.mail.enabled=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### resources</span></span>
<span class="line"><span>spring.mvc.servlet.load-on-startup=0</span></span>
<span class="line"><span>spring.mvc.static-path-pattern=/static/**</span></span>
<span class="line"><span>spring.resources.static-locations=classpath:/static/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### freemarker</span></span>
<span class="line"><span>spring.freemarker.templateLoaderPath=classpath:/templates/</span></span>
<span class="line"><span>spring.freemarker.suffix=.ftl</span></span>
<span class="line"><span>spring.freemarker.charset=UTF-8</span></span>
<span class="line"><span>spring.freemarker.request-context-attribute=request</span></span>
<span class="line"><span>spring.freemarker.settings.number_format=0.##########</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### mybatis</span></span>
<span class="line"><span>mybatis.mapper-locations=classpath:/mybatis-mapper/*Mapper.xml</span></span>
<span class="line"><span>#mybatis.type-aliases-package=com.xxl.job.admin.core.model</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### xxl-job, datasource</span></span>
<span class="line"><span>spring.datasource.url=jdbc:mysql://172.17.0.1:3306/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai</span></span>
<span class="line"><span>spring.datasource.username=root</span></span>
<span class="line"><span>spring.datasource.password=123456</span></span>
<span class="line"><span>spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### datasource-pool</span></span>
<span class="line"><span>spring.datasource.type=com.zaxxer.hikari.HikariDataSource</span></span>
<span class="line"><span>spring.datasource.hikari.minimum-idle=10</span></span>
<span class="line"><span>spring.datasource.hikari.maximum-pool-size=30</span></span>
<span class="line"><span>spring.datasource.hikari.auto-commit=true</span></span>
<span class="line"><span>spring.datasource.hikari.idle-timeout=30000</span></span>
<span class="line"><span>spring.datasource.hikari.pool-name=HikariCP</span></span>
<span class="line"><span>spring.datasource.hikari.max-lifetime=900000</span></span>
<span class="line"><span>spring.datasource.hikari.connection-timeout=10000</span></span>
<span class="line"><span>spring.datasource.hikari.connection-test-query=SELECT 1</span></span>
<span class="line"><span>spring.datasource.hikari.validation-timeout=1000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### xxl-job, email</span></span>
<span class="line"><span>spring.mail.host=smtp.qq.com</span></span>
<span class="line"><span>spring.mail.port=25</span></span>
<span class="line"><span>spring.mail.username=xxx@qq.com</span></span>
<span class="line"><span>spring.mail.from=xxx@qq.com</span></span>
<span class="line"><span>spring.mail.password=xxx</span></span>
<span class="line"><span>spring.mail.properties.mail.smtp.auth=true</span></span>
<span class="line"><span>spring.mail.properties.mail.smtp.starttls.enable=true</span></span>
<span class="line"><span>spring.mail.properties.mail.smtp.starttls.required=true</span></span>
<span class="line"><span>spring.mail.properties.mail.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### xxl-job, access token</span></span>
<span class="line"><span>xxl.job.accessToken=default_token</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### xxl-job, i18n (default is zh_CN, and you can choose &quot;zh_CN&quot;, &quot;zh_TC&quot; and &quot;en&quot;)</span></span>
<span class="line"><span>xxl.job.i18n=zh_CN</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## xxl-job, triggerpool max size</span></span>
<span class="line"><span>xxl.job.triggerpool.fast.max=200</span></span>
<span class="line"><span>xxl.job.triggerpool.slow.max=100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### xxl-job, log retention days</span></span>
<span class="line"><span>xxl.job.logretentiondays=30</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xxl-job连接数据库问题" tabindex="-1"><a class="header-anchor" href="#xxl-job连接数据库问题"><span>xxl-job连接数据库问题</span></a></h3><p>背景：</p><p>在项目中需要定时任务调度，需要在docker容器中安装xxl-job</p><p>遇到的问题</p><p>部署成功后，可以访问xxl-job登录界面，点登录没反应，但过一段时间就弹出数据库拒绝连接，说MyBatis连接用户失败</p><p>原因：</p><p>在docker容器中，不同容器直接是相互隔离互不影响的，如果使用localhost、或者127.0.0.1是无法生效的。</p><p>解决方法：</p><p>思路：</p><p>1、先检查需要连接的数据库用户名和密码是否正确</p><p>2、如果是docker中不同容器之间的连接访问，就需要检查服务器内网地址。</p><p>3、检测映射的端口是否对应</p><p>方法：</p><p>查看服务器内网ip地址：<br><img src="`+p+'" alt="" loading="lazy"></p><p>修改application.properties配置：</p><p>数据库连接地址和密码</p><p>或者使用：容器名加端口号的方式访问，例如我的mysql数据库的容器名是 n_mysql</p><p>则</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>spring.datasource.url=jdbc:mysql://n_mysql:3306/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意：这些操作都是在同一服务器上操作的</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在操作这些步骤中，可能有其他原因：</p><p>1、是否在同一服务器中操作的，不同服务器之间就不能直接使用局域网ip地址，需要使用公网ip进行访问连接数据库</p><p>2、在创建容器时，映射地址是否正确（不限于，路径名称）</p><p>3、检测防火墙是否放行相应的端口，不过都能访问后台地址了，不会是防火墙的问题</p><p>扩展：</p><blockquote><p>docker内的应用访问宿主机上的mysql和Redis<br> 背景：宿主机部署MySQL、Redis，docker内部署tomcat、jdk<br> 需求：tomcat内的应用访问宿主机的MySQL和Redis<br> 方法：<br> 一、连接地址切记不能用localhost和127.0.0.1<br> 这些地址代表的都是容器内的系统，根本没有访问到宿主机，会一直报连接mysql/redis异常。<br> 二、用docker的虚拟网卡地址<br> 在宿主机查询网卡情况------ifconfig<br> docker0这块虚拟网卡的 inet 地址就是正确的本地ip(如172.17.0.1)</p></blockquote>',35)]))}const m=a(r,[["render",t],["__file","docker之xxl-job.html.vue"]]),b=JSON.parse('{"path":"/om/docker/docker%E4%B9%8Bxxl-job.html","title":"docker之xxl-job","lang":"zh-CN","frontmatter":{"title":"docker之xxl-job","icon":"feather-pointed","category":["docker","安装教程"],"tag":["xxl-job","任务调度"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2023-11-02T10:00:13.000Z","gitInclude":[],"description":"xxl-job 拉取镜像： 启动容器： /root/docker-data/xxl-job/application.properties 其中的application.properties文件需要从xxl-job项目中拿到，并需要要修改数据库连接账号密码，然后就是 application.properties xxl-job连接数据库问题 背景： 在项...","head":[["meta",{"property":"og:url","content":"https://blog.lxip.top/om/docker/docker%E4%B9%8Bxxl-job.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"docker之xxl-job"}],["meta",{"property":"og:description","content":"xxl-job 拉取镜像： 启动容器： /root/docker-data/xxl-job/application.properties 其中的application.properties文件需要从xxl-job项目中拿到，并需要要修改数据库连接账号密码，然后就是 application.properties xxl-job连接数据库问题 背景： 在项..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"xxl-job"}],["meta",{"property":"article:tag","content":"任务调度"}],["meta",{"property":"article:published_time","content":"2023-11-02T10:00:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker之xxl-job\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-02T10:00:13.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"xxl-job","slug":"xxl-job","link":"#xxl-job","children":[{"level":3,"title":"xxl-job连接数据库问题","slug":"xxl-job连接数据库问题","link":"#xxl-job连接数据库问题","children":[]}]}],"readingTime":{"minutes":3.04,"words":911},"filePathRelative":"om/docker/docker之xxl-job.md","localizedDate":"2023年11月2日","excerpt":"","autoDesc":true}');export{m as comp,b as data};
