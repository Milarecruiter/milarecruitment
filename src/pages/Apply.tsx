
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

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Job Application
          </h1>
          <p className="text-gray-600 mb-8">
            Application form content will be added here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apply;
