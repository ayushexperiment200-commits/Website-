import { SCHOOL_NAME, SCHOOL_LOCATION, CONTACT_PHONE, CONTACT_EMAIL, PRINCIPAL_MSG } from '../constants';

// This service is now a simple mock chat handler since AI features were requested to be removed.
// It uses simple keyword matching to provide helpful responses.

export const getResponse = async (message: string): Promise<string> => {
  // Simulate network delay for realism
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const lowerMsg = message.toLowerCase();
  
  // Rule-based responses
  if (lowerMsg.includes('admission') || lowerMsg.includes('apply') || lowerMsg.includes('join')) {
    return "Admissions are currently open for the 2024-25 academic session. You can apply online via the 'Admissions' tab or visit the school office to collect the prospectus.";
  }
  
  if (lowerMsg.includes('fee') || lowerMsg.includes('cost') || lowerMsg.includes('price')) {
    return `For detailed fee structures, please contact our accounts department at ${CONTACT_PHONE} or visit the school office between 9:00 AM and 2:00 PM.`;
  }
  
  if (lowerMsg.includes('principal')) {
    return `Our Principal's message: "${PRINCIPAL_MSG.substring(0, 100)}..." You can read the full message on the Home page.`;
  }
  
  if (lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('email') || lowerMsg.includes('call')) {
    return `You can reach us at ${CONTACT_PHONE} or email us at ${CONTACT_EMAIL}.`;
  }

  if (lowerMsg.includes('location') || lowerMsg.includes('address') || lowerMsg.includes('where')) {
    return `We are located in ${SCHOOL_LOCATION}. You can find the map in the Footer section below.`;
  }

  if (lowerMsg.includes('time') || lowerMsg.includes('hour')) {
    return "School hours are 7:30 AM to 1:30 PM for students. Office hours are 9:00 AM to 4:00 PM.";
  }
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return "Hello! Welcome to St. Joseph's School. How can I assist you today?";
  }

  // Default fallback
  return "I'm an automated assistant. For specific inquiries not covered here, please contact the school administration directly.";
};
