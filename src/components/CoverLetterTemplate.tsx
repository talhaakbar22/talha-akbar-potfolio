
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Copy, Download } from 'lucide-react';
import { toast } from 'sonner';

const CoverLetterTemplate = () => {
  const [clientName, setClientName] = useState('[Client Name]');
  const [projectType, setProjectType] = useState('[Project Type - e.g., E-commerce App, Social Media App]');
  const [specificRequirement, setSpecificRequirement] = useState('[Specific Requirement - e.g., payment integration, real-time chat]');
  const [timeline, setTimeline] = useState('[Timeline - e.g., 4-6 weeks]');

  const coverLetterTemplate = `Dear ${clientName},

I hope this message finds you well. I'm Talha Akbar, a dedicated React Native developer with 4 years of hands-on experience in creating high-performance cross-platform mobile applications for both iOS and Android platforms.

**Why I'm the Right Fit for Your ${projectType}:**

✅ **Proven React Native Expertise**: 4 years of experience building production-ready mobile apps with clean, maintainable code
✅ **Cross-Platform Mastery**: Skilled in developing apps that work seamlessly on both iOS and Android with shared codebase
✅ **Modern Tech Stack**: Proficient in React Native, TypeScript, Redux/Context API, React Navigation, and native module integration
✅ **API Integration**: Extensive experience with RESTful APIs, GraphQL, and real-time data synchronization
✅ **Performance Optimization**: Expert in app performance tuning, bundle size optimization, and smooth animations
✅ **UI/UX Focus**: Creating intuitive, responsive designs that provide excellent user experience

**What I Can Deliver for Your Project:**

🎯 A fully functional ${projectType} with ${specificRequirement}
🎯 Clean, well-documented code following React Native best practices
🎯 Responsive design that works perfectly on various screen sizes
🎯 Thorough testing and quality assurance
🎯 App store deployment assistance (both iOS App Store and Google Play Store)
🎯 Post-launch support and maintenance

**My Development Process:**
1. **Requirements Analysis**: Understanding your vision and technical requirements
2. **Design & Architecture**: Creating scalable app architecture and UI/UX mockups
3. **Development**: Agile development with regular updates and progress reports
4. **Testing**: Comprehensive testing on multiple devices and platforms
5. **Deployment**: App store submission and launch support

**Timeline**: I can complete your ${projectType} within ${timeline}, with regular milestone deliveries to keep you updated on progress.

**Recent Achievements:**
- Successfully delivered 15+ React Native applications
- Maintained 5-star client satisfaction rating
- Specialized in performance optimization achieving 60fps smooth animations
- Expert in integrating third-party services and native device features

I'm excited about the opportunity to bring your mobile app vision to life. I'd love to discuss your project requirements in detail and provide you with a customized solution that exceeds your expectations.

**Next Steps:**
- Schedule a brief call to discuss your project requirements
- Provide you with a detailed project proposal and timeline
- Share relevant portfolio samples that align with your project needs

Looking forward to collaborating with you and creating something amazing together!

Best regards,
Talha Akbar
React Native Developer
📧 [Your Email]
📱 [Your Phone]
🔗 [Your Portfolio URL]

P.S. I'm available for a quick call to discuss your project requirements and answer any questions you might have. Let's turn your app idea into reality!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coverLetterTemplate);
    toast.success('Cover letter copied to clipboard!');
  };

  const downloadAsText = () => {
    const element = document.createElement('a');
    const file = new Blob([coverLetterTemplate], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'upwork-cover-letter-template.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Cover letter downloaded!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Upwork Cover Letter Template</CardTitle>
          <CardDescription>
            Customize this template for your React Native development proposals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Enter client name"
              />
            </div>
            <div>
              <Label htmlFor="projectType">Project Type</Label>
              <Input
                id="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                placeholder="e.g., E-commerce App"
              />
            </div>
            <div>
              <Label htmlFor="specificRequirement">Specific Requirement</Label>
              <Input
                id="specificRequirement"
                value={specificRequirement}
                onChange={(e) => setSpecificRequirement(e.target.value)}
                placeholder="e.g., payment integration"
              />
            </div>
            <div>
              <Label htmlFor="timeline">Timeline</Label>
              <Input
                id="timeline"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                placeholder="e.g., 4-6 weeks"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Cover Letter</CardTitle>
          <div className="flex gap-2">
            <Button onClick={copyToClipboard} variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Copy to Clipboard
            </Button>
            <Button onClick={downloadAsText} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download as Text
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            value={coverLetterTemplate}
            readOnly
            className="min-h-[600px] font-mono text-sm"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Customize the placeholders above to match each specific project</li>
            <li>Research the client's business and mention relevant experience</li>
            <li>Adjust the timeline based on project complexity</li>
            <li>Include links to relevant portfolio projects</li>
            <li>Keep it concise while highlighting your key strengths</li>
            <li>Always proofread before sending</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoverLetterTemplate;
