import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,h as e,o as i}from"./app-C1RP9YkL.js";const l={};function p(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h2 id="一、准备工作" tabindex="-1"><a class="header-anchor" href="#一、准备工作"><span>一、准备工作</span></a></h2><p>下载地址：<a href="https://github.com/alibaba/nacos/releases" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/nacos/releases</a></p><p>nacos官网：<a href="https://nacos.io/download/release-history/" target="_blank" rel="noopener noreferrer">https://nacos.io/download/release-history/</a></p><h2 id="安装及配置" tabindex="-1"><a class="header-anchor" href="#安装及配置"><span>安装及配置</span></a></h2><h3 id="_1、修改application-properties配置" tabindex="-1"><a class="header-anchor" href="#_1、修改application-properties配置"><span>1、修改application.properties配置：</span></a></h3><blockquote><p>D:\\software\\nacos\\nacos-server-2.3.1\\conf\\application.properties</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 放开mysql平台</span></span>
<span class="line"><span>spring.datasource.platform=mysql</span></span>
<span class="line"><span># spring.sql.init.platform=mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Count of DB:</span></span>
<span class="line"><span># db数量</span></span>
<span class="line"><span>db.num=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 修改mysql数据源，库、用户名、密码</span></span>
<span class="line"><span>db.url.0=jdbc:mysql://127.0.0.1:3306/lamp_nacos?characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useUnicode=true&amp;useSSL=false&amp;serverTimezone=UTC</span></span>
<span class="line"><span>db.user=root</span></span>
<span class="line"><span>db.password=root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nacos.core.auth.enabled=true</span></span>
<span class="line"><span>nacos.core.auth.server.identity.key=nacos</span></span>
<span class="line"><span>nacos.core.auth.server.identity.value=nacos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nacos.core.auth.plugin.nacos.token.cache.enable=false</span></span>
<span class="line"><span>nacos.core.auth.plugin.nacos.token.expire.seconds=18000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nacos.core.auth.plugin.nacos.token.secret.key=SecretKey012345678901234567890123456789012345678901234567890123456789</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>1、在配置 application.properties中修改对应数据库名、用户名、密码</p><p>2、设置了Nacos访问密码</p></blockquote><h3 id="_2、sql导入" tabindex="-1"><a class="header-anchor" href="#_2、sql导入"><span>2、sql导入</span></a></h3><p>创建数据库：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CREATE DATABASE IF NOT EXISTS \`lamp_nacos\` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>D:\\software\\nacos\\nacos-server-2.3.1\\conf\\mysql-schema.sql</p></blockquote><p>导入mysql-schema.sql脚本数据到 lamp_nacos库</p><h3 id="_3、启动nacos" tabindex="-1"><a class="header-anchor" href="#_3、启动nacos"><span>3、启动Nacos</span></a></h3><blockquote><p>在D:\\software\\nacos\\nacos\\bin执行cmd命令，并执行以下命令</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.\\startup.cmd -m standalone</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>访问地址：<a href="http://localhost:8848/nacos/index.html" target="_blank" rel="noopener noreferrer">http://localhost:8848/nacos/index.html</a></p><blockquote><p>用户名：nacos</p><p>密码：nacos</p></blockquote><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件"><span>附件</span></a></h2><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h3><p>阅读官方文档： <a href="https://nacos.io/zh-cn/docs/quick-start.html" target="_blank" rel="noopener noreferrer">https://nacos.io/zh-cn/docs/quick-start.html</a></p><p>nacos设置密码：<a href="https://blog.csdn.net/taotao_guiwang/article/details/135359247" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/taotao_guiwang/article/details/135359247</a></p><h3 id="具体配置" tabindex="-1"><a class="header-anchor" href="#具体配置"><span>具体配置</span></a></h3><blockquote><p>详细配置已修改：</p><p>D:\\software\\nacos\\nacos-server-2.3.1\\conf\\application.properties</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#</span></span>
<span class="line"><span># Copyright 1999-2021 Alibaba Group Holding Ltd.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span># you may not use this file except in compliance with the License.</span></span>
<span class="line"><span># You may obtain a copy of the License at</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#      http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span># distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span># WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span># See the License for the specific language governing permissions and</span></span>
<span class="line"><span># limitations under the License.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Spring Boot Related Configurations ***************#</span></span>
<span class="line"><span>### Default web context path:</span></span>
<span class="line"><span>server.servlet.contextPath=/nacos</span></span>
<span class="line"><span>### Include message field</span></span>
<span class="line"><span>server.error.include-message=ALWAYS</span></span>
<span class="line"><span>### Default web server port:</span></span>
<span class="line"><span>server.port=8848</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Network Related Configurations ***************#</span></span>
<span class="line"><span>### If prefer hostname over ip for Nacos server addresses in cluster.conf:</span></span>
<span class="line"><span># nacos.inetutils.prefer-hostname-over-ip=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Specify local server&#39;s IP:</span></span>
<span class="line"><span># nacos.inetutils.ip-address=</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Config Module Related Configurations ***************#</span></span>
<span class="line"><span>### If use MySQL as datasource:</span></span>
<span class="line"><span>### Deprecated configuration property, it is recommended to use \`spring.sql.init.platform\` replaced.</span></span>
<span class="line"><span>spring.datasource.platform=mysql</span></span>
<span class="line"><span># spring.sql.init.platform=mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Count of DB:</span></span>
<span class="line"><span>db.num=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Connect URL of DB:</span></span>
<span class="line"><span>db.url.0=jdbc:mysql://127.0.0.1:3306/lamp_nacos?characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useUnicode=true&amp;useSSL=false&amp;serverTimezone=UTC</span></span>
<span class="line"><span>db.user=root</span></span>
<span class="line"><span>db.password=root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Connection pool configuration: hikariCP</span></span>
<span class="line"><span>db.pool.config.connectionTimeout=30000</span></span>
<span class="line"><span>db.pool.config.validationTimeout=10000</span></span>
<span class="line"><span>db.pool.config.maximumPoolSize=20</span></span>
<span class="line"><span>db.pool.config.minimumIdle=2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### the maximum retry times for push</span></span>
<span class="line"><span>nacos.config.push.maxRetryTime=50</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Naming Module Related Configurations ***************#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### If enable data warmup. If set to false, the server would accept request without local data preparation:</span></span>
<span class="line"><span># nacos.naming.data.warmup=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### If enable the instance auto expiration, kind like of health check of instance:</span></span>
<span class="line"><span># nacos.naming.expireInstance=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Add in 2.0.0</span></span>
<span class="line"><span>### The interval to clean empty service, unit: milliseconds.</span></span>
<span class="line"><span># nacos.naming.clean.empty-service.interval=60000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The expired time to clean empty service, unit: milliseconds.</span></span>
<span class="line"><span># nacos.naming.clean.empty-service.expired-time=60000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The interval to clean expired metadata, unit: milliseconds.</span></span>
<span class="line"><span># nacos.naming.clean.expired-metadata.interval=5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The expired time to clean metadata, unit: milliseconds.</span></span>
<span class="line"><span># nacos.naming.clean.expired-metadata.expired-time=60000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The delay time before push task to execute from service changed, unit: milliseconds.</span></span>
<span class="line"><span># nacos.naming.push.pushTaskDelay=500</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The timeout for push task execute, unit: milliseconds.</span></span>
<span class="line"><span># nacos.naming.push.pushTaskTimeout=5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The delay time for retrying failed push task, unit: milliseconds.</span></span>
<span class="line"><span># nacos.naming.push.pushTaskRetryDelay=1000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Since 2.0.3</span></span>
<span class="line"><span>### The expired time for inactive client, unit: milliseconds.</span></span>
<span class="line"><span># nacos.naming.client.expired.time=180000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** CMDB Module Related Configurations ***************#</span></span>
<span class="line"><span>### The interval to dump external CMDB in seconds:</span></span>
<span class="line"><span># nacos.cmdb.dumpTaskInterval=3600</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The interval of polling data change event in seconds:</span></span>
<span class="line"><span># nacos.cmdb.eventTaskInterval=10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The interval of loading labels in seconds:</span></span>
<span class="line"><span># nacos.cmdb.labelTaskInterval=300</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### If turn on data loading task:</span></span>
<span class="line"><span># nacos.cmdb.loadDataAtStart=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#***********Metrics for tomcat **************************#</span></span>
<span class="line"><span>server.tomcat.mbeanregistry.enabled=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#***********Expose prometheus and health **************************#</span></span>
<span class="line"><span>#management.endpoints.web.exposure.include=prometheus,health</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Metrics for elastic search</span></span>
<span class="line"><span>management.metrics.export.elastic.enabled=false</span></span>
<span class="line"><span>#management.metrics.export.elastic.host=http://localhost:9200</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Metrics for influx</span></span>
<span class="line"><span>management.metrics.export.influx.enabled=false</span></span>
<span class="line"><span>#management.metrics.export.influx.db=springboot</span></span>
<span class="line"><span>#management.metrics.export.influx.uri=http://localhost:8086</span></span>
<span class="line"><span>#management.metrics.export.influx.auto-create-db=true</span></span>
<span class="line"><span>#management.metrics.export.influx.consistency=one</span></span>
<span class="line"><span>#management.metrics.export.influx.compressed=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Access Log Related Configurations ***************#</span></span>
<span class="line"><span>### If turn on the access log:</span></span>
<span class="line"><span>server.tomcat.accesslog.enabled=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### file name pattern, one file per hour</span></span>
<span class="line"><span>server.tomcat.accesslog.rotate=true</span></span>
<span class="line"><span>server.tomcat.accesslog.file-date-format=.yyyy-MM-dd-HH</span></span>
<span class="line"><span>### The access log pattern:</span></span>
<span class="line"><span>server.tomcat.accesslog.pattern=%h %l %u %t &quot;%r&quot; %s %b %D %{User-Agent}i %{Request-Source}i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The directory of access log:</span></span>
<span class="line"><span>server.tomcat.basedir=file:.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Access Control Related Configurations ***************#</span></span>
<span class="line"><span>### If enable spring security, this option is deprecated in 1.2.0:</span></span>
<span class="line"><span>#spring.security.enabled=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The ignore urls of auth</span></span>
<span class="line"><span>nacos.security.ignore.urls=/,/error,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-ui/public/**,/v1/auth/**,/v1/console/health/**,/actuator/**,/v1/console/server/**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### The auth system to use, currently only &#39;nacos&#39; and &#39;ldap&#39; is supported:</span></span>
<span class="line"><span>nacos.core.auth.system.type=nacos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### If turn on auth system:</span></span>
<span class="line"><span>nacos.core.auth.enabled=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Turn on/off caching of auth information. By turning on this switch, the update of auth information would have a 15 seconds delay.</span></span>
<span class="line"><span>nacos.core.auth.caching.enabled=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Since 1.4.1, Turn on/off white auth for user-agent: nacos-server, only for upgrade from old version.</span></span>
<span class="line"><span>nacos.core.auth.enable.userAgentAuthWhite=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Since 1.4.1, worked when nacos.core.auth.enabled=true and nacos.core.auth.enable.userAgentAuthWhite=false.</span></span>
<span class="line"><span>### The two properties is the white list for auth and used by identity the request from other server. </span></span>
<span class="line"><span>nacos.core.auth.server.identity.key=nacos</span></span>
<span class="line"><span>nacos.core.auth.server.identity.value=nacos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### worked when nacos.core.auth.system.type=nacos</span></span>
<span class="line"><span>### The token expiration in seconds:</span></span>
<span class="line"><span>nacos.core.auth.plugin.nacos.token.cache.enable=false</span></span>
<span class="line"><span>nacos.core.auth.plugin.nacos.token.expire.seconds=18000</span></span>
<span class="line"><span>### The default token (Base64 String):</span></span>
<span class="line"><span>nacos.core.auth.plugin.nacos.token.secret.key=SecretKey012345678901234567890123456789012345678901234567890123456789</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### worked when nacos.core.auth.system.type=ldap，{0} is Placeholder,replace login username</span></span>
<span class="line"><span>#nacos.core.auth.ldap.url=ldap://localhost:389</span></span>
<span class="line"><span>#nacos.core.auth.ldap.basedc=dc=example,dc=org</span></span>
<span class="line"><span>#nacos.core.auth.ldap.userDn=cn=admin,\${nacos.core.auth.ldap.basedc}</span></span>
<span class="line"><span>#nacos.core.auth.ldap.password=admin</span></span>
<span class="line"><span>#nacos.core.auth.ldap.userdn=cn={0},dc=example,dc=org</span></span>
<span class="line"><span>#nacos.core.auth.ldap.filter.prefix=uid</span></span>
<span class="line"><span>#nacos.core.auth.ldap.case.sensitive=true</span></span>
<span class="line"><span>#nacos.core.auth.ldap.ignore.partial.result.exception=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Control Plugin Related Configurations ***************#</span></span>
<span class="line"><span># plugin type</span></span>
<span class="line"><span>#nacos.plugin.control.manager.type=nacos</span></span>
<span class="line"><span></span></span>
<span class="line"><span># local control rule storage dir, default \${nacos.home}/data/connection and \${nacos.home}/data/tps</span></span>
<span class="line"><span>#nacos.plugin.control.rule.local.basedir=\${nacos.home}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># external control rule storage type, if exist</span></span>
<span class="line"><span>#nacos.plugin.control.rule.external.storage=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Config Change Plugin Related Configurations ***************#</span></span>
<span class="line"><span># webhook</span></span>
<span class="line"><span>#nacos.core.config.plugin.webhook.enabled=false</span></span>
<span class="line"><span># It is recommended to use EB https://help.aliyun.com/document_detail/413974.html</span></span>
<span class="line"><span>#nacos.core.config.plugin.webhook.url=http://localhost:8080/webhook/send?token=***</span></span>
<span class="line"><span># The content push max capacity ,byte</span></span>
<span class="line"><span>#nacos.core.config.plugin.webhook.contentMaxCapacity=102400</span></span>
<span class="line"><span></span></span>
<span class="line"><span># whitelist</span></span>
<span class="line"><span>#nacos.core.config.plugin.whitelist.enabled=false</span></span>
<span class="line"><span># The import file suffixs</span></span>
<span class="line"><span>#nacos.core.config.plugin.whitelist.suffixs=xml,text,properties,yaml,html</span></span>
<span class="line"><span># fileformatcheck,which validate the import file of type and content</span></span>
<span class="line"><span>#nacos.core.config.plugin.fileformatcheck.enabled=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Istio Related Configurations ***************#</span></span>
<span class="line"><span>### If turn on the MCP server:</span></span>
<span class="line"><span>nacos.istio.mcp.server.enabled=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Core Related Configurations ***************#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### set the WorkerID manually</span></span>
<span class="line"><span># nacos.core.snowflake.worker-id=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Member-MetaData</span></span>
<span class="line"><span># nacos.core.member.meta.site=</span></span>
<span class="line"><span># nacos.core.member.meta.adweight=</span></span>
<span class="line"><span># nacos.core.member.meta.weight=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### MemberLookup</span></span>
<span class="line"><span>### Addressing pattern category, If set, the priority is highest</span></span>
<span class="line"><span># nacos.core.member.lookup.type=[file,address-server]</span></span>
<span class="line"><span>## Set the cluster list with a configuration file or command-line argument</span></span>
<span class="line"><span># nacos.member.list=192.168.16.101:8847?raft_port=8807,192.168.16.101?raft_port=8808,192.168.16.101:8849?raft_port=8809</span></span>
<span class="line"><span>## for AddressServerMemberLookup</span></span>
<span class="line"><span># Maximum number of retries to query the address server upon initialization</span></span>
<span class="line"><span># nacos.core.address-server.retry=5</span></span>
<span class="line"><span>## Server domain name address of [address-server] mode</span></span>
<span class="line"><span># address.server.domain=jmenv.tbsite.net</span></span>
<span class="line"><span>## Server port of [address-server] mode</span></span>
<span class="line"><span># address.server.port=8080</span></span>
<span class="line"><span>## Request address of [address-server] mode</span></span>
<span class="line"><span># address.server.url=/nacos/serverlist</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** JRaft Related Configurations ***************#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Sets the Raft cluster election timeout, default value is 5 second</span></span>
<span class="line"><span># nacos.core.protocol.raft.data.election_timeout_ms=5000</span></span>
<span class="line"><span>### Sets the amount of time the Raft snapshot will execute periodically, default is 30 minute</span></span>
<span class="line"><span># nacos.core.protocol.raft.data.snapshot_interval_secs=30</span></span>
<span class="line"><span>### raft internal worker threads</span></span>
<span class="line"><span># nacos.core.protocol.raft.data.core_thread_num=8</span></span>
<span class="line"><span>### Number of threads required for raft business request processing</span></span>
<span class="line"><span># nacos.core.protocol.raft.data.cli_service_thread_num=4</span></span>
<span class="line"><span>### raft linear read strategy. Safe linear reads are used by default, that is, the Leader tenure is confirmed by heartbeat</span></span>
<span class="line"><span># nacos.core.protocol.raft.data.read_index_type=ReadOnlySafe</span></span>
<span class="line"><span>### rpc request timeout, default 5 seconds</span></span>
<span class="line"><span># nacos.core.protocol.raft.data.rpc_request_timeout_ms=5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#*************** Distro Related Configurations ***************#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Distro data sync delay time, when sync task delayed, task will be merged for same data key. Default 1 second.</span></span>
<span class="line"><span># nacos.core.protocol.distro.data.sync.delayMs=1000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Distro data sync timeout for one sync data, default 3 seconds.</span></span>
<span class="line"><span># nacos.core.protocol.distro.data.sync.timeoutMs=3000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Distro data sync retry delay time when sync data failed or timeout, same behavior with delayMs, default 3 seconds.</span></span>
<span class="line"><span># nacos.core.protocol.distro.data.sync.retryDelayMs=3000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Distro data verify interval time, verify synced data whether expired for a interval. Default 5 seconds.</span></span>
<span class="line"><span># nacos.core.protocol.distro.data.verify.intervalMs=5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Distro data verify timeout for one verify, default 3 seconds.</span></span>
<span class="line"><span># nacos.core.protocol.distro.data.verify.timeoutMs=3000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Distro data load retry delay when load snapshot data failed, default 30 seconds.</span></span>
<span class="line"><span># nacos.core.protocol.distro.data.load.retryDelayMs=30000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### enable to support prometheus service discovery</span></span>
<span class="line"><span>#nacos.prometheus.metrics.enabled=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Since 2.3</span></span>
<span class="line"><span>#*************** Grpc Configurations ***************#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## sdk grpc(between nacos server and client) configuration</span></span>
<span class="line"><span>## Sets the maximum message size allowed to be received on the server.</span></span>
<span class="line"><span>#nacos.remote.server.grpc.sdk.max-inbound-message-size=10485760</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Sets the time(milliseconds) without read activity before sending a keepalive ping. The typical default is two hours.</span></span>
<span class="line"><span>#nacos.remote.server.grpc.sdk.keep-alive-time=7200000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Sets a time(milliseconds) waiting for read activity after sending a keepalive ping. Defaults to 20 seconds.</span></span>
<span class="line"><span>#nacos.remote.server.grpc.sdk.keep-alive-timeout=20000</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Sets a time(milliseconds) that specify the most aggressive keep-alive time clients are permitted to configure. The typical default is 5 minutes</span></span>
<span class="line"><span>#nacos.remote.server.grpc.sdk.permit-keep-alive-time=300000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## cluster grpc(inside the nacos server) configuration</span></span>
<span class="line"><span>#nacos.remote.server.grpc.cluster.max-inbound-message-size=10485760</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Sets the time(milliseconds) without read activity before sending a keepalive ping. The typical default is two hours.</span></span>
<span class="line"><span>#nacos.remote.server.grpc.cluster.keep-alive-time=7200000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Sets a time(milliseconds) waiting for read activity after sending a keepalive ping. Defaults to 20 seconds.</span></span>
<span class="line"><span>#nacos.remote.server.grpc.cluster.keep-alive-timeout=20000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Sets a time(milliseconds) that specify the most aggressive keep-alive time clients are permitted to configure. The typical default is 5 minutes</span></span>
<span class="line"><span>#nacos.remote.server.grpc.cluster.permit-keep-alive-time=300000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## open nacos default console ui</span></span>
<span class="line"><span>#nacos.console.ui.enabled=true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql脚本" tabindex="-1"><a class="header-anchor" href="#sql脚本"><span>sql脚本</span></a></h3><blockquote><p>mysql数据库</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/*</span></span>
<span class="line"><span> * Copyright 1999-2018 Alibaba Group Holding Ltd.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span> * you may not use this file except in compliance with the License.</span></span>
<span class="line"><span> * You may obtain a copy of the License at</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *      http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span> * See the License for the specific language governing permissions and</span></span>
<span class="line"><span> * limitations under the License.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>/*   表名称 = config_info                  */</span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>CREATE TABLE \`config_info\` (</span></span>
<span class="line"><span>  \`id\` bigint(20) NOT NULL AUTO_INCREMENT COMMENT &#39;id&#39;,</span></span>
<span class="line"><span>  \`data_id\` varchar(255) NOT NULL COMMENT &#39;data_id&#39;,</span></span>
<span class="line"><span>  \`group_id\` varchar(128) DEFAULT NULL COMMENT &#39;group_id&#39;,</span></span>
<span class="line"><span>  \`content\` longtext NOT NULL COMMENT &#39;content&#39;,</span></span>
<span class="line"><span>  \`md5\` varchar(32) DEFAULT NULL COMMENT &#39;md5&#39;,</span></span>
<span class="line"><span>  \`gmt_create\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>  \`gmt_modified\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;修改时间&#39;,</span></span>
<span class="line"><span>  \`src_user\` text COMMENT &#39;source user&#39;,</span></span>
<span class="line"><span>  \`src_ip\` varchar(50) DEFAULT NULL COMMENT &#39;source ip&#39;,</span></span>
<span class="line"><span>  \`app_name\` varchar(128) DEFAULT NULL COMMENT &#39;app_name&#39;,</span></span>
<span class="line"><span>  \`tenant_id\` varchar(128) DEFAULT &#39;&#39; COMMENT &#39;租户字段&#39;,</span></span>
<span class="line"><span>  \`c_desc\` varchar(256) DEFAULT NULL COMMENT &#39;configuration description&#39;,</span></span>
<span class="line"><span>  \`c_use\` varchar(64) DEFAULT NULL COMMENT &#39;configuration usage&#39;,</span></span>
<span class="line"><span>  \`effect\` varchar(64) DEFAULT NULL COMMENT &#39;配置生效的描述&#39;,</span></span>
<span class="line"><span>  \`type\` varchar(64) DEFAULT NULL COMMENT &#39;配置的类型&#39;,</span></span>
<span class="line"><span>  \`c_schema\` text COMMENT &#39;配置的模式&#39;,</span></span>
<span class="line"><span>  \`encrypted_data_key\` text NOT NULL COMMENT &#39;密钥&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`uk_configinfo_datagrouptenant\` (\`data_id\`,\`group_id\`,\`tenant_id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT=&#39;config_info&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>/*   表名称 = config_info_aggr             */</span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>CREATE TABLE \`config_info_aggr\` (</span></span>
<span class="line"><span>  \`id\` bigint(20) NOT NULL AUTO_INCREMENT COMMENT &#39;id&#39;,</span></span>
<span class="line"><span>  \`data_id\` varchar(255) NOT NULL COMMENT &#39;data_id&#39;,</span></span>
<span class="line"><span>  \`group_id\` varchar(128) NOT NULL COMMENT &#39;group_id&#39;,</span></span>
<span class="line"><span>  \`datum_id\` varchar(255) NOT NULL COMMENT &#39;datum_id&#39;,</span></span>
<span class="line"><span>  \`content\` longtext NOT NULL COMMENT &#39;内容&#39;,</span></span>
<span class="line"><span>  \`gmt_modified\` datetime NOT NULL COMMENT &#39;修改时间&#39;,</span></span>
<span class="line"><span>  \`app_name\` varchar(128) DEFAULT NULL COMMENT &#39;app_name&#39;,</span></span>
<span class="line"><span>  \`tenant_id\` varchar(128) DEFAULT &#39;&#39; COMMENT &#39;租户字段&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`uk_configinfoaggr_datagrouptenantdatum\` (\`data_id\`,\`group_id\`,\`tenant_id\`,\`datum_id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT=&#39;增加租户字段&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>/*   表名称 = config_info_beta             */</span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>CREATE TABLE \`config_info_beta\` (</span></span>
<span class="line"><span>  \`id\` bigint(20) NOT NULL AUTO_INCREMENT COMMENT &#39;id&#39;,</span></span>
<span class="line"><span>  \`data_id\` varchar(255) NOT NULL COMMENT &#39;data_id&#39;,</span></span>
<span class="line"><span>  \`group_id\` varchar(128) NOT NULL COMMENT &#39;group_id&#39;,</span></span>
<span class="line"><span>  \`app_name\` varchar(128) DEFAULT NULL COMMENT &#39;app_name&#39;,</span></span>
<span class="line"><span>  \`content\` longtext NOT NULL COMMENT &#39;content&#39;,</span></span>
<span class="line"><span>  \`beta_ips\` varchar(1024) DEFAULT NULL COMMENT &#39;betaIps&#39;,</span></span>
<span class="line"><span>  \`md5\` varchar(32) DEFAULT NULL COMMENT &#39;md5&#39;,</span></span>
<span class="line"><span>  \`gmt_create\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>  \`gmt_modified\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;修改时间&#39;,</span></span>
<span class="line"><span>  \`src_user\` text COMMENT &#39;source user&#39;,</span></span>
<span class="line"><span>  \`src_ip\` varchar(50) DEFAULT NULL COMMENT &#39;source ip&#39;,</span></span>
<span class="line"><span>  \`tenant_id\` varchar(128) DEFAULT &#39;&#39; COMMENT &#39;租户字段&#39;,</span></span>
<span class="line"><span>  \`encrypted_data_key\` text NOT NULL COMMENT &#39;密钥&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`uk_configinfobeta_datagrouptenant\` (\`data_id\`,\`group_id\`,\`tenant_id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT=&#39;config_info_beta&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>/*   表名称 = config_info_tag              */</span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>CREATE TABLE \`config_info_tag\` (</span></span>
<span class="line"><span>  \`id\` bigint(20) NOT NULL AUTO_INCREMENT COMMENT &#39;id&#39;,</span></span>
<span class="line"><span>  \`data_id\` varchar(255) NOT NULL COMMENT &#39;data_id&#39;,</span></span>
<span class="line"><span>  \`group_id\` varchar(128) NOT NULL COMMENT &#39;group_id&#39;,</span></span>
<span class="line"><span>  \`tenant_id\` varchar(128) DEFAULT &#39;&#39; COMMENT &#39;tenant_id&#39;,</span></span>
<span class="line"><span>  \`tag_id\` varchar(128) NOT NULL COMMENT &#39;tag_id&#39;,</span></span>
<span class="line"><span>  \`app_name\` varchar(128) DEFAULT NULL COMMENT &#39;app_name&#39;,</span></span>
<span class="line"><span>  \`content\` longtext NOT NULL COMMENT &#39;content&#39;,</span></span>
<span class="line"><span>  \`md5\` varchar(32) DEFAULT NULL COMMENT &#39;md5&#39;,</span></span>
<span class="line"><span>  \`gmt_create\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>  \`gmt_modified\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;修改时间&#39;,</span></span>
<span class="line"><span>  \`src_user\` text COMMENT &#39;source user&#39;,</span></span>
<span class="line"><span>  \`src_ip\` varchar(50) DEFAULT NULL COMMENT &#39;source ip&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`uk_configinfotag_datagrouptenanttag\` (\`data_id\`,\`group_id\`,\`tenant_id\`,\`tag_id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT=&#39;config_info_tag&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>/*   表名称 = config_tags_relation         */</span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>CREATE TABLE \`config_tags_relation\` (</span></span>
<span class="line"><span>  \`id\` bigint(20) NOT NULL COMMENT &#39;id&#39;,</span></span>
<span class="line"><span>  \`tag_name\` varchar(128) NOT NULL COMMENT &#39;tag_name&#39;,</span></span>
<span class="line"><span>  \`tag_type\` varchar(64) DEFAULT NULL COMMENT &#39;tag_type&#39;,</span></span>
<span class="line"><span>  \`data_id\` varchar(255) NOT NULL COMMENT &#39;data_id&#39;,</span></span>
<span class="line"><span>  \`group_id\` varchar(128) NOT NULL COMMENT &#39;group_id&#39;,</span></span>
<span class="line"><span>  \`tenant_id\` varchar(128) DEFAULT &#39;&#39; COMMENT &#39;tenant_id&#39;,</span></span>
<span class="line"><span>  \`nid\` bigint(20) NOT NULL AUTO_INCREMENT COMMENT &#39;nid, 自增长标识&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`nid\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`uk_configtagrelation_configidtag\` (\`id\`,\`tag_name\`,\`tag_type\`),</span></span>
<span class="line"><span>  KEY \`idx_tenant_id\` (\`tenant_id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT=&#39;config_tag_relation&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>/*   表名称 = group_capacity               */</span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>CREATE TABLE \`group_capacity\` (</span></span>
<span class="line"><span>  \`id\` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT &#39;主键ID&#39;,</span></span>
<span class="line"><span>  \`group_id\` varchar(128) NOT NULL DEFAULT &#39;&#39; COMMENT &#39;Group ID，空字符表示整个集群&#39;,</span></span>
<span class="line"><span>  \`quota\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;配额，0表示使用默认值&#39;,</span></span>
<span class="line"><span>  \`usage\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;使用量&#39;,</span></span>
<span class="line"><span>  \`max_size\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;单个配置大小上限，单位为字节，0表示使用默认值&#39;,</span></span>
<span class="line"><span>  \`max_aggr_count\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;聚合子配置最大个数，，0表示使用默认值&#39;,</span></span>
<span class="line"><span>  \`max_aggr_size\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值&#39;,</span></span>
<span class="line"><span>  \`max_history_count\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;最大变更历史数量&#39;,</span></span>
<span class="line"><span>  \`gmt_create\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>  \`gmt_modified\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;修改时间&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`uk_group_id\` (\`group_id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT=&#39;集群、各Group容量信息表&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>/*   表名称 = his_config_info              */</span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>CREATE TABLE \`his_config_info\` (</span></span>
<span class="line"><span>  \`id\` bigint(20) unsigned NOT NULL COMMENT &#39;id&#39;,</span></span>
<span class="line"><span>  \`nid\` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT &#39;nid, 自增标识&#39;,</span></span>
<span class="line"><span>  \`data_id\` varchar(255) NOT NULL COMMENT &#39;data_id&#39;,</span></span>
<span class="line"><span>  \`group_id\` varchar(128) NOT NULL COMMENT &#39;group_id&#39;,</span></span>
<span class="line"><span>  \`app_name\` varchar(128) DEFAULT NULL COMMENT &#39;app_name&#39;,</span></span>
<span class="line"><span>  \`content\` longtext NOT NULL COMMENT &#39;content&#39;,</span></span>
<span class="line"><span>  \`md5\` varchar(32) DEFAULT NULL COMMENT &#39;md5&#39;,</span></span>
<span class="line"><span>  \`gmt_create\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>  \`gmt_modified\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;修改时间&#39;,</span></span>
<span class="line"><span>  \`src_user\` text COMMENT &#39;source user&#39;,</span></span>
<span class="line"><span>  \`src_ip\` varchar(50) DEFAULT NULL COMMENT &#39;source ip&#39;,</span></span>
<span class="line"><span>  \`op_type\` char(10) DEFAULT NULL COMMENT &#39;operation type&#39;,</span></span>
<span class="line"><span>  \`tenant_id\` varchar(128) DEFAULT &#39;&#39; COMMENT &#39;租户字段&#39;,</span></span>
<span class="line"><span>  \`encrypted_data_key\` text NOT NULL COMMENT &#39;密钥&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`nid\`),</span></span>
<span class="line"><span>  KEY \`idx_gmt_create\` (\`gmt_create\`),</span></span>
<span class="line"><span>  KEY \`idx_gmt_modified\` (\`gmt_modified\`),</span></span>
<span class="line"><span>  KEY \`idx_did\` (\`data_id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT=&#39;多租户改造&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>/*   表名称 = tenant_capacity              */</span></span>
<span class="line"><span>/******************************************/</span></span>
<span class="line"><span>CREATE TABLE \`tenant_capacity\` (</span></span>
<span class="line"><span>  \`id\` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT &#39;主键ID&#39;,</span></span>
<span class="line"><span>  \`tenant_id\` varchar(128) NOT NULL DEFAULT &#39;&#39; COMMENT &#39;Tenant ID&#39;,</span></span>
<span class="line"><span>  \`quota\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;配额，0表示使用默认值&#39;,</span></span>
<span class="line"><span>  \`usage\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;使用量&#39;,</span></span>
<span class="line"><span>  \`max_size\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;单个配置大小上限，单位为字节，0表示使用默认值&#39;,</span></span>
<span class="line"><span>  \`max_aggr_count\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;聚合子配置最大个数&#39;,</span></span>
<span class="line"><span>  \`max_aggr_size\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值&#39;,</span></span>
<span class="line"><span>  \`max_history_count\` int(10) unsigned NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;最大变更历史数量&#39;,</span></span>
<span class="line"><span>  \`gmt_create\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>  \`gmt_modified\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;修改时间&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`uk_tenant_id\` (\`tenant_id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT=&#39;租户容量信息表&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE \`tenant_info\` (</span></span>
<span class="line"><span>  \`id\` bigint(20) NOT NULL AUTO_INCREMENT COMMENT &#39;id&#39;,</span></span>
<span class="line"><span>  \`kp\` varchar(128) NOT NULL COMMENT &#39;kp&#39;,</span></span>
<span class="line"><span>  \`tenant_id\` varchar(128) default &#39;&#39; COMMENT &#39;tenant_id&#39;,</span></span>
<span class="line"><span>  \`tenant_name\` varchar(128) default &#39;&#39; COMMENT &#39;tenant_name&#39;,</span></span>
<span class="line"><span>  \`tenant_desc\` varchar(256) DEFAULT NULL COMMENT &#39;tenant_desc&#39;,</span></span>
<span class="line"><span>  \`create_source\` varchar(32) DEFAULT NULL COMMENT &#39;create_source&#39;,</span></span>
<span class="line"><span>  \`gmt_create\` bigint(20) NOT NULL COMMENT &#39;创建时间&#39;,</span></span>
<span class="line"><span>  \`gmt_modified\` bigint(20) NOT NULL COMMENT &#39;修改时间&#39;,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`uk_tenant_info_kptenantid\` (\`kp\`,\`tenant_id\`),</span></span>
<span class="line"><span>  KEY \`idx_tenant_id\` (\`tenant_id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT=&#39;tenant_info&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE \`users\` (</span></span>
<span class="line"><span>	\`username\` varchar(50) NOT NULL PRIMARY KEY COMMENT &#39;username&#39;,</span></span>
<span class="line"><span>	\`password\` varchar(500) NOT NULL COMMENT &#39;password&#39;,</span></span>
<span class="line"><span>	\`enabled\` boolean NOT NULL COMMENT &#39;enabled&#39;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE \`roles\` (</span></span>
<span class="line"><span>	\`username\` varchar(50) NOT NULL COMMENT &#39;username&#39;,</span></span>
<span class="line"><span>	\`role\` varchar(50) NOT NULL COMMENT &#39;role&#39;,</span></span>
<span class="line"><span>	UNIQUE INDEX \`idx_user_role\` (\`username\` ASC, \`role\` ASC) USING BTREE</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE \`permissions\` (</span></span>
<span class="line"><span>    \`role\` varchar(50) NOT NULL COMMENT &#39;role&#39;,</span></span>
<span class="line"><span>    \`resource\` varchar(128) NOT NULL COMMENT &#39;resource&#39;,</span></span>
<span class="line"><span>    \`action\` varchar(8) NOT NULL COMMENT &#39;action&#39;,</span></span>
<span class="line"><span>    UNIQUE INDEX \`uk_role_permission\` (\`role\`,\`resource\`,\`action\`) USING BTREE</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO users (username, password, enabled) VALUES (&#39;nacos&#39;, &#39;$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu&#39;, TRUE);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO roles (username, role) VALUES (&#39;nacos&#39;, &#39;ROLE_ADMIN&#39;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28)]))}const t=s(l,[["render",p],["__file","3-nacos-server-2.3.2-安装及配置.html.vue"]]),v=JSON.parse('{"path":"/java/pracprojects/lamp-project/3-nacos-server-2.3.2-%E5%AE%89%E8%A3%85%E5%8F%8A%E9%85%8D%E7%BD%AE.html","title":"3-nacos-server-2.3.2-安装及配置","lang":"zh-CN","frontmatter":{"title":"3-nacos-server-2.3.2-安装及配置","icon":"feather-pointed","category":["lamp-cloud"],"tag":["nacos"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2024-07-04T15:37:17.000Z","gitInclude":[],"description":"一、准备工作 下载地址：https://github.com/alibaba/nacos/releases nacos官网：https://nacos.io/download/release-history/ 安装及配置 1、修改application.properties配置： D:\\\\software\\\\nacos\\\\nacos-server-2.3.1...","head":[["meta",{"property":"og:url","content":"https://blog.lxip.top/java/pracprojects/lamp-project/3-nacos-server-2.3.2-%E5%AE%89%E8%A3%85%E5%8F%8A%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"3-nacos-server-2.3.2-安装及配置"}],["meta",{"property":"og:description","content":"一、准备工作 下载地址：https://github.com/alibaba/nacos/releases nacos官网：https://nacos.io/download/release-history/ 安装及配置 1、修改application.properties配置： D:\\\\software\\\\nacos\\\\nacos-server-2.3.1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"nacos"}],["meta",{"property":"article:published_time","content":"2024-07-04T15:37:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3-nacos-server-2.3.2-安装及配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-04T15:37:17.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"一、准备工作","slug":"一、准备工作","link":"#一、准备工作","children":[]},{"level":2,"title":"安装及配置","slug":"安装及配置","link":"#安装及配置","children":[{"level":3,"title":"1、修改application.properties配置：","slug":"_1、修改application-properties配置","link":"#_1、修改application-properties配置","children":[]},{"level":3,"title":"2、sql导入","slug":"_2、sql导入","link":"#_2、sql导入","children":[]},{"level":3,"title":"3、启动Nacos","slug":"_3、启动nacos","link":"#_3、启动nacos","children":[]}]},{"level":2,"title":"附件","slug":"附件","link":"#附件","children":[{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]},{"level":3,"title":"具体配置","slug":"具体配置","link":"#具体配置","children":[]},{"level":3,"title":"sql脚本","slug":"sql脚本","link":"#sql脚本","children":[]}]}],"readingTime":{"minutes":10.37,"words":3112},"filePathRelative":"java/pracprojects/lamp-project/3-nacos-server-2.3.2-安装及配置.md","localizedDate":"2024年7月4日","excerpt":"","autoDesc":true}');export{t as comp,v as data};
