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

            /*Cucumber reports*/
            // steps 
            // {
            //     cucumber buildStatus: 'null', 
            //     customCssFiles: '', 
            //     customJsFiles: '', 
            //     failedFeaturesNumber: -1, 
            //     failedScenariosNumber: -1, 
            //     failedStepsNumber: -1,
            //     fileIncludePattern: '**/*.json', 
            //     pendingStepsNumber: -1, 
            //     skippedStepsNumber: -1, 
            //     sortingMethod: 'ALPHABETICAL', 
            //     undefinedStepsNumber: -1
            // }

            /*Create New Issue*/
            steps
            {
                //repository private        //SSH
                // bat 'curl -X GET -u jh.jang@tbell.co.kr:ATATT3xFfGF0q-LGTDcf37974WhtIuf1QAvSU-8GTh36DMoz4gleSEXuqjr9hKs1RI-5QlEKjqkfJHOXXdSeZxuelSZfoXFI0F6_ozFq4FFF8d0AHx4LSSksY_KbltQT9DP4g7bZGYTUALArsMZZGlhWxyK_c2ZnbOqU4jS_1OIiOgsYjigYGUQ=4CA45D7F -H "Content-Type: application/json" https://jhxray.atlassian.net/rest/api/latest/issue/KHNP-7'

                script
                {
                    def testIssue = [fields: [
                        project: [key: 'KHNP'],
                        summary: 'New Jira Create Issue Test',
                        description: 'Test Bug',
                        //  issuetype: [id: '10011']]]
                        issuetype:[name:'Test']]]
                        // issuetype: [id: '3']]]

                        // response = jiraNewIssue issue: createIssue, site: 'KHNP'
                        // response = jiraNewIssue issue: testIssue, site: 'KHNP'
                        // response = jiraNewIssue issue: testIssue, site: 'LOCAL'
                        // response = jiraGetIssue idOrKey: 'KHNP-8', site: 'LOCAL'

                        //response = jiraGetComment idOrKey:'10006',commentId: '10000',site: 'LOCAL'
                        response = jiraNewIssue issue: testIssue, site: 'LOCAL'

                        // response = jiraGetFields site: 'LOCAL'
                        // response = jiraGetProjects site: 'LOCAL'
                        // response = jiraGetServerInfo site: 'LOCAL'

                        echo response.successful.toString()
                        echo response.data.toString()

                }
            }

            /*Assign Issue*/
            // steps
            // {
            //     jiraAssignIssue idOrKey: '', site: 'https://jhxray.atlassian.net/jira/software/c/projects/KHNP', userName: 'jh.jang'
            // }

            
            // }


        }
    }
}




                // script {
                //     success {
                //         echo 'test success'
                //         }
                //         def obj = readJSON file: 'report.json'
                
// def testIssue=[fields:[
                    //     project:[key:'khnp'],
                    //     summary:'Test Bug',
                    //     description:'Test Bug',
                    //     issuetype:[name:'Bug']
                    //     ]]
                    //     response=NewJiraIssue issue:testIssue, JIRA_URL:'https://jhxray.atlassian.net/'
                    //     echo response.successful.toString()
                    //     echo response.data.toString()



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
        // }