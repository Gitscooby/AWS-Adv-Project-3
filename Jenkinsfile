pipeline {
    agent any
    environment {
        registry = "naveen712/demodev"
        AWS_REGION = 'us-east-2'
        EKS_CLUSTER_NAME = 'my-k8s-cluster'
        KUBE_NAMESPACE = 'default'
         
    }     
   
    stages {
    // Building Docker images
        stage('Building image') {
            steps{
                script {
                    sh 'docker build -t naveen712/demodev .'
                }
            }
        }
   
    // Uploading Docker images into AWS ECR
        stage('Pushing to Dockerhub') {
            steps{  
                script { 
                        sh "docker login --username naveen712 -p $Pass"
                        sh 'docker push naveen712/demodev'
                    }
                            
                }
        }

       stage('K8S Deploy') {
         steps{
            script {
               ansiblePlaybook(
                        credentialsId: 'ansible-credentials', 
                        playbook: 'playbook.yml', 
                        inventory: 'hosts'
                    )
                }
            }     
               
        }
    }
}
