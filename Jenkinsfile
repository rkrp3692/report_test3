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

        // stage('Deploy') {
        //     steps {
        //         // echo 'Deploying....'
        //     }
        // }
    }
}