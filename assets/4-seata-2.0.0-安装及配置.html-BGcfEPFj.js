import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,h as i,o as e}from"./app-DIgOGPcn.js";const l="/assets/image-20240704144834193-CaEJ4kbf.png",p={};function t(r,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h2 id="一、准备工作" tabindex="-1"><a class="header-anchor" href="#一、准备工作"><span>一、准备工作</span></a></h2><p>下载地址：<a href="https://seata.apache.org/zh-cn/unversioned/download/seata-server/" target="_blank" rel="noopener noreferrer">https://seata.apache.org/zh-cn/unversioned/download/seata-server/</a></p><blockquote><p>Sentinel Version：1.8.6及以上</p></blockquote><h2 id="二、修改配置及启动" tabindex="-1"><a class="header-anchor" href="#二、修改配置及启动"><span>二、修改配置及启动</span></a></h2><blockquote><p>seata安装教程：<a href="https://blog.csdn.net/jokeMqc/article/details/136323218" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/jokeMqc/article/details/136323218</a></p></blockquote><h3 id="_2-1、安装" tabindex="-1"><a class="header-anchor" href="#_2-1、安装"><span>2.1、安装</span></a></h3><blockquote><p>解压到指定位置</p></blockquote><h3 id="_2-2、创建库" tabindex="-1"><a class="header-anchor" href="#_2-2、创建库"><span>2.2、创建库</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>CREATE DATABASE \`lamp_seata\` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-3、导入sql脚本" tabindex="-1"><a class="header-anchor" href="#_2-3、导入sql脚本"><span>2.3、导入sql脚本</span></a></h3><p>导入sql脚本到lamp_seata</p><blockquote><p>D:\\software\\seata\\seata-server-2.0.0\\script\\server\\db\\mysql.sql</p></blockquote><h3 id="_2-4、修改配置application-yml" tabindex="-1"><a class="header-anchor" href="#_2-4、修改配置application-yml"><span>2.4、修改配置application.yml</span></a></h3><blockquote><p>D:\\software\\seata\\seata-server-2.0.0\\conf\\application.yml</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>seata:</span></span>
<span class="line"><span>  config:</span></span>
<span class="line"><span>    # support: nacos, consul, apollo, zk, etcd3</span></span>
<span class="line"><span>    type: nacos</span></span>
<span class="line"><span>    nacos:      </span></span>
<span class="line"><span>      server-addr: 127.0.0.1:8848</span></span>
<span class="line"><span>      namespace: 5b51e46a-4aeb-4d40-8398-8a9d33e2f0ad</span></span>
<span class="line"><span>      group: SEATA_GROUP</span></span>
<span class="line"><span>      username: nacos</span></span>
<span class="line"><span>      password: nacos</span></span>
<span class="line"><span>      data-id: seataServer.properties</span></span>
<span class="line"><span>      context-path:</span></span>
<span class="line"><span>      ##if use MSE Nacos with auth, mutex with username/password attribute</span></span>
<span class="line"><span>      #access-key:</span></span>
<span class="line"><span>      #secret-key:</span></span>
<span class="line"><span>  registry:</span></span>
<span class="line"><span>    # support: nacos, eureka, redis, zk, consul, etcd3, sofa</span></span>
<span class="line"><span>    type: nacos</span></span>
<span class="line"><span>    nacos:</span></span>
<span class="line"><span>      application: seata-server</span></span>
<span class="line"><span>      server-addr: 127.0.0.1:8848</span></span>
<span class="line"><span>      group: SEATA_GROUP</span></span>
<span class="line"><span>      namespace: 5b51e46a-4aeb-4d40-8398-8a9d33e2f0ad</span></span>
<span class="line"><span>      cluster: default</span></span>
<span class="line"><span>      username: nacos</span></span>
<span class="line"><span>      password: nacos</span></span>
<span class="line"><span>      context-path:</span></span>
<span class="line"><span>      ##if use MSE Nacos with auth, mutex with username/password attribute</span></span>
<span class="line"><span>      #access-key:</span></span>
<span class="line"><span>      #secret-key:</span></span>
<span class="line"><span>  store:</span></span>
<span class="line"><span>    # support: file 、 db 、 redis</span></span>
<span class="line"><span>    mode: db</span></span>
<span class="line"><span>    db:</span></span>
<span class="line"><span>      datasource: druid</span></span>
<span class="line"><span>      db-type: mysql</span></span>
<span class="line"><span>      driver-class-name: com.mysql.jdbc.Driver</span></span>
<span class="line"><span>      url: jdbc:mysql://127.0.0.1:3306/lamp_seata?useUnicode=true&amp;rewriteBatchedStatements=true&amp;serverTimezone=GMT</span></span>
<span class="line"><span>      user: root</span></span>
<span class="line"><span>      password: root</span></span>
<span class="line"><span>      min-conn: 10</span></span>
<span class="line"><span>      max-conn: 100</span></span>
<span class="line"><span>      global-table: global_table</span></span>
<span class="line"><span>      branch-table: branch_table</span></span>
<span class="line"><span>      lock-table: lock_table</span></span>
<span class="line"><span>      distributed-lock-table: distributed_lock</span></span>
<span class="line"><span>      query-limit: 1000</span></span>
<span class="line"><span>      max-wait: 5000  </span></span>
<span class="line"><span>#  server:</span></span>
<span class="line"><span>#    service-port: 8091 #If not configured, the default is &#39;\${server.port} + 1000&#39;</span></span>
<span class="line"><span>  security:</span></span>
<span class="line"><span>    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017</span></span>
<span class="line"><span>    tokenValidityInMilliseconds: 1800000</span></span>
<span class="line"><span>    ignore:</span></span>
<span class="line"><span>      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.jpeg,/**/*.ico,/api/v1/auth/login</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在application.yml配置中增加mysql数据源，对应的数据库、用户名、密码自行修改</p></blockquote><h3 id="_2-5、修改配置config-txt" tabindex="-1"><a class="header-anchor" href="#_2-5、修改配置config-txt"><span>2.5、修改配置config.txt</span></a></h3><blockquote><p>D:\\software\\seata\\seata-server-2.0.0\\script\\config-center\\config.txt</p></blockquote><blockquote><p>不适用的配置都注释掉</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#Transaction storage configuration, only for the server. The file, db, and redis configuration values are optional.</span></span>
<span class="line"><span>store.mode=file</span></span>
<span class="line"><span>store.lock.mode=file</span></span>
<span class="line"><span>store.session.mode=file</span></span>
<span class="line"><span>#Used for password encryption</span></span>
<span class="line"><span>#store.publicKey=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#If \`store.mode,store.lock.mode,store.session.mode\` are not equal to \`file\`, you can remove the configuration block.</span></span>
<span class="line"><span>#store.file.dir=file_store/data</span></span>
<span class="line"><span>#store.file.maxBranchSessionSize=16384</span></span>
<span class="line"><span>#store.file.maxGlobalSessionSize=512</span></span>
<span class="line"><span>#store.file.fileWriteBufferCacheSize=16384</span></span>
<span class="line"><span>#store.file.flushDiskMode=async</span></span>
<span class="line"><span>#store.file.sessionReloadReadSize=100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#These configurations are required if the \`store mode\` is \`db\`. If \`store.mode,store.lock.mode,store.session.mode\` are not equal to \`db\`, you can remove the configuration block.</span></span>
<span class="line"><span>store.db.datasource=druid</span></span>
<span class="line"><span>store.db.dbType=mysql</span></span>
<span class="line"><span>store.db.driverClassName=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>store.db.url=jdbc:mysql://127.0.0.1:3306/lamp_seata?useUnicode=true&amp;rewriteBatchedStatements=true</span></span>
<span class="line"><span>store.db.user=root</span></span>
<span class="line"><span>store.db.password=root</span></span>
<span class="line"><span>store.db.minConn=5</span></span>
<span class="line"><span>store.db.maxConn=30</span></span>
<span class="line"><span>store.db.globalTable=global_table</span></span>
<span class="line"><span>store.db.branchTable=branch_table</span></span>
<span class="line"><span>store.db.distributedLockTable=distributed_lock</span></span>
<span class="line"><span>store.db.queryLimit=100</span></span>
<span class="line"><span>store.db.lockTable=lock_table</span></span>
<span class="line"><span>store.db.maxWait=5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#These configurations are required if the \`store mode\` is \`redis\`. If \`store.mode,store.lock.mode,store.session.mode\` are not equal to \`redis\`, you can remove the configuration block.</span></span>
<span class="line"><span>#store.redis.mode=single</span></span>
<span class="line"><span>#store.redis.type=pipeline</span></span>
<span class="line"><span>#store.redis.single.host=127.0.0.1</span></span>
<span class="line"><span>#store.redis.single.port=6379</span></span>
<span class="line"><span>#store.redis.sentinel.masterName=</span></span>
<span class="line"><span>#store.redis.sentinel.sentinelHosts=</span></span>
<span class="line"><span>#store.redis.sentinel.sentinelPassword=</span></span>
<span class="line"><span>#store.redis.maxConn=10</span></span>
<span class="line"><span>#store.redis.minConn=1</span></span>
<span class="line"><span>#store.redis.maxTotal=100</span></span>
<span class="line"><span>#store.redis.database=0</span></span>
<span class="line"><span>#store.redis.password=</span></span>
<span class="line"><span>#store.redis.queryLimit=100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="image-20240704144834193" tabindex="0" loading="lazy"><figcaption>image-20240704144834193</figcaption></figure><blockquote><p>D:\\software\\seata\\seata-server-2.0.0\\bin</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.\\seata-server.bat</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>.\\seata-server.bat -p 8091 -h 192.168.1.79 -m db -n 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件"><span>附件</span></a></h2><p>参考：<a href="https://www.cnblogs.com/vic-tory/p/17827908.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/vic-tory/p/17827908.html</a></p><h3 id="详细配置application-yml" tabindex="-1"><a class="header-anchor" href="#详细配置application-yml"><span>详细配置application.yml</span></a></h3><blockquote><p>D:\\software\\seata\\seata-server-2.0.0\\conf\\application.yml</p></blockquote><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  Copyright 1999-2019 Seata.io Group.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  you may not use this file except in compliance with the License.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  You may obtain a copy of the License at</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  See the License for the specific language governing permissions and</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  limitations under the License.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7091</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">seata-server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">logging</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">classpath:logback-spring.xml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${log.home:\${user.home}/logs/seata}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  extend</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    logstash-appender</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      destination</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">127.0.0.1:4560</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    kafka-appender</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      bootstrap-servers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">127.0.0.1:9092</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      topic</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">logback_to_logstash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">seata</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">seata</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">seata</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # support: nacos, consul, apollo, zk, etcd3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    nacos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:      </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      server-addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">127.0.0.1:8848</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      namespace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">5b51e46a-4aeb-4d40-8398-8a9d33e2f0ad</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SEATA_GROUP</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      data-id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">seataServer.properties</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      context-path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      ##if use MSE Nacos with auth, mutex with username/password attribute</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #access-key:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #secret-key:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  registry</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # support: nacos, eureka, redis, zk, consul, etcd3, sofa</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    nacos</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">seata-server</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      server-addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">127.0.0.1:8848</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SEATA_GROUP</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      namespace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">5b51e46a-4aeb-4d40-8398-8a9d33e2f0ad</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      cluster</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">default</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nacos</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      context-path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      ##if use MSE Nacos with auth, mutex with username/password attribute</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #access-key:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      #secret-key:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  store</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # support: file 、 db 、 redis</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">db</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">druid</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      db-type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mysql</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      driver-class-name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">jdbc:mysql://127.0.0.1:3306/lamp_seata?useUnicode=true&amp;rewriteBatchedStatements=true&amp;serverTimezone=GMT</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      min-conn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      max-conn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      global-table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">global_table</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      branch-table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">branch_table</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      lock-table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">lock_table</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      distributed-lock-table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">distributed_lock</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      query-limit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      max-wait</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  server:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#    service-port: 8091 #If not configured, the default is &#39;\${server.port} + 1000&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  security</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    secretKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">SeataSecretKey0c382ef121d778043159209298fd40bf3850a017</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    tokenValidityInMilliseconds</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1800000</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ignore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      urls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.jpeg,/**/*.ico,/api/v1/auth/login</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="详细脚本配置config-txt" tabindex="-1"><a class="header-anchor" href="#详细脚本配置config-txt"><span>详细脚本配置config.txt</span></a></h3><blockquote><p>D:\\software\\seata\\seata-server-2.0.0\\script\\config-center\\config.txt</p></blockquote><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#For details about configuration items, see https://seata.io/zh-cn/docs/user/configurations.html</span></span>
<span class="line"><span>#Transport configuration, for client and server</span></span>
<span class="line"><span>transport.type=TCP</span></span>
<span class="line"><span>transport.server=NIO</span></span>
<span class="line"><span>transport.heartbeat=true</span></span>
<span class="line"><span>transport.enableTmClientBatchSendRequest=false</span></span>
<span class="line"><span>transport.enableRmClientBatchSendRequest=true</span></span>
<span class="line"><span>transport.enableTcServerBatchSendResponse=false</span></span>
<span class="line"><span>transport.rpcRmRequestTimeout=30000</span></span>
<span class="line"><span>transport.rpcTmRequestTimeout=30000</span></span>
<span class="line"><span>transport.rpcTcRequestTimeout=30000</span></span>
<span class="line"><span>transport.threadFactory.bossThreadPrefix=NettyBoss</span></span>
<span class="line"><span>transport.threadFactory.workerThreadPrefix=NettyServerNIOWorker</span></span>
<span class="line"><span>transport.threadFactory.serverExecutorThreadPrefix=NettyServerBizHandler</span></span>
<span class="line"><span>transport.threadFactory.shareBossWorker=false</span></span>
<span class="line"><span>transport.threadFactory.clientSelectorThreadPrefix=NettyClientSelector</span></span>
<span class="line"><span>transport.threadFactory.clientSelectorThreadSize=1</span></span>
<span class="line"><span>transport.threadFactory.clientWorkerThreadPrefix=NettyClientWorkerThread</span></span>
<span class="line"><span>transport.threadFactory.bossThreadSize=1</span></span>
<span class="line"><span>transport.threadFactory.workerThreadSize=default</span></span>
<span class="line"><span>transport.shutdown.wait=3</span></span>
<span class="line"><span>transport.serialization=seata</span></span>
<span class="line"><span>transport.compressor=none</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Transaction routing rules configuration, only for the client</span></span>
<span class="line"><span>service.vgroupMapping.default_tx_group=default</span></span>
<span class="line"><span>#If you use a registry, you can ignore it</span></span>
<span class="line"><span>service.default.grouplist=127.0.0.1:8091</span></span>
<span class="line"><span>service.enableDegrade=false</span></span>
<span class="line"><span>service.disableGlobalTransaction=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client.metadataMaxAgeMs=30000</span></span>
<span class="line"><span>#Transaction rule configuration, only for the client</span></span>
<span class="line"><span>client.rm.asyncCommitBufferLimit=10000</span></span>
<span class="line"><span>client.rm.lock.retryInterval=10</span></span>
<span class="line"><span>client.rm.lock.retryTimes=30</span></span>
<span class="line"><span>client.rm.lock.retryPolicyBranchRollbackOnConflict=true</span></span>
<span class="line"><span>client.rm.reportRetryCount=5</span></span>
<span class="line"><span>client.rm.tableMetaCheckEnable=true</span></span>
<span class="line"><span>client.rm.tableMetaCheckerInterval=60000</span></span>
<span class="line"><span>client.rm.sqlParserType=druid</span></span>
<span class="line"><span>client.rm.reportSuccessEnable=false</span></span>
<span class="line"><span>client.rm.sagaBranchRegisterEnable=false</span></span>
<span class="line"><span>client.rm.sagaJsonParser=fastjson</span></span>
<span class="line"><span>client.rm.tccActionInterceptorOrder=-2147482648</span></span>
<span class="line"><span>client.rm.sqlParserType=druid</span></span>
<span class="line"><span>client.tm.commitRetryCount=5</span></span>
<span class="line"><span>client.tm.rollbackRetryCount=5</span></span>
<span class="line"><span>client.tm.defaultGlobalTransactionTimeout=60000</span></span>
<span class="line"><span>client.tm.degradeCheck=false</span></span>
<span class="line"><span>client.tm.degradeCheckAllowTimes=10</span></span>
<span class="line"><span>client.tm.degradeCheckPeriod=2000</span></span>
<span class="line"><span>client.tm.interceptorOrder=-2147482648</span></span>
<span class="line"><span>client.undo.dataValidation=true</span></span>
<span class="line"><span>client.undo.logSerialization=protostuff</span></span>
<span class="line"><span>client.undo.onlyCareUpdateColumns=true</span></span>
<span class="line"><span>server.undo.logSaveDays=7</span></span>
<span class="line"><span>server.undo.logDeletePeriod=86400000</span></span>
<span class="line"><span>client.undo.logTable=undo_log</span></span>
<span class="line"><span>client.undo.compress.enable=true</span></span>
<span class="line"><span>client.undo.compress.type=zip</span></span>
<span class="line"><span>client.undo.compress.threshold=64k</span></span>
<span class="line"><span>#For TCC transaction mode</span></span>
<span class="line"><span>tcc.fence.logTableName=tcc_fence_log</span></span>
<span class="line"><span>tcc.fence.cleanPeriod=1h</span></span>
<span class="line"><span># You can choose from the following options: fastjson, jackson, gson</span></span>
<span class="line"><span>tcc.contextJsonParserType=fastjson</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Log rule configuration, for client and server</span></span>
<span class="line"><span>log.exceptionRate=100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Transaction storage configuration, only for the server. The file, db, and redis configuration values are optional.</span></span>
<span class="line"><span>store.mode=file</span></span>
<span class="line"><span>store.lock.mode=file</span></span>
<span class="line"><span>store.session.mode=file</span></span>
<span class="line"><span>#Used for password encryption</span></span>
<span class="line"><span>#store.publicKey=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#If \`store.mode,store.lock.mode,store.session.mode\` are not equal to \`file\`, you can remove the configuration block.</span></span>
<span class="line"><span>#store.file.dir=file_store/data</span></span>
<span class="line"><span>#store.file.maxBranchSessionSize=16384</span></span>
<span class="line"><span>#store.file.maxGlobalSessionSize=512</span></span>
<span class="line"><span>#store.file.fileWriteBufferCacheSize=16384</span></span>
<span class="line"><span>#store.file.flushDiskMode=async</span></span>
<span class="line"><span>#store.file.sessionReloadReadSize=100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#These configurations are required if the \`store mode\` is \`db\`. If \`store.mode,store.lock.mode,store.session.mode\` are not equal to \`db\`, you can remove the configuration block.</span></span>
<span class="line"><span>store.db.datasource=druid</span></span>
<span class="line"><span>store.db.dbType=mysql</span></span>
<span class="line"><span>store.db.driverClassName=com.mysql.jdbc.Driver</span></span>
<span class="line"><span>store.db.url=jdbc:mysql://127.0.0.1:3306/lamp_seata?useUnicode=true&amp;rewriteBatchedStatements=true</span></span>
<span class="line"><span>store.db.user=root</span></span>
<span class="line"><span>store.db.password=root</span></span>
<span class="line"><span>store.db.minConn=5</span></span>
<span class="line"><span>store.db.maxConn=30</span></span>
<span class="line"><span>store.db.globalTable=global_table</span></span>
<span class="line"><span>store.db.branchTable=branch_table</span></span>
<span class="line"><span>store.db.distributedLockTable=distributed_lock</span></span>
<span class="line"><span>store.db.queryLimit=100</span></span>
<span class="line"><span>store.db.lockTable=lock_table</span></span>
<span class="line"><span>store.db.maxWait=5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#These configurations are required if the \`store mode\` is \`redis\`. If \`store.mode,store.lock.mode,store.session.mode\` are not equal to \`redis\`, you can remove the configuration block.</span></span>
<span class="line"><span>#store.redis.mode=single</span></span>
<span class="line"><span>#store.redis.type=pipeline</span></span>
<span class="line"><span>#store.redis.single.host=127.0.0.1</span></span>
<span class="line"><span>#store.redis.single.port=6379</span></span>
<span class="line"><span>#store.redis.sentinel.masterName=</span></span>
<span class="line"><span>#store.redis.sentinel.sentinelHosts=</span></span>
<span class="line"><span>#store.redis.sentinel.sentinelPassword=</span></span>
<span class="line"><span>#store.redis.maxConn=10</span></span>
<span class="line"><span>#store.redis.minConn=1</span></span>
<span class="line"><span>#store.redis.maxTotal=100</span></span>
<span class="line"><span>#store.redis.database=0</span></span>
<span class="line"><span>#store.redis.password=</span></span>
<span class="line"><span>#store.redis.queryLimit=100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Transaction rule configuration, only for the server</span></span>
<span class="line"><span>server.recovery.committingRetryPeriod=1000</span></span>
<span class="line"><span>server.recovery.asynCommittingRetryPeriod=1000</span></span>
<span class="line"><span>server.recovery.rollbackingRetryPeriod=1000</span></span>
<span class="line"><span>server.recovery.timeoutRetryPeriod=1000</span></span>
<span class="line"><span>server.maxCommitRetryTimeout=-1</span></span>
<span class="line"><span>server.maxRollbackRetryTimeout=-1</span></span>
<span class="line"><span>server.rollbackRetryTimeoutUnlockEnable=false</span></span>
<span class="line"><span>server.distributedLockExpireTime=10000</span></span>
<span class="line"><span>server.session.branchAsyncQueueSize=5000</span></span>
<span class="line"><span>server.session.enableBranchAsyncRemove=false</span></span>
<span class="line"><span>server.enableParallelRequestHandle=true</span></span>
<span class="line"><span>server.enableParallelHandleBranch=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server.raft.cluster=127.0.0.1:7091,127.0.0.1:7092,127.0.0.1:7093</span></span>
<span class="line"><span>server.raft.snapshotInterval=600</span></span>
<span class="line"><span>server.raft.applyBatch=32</span></span>
<span class="line"><span>server.raft.maxAppendBufferSize=262144</span></span>
<span class="line"><span>server.raft.maxReplicatorInflightMsgs=256</span></span>
<span class="line"><span>server.raft.disruptorBufferSize=16384</span></span>
<span class="line"><span>server.raft.electionTimeoutMs=2000</span></span>
<span class="line"><span>server.raft.reporterEnabled=false</span></span>
<span class="line"><span>server.raft.reporterInitialDelay=60</span></span>
<span class="line"><span>server.raft.serialization=jackson</span></span>
<span class="line"><span>server.raft.compressor=none</span></span>
<span class="line"><span>server.raft.sync=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Metrics configuration, only for the server</span></span>
<span class="line"><span>metrics.enabled=false</span></span>
<span class="line"><span>metrics.registryType=compact</span></span>
<span class="line"><span>metrics.exporterList=prometheus</span></span>
<span class="line"><span>metrics.exporterPrometheusPort=9898</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql脚本" tabindex="-1"><a class="header-anchor" href="#sql脚本"><span>sql脚本</span></a></h3><blockquote><p>脚本位置：D:\\software\\seata\\seata-server-2.0.0\\script\\server\\db\\mysql.sql</p></blockquote><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>-- -------------------------------- The script used when storeMode is &#39;db&#39; --------------------------------</span></span>
<span class="line"><span>-- the table to store GlobalSession data</span></span>
<span class="line"><span>CREATE TABLE IF NOT EXISTS \`global_table\`</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>    \`xid\`                       VARCHAR(128) NOT NULL,</span></span>
<span class="line"><span>    \`transaction_id\`            BIGINT,</span></span>
<span class="line"><span>    \`status\`                    TINYINT      NOT NULL,</span></span>
<span class="line"><span>    \`application_id\`            VARCHAR(32),</span></span>
<span class="line"><span>    \`transaction_service_group\` VARCHAR(32),</span></span>
<span class="line"><span>    \`transaction_name\`          VARCHAR(128),</span></span>
<span class="line"><span>    \`timeout\`                   INT,</span></span>
<span class="line"><span>    \`begin_time\`                BIGINT,</span></span>
<span class="line"><span>    \`application_data\`          VARCHAR(2000),</span></span>
<span class="line"><span>    \`gmt_create\`                DATETIME,</span></span>
<span class="line"><span>    \`gmt_modified\`              DATETIME,</span></span>
<span class="line"><span>    PRIMARY KEY (\`xid\`),</span></span>
<span class="line"><span>    KEY \`idx_status_gmt_modified\` (\`status\` , \`gmt_modified\`),</span></span>
<span class="line"><span>    KEY \`idx_transaction_id\` (\`transaction_id\`)</span></span>
<span class="line"><span>) ENGINE = InnoDB</span></span>
<span class="line"><span>  DEFAULT CHARSET = utf8mb4;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- the table to store BranchSession data</span></span>
<span class="line"><span>CREATE TABLE IF NOT EXISTS \`branch_table\`</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>    \`branch_id\`         BIGINT       NOT NULL,</span></span>
<span class="line"><span>    \`xid\`               VARCHAR(128) NOT NULL,</span></span>
<span class="line"><span>    \`transaction_id\`    BIGINT,</span></span>
<span class="line"><span>    \`resource_group_id\` VARCHAR(32),</span></span>
<span class="line"><span>    \`resource_id\`       VARCHAR(256),</span></span>
<span class="line"><span>    \`branch_type\`       VARCHAR(8),</span></span>
<span class="line"><span>    \`status\`            TINYINT,</span></span>
<span class="line"><span>    \`client_id\`         VARCHAR(64),</span></span>
<span class="line"><span>    \`application_data\`  VARCHAR(2000),</span></span>
<span class="line"><span>    \`gmt_create\`        DATETIME(6),</span></span>
<span class="line"><span>    \`gmt_modified\`      DATETIME(6),</span></span>
<span class="line"><span>    PRIMARY KEY (\`branch_id\`),</span></span>
<span class="line"><span>    KEY \`idx_xid\` (\`xid\`)</span></span>
<span class="line"><span>) ENGINE = InnoDB</span></span>
<span class="line"><span>  DEFAULT CHARSET = utf8mb4;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- the table to store lock data</span></span>
<span class="line"><span>CREATE TABLE IF NOT EXISTS \`lock_table\`</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>    \`row_key\`        VARCHAR(128) NOT NULL,</span></span>
<span class="line"><span>    \`xid\`            VARCHAR(128),</span></span>
<span class="line"><span>    \`transaction_id\` BIGINT,</span></span>
<span class="line"><span>    \`branch_id\`      BIGINT       NOT NULL,</span></span>
<span class="line"><span>    \`resource_id\`    VARCHAR(256),</span></span>
<span class="line"><span>    \`table_name\`     VARCHAR(32),</span></span>
<span class="line"><span>    \`pk\`             VARCHAR(36),</span></span>
<span class="line"><span>    \`status\`         TINYINT      NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;0:locked ,1:rollbacking&#39;,</span></span>
<span class="line"><span>    \`gmt_create\`     DATETIME,</span></span>
<span class="line"><span>    \`gmt_modified\`   DATETIME,</span></span>
<span class="line"><span>    PRIMARY KEY (\`row_key\`),</span></span>
<span class="line"><span>    KEY \`idx_status\` (\`status\`),</span></span>
<span class="line"><span>    KEY \`idx_branch_id\` (\`branch_id\`),</span></span>
<span class="line"><span>    KEY \`idx_xid\` (\`xid\`)</span></span>
<span class="line"><span>) ENGINE = InnoDB</span></span>
<span class="line"><span>  DEFAULT CHARSET = utf8mb4;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE IF NOT EXISTS \`distributed_lock\`</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>    \`lock_key\`       CHAR(20) NOT NULL,</span></span>
<span class="line"><span>    \`lock_value\`     VARCHAR(20) NOT NULL,</span></span>
<span class="line"><span>    \`expire\`         BIGINT,</span></span>
<span class="line"><span>    primary key (\`lock_key\`)</span></span>
<span class="line"><span>) ENGINE = InnoDB</span></span>
<span class="line"><span>  DEFAULT CHARSET = utf8mb4;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO \`distributed_lock\` (lock_key, lock_value, expire) VALUES (&#39;AsyncCommitting&#39;, &#39; &#39;, 0);</span></span>
<span class="line"><span>INSERT INTO \`distributed_lock\` (lock_key, lock_value, expire) VALUES (&#39;RetryCommitting&#39;, &#39; &#39;, 0);</span></span>
<span class="line"><span>INSERT INTO \`distributed_lock\` (lock_key, lock_value, expire) VALUES (&#39;RetryRollbacking&#39;, &#39; &#39;, 0);</span></span>
<span class="line"><span>INSERT INTO \`distributed_lock\` (lock_key, lock_value, expire) VALUES (&#39;TxTimeoutCheck&#39;, &#39; &#39;, 0);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34)]))}const o=n(p,[["render",t],["__file","4-seata-2.0.0-安装及配置.html.vue"]]),h=JSON.parse('{"path":"/java/pracprojects/lamp-project/4-seata-2.0.0-%E5%AE%89%E8%A3%85%E5%8F%8A%E9%85%8D%E7%BD%AE.html","title":"4-seata-2.0.0-安装及配置","lang":"zh-CN","frontmatter":{"title":"4-seata-2.0.0-安装及配置","icon":"feather-pointed","category":["lamp-cloud"],"tag":["seata"],"sticky":false,"star":false,"article":true,"timeline":true,"date":"2024-07-05T10:47:17.000Z","gitInclude":[],"description":"一、准备工作 下载地址：https://seata.apache.org/zh-cn/unversioned/download/seata-server/ Sentinel Version：1.8.6及以上 二、修改配置及启动 seata安装教程：https://blog.csdn.net/jokeMqc/article/details/1363232...","head":[["meta",{"property":"og:url","content":"https://blog.lxip.top/java/pracprojects/lamp-project/4-seata-2.0.0-%E5%AE%89%E8%A3%85%E5%8F%8A%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"所遇所思"}],["meta",{"property":"og:title","content":"4-seata-2.0.0-安装及配置"}],["meta",{"property":"og:description","content":"一、准备工作 下载地址：https://seata.apache.org/zh-cn/unversioned/download/seata-server/ Sentinel Version：1.8.6及以上 二、修改配置及启动 seata安装教程：https://blog.csdn.net/jokeMqc/article/details/1363232..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"seata"}],["meta",{"property":"article:published_time","content":"2024-07-05T10:47:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4-seata-2.0.0-安装及配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-05T10:47:17.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.keney\\",\\"url\\":\\"https://github.com/mynxg\\"}]}"]]},"headers":[{"level":2,"title":"一、准备工作","slug":"一、准备工作","link":"#一、准备工作","children":[]},{"level":2,"title":"二、修改配置及启动","slug":"二、修改配置及启动","link":"#二、修改配置及启动","children":[{"level":3,"title":"2.1、安装","slug":"_2-1、安装","link":"#_2-1、安装","children":[]},{"level":3,"title":"2.2、创建库","slug":"_2-2、创建库","link":"#_2-2、创建库","children":[]},{"level":3,"title":"2.3、导入sql脚本","slug":"_2-3、导入sql脚本","link":"#_2-3、导入sql脚本","children":[]},{"level":3,"title":"2.4、修改配置application.yml","slug":"_2-4、修改配置application-yml","link":"#_2-4、修改配置application-yml","children":[]},{"level":3,"title":"2.5、修改配置config.txt","slug":"_2-5、修改配置config-txt","link":"#_2-5、修改配置config-txt","children":[]}]},{"level":2,"title":"附件","slug":"附件","link":"#附件","children":[{"level":3,"title":"详细配置application.yml","slug":"详细配置application-yml","link":"#详细配置application-yml","children":[]},{"level":3,"title":"详细脚本配置config.txt","slug":"详细脚本配置config-txt","link":"#详细脚本配置config-txt","children":[]},{"level":3,"title":"sql脚本","slug":"sql脚本","link":"#sql脚本","children":[]}]}],"readingTime":{"minutes":5.64,"words":1691},"filePathRelative":"java/pracprojects/lamp-project/4-seata-2.0.0-安装及配置.md","localizedDate":"2024年7月5日","excerpt":"","autoDesc":true}');export{o as comp,h as data};
