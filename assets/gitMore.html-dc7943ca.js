import{aP as s,Q as n,S as t,U as e,ac as d,ae as r,aQ as l,E as c}from"./framework-1a3f7ddc.js";const g="/assets/image-20221031222311849-da3184a6.png",o="/assets/image-20221031222421017-ff00e242.png",u="/assets/image-20221031224144979-899f8fb9.png",i="/assets/image-20221031232651471-9879ec91.png",p="/assets/image-20221031232222217-4e783608.png",m="/assets/image-20221031233525370-6898d39b.png",v="/assets/image-20221031234333269-850ae749.png",b="/assets/image-20221101162514113-b4ab6702.png",h="/assets/image-20221101162133360-693fd627.png",f="/assets/image-20221031235250843-c0672ef6.png",x="/assets/image-20221031235759564-065a33fc.png",_="/assets/image-20221101000219730-a857fdd3.png",y="/assets/202211010006324-5499b065.png",q={},k=l('<h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h2><p>​ 在同一台电脑上有时候需要使用多个GitHub、gitee、gitlab账号，或者说你有多个账号，不想来回生成公钥，那么这就需要使用到git配置多账户了。</p><h2 id="二、准备" tabindex="-1"><a class="header-anchor" href="#二、准备" aria-hidden="true">#</a> 二、准备</h2><p>环境：window 10、git</p><p>在使用之前你需要安装git，对于git安装也是点击下一步下一步就可以安装完成，在此也需要对git命令有一定的了解。</p><p>前提条件：需要C:\\Users\\nxg.ssh目录（文件夹）下，打开git bash</p><p>如下图所示：</p><figure><img src="'+g+'" alt="image-20221031222311849" tabindex="0" loading="lazy"><figcaption>image-20221031222311849</figcaption></figure><p>打开之后使用这个界面：</p><figure><img src="'+o+`" alt="image-20221031222421017" tabindex="0" loading="lazy"><figcaption>image-20221031222421017</figcaption></figure><p>**注意：**这路径C:\\Users\\nxg.ssh对于有一定基础的根据上图是能看明白，就不再赘述了。</p><p>​ 为什么先执行这一步呢？原因是这样的在你创建config文件，生成密钥时都需要创建在这个**.ssh**目录（文件夹）下。如果你在其他目录下打开，那你就需要考虑创建文件时的路径问题了。为了方便明了，就使用上述方法操作，省时省力。</p><h2 id="三、配置" tabindex="-1"><a class="header-anchor" href="#三、配置" aria-hidden="true">#</a> 三、配置</h2><h3 id="_3-1-创建config文件" tabindex="-1"><a class="header-anchor" href="#_3-1-创建config文件" aria-hidden="true">#</a> 3.1 创建config文件</h3><p>在C:\\Users\\nxg.ssh目录（文件夹）下创建config文件，并且配置ssh key的路由策略。</p><p>创建config文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>touch config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在config文件中配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># GitHub
Host github.com
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    User git
    
# Github2
Host github2
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_github2
    User git    

# gitee
Host gitee.com #自己的码云地址
    HostName gitee.com  
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa_gitee
    User git
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如图所示：</p><figure><img src="`+u+`" alt="image-20221031224144979" tabindex="0" loading="lazy"><figcaption>image-20221031224144979</figcaption></figure><blockquote><p>“#” 表示注释 Host 后面是名称，可以随便写，相当于起了一个别名</p><p>每一个Host就代表一个仓库，仓库参数另起一行，前有4个空格 HostName ： 真正连接的服务器地址</p><p>ssh的host，SSH地址“git@”后面到冒号前面的内容</p><p><code>User</code>：自定义的用户名，一般使用“git” <code>PreferredAuthentications</code>： 指定优先使用哪种方式验证，支持密码和秘钥验证方式 。使用“publickey”即可，git仓库均为这种形式</p><p>权限认证--可设为publickey,password publickey,keyboard-interactive等 <code>IdentityFile</code>：指定本次连接使用的密钥文件。 该host后台配置的公钥对应的私钥地址的绝对路径 Port ： SSH默认端口号为22，某些私有部署的git仓库会更换端口号</p></blockquote><h3 id="_3-2-全局配置" tabindex="-1"><a class="header-anchor" href="#_3-2-全局配置" aria-hidden="true">#</a> 3.2 全局配置</h3><p>以github为例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# global全局配置,这里使用全局配置
# 设置用户名：
git config --global user.name &#39;abc&#39;  
# 设置邮箱：
git config --global user.email  &quot;123456@qq.com&quot;

#秘钥添加到本地，即生成密钥
ssh-keygen -t rsa -C &quot;123456@qq.com&quot;

# 同理gitee账号也是这么操作的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：这里的abc是GitHub<strong>用户名</strong> ，<strong><a href="mailto:123456@qq.com">123456@qq.com</a></strong>这里是你绑定GitHub上的邮箱</p><p>如下图效果：</p><figure><img src="`+i+'" alt="image-20221031232651471" tabindex="0" loading="lazy"><figcaption>image-20221031232651471</figcaption></figure><p>配置gitee效果如下图所示：</p><figure><img src="'+p+'" alt="image-20221031232222217" tabindex="0" loading="lazy"><figcaption>image-20221031232222217</figcaption></figure><p>注意：生成密钥文件需要与这里保持一致</p><figure><img src="'+m+`" alt="image-20221031233525370" tabindex="0" loading="lazy"><figcaption>image-20221031233525370</figcaption></figure><h3 id="测试是否连接成功" tabindex="-1"><a class="header-anchor" href="#测试是否连接成功" aria-hidden="true">#</a> 测试是否连接成功</h3><p>测试GitHub是否连接成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh -T git@github2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功效果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hi abc! You&#39;ve successfully authenticated, but GitHub does not provide shell access.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试Gitee是否连接成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ssh -T git@gitee.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功效果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hi nxg! You&#39;ve successfully authenticated, but GITEE.COM does not provide shell access.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意事项：</p><figure><img src="`+v+'" alt="image-20221031234333269" tabindex="0" loading="lazy"><figcaption>image-20221031234333269</figcaption></figure><h2 id="四、关联github" tabindex="-1"><a class="header-anchor" href="#四、关联github" aria-hidden="true">#</a> 四、关联github</h2><p>将id_rsa_gitee.pub文件中的内容添加到gitee设置中的SSH公钥中。</p><p>将id_rsa_github2.pub文件中的内容添加到github的settings的SSH and GPG keys的SSH公钥中。</p><p>注：上面的文件都在</p><figure><img src="'+b+'" alt="image-20221101162514113" tabindex="0" loading="lazy"><figcaption>image-20221101162514113</figcaption></figure><p>效果如下图所示：</p><figure><img src="'+h+'" alt="image-20221101162133360" tabindex="0" loading="lazy"><figcaption>image-20221101162133360</figcaption></figure><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><p>在配置多个账号的，方式有多种，可以使用直接修改文件的方式，也可以使用命令的方式</p><p>这里使用修改文件的方式</p><p>首先需要在这C:\\Users\\nxg路径下，找到**.gitconfig**文件，并打开此文件</p><figure><img src="'+f+`" alt="image-20221031235250843" tabindex="0" loading="lazy"><figcaption>image-20221031235250843</figcaption></figure><p>注意：别直接双击打开，需要选择打开方式，选文本打开，或者其他编辑工具打开。</p><p><strong>.gitconfig</strong>文件内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[user]
	name = xiaoli
	email = 121212@qq.com
[core]
	autocrlf = true
[http]
	sslVerify = false
[user]
	name = abc
	email = 123456@qq.com
[core]
	autocrlf = true
[http]
	sslVerify = false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下图所示：</p><figure><img src="`+x+`" alt="image-20221031235759564" tabindex="0" loading="lazy"><figcaption>image-20221031235759564</figcaption></figure><h3 id="查看账号列表" tabindex="-1"><a class="header-anchor" href="#查看账号列表" aria-hidden="true">#</a> 查看账号列表：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果如图所示：</p><figure><img src="`+_+`" alt="image-20221101000219730" tabindex="0" loading="lazy"><figcaption>image-20221101000219730</figcaption></figure><h3 id="添加密钥的方式" tabindex="-1"><a class="header-anchor" href="#添加密钥的方式" aria-hidden="true">#</a> 添加密钥的方式</h3><p>方式一：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa -C &quot;123456@qq.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再执行 <strong>id_rsa</strong></p><figure><img src="`+i+`" alt="image-20221031232651471" tabindex="0" loading="lazy"><figcaption>image-20221031232651471</figcaption></figure><p>方式二：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa -C &quot;2011465907@qq.com&quot; -f ~/.ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果如图所示：</p><figure><img src="`+y+'" alt="image-20221101000544601" tabindex="0" loading="lazy"><figcaption>image-20221101000544601</figcaption></figure><blockquote><p><strong>ssh-keygen常用参数说明:</strong></p><p>-t: 密钥类型, 可以选择 dsa | ecdsa | ed25519 | rsa;</p><p>-f: 密钥目录位置, 默认为当前用户home路径下的.ssh隐藏目录, 也就是~/.ssh/, 同时默认密钥文件名以id_rsa开头. 如果是root用户, 则在/root/.ssh/id_rsa, 若为其他用户, 则在/home/username/.ssh/id_rsa;</p><p>-C: 指定此密钥的备注信息, 需要配置多个免密登录时, 建议携带;</p><p>-N: 指定此密钥对的密码, 如果指定此参数, 则命令执行过程中就不会出现交互确认密码的信息了.</p><p>举例说明: 同时指定目录位置、密码、注释信息, 就不需要输入回车键即可完成创建:</p></blockquote><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2>',75),H={href:"https://blog.csdn.net/weixin_45586870/article/details/120446094",target:"_blank",rel:"noopener noreferrer"};function z(S,G){const a=c("ExternalLinkIcon");return n(),t("div",null,[k,e("p",null,[e("a",H,[d("git单一账号使用教程"),r(a)])])])}const N=s(q,[["render",z],["__file","gitMore.html.vue"]]);export{N as default};