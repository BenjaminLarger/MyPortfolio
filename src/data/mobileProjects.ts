import { Project } from '../types/project';

export const mobileProjects: Project[] = [
  {
    id: 'trainer-app',
    title: 'Personal Trainer App - Cross-Platform Mobile Solution',
    description: 'Cross-platform Flutter mobile app for personal trainers and clients. Features offline-first architecture with passwordless authentication (magic links + device biometrics), subscription payments via Stripe, real-time client management, and clean architecture with Riverpod state management.',
    technologies: ['Flutter', 'Riverpod', 'Drift', 'Dio', 'Stripe', 'Firebase', 'Material 3', 'go_router', 'flutter_secure_storage'],
    category: 'mobile-apps',
    featured: false,
    completionDate: '2026-01-16',
    imageUrl: '/assets/photos/trainer-app.webp',
  },
];
