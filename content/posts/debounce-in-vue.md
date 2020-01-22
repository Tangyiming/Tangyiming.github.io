---
title: Vue防抖并赋值data值
path: debounce-in-vue
date: 2019-11-07
published: true
tags: ['vue', 'debounce']
canonical_url: false
description: "远程模糊搜索select下拉项时，为了避免输入时过多的请求，在vue中添加优化防抖功能"
---

远程模糊搜索select下拉项时，为了避免输入时过多的请求，在vue中添加优化防抖功能，但是中间遇到了两个问题：

1.防抖不起作用，根本不delay，最终发现是函数声明方式导致。使用箭头函数声明，箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象，它是固定不变的。

2.因为箭头函数里this指向作用域问题，无法给data中的变量赋值，最终通过先获得顶层this域，再赋值解决。

上代码：

``` js
<!--省略-->
     <a-select
       showSearch
       allowClear
       :value="department"
       :defaultActiveFirstOption="false"
       :showArrow="false"
       :filterOption="false"
       @search="val => handleSearch('department', val)"
       @change="val => handleChange('department', val)">
           <a-select-option
            v-for="d in departmentList"
            :key="d"
            >{{ d }}</a-select-option
           >
     </a-select>
<!--省略-->

import { queryAsset } from '@/api/toolset'
import _ from 'lodash'
let _this = {}
<script>
export default {
data() {
        return {
            departmentList: [],
            department: ''
        }
    },

    beforeCreate() {
        _this = this
    },
    methods: {
        handleSearch: _.debounce((key, val) => {
            let p = { [key]: val }
            queryAsset(p).then(res => {
                switch (Object.keys(p)[0]) {
                    case 'department':
                        _this.departmentList = res.data
                        break
                    //省略
                }
            })
        }, 500),

        handleChange(key, val) {
            switch (key) {
                case 'department':
                    this.department = val
                    break
                //省略
            }
        },
  //省略
  }
}
</script>
```

参考：

https://stackoverflow.com/questions/53041171/lodashs-debounce-not-working-in-vue-js

https://es6.ruanyifeng.com/?search=箭头函数&x=0&y=0#docs/function#箭头函数
