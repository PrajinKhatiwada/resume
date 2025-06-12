import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// EmailJS configuration - Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_oaikykh';
const EMAILJS_TEMPLATE_ID = 'template_8jpc1hq';
const EMAILJS_PUBLIC_KEY = 'qAp5qkoEid62IKTpM';

// Type declarations for EmailJS
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, params: any) => Promise<{ status: number; text?: string }>;
    };
  }
}

interface EmailParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailJsLoaded, setEmailJsLoaded] = useState(false);

  // Load EmailJS script when component mounts
  useEffect(() => {
    const loadEmailJs = async () => {
      if (!window.emailjs) {
        try {
          await loadEmailJS();
          setEmailJsLoaded(true);
        } catch (error) {
          console.error('Failed to load EmailJS:', error);
        }
      } else {
        setEmailJsLoaded(true);
      }
    };

    loadEmailJs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const emailParams: EmailParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim() || 'New Portfolio Contact',
        message: formData.message.trim()
      };

      await sendEmail(emailParams);

    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const loadEmailJS = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      
      script.onload = () => {
        try {
          window.emailjs.init(EMAILJS_PUBLIC_KEY);
          console.log('EmailJS initialized successfully');
          resolve();
        } catch (error) {
          console.error('Error initializing EmailJS:', error);
          reject(error);
        }
      };
      
      script.onerror = () => {
        console.error('Failed to load EmailJS script');
        reject(new Error('Failed to load EmailJS script'));
      };
      
      document.head.appendChild(script);
    });
  };

  const sendEmail = async (emailParams: EmailParams): Promise<void> => {
    try {
      if (!window.emailjs) {
        throw new Error('EmailJS not loaded');
      }

      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams
      );
      
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSubmitStatus('success');
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      setSubmitStatus('error');
      throw error; // Re-throw to be caught in handleSubmit
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'prajinkhatiwada@gmail.com',
      href: 'mailto:prajinkhatiwada@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+977 9814073971',
      href: 'tel:+9779814073971',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kathmandu,Nepal',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-950 dark:to-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100/80 dark:bg-primary-900/80 backdrop-blur-md border border-primary-200/50 dark:border-primary-800/50 text-primary-700 dark:text-primary-300 font-medium mb-6 transition-all duration-300 hover:scale-105">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Let's Connect</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary-900 dark:text-white mb-4 tracking-tight">
            Get In
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent block">
              Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you're a company looking to hire, or you're someone who has a project 
              in mind, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex items-center space-x-4 group">
                  <div className="p-3 bg-primary-100/80 dark:bg-primary-900/30 backdrop-blur-md border border-primary-200/50 dark:border-primary-800/50 rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-primary-200/80 dark:group-hover:bg-primary-800/30">
                    <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
                      {title}
                    </h4>
                    <a
                      href={href}
                      className="text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                Find Me Here
              </h4>
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 rounded-xl overflow-hidden shadow-lg border border-secondary-200/50 dark:border-secondary-700/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.56149281756!2d85.24565632089845!3d27.708894693456634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2s!4v1699875432123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kathmandu, Nepal Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md border border-secondary-200/50 dark:border-secondary-700/50 p-8 rounded-xl shadow-lg">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100/80 dark:bg-green-900/80 backdrop-blur-md border border-green-200/50 dark:border-green-800/50 text-green-700 dark:text-green-300 rounded-lg">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100/80 dark:bg-red-900/80 backdrop-blur-md border border-red-200/50 dark:border-red-800/50 text-red-700 dark:text-red-300 rounded-lg">
                There was an error sending your message. Please try again.
              </div>
            )}

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300/50 dark:border-secondary-600/50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 dark:bg-secondary-800/80 backdrop-blur-md text-secondary-900 dark:text-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300/50 dark:border-secondary-600/50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 dark:bg-secondary-800/80 backdrop-blur-md text-secondary-900 dark:text-white transition-all duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300/50 dark:border-secondary-600/50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 dark:bg-secondary-800/80 backdrop-blur-md text-secondary-900 dark:text-white transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-secondary-300/50 dark:border-secondary-600/50 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 dark:bg-secondary-800/80 backdrop-blur-md text-secondary-900 dark:text-white transition-all duration-200 resize-none"
                />
              </div>
              
              <div
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 disabled:from-secondary-400 disabled:to-secondary-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100 cursor-pointer"
              >
                <Send className="h-5 w-5" />
                <span>
                  {!emailJsLoaded ? 'Loading...' : isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;