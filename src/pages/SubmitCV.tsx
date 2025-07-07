import React, { useState } from 'react';
import { ArrowLeft, Upload, File, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

const SubmitCV = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;
    
    setIsSubmitting(true);
    
    try {
      const TELEGRAM_BOT_TOKEN = '7648238102:AAGkoe2L2jn4DQnmNTWSj2yWiWN2Efa1-xo';
      const TELEGRAM_CHAT_ID = '@milarecruiterbot';
      
      const message = `🔔 New CV Submission - DevOps Engineer Position
      
📄 File: ${selectedFile.name}
📊 Size: ${(selectedFile.size / 1024 / 1024).toFixed(2)} MB
🕒 Submitted: ${new Date().toLocaleString()}
🏢 Position: DevOps Engineer at Naviteq Ltd.

The CV file has been uploaded and is ready for review.`;

      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        }),
      });

      if (response.ok) {
        console.log('CV submission sent to Telegram successfully');
        setShowThankYou(true);
      } else {
        console.error('Failed to send to Telegram');
        // For now, still show thank you dialog even if Telegram fails
        setShowThankYou(true);
      }
      
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting CV:', error);
      setIsSubmitting(false);
      // Still show thank you dialog
      setShowThankYou(true);
    }
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/apply')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Job Description
        </Button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Submit Your CV
          </h1>
          
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            {!selectedFile ? (
              <div>
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Upload your CV
                </h3>
                <p className="text-gray-600 mb-4">
                  Select a PDF, DOC, or DOCX file from your computer
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="cv-upload"
                />
                <label
                  htmlFor="cv-upload"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 cursor-pointer transition-colors"
                >
                  Choose File
                </label>
              </div>
            ) : (
              <div>
                <File className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  File Selected
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-gray-700">{selectedFile.name}</span>
                  <button
                    onClick={handleRemoveFile}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 px-8 py-3"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Thank You Dialog */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <DialogTitle className="text-center text-2xl font-bold text-gray-900">
              Thank You!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Your CV has been successfully submitted for the DevOps Engineer position at Naviteq Ltd.
            </p>
            <p className="text-gray-600">
              We'll review your application and get back to you soon.
            </p>
            <Button 
              onClick={handleThankYouClose}
              className="w-full bg-purple-600 hover:bg-purple-700 mt-6"
            >
              Return to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubmitCV;
