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
                sh "npm install"
            }
        }


        stage('Test') {
            steps {
                echo "hello"
            }
        }



        
    //     post {
    //             // If Maven was able to run the tests, even if some of the test
    //             // failed, record the test results and archive the jar file.
    //             success {
    //                     cucumber buildStatus: 'null', 
    //                     customCssFiles: '', 
    //                     customJsFiles: '', 
    //                     failedFeaturesNumber: -1, 
    //                     failedScenariosNumber: -1, 
    //                     failedStepsNumber: -1, 
    //                     fileIncludePattern: '**/*.json', 
    //                     pendingStepsNumber: -1, 
    //                     skippedStepsNumber: -1, 
    //                     sortingMethod: 'ALPHABETICAL', 
    //                     undefinedStepsNumber: -1
    //             }

    // }

    }
}