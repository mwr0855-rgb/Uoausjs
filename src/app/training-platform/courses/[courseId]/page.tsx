'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Award, CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PageBackground from '@/components/ui/PageBackground';
import { coursesData } from '@/data/training-courses';

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const course = coursesData.find((c) => c.id === params.courseId);

  if (!course) {
    notFound();
  }

  return (
    <PageBackground variant="gradient">
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary-600">الرئيسية</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/training-platform" className="hover:text-primary-600">المنصة التدريبية</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white">{course.title}</span>
          </nav>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 mb-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
            <div className="relative z-10">
              {course.featured && (
                <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  ⭐ كورس مميز
                </div>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{course.title}</h1>
              {course.titleEn && (
                <p className="text-xl text-white/90 mb-6">{course.titleEn}</p>
              )}
              <p className="text-white/90 text-lg max-w-3xl">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span className="text-white font-semibold">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-white font-semibold">{course.modules.length} محاور رئيسية</span>
                </div>
                {course.studentsCount && (
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                    <Users className="w-5 h-5" />
                    <span className="text-white font-semibold">{course.studentsCount}+ متدرب</span>
                  </div>
                )}
                {course.certificateOffered && (
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                    <Award className="w-5 h-5" />
                    <span className="text-white font-semibold">شهادة معتمدة</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Objectives */}
              {course.objectives && course.objectives.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    أهداف الكورس
                  </h2>
                  <ul className="space-y-3">
                    {course.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Modules */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  محتوى الكورس
                </h2>
                <div className="space-y-4">
                  {course.modules.map((module, i) => (
                    <div key={module.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-primary-500 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                          <span className="text-primary-600 font-bold">{i + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{module.title}</h3>
                          {module.description && (
                            <p className="text-gray-600 dark:text-gray-400 mb-3">{module.description}</p>
                          )}
                          {module.subModules && module.subModules.length > 0 && (
                            <div className="space-y-2">
                              {module.subModules.map((sub) => (
                                <div key={sub.id} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                  <ChevronRight className="w-4 h-4 text-primary-600" />
                                  <span>{sub.title}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Target Audience */}
              {course.targetAudience && course.targetAudience.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    الفئة المستهدفة
                  </h2>
                  <ul className="space-y-3">
                    {course.targetAudience.map((aud, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{aud}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="sticky top-24 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">سجل الآن</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  ابدأ رحلتك التعليمية معنا واحصل على شهادة معتمدة
                </p>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <span>تواصل للتسجيل</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">المستوى</span>
                    <span className={`font-semibold ${
                      course.level === 'beginner' ? 'text-green-600' :
                      course.level === 'intermediate' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {course.level === 'beginner' ? 'مبتدئ' : course.level === 'intermediate' ? 'متوسط' : 'متقدم'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">المدة</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">الشهادة</span>
                    <span className="font-semibold text-green-600">✓ معتمدة</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
}
