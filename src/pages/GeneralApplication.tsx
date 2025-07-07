
import React, { useState } from 'react';
import { ArrowLeft, Upload, File, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

const GeneralApplication = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
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
    if (!selectedFile || !name || !position) return;
    
    setIsSubmitting(true);
    
    try {
      const TELEGRAM_BOT_TOKEN = '7648238102:AAGkoe2L2jn4DQnmNTWSj2yWiWN2Efa1-xo';
      const TELEGRAM_CHAT_ID = '249313239';
      
      const formData = new FormData();
      formData.append('chat_id', TELEGRAM_CHAT_ID);
      formData.append('document', selectedFile);
      
      const caption = `🔔 New General Application Submission

👤 Name: ${name}
💼 Position: ${position}
📄 File: ${selectedFile.name}
📊 Size: ${(selectedFile.size / 1024 / 1024).toFixed(2)} MB
🕒 Submitted: ${new Date().toLocaleString()}

CV file attached for review.`;
      
      formData.append('caption', caption);
      
      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`;
      
      console.log('Sending application to Telegram...');
      
      const response = await fetch(telegramUrl, {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
      console.log('Telegram API response:', responseData);

      if (response.ok) {
        console.log('Application sent to Telegram successfully');
        setShowThankYou(true);
      } else {
        console.error('Failed to send application to Telegram:', responseData);
        alert(`Failed to send application: ${responseData.description || 'Unknown error'}`);
      }
      
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      setIsSubmitting(false);
      alert('Error submitting application. Please try again.');
    }
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    navigate('/');
  };

  const isFormValid = name && position && selectedFile;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Submit Your Application
          </h1>
          
          <div className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full"
              />
            </div>

            {/* Position Field */}
            <div className="space-y-2">
              <Label htmlFor="position">Position of Interest</Label>
              <Input
                id="position"
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="e.g. Frontend Developer, DevOps Engineer, etc."
                className="w-full"
              />
            </div>

            {/* CV Upload */}
            <div className="space-y-2">
              <Label>CV / Resume</Label>
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {!selectedFile ? (
                  <div>
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Upload your CV
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Select a PDF, DOC, or DOCX file
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
                    <File className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-700">{selectedFile.name}</span>
                      <button
                        onClick={handleRemoveFile}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid || isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
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
            <DialogDescription className="text-center text-gray-600">
              Your application has been submitted successfully.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Your application has been successfully submitted for the {position} position.
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

export default GeneralApplication;
