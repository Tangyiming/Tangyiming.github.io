(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{233:function(n){n.exports={data:{post:{title:"Vue防抖并赋值data值",path:"/debounce-in-vue",date:"7. January 2019",timeToRead:1,tags:[{id:"vue",title:"vue",path:"/tag/vue"},{id:"debounce",title:"debounce",path:"/tag/debounce"}],description:"远程模糊搜索select下拉项时，为了避免输入时过多的请求，在vue中添加优化防抖功能",content:'<p>远程模糊搜索select下拉项时，为了避免输入时过多的请求，在vue中添加优化防抖功能，但是中间遇到了两个问题：</p>\n<p>1.防抖不起作用，根本不delay，最终发现是函数声明方式导致。使用箭头函数声明，箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象，它是固定不变的。</p>\n<p>2.因为箭头函数里this指向作用域问题，无法给data中的变量赋值，最终通过先获得顶层this域，再赋值解决。</p>\n<p>上代码：</p>\n<pre class="language-js"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>省略<span class="token operator">--</span><span class="token operator">></span>\n     <span class="token operator">&lt;</span>a<span class="token operator">-</span>select\n       showSearch\n       allowClear\n       <span class="token punctuation">:</span>value<span class="token operator">=</span><span class="token string">"department"</span>\n       <span class="token punctuation">:</span>defaultActiveFirstOption<span class="token operator">=</span><span class="token string">"false"</span>\n       <span class="token punctuation">:</span>showArrow<span class="token operator">=</span><span class="token string">"false"</span>\n       <span class="token punctuation">:</span>filterOption<span class="token operator">=</span><span class="token string">"false"</span>\n       @search<span class="token operator">=</span><span class="token string">"val => handleSearch(\'department\', val)"</span>\n       @change<span class="token operator">=</span><span class="token string">"val => handleChange(\'department\', val)"</span><span class="token operator">></span>\n           <span class="token operator">&lt;</span>a<span class="token operator">-</span>select<span class="token operator">-</span>option\n            v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"d in departmentList"</span>\n            <span class="token punctuation">:</span>key<span class="token operator">=</span><span class="token string">"d"</span>\n            <span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> d <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>select<span class="token operator">-</span>option\n           <span class="token operator">></span>\n     <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">-</span>select<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>省略<span class="token operator">--</span><span class="token operator">></span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> queryAsset <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@/api/toolset\'</span>\n<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">\'lodash\'</span>\n<span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token operator">&lt;</span>script<span class="token operator">></span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            departmentList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            department<span class="token punctuation">:</span> <span class="token string">\'\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        _this <span class="token operator">=</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        handleSearch<span class="token punctuation">:</span> _<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">:</span> val <span class="token punctuation">}</span>\n            <span class="token function">queryAsset</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=></span> <span class="token punctuation">{</span>\n                <span class="token keyword">switch</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">case</span> <span class="token string">\'department\'</span><span class="token punctuation">:</span>\n                        _this<span class="token punctuation">.</span>departmentList <span class="token operator">=</span> res<span class="token punctuation">.</span>data\n                        <span class="token keyword">break</span>\n                    <span class="token comment">//省略</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n        <span class="token function">handleChange</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">switch</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">case</span> <span class="token string">\'department\'</span><span class="token punctuation">:</span>\n                    <span class="token keyword">this</span><span class="token punctuation">.</span>department <span class="token operator">=</span> val\n                    <span class="token keyword">break</span>\n                <span class="token comment">//省略</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">//省略</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></pre>\n<p>参考：</p>\n<p><a href="https://stackoverflow.com/questions/53041171/lodashs-debounce-not-working-in-vue-js" target="_blank" rel="nofollow noopener noreferrer">https://stackoverflow.com/questions/53041171/lodashs-debounce-not-working-in-vue-js</a></p>\n<p><a href="https://es6.ruanyifeng.com/?search=%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0&#x26;x=0&#x26;y=0#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0" target="_blank" rel="nofollow noopener noreferrer">https://es6.ruanyifeng.com/?search=箭头函数&#x26;x=0&#x26;y=0#docs/function#箭头函数</a></p>\n',coverImage:null}}}}}]);