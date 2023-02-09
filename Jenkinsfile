pipeline {
    agent any
    
    stages {
        // stage('git clone') {
        //     steps() {
        //         git 'https://github.com/leeseok0916/jenkinsTest.git'
        //     }
        // }
        

        stage('Build') {
            steps {
                git branch: 'master',
                url: 'https://github.com/rkrp3692/report_test1.git'
                // sh "npm install"
            }
        }


        stage('Test Run') {
            steps {
                echo 'npm install'
                //echo 'npx playwright test'
                echo 'npx cucumber-js -p test_runner --format json:report.json --tags " @test2"'
            }
        }




        stage('Test Result') {

            /*Create New Issue*/
            steps
            {
                //repository private        //SSH
                // bat 'curl -X GET -u jh.jang@tbell.co.kr:ATATT3xFfGF0q-LGTDcf37974WhtIuf1QAvSU-8GTh36DMoz4gleSEXuqjr9hKs1RI-5QlEKjqkfJHOXXdSeZxuelSZfoXFI0F6_ozFq4FFF8d0AHx4LSSksY_KbltQT9DP4g7bZGYTUALArsMZZGlhWxyK_c2ZnbOqU4jS_1OIiOgsYjigYGUQ=4CA45D7F -H "Content-Type: application/json" https://jhxray.atlassian.net/rest/api/latest/issue/KHNP-7'

                // script
                // {
                //     def testIssue = [fields: [
                //         project: [key: 'KHNP'],
                //         summary: 'New Jira Create Issue Test',
                //         description: 'Test Bug',
                //         //  issuetype: [id: '10011']]]
                //         issuetype:[name:'Test']]]
                //         // issuetype: [id: '3']]]

                //         // response = jiraNewIssue issue: createIssue, site: 'KHNP'
                //         // response = jiraNewIssue issue: testIssue, site: 'KHNP'
                //         // response = jiraNewIssue issue: testIssue, site: 'LOCAL'
                //         // response = jiraGetIssue idOrKey: 'KHNP-8', site: 'LOCAL'

                //         //response = jiraGetComment idOrKey:'10006',commentId: '10000',site: 'LOCAL'
                //         response = jiraNewIssue issue: testIssue, site: 'LOCAL'

                //         // response = jiraGetFields site: 'LOCAL'
                //         // response = jiraGetProjects site: 'LOCAL'
                //         // response = jiraGetServerInfo site: 'LOCAL'

                //         echo response.successful.toString()
                //         echo response.data.toString()

                // }

                // bat 'curl -D- -u jh.jang@tbell.co.kr:ATATT3xFfGF0q-LGTDcf37974WhtIuf1QAvSU-8GTh36DMoz4gleSEXuqjr9hKs1RI-5QlEKjqkfJHOXXdSeZxuelSZfoXFI0F6_ozFq4FFF8d0AHx4LSSksY_KbltQT9DP4g7bZGYTUALArsMZZGlhWxyK_c2ZnbOqU4jS_1OIiOgsYjigYGUQ=4CA45D7F -X POST --data {"fields": {"project":{"key": "KHNP"},"summary": "Create Issue Test","description": "Test","issuetype": {"name": "Bug"}}} -H "Content-Type: application/json" https://jhxray.atlassian.net/rest/api/2/issue'
            
            
            
            





                                script
                                {
  

                def getMaxLengthSummary(){
                    return 200
                }

                def getMaxLengthErrorDetail(){
                    return 2000
                }

                def getEncoding(){
                    return "UTF-8"
                }

                def getJiraBaseUrl(){
                    return getPropertyFrom("jira.property", "jira_baseurl", "https://tmobi.atlassian.net/")//https://tmapauto.atlassian.net/ 2022.04.20
                }
                def setJiraBaseUrl(def baseurl){
                    setPropertyFrom("jira.property", "jira_baseurl", baseurl)
                }

                def getJiraApiAuth(){
                    return getPropertyFrom("jira.property", "jira_api_auth", null)
                }

                def getCucumberProperty(def key, def defaultVal){
                    return getPropertyFrom('cucumber.properties', key, defaultVal)
                }
                def setCucumberProperty(def key, def value){
                    return setPropertyTo('cucumber.properties', key, value)
                }

                boolean isCollectionOrArray(object) {
                    [Collection, Object[]].any { it.isAssignableFrom(object.getClass()) }
                }

                def getScriptLoc() {
                    return getCucumberProperty("cucumber.scriptLoc", "scripts")
                }
                def getScriptZipFile(){
                    return getCucumberProperty("cucumber.scriptZipFile", "reports.zip")
                }
                def getReportDir() {
                    return getCucumberProperty("cucumber.reportDir", "reports")
                }

                def getReportExt() {
                    return getCucumberProperty("cucumber.reportExt", ".json")
                }

                def getReportZipFile() {
                    return getCucumberProperty("cucumber.reportZipFile", "reports.zip")
                }

                def getReportFile() {
                    return getCucumberProperty("cucumber.reportFile", "reports.json")
                }

                def getReportFileSum(){
                    return "reports_sum.json"
                }

                def getErrorScreenshotPrefix(){
                    return "error_"
                }

                def getErrorScreenshotDir(){
                    return getCucumberProperty("cucumber_screenshotDir", "screenshots")
                }

                def getXrayProperty(def key){
                    return getPropertyFrom('xray.properties', key, null)
                }
                def setXrayProperty(def key, def value){
                    return setPropertyTo('xray.properties', key, value)    
                }

                def getXrayBaseUrl() {
                    def url = getXrayProperty("xray_baseurl")
                    if(!url){
                        return  "https://xray.cloud.getxray.app/"
                    }

                    return url
                }

                def getXrayAuth(){
                    return [ "client_id": "${getXrayProperty("xray_auth_client_id")}","client_secret": "${getXrayProperty("xray_auth_client_secret")}" ]
                }
                def getXaryApiAuth() {
                    return  "Bearer "  + getXrayProperty("xray_auth_api")
                }
                def setXrayApiAuth(String apiKey){
                    return setXrayProperty("xray_auth_api",apiKey)
                }
                def getXrayProjectKey() {
                    return getXrayProperty("xray_projectKey")
                }
                def getXrayTestPlanId(){
                    return getXrayProperty("xray_testplan_id")
                }
                def setXrayTestPlanId(def id){
                    return setXrayProperty("xray_testplan_id",id)
                }
                def getXrayTestCaseKeys(){
                    return getXrayProperty("xray_testcase_keys")?.split(",")
                }
                def setXrayTestCaseKeys(def keys){
                    return setXrayProperty("xray_testcase_keys",keys?.join(","))
                }
                def getXrayTestCaseIds(){
                    return getXrayProperty("xray_testcase_ids")?.split(",")
                }
                def setXrayTestCaseIds(def ids){
                    return setXrayProperty("xray_testcase_ids",ids?.join(","))
                }
                def getXrayTestExecutionId(){
                    return getXrayProperty("xray_testexecution_id")
                }
                def setXrayTestExecutionId(def id){
                    return setXrayProperty("xray_testexecution_id",id)
                }
                def getXrayTestExecutionKey(){
                    return getXrayProperty("xray_testexecution_key")
                }
                def setXrayTestExecutionKey(def key){
                    return setXrayProperty("xray_testexecution_key",key)
                }
                def getXrayTestPlanKey(){
                    return getXrayProperty("xray_testplan_key")
                }
                def setXrayTestPlanKey(def key){
                    return setXrayProperty("xray_testplan_key",key)
                }
                def getXrayTestCasePriorityIds(){
                    return getXrayProperty("xray_testcase_priority_ids")?.split(",")
                }
                def setXrayTestCasePriorityIds(def ids){
                    return setXrayProperty("xray_testcase_priority_ids",ids?.join(","))
                }
                def getXrayDefectProjectKey(){
                    return getXrayProperty("xray_defect_project_key")
                }
                def getXrayDefectIssuetypeName(){
                    return getXrayProperty("xray_defect_issuetype_name")
                }

                def getXrayTestCurrentIndex(){

                    def index = getXrayProperty("xray_test_current_index") as Integer
                    if( index == null ){
                        return 0
                    }

                    return index;
                }
                def getNextIndex(){

                    def issueKeyList = getXrayTestCaseKeys()
                    if(!issueKeyList || issueKeyList.size()){
                        return null
                    }

                    def index = getXrayTestCurrentIndex() 
                    if( index == null || issueKeyList.size() <= index) {            
                        return null
                    }    

                    setXrayProperty("xray_test_current_index", index++)
                    return index
                }
                def getXrayTestCurrent(){
                    def issueKeyList = getXrayTestCaseKeys()
                    if(!issueKeyList){
                        return null
                    }

                    def index = getXrayTestCurrentIndex() as Integer
                    if( index == null || issueKeyList.size() <= index ){
                        return null
                    }

                    return issueKeyList[index]
                }

                // TODO 미구현
                def getXrayTestCurrentSummary(){
                    return "----- summary ------"
                }

                def getXrayDefectAssigneeId(){
                    return getXrayProperty("xray_defect_assignee_id")
                }

                def getXrayErrorDetailUrl(def testExecIssueKey, def testIssueKey){
                    getJiraBaseUrl() + "/plugins/servlet/ac/com.xpandit.plugins.xray/execution-page?ac.testExecIssueKey=${testExecIssueKey}&ac.testIssueKey=${testIssueKey}"
                }

                def createJiraIssueForDefect(def projectId, def issuetypeId, def priorityId, def runIssueKey, def summary, def assigneeId, def errorDetail ){

                    // limit 
                    if( summary.size() > getMaxLengthSummary() ){
                        summary = summary.substring(0, getMaxLengthSummary()) + " ..."
                    } 

                    if( errorDetail.size() > getMaxLengthErrorDetail() ){
                        errorDetail = errorDetail.substring(0, getMaxLengthErrorDetail()) + " ..."
                    }
                    // error detail link add link error
                    def errorDetailLink =  getXrayErrorDetailUrl(getXrayTestExecutionKey(), runIssueKey)


                    println "----> createJiraIssueForDefect"
                    def labels = ["automation"]
                    def body =
                            [
                                    "update": [:],
                                    "fields": [
                                            "project": [
                                                    "id": projectId
                                            ],
                                            "summary": summary ,
                                            "issuetype": [
                                                    "id": issuetypeId
                                            ],
                                            "priority":[
                                                    "id": priorityId
                                            ],
                                            "assignee": [
                                                "id": assigneeId
                                            ],
                                            "labels": labels,
                                            "description": [
                                                    "type": "doc",
                                                    "version": 1,
                                                    "content": [
                                                            [
                                                                    "type": "codeBlock",
                                                                    "attrs": [
                                                                        "language": "java"
                                                                    ],
                                                                    "content": [
                                                                            [
                                                                                    "text": """${errorDetail}""",
                                                                                    "type": "text",
                                                                            ]

                                                                    ]
                                                            ],
                                                            [
                                                                "type": "paragraph",
                                                                "content": [
                                                                    [
                                                                        "type": "text",
                                                                        "text": "ErrorDetails",
                                                                        "marks": [
                                                                            [
                                                                            "type": "link",
                                                                            "attrs": [
                                                                                "href": "${errorDetailLink}",
                                                                                "title": "ErrorDetails"
                                                                                ]
                                                                            ]
                                                                        ]
                                                                    ]
                                                                ]
                                                            ]


                                                    ]
                                            ]

                                    ]
                            ]

                    println "---> body"
                    println body
                    def uriBuilder = new URIBuilder(getJiraBaseUrl())
                    uriBuilder.setPath("/rest/api/3/issue")
                    String url = uriBuilder.build();

                    var HttpBuilder http = HttpBuilder.configure {
                        request.uri = url
                        request.headers['Authorization'] = getJiraApiAuth()
                        request.contentType = 'application/json'
                    };

                    def resultJson
                    http.post() {
                        request.body = body
                        response.success  { resp, json ->
                            resultJson = json
                        }

                        response.failure { resp, json ->
                            println json
                            // t.printStackTrace()
                            throw new RuntimeException("Error respone (${resp.statusCode}): ${json}")
                        }
                    }

                    println "-->> issue create "
                    println resultJson
                    return  resultJson
                }


                def createXrayApiKey()  {

                    def uriBuilder = new URIBuilder(getXrayBaseUrl())
                    uriBuilder.setPath("/api/v2/authenticate")
                    String url = uriBuilder.build();

                    var HttpBuilder http = HttpBuilder.configure {
                        request.uri = url
                        request.contentType = 'application/json'
                    };

                    http.post() {
                        request.body = getXrayAuth()
                        response.success  { resp, json ->
                            setXrayApiAuth(json)
                        }
                    }

                    return  getXaryApiAuth()
                }

                def getXaryPlanTests(def planIssueId){
                    def query = "{\"query\":\"{\\n    getTestPlan(issueId:\\\"${planIssueId}\\\") {\\n        issueId\\n        projectId\\n        jira(fields: [\\\"key\\\", \\\"project\\\"])\\n\\n        tests(limit: 100) {\\n            results{\\n                issueId\\n                testType{\\n                   name\\n                }\\n                jira(fields: [\\\"key\\\"])\\n            }\\n        }\\n        \\n    }\\n}\",\"variables\":{}}"
                    def json = getXrayGraphql( query )
                    return json.data.getTestPlan.tests.results
                }

                def getXaryPlanTestsByKey(def planIssueKey){

                    def json = null;
                    def pre_json = null;
                    def start = 0
                    def limit=100
                    do{
                        def query="{\"query\":\"{\\n    getTestPlans(jql: \\\"issueKey = '${planIssueKey}'\\\", limit: 1) {\\n        total\\n        results {\\n            issueId\\n            tests(start:${start}, limit: ${limit}) {\\n                total\\n                results {\\n                    issueId\\n                    testType{\\n                    name\\n                   }\\n                    jira(fields: [\\\"key\\\", \\\"priority\\\"])\\n                }\\n            }\\n            jira(fields: [\\\"assignee\\\", \\\"reporter\\\"])\\n        }\\n    }\\n}\",\"variables\":{}}"

                        def current_json = getXrayGraphql( query )
                        if(current_json.data.getTestPlans.total != 1){
                            throw new Exception(" Xray Plan Issue Key가 잘못되었습니다.: ${planIssueKey}")
                        }

                        if( json != null){
                            json.data.getTestPlans.results[0].tests.results.addAll(current_json.data.getTestPlans.results[0].tests.results)
                        }else {
                            json = current_json
                        }
                        if( json.data.getTestPlans.results[0].tests.total <= start + limit ) {
                            break;
                        }else {
                            start+=limit
                        }
                    }while( true )


                    setXrayTestPlanId(json.data.getTestPlans.results[0].issueId)

                    return json.data.getTestPlans.results[0].tests.results.findAll{
                        it.testType.name == 'Cucumber'
                    }
                }

                def createTestExecution(def testIssueIds, def projectKey){
                    def testIssueIdsToStr = testIssueIds.collect{ return "\\\"${it}\\\""}.join(",")

                    def query = "{\"query\":\"mutation {\\n    createTestExecution(\\n        testIssueIds: [${testIssueIdsToStr}]\\n        jira: {\\n            fields: { summary: \\\"Test Execution for \\\", project: {key: \\\"${projectKey}\\\"} }\\n        }\\n    ) {\\n        testExecution {\\n            issueId\\n            jira(fields: [\\\"key\\\"])\\n        }\\n        warnings\\n        createdTestEnvironments\\n    }\\n}\",\"variables\":{}}"
                    def json = getXrayGraphql(query)
                    return json.data.createTestExecution.testExecution
                }

                def addTestExecutionsToTestPlan(def testPlanIssueId,  def testExecutionIssueIds )
                {
                    if(isCollectionOrArray(testExecutionIssueIds) ){
                        testExecutionIssueIds = testExecutionIssueIds.collect{ return "\\\"${it}\\\""}.join(",")
                    } else {
                        testExecutionIssueIds = "\\\"${testExecutionIssueIds}\\\""
                    }

                    def query = "{\"query\":\"mutation {\\n    addTestExecutionsToTestPlan(\\n        issueId: \\\"${testPlanIssueId}\\\",\\n        testExecIssueIds: [${testExecutionIssueIds}]\\n    ) {\\n        addedTestExecutions\\n        warning\\n    }\\n}\",\"variables\":{}}"
                    def json = getXrayGraphql(query)
                    return json.data.addTestExecutionsToTestPlan.addedTestExecutions
                }

                def addDefectsToTestRun(def testrunId,  def defectIds )
                {
                    if(isCollectionOrArray(defectIds) ){
                        defectIds = defectIds.collect{ return "\\\"${it}\\\""}.join(",")
                    } else {
                        defectIds = "\\\"${defectIds}\\\""
                    }

                    def query = "{\"query\":\"mutation {\\n    addDefectsToTestRun( id: \\\"${testrunId}\\\", issues: [${defectIds}]) {\\n        addedDefects\\n        warnings\\n    }\\n}\",\"variables\":{}}"
                    def json = getXrayGraphql(query)
                    return json.data.addDefectsToTestRun
                }

                def getXrayTestRun(def testId,  def testExecutionIssueId )
                {
                    def query = "{\"query\":\"{\\n    getTestRun( testIssueId: \\\"${testId}\\\", testExecIssueId: \\\"${testExecutionIssueId}\\\") {\\n        id\\n        status { name color }\\n        startedOn\\n        lastModified\\n        testType { id name }\\n        customFields{\\n            id name values\\n        }\\n        testExecution {\\n            issueId testEnvironments\\n        }\\n        test {\\n            jira(fields: [\\\"id\\\", \\\"key\\\", \\\"summary\\\"])\\n        }\\n    }\\n}\",\"variables\":{}}"
                    def json = getXrayGraphql(query)

                    println json
                    return json.data.getTestRun
                }

                def getCucumberTestResult(){

                    println "----> getCucumberTestResult"
                    File file = Paths.get(getReportDir(),getReportFile())?.toFile()
                    
                    if( file.exists() == false ){
                        return []
                    }


                    String content = file.getText(getEncoding());
                    if(!content){
                        return []
                    }
                    def jsonSlurper = new JsonSlurper()
                    def reportJson = jsonSlurper.parseText(content)

                    return reportJson
                }

                def getCucumberTestResultFromSum(){
                    println "----> getCucumberTestResultFromSum"
                    File file = Paths.get(getReportDir(),getReportFileSum())?.toFile()
                    println file

                    // first
                    if( file.exists() == false ){
                        return []
                    }

                    String content = file.getText(getEncoding());
                    if(!content){
                        return []
                    }
                    def jsonSlurper = new JsonSlurper()
                    def reportJson = jsonSlurper.parseText(content)

                    return reportJson
                }

                void addCucumberTestResultToSum(jsonReport){

                    println "-------> addCucumberTestResultToSum"
                    File file = Paths.get(getReportDir(),getReportFileSum())?.toFile()
                    println  file.getName()

                
                    def jsonReportSum = getCucumberTestResultFromSum()
                    jsonReportSum  = jsonReportSum + jsonReport

                    def output = new groovy.json.JsonGenerator.Options()
                                        .disableUnicodeEscaping()
                                        .build()
                                    .toJson(jsonReportSum)
                    
                    file.write(output)
                }

                def createFailReportElement(def testKey, def featureName){

                    def featureId = featureName.replaceAll("\\s","-")

                    def json = [
                            "line": 1,
                            "elements": [
                                    [
                                            "start_timestamp": new Date().format( "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'" ).toString() , //"2021-12-23T05:42:44.995Z"
                                            "line": 1,
                                            "name": "${featureId}",
                                            "description": "",
                                            "id": "${featureId};${featureId};;2", //  "tmapauto-경로탐색결과-002;tmapauto-경로탐색결과-002;;2",
                                            "type": "scenario",
                                            "keyword": "Scenario",
                                            "steps": [
                                                    [
                                                            "result": [
                                                                    "error_message": " Process crached.",
                                                                    "duration": 1000,
                                                                    "status": "fail"
                                                            ],
                                                            "line": 1,
                                                            "name": "Unknown Error.",
                                                            "match": [
                                                                    "location": ""
                                                            ],
                                                            "keyword": "-"
                                                    ]
                                            ],
                                            "tags": [
                                                    [
                                                            "name": "@TEST_${testKey}"
                                                    ]
                                            ]
                                    ]
                            ],
                            "name": featureName,
                            "description": "",
                            "id": featureId,
                            "keyword": "Feature",
                            "uri": "file:scripts/features/1_${testKey}.feature",
                            "tags": []
                    ]

                return json
                }

                def getXrayReportCucumber(){

                    println "----> getXrayReportCucumber"

                    def reportJson = getCucumberTestResult()
                    def uriBuilder = new URIBuilder(getXrayBaseUrl())
                    uriBuilder.setPath("/api/v2/import/execution/cucumber")
                    String url = uriBuilder.build();
                    var HttpBuilder http = HttpBuilder.configure {
                        request.uri = url
                        request.headers['Authorization'] = getXaryApiAuth()
                        request.contentType = 'application/json'
                    };


                    def resultJson
                    http.post() {
                        request.body = reportJson
                        response.success  { resp, json ->
                            resultJson = json
                        }
                    }

                    println resultJson
                    return  resultJson
                }

                def findXrayTestKey(def result_feature){

                    def featurePattern = "file:scripts/features/1_(.+).feature"
                    def matcher = result_feature?.uri =~ featurePattern

                    if(!matcher.asBoolean()){
                        return null
                    }

                    return matcher.getAt(0).getAt(1)
                }

                def findXrayTestId(def issueKey){
                    def issueKeyList = getXrayTestCaseKeys()
                    def issueIdList = getXrayTestCaseIds()
                    def findIndex = issueKeyList.findIndexOf{ it == issueKey }

                    if( findIndex == 0 || findIndex ){
                        return issueIdList?.getAt(findIndex)
                    }

                    return null
                }

                def findXrayTestPriority(def key){
                    def keyList = getXrayTestCaseKeys()
                    def idList = getXrayTestCasePriorityIds()
                    def findIndex = keyList.findIndexOf{ it == key }

                    if( findIndex == 0 || findIndex ){
                        return idList?.getAt(findIndex)
                    }

                    return null
                }

                def getXrayTestStepsNotPassed(def reportJson){

                    // 모든 feature 파일 loop
                    println "--> getXrayTestStepsNotPassed "

                    def status_passed = "passed"
                    def result = []
                    reportJson.each {
                        feature ->
                            def key = findXrayTestKey(feature)
                            def id = findXrayTestId(key)
                            def priorityId = findXrayTestPriority(key)

                            // println "---> key " + key
                            // println " id : " + id
                            def item = [:]
                            item["testKey"] = key;
                            item["testId"] = id;
                            item["testPriorityId"] = priorityId
                            item["assigneeId"] = getXrayDefectAssigneeId()
                            item["uri"] = feature.uri

                            feature?.elements?.each {
                                scenario ->
                                    item["scenario_name"] = scenario.name
                                    item["scenario_id"] = scenario.id
                                    item["line"] = scenario.line

                                    for( def step in scenario.steps){
                                        item["last_step_name"] =  step.name
                                        item["last_step_status"] =  step.result.status

                                        // println "--->  ${step.result.status} != ${status_passed} : " + (step.result.status != status_passed)

                                        if(step.result.status != status_passed){
                                            item["last_step_error_message"] =  step.result.error_message
                                            println "---> fail => key : " + key + " ,id : " + id 
                                            println " url : " + item["uri"]
                                            println " line : " + item["line"]
                                            break
                                        }
                                    }

                                    if( item["last_step_error_message"]) {
                                        result << item
                                    }
                            }

                            return item
                    }

                    println "----> steps not passed <---"
                    println " fail size : " + result?.size()
                    // println result
                    return result
                }
                }

























































            
            
            
            
            
            
            
            
            
            
            
            
            }

        }
    }
}

