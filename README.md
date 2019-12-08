# Notice

## Node
Version: `v10.x.x`


## Deploy by gh-pages
I use the master branch for statics files
so add this two lines into scripts:
```json
"predeploy": "npm run build && copy CNAME dist || cp CNAME dist",
"deploy": "gh-pages -b master -d dist"
```