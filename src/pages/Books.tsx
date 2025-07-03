
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, User, Languages, Star } from 'lucide-react';

const Books = () => {
  // Sample books data
  const books = [
    {
      id: 1,
      title: "Organon of Medicine",
      urduTitle: "آرگنن آف میڈیسن",
      author: "Samuel Hahnemann",
      urduAuthor: "سیموئیل ہانیمن",
      year: "1810",
      pages: 320,
      rating: 5,
      description: "The foundational text of homeopathic medicine, outlining the fundamental principles and philosophy.",
      urduDescription: "ہومیوپیتھک طب کی بنیادی کتاب، جو بنیادی اصول اور فلسفہ بیان کرتی ہے۔",
      category: "Foundation",
      urduCategory: "بنیادی",
      status: "Completed",
      urduStatus: "مکمل",
    },
    {
      id: 2,
      title: "Lectures on Homeopathic Philosophy",
      urduTitle: "ہومیوپیتھک فلسفہ پر لیکچرز",
      author: "James Tyler Kent",
      urduAuthor: "جیمز ٹائلر کینٹ",
      year: "1900",
      pages: 280,
      rating: 5,
      description: "A comprehensive exploration of homeopathic philosophy and its practical applications.",
      urduDescription: "ہومیوپیتھک فلسفہ اور اس کے عملی استعمالات کی جامع تفصیل۔",
      category: "Philosophy",
      urduCategory: "فلسفہ",
      status: "In Progress",
      urduStatus: "جاری",
    },
    {
      id: 3,
      title: "Pocket Manual of Homeopathic Materia Medica",
      urduTitle: "ہومیوپیتھک میٹیریا میڈیکا کا جیبی دستور",
      author: "William Boericke",
      urduAuthor: "ولیم بوئرک",
      year: "1927",
      pages: 650,
      rating: 4,
      description: "A comprehensive reference guide to homeopathic remedies and their therapeutic applications.",
      urduDescription: "ہومیوپیتھک ادویات اور ان کے علاجی استعمالات کی جامع حوالہ کتاب۔",
      category: "Reference",
      urduCategory: "حوالہ",
      status: "Planned",
      urduStatus: "منصوبہ بند",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planned':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Books Collection</h1>
          <h2 className="text-2xl font-urdu text-healing-700 mb-4">کتابوں کا مجموعہ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover classic homeopathic literature translated into Urdu, preserving the wisdom of great homeopathic masters.
          </p>
          <p className="text-base font-urdu text-gray-600 mt-2" style={{ direction: 'rtl' }}>
            اردو میں ترجمہ شدہ کلاسیکی ہومیوپیتھک ادب دریافت کریں، عظیم ہومیوپیتھک ماہرین کی حکمت کو محفوظ کرتے ہوئے۔
          </p>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {books.map((book) => (
            <Card key={book.id} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-healing-500">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-nature-100 text-nature-700">
                      {book.category}
                    </Badge>
                    <Badge className={getStatusColor(book.status)}>
                      {book.status}
                    </Badge>
                  </div>
                  <Languages className="w-6 h-6 text-healing-600" />
                </div>
                
                <CardTitle className="text-xl mb-2">{book.title}</CardTitle>
                <CardTitle className="text-lg font-urdu text-healing-700 mb-4" style={{ direction: 'rtl' }}>
                  {book.urduTitle}
                </CardTitle>
                
                <CardDescription className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      <span>{book.author}</span>
                    </div>
                    <div className="flex items-center">
                      {renderStars(book.rating)}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 font-urdu" style={{ direction: 'rtl' }}>
                    <span>{book.urduAuthor}</span>
                    <User className="w-4 h-4 ml-2" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Published: {book.year}</span>
                    </div>
                    <span>{book.pages} pages</span>
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-3">{book.description}</p>
                <p className="text-gray-700 font-urdu text-sm mb-6" style={{ direction: 'rtl' }}>
                  {book.urduDescription}
                </p>
                
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-healing-600 hover:bg-healing-700"
                    disabled={book.status === 'Planned'}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {book.status === 'Completed' ? 'Read Book' : 
                     book.status === 'In Progress' ? 'Read Available' : 'Coming Soon'}
                  </Button>
                  <Button variant="outline" className="border-healing-600 text-healing-700 hover:bg-healing-50">
                    Preview
                  </Button>
                </div>
                
                {book.status === 'In Progress' && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Translation Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-healing-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Have a Book Request?</h3>
          <h4 className="text-lg font-urdu text-healing-700 mb-4">کتاب کی درخواست ہے؟</h4>
          <p className="text-gray-600 mb-6">
            Suggest a homeopathic book you'd like to see translated into Urdu.
          </p>
          <Button size="lg" className="bg-nature-600 hover:bg-nature-700">
            Submit Request
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Books;
