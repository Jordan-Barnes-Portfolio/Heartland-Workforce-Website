import { 
  ClipboardList, Users, MapPin, Inbox, FileText, DollarSign, BarChart3
} from 'lucide-react';

export interface FeatureCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  image: string;
  video?: string;
  isVideo?: boolean;
}

export const featureCategories: FeatureCategory[] = [
  {
    id: 'project-management',
    title: 'Project Management',
    icon: ClipboardList,
    description: 'Comprehensive tools to track and manage all aspects of your projects.',
    features: [
      'Manage & track all projects',
      'Store documentation, reports, files, photos, and videos',
      'Add partners for shared visibility',
      'Export branded reports (PDF, email, link)'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    isVideo: false
  },
  {
    id: 'sales-leads',
    title: 'Sales & Leads',
    icon: BarChart3,
    description: 'Capture leads and track your sales process from start to finish.',
    features: [
      'Capture and manage leads',
      'Sales tool to show service class before starting work',
      'Track close rates, commissions, and partner networks'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    isVideo: false
  },
  {
    id: 'employees',
    title: 'Employees',
    icon: Users,
    description: 'Manage your team, track time, and control access to information.',
    features: [
      'Timecard submission, tracking, and approval',
      'Manage access levels and contact details'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
    isVideo: false
  },
  {
    id: 'dispatching',
    title: 'Dispatching',
    icon: MapPin,
    description: 'Efficiently dispatch field technicians using visual scheduling tools.',
    features: [
      'Map and calendar-based dispatch interface',
      'Drag-and-drop scheduling'
    ],
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80',
    isVideo: false
  },
  {
    id: 'inbox',
    title: 'Inbox Integration',
    icon: Inbox,
    description: 'Centralize all communications in one easy-to-manage interface.',
    features: [
      'Aggregate leads from social and ad platforms',
      'Single unified interface for lead gen'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    isVideo: false
  },
  {
    id: 'documents',
    title: 'Documents & SOPs',
    icon: FileText,
    description: 'Store and access critical documentation when and where you need it.',
    features: [
      'Store SOPs, job types, SOCs',
      'Query via AI Assistant in the field for consistency'
    ],
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
    isVideo: false
  },
  {
    id: 'invoicing',
    title: 'Invoicing',
    icon: DollarSign,
    description: 'Create estimates and invoices, and integrate with your accounting software.',
    features: [
      'Create estimates and invoices',
      'Build price groups for repetitive jobs',
      'Sync with QuickBooks'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
    isVideo: false
  }
];

export interface FAQ {
  question: string;
  answer: string;
}

export const betaFAQs: FAQ[] = [
  {
    question: "What's included in the beta?",
    answer: "The beta includes access to all core features of Heartland Workforce, including project management, employee management, dispatching, and invoicing. You'll get to test and provide feedback on these features as we continue to improve the platform."
  },
  {
    question: "Is it really free?",
    answer: "Yes, the beta program is completely free. We're focused on gathering feedback and improving the platform before our commercial launch."
  },
  {
    question: "How long will the beta last?",
    answer: "The beta program is expected to run for 3-6 months. Beta users will be given advance notice before any changes to the program."
  },
  {
    question: "Will my data be secure?",
    answer: "Yes, we take security seriously. All data is encrypted and stored securely. We follow industry best practices for data protection."
  }
];