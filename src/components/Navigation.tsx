import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, FileText, Info, Home, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home', urduLabel: 'ہوم', icon: Home },
    { href: '/articles', label: 'Articles', urduLabel: 'مضامین', icon: FileText },
    { href: '/books', label: 'Books', urduLabel: 'کتابیں', icon: BookOpen },
    { href: '/diseases', label: 'Diseases', urduLabel: 'امراض', icon: Activity },
    { href: '/about', label: 'About', urduLabel: 'تعارف', icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-healing-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Homeopathic Medicine
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-healing-100 text-healing-700'
                      : 'text-gray-600 hover:text-healing-600 hover:bg-healing-50'
                  }`}
                >
                  <span className="block">{item.label}</span>
                  <span className="block text-xs font-urdu text-right">
                    {item.urduLabel}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-healing-100 text-healing-700'
                      : 'text-gray-600 hover:text-healing-600 hover:bg-healing-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <div>
                    <span className="block">{item.label}</span>
                    <span className="block text-sm font-urdu text-right">
                      {item.urduLabel}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
