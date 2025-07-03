
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Users, Star, AlertCircle } from 'lucide-react';

const DiseaseCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Disease category data
  const categoryData = {
    'respiratory': {
      title: 'Respiratory Diseases',
      urduTitle: 'سانس کی بیماریاں',
      description: 'Comprehensive homeopathic treatments for breathing and lung conditions',
      urduDescription: 'سانس اور پھیپھڑوں کی بیماریوں کے لیے مکمل ہومیوپیتھک علاج',
      diseases: [
        {
          name: 'Asthma',
          urduName: 'دمہ',
          description: 'Chronic respiratory condition causing breathing difficulties',
          urduDescription: 'سانس میں دشواری کا باعث بننے والی دائمی سانس کی بیماری',
          symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Coughing'],
          urduSymptoms: ['سانس میں آواز', 'سانس کی کمی', 'سینے میں جکڑن', 'کھانسی'],
          remedies: ['Arsenicum Album', 'Ipecacuanha', 'Natrum Sulph', 'Antimonium Tart'],
          severity: 'Moderate to Severe'
        },
        {
          name: 'Bronchitis',
          urduName: 'برونکائٹس',
          description: 'Inflammation of the bronchial tubes',
          urduDescription: 'سانس کی نالیوں میں سوزش',
          symptoms: ['Persistent cough', 'Mucus production', 'Fatigue', 'Chest discomfort'],
          urduSymptoms: ['مسلسل کھانسی', 'کف کا اخراج', 'تھکاوٹ', 'سینے میں تکلیف'],
          remedies: ['Bryonia', 'Phosphorus', 'Hepar Sulph', 'Kali Carb'],
          severity: 'Mild to Moderate'
        },
        {
          name: 'Pneumonia',
          urduName: 'نمونیا',
          description: 'Infection that inflames air sacs in lungs',
          urduDescription: 'پھیپھڑوں میں ہوا کی تھیلیوں میں انفیکشن',
          symptoms: ['High fever', 'Chills', 'Cough with phlegm', 'Difficulty breathing'],
          urduSymptoms: ['تیز بخار', 'کپکپی', 'کف کے ساتھ کھانسی', 'سانس میں دشواری'],
          remedies: ['Phosphorus', 'Bryonia', 'Antimonium Tart', 'Lycopodium'],
          severity: 'Severe'
        }
      ]
    },
    'digestive': {
      title: 'Digestive Disorders',
      urduTitle: 'ہاضمہ کی خرابیاں',
      description: 'Natural remedies for stomach and digestive system problems',
      urduDescription: 'پیٹ اور ہاضمہ کے نظام کے مسائل کے لیے قدرتی علاج',
      diseases: [
        {
          name: 'Gastritis',
          urduName: 'گیسٹرائٹس',
          description: 'Inflammation of the stomach lining',
          urduDescription: 'پیٹ کی اندرونی دیوار میں سوزش',
          symptoms: ['Stomach pain', 'Nausea', 'Vomiting', 'Loss of appetite'],
          urduSymptoms: ['پیٹ میں درد', 'متلی', 'قے', 'بھوک کا نہ لگنا'],
          remedies: ['Nux Vomica', 'Argentum Nitricum', 'Carbo Veg', 'Pulsatilla'],
          severity: 'Mild to Moderate'
        },
        {
          name: 'IBS (Irritable Bowel Syndrome)',
          urduName: 'آئی بی ایس',
          description: 'Chronic disorder affecting the large intestine',
          urduDescription: 'بڑی آنت کو متاثر کرنے والی دائمی خرابی',
          symptoms: ['Abdominal pain', 'Bloating', 'Gas', 'Diarrhea or constipation'],
          urduSymptoms: ['پیٹ میں درد', 'پیٹ کا پھولنا', 'گیس', 'اسہال یا قبض'],
          remedies: ['Colocynthis', 'Nux Vomica', 'Lycopodium', 'Sulphur'],
          severity: 'Moderate'
        }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <Button onClick={() => navigate('/diseases')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Diseases
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="bg-gradient-to-br from-healing-50 to-nature-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/diseases')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Disease Categories
            </Button>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {currentCategory.title}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-urdu text-healing-700 mb-6" style={{ direction: 'rtl' }}>
                {currentCategory.urduTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                {currentCategory.description}
              </p>
              <p className="text-lg font-urdu text-gray-700 max-w-3xl mx-auto" style={{ direction: 'rtl' }}>
                {currentCategory.urduDescription}
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Users className="w-8 h-8 mx-auto text-healing-600 mb-2" />
                <CardTitle className="text-2xl font-bold text-healing-700">
                  {currentCategory.diseases.length}
                </CardTitle>
                <CardDescription>Conditions Covered</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Star className="w-8 h-8 mx-auto text-healing-600 mb-2" />
                <CardTitle className="text-2xl font-bold text-healing-700">
                  {currentCategory.diseases.reduce((acc, disease) => acc + disease.remedies.length, 0)}
                </CardTitle>
                <CardDescription>Total Remedies</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Clock className="w-8 h-8 mx-auto text-healing-600 mb-2" />
                <CardTitle className="text-2xl font-bold text-healing-700">24/7</CardTitle>
                <CardDescription>Available Reference</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Disease Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentCategory.diseases.map((disease, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl text-healing-800 mb-1">
                        {disease.name}
                      </CardTitle>
                      <p className="text-lg font-urdu text-healing-600" style={{ direction: 'rtl' }}>
                        {disease.urduName}
                      </p>
                    </div>
                    <Badge variant={disease.severity === 'Severe' ? 'destructive' : disease.severity === 'Moderate' ? 'default' : 'secondary'}>
                      {disease.severity}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {disease.description}
                  </CardDescription>
                  <p className="text-sm font-urdu text-gray-600" style={{ direction: 'rtl' }}>
                    {disease.urduDescription}
                  </p>
                </CardHeader>
                
                <CardContent>
                  {/* Symptoms */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
                      Common Symptoms
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {disease.symptoms.map((symptom, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-sm bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
                            {symptom}
                          </span>
                          <span className="text-xs font-urdu text-gray-500 mt-1 text-center" style={{ direction: 'rtl' }}>
                            {disease.urduSymptoms[idx]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Remedies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-healing-500" />
                      Recommended Remedies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {disease.remedies.map((remedy, idx) => (
                        <Badge key={idx} variant="outline" className="bg-healing-50 text-healing-700 border-healing-200">
                          {remedy}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Disclaimer */}
          <Card className="mt-12 bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">Important Disclaimer</h3>
                  <p className="text-orange-700 text-sm mb-2">
                    This information is for educational purposes only and should not replace professional medical advice. 
                    Always consult with a qualified homeopathic practitioner or healthcare provider before starting any treatment.
                  </p>
                  <p className="text-sm font-urdu text-orange-600" style={{ direction: 'rtl' }}>
                    یہ معلومات صرف تعلیمی مقاصد کے لیے ہیں اور پیشہ ورانہ طبی مشورے کا متبادل نہیں ہیں۔ کوئی بھی علاج شروع کرنے سے پہلے ہمیشہ کسی قابل ہومیوپیتھک ڈاکٹر یا صحت کی دیکھ بھال فراہم کرنے والے سے مشورہ کریں۔
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DiseaseCategory;
