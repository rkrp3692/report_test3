pipeline {
    agent any
    
    stages {
 
        stage('Build') {
            steps {
                git branch: 'master', credentialsId: '33b66731-ce0f-450a-ba67-8fb189398b47', url: 'git@github.com:rkrp3692/report_test3.git'

                success {
                    echo 'Build Success'
                }
                // failure {
                //     echo 'Build Failed'
                // }

            }
        }

        // stage('Test Run') {
        //     steps {
        //         echo 'npm install'
        //         //echo 'npx playwright test'
        //         echo 'npx cucumber-js -p test_runner --format json:report.json --tags " @test2"'
                
        //         // success {
        //         //     echo 'Test Run Success'
        //         // }
        //         failure {
        //             echo 'Test Run Failed'
        //         }

        //     }
        // }

        // stage('Test Result') {

        //     /*Create New Issue*/
        //     steps
        //     {
        //         //repository private        //SSH           //Jenkins Build PASS
        //         //  bat 'curl -X GET -u jh.jang@tbell.co.kr:ATATT3xFfGF0q-LGTDcf37974WhtIuf1QAvSU-8GTh36DMoz4gleSEXuqjr9hKs1RI-5QlEKjqkfJHOXXdSeZxuelSZfoXFI0F6_ozFq4FFF8d0AHx4LSSksY_KbltQT9DP4g7bZGYTUALArsMZZGlhWxyK_c2ZnbOqU4jS_1OIiOgsYjigYGUQ=4CA45D7F -H "Content-Type: application/json" https://jhxray.atlassian.net/rest/api/latest/issue/KHNP-7'

        //         bat 'curl -H "Content-Type: application/json" -X POST --data @report.json -u jh.jang@tbell.co.kr:ATATT3xFfGF0q-LGTDcf37974WhtIuf1QAvSU-8GTh36DMoz4gleSEXuqjr9hKs1RI-5QlEKjqkfJHOXXdSeZxuelSZfoXFI0F6_ozFq4FFF8d0AHx4LSSksY_KbltQT9DP4g7bZGYTUALArsMZZGlhWxyK_c2ZnbOqU4jS_1OIiOgsYjigYGUQ=4CA45D7F https://jhxray.atlassian.net/rest/api/2/issue/KHNP-13'


        //         // script
        //         // {
        //             // def testIssue = [fields: [
        //             //     project: [key: 'KHNP'],
        //             //     summary: 'New Jira Create Issue Test',
        //             //     description: 'Test Bug',
        //             //     //  issuetype: [id: '10011']]]
        //             //     issuetype:[name:'Test']]]
        //             //     // issuetype: [id: '3']]]

        //             //     // response = jiraNewIssue issue: createIssue, site: 'KHNP'
        //             //     // response = jiraNewIssue issue: testIssue, site: 'KHNP'
        //             //     // response = jiraNewIssue issue: testIssue, site: 'LOCAL'
        //             //     // response = jiraGetIssue idOrKey: 'KHNP-8', site: 'LOCAL'

        //             //     //response = jiraGetComment idOrKey:'10006',commentId: '10000',site: 'LOCAL'
        //             //     response = jiraNewIssue issue: testIssue, site: 'LOCAL'

        //             //     // response = jiraGetFields site: 'LOCAL'
        //             //     // response = jiraGetProjects site: 'LOCAL'
        //             //     // response = jiraGetServerInfo site: 'LOCAL'

        //             //     echo response.successful.toString()
        //             //     echo response.data.toString()



        //         //Sample Code
        //         // bat 'curl -D- -u jh.jang@tbell.co.kr:ATATT3xFfGF0q-LGTDcf37974WhtIuf1QAvSU-8GTh36DMoz4gleSEXuqjr9hKs1RI-5QlEKjqkfJHOXXdSeZxuelSZfoXFI0F6_ozFq4FFF8d0AHx4LSSksY_KbltQT9DP4g7bZGYTUALArsMZZGlhWxyK_c2ZnbOqU4jS_1OIiOgsYjigYGUQ=4CA45D7F -X POST --data {"fields": {"project":{"key": "KHNP"},"summary": "Create Issue Test","description": "Test","issuetype": {"name": "Bug"}}} -H "Content-Type: application/json" https://jhxray.atlassian.net/rest/api/2/issue'
            
        //         // }


        //         // success {
        //         //     echo 'Test Result Success'
        //         // } 
        //         failure {
        //             echo 'Test Result Failed'
        //         }


        //     }
        // }
    }

}