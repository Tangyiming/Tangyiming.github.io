---
# 文章标题，设置path时可以用中文
title: 在gridsome中使用非英语做文章标题的方法
# 手动指定文章url path，不可以含空格等
path: use-non-english-title-in-gridsome
# 日期
date: 2020-07-22
# 要不要在目录列表显示
published: true
# tag 不可以写中文, 小写
tags: ['Chinese', 'title']
series: false
canonical_url: false
# 一句话描述
description: "我的被官方采纳的解决办法..."
---

Gridsome时不支持非英文标题的，因为他是默认根据title生成路径的，对于非英文字符，就无法支持了。

所以我的解决方法是注释掉应用配置项中slug的生产配置，采用在文章中指定路径的方式，在生成路径时被使用。

具体参考我在issue的回答：

https://github.com/gridsome/gridsome/issues/956#issuecomment-581086130
