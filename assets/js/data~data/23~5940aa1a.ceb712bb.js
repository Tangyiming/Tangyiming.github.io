(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{273:function(e){e.exports={data:{tag:{title:"splunk",belongsTo:{edges:[{node:{title:"Linear Regression In Resource Usage Assessment",path:"/linear-regression-in-resource-usage-assessment",date:"10. December 2019",timeToRead:8,description:"来自我近期工作时写的一份文档：关于资源使用的评估方法（DTW算法之外的简单可行的方法），在此分享",coverImage:null,content:'<h2 id="problems-now-we-have"><a href="#problems-now-we-have" aria-hidden="true"><span class="icon icon-link"></span></a>Problems now we have</h2>\n<h3 id="1-average-value-of-resources-usage-can-not-accurately-reflect-the-reality"><a href="#1-average-value-of-resources-usage-can-not-accurately-reflect-the-reality" aria-hidden="true"><span class="icon icon-link"></span></a>1. Average value of resources usage can not accurately reflect the reality</h3>\n<p><strong>example1</strong>:\nThe graph is almost the same but average value with big difference.</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1920 711\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-2\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-2)\' width=\'1920\' height=\'711\' xlink:href=\'data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAYCAYAAABKtPtEAAAACXBIWXMAAAsSAAALEgHS3X78AAAGTUlEQVRYw%2bVYZ3cbRwzk//9fST44ieQuiZJYdbzee%2bFkgL07UZLtyM5TbCf73vK4FYsBMFsWeVGiLCvNSZrheDyiHwb9L21VVWMYjswD0ixHlhcoxjFJkqLqBrjlACvMcIgK/VphDicpWS9zHcFJdd4fMS88P8T%2bzoZ1cLDdW6po3w%2bsO2Czu4NlO2i7Tut3rLtd77SfZbtwXA9p1SKuB1ytdjj/eI03Fzd4ze8ly2HVg/j82ADgK1Ov3iCDqRdMDqsB10GFK7/CcvxKOSAAk/f8qFkBEHfO6N7i4lGcaG6aRhWWMBBXlxwzKwh9Dz%2bIEEax9sVxwM%2baFICccS2KGKUSuH5AAFpMbaKoF4RsD2cApJ/UOZ6PjmXxiIE/p/n4E%2bQvhoB0%2bK%2bnheO4hvl7Q379SIJTjPTDfd2T%2bkd1P1tWD1D3Ha39f8yLmmT3bws9DbHvDoBLElMCO3Htl3Q7EVbULXJm%2bf9yssw%2b/SWdvukc8E/SZP1LO8LSiV%2bUaAduzWVbP4MEeZqbjr/yddOS29rLWGWScU3lV17ytx7XdP03W1%2b47Z294fw9krJB3XYq%2b0E/JcGuw2SElgLPtp6CYFB8mfhf%2byluCcDnuEBSkFd4s/e/aR2S6q7F0rcYBQP%2b3HjwsvKTshZt286DMp7r7aTANsj4v/mk8GFC6zPCp0MQjngwfhon8W/FOawoR8nDVlaXn%2by346XqvRV8NVlO44MihZ/zVFsWGm4iU%2bUMjwAIwsgQBtOeQoWcJASu7OjROf44k1hANOVOEBYZ7pJgvCOMJAejfNU2SKpibusHc1wW7wppXblErXgRuw0sFE2tY6YQEdff0QgOjSF9T%2bd/HtFClc%2bbCpvQx8bPVDeMoT7pMpPg5AFi%2bart9b%2b4zOQ2965qvmdbV6%2b7YZlgG3sP%2bkRlrf3EAuvQUVc8leFnlcakALAk/7Q9vS4NlbSmJO4fFjVizuWPAHwNVXaMezc3IfaaN9eaOh3igrp1T0nQD4wFq6YjAOmMjLjnhrF65MJqhskw3uslNCR%2bNwHvAhTiZYlacHKpVyuHwnL4RUzleuwJUCM8M6K%2b9hMlKFnU2W5v7ht1pSCo83AOWUfRGE8Uspws1z9jmxY5Iu%2bQmHvLh4PN%2bWsNuVTC%2bmQuJcGmNRYSy0vcTVdeExKM1STCNnJnxCSWpO/S9WmdlMJaKpvOlrPpGVeOrx4gqem5mDScx69G8qu6Bm/vDnO9gCnblohe%2bckcr8YITw9Qn%2bMGSRJ6yi0snu3uqE9HELqZBx6RYKcOtuINMC6aWbAJgwIXto24yoieCYdbz%2bzfN77HCY2SdhrNyskaLmyH4OT3Lk0wZEEtLboNzZi4zPHOcmZZEipBkcAhR/gnoSfeJOEyAawHKOCEl8Y8WnYCUzio649ci4%2bsKdTj1iOwE9eML0LBHCtOajqIi0py0pgTeCrMyULdJcQ9JQm5TNZ0s5gKVXPb0nUM6YzCZD43i%2bBROSE2s8iY3pKPyo4eFwVkfleL0xpkV9owTCUkzAEqUjc/YSY8JgkB8njszbNcmtOQ8UzybTc8INzFNPZO3vPoqt2xn7elQEiOg2RM3ha49kIieURN4krqXMfQqGiHFhe8VVba1tBjcoZTgdN1Vl1Nxg9IgIaIwiqlRWvN0xqWbqRrOE1Sfs1QebXdKbmVtOT7g4usLRV0LzNkKWVhfYde%2b8FxzNhEQqFBVBlvvHQ8hmPyAC0FIEoL7Ci8JBndOhaiPMPOd%2bEz/gNOcrl3YUcJfrm6RpCm2hZnKbw4w5Xl4xAm%2bG15gzDLsPEcJBx/oKtfs0363PkRnCjTPnYUYR%2b4nCdGTlJaHgKOK3Uej%2b7uxAH2DK%2bQ88ta0iLH%2bcrmfDHntinbwUcC8uvVCucE5Xy9xh/rDV5db/D77Zb/13jH%2buUhxNuNjUGI1Dng1rVwQyO93Vl4t9/jzvPQcbtd3L/6RPoCLK8/8gwmz1/yTJYzlqWuINpxbL7yeiRtkqe2SL%2blfk1bNraV%2bpI09dGntzSDnD%2bkvCVJyauSlGuytTy9mTUUpo5riri2shyf5ji20TruJgyLMAzRcFxAgHJav654xkgSnUvWKa9XcuGT12yZS3SVuQ8EQ/osvterT0ZgDyRLAcDiVtWOu9GzLlU4PtwNnjLCs9Nf4UOCqeGoiScAAAAASUVORK5CYII=\' /%3e%3c/svg%3e" width="1920" data-srcset="/assets/static/image2019-12-6_13-36-0.82a2fbd.558b197.png 480w, /assets/static/image2019-12-6_13-36-0.cbab2cf.558b197.png 1024w, /assets/static/image2019-12-6_13-36-0.2665e34.558b197.png 1920w" data-sizes="(max-width: 1920px) 100vw, 1920px" data-src="/assets/static/image2019-12-6_13-36-0.2665e34.558b197.png"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/image2019-12-6_13-36-0.2665e34.558b197.png" width="1920"></noscript></p>\n<p>SPL:</p>\n<pre class="language-text">index=perfharness sourcetype=perfharness*high_concurrency_test job_name=monitor_splunk fields.subtest=search test_id=&quot;test-8f384066-013b-11ea-8c34-0a1902872cca&quot; OR test_id=&quot;test-ca04691e-fee2-11e9-a2df-02bfbff270e6&quot; | rename data.* as * fields.search_name as search_name | search search_name=dense_stats_high_cardinality_4 |  rename proc_resource{}.cpu_pct AS cpu_used | rename proc_resource{}.search_props.sid as sid | eval resource_usage=mvzip(sid,cpu_used)  | eval resource_usage=mvzip(resource_usage, test_elapsed) | eval resource_usage=mvzip(resource_usage, search_name) | eval resource_usage=mvzip(resource_usage, test_id) | table resource_usage| mvexpand resource_usage | eval resource_usage=split(resource_usage,&quot;,&quot;) | eval sid=mvindex(resource_usage,0) | eval cpu=mvindex(resource_usage,1) | eval ts_elapsed=mvindex(resource_usage,2) | eval search_name=mvindex(resource_usage,3) |eval test_id=mvindex(resource_usage,4) | eval type=search_name+&quot;_&quot;+ test_id | chart avg(cpu) over ts_elapsed by test_id </pre>\n<p>The average values of these two is :</p>\n<table>\n<thead>\n<tr>\n<th>test_id</th>\n<th>avg(cpu)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>test-8f384066-013b-11ea-8c34-0a1902872cca</td>\n<td>60.487999999999985</td>\n</tr>\n<tr>\n<td>test-ca04691e-fee2-11e9-a2df-02bfbff270e6</td>\n<td>47.784</td>\n</tr>\n</tbody>\n</table>\n<p>SPL: </p>\n<pre class="language-text">index=perfharness sourcetype=perfharness*high_concurrency_test job_name=monitor_splunk fields.subtest=search test_id=&quot;test-8f384066-013b-11ea-8c34-0a1902872cca&quot; OR test_id=&quot;test-ca04691e-fee2-11e9-a2df-02bfbff270e6&quot; | rename data.* as * fields.search_name as search_name | search search_name=dense_stats_high_cardinality_4 |  rename proc_resource{}.cpu_pct AS cpu_used | rename proc_resource{}.search_props.sid as sid | eval resource_usage=mvzip(sid,cpu_used)  | eval resource_usage=mvzip(resource_usage, test_elapsed) | eval resource_usage=mvzip(resource_usage, search_name) | eval resource_usage=mvzip(resource_usage, test_id) | table resource_usage| mvexpand resource_usage | eval resource_usage=split(resource_usage,&quot;,&quot;) | eval sid=mvindex(resource_usage,0) | eval cpu=mvindex(resource_usage,1) | eval ts_elapsed=mvindex(resource_usage,2) | eval search_name=mvindex(resource_usage,3) |eval test_id=mvindex(resource_usage,4) | eval type=search_name+&quot;_&quot;+ test_id |stats avg(cpu) by test_id</pre>\n<p>The deviation between 47 and 60 is about 20%. <strong>We can not take this as the resource usage metrics</strong>. Because we consider the graph above shows that the resource usage is not big difference.In fact we run this two test using same build, same test code and same env. </p>\n<h3 id="2-how-to-eliminate-redundant-information-to-help-getting-a-value-that-can-reflect-the-reality-of-resources-usage"><a href="#2-how-to-eliminate-redundant-information-to-help-getting-a-value-that-can-reflect-the-reality-of-resources-usage" aria-hidden="true"><span class="icon icon-link"></span></a>2. How to eliminate redundant information to help getting a value that can reflect the reality of resources usage</h3>\n<p>So how this big deviation occurs in <strong>example1</strong>?</p>\n<p>I think is because there are so many redundant information.</p>\n<p>The resources usages we monitored is some kind of random.We have to find regularity of random data. </p>\n<p>I think <a href="https://en.wikipedia.org/wiki/Trend_line" target="_blank" rel="nofollow noopener noreferrer">trendline</a> (or <a href="https://en.wikipedia.org/wiki/Linear_regression" target="_blank" rel="nofollow noopener noreferrer">Linear regression</a> or Fitting)is good mathmatical mean.</p>\n<p>From wikipedia:</p>\n<blockquote>\n<p>Linear regression has many practical uses. Most applications fall into one of the following two broad categories:\nIf the goal is prediction, or forecasting, or error reduction, linear regression can be used to fit a predictive model to an observed data set of values of the response and explanatory variables. After developing such a model, if additional values of the explanatory variables are collected without an accompanying response value, the fitted model can be used to make a prediction of the response.\nIf the goal is to explain variation in the response variable that can be attributed to variation in the explanatory variables, linear regression analysis can be applied to quantify the strength of the relationship between the response and the explanatory variables, and in particular to determine whether some explanatory variables may have no linear relationship with the response at all, or to identify which subsets of explanatory variables may contain redundant information about the response.</p>\n</blockquote>\n<h2 id="the-mathmatical-mean-to-eliminate-redundant-data-plotting-a-linear-trendline"><a href="#the-mathmatical-mean-to-eliminate-redundant-data-plotting-a-linear-trendline" aria-hidden="true"><span class="icon icon-link"></span></a>The mathmatical mean to eliminate redundant data: Plotting a linear trendline</h2>\n<p>There is a implement in Splunk: <a href="https://wiki.splunk.com/Community:Plotting_a_linear_trendline" target="_blank" rel="nofollow noopener noreferrer">https://wiki.splunk.com/Community:Plotting_a_linear_trendline</a></p>\n<p>We can create a macro( <code class="language-text">lineartrend(2)</code> ) in splunk:</p>\n<p>SPL:</p>\n<pre class="language-text">eventstats count as numevents sum($x$) as sumX sum($y$) as sumY sum(eval($x$*$y$)) as sumXY sum(eval($x$*$x$)) as sumX2 sum(eval($y$*$y$)) as sumY2 | eval slope=((numevents*sumXY)-(sumX*sumY))/((numevents*sumX2)-(sumX*sumX)) | eval yintercept= (sumY-(slope*sumX))/numevents | eval newY=(yintercept + (slope*$x$)) | eval R=((numevents*sumXY) - (sumX*sumY))/sqrt(((numevents*sumX2)-(sumX*sumX))* ((numevents*sumY2)-(sumY*sumY))) | eval R2=R*R</pre>\n<p>The macro <code class="language-text">lineartrend</code> gets passed two arguments, x and y values from each event, and creates the following fields for each event:</p>\n<ul>\n<li>slope - the slope of the trendline,</li>\n<li>yintercept - the y-intercept of the trendline</li>\n<li>R - coefficient of correlation</li>\n<li>R2- R-squared, the coefficent of determination</li>\n<li>newY - the trendline values</li>\n</ul>\n<p>Trendline helped us eliminating the redundant data. Now we can take the <strong>avg(newY)</strong> as the value we want.</p>\n<h2 id="the-average-value-based-on-trendline-value-can-reflect-the-reality"><a href="#the-average-value-based-on-trendline-value-can-reflect-the-reality" aria-hidden="true"><span class="icon icon-link"></span></a>The average value based on trendline value can reflect the reality</h2>\n<p>Back to our <strong>example1</strong>, let\'s get the value by our new way to check if this new value can reflect the resource usage reality.</p>\n<p>We process two test respectively:</p>\n<ol>\n<li>Firstly we draw trendline</li>\n<li>Secondly we get the avg(newY) as the value we want</li>\n<li>Check wether two values is closely</li>\n</ol>\n<h3 id="test_idtest-8f384066-013b-11ea-8c34-0a1902872cca"><a href="#test_idtest-8f384066-013b-11ea-8c34-0a1902872cca" aria-hidden="true"><span class="icon icon-link"></span></a>test_id="test-8f384066-013b-11ea-8c34-0a1902872cca"</h3>\n<p>1.draw trend line:</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1920 590\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-4\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-4)\' width=\'1920\' height=\'590\' xlink:href=\'data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAUCAYAAAA9djs/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEsElEQVRYw91Yh3LbOBDl//%2beJ8U%2bx5aoxt4rWPbeAwmJ0tGx40xu7HBmhyTKYsvbBRZWXpRSVrVkeSGq66RtlaRZrtv434HYx3FFWUmGvqLtxc1bceIcVIgT5eJltcTNIOMwSN%2bDhs9BlueH4nqBeEGolW2VkpPjieP50rStjOOo%2b49o84NIwjCSUg0SQOH7J1vun3fy9XErthNIrkYRGfWcz0KWLJ4BFmHjS//m6YdR/LKTTdyInTSyBe3TVupuGj8Mn4esvu8ljGJ4NxSDBiqhgAS2nVxfojjRiidJKseTKw7agHX5Gx7LeJqGGOb45TN58tJ%2b26a/FzRB6uMq%2bmIIlFU1wX2hCJXUEDH/i7bxPGYx7kPTRW5jiCsE9Avv/u20aoC1xv8Lkh9hTavCfm/ygIH9H6EZhgr5I69bvV2urvc7cgwrPIdXEMC9n23LAX%2bChpl/VNRytw%2buBLsdY3LSeyD%2bMx3W%2bs7ngKRqxc%2brN0F0nOk9zyktgQAlDt7Ldcw7yGvJG/VLYWLGxRXOIziZrs19ySBW07RaGVo8xOJ2mEmjujksVrw0XB%2bUhnEt6w7XUJ7nZDCyOyu%2bx/G5arv5YDUl4gyhscX6O/QxVORqi30ZWWbnOkB5yl8b%2bVfQcWsUS6nuSjFO3gaZxGVzFm64UZ59VOat3jHzjhDQCMc3jWDGdDh/bIL03EdFLrlpYVDzfSMT0ZtCprbr9TrGgabfRT2zPTry/f5BHh5/iL07SF3XlxCoFEKgSCWuc01fTo7s4kgSfAdlJmE1tXt5KneHE/pdSesKhREhW2ky319PnoQllO0a6YZe828oWFKcPcOHYZA3kyHp%2bWo2js4VZa3D4S0Pj%2baHmbc2dHIxtHnaXklWFBLh1BtGkVT1xNuq6/oK7uc3iELRM4RiP9cF9BLhWTSNfHd8FEbNbIBaShjg3g0Q56k84B1XWBCGi6oM7a7YUai/aWga1ckS%2bQKvfHNcefR9jM91n3YEvu9RgB2TBMqgWsUapLQuESolPN3NoTPKCQqniH9zFK0VqtW0uqDgZyHAim85cAmrEqXxboaphhE8xix%2b9lLRSFg0538nKTUMtcchhJlLfoT7WsYndDdBtpr5m05pQ%2b6iBEpX%2bG%2bBkgbGryfDwojHNAbinLNhQ7TRIQ%2boV0J4/LVdw3oNXhHinVQDwoe4%2bE8/s24LlDAveFl13iVMUnMzek5pHu99Mr1rVNrYqh9nY81GR7vqh6vtk3CPqlK2UfL6QYje4cUHkcCESFjxrf/RTljZQSLfDr50MAILIV6akFg4tRjLPttP9NjpUqXFfKX/vbSQO9vT9wxMXmq%2bcyAfw4trdfgm8Xvi3Z959X2n5ybIC3uE4AZrEVHPXixeks%2b8Bs1X6XUmRQ8I4RyhsSzrV4/CSZrJZruTIIwmWKIMft7Y%2biZIMwLEfuCfwnCRw/Ek9v6gL1CYQ/552qLNmYQkL3snJ8Q1FyNP9vMihUIewevxaaNvlij47nCU560t3I6pPOeSNxUpylLLxfKbnmU5vkW/7wfTmQFybjDXlOse2vdI0OYmi7z3kNVUr2tbovX%2bI82vP1SQhqARmIl/61z/hpa31AL/Asmhq9xMi%2bJjAAAAAElFTkSuQmCC\' /%3e%3c/svg%3e" width="1920" data-srcset="/assets/static/image2019-12-6_14-46-39.82a2fbd.1b7f3f8.png 480w, /assets/static/image2019-12-6_14-46-39.cbab2cf.1b7f3f8.png 1024w, /assets/static/image2019-12-6_14-46-39.2665e34.1b7f3f8.png 1920w" data-sizes="(max-width: 1920px) 100vw, 1920px" data-src="/assets/static/image2019-12-6_14-46-39.2665e34.1b7f3f8.png"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/image2019-12-6_14-46-39.2665e34.1b7f3f8.png" width="1920"></noscript></p>\n<p>SPL:</p>\n<pre class="language-text">index=perfharness sourcetype=perfharness*high_concurrency_test job_name=monitor_splunk fields.subtest=search test_id=&quot;test-8f384066-013b-11ea-8c34-0a1902872cca&quot; | rename data.* as * fields.search_name as search_name | search search_name=dense_stats_high_cardinality_4 |  rename proc_resource{}.cpu_pct AS cpu_used | rename proc_resource{}.search_props.sid as sid | eval resource_usage=mvzip(sid,cpu_used)  | eval resource_usage=mvzip(resource_usage, test_elapsed) | eval resource_usage=mvzip(resource_usage, search_name) | eval resource_usage=mvzip(resource_usage, test_id) | table resource_usage| mvexpand resource_usage | eval resource_usage=split(resource_usage,&quot;,&quot;) | eval sid=mvindex(resource_usage,0) | eval cpu=mvindex(resource_usage,1) |  eval cpu=cpu/16| eval ts_elapsed=mvindex(resource_usage,2) | eval search_name=mvindex(resource_usage,3) |eval test_id=mvindex(resource_usage,4) | eval type=search_name+&quot;_&quot;+ test_id |chart avg(cpu) as avg_cpu over ts_elapsed | `lineartrend(ts_elapsed,avg_cpu)` | chart sum(avg_cpu) sum(newY) over ts_elapsed</pre>\n<p>2.get the avg(newY)</p>\n<table>\n<thead>\n<tr>\n<th>avg(newY2)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>2.8733333333333335</td>\n</tr>\n</tbody>\n</table>\n<p>SPL:</p>\n<pre class="language-text">index=perfharness sourcetype=perfharness*high_concurrency_test job_name=monitor_splunk fields.subtest=search test_id=&quot;test-8f384066-013b-11ea-8c34-0a1902872cca&quot; | rename data.* as * fields.search_name as search_name | search search_name=dense_stats_high_cardinality_4 |  rename proc_resource{}.cpu_pct AS cpu_used | rename proc_resource{}.search_props.sid as sid | eval resource_usage=mvzip(sid,cpu_used)  | eval resource_usage=mvzip(resource_usage, test_elapsed) | eval resource_usage=mvzip(resource_usage, search_name) | eval resource_usage=mvzip(resource_usage, test_id) | table resource_usage| mvexpand resource_usage | eval resource_usage=split(resource_usage,&quot;,&quot;) | eval sid=mvindex(resource_usage,0) | eval cpu=mvindex(resource_usage,1) |  eval cpu=cpu/16| eval ts_elapsed=mvindex(resource_usage,2) | eval search_name=mvindex(resource_usage,3) |eval test_id=mvindex(resource_usage,4) | eval type=search_name+&quot;_&quot;+ test_id |chart avg(cpu) as avg_cpu over ts_elapsed | `lineartrend(ts_elapsed,avg_cpu)` | chart sum(avg_cpu) sum(newY) as newY2  over ts_elapsed | stats avg(newY2)</pre>\n<h3 id="test_idtest-ca04691e-fee2-11e9-a2df-02bfbff270e6"><a href="#test_idtest-ca04691e-fee2-11e9-a2df-02bfbff270e6" aria-hidden="true"><span class="icon icon-link"></span></a>test_id="test-ca04691e-fee2-11e9-a2df-02bfbff270e6"</h3>\n<p>1.draw trend line:</p>\n<p><img class="g-image g-image--lazy g-image--loading" src="data:image/svg+xml,%3csvg fill=\'none\' viewBox=\'0 0 1920 585\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'%3e%3cdefs%3e%3cfilter id=\'__svg-blur-6\'%3e%3cfeGaussianBlur in=\'SourceGraphic\' stdDeviation=\'40\'/%3e%3c/filter%3e%3c/defs%3e%3cimage x=\'0\' y=\'0\' filter=\'url(%23__svg-blur-6)\' width=\'1920\' height=\'585\' xlink:href=\'data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAUCAYAAAA9djs/AAAACXBIWXMAAAsSAAALEgHS3X78AAAERklEQVRYw9VYaY/jNgzN//9nLfqxaBez005OJ74tX/IhmeWjLSPJOMceQDcCiJnQOsinR4rSKkkzgkRxSmi11uQHEcVJSl3fk7UDBWHE3xNKMyX9rLXUNA3FUURJHFMYhqSyjMY20Cu1VZIqSrKcHc5oGAbq2elU5ZQXJfXGiC7j39AVZUUqL9jHgaJC0%2b9fD/THu0e/ve3pz21IlvUAB6C9iqzgIHYa0rYtdV0/o9O2HTWsg1NohgEZ%2b3UMjiVtBmpY3F/M9WqyglOgexDGImGUyIe26yhk2p/8UEIEDf3w%2bxSEMyiv3lbPdgQon3VjxA8vEvnLDJCYvZbhCd2vFs/27je3gdcbuXrFuF2Se7t83ucTAK8ew86htGpoG%2bc3w/WWfnVJ70cUs2QmWQ6RZTETBZ9b5/uov08K2jAAFZ9Q9Ok4/kkhcK/ZG2PsNA7HppvD/mTqY/fjUgvQh7R8GAoXSfCMIA8dx0JeVtIxq2TBuu2pbMaa4JpmMnY6G3Ld0jrKxbimN3O9%2bAjUZxt239hxrpOqxC53Sj08Bo0ZqTJMZ9pwJq4VuuNFSoq5%2boOzEDge5jWFrPPSSirDwX6mGcCCgVhDs2EbBiLgcW4RrL8cUvfFTHVIwhsh803rwvlDWgjE5ipEWwbfhYQr7FbO2LLVFJWKMl2IpHVBnkrpix/QGxc/ma6oM1wZ9qO0/H9neuptL799LpHfAy6cVCH9ikbzuJj15cwu1wDWjkHRnfnh3QerrnfaZ0Dq1lxsBsCALZvtnt7e/6F/PzZc1AWXIdBbI3QN8oq2SS50R1Ix7GTdNaQYhEyXi1K2tfzdJgl9OQUiYZmLPmEwIXGVi%2bRNSac8o79PvgDsF4oU68773BL0wTq6bwX0A99jsAm6a0WHjVF8oVtHKdttLkISPqCqDaOYEq5qhQGOShnHN9D0VS0gmIW4frZZO1xWi8NIRwAsYsycmdMKxioOlZIp2rOO6TpYMb4zSzI6WzQ1/XX0halpXZ5JwQBX9JXL9aPK5tPnlg8rl5FdbJ87LfFyls0vjrxbuvnIm/R3MrA9MyqrGwkLxPR1Yl1qqm65b3Pze8fjPc4/j06d1VJ9/382xQk3YhCQzYWRHM8VJ7ZqOnGcHNi5md5XNxGnR4JuHzBZGICbn9aNXIXdruHKC52Z6CqPIHw1hm6k8EjrpmnlcWTWmfGxBHoz6fBNTzrHENHxXFjHzY/1O1y/%2bRvmBuVLZsY%2bTOnImR25CRnf4/yUFtUcWpLheR485pwzsub5IXcLIXzEa8/HZicJwh0x0G13B3kEcW8GeClCFq3qmhxwB%2b9Ee%2b/IOi3sgaP7w1H0%2bB9jy6qi3d6j3cETQwGMUjmttzt5bXJr4sUJa%2bLK7cIJyWrD/XKVz0aXRcFreLwh3TwW86zZB9gp%2bYaPPI9zBGyBnfZXuAvgwcU7nuhjvSGfs/831/0/WDwtjf0P5sq0CvaPA0cAAAAASUVORK5CYII=\' /%3e%3c/svg%3e" width="1920" data-srcset="/assets/static/image2019-12-6_14-54-6.82a2fbd.f60a0e4.png 480w, /assets/static/image2019-12-6_14-54-6.cbab2cf.f60a0e4.png 1024w, /assets/static/image2019-12-6_14-54-6.2665e34.f60a0e4.png 1920w" data-sizes="(max-width: 1920px) 100vw, 1920px" data-src="/assets/static/image2019-12-6_14-54-6.2665e34.f60a0e4.png"><noscript><img class="g-image g-image--lazy g-image--loaded" src="/assets/static/image2019-12-6_14-54-6.2665e34.f60a0e4.png" width="1920"></noscript></p>\n<p>SPL:</p>\n<pre class="language-text">index=perfharness sourcetype=perfharness*high_concurrency_test job_name=monitor_splunk fields.subtest=search test_id=&quot;test-ca04691e-fee2-11e9-a2df-02bfbff270e6&quot; | rename data.* as * fields.search_name as search_name | search search_name=dense_stats_high_cardinality_4 |  rename proc_resource{}.cpu_pct AS cpu_used | rename proc_resource{}.search_props.sid as sid | eval resource_usage=mvzip(sid,cpu_used)  | eval resource_usage=mvzip(resource_usage, test_elapsed) | eval resource_usage=mvzip(resource_usage, search_name) | eval resource_usage=mvzip(resource_usage, test_id) | table resource_usage| mvexpand resource_usage | eval resource_usage=split(resource_usage,&quot;,&quot;) | eval sid=mvindex(resource_usage,0) | eval cpu=mvindex(resource_usage,1)| eval cpu=cpu/16 | eval ts_elapsed=mvindex(resource_usage,2) | eval search_name=mvindex(resource_usage,3) |eval test_id=mvindex(resource_usage,4) | eval type=search_name+&quot;_&quot;+ test_id |chart avg(cpu) as avg_cpu over ts_elapsed | `lineartrend(ts_elapsed,avg_cpu)` | chart sum(avg_cpu) sum(newY) over ts_elapsed</pre>\n<p>2.get the avg(newY)</p>\n<table>\n<thead>\n<tr>\n<th>avg(newY2)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>2.8749999999999996</td>\n</tr>\n</tbody>\n</table>\n<p>SPL:</p>\n<pre class="language-text">index=perfharness sourcetype=perfharness*high_concurrency_test job_name=monitor_splunk fields.subtest=search test_id=&quot;test-ca04691e-fee2-11e9-a2df-02bfbff270e6&quot; | rename data.* as * fields.search_name as search_name | search search_name=dense_stats_high_cardinality_4 |  rename proc_resource{}.cpu_pct AS cpu_used | rename proc_resource{}.search_props.sid as sid | eval resource_usage=mvzip(sid,cpu_used)  | eval resource_usage=mvzip(resource_usage, test_elapsed) | eval resource_usage=mvzip(resource_usage, search_name) | eval resource_usage=mvzip(resource_usage, test_id) | table resource_usage| mvexpand resource_usage | eval resource_usage=split(resource_usage,&quot;,&quot;) | eval sid=mvindex(resource_usage,0) | eval cpu=mvindex(resource_usage,1)| eval cpu=cpu/16 | eval ts_elapsed=mvindex(resource_usage,2) | eval search_name=mvindex(resource_usage,3) |eval test_id=mvindex(resource_usage,4) | eval type=search_name+&quot;_&quot;+ test_id |chart avg(cpu) as avg_cpu over ts_elapsed | `lineartrend(ts_elapsed,avg_cpu)` | chart sum(avg_cpu) sum(newY) as newY2  over ts_elapsed | stats avg(newY2)</pre>\n<h3 id="check"><a href="#check" aria-hidden="true"><span class="icon icon-link"></span></a>Check</h3>\n<p>2.873 and 2.874 is very close.</p>\n<p>So we can see this way is work and good to describe the resource usage reality.</p>\n<p>And we still check this way in other situation,like resource usage graph is clearly different and the <strong>avg(newY)</strong> is far different. </p>\n<h2 id="rules"><a href="#rules" aria-hidden="true"><span class="icon icon-link"></span></a>Rules</h2>\n<p>Based on the preceding discussion I think the <strong>avg(newY)</strong> value is relatively accurately.</p>\n<p><strong>Now we set a rule that deviation of avg(newY) &#x3C;10% is one condition.</strong></p>\n<p>Meantime, extreme peak value may be mitigated in this case. So we <strong>need another condition that is the peek value ( max(resource_usage) ) is close(&#x3C;10%)</strong>.</p>\n<p><strong>Only this two conditions are both pass then the KPI pass.</strong></p>\n'}}]}}}}}}]);