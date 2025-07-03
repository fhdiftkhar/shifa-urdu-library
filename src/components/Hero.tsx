
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Languages, Users, Stethoscope, Heart } from 'lucide-react';

export const Hero = () => {
  const quickLinks = [
    {
      title: 'Latest Articles',
      urduTitle: 'تازہ مضامین',
      description: 'Read our newest translated articles',
      urduDescription: 'ہمارے نئے ترجمہ شدہ مضامین پڑھیں',
      href: '/articles',
      icon: FileText,
      color: 'bg-healing-100 text-healing-600'
    },
    {
      title: 'Classic Books',
      urduTitle: 'کلاسک کتابیں',
      description: 'Explore timeless homeopathic literature',
      urduDescription: 'لازوال ہومیوپیتھک ادب دریافت کریں',
      href: '/books',
      icon: BookOpen,
      color: 'bg-nature-100 text-nature-600'
    },
    {
      title: 'About Medicine',
      urduTitle: 'طب کے بارے میں',
      description: 'Learn about homeopathic principles',
      urduDescription: 'ہومیوپیتھک اصولوں کے بارے میں جانیں',
      href: '/about',
      icon: Stethoscope,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Healing Journey',
      urduTitle: 'شفا کا سفر',
      description: 'Discover natural healing methods',
      urduDescription: 'قدرتی علاج کے طریقے دریافت کریں',
      href: '/articles',
      icon: Heart,
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-healing-50 to-nature-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Homeopathic Medicine
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-urdu text-healing-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            ہومیوپیتھک طب
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            A comprehensive resource for homeopathic medicine literature, featuring translated articles and books from renowned homeopathic authors. Explore the wisdom of homeopathy in both English and Urdu.
          </p>
          <p className="text-lg font-urdu text-gray-700 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s', direction: 'rtl' }}>
            ہومیوپیتھک طب کے لیے ایک جامع وسیلہ، جس میں مشہور ہومیوپیتھک مصنفین کے ترجمہ شدہ مضامین اور کتابیں شامل ہیں۔ انگریزی اور اردو دونوں میں ہومیوپیتھی کی حکمت دریافت کریں۔
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-16" style={{ animationDelay: '0.8s' }}>
            <Button asChild size="lg" className="bg-healing-600 hover:bg-healing-700">
              <Link to="/articles" className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Browse Articles</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-healing-600 text-healing-700 hover:bg-healing-50">
              <Link to="/books" className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Explore Books</span>
              </Link>
            </Button>
          </div>

          {/* Quick Link Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <Link to={link.href}>
                  <CardHeader className="text-center pb-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <p className="text-sm font-urdu text-gray-600" style={{ direction: 'rtl' }}>
                      {link.urduTitle}
                    </p>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <CardDescription className="mb-2">{link.description}</CardDescription>
                    <p className="text-xs font-urdu text-gray-500" style={{ direction: 'rtl' }}>
                      {link.urduDescription}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-center">
              <div className="bg-healing-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="w-8 h-8 text-healing-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bilingual Content</h3>
              <p className="text-gray-600">Available in both English and Urdu</p>
              <p className="text-sm font-urdu text-gray-600 mt-1" style={{ direction: 'rtl' }}>
                انگریزی اور اردو دونوں میں دستیاب
              </p>
            </div>
            <div className="text-center">
              <div className="bg-nature-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-nature-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Articles</h3>
              <p className="text-gray-600">Carefully translated medical content</p>
              <p className="text-sm font-urdu text-gray-600 mt-1" style={{ direction: 'rtl' }}>
                احتیاط سے ترجمہ شدہ طبی مواد
              </p>
            </div>
            <div className="text-center">
              <div className="bg-healing-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-healing-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Classic Books</h3>
              <p className="text-gray-600">Timeless homeopathic literature</p>
              <p className="text-sm font-urdu text-gray-600 mt-1" style={{ direction: 'rtl' }}>
                لازوال ہومیوپیتھک ادب
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
