pipeline{
  
  agent any

  stages {

    stage("build") {
      steps {
        echo "Building the project"
        script {
          def test = 4+6
          echo test
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
      }
    }
  }
  
}
