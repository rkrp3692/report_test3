pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                git url: 'https://github.com/rkrp3692/report_test3.git', branch: 'master'
            }
        }


        stage('Test') {
            steps {
                echo 'npm install'
                echo 'npx cucumber-js -p test_runner --format json:report.json --tags " @test2"'
            }
        }


        stage('Deploy') {
            steps {
                // bat 'curl -H "Content-Type: application/json" -X POST --data @report.json  -u jh.jang:ATATT3xFfGF0QBaYeE2GO2PiYpJ0ifuGAdLfJBY9_k7NM-cSStakofAGheJ5TjwMs3nZ4IRaCkGme1JRjK6TjkNlCs4FvG2xk02j8iSk6NmWrlfGjPUHJ8WAP1vUAN4txIogRVNG_PxwH05ilNdbTfTJSIxVkjP39bOM-V4lOqSwq4BO8jcztU0=16C25777 https://jhxray.atlassian.net/rest/api/3/issue'
               
               script {

                // def testIssue = [fields: [project: [id: '10000'],
                //                         summary: 'New Jira Create',
                //                         description: 'New Jira Create',
                //                         issuetype: [id: '3']]]
                // def response = httpRequest responseHandle: 'NONE', url: 'https://jhxray.atlassian.net/rest/api/3/issue', wrapAsMultipart: false, contenType: 'APPLICATION_JSON', requestBody: 'testIssue'
                // def json = readJSON(text: response.content)

      
    
                response = null
                echo response.successful.toString()
                echo response.data.toString()

            }
        }
    }
