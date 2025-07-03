
import { BookOpen } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-healing-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">Homeopathic Medicine</span>
            </div>
            <p className="text-gray-300 mb-2">
              Dedicated to sharing the knowledge of homeopathic medicine through quality translations.
            </p>
            <p className="text-sm font-urdu text-gray-300" style={{ direction: 'rtl' }}>
              معیاری تراجم کے ذریعے ہومیوپیتھک طب کے علم کو بانٹنے کے لیے وقف۔
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Content</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Articles / مضامین</li>
              <li>Books / کتابیں</li>
              <li>Translations / تراجم</li>
              <li>Research / تحقیق</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="text-gray-300">
              <p className="mb-2">🇬🇧 English</p>
              <p className="font-urdu">🇵🇰 اردو</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Homeopathic Medicine Portal. Preserving and sharing homeopathic knowledge.
          </p>
          <p className="text-sm font-urdu text-gray-400 mt-1" style={{ direction: 'rtl' }}>
            ہومیوپیتھک علم کا تحفظ اور اشتراک
          </p>
        </div>
      </div>
    </footer>
  );
};
