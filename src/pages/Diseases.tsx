import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, Brain, Heart, Wind, Zap, Bone, Eye, Ear, ChevronRight, Users, Clock, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Diseases = () => {
  const diseaseCategories = [
    {
      title: 'Respiratory Diseases',
      urduTitle: 'سانس کی بیماریاں',
      description: 'Conditions affecting breathing and lungs',
      urduDescription: 'سانس اور پھیپھڑوں کو متاثر کرنے والی بیماریاں',
      icon: Wind,
      color: 'bg-blue-100 text-blue-600',
      count: '12 conditions',
      commonConditions: ['Asthma', 'Bronchitis', 'Pneumonia', 'COPD'],
      urduConditions: ['دمہ', 'برونکائٹس', 'نمونیا', 'سانس کی بیماری'],
      route: 'respiratory'
    },
    {
      title: 'Digestive Disorders',
      urduTitle: 'ہاضمہ کی خرابیاں',
      description: 'Stomach and digestive system issues',
      urduDescription: 'پیٹ اور ہاضمہ کے نظام کے مسائل',
      icon: Zap,
      color: 'bg-green-100 text-green-600',
      count: '15 conditions',
      commonConditions: ['Gastritis', 'IBS', 'Constipation', 'Diarrhea'],
      urduConditions: ['گیسٹرائٹس', 'آئی بی ایس', 'قبض', 'اسہال'],
      route: 'digestive'
    },
    {
      title: 'Cardiovascular',
      urduTitle: 'دل کی بیماریاں',
      description: 'Heart and blood circulation problems',
      urduDescription: 'دل اور خون کی گردش کے مسائل',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      count: '8 conditions',
      commonConditions: ['Hypertension', 'Palpitations', 'Angina', 'Arrhythmia'],
      urduConditions: ['ہائی بلڈ پریشر', 'دل کی دھڑکن', 'سینے میں درد', 'دل کی بے قاعدگی'],
      route: 'cardiovascular'
    },
    {
      title: 'Neurological',
      urduTitle: 'اعصابی بیماریاں',
      description: 'Brain and nervous system disorders',
      urduDescription: 'دماغ اور اعصابی نظام کی خرابیاں',
      icon: Brain,
      color: 'bg-purple-100 text-purple-600',
      count: '10 conditions',
      commonConditions: ['Headaches', 'Migraines', 'Anxiety', 'Depression'],
      urduConditions: ['سر درد', 'آدھے سر کا درد', 'بے چینی', 'ڈپریشن'],
      route: 'neurological'
    },
    {
      title: 'Musculoskeletal',
      urduTitle: 'ہڈیوں کی بیماریاں',
      description: 'Bone, joint and muscle problems',
      urduDescription: 'ہڈی، جوڑوں اور عضلات کے مسائل',
      icon: Bone,
      color: 'bg-orange-100 text-orange-600',
      count: '18 conditions',
      commonConditions: ['Arthritis', 'Back Pain', 'Muscle Cramps', 'Joint Pain'],
      urduConditions: ['جوڑوں کا درد', 'کمر درد', 'عضلات میں درد', 'جوڑوں کی سوزش'],
      route: 'musculoskeletal'
    },
    {
      title: 'Eye Disorders',
      urduTitle: 'آنکھ کی بیماریاں',
      description: 'Vision and eye-related conditions',
      urduDescription: 'بصارت اور آنکھ سے متعلق بیماریاں',
      icon: Eye,
      color: 'bg-indigo-100 text-indigo-600',
      count: '7 conditions',
      commonConditions: ['Conjunctivitis', 'Dry Eyes', 'Styes', 'Cataracts'],
      urduConditions: ['آشوب چشم', 'آنکھوں کا خشک ہونا', 'آنکھ کا پھوڑا', 'موتیا'],
      route: 'eye-disorders'
    },
    {
      title: 'Ear Conditions',
      urduTitle: 'کان کی بیماریاں',
      description: 'Hearing and ear-related problems',
      urduDescription: 'سماعت اور کان کے مسائل',
      icon: Ear,
      color: 'bg-teal-100 text-teal-600',
      count: '6 conditions',
      commonConditions: ['Ear Infections', 'Tinnitus', 'Hearing Loss', 'Ear Pain'],
      urduConditions: ['کان کا انفیکشن', 'کان میں آواز', 'سماعت کا نقصان', 'کان کا درد'],
      route: 'ear-conditions'
    },
    {
      title: 'General Health',
      urduTitle: 'عمومی صحت',
      description: 'Common health conditions and remedies',
      urduDescription: 'عام صحت کی بیماریاں اور علاج',
      icon: Activity,
      color: 'bg-healing-100 text-healing-600',
      count: '20 conditions',
      commonConditions: ['Fever', 'Cold & Flu', 'Fatigue', 'Sleep Disorders'],
      urduConditions: ['بخار', 'زکام اور فلو', 'تھکاوٹ', 'نیند کی خرابی'],
      route: 'general-health'
    }
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (route: string) => {
    console.log(`Navigating to ${route} category`);
    navigate(`/diseases/${route}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="bg-gradient-to-br from-healing-50 to-nature-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Disease Categories
            </h1>
            <h2 className="text-2xl sm:text-3xl font-urdu text-healing-700 mb-6" style={{ direction: 'rtl' }}>
              بیماریوں کی اقسام
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Explore homeopathic treatments organized by disease categories and conditions
            </p>
            <p className="text-lg font-urdu text-gray-700 max-w-3xl mx-auto" style={{ direction: 'rtl' }}>
              بیماریوں کی اقسام اور حالات کے مطابق منظم ہومیوپیتھک علاج دریافت کریں
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Users className="w-8 h-8 mx-auto text-healing-600 mb-2" />
                <CardTitle className="text-2xl font-bold text-healing-700">96+</CardTitle>
                <CardDescription>Total Conditions Covered</CardDescription>
                <p className="text-sm font-urdu text-gray-600" style={{ direction: 'rtl' }}>
                  کل بیماریاں شامل
                </p>
              </CardHeader>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <BookOpen className="w-8 h-8 mx-auto text-healing-600 mb-2" />
                <CardTitle className="text-2xl font-bold text-healing-700">500+</CardTitle>
                <CardDescription>Homeopathic Remedies</CardDescription>
                <p className="text-sm font-urdu text-gray-600" style={{ direction: 'rtl' }}>
                  ہومیوپیتھک علاج
                </p>
              </CardHeader>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Clock className="w-8 h-8 mx-auto text-healing-600 mb-2" />
                <CardTitle className="text-2xl font-bold text-healing-700">24/7</CardTitle>
                <CardDescription>Available Reference</CardDescription>
                <p className="text-sm font-urdu text-gray-600" style={{ direction: 'rtl' }}>
                  دستیاب حوالہ
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* Disease Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diseaseCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group bg-white/90 backdrop-blur-sm"
                onClick={() => handleCategoryClick(category.route)}
              >
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg mb-2 group-hover:text-healing-700 transition-colors">
                    {category.title}
                  </CardTitle>
                  <p className="text-sm font-urdu text-gray-600 mb-2" style={{ direction: 'rtl' }}>
                    {category.urduTitle}
                  </p>
                  <div className="text-xs text-healing-600 font-medium bg-healing-50 px-2 py-1 rounded-full">
                    {category.count}
                  </div>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="mb-3">{category.description}</CardDescription>
                  <p className="text-xs font-urdu text-gray-500 mb-3" style={{ direction: 'rtl' }}>
                    {category.urduDescription}
                  </p>
                  
                  {/* Common Conditions Preview */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Common Conditions:</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {category.commonConditions.slice(0, 2).map((condition, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {condition}
                        </span>
                      ))}
                      {category.commonConditions.length > 2 && (
                        <span className="text-xs text-gray-500">+{category.commonConditions.length - 2} more</span>
                      )}
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-healing-50 group-hover:text-healing-700 transition-colors"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-healing-50 border-healing-200 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-healing-800">Need Help Finding a Remedy?</CardTitle>
                <p className="text-lg font-urdu text-healing-700" style={{ direction: 'rtl' }}>
                  علاج تلاش کرنے میں مدد چاہیے؟
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Browse through our comprehensive collection of homeopathic treatments organized by condition type.
                </p>
                <p className="text-sm font-urdu text-gray-600 mb-6" style={{ direction: 'rtl' }}>
                  حالت کی قسم کے مطابق منظم ہومیوپیتھک علاج کے ہمارے جامع مجموعے کو دیکھیں۔
                </p>
                <Button className="bg-healing-600 hover:bg-healing-700 text-white px-8 py-2">
                  Browse All Remedies
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Diseases;
