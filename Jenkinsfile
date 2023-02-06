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
        
    }

    post {
            // success {
            //     echo 'test success'
            // }

            failure {
                def data = readJSON(file: "report.json")

            }

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