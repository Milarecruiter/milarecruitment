import { ArrowRight, Users, Clock, Award, Globe, Target, CheckCircle, MessageSquare, Mail, Phone, Star, Linkedin, MapPin, DollarSign, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const RecruiterLanding = () => {
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "120+", label: "Professionals Placed" },
    { icon: <Award className="w-6 h-6" />, value: "96%", label: "Pass Test Period" },
    { icon: <Clock className="w-6 h-6" />, value: "~3 weeks", label: "Average Time to Hire" },
    { icon: <Target className="w-6 h-6" />, value: "95%", label: "Offer Acceptance Rate" }
  ];

  const domains = [
    "SaaS", "Mobile", "Fintech", "Healthcare", "Security", 
    "GameDev", "ML/AI", "Automotive", "EdTech", "Travel"
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tailored Recruitment Strategies",
      description: "Aligning hiring goals with business needs for optimal results"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Precision Sourcing & Outreach",
      description: "Leveraging Boolean, X-Ray, LinkedIn Recruiter, Github, and personal database"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast & Effective Hiring",
      description: "Time to hire ranges from 1 to 3 weeks, depending on position complexity"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "High Success Rates",
      description: "90% offer acceptance rate with proven track record"
    }
  ];

  const openJobs = [
    {
      id: 1,
      title: "DevOps Engineer",
      company: "Naviteq Ltd.",
      location: "Remote (Israel)",
      salary: null,
      type: "Full-time",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      description: "Join a leading Israeli company in DevOps Service and Cloud Solutions."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyNow = (jobId: number) => {
    window.location.href = '/apply';
  };

  const handleSubmitProfile = () => {
    window.location.href = '/general-application';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-8">
            <Avatar className="w-32 h-32 mb-6 ring-4 ring-white/20">
              <AvatarImage 
                src="/lovable-uploads/6d20bc8c-7496-4289-a5a4-265289c77fbb.png" 
                alt="Mila Svirshkova - Technical Recruiter" 
                className="object-cover"
              />
              <AvatarFallback className="text-4xl font-semibold bg-purple-600 text-white">MS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center gap-4 mb-4">
              <h2 className="text-2xl font-semibold text-white">Mila Svirshkova • Senior Technical Recruiter</h2>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-white">Top Rated on Upwork</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Hire the Best Tech Talent
            <span className="block text-purple-200">Worldwide</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            6+ years of international full-cycle recruiting across EMEA, LATAM, and US. 
            Specialized in connecting top-tier software engineers with innovative startups.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              onClick={scrollToContact}
            >
              Start Hiring Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What I Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive recruitment solutions tailored to your startup's unique needs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-purple-100 text-purple-600 rounded-lg">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Jobs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Current Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities with innovative startups and scale-ups
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {openJobs.map((job) => (
              <motion.div key={job.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Building2 className="w-4 h-4 mr-2" />
                          {job.company}
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        {job.salary && (
                          <div className="flex items-center text-gray-600 mb-4">
                            <DollarSign className="w-4 h-4 mr-2" />
                            {job.salary}
                          </div>
                        )}
                      </div>
                      <Badge variant="secondary" className="ml-4">
                        {job.type}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => handleApplyNow(job.id)}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <p className="text-gray-600 mb-6">
              Don't see the perfect role? I'm always looking for exceptional talent.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleSubmitProfile}
            >
              Submit Your Profile
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Industry Domains</h2>
            <p className="text-xl text-gray-600">
              Expertise across diverse technology sectors
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {domains.map((domain, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  {domain}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">My Expertise</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-purple-600" />
                Geographic Reach
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  EMEA (Europe, Middle East, Africa)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  LATAM (Latin America)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  United States
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-purple-600" />
                Sourcing Methods
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  LinkedIn Recruiter & Boolean Search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  GitHub & StackOverflow
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  Personal Database & Email Campaigns
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  Premium Job Boards
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Language Proficiency</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <Badge className="px-4 py-2 bg-purple-600 text-white">Russian/Ukrainian - Native</Badge>
              <Badge className="px-4 py-2 bg-purple-600 text-white">English - C1</Badge>
              <Badge className="px-4 py-2 bg-purple-600 text-white">Polish - C1</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Ready to Build Your Dream Team?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Let's discuss your hiring needs and find the perfect candidates for your startup.
            </motion.p>
            
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
            >
              <a 
                href="https://calendly.com/top-mila1986-1/interview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-semibold text-lg transition-colors"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Schedule a Call
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LinkedIn Icon - Bottom Right */}
      <a 
        href="https://www.linkedin.com/in/milarecruiter/" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg"
        title="Connect on LinkedIn"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default RecruiterLanding;
