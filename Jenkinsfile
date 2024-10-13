pipeline {
    agent any

    environment{
        NETLIFY_SITE_ID = credentials('clothinx-siteid')
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
    }

    stages {
        stage('Checkout') {
            steps{
                git branch: 'master', url: "https://github.com/indura08/ClothinX-project-frontend.git"
            }
        }

        stage ('build frontend'){
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    node --version
                    npm --version
                    npm ci
                    npx vite build
                '''
            }
        }

        stage("Test"){
            steps{
                script{
                    sh '''

                        if grep -q "ClothinX" dist/index.html; then 
                            echo "Text found , Test has been passed"
                        else 
                            echo "Text not found! Test failed"
                        fi

                    '''
                }
            }
        }
        stage('Deploy'){
            agent {
                docker{
                    image 'node:20-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''

                    npm install netlify-cli
                    node_modules/.bin/netlify --version
                    echo "deploying to production. Site id: $NETLIFY_SITE_ID"
                    node_modules/.bin/netlify deploy --dir=dist --prod

                '''
            }
        }
    }
}
