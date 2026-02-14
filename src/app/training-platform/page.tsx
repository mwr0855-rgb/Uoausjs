'use client';

/**
 * Training Platform Page - Khatwa Educational Platform
 * Complete training courses catalog with Internal Audit program
 * By Amr AI Team - February 2026
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Clock, 
  Users,
  Star,
  ChevronRight,
  Filter,
  Search,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import PageBackground from '@/components/ui/PageBackground';
import { coursesData, internalAuditProgram } from '@/data/training-courses';
import type { Course } from '@/types/training';

const categories = [
  { id: 'all', label: 'جميع الكورسات', icon: BookOpen },
  { id: 'financial', label: 'مالية ومحاسبية', icon: TrendingUp },
  { id: 'management', label: 'إدارية', icon: Users },
  { id: 'audit', label: 'المراجعة الداخلية', icon: Award },
  { id: 'business', label: 'ريادة الأعمال', icon: GraduationCap },
];

const levels = [
  { id: 'all', label: 'جميع المستويات' },
  { id: 'beginner', label: 'مبتدئ', color: 'text-green-600' },
  { id: 'intermediate', label: 'متوسط', color: 'text-yellow-600' },
  { id: 'advanced', label: 'متقدم', color: 'text-red-600' },
];

export default function TrainingPlatformPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesSearch =
      searchQuery === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.titleEn?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <PageBackground variant="gradient">
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                منصة خطى للتدريب والاستشارات
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              رحلتك نحو التميز المهني
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              كورسات تدريبية متخصصة في المحاسبة، المالية، الإدارة، والمراجعة الداخلية
              <br />
              بإشراف خبراء متخصصين وشهادات معتمدة
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { label: 'كورس تدريبي', value: coursesData.length, icon: BookOpen },
                { label: 'ساعة تدريبية', value: '300+', icon: Clock },
                { label: 'متدرب', value: '2000+', icon: Users },
                { label: 'شهادة معتمدة', value: '100%', icon: Award },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-700"
          >
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث عن كورس..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">التصنيفات</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Level Filters */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">المستوى</h3>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedLevel === level.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Internal Audit Program Banner */}
          <Link href="/training-platform/internal-audit-program">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 mb-12 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {internalAuditProgram.title}
                    </h2>
                    <p className="text-white/90">{internalAuditProgram.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{internalAuditProgram.totalDuration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      <span>{internalAuditProgram.levels.length} مستويات</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                    <span className="font-semibold">استكشف البرنامج</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Courses Grid */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              الكورسات المتاحة ({filteredCourses.length})
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              اختر الكورس المناسب لتطوير مهاراتك المهنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                لا توجد نتائج
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                جرب تغيير الفلاتر أو البحث بكلمة أخرى
              </p>
            </div>
          )}
        </div>
      </div>
    </PageBackground>
  );
}

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/training-platform/courses/${course.id}`}>
        <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
          {/* Course Header */}
          <div className="relative h-48 bg-gradient-to-br from-primary-500 to-accent-600 p-6">
            {course.featured && (
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                ⭐ مميز
              </div>
            )}
            <div className="absolute bottom-4 right-4 left-4">
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                {course.title}
              </h3>
              {course.titleEn && (
                <p className="text-sm text-white/80">{course.titleEn}</p>
              )}
            </div>
          </div>

          {/* Course Body */}
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {course.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">{course.modules.length} محاور</span>
              </div>
              {course.rating && (
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300">{course.rating}</span>
                </div>
              )}
              {course.studentsCount && (
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-700 dark:text-gray-300">{course.studentsCount}+</span>
                </div>
              )}
            </div>

            {/* Level Badge */}
            <div className="flex items-center justify-between">
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                course.level === 'beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {course.level === 'beginner' ? 'مبتدئ' : course.level === 'intermediate' ? 'متوسط' : 'متقدم'}
              </div>

              {course.certificateOffered && (
                <div className="flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400">
                  <Award className="w-4 h-4" />
                  <span>شهادة معتمدة</span>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300">
                <span className="font-semibold">عرض التفاصيل</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
