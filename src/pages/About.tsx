
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BookOpen, Languages, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Mission</h1>
          <h2 className="text-2xl font-urdu text-healing-700 mb-6">ہمارے مشن کے بارے میں</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Welcome to our dedicated platform for homeopathic medicine literature. We are committed to preserving and sharing the invaluable knowledge of homeopathic masters by translating their works from English to Urdu, making this profound healing system accessible to Urdu-speaking communities worldwide.
            </p>
            <p className="text-base font-urdu text-gray-700 leading-relaxed" style={{ direction: 'rtl' }}>
              ہومیوپیتھک طب کے ادب کے لیے ہمارے وقف پلیٹ فارم میں خوش آمدید۔ ہم ہومیوپیتھک ماہرین کے انمول علم کو محفوظ کرنے اور بانٹنے کے لیے پرعزم ہیں، ان کے کاموں کو انگریزی سے اردو میں ترجمہ کر کے، اس گہرے علاجی نظام کو دنیا بھر کی اردو بولنے والی کمیونٹیز کے لیے قابل رسائی بناتے ہوئے۔
            </p>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-healing-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-healing-600" />
              </div>
              <CardTitle className="text-lg">Preserve Knowledge</CardTitle>
              <p className="text-sm font-urdu text-healing-700">علم کا تحفظ</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Safeguarding classical homeopathic literature for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="w-8 h-8 text-nature-600" />
              </div>
              <CardTitle className="text-lg">Bridge Languages</CardTitle>
              <p className="text-sm font-urdu text-nature-700">زبانوں کا پل</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Creating linguistic bridges between English and Urdu medical literature.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-healing-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-healing-600" />
              </div>
              <CardTitle className="text-lg">Heal Communities</CardTitle>
              <p className="text-sm font-urdu text-healing-700">کمیونٹی کا علاج</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Empowering communities with accessible homeopathic knowledge.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-nature-600" />
              </div>
              <CardTitle className="text-lg">Build Network</CardTitle>
              <p className="text-sm font-urdu text-nature-700">نیٹ ورک کی تعمیر</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Connecting homeopathic practitioners and enthusiasts globally.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Vision */}
        <div className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Our Vision</h3>
          <h4 className="text-xl font-urdu text-healing-700 mb-6 text-center">ہماری رؤیت</h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h5 className="text-lg font-semibold text-gray-800 mb-3">English Vision</h5>
              <p className="text-gray-700 leading-relaxed">
                We envision a world where the profound wisdom of homeopathic medicine is accessible to every Urdu-speaking individual. Through careful translation and preservation of classical texts, we aim to bridge the gap between traditional healing knowledge and modern practitioners, ensuring that the therapeutic insights of great homeopathic masters continue to benefit humanity across linguistic and cultural boundaries.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-gray-800 mb-3 font-urdu">اردو رؤیت</h5>
              <div className="text-gray-700 leading-relaxed font-urdu" style={{ direction: 'rtl' }}>
                <p>
                  ہم ایک ایسی دنیا کا خواب دیکھتے ہیں جہاں ہومیوپیتھک طب کی گہری حکمت ہر اردو بولنے والے فرد کے لیے قابل رسائی ہو۔ کلاسیکی متون کے احتیاط سے ترجمے اور تحفظ کے ذریعے، ہم روایتی علاجی علم اور جدید پریکٹیشنرز کے درمیان خلا کو پاٹنے کا ارادہ رکھتے ہیں، اس بات کو یقینی بناتے ہوئے کہ عظیم ہومیوپیتھک ماہرین کی علاجی بصیرتیں لسانی اور ثقافتی حدود سے بالاتر ہو کر انسانیت کو فائدہ پہنچاتی رہیں۔
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Translation Process */}
        <div className="bg-gradient-to-r from-healing-50 to-nature-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Our Translation Process</h3>
          <h4 className="text-xl font-urdu text-healing-700 mb-8 text-center">ہمارا ترجمے کا عمل</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-healing-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Careful Selection</h5>
              <p className="text-sm font-urdu text-healing-700 mb-2">احتیاط سے انتخاب</p>
              <p className="text-gray-600 text-sm">
                We carefully select authentic and significant homeopathic texts from renowned authors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-nature-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Expert Translation</h5>
              <p className="text-sm font-urdu text-nature-700 mb-2">ماہرانہ ترجمہ</p>
              <p className="text-gray-600 text-sm">
                Our team of medical and linguistic experts ensure accurate and meaningful translations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-healing-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h5 className="font-semibold text-gray-800 mb-2">Quality Review</h5>
              <p className="text-sm font-urdu text-healing-700 mb-2">معیار کا جائزہ</p>
              <p className="text-gray-600 text-sm">
                Multiple reviews ensure the highest quality and accuracy of translated content.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Mission</h3>
          <h4 className="text-xl font-urdu text-healing-700 mb-4">ہمارے مشن میں شامل ہوں</h4>
          <p className="text-gray-600 mb-6">
            Whether you're a practitioner, student, or enthusiast of homeopathic medicine, 
            we welcome your participation in preserving and sharing this valuable knowledge.
          </p>
          <p className="text-sm font-urdu text-gray-600 mb-8" style={{ direction: 'rtl' }}>
            چاہے آپ ایک پریکٹیشنر، طالب علم، یا ہومیوپیتھک طب کے شوقین ہیں، 
            ہم اس قیمتی علم کو محفوظ کرنے اور بانٹنے میں آپ کی شرکت کو خوش آمدید کہتے ہیں۔
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
