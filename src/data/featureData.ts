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
    // If the image is in the public/assets/images directory, this is correct:
        image: '/src/assets/images/projects.png',
    
    // If you want to import the image as a module, use:
    // import projectManagementImg from '../assets/images/project-management.png';
    // and then:
    // image: projectManagementImg,
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
    image: '/src/assets/images/leads.png',
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
    image: '/src/assets/images/employees.png',
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
    image: '/src/assets/images/dispatch.png',
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
    image: '/src/assets/images/inbox.png',
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
    image: '/src/assets/images/docs.png',
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
    image: '/src/assets/images/invoice.png',
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