import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { SCHOOL_NAME, SCHOOL_LOCATION, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-900 text-white pt-16 pb-8 border-t border-royal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-gold-400">St. Joseph's</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with knowledge, character, and spiritual growth since 1998. 
              Join us in shaping the leaders of tomorrow.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Admission Procedure</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">School Uniform</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Photo Gallery</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Career Opportunities</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0" size={18} />
                <span>{SCHOOL_LOCATION}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={18} />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white">{CONTACT_PHONE}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={18} />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden h-48 bg-gray-800 border border-gray-700">
            {/* Placeholder for iframe map */}
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs text-center p-4">
              <MapPin size={32} className="mb-2 mx-auto opacity-50" />
              Google Map Embed Here
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-royal-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;