
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, User, Languages } from 'lucide-react';

const Articles = () => {
  // Sample articles data - you can replace this with real data later
  const articles = [
    {
      id: 1,
      title: "Fundamentals of Homeopathic Prescribing",
      urduTitle: "ہومیوپیتھک نسخہ نویسی کی بنیادی باتیں",
      author: "Dr. James Tyler Kent",
      urduAuthor: "ڈاکٹر جیمز ٹائلر کینٹ",
      date: "2024-01-15",
      excerpt: "An introduction to the core principles of homeopathic medicine and prescribing methods.",
      urduExcerpt: "ہومیوپیتھک طب اور نسخہ نویسی کے طریقوں کے بنیادی اصولوں کا تعارف۔",
      category: "Theory",
      urduCategory: "نظریہ",
    },
    {
      id: 2,
      title: "Materia Medica and Its Applications",
      urduTitle: "میٹیریا میڈیکا اور اس کے استعمالات",
      author: "Dr. William Boericke",
      urduAuthor: "ڈاکٹر ولیم بوئرک",
      date: "2024-01-20",
      excerpt: "Understanding the practical applications of homeopathic materia medica in clinical practice.",
      urduExcerpt: "کلینیکل پریکٹس میں ہومیوپیتھک میٹیریا میڈیکا کے عملی استعمالات کو سمجھنا۔",
      category: "Clinical",
      urduCategory: "طبی",
    },
    {
      id: 3,
      title: "Repertory Usage in Modern Practice",
      urduTitle: "جدید پریکٹس میں ریپرٹری کا استعمال",
      author: "Dr. Robin Murphy",
      urduAuthor: "ڈاکٹر رابن مرفی",
      date: "2024-01-25",
      excerpt: "Modern approaches to using homeopathic repertories for case analysis and remedy selection.",
      urduExcerpt: "کیس کے تجزیے اور دوا کے انتخاب کے لیے ہومیوپیتھک ریپرٹریز استعمال کرنے کے جدید طریقے۔",
      category: "Practice",
      urduCategory: "مشق",
    },
  ];

  const categories = ["All", "Theory", "Clinical", "Practice"];
  const urduCategories = ["تمام", "نظریہ", "طبی", "مشق"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles</h1>
          <h2 className="text-2xl font-urdu text-healing-700 mb-4">مضامین</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of translated homeopathic articles from renowned practitioners and scholars.
          </p>
          <p className="text-base font-urdu text-gray-600 mt-2" style={{ direction: 'rtl' }}>
            مشہور پریکٹیشنرز اور اسکالرز کے ترجمہ شدہ ہومیوپیتھک مضامین کا ہمارا مجموعہ دیکھیں۔
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant="outline"
              className="border-healing-200 text-healing-700 hover:bg-healing-50"
            >
              <span className="block">{category}</span>
              <span className="block text-xs font-urdu">{urduCategories[index]}</span>
            </Button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-healing-100 text-healing-700">
                    {article.category}
                  </Badge>
                  <Languages className="w-5 h-5 text-healing-600" />
                </div>
                <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                <CardTitle className="text-base font-urdu text-healing-700 mb-3" style={{ direction: 'rtl' }}>
                  {article.urduTitle}
                </CardTitle>
                <CardDescription className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-urdu" style={{ direction: 'rtl' }}>
                    <span>{article.urduAuthor}</span>
                    <User className="w-4 h-4 ml-2" />
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">{article.excerpt}</p>
                <p className="text-gray-700 font-urdu text-sm mb-4" style={{ direction: 'rtl' }}>
                  {article.urduExcerpt}
                </p>
                <Button className="w-full bg-healing-600 hover:bg-healing-700">
                  <FileText className="w-4 h-4 mr-2" />
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-healing-600 text-healing-700 hover:bg-healing-50">
            Load More Articles
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Articles;
