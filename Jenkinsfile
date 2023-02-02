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
                url: 'https://github.com/reselbob/secret-agent.git'
                sh "npm install"
            }
        }


        stage('Test') {
            steps {
                sh "npm test"
            }
        }

    }
}