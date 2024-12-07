pipeline {
  environment{
    APP_NAME = 'node-practice'
  }
  agent any

  stages {

    stage("build") {
      steps {
        echo "Building the project"
        script{
          sh '''
          docker build -t ${APP_NAME}:latest .
          '''
        }
      }
    }

    stage("test") {
      steps {
        echo "Testing the project"
      }
    }

    stage("deploy") {
      steps {
        echo "Deploying the project"
        script{
          sh '''
            # Stop and remove the old container if it exists
            docker stop ${APP_NAME} || true
            docker rm ${APP_NAME} || true

            #Start the container
            docker run -d -p 3000:3000 --name ${APP_NAME} ${APP_NAME}:latest
          '''
        }
      }
    }
  }
  post{
    success{
      echo 'Pipeline completed'
    }
    failure {
      echo 'Pipeline failed'
    }
  }
}
