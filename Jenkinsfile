pipeline {
    agent any
    
    stages {
        // stage('git clone') {
        //     steps() {
        //         git 'https://github.com/leeseok0916/jenkinsTest.git'
        //     }
        // }
        

        stage('build') {
            steps {
                git branch: 'master',
                url: 'https://github.com/rkrp3692/report_test1.git'
                // sh "npm install"
            }
        }


        stage('Test') {
            steps {
                echo 'npm install'
                //echo 'npx playwright test'
                echo 'npx cucumber-js -p test_runner --format json:report.json --tags " @test2"'
            }
        }





        stage('Deploy') {

            steps {

                script {

                    // def testIssue=[fields:[
                    //     project:[key:'khnp'],
                    //     summary:'Test Bug',
                    //     description:'Test Bug',
                    //     issuetype:[name:'Bug']
                    //     ]]
                    //     response=NewJiraIssue issue:testIssue, JIRA_URL:'https://jhxray.atlassian.net/'
                    //     echo response.successful.toString()
                    //     echo response.data.toString()
                    

                    //.feature에서 XrayTestKey 받아옴
                    def findXrayTestKey(def result_feature)
                    {
                        def featureFind = "file:scripts/features/1_(.+).feature"
                        def matcher = result_feature?.uri =~ featureFind
                        if(!matcher.asBoolean())
                            return null
                        return matcher.getAt(0).getAt(1)
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

                            if(step.result.status != status_passed)
                            {
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
                                return result









                        }

                        }

                        }
                                

   
            // success {
            //     echo 'test success'
            // }

                //def obj = readJSON file: 'report.json'
                
            
// //Sample1
// def jiraServer='https://jhxray.atlassian.net'
// def testIssue=[fields:[
//     project:['key':'AUTO'],
//     summary:'Test Bug',
//     description:'Test Bug',
//     issuetype:[name:'Bug']]]
//     response=jiraNewIssue issue:testIssue, site:jiraServer
//     echo response.successful.toString()
//     echo response.data.toString()

//             }







// Sample2
// def call(Map confug=[:]){
//     def rawBody = libraryResource 'com/planetpope/api/jira/createIssue.json'
//     def binding = [
//         key: "${config.key}",
//         summary: "${config.summary}",
//         description: "${config.description}",
//         issueTypeName: "${config.issueTypeName}"
//     ]
//     def render = renderTemplate(rawBody,binding)
//     sh('curl -D- -u $JIRA_CREDENTIALS -X POST --data "'+render+'" -H "Content-Type: application/json" $JIRA_URL/rest/api/2/issue)
    
// }





//Sample3
// post {
//         success {
//             emailext (
//                 to: 'bangar...@gmail.com',
//                 mimeType: 'text/html',
//                 subject: "*************** As excepted***********",
//                 body: "************** As excepted **************"
//             )
//         }
//         failure {
//             emailext (
//                 to: 'bangar...@gmail.com',
//                 mimeType: 'text/html',
//                 subject: "*************** As excepted***********",
//                 body: "************** As excepted **************"
//             )
//             create_newjira_issue()
//     }
// }

// void create_newjira_issue() {
//     node {
//       stage('JIRA') {
//         def NewJiraIssue = [fields: [project: [key: 'PROJETC_NAME : can be taken from JIRA website'],
//             summary: 'Build Failed : Summary.',
//             description: 'Description of JIRA ticket ',
//             issuetype: [id: 'PROJECT ID : can get using JIRA API']]]

//     response = jiraNewIssue issue: NewJiraIssue, site: 'THAT CAN BE SET IN JENKINS CONFIGURATION OR CAN DIRECTLY WRITE HERE'

//     echo response.successful.toString()
//     echo response.data.toString()
//     }
//   }
// }
        }
    }
}