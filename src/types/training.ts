/**
 * Training Platform Types
 * Khatwa Training & Consulting Platform
 * By Amr AI Team - 2026
 */

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  order: number;
  subModules?: SubModule[];
  files?: CourseFile[];
}

export interface SubModule {
  id: string;
  title: string;
  description?: string;
  order: number;
  files?: CourseFile[];
}

export interface CourseFile {
  id: string;
  name: string;
  type: 'pdf' | 'docx' | 'xlsx' | 'video' | 'audio' | 'image';
  url: string;
  size?: string;
  description?: string;
  icon?: string;
}

export interface Course {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  category: 'financial' | 'management' | 'audit' | 'business' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string; // e.g., "40 hours"
  hours?: number;
  modules: CourseModule[];
  objectives?: string[];
  prerequisites?: string[];
  targetAudience?: string[];
  certificateOffered?: boolean;
  price?: number;
  currency?: string;
  thumbnail?: string;
  featured?: boolean;
  instructor?: string;
  rating?: number;
  studentsCount?: number;
}

export interface InternalAuditLevel {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  order: number;
  modules: CourseModule[];
  objectives?: string[];
  duration?: string;
}

export interface InternalAuditProgram {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  levels: InternalAuditLevel[];
  totalDuration?: string;
  certification?: string;
}

export interface ConsultingPackage {
  id: string;
  title: string;
  description: string;
  hours: number;
  services: string[];
  price?: number;
  currency?: string;
  featured?: boolean;
}

export interface TrainingPlatformData {
  courses: Course[];
  internalAuditProgram?: InternalAuditProgram;
  consultingPackages?: ConsultingPackage[];
}
