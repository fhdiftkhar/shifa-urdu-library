
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Brain, Heart, Lungs, Stomach, Bone, Eye, Ear } from 'lucide-react';

const Diseases = () => {
  const diseaseCategories = [
    {
      title: 'Respiratory Diseases',
      urduTitle: 'سانس کی بیماریاں',
      description: 'Conditions affecting breathing and lungs',
      urduDescription: 'سانس اور پھیپھڑوں کو متاثر کرنے والی بیماریاں',
      icon: Lungs,
      color: 'bg-blue-100 text-blue-600',
      count: '12 conditions'
    },
    {
      title: 'Digestive Disorders',
      urduTitle: 'ہاضمہ کی خرابیاں',
      description: 'Stomach and digestive system issues',
      urduDescription: 'پیٹ اور ہاضمہ کے نظام کے مسائل',
      icon: Stomach,
      color: 'bg-green-100 text-green-600',
      count: '15 conditions'
    },
    {
      title: 'Cardiovascular',
      urduTitle: 'دل کی بیماریاں',
      description: 'Heart and blood circulation problems',
      urduDescription: 'دل اور خون کی گردش کے مسائل',
      icon: Heart,
      color: 'bg-red-100 text-red-600',
      count: '8 conditions'
    },
    {
      title: 'Neurological',
      urduTitle: 'اعصابی بیماریاں',
      description: 'Brain and nervous system disorders',
      urduDescription: 'دماغ اور اعصابی نظام کی خرابیاں',
      icon: Brain,
      color: 'bg-purple-100 text-purple-600',
      count: '10 conditions'
    },
    {
      title: 'Musculoskeletal',
      urduTitle: 'ہڈیوں کی بیماریاں',
      description: 'Bone, joint and muscle problems',
      urduDescription: 'ہڈی، جوڑوں اور عضلات کے مسائل',
      icon: Bone,
      color: 'bg-orange-100 text-orange-600',
      count: '18 conditions'
    },
    {
      title: 'Eye Disorders',
      urduTitle: 'آنکھ کی بیماریاں',
      description: 'Vision and eye-related conditions',
      urduDescription: 'بصارت اور آنکھ سے متعلق بیماریاں',
      icon: Eye,
      color: 'bg-indigo-100 text-indigo-600',
      count: '7 conditions'
    },
    {
      title: 'Ear Conditions',
      urduTitle: 'کان کی بیماریاں',
      description: 'Hearing and ear-related problems',
      urduDescription: 'سماعت اور کان کے مسائل',
      icon: Ear,
      color: 'bg-teal-100 text-teal-600',
      count: '6 conditions'
    },
    {
      title: 'General Health',
      urduTitle: 'عمومی صحت',
      description: 'Common health conditions and remedies',
      urduDescription: 'عام صحت کی بیماریاں اور علاج',
      icon: Activity,
      color: 'bg-healing-100 text-healing-600',
      count: '20 conditions'
    }
  ];

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diseaseCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
                  <p className="text-sm font-urdu text-gray-600 mb-2" style={{ direction: 'rtl' }}>
                    {category.urduTitle}
                  </p>
                  <div className="text-xs text-healing-600 font-medium bg-healing-50 px-2 py-1 rounded-full">
                    {category.count}
                  </div>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="mb-2">{category.description}</CardDescription>
                  <p className="text-xs font-urdu text-gray-500" style={{ direction: 'rtl' }}>
                    {category.urduDescription}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Diseases;
