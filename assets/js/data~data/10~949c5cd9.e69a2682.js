(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{260:function(e){e.exports={data:{tag:{title:"definitions",belongsTo:{edges:[{node:{title:"Testing Type Definitions",path:"/testing-type-definitions",date:"30. October 2019",timeToRead:5,description:"What is xxx testing",coverImage:null,content:'<p>今天来分享下各种测试类型的定义：</p>\n<blockquote>\n<p>咳咳，本博客中英文混乱，轻拍🤪</p>\n</blockquote>\n<h3 id="what-is-performance-testing"><a href="#what-is-performance-testing" aria-hidden="true"><span class="icon icon-link"></span></a>What is Performance Testing?</h3>\n<p>Performance Testing is associated with a number of interchangeable names. The performance test can also referred to as a stress test, load testing or volume testing and is the application of a process that verifies the ability of a system to handle varying degrees of concurrent users and system transactions.  The Goals of performance testing are driven by a number of factors that could include business volumetric requirements and service level agreements (SLA) as well as perceived and actual performance risk.</p>\n<p>The volumetric requirements and SLAs are typically defined within a Performance Requirements section of a Non Functional Testing Requirements document.  Understanding performance risk helps to prioritise the objectives and scope of the non functional testing. During testing varying degrees of user and system transactions (the performance test workload) are executed concurrently. User and system response times are measured and referenced against the Non Functional requirements. During performance testing, system components are monitored to verify the stability of the system under test and to identity points that require performance tuning these include; The Network Media, System servers, Databases, Messaging providers, Disk arrays, and software components.</p>\n<h3 id="what-is-load-testing"><a href="#what-is-load-testing" aria-hidden="true"><span class="icon icon-link"></span></a>What is Load Testing?</h3>\n<p>Load testing is the process of executing a concurrent user load and/or a system load onto a system, at incremented concurrency ramp-up rates, to determine its stability, performance and integrity.</p>\n<p>During load testing system components are monitored and correlated with transaction response times.  At a point where a system becomes unstable due to erratic or dramatically extended response times the system will have reached its benchmark.   At this point an analysis should take place to identify the bottlenecks and the tuning required to resolve them.  The results of the analysis may indicate a requirement for vertical or horizontal scaling.</p>\n<p>A load test can be executed against an end-to-end IT system or against specific components such as Firewalls or database servers. Typically the goals of load testing are:</p>\n<ul>\n<li>Benchmark a systems performance i.e. to determine its thresholds before instability occurs</li>\n<li>Identify and rectify performance issues in iterative cycles of load testing and performance tuning    </li>\n</ul>\n<h3 id="what-is-stress-testing"><a href="#what-is-stress-testing" aria-hidden="true"><span class="icon icon-link"></span></a>What is Stress Testing?</h3>\n<p>Stress testing is a generic term used to describe the process of putting a system through exertion or stress. The Stress test can combine aspects of performance testing and security testing. An example in case is the process of stress testing firewalls which require concurrent system loads combined with actual attacks against the component. Stress testing is typically used to benchmark a systems performance to determine a systems upper performance limits and to verify how a system recovers when the workload is reduced.</p>\n<h3 id="what-is-benchmark-testing"><a href="#what-is-benchmark-testing" aria-hidden="true"><span class="icon icon-link"></span></a>What is Benchmark Testing?</h3>\n<p>Benchmark testing is the process of load testing a component or an entire end to end IT system to determine the performance characteristics of the application. The benchmark test is repeatable in that the performance measurements captured will vary only a few percent each time the test is run. This enables single changes to be made to the application or infrastructure in an attempt to determine if there is a performance improvement or degradation.</p>\n<p>Benchmark testing can combine aspects of security testing.- An example in case is benchmark testing  firewalls. This requires system and or user loads combined with security violations concurrently executed against the component to determine its performance benchmark.</p>\n<p>The goals of benchmark testing typically fall into two categories:</p>\n<ul>\n<li>To test the system to measure how a change affects its performance characteristics.</li>\n<li>To test and tune the system to reach a performance requirement or service level agreement (SLA). In this case a series of benchmark tests are conducted in conjunction with iterative cycles of performance tuning.</li>\n</ul>\n<h3 id="what-is-volume-testing"><a href="#what-is-volume-testing" aria-hidden="true"><span class="icon icon-link"></span></a>What is Volume Testing?</h3>\n<p>This is a term used to describe load testing and performance testing or stress testing.  It is the process of placing concurrent user and or system generated loads onto a system under test.</p>\n<p>The goals of volume testing are to determine:</p>\n<ul>\n<li>The volume or load at which systems stability degrades.</li>\n<li>To identify and then tune issues preventing a system from reaching required service level agreements (SLA) or volumetric targets.</li>\n</ul>\n<p>A typical performance test or load testing cycle combines both volume testing and performance tuning to ensure a system reaches its required benchmarks.</p>\n<h3 id="what-is-performance-tuning"><a href="#what-is-performance-tuning" aria-hidden="true"><span class="icon icon-link"></span></a>What is Performance Tuning?</h3>\n<p>As performance bottlenecks are identified during load testing and performance testing, these issues are commonly rectified through a process of performance tuning. Performance tuning can involve configuration changes to hardware, software and network components.</p>\n<p>A common bottleneck is the configuration of the application and database servers. Performance tuning can also include tuning SQL queries and tuning an applications underlying code to cater for concurrency and to improve efficiency. Performance tuning can result in hardware changes being made. This is a last resort; ideally tuning changes will result in a reduction of resource utilisation.</p>\n<h3 id="what-is-performance-modelling"><a href="#what-is-performance-modelling" aria-hidden="true"><span class="icon icon-link"></span></a>What is Performance Modelling?</h3>\n<p>Performance modelling is the process of simulating various user and system loads against varying system configurations by using a mathematical approximation of how the model works.  Generally this does not require the use of a Load Test environment.  This is typically much cheaper than performance testing and can produce very accurate results.</p>\n<p>For example, servers are monitored while low level user transactions are executed against the system.  A typical Performance Modelling process results in:\n1. The server counters are correlated with transaction response times.\n2. The information along with system specifications are fed into a mathematical modelling tool.\n3. After the data has been entered various models are produced to demonstrate the system\'s behaviour in varying configurations and user and/or system loads.\n4. The outputs of performance modelling are used for capacity planning.</p>\n<h3 id="what-is-software-regression-testing"><a href="#what-is-software-regression-testing" aria-hidden="true"><span class="icon icon-link"></span></a>What is Software Regression Testing?</h3>\n<p>Regression testing is used to verify system components that have typically already been proven stable.  This occurs after new functionality or code changes have been released.  Regression testing verifies that components that were previously stable are still stable and fit for purpose after changes to a system\'s code base or configuration.  Typically in a mature testing approach a regression test pack is automated using automated software testing tools.  Automated Software Testing is typically most successful when implemented by an experienced resource.  Our company, Testing Performance Ltd, offers Automated Software Testing as a service.</p>\n<blockquote>\n<p>Source: <a href="http://www.testingperformance.org" target="_blank" rel="nofollow noopener noreferrer">testingperformance.org</a></p>\n</blockquote>\n'}}]}}}}}}]);