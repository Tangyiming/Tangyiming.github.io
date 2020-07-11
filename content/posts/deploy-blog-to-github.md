---
# 文章标题，设置path时可以用中文
# title: 优雅的部署github pages博客
# 手动指定文章url path，不可以含空格等
# path: how-to-deploy-blog-to-github-pages
title: how-to-deploy-blog-to-github-pages
# 日期
date: 2019-12-09
# 要不要在目录列表显示
published: true
# tag 不可以写中文, 小写
tags: ['gh-pages', 'deploy']
series: false
canonical_url: false
# 一句话描述
description: "几个你可能也会遇到的问题～"
---
这里分享下我使用[Gridsome](https://gridsome.org/)建博客并使用[GitHub Pages](https://pages.github.com/)免费托管中遇到了几个作为新手一定会遇到的问题。

## 项目源码与静态文件的存放问题
由于我们需要将Gridsome或者其他工具（如[Gatsby](https://www.gatsbyjs.org/) ）build后的静态文件放在github仓库并作为网站的Source，所以我们不可能将项目直接存放到github上。

我选择了master分支作为我的站点的Source分支，创建了src分支存储我的项目代码。

## 使用gh-pages部署
如果是手动build，再分别修改source分支与src分支提交简直是个噩梦，过程繁琐且容易出错。

我们选择安装[gh-pages](https://github.com/tschaub/gh-pages)进行自动化的部署工作，如何安装就不赘述，详细使用阅读文档。

gh-pages有多种命令进行使用，这里根据我们的需求：
> 将gridsome build出的dist目录下的文件提交到仓库的master分支

于是我们在`package.json`的scripts下添加以下配置：
```json
"predeploy": "npm run build",
"deploy": "gh-pages -b master -d dist"
```
这里 `-b` 指定要部署的分支，`-d` 指定Source文件目录，也就是build后生成的目录。

以后只需一件 `npm deploy` 即可完成部署。如果你的博客绑定了自己的域名，请继续往下阅读。

## CNAME
以上方法每次自动构建会出现一个问题，就是会把我们的CNAME文件删掉，为了避免这个问题，在我们的项目根目录新建CNAME文件，里面写上你的域名。然后在构建脚本上做一点修改：
```json
"predeploy": "npm run build && copy CNAME dist || cp CNAME dist",
```
意思是在prebuild阶段，build执行完，再将CNAME文件拷贝到dist目录下，这样到了deploy阶段，CNAME文件也就一同被部署到了master分支上了。

这里`copy`是windows上的CMD指令，`cp`是linux或者os里的指令。如果`&&`前的指令执行成功，则会执行`&&`后的指令；如果`||`前的指令执行失败，则会执行`||`后的指令。这样就可以兼容多个操作系统啦～
