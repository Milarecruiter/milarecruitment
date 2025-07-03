
import RecruiterLanding from './RecruiterLanding';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <>
      <SEO 
        title="Senior Technical Recruiter - Hire the Best Tech Talent Worldwide" 
        description="6+ years international full-cycle recruiter specializing in SaaS, Mobile, Fintech, Healthcare, Security, GameDev, ML/AI. 120+ professionals placed with 95% offer acceptance rate."
        keywords={['technical recruiter', 'software engineering recruiter', 'startup hiring', 'tech talent', 'EMEA recruiting', 'LATAM recruiting', 'US recruiting', 'fintech recruiter', 'AI recruiter']}
      />
      <RecruiterLanding />
    </>
  );
};

export default Index;
