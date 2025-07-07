
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Apply = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            DevOps Engineer - Naviteq Ltd.
          </h1>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Naviteq Ltd. is a leading Israeli company in DevOps Service and Clouds Solutions. We provide equal quality of service to all our customers, from small Startups to huge international companies.
              DevOps and Development is our bread and butter and we are very focused on those positions, we hire only the best people across the globe and work with clients in Israel, the EU, and Asia. Our headquarter is located in Israel, Tel-Aviv.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You Will Do</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Implementing new infrastructure components using Terraform</li>
                <li>Build and maintain Kubernetes Clusters in AWS Amazon</li>
                <li>Deep collaboration with the software development teams</li>
                <li>Production operations and observability of our customer-facing systems</li>
                <li>Build a monitoring infrastructure resources and processes</li>
                <li>Continue to iterate Continuous Integration/Continuous Delivery improvements and ensure efficiency</li>
                <li>Provide support along with the software development team for deployed components</li>
                <li>Contribute to the team's roadmap and project planning process, partnering with stakeholders to develop business objectives and translate those into action</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who You Are</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>4+ years with DevOps practices</li>
                <li>Experience with AWS</li>
                <li>Strong experience utilizing Infrastructure as Code (IaC) principles (e.g. using Terraform or Pulumi)</li>
                <li>Proficiency in Kubernetes and Docker (EKS, GKE, or any other)</li>
                <li>Experience architecting, configuring, and deploying CI/CD pipelines following GitOps practices and using tools such as Github Actions, ArgoCD, and Argo Workflows</li>
                <li>Experience in writing Helm3 charts</li>
                <li>Knowledge of best practices for monitoring and alerting on cloud-based microservices (e.g. using Prometheus, Thanos, Grafana, Loki)</li>
                <li>Expertise in cybersecurity best practices and demonstrated knowledge of cloud security solutions including identity and access management (e.g. Auth0, Okta, and Vault)</li>
                <li>Good understanding of Linux Operation Systems (Ubuntu, Amazon Linux 2, Alpine)</li>
                <li>Excellent communicator with the ability to work collaboratively and cohesively in a cross-functional team</li>
                <li>Excellent troubleshooting and root-cause analysis skills, calm under pressure, and highly communicative during incidents</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why To Join Us</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Competitive compensation</li>
                <li>Career advancement opportunities</li>
                <li>Equipment (we provide MacBook Pro)</li>
                <li>Comprehensive benefits including professional training, certification opportunities, and remote work flexibility</li>
                <li>Interesting, challenging projects across a wide variety of companies</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg"
              onClick={() => navigate('/submit-cv')}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
